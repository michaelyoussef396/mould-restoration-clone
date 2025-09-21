import { useEffect, useState, useCallback, useRef } from 'react';

// Mobile performance optimization hook
export function useMobileOptimization() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const [networkSpeed, setNetworkSpeed] = useState<'slow' | 'fast' | 'unknown'>('unknown');
  const [isOnline, setIsOnline] = useState(navigator.onlineData);

  // Performance observer for mobile-specific metrics
  const performanceObserver = useRef<PerformanceObserver | null>(null);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      setIsMobile(mobile);

      // Detect low-end device based on hardware capabilities
      const lowEnd =
        navigator.hardwareConcurrency <= 2 || // CPU cores
        ('memory' in navigator && (navigator as any).memory?.jsHeapSizeLimit < 1000000000); // < 1GB RAM
      setIsLowEndDevice(lowEnd);
    };

    // Network speed detection
    const checkNetworkSpeed = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection) {
          const effectiveType = connection.effectiveType;
          setNetworkSpeed(effectiveType === '2g' || effectiveType === 'slow-2g' ? 'slow' : 'fast');
        }
      }
    };

    // Online/offline detection
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    checkMobile();
    checkNetworkSpeed();

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Performance monitoring for mobile
    if ('PerformanceObserver' in window) {
      performanceObserver.current = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'measure' && entry.name.includes('mobile')) {
            console.log(`[MOBILE PERF] ${entry.name}: ${entry.duration.toFixed(2)}ms`);
          }
        }
      });

      performanceObserver.current.observe({ entryTypes: ['measure'] });
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      performanceObserver.current?.disconnect();
    };
  }, []);

  // Haptic feedback utility
  const hapticFeedback = useCallback((type: 'light' | 'medium' | 'heavy' = 'light') => {
    if (!isMobile || !('vibrate' in navigator)) return;

    const patterns = {
      light: [10],
      medium: [10, 5, 10],
      heavy: [20, 10, 20, 10, 20]
    };

    navigator.vibrate(patterns[type]);
  }, [isMobile]);

  // Touch gesture detection
  const touchGesture = useCallback((element: HTMLElement, onSwipe?: (direction: 'left' | 'right' | 'up' | 'down') => void) => {
    if (!isMobile) return;

    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      endX = e.touches[0].clientX;
      endY = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (!onSwipe) return;

      const deltaX = endX - startX;
      const deltaY = endY - startY;
      const minSwipeDistance = 50;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (Math.abs(deltaX) > minSwipeDistance) {
          onSwipe(deltaX > 0 ? 'right' : 'left');
        }
      } else {
        if (Math.abs(deltaY) > minSwipeDistance) {
          onSwipe(deltaY > 0 ? 'down' : 'up');
        }
      }
    };

    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchmove', handleTouchMove, { passive: true });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile]);

  // Performance measurement for mobile components
  const measureMobilePerformance = useCallback((name: string, fn: () => void) => {
    if (!isMobile) return fn();

    performance.mark(`mobile-${name}-start`);
    fn();
    performance.mark(`mobile-${name}-end`);
    performance.measure(`mobile-${name}`, `mobile-${name}-start`, `mobile-${name}-end`);
  }, [isMobile]);

  // Adaptive loading based on device capabilities
  const getAdaptiveConfig = useCallback(() => {
    return {
      // Reduce animations on low-end devices
      enableAnimations: !isLowEndDevice,
      // Reduce polling frequency on slow networks
      pollingInterval: networkSpeed === 'slow' ? 60000 : 30000,
      // Reduce image quality on slow networks
      imageQuality: networkSpeed === 'slow' ? 0.7 : 0.9,
      // Enable virtualization on mobile with many items
      enableVirtualization: isMobile,
      // Batch updates on slow devices
      batchUpdates: isLowEndDevice,
      // Preload critical resources only on fast networks
      preloadResources: networkSpeed === 'fast' && isOnline
    };
  }, [isMobile, isLowEndDevice, networkSpeed, isOnline]);

  return {
    isMobile,
    isLowEndDevice,
    networkSpeed,
    isOnline,
    hapticFeedback,
    touchGesture,
    measureMobilePerformance,
    getAdaptiveConfig
  };
}

