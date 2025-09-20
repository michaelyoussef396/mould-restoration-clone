import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Home, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Melbourne Geographic Clusters for Strategic Internal Linking
const MELBOURNE_CLUSTERS = {
  innerMelbourne: {
    name: 'Inner Melbourne',
    suburbs: ['Carlton', 'Fitzroy', 'Richmond', 'Brunswick', 'Collingwood', 'Northcote', 'Thornbury', 'Preston']
  },
  innerEast: {
    name: 'Inner East',
    suburbs: ['Toorak', 'Malvern', 'Camberwell', 'Hawthorn', 'Kew', 'Balwyn', 'Surrey Hills', 'Canterbury']
  },
  innerSouth: {
    name: 'Inner South',
    suburbs: ['South Yarra', 'Prahran', 'Windsor', 'St Kilda', 'Elwood', 'Balaclava', 'Elsternwick', 'Caulfield']
  },
  innerWest: {
    name: 'Inner West',
    suburbs: ['Footscray', 'Yarraville', 'Seddon', 'West Melbourne', 'Kensington', 'Maribyrnong', 'Spotswood', 'Newport']
  },
  bayside: {
    name: 'Bayside',
    suburbs: ['Brighton', 'Brighton East', 'Sandringham', 'Hampton', 'Mentone', 'Parkdale', 'Mordialloc', 'Aspendale']
  },
  southeastern: {
    name: 'South Eastern',
    suburbs: ['Glen Waverley', 'Mount Waverley', 'Oakleigh', 'Springvale', 'Clayton', 'Mulgrave', 'Dandenong', 'Berwick']
  },
  eastern: {
    name: 'Eastern',
    suburbs: ['Box Hill', 'Doncaster', 'Templestowe', 'Ringwood', 'Vermont', 'Forest Hill', 'Nunawading', 'Mitcham']
  },
  northern: {
    name: 'Northern',
    suburbs: ['Heidelberg', 'Ivanhoe', 'Bundoora', 'Mill Park', 'Epping', 'Lalor', 'Thomastown', 'Reservoir']
  },
  western: {
    name: 'Western',
    suburbs: ['Altona', 'Werribee', 'Point Cook', 'Hoppers Crossing', 'Laverton', 'Williams Landing', 'Tarneit', 'Truganina']
  }
};

// Service to Location Mapping for Strategic SEO
const SERVICE_LOCATION_TARGETS = {
  'professional-mould-inspections': {
    primary: ['Toorak', 'Brighton', 'Camberwell', 'Hawthorn', 'Malvern', 'Kew', 'Canterbury', 'Balwyn'],
    secondary: ['South Yarra', 'Prahran', 'Armadale', 'Glen Iris', 'Kooyong', 'Sandringham', 'Hampton', 'Mount Waverley']
  },
  'comprehensive-mould-removal': {
    primary: ['Carlton', 'Richmond', 'Fitzroy', 'Brunswick', 'Collingwood', 'Northcote', 'Footscray', 'Yarraville'],
    secondary: ['St Kilda', 'South Melbourne', 'Melbourne CBD', 'Docklands', 'Port Melbourne', 'Albert Park', 'Seddon', 'Newport']
  },
  'subfloor-mould-remediation': {
    primary: ['Brighton', 'St Kilda', 'Williamstown', 'Elwood', 'Hampton', 'Sandringham', 'Mentone', 'Mordialloc'],
    secondary: ['Brighton East', 'Elsternwick', 'Balaclava', 'Parkdale', 'Aspendale', 'Bonbeach', 'Chelsea', 'Carrum']
  },
  'complete-material-removal': {
    primary: ['Richmond', 'Footscray', 'Altona', 'Brunswick', 'Collingwood', 'Fitzroy', 'Preston', 'Thornbury'],
    secondary: ['Yarraville', 'Seddon', 'Spotswood', 'Newport', 'Maribyrnong', 'Kensington', 'West Melbourne', 'North Melbourne']
  },
  'advanced-fogging-sanitisation': {
    primary: ['Melbourne CBD', 'Docklands', 'South Yarra', 'Southbank', 'East Melbourne', 'Carlton', 'Fitzroy', 'Richmond'],
    secondary: ['Toorak', 'Prahran', 'South Melbourne', 'Port Melbourne', 'West Melbourne', 'North Melbourne', 'Parkville', 'Kensington']
  }
};

