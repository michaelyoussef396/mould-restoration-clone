// Core Web Vitals optimisation for Australian mobile networks
// Targeting LCP < 2.5s, CLS < 0.1, INP < 200ms for Melbourne users

export interface CoreWebVitalsConfig {
  lcp: {
    target: number;
    optimisations: string[];
  };
  cls: {
    target: number;
    preventionStrategies: string[];
  };
  inp: {
    target: number;
    optimisations: string[];
  };
}

// Australian mobile network optimisation targets
export const AUSTRALIAN_VITALS_TARGETS: CoreWebVitalsConfig = {
  lcp: {
    target: 2500, // 2.5 seconds for Australian 4G networks
    optimisations: [
      'preload_hero_images',
      'webp_conversion',
      'critical_css_inlining',
      'image_compression_85_percent',
      'cdn_delivery_australia'
    ]
  },
  cls: {
    target: 0.1, // Prevent layout shifts
    preventionStrategies: [
      'reserve_image_space',
      'aspect_ratio_containers',
      'skeleton_placeholders',
      'font_display_swap',
      'fixed_dimensions'
    ]
  },
  inp: {
    target: 200, // 200ms for mobile interactions
    optimisations: [
      'throttle_scroll_events',
      'debounce_search_inputs',
      'lazy_load_non_critical',
      'reduce_main_thread_work',
      'optimize_javascript_execution'
    ]
  }
};

// Image-specific Core Web Vitals optimisation
export interface ImageVitalsOptimization {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority: boolean;
  loading: 'lazy' | 'eager';
  sizes: string;
  srcSet: string;
  aspectRatio: string;
  preload?: boolean;
}

// Generate optimised image configuration for Core Web Vitals
export const generateVitalsOptimizedImage = (
  src: string,
  alt: string,
  width: number,
  height: number,
  isPriority: boolean = false,
  location?: string,
  service?: string
): ImageVitalsOptimization => {
  const aspectRatio = `${width}/${height}`;

  // Generate Melbourne-specific alt text
  const optimizedAlt = location && service
    ? `Professional ${service} ${location} Melbourne ${alt}`
    : alt.includes('Professional') ? alt : `Professional mould removal Melbourne ${alt}`;

  // Generate srcSet for Australian mobile devices
  const generateMobileSrcSet = (baseSrc: string): string => {
    const ext = baseSrc.split('.').pop();
    const baseName = baseSrc.replace(`.${ext}`, '');

    return [
      `${baseName}_375w.webp 375w`, // iPhone SE, small Android
      `${baseName}_414w.webp 414w`, // Standard smartphone
      `${baseName}_768w.webp 768w`, // Tablet
      `${baseName}_1024w.webp 1024w`, // Desktop
      `${baseName}_1440w.webp 1440w`, // Large desktop
    ].join(', ');
  };

  // Responsive sizes optimised for Australian devices
  const responsiveSizes = isPriority
    ? '100vw' // Hero images take full viewport
    : '(max-width: 375px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw';

  return {
    src: src.replace(/\.(jpg|jpeg|png)$/i, '.webp'), // Prefer WebP
    alt: optimizedAlt,
    width,
    height,
    priority: isPriority,
    loading: isPriority ? 'eager' : 'lazy',
    sizes: responsiveSizes,
    srcSet: generateMobileSrcSet(src),
    aspectRatio,
    preload: isPriority // Preload critical images for LCP
  };
};

// LCP optimisation for hero images
export const optimizeHeroImageLCP = (heroSrc: string): void => {
  // Preload hero image for LCP optimisation
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = heroSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  link.setAttribute('fetchpriority', 'high');
  document.head.appendChild(link);
};

