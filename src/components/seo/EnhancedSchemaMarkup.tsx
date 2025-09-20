// Enhanced Schema Markup for Melbourne Mould Removal SEO
// Comprehensive structured data for all 144+ location pages and services

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SUBURB_META_DESCRIPTIONS, getSuburbsForSchema } from './MetaDescriptions';

interface EnhancedSchemaMarkupProps {
  pageName?: string;
  pageUrl?: string;
  serviceType?: 'inspection' | 'removal' | 'remediation' | 'emergency' | 'general';
  location?: string;
  customServices?: string[];
}

interface LocationSpecificServiceSchemaProps {
  location: string;
  serviceType: string;
  serviceDescription: string;
  serviceUrl: string;
  priceRange?: string;
  nearbySuburbs?: string[];
}

// Enhanced Melbourne business data with comprehensive coverage
const ENHANCED_BUSINESS_DATA = {
  name: "Mould & Restoration Co.",
  description: "Melbourne's premier mould inspection and remediation service. 5+ years experience, 100+ properties restored, serving all Melbourne metro areas with professional service 7am-7pm daily.",
  telephone: "1800954117",
  email: "admin@mouldandrestoration.com.au",
  url: "https://mouldrestoration.com.au",
  logo: "https://mouldrestoration.com.au/assets/mould-restoration-logo.png",
  image: "https://mouldrestoration.com.au/assets/hero-background.jpg",

  address: {
    streetAddress: "Melbourne Metropolitan Area",
    addressLocality: "Melbourne",
    addressRegion: "Victoria",
    postalCode: "3000",
    addressCountry: "AU"
  },

  geo: {
    latitude: "-37.8136",
    longitude: "144.9631"
  },

  openingHours: [
    "Mo 07:00-19:00",
    "Tu 07:00-19:00",
    "We 07:00-19:00",
    "Th 07:00-19:00",
    "Fr 07:00-19:00",
    "Sa 07:00-19:00",
    "Su 07:00-19:00"
  ],

  aggregateRating: {
    ratingValue: "5.0",
    reviewCount: "51",
    bestRating: "5",
    worstRating: "1"
  },

  // Comprehensive service area covering all Melbourne suburbs
  serviceArea: getSuburbsForSchema(),

  abn: "47 683 089 652",
  certifications: ["IICRC Certified", "Fully Insured Victoria"],
  foundingDate: "2019",

  // Service offerings by type
  services: {
    inspection: "Professional Mould Inspections",
    removal: "Comprehensive Mould Removal",
    remediation: "Subfloor Mould Remediation",
    emergency: "Emergency Mould Response",
    fogging: "Advanced Fogging Sanitisation"
  }
};

// Location-specific business enhancements
const LOCATION_BUSINESS_ENHANCEMENTS = {
  // Coastal suburbs get marine-specific services
  coastal: {
    suburbs: ['brighton', 'brighton-east', 'sandringham', 'hampton', 'mentone', 'st-kilda', 'williamstown', 'altona'],
    additionalServices: ["Salt Air Damage Assessment", "Coastal Property Protection", "Marine Environment Treatment"],
    specialisations: ["Federation Home Preservation", "Weatherboard Treatment", "Salt Air Corrosion"]
  },

  // Heritage areas get preservation services
  heritage: {
    suburbs: ['carlton', 'fitzroy', 'richmond', 'toorak', 'malvern', 'armadale', 'hawthorn', 'kew'],
    additionalServices: ["Heritage Property Treatment", "Period Feature Preservation", "Conservation-Approved Methods"],
    specialisations: ["Victorian Home Restoration", "Heritage Compliance", "Architectural Preservation"]
  },

  // High-rise areas get specialised services
  highrise: {
    suburbs: ['melbourne-cbd', 'southbank', 'docklands', 'south-yarra'],
    additionalServices: ["High-Rise Building Treatment", "Apartment Complex Management", "Commercial Property Service"],
    specialisations: ["Multi-Level Treatment", "Building Management Liaison", "Strata Property Expertise"]
  }
};

