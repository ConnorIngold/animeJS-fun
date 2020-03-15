const cacheName = "FuckIE";

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache
        .addAll([
          // first url is important (check network tab)
          "https://connoringold.github.io/animeJS-fun/",
          "/app.js",
          "/index.html",
          "/js/function.js",
          "/css/index.css",
          "/img/placeholder.jpg",
          "https://fonts.googleapis.com/css?family=Heebo:300|Playfair+Display:400,700&display=swap"
        ])
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response; // if valid response is found in cache return it
      } else {
        return fetch(event.request) //fetch from internet
          .then(function(res) {
            return caches.open(CACHE_DYNAMIC_NAME).then(function(cache) {
              cache.put(event.request.url, res.clone()); //save the response for future
              return res; // return the fetched data
            });
          })
          .catch(function(err) {
            // fallback mechanism
            return caches
              .open(CACHE_CONTAINING_ERROR_MESSAGES)
              .then(function(cache) {
                return cache.match("/offline.html");
              });
          });
      }
    })
  );
});          