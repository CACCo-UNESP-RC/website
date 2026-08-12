const CACHE_NAME = 'faltas-pro-v1';
const ASSETS_TO_CACHE = [
    './index.html',
    './manifest.json',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
];

// Install event: Cache files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Fetch event: Serve from cache if available, otherwise fetch from network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            // Return cached version if found
            if (response) {
                return response;
            }
            // Otherwise, fetch from network
            return fetch(event.request).then(networkResponse => {
                // We can dynamically cache new requests here if needed
                return networkResponse;
            }).catch(() => {
                // If network fails and it's an HTML request, return the main page
                if (event.request.headers.get('accept').includes('text/html')) {
                    return caches.match('./index.html');
                }
            });
        })
    );
});

// Activate event: Clean up old caches
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