// Generate enhanced local business schema for specific locations
export const EnhancedSchemaMarkup: React.FC<EnhancedSchemaMarkupProps> = ({
  pageName = "Home",
  pageUrl = "https://mouldrestoration.com.au",
  serviceType = "general",
  location = "Melbourne",
  customServices = []
}) => {

  // Determine location-specific enhancements
  const locationSlug = location.toLowerCase().replace(/\s+/g, '-');
  const locationData = SUBURB_META_DESCRIPTIONS[locationSlug];

  let locationEnhancements = {
    additionalServices: [] as string[],
    specialisations: [] as string[]
  };

  // Apply location-specific service enhancements
  Object.values(LOCATION_BUSINESS_ENHANCEMENTS).forEach(enhancement => {
    if (enhancement.suburbs.includes(locationSlug)) {
      locationEnhancements.additionalServices.push(...enhancement.additionalServices);
      locationEnhancements.specialisations.push(...enhancement.specialisations);
    }
  });

  const enhancedLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${ENHANCED_BUSINESS_DATA.url}#business`,
    "name": ENHANCED_BUSINESS_DATA.name,
    "alternateName": `Mould Restoration ${location}`,
    "description": locationData?.description || ENHANCED_BUSINESS_DATA.description,
    "url": ENHANCED_BUSINESS_DATA.url,
    "logo": ENHANCED_BUSINESS_DATA.logo,
    "image": ENHANCED_BUSINESS_DATA.image,
    "telephone": ENHANCED_BUSINESS_DATA.telephone,
    "email": ENHANCED_BUSINESS_DATA.email,

    "address": {
      "@type": "PostalAddress",
      "streetAddress": ENHANCED_BUSINESS_DATA.address.streetAddress,
      "addressLocality": location === "Melbourne" ? ENHANCED_BUSINESS_DATA.address.addressLocality : location,
      "addressRegion": ENHANCED_BUSINESS_DATA.address.addressRegion,
      "postalCode": ENHANCED_BUSINESS_DATA.address.postalCode,
      "addressCountry": ENHANCED_BUSINESS_DATA.address.addressCountry
    },

    "geo": {
      "@type": "GeoCoordinates",
      "latitude": ENHANCED_BUSINESS_DATA.geo.latitude,
      "longitude": ENHANCED_BUSINESS_DATA.geo.longitude
    },

    "openingHoursSpecification": ENHANCED_BUSINESS_DATA.openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.substring(0, 2),
      "opens": "07:00",
      "closes": "19:00"
    })),

    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ENHANCED_BUSINESS_DATA.aggregateRating.ratingValue,
      "reviewCount": ENHANCED_BUSINESS_DATA.aggregateRating.reviewCount,
      "bestRating": ENHANCED_BUSINESS_DATA.aggregateRating.bestRating,
      "worstRating": ENHANCED_BUSINESS_DATA.aggregateRating.worstRating
    },

    "areaServed": ENHANCED_BUSINESS_DATA.serviceArea.map(area => ({
      "@type": "City",
      "name": area
    })),

    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": ENHANCED_BUSINESS_DATA.geo.latitude,
        "longitude": ENHANCED_BUSINESS_DATA.geo.longitude
      },
      "geoRadius": "50000"
    },

    "foundingDate": ENHANCED_BUSINESS_DATA.foundingDate,
    "numberOfEmployees": "5-10",
    "hasCredential": [...ENHANCED_BUSINESS_DATA.certifications, ...locationEnhancements.specialisations],
    "vatID": ENHANCED_BUSINESS_DATA.abn,

    // Enhanced service offerings based on location
    "makesOffer": [
      ...Object.values(ENHANCED_BUSINESS_DATA.services),
      ...locationEnhancements.additionalServices,
      ...customServices
    ].map(service => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service,
        "provider": {
          "@type": "LocalBusiness",
          "@id": `${ENHANCED_BUSINESS_DATA.url}#business`
        }
      },
      "areaServed": {
        "@type": "City",
        "name": `${location}, Victoria, Australia`
      },
      "availability": "https://schema.org/InStock",
      "priceRange": "$$"
    })),

    "sameAs": [
      "https://www.google.com/maps/search/mould+restoration+melbourne",
      "https://www.yellowpages.com.au/mould-restoration-melbourne",
      "https://www.facebook.com/mouldrestorationmelbourne"
    ],

    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${ENHANCED_BUSINESS_DATA.url}/contact`,
        "inLanguage": "en-AU",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": `Professional Mould Inspection ${location}`
      }
    },

    // Location-specific specialisations
    "knowsAbout": [
      "Mould Inspection",
      "Mould Removal",
      "Mould Remediation",
      "Air Quality Testing",
      "Thermal Imaging",
      `${location} Property Services`,
      "Same-day Professional Service Available",
      "IICRC Standards",
      ...locationEnhancements.specialisations
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(enhancedLocalBusinessSchema)}
      </script>
    </Helmet>
  );
};

// Location-specific service schema with nearby suburb targeting
