import React, { useEffect, useRef, useState } from 'react';

interface AdvancedHeroLCPProps {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
  priority?: boolean;
}

export const AdvancedHeroLCP: React.FC<AdvancedHeroLCPProps> = ({
  src,
  alt,
  className = '',
  children,
  priority = true
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDecoded, setIsDecoded] = useState(false);

  useEffect(() => {
    if (!priority) return;

    // Aggressive preload strategy for immediate LCP optimization
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = src;
    preloadLink.setAttribute('fetchpriority', 'high');
    preloadLink.setAttribute('importance', 'high');
    preloadLink.crossOrigin = 'anonymous';
    document.head.appendChild(preloadLink);

    // Create image element for immediate loading
    const img = new Image();
    img.src = src;
    img.fetchPriority = 'high';
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      setIsLoaded(true);
      // Use decode() for faster paint
      img.decode().then(() => {
        setIsDecoded(true);
      }).catch(() => {
        setIsDecoded(true); // Fallback if decode fails
      });
    };

    img.onerror = () => {
      setIsLoaded(true);
      setIsDecoded(true);
    };

    return () => {
      // Cleanup
      if (preloadLink.parentNode) {
        preloadLink.parentNode.removeChild(preloadLink);
      }
    };
  }, [src, priority]);

  // Immediate render for priority images to prevent LCP delays
  const shouldShowImage = priority || isLoaded;

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{
        // Prevent layout shift with intrinsic dimensions
        aspectRatio: '16/9',
        minHeight: '100vh',
        // Hardware acceleration for faster rendering
        willChange: 'transform',
        transform: 'translateZ(0)',
        // Contain layout to prevent repaints
        contain: 'layout style paint',
        // Reserve space immediately
        backgroundColor: '#1e40af',
      }}
    >
      {/* Critical image element for LCP optimization */}
      {shouldShowImage && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            // Immediate display for LCP
            opacity: priority ? 1 : (isDecoded ? 1 : 0),
            transition: priority ? 'none' : 'opacity 0.2s ease-out',
            // Hardware acceleration
            willChange: priority ? 'auto' : 'opacity',
            transform: 'translateZ(0)',
            // Image optimization
            imageRendering: 'crisp-edges',
          }}
          loading="eager"
          fetchPriority="high"
          decoding="sync" // Synchronous decoding for LCP
          crossOrigin="anonymous"
          width={1920}
          height={1080}
          sizes="100vw"
          onLoad={() => setIsLoaded(true)}
        />
      )}

      {/* Overlay for better text contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/50 to-transparent"
        style={{
          // Immediate render
          willChange: 'auto',
          contain: 'layout style paint',
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

// Specialized hero component with critical CSS and CLS prevention
export const CriticalHeroSection: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-center pt-[106px]"
      style={{
        // Fixed dimensions to prevent CLS
        minHeight: '100vh',
        height: '100vh',
        width: '100%',
        // Immediate render without layout shifts
        contain: 'layout style paint',
        willChange: 'auto',
      }}
    >
      {/* Background with instant placeholder for LCP */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          // Instant blue gradient placeholder for immediate LCP
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)',
          // Hardware acceleration
          willChange: 'auto',
          transform: 'translateZ(0)',
          contain: 'layout style paint',
        }}
      />

      {/* Actual hero image loads on top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/src/assets/hero-background-optimized.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          // Load with slight delay to avoid blocking LCP
          opacity: 1,
          animation: 'fadeIn 0.5s ease-in-out 0.1s both',
          // Hardware acceleration
          willChange: 'auto',
          transform: 'translateZ(0)',
          contain: 'layout style paint',
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.8) 0%, rgba(59, 130, 246, 0.6) 50%, rgba(30, 64, 175, 0.4) 100%)',
          contain: 'layout style paint',
        }}
      />

      {/* Content with fixed dimensions to prevent CLS */}
      <div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          // Fixed content area to prevent layout shifts
          width: '100%',
          maxWidth: '1200px',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          contain: 'layout style',
        }}
      >
        <div
          className="text-center w-full"
          style={{
            // Reserve exact space to prevent CLS
            minHeight: '300px',
            contain: 'layout style',
          }}
        >
          {/* Hero content with reserved dimensions */}
          <h1
            style={{
              // Fixed dimensions for CLS prevention
              minHeight: '120px',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              color: '#ffffff',
              margin: '0 0 1.5rem 0',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              fontDisplay: 'swap',
              // Prevent layout shifts
              contain: 'layout style',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            Professional Mould Removal & Inspection
            <span style={{ color: '#93c5fd' }}> Melbourne</span>
          </h1>

          <p
            style={{
              // Fixed dimensions for CLS prevention
              minHeight: '60px',
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              color: 'rgba(255, 255, 255, 0.9)',
              margin: '0 auto 2rem auto',
              maxWidth: '600px',
              fontWeight: 400,
              lineHeight: 1.5,
              // Prevent layout shifts
              contain: 'layout style',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            IICRC-certified technicians providing professional service. Protecting Melbourne families from dangerous mould for over 5 years.
          </p>

          {/* CTA with fixed dimensions */}
          <div
            style={{
              // Fixed CTA area to prevent CLS
              minHeight: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              contain: 'layout style',
            }}
          >
            <a
              href="tel:1800954117"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem 2rem',
                fontSize: '1.125rem',
                fontWeight: 600,
                color: '#ffffff',
                backgroundColor: '#2563eb',
                border: 'none',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                transition: 'background-color 0.2s ease',
                minHeight: '56px',
                minWidth: '280px',
                // Prevent layout shifts
                willChange: 'auto',
                contain: 'layout style',
              }}
            >
              Professional Service - Call Now
              <svg style={{ marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem' }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};