// Hook for mobile-specific performance monitoring
export function useMobilePerformanceMonitor(componentName: string) {
  const { isMobile, measureMobilePerformance } = useMobileOptimization();
  const renderCount = useRef(0);
  const mountTime = useRef<number>(Date.now());

  useEffect(() => {
    if (isMobile) {
      console.log(`[MOBILE] ${componentName} mounted at ${new Date().toISOString()}`);
    }

    return () => {
      if (isMobile) {
        const lifetime = Date.now() - mountTime.current;
        console.log(`[MOBILE] ${componentName} unmounted after ${lifetime}ms, ${renderCount.current} renders`);
      }
    };
  }, [componentName, isMobile]);

  const measureRender = useCallback(() => {
    renderCount.current++;
    if (isMobile) {
      measureMobilePerformance(`${componentName}-render-${renderCount.current}`, () => {
        // Render measurement
      });
    }
  }, [componentName, isMobile, measureMobilePerformance]);

  return { measureRender, renderCount: renderCount.current };
}

// Hook for mobile gesture handling
export function useMobileGestures(onSwipe?: (direction: 'left' | 'right' | 'up' | 'down') => void) {
  const { isMobile, touchGesture, hapticFeedback } = useMobileOptimization();
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !isMobile) return;

    return touchGesture(element, (direction) => {
      hapticFeedback('light');
      onSwipe?.(direction);
    });
  }, [isMobile, touchGesture, hapticFeedback, onSwipe]);

  return elementRef;
}

// Hook for adaptive resource loading
export function useAdaptiveLoading() {
  const { getAdaptiveConfig, isOnline, networkSpeed } = useMobileOptimization();
  const [config, setConfig] = useState(getAdaptiveConfig());

  useEffect(() => {
    setConfig(getAdaptiveConfig());
  }, [isOnline, networkSpeed, getAdaptiveConfig]);

  // Lazy load component with adaptive strategy
  const loadComponentAdaptively = useCallback(async (
    importFn: () => Promise<any>,
    fallback?: () => Promise<any>
  ) => {
    try {
      if (config.preloadResources) {
        return await importFn();
      } else {
        // Add delay for slow networks to prevent overwhelming
        if (networkSpeed === 'slow') {
          await new Promise(resolve => setTimeout(resolve, 100));
        }
        return await importFn();
      }
    } catch (error) {
      console.warn('Failed to load component adaptively:', error);
      return fallback ? await fallback() : null;
    }
  }, [config.preloadResources, networkSpeed]);

  return {
    config,
    loadComponentAdaptively
  };
}

// Hook for mobile-optimized API calls
export function useMobileApiOptimization() {
  const { isOnline, networkSpeed, getAdaptiveConfig } = useMobileOptimization();
  const [requestQueue, setRequestQueue] = useState<Array<() => Promise<any>>>([]);

  const config = getAdaptiveConfig();

  // Batch API requests for better mobile performance
  const batchApiCall = useCallback(async (apiCall: () => Promise<any>) => {
    if (!isOnline) {
      // Queue for when online
      setRequestQueue(prev => [...prev, apiCall]);
      return null;
    }

    if (config.batchUpdates && requestQueue.length > 0) {
      // Process queue first
      const results = await Promise.allSettled(requestQueue.map(call => call()));
      setRequestQueue([]);
      return await apiCall();
    }

    return await apiCall();
  }, [isOnline, config.batchUpdates, requestQueue]);

  // Process queued requests when coming back online
  useEffect(() => {
    if (isOnline && requestQueue.length > 0) {
      const processQueue = async () => {
        const results = await Promise.allSettled(requestQueue.map(call => call()));
        setRequestQueue([]);
        console.log(`Processed ${results.length} queued API calls`);
      };

      processQueue();
    }
  }, [isOnline, requestQueue]);

  return {
    batchApiCall,
    queuedRequestsCount: requestQueue.length,
    isOnline,
    networkSpeed
  };
}