// Melbourne Mould Restoration - Service Worker for Australian Mobile Networks
// Optimized for 3G/4G networks with intelligent caching strategies

const CACHE_VERSION = 'melbourne-mould-v1.0.0';
const CACHE_NAMES = {
  CRITICAL: `critical-${CACHE_VERSION}`,
  LOCATIONS: `locations-${CACHE_VERSION}`,
  IMAGES: `images-${CACHE_VERSION}`,
  FONTS: `fonts-${CACHE_VERSION}`,
  API: `api-${CACHE_VERSION}`,
  OFFLINE: `offline-${CACHE_VERSION}`
};

// Australian CDN endpoints
const AUSTRALIAN_CDNS = [
  'https://cdn-au.mouldrestoration.com.au',
  'https://fonts.gstatic.com',
  'https://fonts.googleapis.com'
];

// Critical resources that should always be cached
const CRITICAL_RESOURCES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/offline.html' // Offline fallback page
];

// Melbourne location pages for intelligent prefetching
const MELBOURNE_LOCATIONS = [
  'carlton', 'toorak', 'brighton', 'south-yarra', 'richmond',
  'fitzroy', 'prahran', 'malvern', 'armadale', 'albert-park',
  // ... could include all 145 locations
];

// Network detection for Australian mobile networks
const getNetworkType = () => {
  const connection = self.navigator?.connection || self.navigator?.mozConnection;
  return connection ? connection.effectiveType : '4g';
};

// Install event - Cache critical resources
self.addEventListener('install', event => {
  console.log('🔧 Service Worker installing for Melbourne Mould Restoration');

  event.waitUntil(
    Promise.all([
      // Cache critical resources
      caches.open(CACHE_NAMES.CRITICAL).then(cache => {
        return cache.addAll(CRITICAL_RESOURCES);
      }),

      // Pre-cache fonts for Australian users
      caches.open(CACHE_NAMES.FONTS).then(cache => {
        return cache.addAll([
          'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2'
        ]);
      })
    ])
  );

  // Skip waiting to activate immediately
  self.skipWaiting();
});

