const CACHE_NAME = "sayonmart-v2";

const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );

  self.skipWaiting();
});


self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
  );

  self.clients.claim();
});


self.addEventListener("fetch", event => {

  // Firebase/Firestore request cache করবে না
  if(
    event.request.url.includes("firestore.googleapis.com") ||
    event.request.url.includes("googleapis.com")
  ){
    event.respondWith(
      fetch(event.request, {
        cache: "no-store"
      })
    );
    return;
  }


  event.respondWith(
    fetch(event.request)
      .then(response => {

        // সফল response হলে নতুনটা cache করবে
        if(
          response &&
          response.status === 200 &&
          response.type === "basic"
        ){

          const responseClone =
            response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(
                event.request,
                responseClone
              );
            });

        }

        return response;

      })
      .catch(() => {

        return caches.match(
          event.request
        );

      })
  );

});