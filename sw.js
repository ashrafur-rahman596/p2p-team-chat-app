self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('chat-pwa').then(cache =>
      cache.addAll(['index.html', 'styles.css', 'app.js', 'manifest.json', 'assets/icon-192.png'])
    )
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});