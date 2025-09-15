import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  priority = false,
  width,
  height,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();
        }
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [priority, isInView]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate responsive image sources
  const generateSrcSet = (baseSrc: string) => {
    const ext = baseSrc.split('.').pop();
    const baseName = baseSrc.replace(`.${ext}`, '');

    // For now, we'll use the same image at different qualities
    // In production, you'd have different sized versions
    return [
      `${baseSrc} 1x`,
      `${baseSrc} 2x`,
    ].join(', ');
  };

  const getWebPSource = (src: string) => {
    const ext = src.split('.').pop();
    return src.replace(`.${ext}`, '.webp');
  };

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-200 ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder/skeleton while loading */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ width, height }}
        />
      )}

      {/* Only render image when in view or priority */}
      {(isInView || priority) && (
        <picture>
          {/* WebP source for modern browsers */}
          <source
            srcSet={generateSrcSet(getWebPSource(src))}
            sizes={sizes}
            type="image/webp"
          />

          {/* Fallback to original format */}
          <img
            src={src}
            srcSet={generateSrcSet(src)}
            alt={alt}
            className={`transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${className}`}
            loading={priority ? 'eager' : loading}
            width={width}
            height={height}
            sizes={sizes}
            onLoad={handleLoad}
            onError={handleError}
            // SEO and accessibility attributes
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
          />
        </picture>
      )}
    </div>
  );
};

// Location-specific image component for Melbourne suburbs
interface LocationImageProps extends OptimizedImageProps {
  location: string;
  propertyType: string;
  serviceType?: string;
  context?: string;
}

export const LocationOptimizedImage: React.FC<LocationImageProps> = ({
  location,
  propertyType,
  serviceType = 'mould removal',
  context,
  alt,
  ...props
}) => {
  // Generate SEO-optimized alt text following the pattern:
  // "Professional mould removal [suburb] Melbourne [context]"
  const generateMelbourneAlt = () => {
    if (alt && !alt.includes('Professional')) {
      // If custom alt text is provided but doesn't follow our pattern, enhance it
      const baseAlt = `Professional ${serviceType} ${location} Melbourne`;
      if (context) {
        return `${baseAlt} ${context} ${propertyType}`;
      }
      return `${baseAlt} ${propertyType}`;
    }

    // Use provided alt if it already follows our pattern
    if (alt) return alt;

    // Generate from props
    const baseAlt = `Professional ${serviceType} ${location} Melbourne`;
    if (context) {
      return `${baseAlt} ${context} ${propertyType}`;
    }
    return `${baseAlt} ${propertyType}`;
  };

  return <OptimizedImage {...props} alt={generateMelbourneAlt()} />;
};

// Service-specific image component
interface ServiceImageProps extends OptimizedImageProps {
  service: string;
  stage?: string;
  equipment?: string;
}

export const ServiceOptimizedImage: React.FC<ServiceImageProps> = ({
  service,
  stage,
  equipment,
  alt,
  ...props
}) => {
  const generateServiceAlt = () => {
    if (alt && alt.includes('Professional')) return alt;

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

  return <OptimizedImage {...props} alt={generateServiceAlt()} />;
};

// Hero image component with specific optimization
interface HeroImageProps extends OptimizedImageProps {
  backgroundImage?: boolean;
}

export const HeroOptimizedImage: React.FC<HeroImageProps> = ({
  backgroundImage = false,
  className = '',
  ...props
}) => {
  if (backgroundImage) {
    return (
      <div
        className={`bg-cover bg-center bg-no-repeat ${className}`}
        style={{ backgroundImage: `url(${props.src})` }}
        role="img"
        aria-label={props.alt}
      />
    );
  }

  return (
    <OptimizedImage
      {...props}
      priority={true}
      loading="eager"
      className={`w-full h-full object-cover ${className}`}
    />
  );
};