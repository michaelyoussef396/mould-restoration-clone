import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  location?: string;
  service?: string;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
  onLoad?: () => void;
  onError?: () => void;
  style?: React.CSSProperties;
}

// Melbourne mould removal image alt text generator
const generateSEOAltText = (baseAlt: string, location?: string, service?: string): string => {
  let altText = baseAlt;

  if (service) {
    const serviceMap = {
      'inspection': 'mould inspection',
      'removal': 'mould removal',
      'remediation': 'mould remediation',
      'emergency': 'emergency mould response',
      'fogging': 'fogging sanitisation'
    };

    const serviceText = serviceMap[service as keyof typeof serviceMap] || service;
    altText = `Professional ${serviceText} ${baseAlt}`;
  }

  if (location && location !== 'Melbourne') {
    altText = `${altText} ${location} Melbourne`;
  } else if (!altText.includes('Melbourne')) {
    altText = `${altText} Melbourne`;
  }

  // Ensure Mould & Restoration Co. branding in alt text for SEO
  if (!altText.includes('Mould') && !altText.includes('restoration')) {
    altText = `${altText} - Mould & Restoration Co`;
  }

  return altText;
};

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  quality = 85,
  location,
  service,
  loading = 'lazy',
  placeholder = 'empty',
  onLoad,
  onError,
  style
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Use intersection observer for lazy loading
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    skip: priority // Skip intersection observer for priority images
  });

  // Determine if image should load
  const shouldLoad = priority || inView;

  // Generate SEO-optimized alt text
  const seoAltText = generateSEOAltText(alt, location, service);

  // Handle image load
  const handleLoad = () => {
    setImageLoaded(true);
    onLoad?.();
  };

  // Handle image error
  const handleError = () => {
    setImageError(true);
    onError?.();
  };

  // Generate WebP source if available
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const hasWebP = src !== webpSrc;

  // Responsive image sizes for Melbourne mobile users
  const sizes = width && height ?
    `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${width}px` :
    '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px';

  // Placeholder styles for CLS prevention
  const placeholderStyle: React.CSSProperties = {
    backgroundColor: '#f3f4f6',
    backgroundImage: 'linear-gradient(45deg, #e5e7eb 25%, transparent 25%), linear-gradient(-45deg, #e5e7eb 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e5e7eb 75%), linear-gradient(-45deg, transparent 75%, #e5e7eb 75%)',
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
    aspectRatio: width && height ? `${width}/${height}` : 'auto',
    ...style
  };

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={placeholderStyle}
    >
      {shouldLoad && !imageError ? (
        <picture>
          {/* WebP source for modern browsers */}
          {hasWebP && (
            <source
              srcSet={webpSrc}
              type="image/webp"
              sizes={sizes}
            />
          )}

          {/* Fallback image */}
          <img
            src={src}
            alt={seoAltText}
            width={width}
            height={height}
            loading={priority ? 'eager' : loading}
            decoding="async"
            className={`transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            } ${className}`}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              ...style
            }}
            onLoad={handleLoad}
            onError={handleError}
            sizes={sizes}
            // SEO attributes
            itemProp="image"
          />
        </picture>
      ) : imageError ? (
        <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-500">
          <span className="text-sm">Image unavailable</span>
        </div>
      ) : (
        <div className="animate-pulse bg-gray-200 w-full h-full" />
      )}

      {/* Loading indicator for priority images */}
      {priority && !imageLoaded && !imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

// Specialized component for hero images
export const HeroImage: React.FC<Omit<OptimizedImageProps, 'priority' | 'loading'>> = (props) => (
  <OptimizedImage
    {...props}
    priority={true}
    loading="eager"
    placeholder="blur"
  />
);

// Specialized component for service images
export const ServiceImage: React.FC<OptimizedImageProps> = (props) => (
  <OptimizedImage
    {...props}
    loading="lazy"
    quality={80}
  />
);

// Specialized component for location images
export const LocationImage: React.FC<OptimizedImageProps> = (props) => (
  <OptimizedImage
    {...props}
    loading="lazy"
    quality={75}
  />
);

export default OptimizedImage;