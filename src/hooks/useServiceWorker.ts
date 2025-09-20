import { useState, useEffect, useCallback } from 'react';
import { toast } from '@/hooks/use-toast';

interface ServiceWorkerHook {
  isOnline: boolean;
  isOfflineMode: boolean;
  queuedRequests: number;
  registerServiceWorker: () => Promise<boolean>;
  syncOfflineQueue: () => Promise<void>;
  clearOfflineCache: () => Promise<void>;
}

interface QueuedRequest {
  url: string;
  method: string;
  timestamp: number;
}

export function useServiceWorker(): ServiceWorkerHook {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isOfflineMode, setIsOfflineMode] = useState(false);
  const [queuedRequests, setQueuedRequests] = useState(0);
  const [serviceWorker, setServiceWorker] = useState<ServiceWorker | null>(null);

  // Register service worker
  const registerServiceWorker = useCallback(async (): Promise<boolean> => {
    if (!('serviceWorker' in navigator)) {
      console.warn('Service Worker not supported');
      return false;
    }

    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
        updateViaCache: 'none'
      });

      console.log('[SW] Registration successful:', registration);

      // Handle service worker updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New service worker is available
              toast({
                title: "App Update Available",
                description: "Refresh the page to get the latest features.",
                duration: 10000,
              });
            }
          });
        }
      });

      // Set active service worker
      if (registration.active) {
        setServiceWorker(registration.active);
      }

      return true;

    } catch (error) {
      console.error('[SW] Registration failed:', error);
      toast({
        title: "Offline Mode Unavailable",
        description: "Some features may not work without internet connection.",
        variant: "destructive"
      });
      return false;
    }
  }, []);

  // Sync offline queue manually
  const syncOfflineQueue = useCallback(async (): Promise<void> => {
    if (!('serviceWorker' in navigator) || !navigator.serviceWorker.controller) {
      return;
    }

    try {
      await navigator.serviceWorker.ready;

      // Trigger background sync if supported
      if ('sync' in window.ServiceWorkerRegistration.prototype) {
        const registration = await navigator.serviceWorker.ready;
        await registration.sync.register('offline-queue-sync');

        toast({
          title: "Syncing Offline Changes",
          description: "Your offline changes are being synchronized.",
        });
      }
    } catch (error) {
      console.error('[SW] Manual sync failed:', error);
      toast({
        title: "Sync Failed",
        description: "Unable to sync offline changes. Please try again when online.",
        variant: "destructive"
      });
    }
  }, []);

  // Clear offline cache
  const clearOfflineCache = useCallback(async (): Promise<void> => {
    if (!('caches' in window)) {
      return;
    }

    try {
      const cacheNames = await caches.keys();

      await Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName.includes('mould-restoration')) {
            return caches.delete(cacheName);
          }
        })
      );

      toast({
        title: "Cache Cleared",
        description: "Offline cache has been cleared. Fresh data will be downloaded.",
      });

    } catch (error) {
      console.error('[SW] Cache clear failed:', error);
      toast({
        title: "Clear Cache Failed",
        description: "Unable to clear cache. Please try refreshing the page.",
        variant: "destructive"
      });
    }
  }, []);

  // Handle online/offline events
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setIsOfflineMode(false);

      toast({
        title: "Back Online",
        description: "Connection restored. Syncing offline changes...",
      });

      // Trigger sync when coming back online
      syncOfflineQueue();
    };

    const handleOffline = () => {
      setIsOnline(false);
      setIsOfflineMode(true);

      toast({
        title: "You're Offline",
        description: "Don't worry! You can still view cached data and make changes.",
        duration: 5000,
      });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [syncOfflineQueue]);

  // Listen for service worker messages
  useEffect(() => {
    if (!('serviceWorker' in navigator)) {
      return;
    }

    const handleMessage = (event: MessageEvent) => {
      const { data } = event;

      switch (data.type) {
        case 'NETWORK_STATUS':
          setIsOnline(data.isOnline);
          setIsOfflineMode(!data.isOnline);
          break;

        case 'REQUEST_QUEUED':
          setQueuedRequests(prev => prev + 1);
          toast({
            title: "Request Queued",
            description: "Your changes will be saved when connection is restored.",
            duration: 3000,
          });
          break;

        case 'SYNC_SUCCESS':
          setQueuedRequests(prev => Math.max(0, prev - 1));

          // Show success message for important operations
          if (data.request.url.includes('/api/leads')) {
            toast({
              title: "Changes Synced",
              description: "Your offline changes have been successfully saved.",
            });
          }
          break;

        case 'CACHE_UPDATED':
          console.log('[SW] Cache updated:', data.url);
          break;

        default:
          console.log('[SW] Unknown message type:', data.type);
      }
    };

    navigator.serviceWorker.addEventListener('message', handleMessage);

    return () => {
      navigator.serviceWorker.removeEventListener('message', handleMessage);
    };
  }, []);

  // Get initial queued requests count
  useEffect(() => {
    const getQueuedCount = async () => {
      try {
        const db = await openOfflineDB();
        const transaction = db.transaction(['offline_queue'], 'readonly');
        const store = transaction.objectStore('offline_queue');
        const count = await store.count();
        setQueuedRequests(count);
      } catch (error) {
        console.error('[SW] Failed to get queued count:', error);
      }
    };

    getQueuedCount();
  }, []);

  // Register service worker on mount
  useEffect(() => {
    registerServiceWorker();
  }, [registerServiceWorker]);

  return {
    isOnline,
    isOfflineMode,
    queuedRequests,
    registerServiceWorker,
    syncOfflineQueue,
    clearOfflineCache
  };
}

// IndexedDB helper for counting queued requests
function openOfflineDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('MouldRestorationOffline', 1);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;

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

// Enhanced fetch with offline queue support
export function enhancedFetch(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  // Add offline headers to help service worker
  const enhancedOptions: RequestInit = {
    ...options,
    headers: {
      ...options.headers,
      'X-Client-Timestamp': Date.now().toString(),
      'X-Request-Source': 'mould-restoration-crm'
    }
  };

  return fetch(url, enhancedOptions);
}

// Utility to check if response is from cache
export function isFromCache(response: Response): boolean {
  return response.headers.has('X-Served-From-Cache');
}

// Utility to check if request was queued
export function isRequestQueued(response: Response): boolean {
  return response.headers.has('X-Queued-Offline');
}