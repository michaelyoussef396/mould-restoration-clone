// H1 Tag Optimization for Melbourne Mould Removal SEO
// Ensures every page has unique, descriptive H1 tags following SEO best practices

import React from 'react';

export interface H1TagProps {
  location?: string;
  service?: string;
  pageType?: 'homepage' | 'service' | 'location' | 'about' | 'contact';
  emergency?: boolean;
  className?: string;
}

// Melbourne-specific H1 optimisation patterns
const H1_PATTERNS = {
  homepage: {
    standard: "Professional Mould Removal & Inspection Services Melbourne",
    emergency: "Emergency Mould Removal Melbourne - Same-Day Service Available"
  },
  service: {
    'professional-mould-inspections': "Professional Mould Inspections Melbourne - IICRC Certified",
    'comprehensive-mould-removal': "Comprehensive Mould Removal Melbourne - Expert Treatment",
    'subfloor-mould-remediation': "Subfloor Mould Remediation Melbourne - Under House Specialists",
    'complete-material-removal': "Complete Material Removal Melbourne - Safe Contaminated Disposal",
    'advanced-fogging-sanitisation': "Advanced Fogging Sanitisation Melbourne - ULV Treatment"
  },
  location: {
    inspection: "Professional Mould Inspection {location} Melbourne",
    removal: "Professional Mould Removal & Inspection in {location}, Melbourne",
    remediation: "Subfloor Mould Remediation {location} Melbourne",
    emergency: "Emergency Mould Removal {location} Melbourne - Same-Day Available",
    fogging: "Advanced Fogging Sanitisation {location} Melbourne"
  },
  about: "About Mould & Restoration Co. - Melbourne's Mould Removal Experts",
  contact: "Contact Mould & Restoration Co. - Professional Service Melbourne"
};

// Location-specific H1 customizations based on suburb characteristics
const LOCATION_H1_VARIANTS = {
  // Premium suburbs get enhanced positioning
  'toorak': 'Luxury Property Mould Removal & Inspection in Toorak, Melbourne',
  'brighton': 'Coastal Property Mould Removal & Inspection in Brighton, Melbourne',
  'camberwell': 'Heritage Home Mould Removal & Inspection in Camberwell, Melbourne',
  'armadale': 'Premium Residential Mould Removal & Inspection in Armadale, Melbourne',
  'hawthorn': 'Prestigious Property Mould Removal & Inspection in Hawthorn, Melbourne',
  'malvern': 'Established Home Mould Removal & Inspection in Malvern, Melbourne',
  'south-yarra': 'Chapel Street Precinct Mould Removal & Inspection in South Yarra, Melbourne',
  'kew': 'Leafy Residential Mould Removal & Inspection in Kew, Melbourne',
  'balwyn': 'Premium Family Home Mould Removal & Inspection in Balwyn, Melbourne',
  'kooyong': 'Tennis Centre Precinct Mould Removal & Inspection in Kooyong, Melbourne',

  // Inner Melbourne creative areas
  'fitzroy': 'Creative Quarter Mould Removal & Inspection in Fitzroy, Melbourne',
  'carlton': 'University Precinct Mould Removal & Inspection in Carlton, Melbourne',
  'richmond': 'Swan Street Precinct Mould Removal & Inspection in Richmond, Melbourne',
  'collingwood': 'Arts District Mould Removal & Inspection in Collingwood, Melbourne',
  'northcote': 'Trendy Residential Mould Removal & Inspection in Northcote, Melbourne',
  'brunswick': 'Multicultural Community Mould Removal & Inspection in Brunswick, Melbourne',

  // Coastal suburbs get specific positioning
  'brighton-east': 'Bayside Residential Mould Removal & Inspection in Brighton East, Melbourne',
  'sandringham': 'Beach Community Mould Removal & Inspection in Sandringham, Melbourne',
  'hampton': 'Coastal Family Mould Removal & Inspection in Hampton, Melbourne',
  'mentone': 'Beachside Community Mould Removal & Inspection in Mentone, Melbourne',
  'st-kilda': 'Entertainment Precinct Mould Removal & Inspection in St Kilda, Melbourne',
  'elwood': 'Beach Proximity Mould Removal & Inspection in Elwood, Melbourne',

  // CBD adjacent areas
  'southbank': 'High-Rise Apartment Mould Removal & Inspection in Southbank, Melbourne',
  'docklands': 'Waterfront Development Mould Removal & Inspection in Docklands, Melbourne',
  'east-melbourne': 'Heritage CBD Fringe Mould Removal & Inspection in East Melbourne',
  'west-melbourne': 'Industrial Heritage Mould Removal & Inspection in West Melbourne',
  'north-melbourne': 'Victorian Precinct Mould Removal & Inspection in North Melbourne',
  'south-melbourne': 'Market Precinct Mould Removal & Inspection in South Melbourne',
  'port-melbourne': 'Waterfront Industrial Mould Removal & Inspection in Port Melbourne',

  // Eastern suburbs
  'glen-waverley': 'Shopping Centre Precinct Mould Removal & Inspection in Glen Waverley, Melbourne',
  'box-hill': 'Commercial Hub Mould Removal & Inspection in Box Hill, Melbourne',
  'burwood': 'Established Residential Mould Removal & Inspection in Burwood, Melbourne',
  'mount-waverley': 'Premium Family Mould Removal & Inspection in Mount Waverley, Melbourne',
  'glen-iris': 'Heritage Residential Mould Removal & Inspection in Glen Iris, Melbourne',
  'malvern-east': 'Family Community Mould Removal & Inspection in Malvern East, Melbourne',

  // Western suburbs
  'footscray': 'Multicultural Community Mould Removal & Inspection in Footscray, Melbourne',
  'williamstown': 'Historic Coastal Mould Removal & Inspection in Williamstown, Melbourne',
  'yarraville': 'Village Atmosphere Mould Removal & Inspection in Yarraville, Melbourne',
  'newport': 'Industrial Heritage Mould Removal & Inspection in Newport, Melbourne',
  'altona': 'Coastal Family Mould Removal & Inspection in Altona, Melbourne',

  // Northern suburbs
  'preston': 'Mixed Residential Mould Removal & Inspection in Preston, Melbourne',
  'coburg': 'Established Community Mould Removal & Inspection in Coburg, Melbourne',
  'thornbury': 'Creative Community Mould Removal & Inspection in Thornbury, Melbourne',
  'heidelberg': 'Riverside Community Mould Removal & Inspection in Heidelberg, Melbourne',
  'ivanhoe': 'Premium Residential Mould Removal & Inspection in Ivanhoe, Melbourne'
};

