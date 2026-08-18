/* Service worker for the Peptide Dose Calculator.
 *
 * Registered as sw.js?v=<release>, so every release installs a fresh worker
 * with its own cache and drops the previous one. There is no precache list to
 * keep in step: the cache fills itself as the app is used.
 *
 * Strategy:
 *   - navigations (HTML): network first, fall back to cache when offline
 *   - same-origin assets: serve from cache, refresh in the background
 * Assets are already versioned via ?v=, so a new release requests new URLs and
 * can never be served a stale body from the old cache.
 */
var VERSION = new URL(self.location.href).searchParams.get('v') || 'dev';
var CACHE = 'peptide-calc-' + VERSION;

self.addEventListener('install', function(e) {
  // Seed the shell so a first-visit-then-offline still opens
  e.waitUntil(
    caches.open(CACHE).then(function(c) {
      return c.addAll(['./', './manifest.json']).catch(function() {});
    }).then(function() { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(names.map(function(n) {
        return n !== CACHE ? caches.delete(n) : null;
      }));
    }).then(function() { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e) {
  var req = e.request;
  if (req.method !== 'GET') return;

  var url;
  try { url = new URL(req.url); } catch (err) { return; }
  // Leave analytics and anything else off-origin to the network
  if (url.origin !== self.location.origin) return;

  // HTML: always prefer the network so a new release lands immediately
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(function(res) {
        var copy = res.clone();
        caches.open(CACHE).then(function(c) { c.put('./', copy); });
        return res;
      }).catch(function() {
        return caches.match('./').then(function(hit) {
          return hit || caches.match(req);
        });
      })
    );
    return;
  }

  // Assets: cache first (instant), refresh in the background
  e.respondWith(
    caches.match(req).then(function(hit) {
      var net = fetch(req).then(function(res) {
        if (res && res.status === 200 && res.type === 'basic') {
          var copy = res.clone();
          caches.open(CACHE).then(function(c) { c.put(req, copy); });
        }
        return res;
      }).catch(function() { return hit; });
      return hit || net;
    })
  );
});
