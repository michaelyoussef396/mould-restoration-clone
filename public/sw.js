// EMERGENCY CLEANUP: This service worker immediately unregisters itself
// This overrides the broken cached version

self.addEventListener('install', (event) => {
  console.log('[SW CLEANUP] Installing cleanup service worker...');
  // Skip waiting to activate immediately
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[SW CLEANUP] Activating cleanup service worker...');

  event.waitUntil(
    (async () => {
      // Clear all caches
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => {
          console.log('[SW CLEANUP] Deleting cache:', cacheName);
          return caches.delete(cacheName);
        })
      );

      // Claim all clients
      await self.clients.claim();

      // Get all clients and notify them
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach(client => {
        console.log('[SW CLEANUP] Notifying client to reload...');
        client.postMessage({
          type: 'SW_CLEANUP_COMPLETE',
          message: 'Service worker cleaned up, reloading...'
        });
      });

      // Unregister this service worker
      const registration = await self.registration;
      console.log('[SW CLEANUP] Unregistering service worker...');
      await registration.unregister();

      console.log('[SW CLEANUP] Cleanup complete!');
    })()
  );
});

// Don't intercept any fetches - let everything pass through
self.addEventListener('fetch', (event) => {
  // Pass through all requests without caching
  return;
});

console.log('[SW CLEANUP] Cleanup service worker loaded');