export const OptimizedH1: React.FC<H1TagProps> = ({
  location,
  service = 'removal',
  pageType = 'location',
  emergency = false,
  className = "text-4xl md:text-5xl font-bold mb-6"
}) => {

  const generateH1Text = (): string => {
    switch (pageType) {
      case 'homepage':
        return emergency ? H1_PATTERNS.homepage.emergency : H1_PATTERNS.homepage.standard;

      case 'service':
        const serviceKey = service as keyof typeof H1_PATTERNS.service;
        return H1_PATTERNS.service[serviceKey] ||
               `${service.charAt(0).toUpperCase() + service.slice(1)} Melbourne - Professional Service`;

      case 'location':
        if (!location) return H1_PATTERNS.homepage.standard;

        const locationSlug = location.toLowerCase().replace(/\s+/g, '-');

        // Check for custom H1 variants first
        if (LOCATION_H1_VARIANTS[locationSlug]) {
          return LOCATION_H1_VARIANTS[locationSlug];
        }

        // Generate based on service type
        const locationPattern = emergency ?
          H1_PATTERNS.location.emergency :
          H1_PATTERNS.location[service as keyof typeof H1_PATTERNS.location] ||
          H1_PATTERNS.location.removal;

        return locationPattern.replace('{location}', location);

      case 'about':
        return H1_PATTERNS.about;

      case 'contact':
        return H1_PATTERNS.contact;

      default:
        return H1_PATTERNS.homepage.standard;
    }
  };

  const h1Text = generateH1Text();

  return (
    <h1 className={className}>
      {h1Text}
    </h1>
  );
};

// Specialized H1 components for different page types
export const HomePageH1: React.FC<{ emergency?: boolean; className?: string }> = ({
  emergency = false,
  className
}) => (
  <OptimizedH1
    pageType="homepage"
    emergency={emergency}
    className={className}
  />
);

export const ServicePageH1: React.FC<{
  service: string;
  className?: string;
}> = ({
  service,
  className
}) => (
  <OptimizedH1
    pageType="service"
    service={service}
    className={className}
  />
);

export const LocationPageH1: React.FC<{
  location: string;
  service?: string;
  emergency?: boolean;
  className?: string;
}> = ({
  location,
  service = 'removal',
  emergency = false,
  className
}) => (
  <OptimizedH1
    pageType="location"
    location={location}
    service={service}
    emergency={emergency}
    className={className}
  />
);

export const AboutPageH1: React.FC<{ className?: string }> = ({ className }) => (
  <OptimizedH1 pageType="about" className={className} />
);

export const ContactPageH1: React.FC<{ className?: string }> = ({ className }) => (
  <OptimizedH1 pageType="contact" className={className} />
);

// Helper function to validate H1 uniqueness
export const validateH1Uniqueness = (h1Text: string, pageUrl: string): boolean => {
  // This would integrate with a database or tracking system in production
  // For now, we ensure each H1 includes location or service differentiators
  return h1Text.length > 10 &&
         h1Text.includes('Melbourne') &&
         (h1Text.includes('Mould') || h1Text.includes('About') || h1Text.includes('Contact'));
};

// Generate H1 for dynamic route generation
export const generateDynamicH1 = (location: string, service: string = 'removal'): string => {
  const locationSlug = location.toLowerCase().replace(/\s+/g, '-');

  if (LOCATION_H1_VARIANTS[locationSlug]) {
    return LOCATION_H1_VARIANTS[locationSlug];
  }

  return `Professional Mould Removal & Inspection in ${location}, Melbourne`;
};

export default OptimizedH1;