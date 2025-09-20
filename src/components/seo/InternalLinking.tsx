import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface InternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  anchor?: string;
  priority?: 'high' | 'medium' | 'low';
  location?: string;
  service?: string;
}

// SEO-optimized internal link component
const SEOInternalLink: React.FC<InternalLinkProps> = ({
  href,
  children,
  className = '',
  anchor,
  location,
  service
}) => {
  // Generate SEO-optimized anchor text if not provided
  const optimizedAnchor = anchor ||
    (location && service ? `${service} ${location} Melbourne` :
     location ? `Mould Removal ${location} Melbourne` :
     service ? `${service} Melbourne` :
     children);

  const linkClassName = `inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium transition-colors ${className}`;

  return (
    <Link
      to={href}
      className={linkClassName}
      title={optimizedAnchor}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
};

// Import the comprehensive internal linking system
import { StrategicInternalLinks as ComprehensiveInternalLinks } from './ComprehensiveInternalLinking';

// Legacy component interfaces for backward compatibility
interface StrategicLocationLinksProps {
  currentLocation?: string;
  businessType?: string;
  serviceTypes?: string[];
}

interface StrategicServiceLinksProps {
  currentService?: string;
  targetLocations?: string[];
}

interface HomePageStrategicLinksProps {
  showServices?: boolean;
  showLocations?: boolean;
}

// Updated components using the comprehensive system
const StrategicLocationLinks: React.FC<StrategicLocationLinksProps> = ({
  currentLocation,
  businessType,
  serviceTypes
}) => (
  <ComprehensiveInternalLinks
    currentLocation={currentLocation}
    variant="location"
    showNearbySuburbs={true}
    showRelatedServices={true}
  />
);

const StrategicServiceLinks: React.FC<StrategicServiceLinksProps> = ({
  currentService,
  targetLocations
}) => (
  <ComprehensiveInternalLinks
    currentService={currentService}
    variant="service"
    showTopLocations={true}
  />
);

const HomePageStrategicLinks: React.FC<HomePageStrategicLinksProps> = ({
  showServices = true,
  showLocations = true
}) => (
  <ComprehensiveInternalLinks
    variant="homepage"
  />
);

// Backward compatibility components
const RelatedServices: React.FC<{ location?: string }> = ({ location }) => (
  <ComprehensiveInternalLinks
    currentLocation={location}
    variant="location"
    showNearbySuburbs={false}
    showRelatedServices={true}
  />
);

const RelatedLocations: React.FC<{ service?: string }> = ({ service }) => (
  <ComprehensiveInternalLinks
    currentService={service}
    variant="service"
    showTopLocations={true}
  />
);

const EmergencyContactLinks: React.FC = () => (
  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
    <h3 className="font-semibold text-red-800 mb-2">Emergency Mould Removal</h3>
    <p className="text-sm text-red-600 mb-3">Same-day service available across Melbourne</p>
    <Link
      to="tel:1800954117"
      className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
    >
      <ArrowRight className="w-4 h-4" />
      Call 1800 954 117 Now
    </Link>
  </div>
);

const ServiceLocationLinks: React.FC<{ service?: string; locations?: string[] }> = ({
  service,
  locations
}) => (
  <ComprehensiveInternalLinks
    currentService={service}
    variant="service"
    showTopLocations={true}
  />
);

const SuburbClusterLinks: React.FC<{ currentSuburb?: string }> = ({ currentSuburb }) => (
  <ComprehensiveInternalLinks
    currentLocation={currentSuburb}
    variant="location"
    showNearbySuburbs={true}
    showRelatedServices={false}
  />
);

export {
  SEOInternalLink,
  RelatedServices,
  RelatedLocations,
  EmergencyContactLinks,
  ServiceLocationLinks,
  SuburbClusterLinks,
  StrategicLocationLinks,
  StrategicServiceLinks,
  HomePageStrategicLinks
};