// Activate event - Clean up old caches
self.addEventListener('activate', event => {
  console.log('✅ Service Worker activated for Australian mobile optimization');

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Delete old caches that don't match current version
          if (!Object.values(CACHE_NAMES).includes(cacheName)) {
            console.log(`🗑️ Deleting old cache: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );

  // Take control of all pages immediately
  self.clients.claim();
});

// Fetch event - Implement Australian network-aware caching strategies
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  const networkType = getNetworkType();

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle different resource types with network-aware strategies
  if (url.pathname === '/' || url.pathname.includes('.html')) {
    event.respondWith(handleHTMLRequest(request, networkType));
  } else if (url.pathname.includes('/locations/')) {
    event.respondWith(handleLocationRequest(request, networkType));
  } else if (isImageRequest(url)) {
    event.respondWith(handleImageRequest(request, networkType));
  } else if (isFontRequest(url)) {
    event.respondWith(handleFontRequest(request));
  } else if (isAPIRequest(url)) {
    event.respondWith(handleAPIRequest(request, networkType));
  } else {
    event.respondWith(handleGenericRequest(request, networkType));
  }
});

// HTML caching strategy - Network first with cache fallback
async function handleHTMLRequest(request, networkType) {
  const cache = await caches.open(CACHE_NAMES.CRITICAL);

  try {
    // Network first for fresh content
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      // Cache successful responses
      cache.put(request, networkResponse.clone());
      return networkResponse;
    }
  } catch (error) {
    console.log('📱 Network failed, serving from cache');
  }

  // Fallback to cache
  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  // Ultimate fallback to offline page
  const offlineResponse = await cache.match('/offline.html');
  return offlineResponse || new Response('Offline', { status: 503 });
}

// Location pages strategy - Network first with intelligent prefetching
async function handleLocationRequest(request, networkType) {
  const cache = await caches.open(CACHE_NAMES.LOCATIONS);
  const url = new URL(request.url);

  try {
    // Network first for location pages (always want fresh content)
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      // Cache the response
      cache.put(request, networkResponse.clone());

      // Intelligent prefetching based on network speed
      if (networkType === '4g') {
        prefetchAdjacentLocations(url.pathname);
      }

      return networkResponse;
    }
  } catch (error) {
    console.log(`📍 Location page network failed: ${url.pathname}`);
  }

  // Fallback to cached version
  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  // Generate fallback location page if none cached
  return generateFallbackLocationPage(url.pathname);
}

// Image caching strategy - Cache first with Australian CDN optimization
async function handleImageRequest(request, networkType) {
  const cache = await caches.open(CACHE_NAMES.IMAGES);

  // Check cache first for images
  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    // Optimize image request for Australian CDN
    const optimizedRequest = optimizeImageRequest(request);
    const networkResponse = await fetch(optimizedRequest);

    if (networkResponse.ok) {
      // Cache images aggressively (they change rarely)
      cache.put(request, networkResponse.clone());
      return networkResponse;
    }
  } catch (error) {
    console.log(`🖼️ Image failed to load: ${request.url}`);
  }

  // Return placeholder image for failed loads
  return generatePlaceholderImage();
}

// Font caching strategy - Cache first with long expiration
async function handleFontRequest(request) {
  const cache = await caches.open(CACHE_NAMES.FONTS);

  // Fonts can be served from cache without network check
  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
      return networkResponse;
    }
  } catch (error) {
    console.log(`🔤 Font failed to load: ${request.url}`);
  }

  // System font fallback
  return new Response('', { status: 404 });
}

// API caching strategy - Network first with stale-while-revalidate
async function handleAPIRequest(request, networkType) {
  const cache = await caches.open(CACHE_NAMES.API);

  // For slow networks, serve cache first then update
  if (networkType === 'slow-2g' || networkType === '2g') {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      // Serve cache immediately
      updateCacheInBackground(request, cache);
      return cachedResponse;
    }
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
      return networkResponse;
    }
  } catch (error) {
    console.log(`🔄 API request failed: ${request.url}`);
  }

  // Fallback to cache
  const cachedResponse = await cache.match(request);
  return cachedResponse || new Response('API Unavailable', { status: 503 });
}

// Generic resource caching
async function handleGenericRequest(request, networkType) {
  const cache = await caches.open(CACHE_NAMES.CRITICAL);

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
      return networkResponse;
    }
  } catch (error) {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
  }

  return new Response('Resource Unavailable', { status: 404 });
}

// Helper functions

function isImageRequest(url) {
  return /\.(jpg|jpeg|png|webp|avif|svg)(\?|$)/i.test(url.pathname);
}

function isFontRequest(url) {
  return /\.(woff|woff2|ttf|otf)(\?|$)/i.test(url.pathname);
}

function isAPIRequest(url) {
  return url.pathname.startsWith('/api/') || url.hostname.includes('api.');
}

function optimizeImageRequest(request) {
  const url = new URL(request.url);

  // Convert to Australian CDN if not already
  if (!url.hostname.includes('cdn-au.')) {
    url.hostname = 'cdn-au.mouldrestoration.com.au';
  }

  // Add Australian-specific optimization parameters
  url.searchParams.set('f', 'webp'); // Prefer WebP
  url.searchParams.set('q', '85'); // Quality optimization for Australian mobile

  return new Request(url.toString(), {
    method: request.method,
    headers: request.headers,
    body: request.body,
    mode: request.mode,
    credentials: request.credentials,
    cache: request.cache,
    redirect: request.redirect,
    referrer: request.referrer
  });
}

// Prefetch adjacent Melbourne locations
async function prefetchAdjacentLocations(currentPath) {
  const currentLocation = currentPath.split('/').pop();
  const cache = await caches.open(CACHE_NAMES.LOCATIONS);

  // Simple adjacent location logic (could be more sophisticated)
  const currentIndex = MELBOURNE_LOCATIONS.indexOf(currentLocation);
  if (currentIndex !== -1) {
    const adjacent = [
      MELBOURNE_LOCATIONS[currentIndex - 1],
      MELBOURNE_LOCATIONS[currentIndex + 1]
    ].filter(Boolean);

    adjacent.forEach(location => {
      const locationUrl = `/locations/${location}`;

      // Prefetch without waiting
      fetch(locationUrl).then(response => {
        if (response.ok) {
          cache.put(locationUrl, response.clone());
        }
      }).catch(() => {
        // Silently fail for prefetch
      });
    });
  }
}

// Generate fallback location page
function generateFallbackLocationPage(pathname) {
  const location = pathname.split('/').pop() || 'Melbourne';
  const fallbackHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Mould Removal ${location} Melbourne - Offline</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; }
        .header { color: #2563eb; margin-bottom: 20px; }
        .offline-notice { background: #fef3c7; padding: 15px; border-radius: 4px; margin-bottom: 20px; }
        .cta { background: #2563eb; color: white; padding: 15px 20px; text-decoration: none; border-radius: 4px; display: inline-block; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1 class="header">Professional Mould Removal ${location} Melbourne</h1>
        <div class="offline-notice">
          <strong>You're currently offline.</strong> This is a cached version of our ${location} service page.
        </div>
        <p>We provide professional mould inspection and removal services in ${location}, Melbourne. Our IICRC-certified technicians are available for same-day service.</p>
        <p><strong>Emergency Service:</strong> Call us at 1800 954 117</p>
        <p>Services include:</p>
        <ul>
          <li>Professional mould inspection</li>
          <li>Complete mould removal</li>
          <li>Water damage restoration</li>
          <li>Preventive treatments</li>
        </ul>
        <a href="tel:1800954117" class="cta">Call Now: 1800 954 117</a>
      </div>
    </body>
    </html>
  `;

  return new Response(fallbackHTML, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  });
}

// Generate placeholder image
function generatePlaceholderImage() {
  // Simple 1x1 transparent PNG
  const transparentPNG = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=';

  const binaryData = atob(transparentPNG);
  const bytes = new Uint8Array(binaryData.length);
  for (let i = 0; i < binaryData.length; i++) {
    bytes[i] = binaryData.charCodeAt(i);
  }

  return new Response(bytes, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=300'
    }
  });
}

