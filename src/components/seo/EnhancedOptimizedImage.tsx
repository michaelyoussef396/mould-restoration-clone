import React, { useState, useRef, useEffect } from 'react';
import {
  IMAGE_CONFIGS,
  generateMelbourneAlt,
  SERVICE_ALT_PATTERNS,
  PROPERTY_CONTEXTS,
  LOCATION_IMAGE_METADATA,
  RESPONSIVE_SIZES,
  generateWebPSource,
  generateSrcSet,
  AUSTRALIAN_MOBILE_OPTIMIZATIONS,
  createIntersectionObserver,
  trackImagePerformance
} from '@/utils/imageOptimization';
import { trackImageLoad } from '@/utils/performanceMonitoring';

interface EnhancedOptimizedImageProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  loading?: 'lazy' | 'eager';

  // Melbourne SEO specific props
  location?: string;
  service?: 'inspection' | 'removal' | 'remediation' | 'fogging' | 'materialRemoval' | 'subfloor';
  propertyType?: keyof typeof PROPERTY_CONTEXTS | string;
  context?: string;
  imageType?: 'hero' | 'service' | 'location' | 'thumbnail' | 'gallery';

  // Performance props
  quality?: number;
  sizes?: string;
  placeholder?: boolean;

  // Event handlers
  onLoad?: () => void;
  onError?: () => void;
  onInView?: () => void;
}