// CLS prevention utilities
export const preventLayoutShift = {
  // Reserve space for images to prevent CLS
  reserveImageSpace: (width: number, height: number) => ({
    aspectRatio: `${width}/${height}`,
    minHeight: `${height}px`,
    backgroundColor: '#f3f4f6', // Gray placeholder
  }),

  // Skeleton placeholder styles
  skeletonPlaceholder: {
    backgroundColor: '#f3f4f6',
    backgroundImage: `linear-gradient(45deg, #e5e7eb 25%, transparent 25%),
                     linear-gradient(-45deg, #e5e7eb 25%, transparent 25%),
                     linear-gradient(45deg, transparent 75%, #e5e7eb 75%),
                     linear-gradient(-45deg, transparent 75%, #e5e7eb 75%)`,
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
    animation: 'skeleton-pulse 2s infinite',
  },

  // Font loading optimisation to prevent CLS
  fontDisplaySwap: {
    fontDisplay: 'swap' as const,
    fontOpticalSizing: 'auto' as const,
  }
};

// Melbourne mobile network performance monitoring
export const trackCoreWebVitals = () => {
  // Track LCP (Largest Contentful Paint)
  const lcpObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const lcp = entry as PerformanceEventTiming;

      // Send to analytics in production
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          name: 'LCP',
          value: lcp.startTime,
          location: window.location.pathname,
        });
      }
    }
  });

  // Track CLS (Cumulative Layout Shift)
  const clsObserver = new PerformanceObserver((list) => {
    let cumulativeScore = 0;

    for (const entry of list.getEntries()) {
      const layoutShift = entry as any;
      if (!layoutShift.hadRecentInput) {
        cumulativeScore += layoutShift.value;
      }
    }


    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'web_vitals', {
        name: 'CLS',
        value: cumulativeScore,
        location: window.location.pathname,
      });
    }
  });

  // Track INP (Interaction to Next Paint)
  const inpObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const inp = entry as PerformanceEventTiming;
      const interactionTime = inp.processingStart - inp.startTime;

      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          name: 'INP',
          value: interactionTime,
          location: window.location.pathname,
        });
      }
    }
  });

  // Start observing
  try {
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
    inpObserver.observe({ entryTypes: ['first-input'] });
  } catch (error) {
  }
};

// Image preloading strategy for Melbourne location pages
export const preloadLocationImages = (location: string) => {
  const criticalImages = [
    `/src/assets/professional-mould-hero.jpg`,
    `/src/assets/residential-inspection.jpg`,
    `/src/assets/mould-removal.jpg`,
  ];

  criticalImages.forEach((src, index) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');

    // Set fetch priority for hero image
    if (index === 0) {
      link.setAttribute('fetchpriority', 'high');
    }

    document.head.appendChild(link);
  });
};

// Batch image optimisation for all Melbourne locations
export const batchOptimizeLocationImages = (locations: string[]) => {
  const optimisationPromises = locations.map(location => {
    return new Promise((resolve) => {
      // Simulate image optimisation
      setTimeout(() => {
        resolve(location);
      }, 100);
    });
  });

  return Promise.all(optimisationPromises);
};

// Critical CSS for image optimisation
export const generateCriticalImageCSS = (): string => {
  return `
    /* Critical CSS for image optimisation and CLS prevention */
    .optimized-image-container {
      position: relative;
      overflow: hidden;
      background-color: #f3f4f6;
    }

    .optimized-image-skeleton {
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, #f3f4f6 0%, #e5e7eb 50%, #f3f4f6 100%);
      background-size: 200% 100%;
      animation: skeleton-loading 2s infinite;
    }

    @keyframes skeleton-loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }

    .hero-image-optimized {
      aspect-ratio: 16/9;
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    .service-image-optimized {
      aspect-ratio: 4/3;
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    .location-image-optimized {
      aspect-ratio: 3/2;
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    /* Australian mobile optimisation */
    @media (max-width: 768px) {
      .hero-image-optimized {
        aspect-ratio: 4/3;
      }
    }

    /* High-DPI displays (Australian mobile devices) */
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      .optimized-image {
        image-rendering: -webkit-optimize-contrast;
        image-rendering: crisp-edges;
      }
    }
  `;
};

export default {
  AUSTRALIAN_VITALS_TARGETS,
  generateVitalsOptimizedImage,
  optimizeHeroImageLCP,
  preventLayoutShift,
  trackCoreWebVitals,
  preloadLocationImages,
  batchOptimizeLocationImages,
  generateCriticalImageCSS
};