// Background cache update
async function updateCacheInBackground(request, cache) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
  } catch (error) {
    // Background updates can fail silently
  }
}

// Message handling for cache management
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'GET_CACHE_STATUS') {
    // Return cache status for debugging
    caches.keys().then(cacheNames => {
      const status = {
        cacheNames,
        networkType: getNetworkType(),
        version: CACHE_VERSION
      };

      event.ports[0].postMessage(status);
    });
  }

  if (event.data && event.data.type === 'PREFETCH_LOCATIONS') {
    // Prefetch specific locations
    const locations = event.data.locations || [];
    locations.forEach(location => {
      fetch(`/locations/${location}`).catch(() => {
        // Silently fail
      });
    });
  }
});

// Background sync for analytics (when network returns)
self.addEventListener('sync', event => {
  if (event.tag === 'performance-analytics') {
    event.waitUntil(sendPerformanceMetrics());
  }
});

async function sendPerformanceMetrics() {
  // Send cached performance metrics when network is available
  try {
    const cache = await caches.open(CACHE_NAMES.API);
    const metrics = await cache.match('/api/performance-metrics');

    if (metrics) {
      const data = await metrics.json();
      await fetch('/api/analytics/performance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      // Remove from cache after successful send
      cache.delete('/api/performance-metrics');
    }
  } catch (error) {
    console.log('Background sync failed:', error);
  }
}

console.log('🇦🇺 Melbourne Mould Restoration Service Worker ready for Australian mobile networks');