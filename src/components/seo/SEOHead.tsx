import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  location?: string;
  service?: string;
  emergency?: boolean;
  noindex?: boolean;
}

// Melbourne SEO constants
const DEFAULT_SEO = {
  titleSuffix: "Mould & Restoration Co.",
  baseUrl: "https://mouldrestoration.com.au",
  defaultImage: "https://mouldrestoration.com.au/assets/hero-background.jpg",
  defaultDescription: "Melbourne's premier mould inspection and remediation service. 5+ years experience, 100+ properties restored. Emergency response available 7am-7pm every day. Call 1800 954 117.",
  phone: "1800 954 117",
  businessName: "Mould & Restoration Co.",
  abn: "47 683 089 652"
};

// Melbourne-specific keyword combinations
const generateMelbourneKeywords = (location?: string, service?: string, emergency?: boolean): string => {
  const baseKeywords = [
    "mould removal melbourne",
    "mould inspection melbourne",
    "mould remediation melbourne",
    "professional mould removal",
    "IICRC mould removal",
    "melbourne mould experts",
    "mould restoration melbourne"
  ];

  if (emergency) {
    baseKeywords.push(
      "emergency mould removal melbourne",
      "same day mould removal",
      "urgent mould inspection melbourne",
      "24/7 mould response melbourne"
    );
  }

  if (location && location !== "Melbourne") {
    baseKeywords.push(
      `mould removal ${location.toLowerCase()}`,
      `mould inspection ${location.toLowerCase()}`,
      `${location.toLowerCase()} mould treatment`,
      `professional mould removal ${location.toLowerCase()} melbourne`
    );
  }

  if (service) {
    const serviceKeywords = {
      inspection: ["mould inspection", "mould testing", "air quality testing", "thermal imaging inspection"],
      removal: ["mould removal", "mould elimination", "comprehensive mould removal"],
      remediation: ["mould remediation", "subfloor mould", "mould restoration", "moisture control"],
      emergency: ["emergency mould", "urgent mould removal", "same day mould", "rapid response"],
      fogging: ["fogging sanitisation", "mould fogging", "ULV fogging", "sanitization treatment"]
    };

    const serviceSpecific = serviceKeywords[service as keyof typeof serviceKeywords] || [];
    serviceSpecific.forEach(keyword => {
      baseKeywords.push(`${keyword} melbourne`);
      if (location && location !== "Melbourne") {
        baseKeywords.push(`${keyword} ${location.toLowerCase()}`);
      }
    });
  }

  return baseKeywords.join(", ");
};

