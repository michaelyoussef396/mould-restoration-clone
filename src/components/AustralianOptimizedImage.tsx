import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useMemoryOptimization } from '@/utils/advancedPerformanceOptimization';

interface AustralianOptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: 'critical' | 'high' | 'medium' | 'low';
  width?: number;
  height?: number;
  location?: string;
  service?: string;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
  mobileOptimized?: boolean;
  networkAware?: boolean;
}

// Australian device breakpoints and optimized sizes
const AUSTRALIAN_BREAKPOINTS = {
  mobile: [375, 414], // iPhone SE, standard smartphone
  tablet: [768, 1024], // iPad, Android tablets
  desktop: [1440, 1920] // Desktop screens
};

export const AustralianOptimizedImage: React.FC<AustralianOptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  priority = 'medium',
  width,
  height,
  location,
  service,
  sizes: customSizes,
  onLoad,
  onError,
  mobileOptimized = true,
  networkAware = true,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority === 'critical');
  const [networkType, setNetworkType] = useState<string>('4g');
  const [imageFormat, setImageFormat] = useState<'avif' | 'webp' | 'original'>('webp');

  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const startTime = useRef<number>(0);

  const { addObserver, addTimer } = useMemoryOptimization();

  // Network detection for Australian mobile networks
  useEffect(() => {
    if (!networkAware) return;

    const connection = (navigator as any).connection || (navigator as any).mozConnection;
    if (connection) {
      setNetworkType(connection.effectiveType);

      const handleNetworkChange = () => {
        setNetworkType(connection.effectiveType);
      };

      connection.addEventListener('change', handleNetworkChange);
      return () => connection.removeEventListener('change', handleNetworkChange);
    }
  }, [networkAware]);

  // Format detection for modern browsers
  useEffect(() => {
    const detectOptimalFormat = async () => {
      // Check AVIF support
      if (await supportsImageFormat('avif')) {
        setImageFormat('avif');
        return;
      }

      // Check WebP support
      if (await supportsImageFormat('webp')) {
        setImageFormat('webp');
        return;
      }

      // Fallback to original
      setImageFormat('original');
    };

    detectOptimalFormat();
  }, []);

  // Intersection Observer for lazy loading with Australian mobile optimization
  useEffect(() => {
    if (priority === 'critical' || isInView) return;

    const observerOptions: IntersectionObserverInit = {
      // Larger root margin for slower Australian networks
      rootMargin: networkType === 'slow-2g' || networkType === '2g' ? '100px 0px' : '50px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, observerOptions);

    if (containerRef.current) {
      observer.observe(containerRef.current);
      addObserver(`image-${src}`, observer);
    }

    return () => observer.disconnect();
  }, [priority, isInView, networkType, src, addObserver]);

  // Performance tracking for Australian networks
  const trackImagePerformance = useCallback((loadTime: number) => {
    const performanceData = {
      src,
      location,
      service,
      loadTime,
      networkType,
      imageFormat,
      priority,
      timestamp: Date.now()
    };


    // Send to analytics if available
    if (window.gtag) {
      window.gtag('event', 'image_load_performance', performanceData);
    }
  }, [src, location, service, networkType, imageFormat, priority]);

  // Generate Australian mobile-optimized srcSet
  const generateAustralianSrcSet = useCallback((baseSrc: string, format: string): string => {
    const ext = baseSrc.split('.').pop()?.toLowerCase();
    const baseName = baseSrc.replace(`.${ext}`, '');

    // Different size strategies based on network speed
    const sizes = networkType === 'slow-2g' || networkType === '2g'
      ? [375, 768] // Fewer sizes for slow networks
      : [375, 414, 768, 1024, 1440, 1920]; // Full range for faster networks

    return sizes.map(size => {
      let srcUrl: string;
      switch (format) {
        case 'avif':
          srcUrl = `${baseName}_${size}w.avif`;
          break;
        case 'webp':
          srcUrl = `${baseName}_${size}w.webp`;
          break;
        default:
          srcUrl = `${baseName}_${size}w.${ext}`;
      }
      return `${srcUrl} ${size}w`;
    }).join(', ');
  }, [networkType]);

  // Generate responsive sizes optimized for Australian mobile usage
  const generateResponsiveSizes = useCallback((): string => {
    if (customSizes) return customSizes;

    // Network-aware responsive sizes
    const baseResponsive = {
      critical: '100vw',
      high: '(max-width: 375px) 100vw, (max-width: 768px) 75vw, 50vw',
      medium: '(max-width: 375px) 100vw, (max-width: 768px) 50vw, 33vw',
      low: '(max-width: 375px) 50vw, (max-width: 768px) 33vw, 25vw'
    };

    // Adjust for slow networks
    if (networkType === 'slow-2g' || networkType === '2g') {
      return baseResponsive.low; // Use smallest sizes for slow networks
    }

    return baseResponsive[priority];
  }, [customSizes, priority, networkType]);

  // Handle image load
  const handleLoad = useCallback(() => {
    const loadTime = performance.now() - startTime.current;
    setIsLoaded(true);
    trackImagePerformance(loadTime);
    onLoad?.();
  }, [trackImagePerformance, onLoad]);

  // Handle image error
  const handleError = useCallback(() => {
    setHasError(true);
    console.warn(`Failed to load image: ${src}`);
    onError?.();
  }, [src, onError]);

  // Generate Melbourne-specific alt text
  const generateMelbourneAlt = useCallback((): string => {
    if (alt.includes('Professional') && alt.includes('Melbourne')) {
      return alt; // Already optimized
    }

    const baseAlt = location && service
      ? `Professional ${service} ${location} Melbourne`
      : 'Professional mould removal Melbourne';

    return alt.includes('Professional') ? alt : `${baseAlt} ${alt}`;
  }, [alt, location, service]);

  // Start timing when component mounts and image should load
  useEffect(() => {
    if (isInView || priority === 'critical') {
      startTime.current = performance.now();
    }
  }, [isInView, priority]);

  // Error fallback
  if (hasError) {
    return (
      <div
        ref={containerRef}
        className={`flex items-center justify-center bg-gray-200 ${className}`}
        style={{
          width,
          height,
          aspectRatio: width && height ? `${width}/${height}` : undefined
        }}
      >
        <span className="text-gray-500 text-sm">
          {location ? `${location} service image unavailable` : 'Image unavailable'}
        </span>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: width && height ? `${width}/${height}` : undefined,
        backgroundColor: '#f3f4f6' // Prevent CLS with background
      }}
    >
      {/* Loading skeleton - prevents CLS */}
      {!isLoaded && (isInView || priority === 'critical') && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse"
          style={{
            backgroundSize: '200% 100%',
            animation: 'loading-shimmer 2s infinite linear'
          }}
        />
      )}

      {/* Only render image when in view or critical priority */}
      {(isInView || priority === 'critical') && (
        <picture>
          {/* AVIF for maximum compression on modern browsers */}
          {imageFormat === 'avif' && (
            <source
              srcSet={generateAustralianSrcSet(src, 'avif')}
              sizes={generateResponsiveSizes()}
              type="image/avif"
            />
          )}

          {/* WebP for broader modern browser support */}
          <source
            srcSet={generateAustralianSrcSet(src, 'webp')}
            sizes={generateResponsiveSizes()}
            type="image/webp"
          />

          {/* Original format fallback */}
          <img
            ref={imgRef}
            src={src}
            srcSet={generateAustralianSrcSet(src, 'original')}
            alt={generateMelbourneAlt()}
            className={`
              transition-opacity duration-300 w-full h-full object-cover
              ${isLoaded ? 'opacity-100' : 'opacity-0'}
            `}
            loading={priority === 'critical' ? 'eager' : loading}
            decoding="async"
            fetchPriority={priority === 'critical' ? 'high' : 'auto'}
            width={width}
            height={height}
            sizes={generateResponsiveSizes()}
            onLoad={handleLoad}
            onError={handleError}
            // Accessibility and SEO enhancements
            role={alt ? undefined : 'presentation'}
            aria-hidden={alt ? undefined : 'true'}
          />
        </picture>
      )}

      {/* Network-aware loading indicator */}
      {!isLoaded && (isInView || priority === 'critical') && (
        <div className="absolute bottom-2 right-2">
          <div className={`
            w-2 h-2 rounded-full animate-pulse
            ${networkType === 'slow-2g' || networkType === '2g' ? 'bg-red-400' :
              networkType === '3g' ? 'bg-yellow-400' : 'bg-green-400'}
          `} />
        </div>
      )}
    </div>
  );
};

