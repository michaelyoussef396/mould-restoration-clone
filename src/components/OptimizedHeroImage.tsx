import { useEffect, useState } from 'react';
import { getOptimalHeroImage, heroImageVariants } from '@/utils/heroImageOptimization';

interface OptimizedHeroImageProps {
  src: string;
  alt?: string;
  className?: string;
  priority?: boolean;
}

export const OptimizedHeroImage: React.FC<OptimizedHeroImageProps> = ({
  src,
  alt = '',
  className = '',
  priority = false
}) => {
  const [currentImage, setCurrentImage] = useState<string>('');
  const [lcpImageLoaded, setLcpImageLoaded] = useState(false);
  const [highQualityLoaded, setHighQualityLoaded] = useState(false);

  useEffect(() => {
    if (!priority) {
      // For non-priority images, use the original src
      setCurrentImage(src);
      return;
    }

    // Step 1: Get ultra-optimized image for immediate LCP
    const optimalImage = getOptimalHeroImage();
    const highQualityImage = heroImageVariants.find(v => v.quality === 'standard')!;

    // Set initial ultra-optimized image immediately
    setCurrentImage(optimalImage.src);

    // Step 2: Preload LCP image with highest priority
    const lcpImg = new Image();
    lcpImg.src = optimalImage.src;
    lcpImg.fetchPriority = 'high';
    lcpImg.decoding = 'sync';
    lcpImg.onload = () => {
      setLcpImageLoaded(true);
      console.log(`LCP Image loaded: ${optimalImage.sizeKB}kB`);

      // Step 3: Preload higher quality version after LCP is achieved
      setTimeout(() => {
        const highImg = new Image();
        highImg.src = highQualityImage.src;
        highImg.onload = () => {
          setCurrentImage(highQualityImage.src);
          setHighQualityLoaded(true);
          console.log(`High quality image upgraded: ${highQualityImage.sizeKB}kB`);
        };
        highImg.onerror = () => {
          console.warn('High quality image failed to load, keeping LCP version');
        };
      }, 150); // Delay to ensure LCP is measured first
    };

    lcpImg.onerror = () => {
      console.error('LCP image failed to load, using fallback');
      setCurrentImage(src); // Fallback to original
    };

    // Preload link for even faster loading
    if (!document.querySelector(`link[href*="${optimalImage.src}"]`)) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = optimalImage.src;
      link.setAttribute('fetchpriority', 'high');
      link.type = 'image/webp';
      document.head.appendChild(link);
    }
  }, [src, priority]);

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* LCP-optimized IMG element for fastest rendering */}
      <img
        src={currentImage || src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading={priority ? 'eager' : 'lazy'}
        decoding="sync" // Synchronous decode for LCP
        fetchpriority={priority ? 'high' : 'auto'}
        onLoad={() => {
          if (!lcpImageLoaded && priority) {
            setLcpImageLoaded(true);
          }
        }}
        style={{
          // Hardware acceleration for faster rendering
          willChange: 'auto',
          transform: 'translateZ(0)',
          // Immediate visibility for LCP - no fade for critical image
          opacity: 1,
          transition: 'none',
          // Prevent layout shifts
          minHeight: '100vh',
          minWidth: '100vw'
        }}
        // Dimensions match LCP image for layout stability
        width={priority ? 1200 : 1920}
        height={priority ? 675 : 1080}
      />

      {/* Fallback background for loading state */}
      {!lcpImageLoaded && priority && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"
          style={{
            opacity: 0.3,
            transition: 'opacity 0.2s ease'
          }}
        />
      )}

    </div>
  );
};