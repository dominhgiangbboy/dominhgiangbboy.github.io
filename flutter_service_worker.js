'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "04a9911f070e57e6b448c0426458f1a3",
"index.html": "e37de5dad884c807170203ea0d4ecc80",
"/": "e37de5dad884c807170203ea0d4ecc80",
"main.dart.js": "c5332ed5be26454dd07cffa3e4e24336",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "a1d4d6d4f279f3adc19f1ba7d1b619c9",
"icons/Icon-192.png": "15288237745d29af897034cd7ce66c07",
"icons/Icon-maskable-192.png": "15288237745d29af897034cd7ce66c07",
"icons/Icon-maskable-512.png": "1cb48022dc56bc67fd03f07c9b99976b",
"icons/Icon-512.png": "1cb48022dc56bc67fd03f07c9b99976b",
"manifest.json": "adaecaa99ab6373d6df1cedd79d4c14e",
".git/config": "d29c677dfcc4c882a423c31c58e6ba0b",
".git/objects/92/41898a70dce11b998400fd2bfa4f7037db414f": "dee71c315490c146adf109ea2f30bcdb",
".git/objects/0c/85c92c173c19cc0ed17425a785e21ce71acad8": "50090f471959e98c084b34b05e993009",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/29ace4b84ca1830f230ed45a2f55172077fb7a": "746fc91a5cf3e616587f180787e15e8f",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/67/8c279dc7990bfe5993c082533a95def77a3fc5": "6a72c9f702d73cdd0c7cd61ea85e56c2",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/93/5909b5e0afcb0f461a4c6a2b0a70eb003d7aa3": "900bf3ab62971f0e03ab062144fbb85f",
".git/objects/60/31f0befce044d7bb60ac07cae326236f1000ee": "ea92ad2d9981a90c0b17e267d40fb134",
".git/objects/9c/20e4ee37d881d7c98ca653f551cbe05fb15f7e": "a1a2882c92ea1da49bcffeb9545ca824",
".git/objects/b5/29a1d89be1ed07bc1968d8a8db28d2f282a087": "e07f2a4c04f424380196f9e6d2cb6877",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/ac/bad1eff4c4f89b7b85aa8fbcd4cefeacc7530e": "28dd8a270a0c32f4b245564d90dd5b53",
".git/objects/bb/30fde406978099b5e6feb770db8817fad04581": "c24ffbdfa79e28b583077f7548f9d60d",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d1/d375fcdabd0fe3b52e31c45642275e96a6e455": "7dacf5cddc8cb3167ace0de70ebf4d3d",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/16/1327cede35787f2fe59e1d2ade5af5d7276ba6": "386aed38a29bc6b607ed50b2982f68c8",
".git/objects/16/cbab7214d5036abfea2d386b0ac3a29ca086d6": "e000ab19137495e2b33db7a98046a485",
".git/objects/73/c2026cb36cd4d64521c9dbbf9a6fd109bfbb3b": "7c476f2f561c68938533554e3d5d4ec0",
".git/objects/1a/f6ca0ed0ed4c9fe90e862394d7e072e583fc67": "c9ee65c96de564cee3c626a1f5027ef7",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/19/96ff6b6f5200e000ac898aa620e7b44d0d5522": "8d19f2be61abfdf16d3b3197a0b23a08",
".git/objects/21/bad6c1909da7ab4eb9a08e7cb619e9696f0b8d": "3ac651cd18e56620cc985458b013855b",
".git/objects/75/bdb425f6c951c5b58d997363c112e46a8c9fa9": "222dd5f69df791614bdf3f422942d833",
".git/objects/38/1de9500340a9e820746e4927034513c3745abb": "57dd10e5edb0dfc6efd7adc5c2235ba7",
".git/objects/36/64f8e8b9058558a031135b9599c6c2d1d04fd5": "3b9689e95c117f02b04bcc985dc173a4",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/3f/c053ec2c19568b600ae50a4dcc5b89646f8f85": "c104c42bcc6b535636b2a776b8970ed5",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/0f/3d5a8927ba491bba762bd95ae29fdf92d1f139": "4f7816072f561fd0ce7c0188c2b7455a",
".git/objects/d3/f70e8f0e261edc30d55f3083708c51f3d6ef18": "66fa0a183b1ce1529666498a57a8ddd4",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a0/e9a959671caa526afad7fccec007a1ea814379": "2408a54059fbfb918e81c72c5b28793f",
".git/objects/de/825c6802b42dd1a25464181631fbe5a0d8973b": "27db9b8b9e87d05b01e0290ab9bf1b8f",
".git/objects/b0/3087d1772487f0bfc8616381277866bf54adf8": "852ebda017812f76dcd210d9972b0188",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/31c05e1f92f7aa3c56c5f7d0230217d17f83bc": "ee3252d3c00a928ffde8ced8c2f206fc",
".git/objects/41/c2872a9f28baf04694ee19b2bf25fbc51f0905": "7120d2b210027d87ea7ed91b983e933d",
".git/objects/77/e22711531aa6cd5e7e4f9ac278fa242d451b0c": "f8d7c99a2570ff180f239e76070ec546",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/71/57e6e50767b6eb6f72e84dc5e3e40f1e9508ed": "e15adbe6de7cf491a2a83b7585cf80f2",
".git/objects/49/bf91f4a1b3fbe3204dd27f5431079db27555ae": "a9d52e89155baea73e4d79c4f23fa769",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/22/55eafab324fbc3a048e7fd8708bf789b923d83": "5a4b9ee50ef3f0c24bf71823c9c51e44",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5a66145831ee302ab81f4aa2092bc642",
".git/logs/refs/heads/main": "dd704ecc7f5b2eb90c1bc5b3e8a4a0f9",
".git/logs/refs/remotes/origin/main": "68fb56befd1380b8539984736185623e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3249b0b8d4c8c76eab7273799a36ac3c",
".git/refs/remotes/origin/main": "d56693ac06763d650d957a8b49b4c6bc",
".git/index": "734c82794a65918fc726ff9aadef04b0",
".git/COMMIT_EDITMSG": "cab12a481e31c99a08a88f42d68a6ed0",
".git/FETCH_HEAD": "cd3c07d89ae94042003f68f49dc9698e",
"assets/AssetManifest.json": "709ace650a4daa0c5d3c9bf9a3fe6ca2",
"assets/NOTICES": "a39704146dcf91c926b3625734b906ed",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/icons/icon.png": "edd08ec6d4baeb1fbd0d375a13c6b27f",
"assets/icons/ic_linkedin.svg": "908a27fb7de523f53522714032d086f1",
"assets/icons/ic_telegram.svg": "8674890bbfe9ac4a9a717f359a3fa3eb",
"assets/icons/ic_github.svg": "b28b55f56fbe0768dd0f966fa3d9ab67",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "95d8bdfdb99a0f2f471d09c8386837e8",
"assets/fonts/MaterialIcons-Regular.otf": "b7feb26f3a968e1ec44f963d9110ed1b",
"assets/assets/icons/ic_second.svg": "384e733b35efacbe7ed9bd83ac9a80ea",
"assets/assets/icons/icon.png": "edd08ec6d4baeb1fbd0d375a13c6b27f",
"assets/assets/icons/ic_first.svg": "e1289536be8435b7426625facaac4493",
"assets/assets/icons/ic_linkedin.svg": "908a27fb7de523f53522714032d086f1",
"assets/assets/icons/ic_third.svg": "3704649ea18b7ed9b90174cf4de5ca0c",
"assets/assets/icons/ic_telegram.svg": "8674890bbfe9ac4a9a717f359a3fa3eb",
"assets/assets/icons/ic_github.svg": "b28b55f56fbe0768dd0f966fa3d9ab67",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