export const EnhancedOptimizedImage: React.FC<EnhancedOptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  loading = 'lazy',
  location,
  service,
  propertyType,
  context,
  imageType = 'service',
  quality,
  sizes,
  placeholder = true,
  onLoad,
  onError,
  onInView,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadStartTime = useRef<number>(0);

  // Get image configuration based on type
  const config = IMAGE_CONFIGS[imageType] || IMAGE_CONFIGS.service;
  const finalQuality = quality || config.quality;
  const shouldLazyLoad = !priority && config.lazy;

  // Generate SEO-optimized alt text
  const generateSEOAlt = (): string => {
    if (alt && alt.includes('Professional mould')) {
      return alt; // Already optimized
    }

    if (service && location) {
      const servicePattern = SERVICE_ALT_PATTERNS[service];
      if (servicePattern) {
        let contextText = context;

        // Add property type context if available
        if (propertyType && typeof propertyType === 'string') {
          const propertyCategory = Object.values(PROPERTY_CONTEXTS).find(category =>
            Object.keys(category).includes(propertyType)
          );
          if (propertyCategory) {
            const propertyContext = propertyCategory[propertyType as keyof typeof propertyCategory];
            contextText = contextText ? `${contextText} ${propertyContext}` : propertyContext;
          }
        }

        // Use location metadata for enhanced context
        if (LOCATION_IMAGE_METADATA[location as keyof typeof LOCATION_IMAGE_METADATA]) {
          const locationData = LOCATION_IMAGE_METADATA[location as keyof typeof LOCATION_IMAGE_METADATA];
          if (!contextText) {
            contextText = locationData.context;
          }
        }

        return servicePattern(location, contextText);
      }
    }

    // Fallback to standard Melbourne pattern
    if (location && service) {
      return generateMelbourneAlt(location, service, propertyType || 'property', context);
    }

    // Use provided alt or create basic Melbourne alt
    const baseAlt = alt || 'Professional mould removal Melbourne';
    if (!baseAlt.includes('Melbourne')) {
      return `${baseAlt} Melbourne`;
    }

    return baseAlt;
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView || !shouldLazyLoad) return;

    observerRef.current = createIntersectionObserver(
      (entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          onInView?.();
          observerRef.current?.disconnect();
        }
      },
      {
        rootMargin: AUSTRALIAN_MOBILE_OPTIMIZATIONS.lazyLoadMargin,
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [priority, isInView, shouldLazyLoad, onInView]);

  // Handle image load with performance tracking
  const handleLoad = () => {
    const loadTime = performance.now() - loadStartTime.current;
    setIsLoaded(true);
    trackImagePerformance(src, loadTime);
    trackImageLoad(src, loadTime, location);
    onLoad?.();
  };

  // Handle image error
  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate responsive sizes
  const responsiveSizes = sizes || RESPONSIVE_SIZES[imageType] || RESPONSIVE_SIZES.card;

  // Generate WebP sources
  const webpSrc = generateWebPSource(src);
  const hasWebP = src !== webpSrc;

  // Generate srcSet for different sizes
  const srcSet = config.sizes ? generateSrcSet(src, config.sizes) : undefined;
  const webpSrcSet = hasWebP && config.sizes ? generateSrcSet(webpSrc, config.sizes) : undefined;

  // Determine if image should load
  const shouldLoad = priority || isInView || !shouldLazyLoad;

  // Start load timing when image begins loading
  useEffect(() => {
    if (shouldLoad) {
      loadStartTime.current = performance.now();
    }
  }, [shouldLoad]);

  // Calculate aspect ratio for CLS prevention
  const aspectRatio = width && height ? `${width}/${height}` : undefined;

  // Placeholder styles
  const placeholderStyle: React.CSSProperties = {
    backgroundColor: '#f8fafc',
    backgroundImage: `linear-gradient(45deg, #e2e8f0 25%, transparent 25%),
                     linear-gradient(-45deg, #e2e8f0 25%, transparent 25%),
                     linear-gradient(45deg, transparent 75%, #e2e8f0 75%),
                     linear-gradient(-45deg, transparent 75%, #e2e8f0 75%)`,
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
    aspectRatio,
    minHeight: height ? `${height}px` : '200px',
  };

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 text-gray-500 ${className}`}
        style={placeholderStyle}
      >
        <div className="text-center">
          <div className="text-4xl mb-2">📷</div>
          <div className="text-sm">Image unavailable</div>
          {location && (
            <div className="text-xs text-gray-400 mt-1">
              {location} Melbourne mould service
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={!isLoaded && placeholder ? placeholderStyle : {}}
    >
      {/* Loading placeholder */}
      {!isLoaded && placeholder && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-2" />
            <div className="text-xs text-gray-500">Loading...</div>
          </div>
        </div>
      )}

      {/* Actual image */}
      {shouldLoad && (
        <picture>
          {/* WebP source for modern browsers */}
          {hasWebP && (
            <source
              srcSet={webpSrcSet || webpSrc}
              sizes={responsiveSizes}
              type="image/webp"
            />
          )}

          {/* Fallback image */}
          <img
            src={src}
            srcSet={srcSet}
            alt={generateSEOAlt()}
            width={width}
            height={height}
            loading={priority ? 'eager' : loading}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
            className={`transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } object-cover w-full h-full`}
            style={{
              aspectRatio,
            }}
            sizes={responsiveSizes}
            onLoad={handleLoad}
            onError={handleError}
            // SEO and accessibility attributes
            itemProp="image"
            data-location={location}
            data-service={service}
          />
        </picture>
      )}

      {/* Priority image loading indicator */}
      {priority && !isLoaded && !hasError && (
        <div className="absolute top-2 right-2">
          <div className="w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">
            !
          </div>
        </div>
      )}
    </div>
  );
};

// Specialized components for different Melbourne location image types

interface LocationHeroImageProps extends Omit<EnhancedOptimizedImageProps, 'imageType' | 'priority'> {
  location: string;
}

export const LocationHeroImage: React.FC<LocationHeroImageProps> = (props) => (
  <EnhancedOptimizedImage
    {...props}
    imageType="hero"
    priority={true}
    loading="eager"
    className={`w-full h-[400px] md:h-[500px] object-cover ${props.className || ''}`}
  />
);

interface ServiceProcessImageProps extends Omit<EnhancedOptimizedImageProps, 'imageType'> {
  processStep?: string;
  equipment?: string;
}

export const ServiceProcessImage: React.FC<ServiceProcessImageProps> = ({
  processStep,
  equipment,
  context,
  ...props
}) => {
  // Enhance context with process and equipment info
  const enhancedContext = [processStep, equipment, context]
    .filter(Boolean)
    .join(' ');

  return (
    <EnhancedOptimizedImage
      {...props}
      imageType="service"
      context={enhancedContext}
      className={`w-full h-[250px] object-cover rounded-lg ${props.className || ''}`}
    />
  );
};

interface PropertyTypeImageProps extends Omit<EnhancedOptimizedImageProps, 'imageType'> {
  propertyCategory: keyof typeof PROPERTY_CONTEXTS;
  propertySubtype: string;
}

export const PropertyTypeImage: React.FC<PropertyTypeImageProps> = ({
  propertyCategory,
  propertySubtype,
  ...props
}) => {
  // Get property context from our configurations
  const propertyContext = PROPERTY_CONTEXTS[propertyCategory]?.[propertySubtype as keyof typeof PROPERTY_CONTEXTS[typeof propertyCategory]];

  return (
    <EnhancedOptimizedImage
      {...props}
      imageType="location"
      propertyType={propertySubtype}
      context={propertyContext}
      className={`w-full h-[200px] object-cover rounded-lg ${props.className || ''}`}
    />
  );
};

interface BeforeAfterImageProps extends Omit<EnhancedOptimizedImageProps, 'imageType'> {
  stage: 'before' | 'after' | 'progress';
  treatment?: string;
}

export const BeforeAfterImage: React.FC<BeforeAfterImageProps> = ({
  stage,
  treatment,
  context,
  ...props
}) => {
  const stageContext = `${stage} ${treatment || 'treatment'} ${context || ''}`.trim();

  return (
    <EnhancedOptimizedImage
      {...props}
      imageType="service"
      context={stageContext}
      className={`w-full h-[300px] object-cover rounded-lg ${props.className || ''}`}
    />
  );
};

// Gallery component with lazy loading optimisation
interface OptimizedImageGalleryProps {
  images: Array<{
    src: string;
    alt?: string;
    location?: string;
    service?: EnhancedOptimizedImageProps['service'];
    context?: string;
  }>;
  location?: string;
  columns?: 2 | 3 | 4;
}

export const OptimizedImageGallery: React.FC<OptimizedImageGalleryProps> = ({
  images,
  location,
  columns = 3,
}) => {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid gap-4 ${gridCols[columns]}`}>
      {images.map((image, index) => (
        <EnhancedOptimizedImage
          key={`${image.src}-${index}`}
          {...image}
          location={image.location || location}
          imageType="gallery"
          className="w-full h-[250px] object-cover rounded-lg hover:shadow-lg transition-shadow"
        />
      ))}
    </div>
  );
};

export default EnhancedOptimizedImage;