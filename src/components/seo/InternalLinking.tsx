import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface InternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  anchor?: string;
  priority?: 'high' | 'medium' | 'low';
  location?: string;
  service?: string;
}

interface RelatedServicesProps {
  currentService?: string;
  location?: string;
  maxItems?: number;
}

interface RelatedLocationsProps {
  currentLocation?: string;
  service?: string;
  maxItems?: number;
}

// Melbourne mould restoration services data
const SERVICES_DATA = [
  {
    name: 'Professional Mould Inspections',
    slug: 'professional-mould-inspections',
    description: 'Free thermal imaging assessment and air quality testing',
    keywords: 'mould inspection melbourne, thermal imaging, air quality testing',
    priority: 'high'
  },
  {
    name: 'Comprehensive Mould Removal',
    slug: 'comprehensive-mould-removal',
    description: 'Complete IICRC certified mould elimination',
    keywords: 'mould removal melbourne, IICRC certified, comprehensive treatment',
    priority: 'high'
  },
  {
    name: 'Subfloor Mould Remediation',
    slug: 'subfloor-mould-remediation',
    description: 'Under house moisture control and ventilation',
    keywords: 'subfloor mould melbourne, under house treatment, moisture control',
    priority: 'medium'
  },
  {
    name: 'Complete Material Removal',
    slug: 'complete-material-removal',
    description: 'Safe contaminated material disposal',
    keywords: 'material removal melbourne, contaminated disposal, safe removal',
    priority: 'medium'
  },
  {
    name: 'Advanced Fogging Sanitisation',
    slug: 'advanced-fogging-sanitisation',
    description: 'ULV fogging for hard-to-reach areas',
    keywords: 'fogging melbourne, ULV sanitisation, comprehensive treatment',
    priority: 'medium'
  }
];

// Melbourne locations data
const LOCATIONS_DATA = [
  {
    name: 'Brighton',
    slug: 'brighton',
    description: 'Coastal property mould specialists',
    features: ['Federation homes', 'Salt air treatment', 'Weatherboard expertise'],
    priority: 'high'
  },
  {
    name: 'Carlton',
    slug: 'carlton',
    description: 'Inner Melbourne heritage properties',
    features: ['Heritage buildings', 'Terrace houses', 'Student accommodation'],
    priority: 'high'
  },
  {
    name: 'Richmond',
    slug: 'richmond',
    description: 'Warehouse conversions and heritage homes',
    features: ['Industrial conversions', 'Victorian cottages', 'Rental properties'],
    priority: 'high'
  },
  {
    name: 'Toorak',
    slug: 'toorak',
    description: 'Premium property restoration',
    features: ['Luxury homes', 'Heritage preservation', 'High-end finishes'],
    priority: 'high'
  },
  {
    name: 'South Yarra',
    slug: 'south-yarra',
    description: 'Modern apartments and heritage buildings',
    features: ['Apartment blocks', 'Mixed development', 'Commercial spaces'],
    priority: 'medium'
  },
  {
    name: 'Fitzroy',
    slug: 'fitzroy',
    description: 'Creative quarter property solutions',
    features: ['Artist studios', 'Converted warehouses', 'Heritage protection'],
    priority: 'medium'
  },
  {
    name: 'Malvern',
    slug: 'malvern',
    description: 'Established family homes',
    features: ['Family properties', 'Established gardens', 'Period features'],
    priority: 'medium'
  },
  {
    name: 'Prahran',
    slug: 'prahran',
    description: 'Mixed residential and commercial',
    features: ['Shopping precincts', 'Apartments', 'Commercial spaces'],
    priority: 'medium'
  }
];