// Generate location-specific titles and descriptions
const generateLocationContent = (service: string, location: string, emergency?: boolean) => {
  const emergencyPrefix = emergency ? "Emergency " : "Professional ";
  const responseTime = emergency ? "2 Hour Response" : "Same Day Available";

  const titles = {
    inspection: `${emergencyPrefix}Mould Inspection ${location} Melbourne - ${responseTime}`,
    removal: `${emergencyPrefix}Mould Removal ${location} Melbourne - IICRC Certified`,
    remediation: `Subfloor Mould Remediation ${location} Melbourne - Expert Treatment`,
    emergency: `Emergency Mould Removal ${location} Melbourne - Call 1800 954 117`,
    fogging: `Advanced Fogging Sanitisation ${location} Melbourne - Professional Service`
  };

  const descriptions = {
    inspection: `Professional mould inspection ${location} Melbourne. Free thermal imaging assessment, air quality testing, detailed reports. ${responseTime.toLowerCase()}. Call 1800 954 117 for expert IICRC certified service.`,
    removal: `Expert mould removal ${location} Melbourne. IICRC certified safe elimination, complete restoration, 100% satisfaction guarantee. Serving ${location} with ${responseTime.toLowerCase()}. Call 1800 954 117.`,
    remediation: `Specialist subfloor mould remediation ${location} Melbourne. Under house moisture control, ventilation improvement, foundation protection. Professional ${location} service. Call 1800 954 117.`,
    emergency: `Emergency mould removal ${location} Melbourne. 2 hour response time, immediate containment, health hazard assessment. Available 7am-7pm every day. Call 1800 954 117 now.`,
    fogging: `Advanced ULV fogging sanitisation ${location} Melbourne. Penetrates hard-to-reach spaces, comprehensive treatment, professional equipment. Expert ${location} service. Call 1800 954 117.`
  };

  return {
    title: titles[service as keyof typeof titles] || titles.removal,
    description: descriptions[service as keyof typeof descriptions] || descriptions.removal
  };
};

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_SEO.defaultImage,
  ogType = "website",
  twitterTitle,
  twitterDescription,
  twitterImage,
  location = "Melbourne",
  service = "removal",
  emergency = false,
  noindex = false
}) => {

  // Generate Melbourne-optimized content if not provided
  const locationContent = location !== "Melbourne" && service ?
    generateLocationContent(service, location, emergency) : null;

  const finalTitle = title || locationContent?.title ||
    `${emergency ? 'Emergency' : 'Professional'} Mould Removal Melbourne - ${DEFAULT_SEO.titleSuffix}`;

  const finalDescription = description || locationContent?.description || DEFAULT_SEO.defaultDescription;

  const finalKeywords = keywords || generateMelbourneKeywords(location, service, emergency);

  const finalCanonicalUrl = canonicalUrl || `${DEFAULT_SEO.baseUrl}${window.location.pathname}`;

  // Open Graph optimizations
  const finalOgTitle = ogTitle || finalTitle;
  const finalOgDescription = ogDescription || finalDescription;

  // Twitter Card optimizations
  const finalTwitterTitle = twitterTitle || finalTitle;
  const finalTwitterDescription = twitterDescription || finalDescription;
  const finalTwitterImage = twitterImage || ogImage;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonicalUrl} />

      {/* Robots and Indexing */}
      {noindex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      )}

      {/* Geo and Location Tags for Melbourne */}
      <meta name="geo.region" content="AU-VIC" />
      <meta name="geo.placename" content={`${location}, Victoria, Australia`} />
      <meta name="geo.position" content="-37.8136;144.9631" />
      <meta name="ICBM" content="-37.8136, 144.9631" />

      {/* Business Information */}
      <meta name="author" content={DEFAULT_SEO.businessName} />
      <meta name="contact" content={DEFAULT_SEO.phone} />
      <meta name="coverage" content="Melbourne Metropolitan Area" />
      <meta name="distribution" content="local" />
      <meta name="rating" content="5.0" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={`${finalOgTitle} - Melbourne Mould Restoration`} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:site_name" content={DEFAULT_SEO.businessName} />
      <meta property="og:locale" content="en_AU" />

      {/* Business-specific Open Graph */}
      <meta property="business:contact_data:street_address" content="Melbourne Metropolitan Area" />
      <meta property="business:contact_data:locality" content="Melbourne" />
      <meta property="business:contact_data:region" content="Victoria" />
      <meta property="business:contact_data:postal_code" content="3000" />
      <meta property="business:contact_data:country_name" content="Australia" />
      <meta property="business:contact_data:phone_number" content={DEFAULT_SEO.phone} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTwitterTitle} />
      <meta name="twitter:description" content={finalTwitterDescription} />
      <meta name="twitter:image" content={finalTwitterImage} />
      <meta name="twitter:image:alt" content={`${finalTwitterTitle} - Melbourne Professional Service`} />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />

      {/* Language and Locale */}
      <meta httpEquiv="content-language" content="en-au" />
      <meta name="language" content="English" />

      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Emergency Contact for Emergency Pages */}
      {emergency && (
        <>
          <meta name="emergency-contact" content={DEFAULT_SEO.phone} />
          <meta name="response-time" content="2 hours" />
          <meta name="availability" content="7am-7pm every day" />
        </>
      )}

      {/* Local Business Verification */}
      <meta name="abn" content={DEFAULT_SEO.abn} />
      <meta name="business-license" content="Victorian Building Authority" />
      <meta name="certification" content="IICRC Certified" />
      <meta name="insurance" content="Fully Insured Victoria" />

      {/* Performance and Caching */}
      <meta httpEquiv="cache-control" content="public, max-age=31536000" />
      <meta name="generator" content="React + Vite" />
    </Helmet>
  );
};

// Specialized components for different page types
export const HomePageSEO: React.FC = () => (
  <SEOHead
    title="Emergency Mould Removal Melbourne - 2 Hour Response | Mould & Restoration Co"
    description="Melbourne's premier mould removal service. Emergency response within 2 hours, IICRC certified technicians, 5+ years experience, 100+ properties restored. Call 1800 954 117 now."
    keywords="emergency mould removal melbourne, professional mould inspection melbourne, same day mould removal, IICRC mould removal melbourne, melbourne mould experts"
    emergency={true}
  />
);

export const ServicePageSEO: React.FC<{ service: string; title?: string; description?: string }> = ({
  service,
  title,
  description
}) => (
  <SEOHead
    title={title}
    description={description}
    service={service}
    ogType="service"
  />
);

export const LocationPageSEO: React.FC<{
  suburb: string;
  service?: string;
  emergency?: boolean;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}> = ({
  suburb,
  service = "removal",
  emergency = false,
  title,
  description,
  keywords,
  canonical
}) => (
  <SEOHead
    title={title}
    description={description}
    keywords={keywords}
    canonicalUrl={canonical}
    location={suburb}
    service={service}
    emergency={emergency}
    ogType="place"
  />
);

export default SEOHead;