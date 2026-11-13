/* Service worker for the Peptide Dose Calculator.
 *
 * Registered as sw.js?v=<release>. Each release installs a fresh worker that
 * stores that release's whole app on install, so the calculator opens and
 * works fully offline from the first visit on, and drops the previous cache.
 *
 * Strategy: the app runs from the device.
 *   - navigations (HTML): the stored page answers at once, online or not. The
 *     page itself then asks the network, in the background, whether a newer
 *     release exists and registers that release's worker (see index.html),
 *     which installs the new files and takes over
 *   - same-origin assets: cache first. Their URLs carry ?v=<release>, so a
 *     stored copy is always the right one and is never downloaded again
 *   - requests made with cache: 'no-store' (the update check) always go to
 *     the network
 *   - on the dev server (localhost) everything goes to the network first, so
 *     edits show up without a version bump; the cache still covers offline
 */
var VERSION = new URL(self.location.href).searchParams.get('v') || 'dev';
var CACHE = 'peptide-calc-' + VERSION;
var DEV = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(self.location.hostname);

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
      // pages come from the cache now; an earlier release switched preload on
      if (self.registration.navigationPreload) return self.registration.navigationPreload.disable();
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

  // the page's own update check must see the network, never the cache
  if (req.cache === 'no-store') return;

  if (req.mode === 'navigate') {
    if (DEV) {
      // straight from disk: a page from the browser's HTTP cache could be an older release
      e.respondWith(fetch(req.url, { cache: 'no-store' }).catch(function() { return storedPage(req); }));
      return;
    }
    e.respondWith(storedPage(req).then(function(hit) {
      return hit || fetch(req);
    }));
    return;
  }

  if (DEV) {
    e.respondWith(fetch(req.url, { cache: 'no-store' }).then(function(res) {
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