// Location to Service Mapping
const LOCATION_SERVICE_TARGETS = {
  premium: ['professional-mould-inspections', 'comprehensive-mould-removal', 'advanced-fogging-sanitisation'],
  heritage: ['subfloor-mould-remediation', 'comprehensive-mould-removal', 'complete-material-removal'],
  industrial: ['complete-material-removal', 'comprehensive-mould-removal', 'advanced-fogging-sanitisation'],
  coastal: ['subfloor-mould-remediation', 'comprehensive-mould-removal', 'professional-mould-inspections'],
  commercial: ['advanced-fogging-sanitisation', 'comprehensive-mould-removal', 'professional-mould-inspections']
};

// Service metadata for links
const SERVICES = {
  'professional-mould-inspections': {
    title: 'Professional Mould Inspections',
    path: '/services/professional-mould-inspections',
    description: 'Expert mould detection and air quality testing'
  },
  'comprehensive-mould-removal': {
    title: 'Comprehensive Mould Removal',
    path: '/services/comprehensive-mould-removal',
    description: 'Complete mould remediation solutions'
  },
  'subfloor-mould-remediation': {
    title: 'Subfloor Mould Remediation',
    path: '/services/subfloor-mould-remediation',
    description: 'Specialized subfloor and foundation treatment'
  },
  'complete-material-removal': {
    title: 'Complete Material Removal',
    path: '/services/complete-material-removal',
    description: 'Safe removal of contaminated materials'
  },
  'advanced-fogging-sanitisation': {
    title: 'Advanced Fogging Sanitisation',
    path: '/services/advanced-fogging-sanitisation',
    description: 'Professional antimicrobial treatment'
  }
};

interface StrategicInternalLinksProps {
  currentLocation?: string;
  currentService?: string;
  variant?: 'location' | 'service' | 'homepage';
  showNearbySuburbs?: boolean;
  showRelatedServices?: boolean;
  showTopLocations?: boolean;
}

