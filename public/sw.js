// Service Worker for Melbourne Mould & Restoration CRM
// Provides offline capability for field technicians

const CACHE_NAME = 'mould-restoration-v1.0.0';
const OFFLINE_CACHE_NAME = 'mould-restoration-offline-v1.0.0';

// Critical assets for offline functionality
const CRITICAL_ASSETS = [
  '/',
  '/offline.html',
  '/admin/dashboard',
  '/admin/leads',
  '/admin/leads/kanban',
  // Add critical CSS and JS files dynamically
];

// API endpoints to cache for offline viewing
const API_CACHE_PATTERNS = [
  '/api/leads',
  '/api/leads/recent',
  '/api/dashboard/stats',
  '/api/auth/me'
];

// Install event - cache critical assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching critical assets');
        return cache.addAll(CRITICAL_ASSETS);
      })
      .then(() => {
        // Skip waiting to activate immediately
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Failed to cache critical assets:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && cacheName !== OFFLINE_CACHE_NAME) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        // Take control of all pages immediately
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    // Handle POST requests for offline queue
    if (request.method === 'POST' && url.pathname.startsWith('/api/')) {
      event.respondWith(handleOfflinePost(request));
    }
    return;
  }

  // API requests - Network First with offline fallback
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(handleAPIRequest(request));
    return;
  }

  // Static assets - Cache First
  if (isStaticAsset(url.pathname)) {
    event.respondWith(handleStaticAsset(request));
    return;
  }

  // Navigation requests - Network First with fallback
  if (request.mode === 'navigate') {
    event.respondWith(handleNavigation(request));
    return;
  }

  // Default strategy - Network First
  event.respondWith(handleDefault(request));
});

// Handle API requests with offline support
async function handleAPIRequest(request) {
  const cacheName = OFFLINE_CACHE_NAME;

  try {
    // Try network first
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      // Cache successful responses for offline access
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());

      // Update online status
      notifyClientsOfNetworkStatus(true);
    }

    return networkResponse;

  } catch (error) {
    console.log('[SW] Network failed for API request, checking cache...');

    // Network failed, try cache
    const cachedResponse = await caches.match(request);

    if (cachedResponse) {
      // Notify clients we're serving from cache (offline)
      notifyClientsOfNetworkStatus(false);

      // Add offline indicator header
      const response = cachedResponse.clone();
      response.headers.set('X-Served-From-Cache', 'true');
      return response;
    }

    // No cache available, return offline response
    return new Response(
      JSON.stringify({
        error: 'Offline - No cached data available',
        offline: true,
        timestamp: new Date().toISOString()
      }),
      {
        status: 503,
        statusText: 'Service Unavailable - Offline',
        headers: {
          'Content-Type': 'application/json',
          'X-Offline': 'true'
        }
      }
    );
  }
}

// Handle POST requests for offline queue
async function handleOfflinePost(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      notifyClientsOfNetworkStatus(true);
      return networkResponse;
    }

    throw new Error('Network request failed');

  } catch (error) {
    console.log('[SW] POST request failed, queuing for later...');

    // Store request for later sync
    await queueOfflineRequest(request);

    // Return optimistic response
    return new Response(
      JSON.stringify({
        success: true,
        queued: true,
        message: 'Request queued for when connection is restored',
        timestamp: new Date().toISOString()
      }),
      {
        status: 202,
        statusText: 'Accepted - Queued for Sync',
        headers: {
          'Content-Type': 'application/json',
          'X-Queued-Offline': 'true'
        }
      }
    );
  }
}

// Handle static assets with cache-first strategy
async function handleStaticAsset(request) {
  const cachedResponse = await caches.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;

  } catch (error) {
    console.log('[SW] Failed to fetch static asset:', request.url);

    // Return a basic offline fallback for assets
    return new Response('', {
      status: 503,
      statusText: 'Service Unavailable - Offline'
    });
  }
}

// Handle navigation requests
async function handleNavigation(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      notifyClientsOfNetworkStatus(true);

      // Cache successful navigation responses
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;

  } catch (error) {
    console.log('[SW] Navigation failed, checking cache...');

    // Try cache
    const cachedResponse = await caches.match(request);

    if (cachedResponse) {
      notifyClientsOfNetworkStatus(false);
      return cachedResponse;
    }

    // Fallback to offline page
    return caches.match('/offline.html');
  }
}