// Helper function to detect image format support
const supportsImageFormat = (format: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const testImages = {
      avif: 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=',
      webp: 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
    };

    const img = new Image();
    img.onload = () => resolve(img.width > 0 && img.height > 0);
    img.onerror = () => resolve(false);
    img.src = testImages[format as keyof typeof testImages];
  });
};

// Location-specific optimized image component
interface LocationImageProps extends AustralianOptimizedImageProps {
  propertyType?: string;
  context?: string;
}

export const LocationOptimizedImage: React.FC<LocationImageProps> = ({
  location,
  service,
  propertyType,
  context,
  alt,
  ...props
}) => {
  // Generate SEO-optimized alt text for Melbourne locations
  const generateLocationAlt = (): string => {
    if (alt.includes('Professional') && alt.includes('Melbourne')) {
      return alt;
    }

    let generatedAlt = `Professional ${service || 'mould removal'} ${location} Melbourne`;

    if (context) {
      generatedAlt += ` ${context}`;
    }

    if (propertyType) {
      generatedAlt += ` ${propertyType}`;
    }

    return alt ? `${generatedAlt} ${alt}` : generatedAlt;
  };

  return (
    <AustralianOptimizedImage
      {...props}
      alt={generateLocationAlt()}
      location={location}
      service={service}
    />
  );
};

// Hero image component with critical loading
export const HeroOptimizedImage: React.FC<AustralianOptimizedImageProps> = (props) => {
  return (
    <AustralianOptimizedImage
      {...props}
      priority="critical"
      loading="eager"
      className={`w-full h-full object-cover ${props.className || ''}`}
      sizes="100vw"
    />
  );
};

// Service image component with medium priority
export const ServiceOptimizedImage: React.FC<AustralianOptimizedImageProps & {
  stage?: string;
  equipment?: string;
}> = ({ service, stage, equipment, alt, ...props }) => {
  const generateServiceAlt = (): string => {
    if (alt.includes('Professional')) return alt;

    let generatedAlt = `Professional ${service} Melbourne`;

    if (stage) {
      generatedAlt += ` ${stage}`;
    }

    if (equipment) {
      generatedAlt += ` using ${equipment}`;
    }

    generatedAlt += ' IICRC certified process';

    return generatedAlt;
  };

  return (
    <AustralianOptimizedImage
      {...props}
      alt={generateServiceAlt()}
      service={service}
      priority="medium"
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  );
};

// Add keyframes for loading animation
const styles = `
@keyframes loading-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default AustralianOptimizedImage;