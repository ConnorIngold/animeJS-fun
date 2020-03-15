var CACHE_NAME = "my-site-cache-v1";
const assets = [
  "/",
  "/index.html",
  "js/function.js",
  "js/app.js",
  "css/index.css",
  "img/placeholder.jpg",
  "https://fonts.googleapis.com/css?family=Heebo:300|Playfair+Display:400,700&display=swap"
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function(cache) {
        console.log(
          "Opened cache"
        );
        return cache.addAll(assets);
      })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});