// Default fetch handler
async function handleDefault(request) {
  try {
    return await fetch(request);
  } catch (error) {
    return caches.match(request);
  }
}

// Utility functions
function isStaticAsset(pathname) {
  return /\.(js|css|png|jpg|jpeg|webp|svg|ico|woff|woff2|ttf)$/.test(pathname);
}

// Queue offline requests for later sync
async function queueOfflineRequest(request) {
  try {
    const requestData = {
      url: request.url,
      method: request.method,
      headers: Object.fromEntries(request.headers.entries()),
      body: await request.text(),
      timestamp: Date.now()
    };

    // Store in IndexedDB for persistence
    const db = await openOfflineDB();
    const transaction = db.transaction(['offline_queue'], 'readwrite');
    const store = transaction.objectStore('offline_queue');

    await store.add(requestData);

    console.log('[SW] Request queued for offline sync:', request.url);

    // Notify clients about queued request
    notifyClientsOfQueuedRequest(requestData);

  } catch (error) {
    console.error('[SW] Failed to queue offline request:', error);
  }
}

// IndexedDB for offline queue
function openOfflineDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('MouldRestorationOffline', 1);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      if (!db.objectStoreNames.contains('offline_queue')) {
        const store = db.createObjectStore('offline_queue', {
          keyPath: 'id',
          autoIncrement: true
        });
        store.createIndex('timestamp', 'timestamp', { unique: false });
      }
    };
  });
}

// Notify clients of network status changes
function notifyClientsOfNetworkStatus(isOnline) {
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({
        type: 'NETWORK_STATUS',
        isOnline,
        timestamp: Date.now()
      });
    });
  });
}

// Notify clients of queued requests
function notifyClientsOfQueuedRequest(requestData) {
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({
        type: 'REQUEST_QUEUED',
        request: requestData,
        timestamp: Date.now()
      });
    });
  });
}

// Background sync for offline queue
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync triggered:', event.tag);

  if (event.tag === 'offline-queue-sync') {
    event.waitUntil(processOfflineQueue());
  }
});

// Process queued offline requests
async function processOfflineQueue() {
  console.log('[SW] Processing offline queue...');

  try {
    const db = await openOfflineDB();
    const transaction = db.transaction(['offline_queue'], 'readwrite');
    const store = transaction.objectStore('offline_queue');

    const queuedRequests = await store.getAll();

    for (const requestData of queuedRequests) {
      try {
        // Reconstruct the request
        const request = new Request(requestData.url, {
          method: requestData.method,
          headers: requestData.headers,
          body: requestData.body
        });

        // Attempt to send the request
        const response = await fetch(request);

        if (response.ok) {
          // Remove from queue on success
          await store.delete(requestData.id);
          console.log('[SW] Synced queued request:', requestData.url);

          // Notify clients of successful sync
          notifyClientsOfSyncSuccess(requestData);
        }

      } catch (error) {
        console.log('[SW] Failed to sync request:', requestData.url, error);

        // Keep in queue for next sync attempt
        // Optionally implement retry limit and expiration
      }
    }

  } catch (error) {
    console.error('[SW] Failed to process offline queue:', error);
  }
}

// Notify clients of successful sync
function notifyClientsOfSyncSuccess(requestData) {
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({
        type: 'SYNC_SUCCESS',
        request: requestData,
        timestamp: Date.now()
      });
    });
  });
}

// Handle push notifications for urgent updates
self.addEventListener('push', (event) => {
  console.log('[SW] Push notification received');

  const options = {
    body: 'New urgent lead assigned to you',
    icon: '/icon-192x192.png',
    badge: '/badge-72x72.png',
    vibrate: [200, 100, 200],
    data: {
      url: '/admin/leads'
    },
    actions: [
      {
        action: 'view',
        title: 'View Lead',
        icon: '/icon-view.png'
      },
      {
        action: 'dismiss',
        title: 'Dismiss',
        icon: '/icon-dismiss.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Mould & Restoration Co.', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification clicked:', event.action);

  event.notification.close();

  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow(event.notification.data.url)
    );
  }
});

console.log('[SW] Service worker loaded and ready for field operations');