/* Service worker for the Peptide Dose Calculator.
 *
 * Registered as sw.js?v=<release>. Each release installs a fresh worker that
 * stores that release's whole app on install, so the calculator opens and
 * works fully offline from the first visit on, and drops the previous cache.
 *
 * Strategy:
 *   - navigations (HTML): network first, but only for a moment; after that the
 *     stored page answers, so a new release lands right away when online and
 *     a slow or missing connection never keeps the app waiting
 *   - same-origin assets: cache first. Their URLs carry ?v=<release>, so a
 *     stored copy is always the right one and is never downloaded again
 *   - on the dev server (localhost) assets also go to the network first, so
 *     edits show up without a version bump; the cache still covers offline
 */
var VERSION = new URL(self.location.href).searchParams.get('v') || 'dev';
var CACHE = 'peptide-calc-' + VERSION;
var DEV = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(self.location.hostname);
var NAV_TIMEOUT = 2500;

// Everything the page needs to run. The page, styles and scripts must all be
// stored or the install fails and the previous release keeps serving; the
// icons are nice to have and may fail on their own.
var CORE = ['./', 'styles.css?v=' + VERSION, 'peptides.js?v=' + VERSION, 'app.js?v=' + VERSION];
var EXTRA = ['manifest.json', 'favicon.svg', 'favicon-32.png', 'apple-touch-icon.png',
  'icon-192.png', 'icon-512.png', 'icon-512-maskable.png'];

function fresh(url) {
  // skip the browser's HTTP cache so a release never stores an older file
  return new Request(url, { cache: 'reload' });
}

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(c) {
      return c.addAll(CORE.map(fresh)).then(function() {
        return Promise.all(EXTRA.map(function(u) {
          return c.add(fresh(u)).catch(function() {});
        }));
      });
    }).then(function() { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(names.map(function(n) {
        return n.indexOf('peptide-calc-') === 0 && n !== CACHE ? caches.delete(n) : null;
      }));
    }).then(function() {
      // start the page request while the worker boots
      if (self.registration.navigationPreload) return self.registration.navigationPreload.enable();
    }).then(function() { return self.clients.claim(); })
  );
});

function store(req, res) {
  if (res && res.status === 200 && res.type === 'basic') {
    var copy = res.clone();
    caches.open(CACHE).then(function(c) { c.put(req, copy); });
  }
  return res;
}

// The stored page of this release. It is never replaced by a page from the
// network: a newer page would point at files this cache does not hold.
function storedPage(req) {
  return caches.match('./', { cacheName: CACHE }).then(function(hit) {
    return hit || caches.match(req);
  });
}

self.addEventListener('fetch', function(e) {
  var req = e.request;
  if (req.method !== 'GET') return;

  var url;
  try { url = new URL(req.url); } catch (err) { return; }
  // Leave analytics and anything else off-origin to the network
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate') {
    e.respondWith(new Promise(function(resolve) {
      var settled = false;
      function answer(res) { if (!settled && res) { settled = true; resolve(res); } }
      function fallback() {
        storedPage(req).then(function(hit) {
          if (hit) answer(hit);
          else net.then(answer, function() { answer(Response.error()); });
        });
      }
      var net = Promise.resolve(e.preloadResponse).then(function(pre) {
        return pre || fetch(req);
      });
      net.then(function(res) { res && res.ok ? answer(res) : fallback(); }, fallback);
      setTimeout(fallback, NAV_TIMEOUT);
    }));
    return;
  }

  if (DEV) {
    e.respondWith(fetch(req).then(function(res) {
      return store(req, res);
    }).catch(function() {
      return caches.match(req);
    }));
    return;
  }

  e.respondWith(caches.match(req).then(function(hit) {
    return hit || fetch(req).then(function(res) { return store(req, res); });
  }));
});
