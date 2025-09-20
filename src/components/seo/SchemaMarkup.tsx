import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LocalBusinessSchemaProps {
  pageName?: string;
  pageUrl?: string;
  serviceType?: 'inspection' | 'removal' | 'remediation' | 'emergency' | 'general';
  location?: string;
}

interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  priceRange?: string;
  areaServed?: string[];
}

// Melbourne business data constants
const BUSINESS_DATA = {
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

  serviceArea: [
    "Melbourne",
    "Brighton",
    "Carlton",
    "Fitzroy",
    "Malvern",
    "Prahran",
    "Richmond",
    "South Yarra",
    "Toorak",
    "Hawthorn",
    "Glen Waverley",
    "Camberwell",
    "Armadale",
    "Kew",
    "Box Hill",
    "Caulfield",
    "St Kilda",
    "Windsor",
    "Albert Park",
    "Port Melbourne",
    "Southbank"
  ],

  abn: "47 683 089 652",
  certifications: ["IICRC Certified", "Fully Insured Victoria"],
  foundingDate: "2019"
};

export const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  pageName = "Home",
  pageUrl = "https://mouldrestoration.com.au",
  serviceType = "general",
  location = "Melbourne"
}) => {

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BUSINESS_DATA.url}#business`,
    "name": BUSINESS_DATA.name,
    "alternateName": "Mould Restoration Melbourne",
    "description": BUSINESS_DATA.description,
    "url": BUSINESS_DATA.url,
    "logo": BUSINESS_DATA.logo,
    "image": BUSINESS_DATA.image,
    "telephone": BUSINESS_DATA.telephone,
    "email": BUSINESS_DATA.email,

    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_DATA.address.streetAddress,
      "addressLocality": BUSINESS_DATA.address.addressLocality,
      "addressRegion": BUSINESS_DATA.address.addressRegion,
      "postalCode": BUSINESS_DATA.address.postalCode,
      "addressCountry": BUSINESS_DATA.address.addressCountry
    },

    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_DATA.geo.latitude,
      "longitude": BUSINESS_DATA.geo.longitude
    },

    "openingHoursSpecification": BUSINESS_DATA.openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.substring(0, 2),
      "opens": "07:00",
      "closes": "19:00"
    })),

    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": BUSINESS_DATA.aggregateRating.ratingValue,
      "reviewCount": BUSINESS_DATA.aggregateRating.reviewCount,
      "bestRating": BUSINESS_DATA.aggregateRating.bestRating,
      "worstRating": BUSINESS_DATA.aggregateRating.worstRating
    },

    "areaServed": BUSINESS_DATA.serviceArea.map(area => ({
      "@type": "City",
      "name": area + ", Victoria, Australia"
    })),

    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": BUSINESS_DATA.geo.latitude,
        "longitude": BUSINESS_DATA.geo.longitude
      },
      "geoRadius": "50000" // 50km radius from Melbourne CBD
    },

    "foundingDate": BUSINESS_DATA.foundingDate,
    "numberOfEmployees": "5-10",
    "hasCredential": BUSINESS_DATA.certifications,
    "vatID": BUSINESS_DATA.abn,

    "sameAs": [
      "https://www.google.com/maps/search/mould+restoration+melbourne",
      "https://www.yellowpages.com.au/mould-restoration-melbourne",
      "https://www.facebook.com/mouldrestorationmelbourne"
    ],

    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${BUSINESS_DATA.url}/contact`,
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
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  serviceName,
  serviceDescription,
  serviceUrl,
  priceRange = "$$",
  areaServed = BUSINESS_DATA.serviceArea
}) => {

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    "name": serviceName,
    "description": serviceDescription,
    "url": serviceUrl,
    "image": BUSINESS_DATA.image,

    "provider": {
      "@type": "LocalBusiness",
      "@id": `${BUSINESS_DATA.url}#business`,
      "name": BUSINESS_DATA.name,
      "telephone": BUSINESS_DATA.telephone,
      "url": BUSINESS_DATA.url
    },

    "areaServed": areaServed.map(area => ({
      "@type": "City",
      "name": area + ", Victoria, Australia"
    })),

    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": serviceName,
      "itemListElement": [{
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": serviceName
        },
        "price": "Contact for Quote",
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01",
        "priceRange": priceRange,
        "seller": {
          "@type": "LocalBusiness",
          "@id": `${BUSINESS_DATA.url}#business`
        }
      }]
    },

    "serviceType": "Professional Mould Services",
    "category": "Mould Inspection and Remediation",
    "termsOfService": `${BUSINESS_DATA.url}/terms`,
    "audience": {
      "@type": "Audience",
      "geographicArea": {
        "@type": "City",
        "name": "Melbourne, Victoria, Australia"
      }
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
};

export const OrganizationSchema: React.FC = () => {

  const organisationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BUSINESS_DATA.url}#organisation`,
    "name": BUSINESS_DATA.name,
    "alternateName": ["Mould Restoration Melbourne", "Melbourne Mould Removal", "Mould Inspection Melbourne"],
    "description": BUSINESS_DATA.description,
    "url": BUSINESS_DATA.url,
    "logo": BUSINESS_DATA.logo,
    "image": BUSINESS_DATA.image,
    "telephone": BUSINESS_DATA.telephone,
    "email": BUSINESS_DATA.email,
    "foundingDate": BUSINESS_DATA.foundingDate,
    "vatID": BUSINESS_DATA.abn,

    "address": {
      "@type": "PostalAddress",
      "addressLocality": BUSINESS_DATA.address.addressLocality,
      "addressRegion": BUSINESS_DATA.address.addressRegion,
      "addressCountry": BUSINESS_DATA.address.addressCountry
    },

    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": BUSINESS_DATA.telephone,
      "contactType": "customer service",
      "availableLanguage": "English",
      "areaServed": "AU",
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": BUSINESS_DATA.geo.latitude,
          "longitude": BUSINESS_DATA.geo.longitude
        },
        "geoRadius": "50000"
      }
    },

    "hasCredential": BUSINESS_DATA.certifications.map(cert => ({
      "@type": "EducationalOccupationalCredential",
      "name": cert
    })),

    "knowsAbout": [
      "Mould Inspection",
      "Mould Removal",
      "Mould Remediation",
      "Air Quality Testing",
      "Thermal Imaging",
      "Melbourne Property Services",
      "Same-day Professional Service Available",
      "IICRC Standards"
    ],

    "serviceArea": BUSINESS_DATA.serviceArea.map(area => ({
      "@type": "City",
      "name": area + ", Victoria, Australia"
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organisationSchema)}
      </script>
    </Helmet>
  );
};

// Review Schema for customer testimonials
interface ReviewSchemaProps {
  reviews?: Array<{
    author: string;
    rating: number;
    reviewBody: string;
    datePublished: string;
  }>;
}

export const ReviewSchema: React.FC<ReviewSchemaProps> = ({ reviews = [] }) => {

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BUSINESS_DATA.url}#organisation`,
    "name": BUSINESS_DATA.name,

    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": BUSINESS_DATA.aggregateRating.ratingValue,
      "reviewCount": BUSINESS_DATA.aggregateRating.reviewCount,
      "bestRating": BUSINESS_DATA.aggregateRating.bestRating,
      "worstRating": BUSINESS_DATA.aggregateRating.worstRating
    },

    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(reviewSchema)}
      </script>
    </Helmet>
  );
};

// Breadcrumb Schema for navigation structure
interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

// FAQ Schema for service pages
interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default { LocalBusinessSchema, ServiceSchema, OrganizationSchema, ReviewSchema, BreadcrumbSchema, FAQSchema };