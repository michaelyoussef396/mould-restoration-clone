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

// Melbourne suburb clusters for internal linking
const SUBURB_CLUSTERS = {
  innerMelbourne: {
    name: 'Inner Melbourne',
    suburbs: [
      { name: 'Carlton', slug: 'carlton', description: 'Heritage property & university precinct specialists', features: ['Victorian terraces', 'Student housing', 'Heritage preservation'] },
      { name: 'Fitzroy', slug: 'fitzroy', description: 'Creative quarter & warehouse conversion experts', features: ['Artist studios', 'Converted warehouses', 'Heritage protection'] },
      { name: 'Richmond', slug: 'richmond', description: 'Industrial heritage & Swan Street precinct', features: ['Warehouse conversions', 'Victorian cottages', 'Rental properties'] },
      { name: 'South Yarra', slug: 'south-yarra', description: 'Premium apartments & heritage buildings', features: ['Apartment blocks', 'Mixed development', 'Commercial spaces'] },
      { name: 'Prahran', slug: 'prahran', description: 'Mixed residential & commercial properties', features: ['Shopping precincts', 'Apartments', 'Commercial spaces'] }
    ]
  },
  coastalSuburbs: {
    name: 'Coastal Suburbs',
    suburbs: [
      { name: 'Brighton', slug: 'brighton', description: 'Coastal property & Federation home specialists', features: ['Federation homes', 'Salt air treatment', 'Weatherboard expertise'] },
      { name: 'Hampton', slug: 'hampton', description: 'Bayside family homes & coastal moisture', features: ['Family properties', 'Coastal exposure', 'Salt air protection'] },
      { name: 'Sandringham', slug: 'sandringham', description: 'Beach community & retirement living', features: ['Beach houses', 'Retirement villages', 'Coastal humidity'] },
      { name: 'Mentone', slug: 'mentone', description: 'Established beachside community', features: ['Beach cottages', 'Family homes', 'Coastal conditions'] },
      { name: 'Edithvale', slug: 'edithvale', description: 'Bayside beach community specialists', features: ['Beach cottages', 'Retirement living', 'Salt air exposure'] }
    ]
  },
  easternSuburbs: {
    name: 'Eastern Suburbs',
    suburbs: [
      { name: 'Burwood', slug: 'burwood', description: 'Family homes & established properties', features: ['Family properties', 'Brick homes', 'Established gardens'] },
      { name: 'Caulfield', slug: 'caulfield', description: 'Mixed housing & commercial areas', features: ['Apartments', 'Commercial spaces', 'Mixed development'] },
      { name: 'Glen Iris', slug: 'glen-iris', description: 'Established residential & heritage homes', features: ['Heritage properties', 'Family homes', 'Period features'] },
      { name: 'Armadale', slug: 'armadale', description: 'Premium residential & heritage properties', features: ['Luxury homes', 'Heritage preservation', 'High-end finishes'] },
      { name: 'Malvern', slug: 'malvern', description: 'Established family homes & gardens', features: ['Family properties', 'Established gardens', 'Period features'] }
    ]
  }
};

// Flatten suburb clusters for compatibility
const LOCATIONS_DATA = Object.values(SUBURB_CLUSTERS)
  .flatMap(cluster => cluster.suburbs)
  .map(suburb => ({ ...suburb, priority: 'high' }));

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
                  href="/services/comprehensive-mould-removal"
                  anchor="Professional Mould Removal Melbourne"
                  service="Same-day Professional Service"
                  className="text-blue-700 hover:text-blue-900"
                >
                  Professional Service Info
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
              href={`/services/mould-removal-${location.slug}`}
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

// Suburb cluster linking component
interface SuburbClusterLinksProps {
  currentLocation?: string;
  maxClusters?: number;
}

export const SuburbClusterLinks: React.FC<SuburbClusterLinksProps> = ({
  currentLocation,
  maxClusters = 3
}) => {
  // Get cluster for current location
  const currentCluster = Object.entries(SUBURB_CLUSTERS).find(([, cluster]) =>
    cluster.suburbs.some(suburb => suburb.slug === currentLocation?.toLowerCase())
  );

  // If current location is in a cluster, show other suburbs from same cluster and nearby clusters
  const clustersToShow = currentCluster
    ? Object.entries(SUBURB_CLUSTERS).filter(([key]) => key === currentCluster[0]).slice(0, 1)
    : Object.entries(SUBURB_CLUSTERS).slice(0, maxClusters);

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          {currentLocation
            ? `Other Suburbs Near ${currentLocation}`
            : 'Melbourne Suburb Clusters We Service'
          }
        </h2>

        {clustersToShow.map(([clusterKey, cluster]) => (
          <div key={clusterKey} className="mb-8">
            <h3 className="text-xl font-semibold text-primary mb-4">{cluster.name}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cluster.suburbs
                .filter(suburb => suburb.slug !== currentLocation?.toLowerCase())
                .map((suburb) => (
                  <Card key={suburb.slug} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        <h4 className="font-bold text-gray-900">
                          <SEOInternalLink
                            href={`/services/mould-removal-${suburb.slug}`}
                            anchor={`Mould removal ${suburb.name} Melbourne`}
                            location={suburb.name}
                            service="mould removal"
                            className="text-gray-900 hover:text-blue-600 no-underline"
                          >
                            {suburb.name}
                          </SEOInternalLink>
                        </h4>
                      </div>

                      <p className="text-gray-600 text-sm mb-3">{suburb.description}</p>

                      <ul className="text-xs text-gray-500 space-y-1">
                        {suburb.features.slice(0, 2).map((feature, index) => (
                          <li key={index} className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Professional mould removal services available across all Melbourne metropolitan areas
          </p>
          <Button variant="outline" asChild>
            <Link to="/contact">
              Find Your Suburb
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
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
  ServiceLocationLinks,
  SuburbClusterLinks
};