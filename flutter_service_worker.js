'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4d36d36cfd05ea07afe179514d710b4a",
"assets/AssetManifest.bin.json": "9c2e88c210d58b21b3eb9967bfed3959",
"assets/assets/fonts/Inter_18pt-Black.ttf": "b797a429ef21b9b7d44b96038cdb10f2",
"assets/assets/fonts/Inter_18pt-Bold.ttf": "7ef6f6d68c7fedc103180f2254985e8c",
"assets/assets/fonts/Inter_18pt-ExtraBold.ttf": "a6ed481bff60bc9270904d214947ab13",
"assets/assets/fonts/Inter_18pt-ExtraLight.ttf": "2c6c78d98816958b53fea58451f921d3",
"assets/assets/fonts/Inter_18pt-Italic.ttf": "ab4004692577ac82604c777fa83da556",
"assets/assets/fonts/Inter_18pt-Light.ttf": "dfaec8b8820224135d07f1b409ceb214",
"assets/assets/fonts/Inter_18pt-Medium.ttf": "8540f35bf8acd509b9ce356f1111e983",
"assets/assets/fonts/Inter_18pt-Regular.ttf": "37dcabff629c3690303739be2e0b3524",
"assets/assets/fonts/Inter_18pt-SemiBold.ttf": "e5532d993e2de30fa92422df0a8849dd",
"assets/assets/fonts/Inter_18pt-Thin.ttf": "6f2d2f41f504aee66da88684f15d7e1d",
"assets/assets/icons/arrow-left.svg": "02ac03fd3aaa2356191dc17b247b3fcc",
"assets/assets/icons/bottombar/Icon%2520Broadcast.svg": "0b1b561bc264bca40a215301b13324fe",
"assets/assets/icons/bottombar/Icon%2520Home.svg": "4ba355879edd76eac143d23c3b561869",
"assets/assets/icons/bottombar/people.svg": "0593ee86533a5c92aa2aaeecd9f87d91",
"assets/assets/icons/drawerIcons/81.png": "08425151384d9cc338affb973fc442df",
"assets/assets/icons/drawerIcons/Avatar.svg": "2f8bbf3632b2bb82f39746b5bf3a8a56",
"assets/assets/icons/drawerIcons/gallery.svg": "bdd4d0a083a7fc60f6d4b464a695d495",
"assets/assets/icons/drawerIcons/Icon%2520About%2520Party.svg": "8c4acfbb22899227e64624d5d87b8fc5",
"assets/assets/icons/drawerIcons/Icon%2520Add%2520Leads.svg": "22f8540bfa5a4f66f68c8c1eb627d5c8",
"assets/assets/icons/drawerIcons/Icon%2520Clock.svg": "d6b7ac1e1514ce17040984e80b7faa54",
"assets/assets/icons/drawerIcons/Icon%2520Dashboard.svg": "b2be1d2f26192f57b5362d58a8b86393",
"assets/assets/icons/drawerIcons/icon%2520Election%2520.svg": "530d379d2571b9663b106cc32f794eb4",
"assets/assets/icons/drawerIcons/Icon%2520Leadership.svg": "d55b0a1a98daa4a9da05a06e70421a19",
"assets/assets/icons/drawerIcons/Icon%2520Nete.svg": "309e6f187ef730c4751edc8347f7bd77",
"assets/assets/icons/drawerIcons/Icon%2520Party%2520Wings.svg": "685844e2bca6d90a6ca2a50e73f1d1d4",
"assets/assets/icons/drawerIcons/Vector.svg": "ce8e12fd948778703100932bbd2a5341",
"assets/assets/icons/facebook.svg": "e23f3bd8171bde58e25505d74bf5fe82",
"assets/assets/icons/Icon%2520Chevron.svg": "16d60cc5caca7c142a0e63d7a156b45c",
"assets/assets/icons/Icon%2520Clock.svg": "dced735b49c1e62fd3e1e5f5bdbbb8b3",
"assets/assets/icons/Icon%2520Download.svg": "1911cfc62b4e70932f9372f345070ec4",
"assets/assets/icons/Icon%2520Location.svg": "707d397628234fa9d6cca4ce28bf56ea",
"assets/assets/icons/Icon%2520Menu.svg": "dc87ddcbd68275e43bd695cf25336dae",
"assets/assets/icons/Icon%2520Notification.svg": "65a730146742cfad976e63bfa9911c01",
"assets/assets/icons/Icon%2520Search.svg": "5aa0de525d02bf45321a73a65f0225c6",
"assets/assets/icons/Icon%2520Share.svg": "577aa63cbc91659c7923d34774c2635e",
"assets/assets/icons/Icon%2520Twitter.svg": "a131bc3f2e5dd911be117164c47fd842",
"assets/assets/icons/Icon%2520Video.svg": "2c081d5782615c735c200952db8f8d8b",
"assets/assets/icons/images/0.jpg": "71b7451c03bf969c6f287f76595363a7",
"assets/assets/icons/images/1.jpg": "95e5b73b0ea79c7f4432856d09ef5ea4",
"assets/assets/icons/images/10.jpg": "56b3e56af9c899212bb820628f5eb159",
"assets/assets/icons/images/11.jpg": "18a94fca60bf62b126570e8fd0dcef29",
"assets/assets/icons/images/12.jpg": "ea97b12c61fb61e38ae36af7471c76fe",
"assets/assets/icons/images/13.jpg": "9f2bfd4cabe8aa4c423e3286b3a4b26e",
"assets/assets/icons/images/14.jpg": "359b69eaccc357f8a26e68f53f9910ee",
"assets/assets/icons/images/15.jpg": "9a7d484a39b48399a133d1c06b238099",
"assets/assets/icons/images/16.jpg": "c41175007e89a53a30182ce054470a01",
"assets/assets/icons/images/17.jpg": "8d5b0ee22ef61c63430722c018f5536d",
"assets/assets/icons/images/18.jpg": "c2e359d249f5df52da9d4bad8e318166",
"assets/assets/icons/images/19.jpg": "9b8049469c0071294846d28753b5da95",
"assets/assets/icons/images/2.jpg": "ec6921fa40a2d67447d7676dec245ca7",
"assets/assets/icons/images/20.jpg": "522b10950b42a81ae2740ed01a543aca",
"assets/assets/icons/images/21.jpg": "98d17bc8c5bef9992488811cb5a70b0d",
"assets/assets/icons/images/22.jpg": "98786cd057e467cff209b24b722c7300",
"assets/assets/icons/images/23.jpg": "33ee2f1b7bad2944d60b04134705c4c0",
"assets/assets/icons/images/24.jpg": "a9a441f0abad3aa9e130b0688d0eb4c5",
"assets/assets/icons/images/25.jpg": "b3ed05e650ca4079cb6715cc2279bd2a",
"assets/assets/icons/images/26.jpg": "b4d538e632239b8be5878718309e5fef",
"assets/assets/icons/images/27.jpg": "48b925e4eddacd22d50143e092a2de85",
"assets/assets/icons/images/28.jpg": "d992d976fca05b7847fe630a3bd02b63",
"assets/assets/icons/images/29.jpg": "697ee8cde16de755df41dad26543f12e",
"assets/assets/icons/images/3.jpg": "8d3d6b13c73c83a8299e2b65ae4cee2c",
"assets/assets/icons/images/30.jpg": "4f09ece14af6a292fd622e8f98e9c29c",
"assets/assets/icons/images/31.jpg": "320c2e7812c0279b6f66da276b4bdb69",
"assets/assets/icons/images/32.jpg": "afa99a42b13c20b5466d8b83bba22d63",
"assets/assets/icons/images/33.jpg": "6eb05a0cb2f9559b8e86d1e753791cd5",
"assets/assets/icons/images/34.jpg": "b8234491ac15e06d3e2ebe8fbbe983df",
"assets/assets/icons/images/35.jpg": "5c9f9624859296cd3773e36a6f3a88cc",
"assets/assets/icons/images/36.jpg": "71dc4e3eb1c14d8eaa0481c8ed04b05b",
"assets/assets/icons/images/37.jpg": "57aa14fc746a06e331a0cdd9e28ba460",
"assets/assets/icons/images/38.jpg": "40c4f69a10333ea872fefa3ced648f08",
"assets/assets/icons/images/39.jpg": "d8ee63a866cd3f19047d6ce9d29bf329",
"assets/assets/icons/images/4.jpg": "d874eece67641a8db55ee4d0c8e9de22",
"assets/assets/icons/images/40.jpg": "759d90a07391e060090672f7afb4df37",
"assets/assets/icons/images/41.jpg": "69ba864852c188ad235b613ef2b3c97f",
"assets/assets/icons/images/42.jpg": "e449577a6ef1e2633c872bab389cc830",
"assets/assets/icons/images/43.jpg": "61ae20503dfedc9b2d8566771b5e5e89",
"assets/assets/icons/images/44.jpg": "7b1778a323be92789b4acc563dcce7d5",
"assets/assets/icons/images/45.jpg": "b54c4490c6e68153d518518b460b4d96",
"assets/assets/icons/images/46.jpg": "a47216c50022f926810d42272b61eb39",
"assets/assets/icons/images/47.jpg": "cde492eca4dd939fdf8eb506055a9cef",
"assets/assets/icons/images/48.jpg": "ff1291a0b59c32d4073f46a2b29582e0",
"assets/assets/icons/images/49.jpg": "c65456cb6bda38102c9ad4bad2621e9c",
"assets/assets/icons/images/5.jpg": "4126ab52191335c677d2c9bded2c9ce1",
"assets/assets/icons/images/50.jpg": "c9767509289cf58a05c7f725f5b420b3",
"assets/assets/icons/images/51.jpg": "e0a6c5637ae3752883143981d204b580",
"assets/assets/icons/images/52.jpg": "2bd6b9bbdd36201c3deadd9a6bb53475",
"assets/assets/icons/images/53.jpg": "716073af5d0072d9f5146021e17b4a5e",
"assets/assets/icons/images/54.jpg": "50a59ff4f7bc0f9006766c275f0fcc8e",
"assets/assets/icons/images/55.jpg": "6765fc3aa16666344fc07c692e98652f",
"assets/assets/icons/images/56.jpg": "9a78aee646d42dbe5b507ec2cfb4a470",
"assets/assets/icons/images/57.jpg": "44721c726efe4af6a6f2b25fcaab5a7e",
"assets/assets/icons/images/58.jpg": "19a8d449a05965409ba50e949d1f5143",
"assets/assets/icons/images/6.jpg": "6d95444fec9e9b419711ddb8f213bbf0",
"assets/assets/icons/images/7.jpg": "3ee717aff3bac49adce5b514312a1037",
"assets/assets/icons/images/8.jpg": "1c34ef716129ded63eee8f41f1b1491d",
"assets/assets/icons/images/9.jpg": "2cbba22e99ff9f13ab3f06cc8414e154",
"assets/assets/icons/images/child_educaion.jpg": "7ed53c7b83e08c9446402434a384ed08",
"assets/assets/icons/images/dhangar_arakshan.jpeg": "d2842a52d9ea026acfe65fc672fb3eb2",
"assets/assets/icons/images/pustak_vitaran.jpeg": "5564ce97ce45604868399a24bb7ecb76",
"assets/assets/icons/images/pustak_vitarn1.jpeg": "77c3950bb2be2284b37c79986b6333c7",
"assets/assets/icons/images/tarun_bharat.jpeg": "504c17ed991eec2b5baeef6b73ebf60c",
"assets/assets/icons/images/Vector.png": "2923e5b760be20c849d1cf3c2c56b91f",
"assets/assets/icons/images/vf_logo.png": "26cfa7e4d7d39defbccf5694bdc1c052",
"assets/assets/icons/logo_shivsena.png": "16319c3c77f196a6eb1d2afa3552dacf",
"assets/assets/icons/lottie/noInternet.json": "de21c81e7deadf2bd03e0c72ad22e090",
"assets/assets/icons/message.svg": "67592224328d5d97aea404eb0f3ac52d",
"assets/assets/icons/Official%2520Icon.svg": "3dec1dcbbc6dd7a386851e45c6dd9e4f",
"assets/assets/icons/search-normal.svg": "ad49b2620b30aa2e01f7219eb89f5a79",
"assets/assets/language/content.json": "a809777055bdcd97afef92b0fd3e08b7",
"assets/assets/language/en.json": "43bdc7e38ed626d7ac8add5e11954d5a",
"assets/assets/language/mr.json": "8abeb223eefaf4fda33392f3dd0b6388",
"assets/FontManifest.json": "d7ff41b49866f565a9fd89d55ac7a996",
"assets/fonts/MaterialIcons-Regular.otf": "2d1ff574a1cb3853bce7978eb54e8bf8",
"assets/NOTICES": "930013166b83a6b2ad6307e2f9bf4029",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "070df48d385fcdf82140f5b467d7d024",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "e386703eb6113a49a32aea47e2deaca4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d3063e75bd66328f1d28a1838b4efd49",
"/": "d3063e75bd66328f1d28a1838b4efd49",
"main.dart.js": "aec970835e4135150339cad6ffa268a0",
"manifest.json": "34a703c6475c000ffb8866caba3faf23",
"version.json": "639a4138ed2abd6109c843b6e08f66b5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