// SEO-optimized internal link component
export const SEOInternalLink: React.FC<InternalLinkProps> = ({
  href,
  children,
  className = '',
  anchor,
  priority = 'medium',
  location,
  service
}) => {

  // Generate SEO-optimized anchor text if not provided
  const defaultAnchor = anchor ||
    (location && service ? `${service} ${location} Melbourne` :
     location ? `Mould Removal ${location} Melbourne` :
     service ? `${service} Melbourne` :
     children?.toString() || '');

  const linkClassName = `inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium transition-colors ${className}`;

  return (
    <Link
      to={href}
      className={linkClassName}
      title={defaultAnchor}
      aria-label={defaultAnchor}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
};

// Related services component
export const RelatedServices: React.FC<RelatedServicesProps> = ({
  currentService,
  location = '',
  maxItems = 3
}) => {

  const relatedServices = SERVICES_DATA
    .filter(service => service.slug !== currentService)
    .sort((a, b) => (a.priority === 'high' ? -1 : 1))
    .slice(0, maxItems);

  if (relatedServices.length === 0) return null;

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {location ? `Other Services in ${location} Melbourne` : 'Related Mould Services Melbourne'}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {relatedServices.map((service) => (
            <Card key={service.slug} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      <SEOInternalLink
                        href={`/services/${service.slug}`}
                        anchor={`${service.name} ${location} Melbourne`}
                        location={location}
                        service={service.name}
                        className="text-gray-900 hover:text-blue-600 no-underline"
                      >
                        {service.name}
                      </SEOInternalLink>
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{service.description}</p>

                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/services/${service.slug}`}>
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// Related locations component
export const RelatedLocations: React.FC<RelatedLocationsProps> = ({
  currentLocation,
  service = 'mould removal',
  maxItems = 4
}) => {

  const relatedLocations = LOCATIONS_DATA
    .filter(location => location.slug !== currentLocation?.toLowerCase())
    .sort((a, b) => (a.priority === 'high' ? -1 : 1))
    .slice(0, maxItems);

  if (relatedLocations.length === 0) return null;

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {service} in Other Melbourne Suburbs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedLocations.map((location) => (
            <Card key={location.slug} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <h3 className="font-bold text-gray-900">
                    <SEOInternalLink
                      href={`/locations/${location.slug}`}
                      anchor={`${service} ${location.name} Melbourne`}
                      location={location.name}
                      service={service}
                      className="text-gray-900 hover:text-blue-600 no-underline"
                    >
                      {location.name}
                    </SEOInternalLink>
                  </h3>
                </div>

                <p className="text-gray-600 text-sm mb-3">{location.description}</p>

                <ul className="text-xs text-gray-500 space-y-1 mb-3">
                  {location.features.slice(0, 2).map((feature, index) => (
                    <li key={index} className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to={`/locations/${location.slug}`}>
                    View {location.name} Services
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// Emergency contact cross-linking component
export const EmergencyContactLinks: React.FC<{ currentPage?: string }> = ({ currentPage }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
      <div className="flex items-start gap-3">
        <Phone className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-bold text-red-900 mb-2">Melbourne Professional Service - Same-day Available 7am-7pm</h3>
          <p className="text-red-800 text-sm mb-3">
            Serious mould problem? Our IICRC certified team responds Same-day professional service across Melbourne metro.
          </p>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="destructive" size="sm" asChild>
              <a href="tel:1800954117">
                Call Emergency Line: 1800 954 117
              </a>
            </Button>

            {currentPage !== 'emergency' && (
              <Button variant="outline" size="sm" asChild>
                <SEOInternalLink
                  href="/services/emergency-mould-removal"
                  anchor="Emergency Mould Removal Melbourne"
                  service="Professional Service - Same-day Available 7am-7pm"
                  className="text-red-700 hover:text-red-900"
                >
                  Emergency Service Info
                </SEOInternalLink>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Service to location cross-linking
export const ServiceLocationLinks: React.FC<{
  serviceName: string;
  serviceSlug: string;
  maxLocations?: number;
}> = ({ serviceName, serviceSlug, maxLocations = 6 }) => {

  const topLocations = LOCATIONS_DATA
    .filter(location => location.priority === 'high')
    .slice(0, maxLocations);

  return (
    <div className="bg-blue-50 py-8">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {serviceName} Available in These Melbourne Areas
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {topLocations.map((location) => (
            <SEOInternalLink
              key={location.slug}
              href={`/locations/${location.slug}`}
              anchor={`${serviceName} ${location.name} Melbourne`}
              location={location.name}
              service={serviceName}
              className="p-3 bg-white rounded-lg text-center hover:shadow-md transition-shadow text-sm"
            >
              {location.name}
            </SEOInternalLink>
          ))}
        </div>

        <div className="text-center mt-6">
          <SEOInternalLink
            href="/contact"
            anchor="Contact Melbourne Mould Removal Service"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Service your area? Contact us for availability
          </SEOInternalLink>
        </div>
      </div>
    </div>
  );
};

export default {
  SEOInternalLink,
  RelatedServices,
  RelatedLocations,
  EmergencyContactLinks,
  ServiceLocationLinks
};