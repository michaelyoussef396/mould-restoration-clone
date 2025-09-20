// Image optimisation utilities for Melbourne mould restoration website

export interface ImageOptimizationConfig {
  quality: number;
  format: 'webp' | 'jpg' | 'png';
  sizes: number[];
  lazy: boolean;
  priority: boolean;
}

// Default optimisation settings for different image types
export const IMAGE_CONFIGS = {
  hero: {
    quality: 85,
    format: 'webp' as const,
    sizes: [400, 800, 1200, 1920],
    lazy: false,
    priority: true,
  },
  service: {
    quality: 80,
    format: 'webp' as const,
    sizes: [300, 600, 900],
    lazy: true,
    priority: false,
  },
  location: {
    quality: 80,
    format: 'webp' as const,
    sizes: [300, 600, 900],
    lazy: true,
    priority: false,
  },
  thumbnail: {
    quality: 75,
    format: 'webp' as const,
    sizes: [150, 300],
    lazy: true,
    priority: false,
  },
} as const;

// Melbourne suburb-specific image alt text generator
export const generateMelbourneAlt = (
  location: string,
  serviceType: string,
  propertyType: string,
  context?: string
): string => {
  const baseAlt = `Professional ${serviceType} ${location} Melbourne`;

  if (context) {
    return `${baseAlt} ${context} ${propertyType}`;
  }

  return `${baseAlt} ${propertyType}`;
};

// Service-specific alt text patterns
export const SERVICE_ALT_PATTERNS = {
  inspection: (location: string, context?: string) =>
    `Professional mould inspection ${location} Melbourne ${context || 'IICRC certified assessment'}`,

  removal: (location: string, context?: string) =>
    `Professional mould removal ${location} Melbourne ${context || 'complete remediation process'}`,

  remediation: (location: string, context?: string) =>
    `Professional mould remediation ${location} Melbourne ${context || 'restoration specialists'}`,

  fogging: (location: string, context?: string) =>
    `Advanced fogging sanitisation ${location} Melbourne ${context || 'ULV misting technology'}`,

  materialRemoval: (location: string, context?: string) =>
    `Complete material removal ${location} Melbourne ${context || 'safe demolition process'}`,

  subfloor: (location: string, context?: string) =>
    `Subfloor mould remediation ${location} Melbourne ${context || 'foundation treatment'}`,
} as const;

// Property type specific contexts
export const PROPERTY_CONTEXTS = {
  heritage: {
    federation: 'Federation home heritage property',
    victorian: 'Victorian terrace heritage building',
    edwardian: 'Edwardian residence historic property',
    weatherboard: 'weatherboard cottage heritage construction',
  },
  modern: {
    apartment: 'modern apartment complex',
    townhouse: 'contemporary townhouse development',
    warehouse: 'warehouse conversion industrial property',
    office: 'commercial office building',
  },
  coastal: {
    beachside: 'coastal property foreshore location',
    bayside: 'bayside residence marine environment',
    waterfront: 'waterfront property salt air exposure',
  },
  university: {
    student: 'student accommodation university precinct',
    rental: 'rental property high occupancy',
    boarding: 'boarding house university area',
  },
} as const;

// Generate responsive image sizes string
export const generateSizes = (breakpoints: Array<{ minWidth?: number; width: string }>) => {
  return breakpoints
    .map(bp => bp.minWidth ? `(min-width: ${bp.minWidth}px) ${bp.width}` : bp.width)
    .join(', ');
};

// Common responsive size patterns
export const RESPONSIVE_SIZES = {
  hero: generateSizes([
    { minWidth: 1024, width: '100vw' },
    { width: '100vw' }
  ]),

  card: generateSizes([
    { minWidth: 1024, width: '33vw' },
    { minWidth: 768, width: '50vw' },
    { width: '100vw' }
  ]),

  gallery: generateSizes([
    { minWidth: 1024, width: '25vw' },
    { minWidth: 768, width: '33vw' },
    { minWidth: 480, width: '50vw' },
    { width: '100vw' }
  ]),

  thumbnail: generateSizes([
    { minWidth: 768, width: '150px' },
    { width: '100px' }
  ]),
} as const;

// Core Web Vitals optimisation helpers
export const generateWebPSource = (src: string): string => {
  const ext = src.split('.').pop();
  return src.replace(`.${ext}`, '.webp');
};

export const generateSrcSet = (baseSrc: string, sizes: number[]): string => {
  const ext = baseSrc.split('.').pop();
  const baseName = baseSrc.replace(`.${ext}`, '');

  return sizes
    .map(size => `${baseName}_${size}w.${ext} ${size}w`)
    .join(', ');
};

// Preload critical images for LCP optimisation
export const preloadCriticalImages = (images: Array<{ src: string; sizes?: string }>) => {
  images.forEach(({ src, sizes }) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    if (sizes) link.setAttribute('imagesizes', sizes);
    document.head.appendChild(link);
  });
};

// Location-specific image optimisation metadata
export const LOCATION_IMAGE_METADATA = {
  Brighton: {
    context: 'coastal property Federation home',
    propertyTypes: ['federation', 'weatherboard', 'beachside', 'heritage'],
    keywords: ['coastal', 'salt air', 'weatherboard', 'federation', 'bayside'],
  },
  Carlton: {
    context: 'heritage terrace house university precinct',
    propertyTypes: ['victorian', 'terrace', 'student', 'heritage'],
    keywords: ['heritage', 'victorian', 'university', 'terrace', 'student housing'],
  },
  Richmond: {
    context: 'warehouse conversion industrial property',
    propertyTypes: ['warehouse', 'modern', 'industrial', 'apartment'],
    keywords: ['warehouse', 'conversion', 'industrial', 'modern', 'apartment'],
  },
  // Add more locations as needed
} as const;

// Image performance monitoring
export const trackImagePerformance = (src: string, loadTime: number) => {
  // In production, send to analytics
};

// Lazy loading optimisation
export const createIntersectionObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver => {
  const defaultOptions: IntersectionObserverInit = {
    rootMargin: '50px 0px',
    threshold: 0.1,
    ...options,
  };

  return new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      callback(entry);
    }
  }, defaultOptions);
};

// Image compression utilities (for future enhancement)
export const getOptimalImageFormat = (src: string): 'webp' | 'jpg' | 'png' => {
  // Simple format detection based on original file
  const ext = src.split('.').pop()?.toLowerCase();

  switch (ext) {
    case 'png':
      return 'webp'; // Convert PNG to WebP for better compression
    case 'jpg':
    case 'jpeg':
      return 'webp'; // Convert JPEG to WebP for better compression
    default:
      return 'webp';
  }
};

// Melbourne mobile network optimisation
export const AUSTRALIAN_MOBILE_OPTIMIZATIONS = {
  // Optimize for Australian mobile networks (typically slower than US/Europe)
  quality: {
    hero: 80,      // Slightly lower quality for heroes on mobile
    service: 75,   // Optimized for mobile viewing
    thumbnail: 70, // Aggressive compression for thumbnails
  },

  // Sizes optimized for Australian mobile devices
  mobileSizes: {
    small: 375,    // iPhone SE, small Android
    medium: 414,   // Standard smartphone
    large: 768,    // Tablet
  },

  // Lazy loading thresholds for slower networks
  lazyLoadMargin: '100px 0px', // Load images earlier on slow networks
};