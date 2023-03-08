'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c7de43554201d177e87f9f19e910ec8d",
"index.html": "d4a1754cae190ba14baac8c9e7a0f3ca",
"/": "d4a1754cae190ba14baac8c9e7a0f3ca",
"main.dart.js": "207cbbedc2606527383e076ac4cc6043",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "8870bb75e886d15eb7cf0c6039cf4d02",
"icons/Icon-192.png": "7f51d22ec903d6a8e33e2f1165d21325",
"icons/Icon-maskable-192.png": "7f51d22ec903d6a8e33e2f1165d21325",
"icons/Icon-maskable-512.png": "c4357bd9821355fe7cfdc9ed2cf1df0b",
"icons/Icon-512.png": "c4357bd9821355fe7cfdc9ed2cf1df0b",
"manifest.json": "1b6bef23e4ead08184062573472213fc",
"assets/fstracking.json": "8d591f6962f1e9ace5570c5426cb48b4",
"assets/AssetManifest.json": "95b8747cd919a057cefaceed49a6fbe4",
"assets/NOTICES": "bf8d654a0315c09ac336da12fa0343ff",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/logo/logo.png": "41b5d5a0dc67b40d038b865ee15f4b70",
"assets/assets/logo/logo-with-text.png": "12c3912d83faaa83d2146adc9b2d3c4b",
"assets/assets/icons/022-package.png": "66629f3fcbf685aceff8892c239125f8",
"assets/assets/icons/005-cargo.png": "2637f7c71674adea7de7d83ddfcaa397",
"assets/assets/icons/038-warehouse.png": "88fd645cccd138bba68cd668024d52c5",
"assets/assets/icons/027-search.png": "74b93bffb06cd0020bb363883fcfe5a7",
"assets/assets/icons/025-postal.png": "0029b0e5e23e392d19c0650579d8f549",
"assets/assets/icons/031-truck.png": "d47f53f0ee893e62b6ce0e91d81c9ddd",
"assets/assets/icons/012-door.png": "cbc53774129c457e2115fc2f984f69d9",
"assets/assets/icons/004-truck.png": "f94cbebade3885ccfe1e0263abb60173",
"assets/assets/icons/021-package%2520box.png": "5f39461018c64bcd040e93731f4f8aa3",
"assets/assets/icons/026-scale.png": "36fd88046e8ca4bb7fe4f00809ebb63f",
"assets/assets/icons/010-list.png": "96294d65b9d3e2f9c1329cf01d2cae22",
"assets/assets/icons/036-truck.png": "b2ae23949553c782bf919e925e673f46",
"assets/assets/icons/001-barcode.png": "5e41f9e11096f5cf5364c7d98bea2f88",
"assets/assets/icons/003-package.png": "c1761d3a09a511b0613fea1fa338bf6d",
"assets/assets/icons/007-list.png": "25ebb763014cc9f74eb15e1bf04daef0",
"assets/assets/icons/017-storage.png": "ef83cb166189b52d9b966d1909e19967",
"assets/assets/icons/023-phone.png": "6cdec37444816138ec43d0ccc6b68ac6",
"assets/assets/icons/011-delivery.png": "771744d6410ec86ee69287fd83606d36",
"assets/assets/icons/016-location.png": "c8dd93e6b65903d15f7910213f0db4fb",
"assets/assets/icons/035-truck.png": "8a36d094ef4613460fb7e995e3d2cdb2",
"assets/assets/icons/028-shipping.png": "1f700b4257caebbde8acaab4a17fba0c",
"assets/assets/icons/018-courier.png": "83ffd0af7923874331a6f39e98a50c6e",
"assets/assets/icons/006-delivery.png": "eb6dafd58998bec6eba10714ce5873a5",
"assets/assets/icons/030-train.png": "103caa7260e109b6c836d954f3a85cdd",
"assets/assets/icons/008-list.png": "ab3842040d16f2eff47a6f4282dee989",
"assets/assets/icons/009-list.png": "2e4b2233d13e3cd78c4946a89031f563",
"assets/assets/icons/037-umbrella.png": "4be4163229409f9ee7d2933cb88b1817",
"assets/assets/icons/033-truck.png": "075470318bdb8b695323f515aef2b885",
"assets/assets/icons/024-pin.png": "8f4cdeeefc65b4b2f379c140881789f1",
"assets/assets/icons/034-truck.png": "384413cd31534b49af14b62cbc01f2fd",
"assets/assets/icons/status7.png": "88fd645cccd138bba68cd668024d52c5",
"assets/assets/icons/013-exchange.png": "8efad4605bb6836de402a03b6f4e861f",
"assets/assets/icons/020-package.png": "3d75c149b98346a6a10ab36ae57605e0",
"assets/assets/icons/status6.png": "4be4163229409f9ee7d2933cb88b1817",
"assets/assets/icons/status4.png": "f94cbebade3885ccfe1e0263abb60173",
"assets/assets/icons/014-fragile.png": "cd5729c66c5ae96f1a6a3d017465d47a",
"assets/assets/icons/status5.png": "2637f7c71674adea7de7d83ddfcaa397",
"assets/assets/icons/029-tracking.png": "4cc2bf8ce372f01dddff20343e323e6a",
"assets/assets/icons/status1.png": "5e41f9e11096f5cf5364c7d98bea2f88",
"assets/assets/icons/002-package.png": "c6603095da82aa9029fdca0e9b6e8491",
"assets/assets/icons/032-truck.png": "61a2bdd045526ba3dbcda6c056bfec5a",
"assets/assets/icons/019-delivery.png": "d24ecaca9b2129f50def7a142d7e6934",
"assets/assets/icons/015-laptop.png": "469cb9d8ec318290fc4720ab7dbfc1b0",
"assets/assets/icons/status2.png": "c6603095da82aa9029fdca0e9b6e8491",
"assets/assets/icons/status3.png": "c1761d3a09a511b0613fea1fa338bf6d",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
