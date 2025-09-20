import { ArrowRight, Clock, Shield, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";

export const MiddlePark = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Middle Park Mould Removal", href: "/services/mould-removal-middle-park", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Optimization for Middle Park Melbourne Mould Removal */}
      <LocationPageSEO
        location="Middle Park"
        service="removal"
        emergency={false}
        title="Mould Removal Middle Park Melbourne - Beachside Living Specialists"
        description="Expert mould removal Middle Park Melbourne. Beachside living specialists treating coastal properties and beach proximity homes. Port Philip Bay area expertise. Call 1800 954 117 for premium service."
        canonical="https://mouldrestoration.com.au/services/mould-removal-middle-park"
      />
      <LocalBusinessSchema
        pageName="Middle Park Mould Removal"
        pageUrl="https://mouldrestoration.com.au/locations/middle-park"
        serviceType="removal"
        location="Middle Park"
      />
      <ServiceSchema
        serviceName="Mould Removal Middle Park Melbourne"
        serviceDescription="Specialized mould removal for Middle Park's beachside properties. Expert treatment for coastal homes, beach proximity residences, and Port Philip Bay area developments with premium beachside standards."
        serviceUrl="https://mouldrestoration.com.au/locations/middle-park"
        priceRange="$$$"
        areaServed={["Middle Park", "Albert Park", "Port Melbourne", "South Melbourne", "St Kilda"]}
      />
      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-primary text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Middle Park</span>
            <Button variant="outline" size="sm" className="bg-white text-primary border-white hover:bg-emergency-orange hover:text-white">
              Call 1800 954 117
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground pt-[104px]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80"></div>
        <div className="container mx-auto px-4 relative">
          <div className="mb-6">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Mould Removal & Inspection in Middle Park, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Melbourne's premier mould removal specialists serving Middle Park's exclusive beachside community and coastal properties. IICRC-certified technicians with 5+ years experience treating beach proximity homes, coastal residences, and premium developments near Port Phillip Bay. same-day professional service, 100+ properties restored with 5.0/5 star rating from discerning Middle Park residents.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>same-day professional service to Middle Park</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Beachside property specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Port Phillip Bay proximity expertise</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success" />
                  <span>Coastal property preservation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Premium beachside service standards</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Professional Mould Service - Call Now: 1800 954 117
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
                Free Beachside Property Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Response Cards */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Priority Middle Park Response</h3>
                <p className="text-muted-foreground mb-4">2-hour priority response to Middle Park beachside properties</p>
                <Button className="w-full bg-primary hover:bg-primary-600 text-white">Call 1800 954 117</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-accent-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Beachside Specialists</h3>
                <p className="text-muted-foreground mb-4">Expert care for Middle Park's coastal properties</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Coastal Environment Knowledge</h3>
                <p className="text-muted-foreground mb-4">Understanding Port Phillip Bay area challenges</p>
                <Button variant="outline" className="w-full">Premium Quote</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Middle Park Area Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Expert Mould Removal Services in Middle Park Melbourne
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Middle Park Beachside Living Expertise</h3>
                <p className="text-muted-foreground mb-4">
                  Middle Park is one of Melbourne's most exclusive beachside suburbs, located approximately 5 kilometres south of the CBD. Known for its beautiful beach access, premium coastal properties, and sophisticated seaside lifestyle, Middle Park attracts affluent families and professionals seeking luxury beachside living.
                </p>
                <p className="text-muted-foreground mb-4">
                  The suburb encompasses postcode 3206, stretching from Canterbury Road in the north to the Port Phillip Bay foreshore in the south. The area features predominantly Victorian and Edwardian heritage homes, many with beach proximity, alongside carefully planned modern developments that complement the coastal character.
                </p>
                <p className="text-muted-foreground">
                  Middle Park's distinctive beachside location creates unique environmental conditions that affect nearby properties. The combination of Port Phillip Bay proximity, sea breezes, and Melbourne's coastal climate patterns creates specific moisture challenges that require specialised understanding of beachside property management.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Common Middle Park Mould Issues</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Coastal Humidity Effects:</strong> Proximity to Port Phillip Bay creating elevated humidity levels and salt air exposure affecting beachside properties and nearby residences.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Sea Breeze Moisture Patterns:</strong> Coastal wind patterns bringing moisture inland, particularly affecting properties within 500 meters of the beach.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Heritage Coastal Construction:</strong> Victorian and Edwardian beachside homes with original construction requiring careful moisture management while preserving heritage character.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Beach Activity Effects:</strong> High pedestrian traffic and beach activities contributing to localized humidity variations and sand infiltration challenges.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Coastal Storm Impacts:</strong> Seasonal weather patterns from Port Phillip Bay affecting building exposure and moisture infiltration risks.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-accent-blue/10 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3">Why Middle Park Properties Need Specialized Coastal Mould Treatment</h3>
              <p className="text-muted-foreground">
                Middle Park's premium beachside location and coastal environment require specialised mould removal approaches that understand the specific challenges of seaside living. Our IICRC-certified technicians have extensive experience treating properties affected by coastal conditions, managing salt air exposure and elevated humidity levels while preserving the premium beachside lifestyle and property values that make Middle Park so exclusive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mould Removal Process */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Middle Park Coastal Mould Removal Process
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Beachside Property Assessment</h4>
                    <p className="text-muted-foreground text-sm">
                      Comprehensive evaluation of coastal properties using advanced moisture detection technology. Special attention to salt air effects, beach proximity humidity, and coastal weather exposure patterns.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Premium Coastal Containment</h4>
                    <p className="text-muted-foreground text-sm">
                      Professional containment procedures designed for beachside properties that protect valuable coastal homes and maintain the premium seaside lifestyle standards expected by Middle Park residents.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">Specialist Beachside Remediation</h4>
                    <p className="text-muted-foreground text-sm">
                      IICRC-approved removal techniques specifically designed for coastal properties. Specialized treatments that address salt air exposure and humidity challenges while preserving beachside property character.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold mb-2">Coastal Moisture Management</h4>
                    <p className="text-muted-foreground text-sm">
                      Address moisture sources specific to Middle Park's coastal location - sea breeze humidity control, salt air protection systems, and ventilation optimisation for beachside properties.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-semibold mb-2">Premium Coastal Verification</h4>
                    <p className="text-muted-foreground text-sm">
                      Independent testing throughout your Middle Park property. Comprehensive air quality monitoring and clearance testing to ensure beachside living meets the highest coastal health standards.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">6</div>
                  <div>
                    <h4 className="font-semibold mb-2">Beachside Property Maintenance</h4>
                    <p className="text-muted-foreground text-sm">
                      Tailored maintenance programs for Middle Park's coastal properties. Ongoing monitoring and prevention strategies that account for seasonal coastal effects and beachside environmental factors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">
              Why Choose Mould & Restoration Co. for Middle Park Mould Removal?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-accent-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Coastal Property Expertise</h3>
                <p className="text-muted-foreground">
                  Extensive experience with Middle Park's beachside properties and coastal homes. We understand the unique moisture challenges of living near Port Phillip Bay and the effects of salt air on buildings.
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Priority Beachside Response</h3>
                <p className="text-muted-foreground">
                  Exclusive priority response to Middle Park beachside properties. Available 7am-7pm every day with same-day service for urgent situations. Professional service that respects the premium coastal lifestyle.
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-success mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">IICRC Coastal Specialists</h3>
                <p className="text-muted-foreground">
                  Certified mould removal specialists with coastal property experience. ABN 47 683 089 652, premium insurance work welcome, 100% satisfaction guarantee for discerning Middle Park residents.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">100+ Middle Park Properties Successfully Restored</h3>
              <p className="text-muted-foreground mb-6">
                Our experienced team has successfully treated mould issues in beachside heritage homes, coastal modern developments, and premium properties throughout Middle Park. We understand the importance of maintaining the exclusive beachside lifestyle while ensuring the highest standards of health and safety.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 1800 954 117 for Middle Park Service
                </Button>
                <Button size="lg" variant="outline">
                  Request Beachside Property Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types We Service */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Middle Park Property Types We Service
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Beachside Residential Properties</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Heritage Beachside Homes</h4>
                    <p className="text-muted-foreground text-sm">
                      Victorian and Edwardian properties with beach proximity requiring specialised treatment for heritage construction and coastal exposure challenges while preserving period character.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Modern Coastal Residences</h4>
                    <p className="text-muted-foreground text-sm">
                      Contemporary beachside homes with premium finishes, sea views, and sophisticated building systems requiring advanced coastal moisture management approaches.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Beach Proximity Apartments</h4>
                    <p className="text-muted-foreground text-sm">
                      Multi-residential developments near the beach with shared coastal exposure challenges requiring coordinated treatment and body corporate liaison services.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Coastal Commercial Properties</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Beachside Hospitality Venues</h4>
                    <p className="text-muted-foreground text-sm">
                      Cafes, restaurants, and hospitality businesses near the beach requiring specialised treatment that maintains operating standards while addressing coastal moisture challenges.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Coastal Retail Spaces</h4>
                    <p className="text-muted-foreground text-sm">
                      Boutiques and retail premises serving the beachside community, requiring treatment that protects inventory while managing the effects of coastal humidity and foot traffic.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Beach Recreation Facilities</h4>
                    <p className="text-muted-foreground text-sm">
                      Sports clubs, community centers, and recreation facilities near the beach requiring specialised approaches for high-humidity recreational environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-6">
                Every Middle Park property benefits from our specialised understanding of coastal living challenges. Our IICRC-certified technicians provide customised treatment plans that preserve the unique character and premium lifestyle of beachside living.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                Call 1800 954 117 for Middle Park Beachside Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Preventing Mould in Your Middle Park Beachside Property
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Beachside Environment Factors</h3>
                <p className="text-muted-foreground mb-4">
                  Middle Park's premium beachside location creates distinctive environmental conditions that affect nearby properties. The combination of Port Phillip Bay proximity, coastal weather patterns, and Melbourne's maritime climate requires specialised moisture management strategies for beachside living.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Port Phillip Bay proximity increasing coastal humidity levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Sea breezes bringing moisture and salt air inland</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Beach activity and pedestrian traffic effects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Seasonal coastal storm patterns and exposure</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Coastal Property Prevention Strategies</h3>
                <div className="space-y-4">
                  <div className="bg-accent-blue/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Beachside Humidity Control</h4>
                    <p className="text-muted-foreground text-sm">
                      Monitor indoor humidity levels carefully, especially during sea breeze conditions. Use dehumidifiers when necessary and ensure ventilation systems account for coastal moisture patterns.
                    </p>
                  </div>
                  <div className="bg-success/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Salt Air Protection</h4>
                    <p className="text-muted-foreground text-sm">
                      Maintain building materials and finishes to withstand salt air exposure. Regular cleaning and maintenance help prevent moisture retention in coastal environments.
                    </p>
                  </div>
                  <div className="bg-accent-teal/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Coastal Ventilation Management</h4>
                    <p className="text-muted-foreground text-sm">
                      Optimize air circulation to take advantage of sea breezes while preventing excessive moisture infiltration. Ensure exhaust fans and ventilation systems work effectively.
                    </p>
                  </div>
                  <div className="bg-emergency-orange/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Seasonal Coastal Care</h4>
                    <p className="text-muted-foreground text-sm">
                      Adjust moisture management strategies with Melbourne's coastal seasonal changes, particularly during winter storms and summer humidity peaks from Port Phillip Bay.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Premium Mould Removal Service in Middle Park Melbourne
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            Protect your exclusive Middle Park beachside property with our premium mould removal services. Our IICRC-certified specialists provide priority response with specialised treatment for coastal homes and beach proximity properties throughout postcode 3206.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-primary" />
              <span className="text-lg">Priority Beachside Response</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-success" />
              <span className="text-lg">Coastal Property Specialists</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-accent-teal" />
              <span className="text-lg">Premium Beachside Service</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-600 text-white text-lg px-8 py-4">
              <Phone className="w-6 h-6 mr-2" />
              Call 1800 954 117 - Premium Middle Park Mould Service
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-primary hover:text-white text-lg px-8 py-4">
              Request Beachside Property Consultation
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>

          <div className="mt-8 text-primary-foreground/80">
            <p>ABN: 47 683 089 652 | Available 7am-7pm Every Day | Premium Insurance Work Welcome</p>
            <p className="mt-2">Servicing Middle Park, Albert Park, Port Melbourne, South Melbourne, St Kilda & Surrounding Beachside Melbourne Suburbs</p>
          </div>
        </div>
      </section>
    </div>
  );
};