// SEO Components for Melbourne Mould Restoration Website
// Comprehensive technical SEO implementation for local search domination

// Meta Tags and Head Optimization
export {
  default as SEOHead,
  HomePageSEO,
  ServicePageSEO,
  LocationPageSEO
} from './SEOHead';

// Schema Markup and Structured Data
export {
  LocalBusinessSchema,
  ServiceSchema,
  OrganizationSchema,
  ReviewSchema
} from './SchemaMarkup';

// Performance Optimization
export {
  default as OptimizedImage,
  HeroImage,
  ServiceImage,
  LocationImage
} from './OptimizedImage';

// Analytics and Tracking
export {
  default as Analytics,
  HomePageAnalytics,
  ServicePageAnalytics,
  LocationPageAnalytics
} from './Analytics';

// Internal Linking Strategy
export {
  SEOInternalLink,
  RelatedServices,
  RelatedLocations,
  EmergencyContactLinks,
  ServiceLocationLinks
} from './InternalLinking';

// SEO Configuration Constants
export const SEO_CONFIG = {
  BUSINESS_NAME: 'Mould & Restoration Co.',
  PHONE: '1800 954 117',
  EMAIL: 'info@mouldrestoration.com.au',
  ABN: '47 683 089 652',
  BASE_URL: 'https://mouldrestoration.com.au',
  DEFAULT_IMAGE: 'https://mouldrestoration.com.au/assets/hero-background.jpg',

  MELBOURNE_COORDINATES: {
    latitude: '-37.8136',
    longitude: '144.9631'
  },

  OPERATING_HOURS: 'Mo-Su 07:00-19:00',
  RESPONSE_TIME: 'same-day professional service available',
  EXPERIENCE: '5+ years',
  PROPERTIES_RESTORED: '100+',
  CUSTOMER_RATING: '5.0',
  REVIEW_COUNT: '50+',

  PRIMARY_KEYWORDS: [
    'mould removal melbourne',
    'mould inspection melbourne',
    'emergency mould melbourne',
    'professional mould removal',
    'IICRC mould removal',
    'melbourne mould experts'
  ],

  MELBOURNE_SUBURBS: [
    'Brighton',
    'Carlton',
    'Fitzroy',
    'Malvern',
    'Prahran',
    'Richmond',
    'South Yarra',
    'Toorak'
  ],

  SERVICES: [
    'Professional Mould Inspections',
    'Comprehensive Mould Removal',
    'Subfloor Mould Remediation',
    'Complete Material Removal',
    'Advanced Fogging Sanitisation'
  ]
};

// SEO Utility Functions
export const SEO_UTILS = {

  // Generate Melbourne-optimized page titles
  generateTitle: (service?: string, location?: string, emergency?: boolean): string => {
    const prefix = emergency ? 'Emergency' : 'Professional';
    const serviceText = service || 'Mould Removal';
    const locationText = location && location !== 'Melbourne' ? ` ${location}` : '';

    return `${prefix} ${serviceText}${locationText} Melbourne - ${SEO_CONFIG.BUSINESS_NAME}`;
  },

  // Generate Melbourne-optimized meta descriptions
  generateDescription: (service?: string, location?: string, emergency?: boolean): string => {
    const serviceText = service || 'mould removal';
    const locationText = location && location !== 'Melbourne' ? ` ${location}` : '';
    const responseTime = emergency ? 'same-day professional service' : 'same day service available';

    return `Expert ${serviceText}${locationText} Melbourne. IICRC certified, ${SEO_CONFIG.EXPERIENCE} experience, ${SEO_CONFIG.PROPERTIES_RESTORED} properties restored. ${responseTime}. Call ${SEO_CONFIG.PHONE}.`;
  },

  // Generate canonical URLs
  generateCanonicalUrl: (path: string): string => {
    return `${SEO_CONFIG.BASE_URL}${path}`;
  },

  // Generate image alt text with SEO keywords
  generateImageAlt: (baseAlt: string, service?: string, location?: string): string => {
    let altText = baseAlt;

    if (service) {
      altText = `Professional ${service.toLowerCase()} ${altText}`;
    }

    if (location && location !== 'Melbourne') {
      altText = `${altText} ${location}`;
    }

    if (!altText.includes('Melbourne')) {
      altText = `${altText} Melbourne`;
    }

    return altText;
  },

  // Generate structured data for services
  generateServiceSchema: (serviceName: string, serviceDescription: string, serviceUrl: string) => {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceName,
      "description": serviceDescription,
      "url": serviceUrl,
      "provider": {
        "@type": "LocalBusiness",
        "name": SEO_CONFIG.BUSINESS_NAME,
        "telephone": SEO_CONFIG.PHONE,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Melbourne",
          "addressRegion": "Victoria",
          "addressCountry": "Australia"
        }
      },
      "areaServed": SEO_CONFIG.MELBOURNE_SUBURBS.map(suburb => ({
        "@type": "City",
        "name": `${suburb}, Victoria, Australia`
      }))
    };
  }
};

// Export default configuration
export default {
  SEO_CONFIG,
  SEO_UTILS
};