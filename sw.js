const cacheName = "FuckIE";

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache
        .addAll([
          "animeJS-fun/",
          "index.html",
          "js/function.js",
          "js/app.js",
          "css/index.css",
          "img/placeholder.jpg",
          "https://fonts.googleapis.com/css?family=Heebo:300|Playfair+Display:400,700&display=swap"
        ])
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches
      .open(cacheName)
      .then(cache => cache.match(event.request, { ignoreSearch: true }))
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
