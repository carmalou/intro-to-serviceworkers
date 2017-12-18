self.oninstall = function() {
  console.log("LALALALALA");
  // globally accessable cache in service worker
  // you can have multiple caches and the same asset
  // asset fetched will be the last one added (last-in, first-out)

  // need to handle to someone going directly to page or just using website
  // example: carmalou.com || carmalou.com/index.html
  caches.open('cash').then(function(cache) {
    cache.addAll([
      'index.html',
      '/img/empirejs-carmen.jpg',
      '/'
    ]);
  });
};

self.onfetch = function(event) {
    console.log("LALALALALA13");
    console.log(event);
  // this will grab the very last request
  event.respondWith(caches.match(event.request));

  // caches.open('cash').then(function(cache) {
  //   cache.add(event.request);
  // });

  // for a specific request you can do
  // caches.open('cash').then(function(cache) {
  //   // whatever
  // });
};
