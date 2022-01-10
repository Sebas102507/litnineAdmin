'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "778fbb8fe0c3448850b58caf98af9918",
"index.html": "66bfa65e0e91ab24fccaa6c84b52d8d3",
"/": "66bfa65e0e91ab24fccaa6c84b52d8d3",
"main.dart.js": "f01ee0f2abbf67f0d95b6b1f2110e1a5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "71d196c860d4675b570cadefe5a95faf",
".git/config": "861855f1b7972c3e17eb6412ad02e928",
".git/objects/92/fa472f89c149496095473cf9b9d9f85cab19c4": "f7d8920e2f588c647169ef81d78ff7a3",
".git/objects/50/9d59956f6c26f16d317f29db55a792deaccf52": "b737adf6489706e7d5593f2596b3571e",
".git/objects/03/2e04884a14348fa960de0d270d290adbd500ee": "ee7089ae81ab447a6d55de0dcda31c2b",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/51/d45942068a3fe24dc477433d9152d382828a4b": "c383e760d7382f6ee427eae4301e03cb",
".git/objects/94/8218209a1bdd4756bad1f5bd5642f822fc479c": "34b31cb5f198081e20741cd28458492d",
".git/objects/a4/7cddcb3c426cb97d85554dcda83926207305eb": "1250efa71386fa6de2acd917eb24323d",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/df/ec5eb3e5c56bdc2d8c627bf103600c5d519f48": "9e9bf081b8b07ec6e9c8558cdacfda24",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c0/99ba3778ce8e8d57a7196a1799cf1c34806c8b": "7873f4652a948176ffcd5a3de6b6d3f2",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/42/fb23d2937e113770d76f2e632e27b0ac57f722": "7dd7294be3678da277c56c40e5b35bc8",
".git/objects/87/74f11199ef8693416f56a233e6b2e79f44256f": "fce89da7d251109ae162bf6bea07f403",
".git/objects/80/3694b427cad21dcf8b5cc6a1bb02976b2bce28": "611e211330ac2b441f842d52ebd1cdb9",
".git/objects/17/5d4e87538dbacf2d5772648cae4b33b0656d68": "f11f5f1fb79c93e0108639a7f65cfc3c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/95a0abe6dce9b3b7ec6ad85cfc91ef8df8cfe4": "4f7e5a39f655f397e855b1518cf04038",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/62/11bf1a9707b4236160a5cd592585c827256121": "6a8d8eea37422d1caffda5e8eb8e4876",
".git/objects/08/28f91a10008286c49f0cf780229048dab2c48a": "3632d4ad52830da6e77806d61c337940",
".git/objects/a9/2007c4555631260f0b524927f0c70ec4b12558": "df3026f9cd78bca40fa48780ab269a30",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a6/be55208199218ce3631ef84561453598a91f0d": "78345ad053800ed754629cca1f575669",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/3d06256f17335fe32adfb540a505cf38522764": "803aea4f1a98efb8b0aa2050d6b71bb6",
".git/objects/c5/6d57efac8d0ff0e8a6e2019885e903c9fbcf1b": "154833944debbe28f785a2eee383a104",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/1b/6d6d795d8cf4b310eb27270033b01d2e56f6ff": "d4ec5867a2ee168d45e004a81d1f3001",
".git/objects/84/dcfd366422bc7262284268c79c16d01ac3b59e": "05d44a328d481ca87cf879ba8312df8e",
".git/objects/2e/3c60a0158a36fecdb44f42cf315669f91b1b23": "6f052a2fca735bf6f624638929555f53",
".git/objects/2b/0196f5814f73cd7d54004dd838ede111771f70": "3932702093f85d91adf599e1ee0e1437",
".git/objects/7f/865660b26c27d7b27245e007401a147d871091": "b77dffcb60821b22ac5bafaeb874a7d3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c6f0c9b4c453f05d681ce53484d1ebba",
".git/logs/refs/heads/main": "e9d85fd1ec13af6e7ea12552b40fbfbb",
".git/logs/refs/remotes/origin/main": "d3fa3f69a3b470327be4c94bf612059c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "182588d48d9af4cd93adcb7a3e410fe8",
".git/refs/remotes/origin/main": "182588d48d9af4cd93adcb7a3e410fe8",
".git/index": "4759577b4f639634efcb82d2ff7254e1",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "9d86c122f5d749df8253dd5a562c450a",
"assets/NOTICES": "6cb50f249f47de9cfdf957987fb46245",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/AgradecimientoCompra.html": "c2149d458728283a56ba57420285bfbe",
"assets/assets/IconoCargando.png": "cd42942e5f8649c4eae7f178d2aced16",
"assets/assets/BienvenidaCliente.html": "71e4cb2ed801a9947ea6384be63333fd",
"assets/assets/CorreoPedidoTienda.html": "517f5339b9570955c961b46127688313",
"assets/assets/LitnineLogoGreenWithoutName.png": "d44b236439b0b01a644fa5abcd486557",
"assets/assets/whatsapp.png": "047a9fcdda569235d20fe7be65a0cb5e",
"assets/assets/celebrate.png": "0b8f2e6ef4a2ae6ea4f49079f50a231c",
"assets/assets/SoporteImagen.png": "40a7dcabdfd9814b43668f7560d289bc",
"assets/assets/ImagenInicio.png": "412bb01f9532f0dca12530332024c13c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
