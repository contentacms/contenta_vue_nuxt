importScripts('workbox-sw.prod.v1.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/0.nuxt.bundle.5680b7a960506f8cd9c2.js",
    "revision": "67481e8a6f5f9a7090df173bb1c4d1b5"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.0a5685937702c370244f.js",
    "revision": "98d92f38714caca43b1c1d8eefeb77ab"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.f0045773205d93c9fc39.js",
    "revision": "bd73b31735448f0fab9d02d2edf0db35"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.fdfbe50004513dffcf16.js",
    "revision": "bddbffc38fc52f1b517b888d22d66a58"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "9d436b3f524dc95b439c26d3e5a4d316"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.df653018f3dd463ac46f.js",
    "revision": "ece2a1434659e7163714fd89519c4e2c"
  },
  {
    "url": "/_nuxt/manifest.ec0cab88.json",
    "revision": "8f9eb6d2f7446e0dc30edb3f792108aa"
  },
  {
    "url": "/_nuxt/nuxt.bundle.d7d5a6ffcb12ac9a5c34.js",
    "revision": "322d69a4c7e6608c6d9b848d58f5ae8b"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "e34738b59d542a93b4b616398ed032e0"
  },
  {
    "url": "/_nuxt/vendor.bundle.ad611c574876b601bef0.js",
    "revision": "3c533dbb3977b40d6d015ecadf937367"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "contenta_vue_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