export const StrategicInternalLinks: React.FC<StrategicInternalLinksProps> = ({
  currentLocation,
  currentService,
  variant = 'location',
  showNearbySuburbs = true,
  showRelatedServices = true,
  showTopLocations = true
}) => {
  // Get nearby suburbs based on current location
  const getNearbySuburbs = (location: string): string[] => {
    for (const cluster of Object.values(MELBOURNE_CLUSTERS)) {
      if (cluster.suburbs.includes(location)) {
        return cluster.suburbs.filter(suburb => suburb !== location).slice(0, 6);
      }
    }
    return [];
  };

  // Get relevant services for current location
  const getRelevantServices = (location: string): string[] => {
    if (!location) return Object.keys(SERVICES);

    // Determine location type and return relevant services
    const premiumSuburbs = ['Toorak', 'Brighton', 'Camberwell', 'Hawthorn', 'Malvern', 'Kew', 'South Yarra'];
    const coastalSuburbs = ['Brighton', 'St Kilda', 'Williamstown', 'Elwood', 'Hampton', 'Sandringham'];
    const heritageSuburbs = ['Carlton', 'Fitzroy', 'Richmond', 'Collingwood', 'North Melbourne'];
    const industrialSuburbs = ['Footscray', 'Altona', 'Brunswick', 'Preston', 'Thornbury'];
    const commercialSuburbs = ['Melbourne CBD', 'Docklands', 'South Yarra', 'Southbank', 'East Melbourne'];

    if (premiumSuburbs.includes(location)) return LOCATION_SERVICE_TARGETS.premium;
    if (coastalSuburbs.includes(location)) return LOCATION_SERVICE_TARGETS.coastal;
    if (heritageSuburbs.includes(location)) return LOCATION_SERVICE_TARGETS.heritage;
    if (industrialSuburbs.includes(location)) return LOCATION_SERVICE_TARGETS.industrial;
    if (commercialSuburbs.includes(location)) return LOCATION_SERVICE_TARGETS.commercial;

    return ['comprehensive-mould-removal', 'professional-mould-inspections', 'advanced-fogging-sanitisation'];
  };

  // Get target locations for current service
  const getTargetLocations = (service: string): string[] => {
    const serviceKey = service.replace('/services/', '');
    const targets = SERVICE_LOCATION_TARGETS[serviceKey];
    if (!targets) return [];

    return [...targets.primary.slice(0, 8), ...targets.secondary.slice(0, 4)];
  };

  const nearbySuburbs = currentLocation ? getNearbySuburbs(currentLocation) : [];
  const relevantServices = currentLocation ? getRelevantServices(currentLocation) : [];
  const targetLocations = currentService ? getTargetLocations(currentService) : [];

  if (variant === 'homepage') {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              Professional Mould Services Across Melbourne
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Top Services */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Home className="w-5 h-5 text-blue-600" />
                    Our Services
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(SERVICES).slice(0, 5).map(([key, service]) => (
                      <Link
                        key={key}
                        to={service.path}
                        className="block p-3 rounded-lg border hover:border-blue-200 hover:bg-blue-50 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-medium text-primary group-hover:text-blue-600">
                              {service.title}
                            </span>
                            <p className="text-sm text-muted-foreground mt-1">
                              {service.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Top Locations */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-green-600" />
                    Service Areas
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {['Carlton', 'Richmond', 'Brighton', 'Toorak', 'Fitzroy', 'St Kilda', 'Camberwell', 'Brunswick', 'Hawthorn', 'Footscray', 'Malvern', 'Yarraville'].map((location) => (
                      <Link
                        key={location}
                        to={`/locations/${location.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium p-2 rounded hover:bg-blue-50 transition-colors"
                      >
                        {location}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Link
                      to="/areas"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View All 145+ Melbourne Suburbs
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'service') {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              Areas We Serve for {currentService ? SERVICES[currentService.replace('/services/', '')]?.title : 'This Service'}
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {targetLocations.map((location) => (
                <Card key={location} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <Link
                      to={`/locations/${location.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-primary group-hover:text-blue-600">
                            {location}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Professional mould services in {location}, Melbourne
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/areas">
                  <MapPin className="w-5 h-5 mr-2" />
                  View All Melbourne Service Areas
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Location variant (default)
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Professional Mould Services in {currentLocation} & Surrounding Areas
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Related Services */}
            {showRelatedServices && relevantServices.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Home className="w-5 h-5 text-blue-600" />
                    Our Services in {currentLocation}
                  </h3>
                  <div className="space-y-3">
                    {relevantServices.slice(0, 4).map((serviceKey) => {
                      const service = SERVICES[serviceKey];
                      return (
                        <Link
                          key={serviceKey}
                          to={service.path}
                          className="block p-3 rounded-lg border hover:border-blue-200 hover:bg-blue-50 transition-colors group"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="font-medium text-primary group-hover:text-blue-600">
                                {service.title}
                              </span>
                              <p className="text-sm text-muted-foreground mt-1">
                                {service.description} in {currentLocation}
                              </p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Nearby Suburbs */}
            {showNearbySuburbs && nearbySuburbs.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-green-600" />
                    Nearby Melbourne Suburbs We Serve
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {nearbySuburbs.map((suburb) => (
                      <Link
                        key={suburb}
                        to={`/locations/${suburb.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center gap-2 p-3 rounded-lg border hover:border-green-200 hover:bg-green-50 transition-colors group"
                      >
                        <div className="flex-1">
                          <span className="font-medium text-primary group-hover:text-green-600">
                            {suburb}
                          </span>
                          <p className="text-xs text-muted-foreground">
                            Mould removal services
                          </p>
                        </div>
                        <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-green-600" />
                      </Link>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <Link
                      to="/areas"
                      className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 font-medium"
                    >
                      View All Melbourne Service Areas
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Emergency Contact CTA */}
          <div className="mt-12 text-center">
            <Card className="inline-block bg-blue-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Need Immediate Mould Removal in {currentLocation}?
                </h3>
                <p className="mb-4 opacity-90">
                  Professional service available 7am-7pm daily across Melbourne
                </p>
                <Button asChild size="lg" variant="secondary">
                  <Link to="tel:1800954117">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 1800 954 117 Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicInternalLinks;