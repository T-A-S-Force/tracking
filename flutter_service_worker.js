'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c7de43554201d177e87f9f19e910ec8d",
"index.html": "111f2793946cb4dd19ba14d186fe6731",
"/": "111f2793946cb4dd19ba14d186fe6731",
"main.dart.js": "3858e5cec78b10892f6639d3fdcd59a2",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "8870bb75e886d15eb7cf0c6039cf4d02",
"icons/Icon-192.png": "7f51d22ec903d6a8e33e2f1165d21325",
"icons/Icon-maskable-192.png": "7f51d22ec903d6a8e33e2f1165d21325",
"icons/Icon-maskable-512.png": "c4357bd9821355fe7cfdc9ed2cf1df0b",
"icons/Icon-512.png": "c4357bd9821355fe7cfdc9ed2cf1df0b",
"manifest.json": "1b6bef23e4ead08184062573472213fc",
"assets/fstracking.json": "4584f1ecdb720a12fcd374f84acc55dd",
"assets/AssetManifest.json": "d37e195aa1627acf42498d7f27b4fb0d",
"assets/NOTICES": "f6d799f6f5607ad30317eb967581cf26",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/logo/logo-with-text.png": "6f96841128625fe4cfbb327df0708467",
"assets/assets/icons/status6.png": "5040594004363629002aec435e289c67",
"assets/assets/icons/status4.png": "07c6ef9a0abfe5438c72173794446d1d",
"assets/assets/icons/status5.png": "b79748867d6b94708a976f7c955ff4bb",
"assets/assets/icons/status1.png": "9b0dde0f89408dc199fc9700c299abe1",
"assets/assets/icons/status2.png": "b62734703682c682231ca3fe2f90dc45",
"assets/assets/icons/status3.png": "5498930c54110835d2df47b0b96a080d",
"assets/assets/google_fonts/OpenSans-SemiBold.ttf": "984b9097c910bf2f182889707e2e4cbe",
"assets/assets/google_fonts/OpenSans-Light.ttf": "0652ba43f7a92220fbc18a5519fbf2c1",
"assets/assets/google_fonts/OpenSans-Italic.ttf": "90f74e681980c2ef280a3d24006e5b35",
"assets/assets/google_fonts/OpenSans-MediumItalic.ttf": "7e93c9a251c09d9984721aeb3bd8f976",
"assets/assets/google_fonts/OpenSans-ExtraBold.ttf": "8fd58ae86936600201df265f1112a014",
"assets/assets/google_fonts/OpenSans-LightItalic.ttf": "c0d0b7abb91323f27be4a42269f31ef1",
"assets/assets/google_fonts/OpenSans-Bold.ttf": "ff615c954fc5485fb3757516721b41ff",
"assets/assets/google_fonts/OpenSans-SemiBoldItalic.ttf": "d94afe8b2ccf8210aac58024276bcc06",
"assets/assets/google_fonts/OpenSans-Medium.ttf": "7a56b1bba54be9caf32f096d8224a492",
"assets/assets/google_fonts/OpenSans-ExtraBoldItalic.ttf": "7f86cc2636f0adadc0dec52009c0545f",
"assets/assets/google_fonts/OpenSans-Regular.ttf": "58b1f440729d267697bddcddb994bce9",
"assets/assets/google_fonts/OpenSans-BoldItalic.ttf": "f288e82f90d27a27ba22a4c0561896f8",
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
