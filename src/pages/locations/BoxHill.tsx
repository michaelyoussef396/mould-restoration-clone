import { ArrowRight, Clock, Shield, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";

export const BoxHill = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Box Hill Mould Removal", href: "/services/mould-removal-box-hill", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Optimization for Box Hill Melbourne Mould Removal */}
      <LocationPageSEO
        location="Box Hill"
        service="removal"
        emergency={false}
        title="Mould Removal Box Hill Melbourne - Transport Hub Multicultural Specialists"
        description="Expert mould removal Box Hill Melbourne. Transport hub specialists treating apartments, multicultural community homes. Box Hill Central area expertise. Call 1800 954 117 for professional service."
      />
      <LocalBusinessSchema
        pageName="Box Hill Mould Removal"
        pageUrl="https://mouldrestoration.com.au/locations/box-hill"
        serviceType="removal"
        location="Box Hill"
      />
      <ServiceSchema
        serviceName="Mould Removal Box Hill Melbourne"
        serviceDescription="Specialized mould removal for Box Hill's transport hub and multicultural community. Expert treatment for high-density living, apartments, and diverse community housing needs."
        serviceUrl="https://mouldrestoration.com.au/locations/box-hill"
        priceRange="$$"
        areaServed={["Box Hill", "Box Hill North", "Box Hill South", "Blackburn", "Mont Albert"]}
      />
      <Navigation />

      {/* Emergency Response Bar */}
      <div className="emergency-bar">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>24/7 Emergency Mould Response in Box Hill</span>
            <Button variant="outline" size="sm" className="bg-white text-emergency-orange border-white hover:bg-emergency-orange hover:text-white">
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
              Professional Mould Removal & Inspection in Box Hill, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Melbourne's premier mould removal specialists serving Box Hill's vibrant multicultural transport hub and high-density living community. IICRC-certified technicians with 5+ years experience treating apartments, town centres, and diverse residential properties near Box Hill Central. Same-day emergency response, 100+ properties restored with 5.0/5 star rating from Box Hill residents.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-emergency-orange" />
                  <span>Same-day emergency response to Box Hill</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Transport hub area specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>High-density living expertise</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Multicultural community service</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Apartment complex treatment</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="emergency-cta">
                <Phone className="w-5 h-5 mr-2" />
                Call Now for Box Hill Mould Emergency: 1800 954 117
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
                Free Box Hill Mould Inspection
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
                <Clock className="w-12 h-12 text-emergency-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Emergency Box Hill Response</h3>
                <p className="text-muted-foreground mb-4">2-hour emergency callout to all Box Hill properties</p>
                <Button className="w-full emergency-cta">Call 1800 954 117</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-accent-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">High-Density Specialists</h3>
                <p className="text-muted-foreground mb-4">Expert care for Box Hill apartments and units</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Transport Hub Knowledge</h3>
                <p className="text-muted-foreground mb-4">Understanding Box Hill Central area challenges</p>
                <Button variant="outline" className="w-full">Free Quote</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Box Hill Area Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Expert Mould Removal Services in Box Hill Melbourne
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Box Hill Transport Hub Expertise</h3>
                <p className="text-muted-foreground mb-4">
                  Box Hill is one of Melbourne's major suburban centres and multicultural transport hubs, located approximately 14 kilometres east of the CBD. Known for Box Hill Central shopping, excellent train and bus connections, and vibrant multicultural community, Box Hill represents dynamic urban living in Melbourne's eastern suburbs.
                </p>
                <p className="text-muted-foreground mb-4">
                  The suburb encompasses postcodes 3128 and surrounding areas, bounded by Middleborough Road and Whitehorse Road. Box Hill Central forms the commercial heart with major shopping and dining, while Whitehorse Road provides additional retail services. The area is exceptionally well-connected by Box Hill railway station, multiple bus routes, and major arterial roads.
                </p>
                <p className="text-muted-foreground">
                  Box Hill's housing stock reflects its urban evolution, featuring high-rise apartments, modern townhouse complexes, established family homes, and mixed-use developments. The area's popularity with diverse communities, particularly Asian families and professionals, has driven continued development and densification requiring specialized mould treatment for various property types.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Common Box Hill Mould Issues</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>High-Rise Apartments:</strong> Modern apartment buildings with sealed environments, mechanical ventilation systems, and potential condensation issues in bathrooms and kitchens.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Urban Moisture Challenges:</strong> High population density creating increased humidity from human activity, cooking, and varied lifestyle patterns throughout the day.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Transport Hub Effects:</strong> Properties near railway lines and bus terminals experiencing vibrations and moisture penetration from heavy transport activity.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Mixed-Use Buildings:</strong> Commercial and residential combinations creating diverse moisture sources from businesses, restaurants, and residential activities.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Multicultural Living Patterns:</strong> Diverse cooking methods, indoor drying practices, and varying household routines affecting moisture levels in shared buildings.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-accent-blue/10 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3">Why Box Hill Properties Need Professional Mould Treatment</h3>
              <p className="text-muted-foreground">
                Box Hill's urban density and multicultural community create complex moisture management challenges. Our IICRC-certified technicians understand the specific requirements of high-density living, transport hub environments, and diverse cultural practices, providing professional service that works with building management and community needs while ensuring health standards.
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
              Our Box Hill Mould Removal Process
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">High-Density Property Assessment</h4>
                    <p className="text-muted-foreground text-sm">
                      Comprehensive inspection of apartments and units using advanced moisture detection. Special focus on ventilation systems, shared walls, and urban environmental factors affecting Box Hill properties.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Community-Respectful Containment</h4>
                    <p className="text-muted-foreground text-sm">
                      Professional containment procedures designed for high-density living. Coordination with building management and neighboring residents to minimize disruption in shared buildings.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">Professional Urban Remediation</h4>
                    <p className="text-muted-foreground text-sm">
                      IICRC-approved removal techniques suitable for modern apartment construction and urban living environments. Safe, effective treatments that work within building regulations and community standards.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold mb-2">Urban Moisture Solutions</h4>
                    <p className="text-muted-foreground text-sm">
                      Address high-density living moisture challenges - ventilation system upgrades, humidity control solutions, and building envelope improvements suited to urban environments.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-semibold mb-2">Community Health Verification</h4>
                    <p className="text-muted-foreground text-sm">
                      Independent testing throughout Box Hill properties with attention to shared spaces and communal areas. Air quality monitoring to ensure safe living environments for diverse residents.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">6</div>
                  <div>
                    <h4 className="font-semibold mb-2">Building Management Support</h4>
                    <p className="text-muted-foreground text-sm">
                      Ongoing consultation with building managers and body corporates. Education about urban moisture control and prevention strategies for high-density communities.
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
              Why Choose Mould & Restoration Co. for Box Hill Mould Removal?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-accent-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Urban Community Specialists</h3>
                <p className="text-muted-foreground">
                  Expert understanding of Box Hill's multicultural community and high-density living challenges. Experience working with building management and diverse residential communities.
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-emergency-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">2-Hour Transport Hub Response</h3>
                <p className="text-muted-foreground">
                  Rapid response to Box Hill emergencies with excellent transport access. Same-day service available with understanding of urban living schedules and community needs.
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-success-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">High-Density Living Experts</h3>
                <p className="text-muted-foreground">
                  Specialized knowledge of apartment buildings, unit complexes, and urban construction methods. ABN 47 683 089 652, insurance work welcome, body corporate friendly service.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">100+ Box Hill Properties Successfully Restored</h3>
              <p className="text-muted-foreground mb-6">
                Our experienced team has successfully treated mould issues in apartments, townhouses, and mixed-use buildings throughout Box Hill. We understand the importance of providing efficient service that works with building management while ensuring healthy living environments for diverse urban communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="emergency-cta">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 1800 954 117 for Box Hill Service
                </Button>
                <Button size="lg" variant="outline">
                  Request Free Box Hill Property Inspection
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
              Box Hill Property Types We Service
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">High-Density Residential</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Modern Apartment Buildings</h4>
                    <p className="text-muted-foreground text-sm">
                      Contemporary high-rise living with sealed environments and mechanical systems. Specialized treatment for urban density challenges and shared facility considerations.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Unit Complexes</h4>
                    <p className="text-muted-foreground text-sm">
                      Multi-level unit developments with body corporate management. Treatment solutions that comply with building regulations and minimize disruption to neighboring residents.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Townhouse Developments</h4>
                    <p className="text-muted-foreground text-sm">
                      Contemporary townhouses with shared walls and modern amenities. Professional service that works with community living requirements and building management.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Mixed-Use & Commercial</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Mixed-Use Buildings</h4>
                    <p className="text-muted-foreground text-sm">
                      Commercial ground floor with residential above. Comprehensive treatment for diverse moisture sources and complex building systems near Box Hill Central.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Investment Properties</h4>
                    <p className="text-muted-foreground text-sm">
                      Rental apartments and units requiring efficient treatment with minimal tenant disruption. Professional service that maintains property values in competitive rental market.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Student Accommodation</h4>
                    <p className="text-muted-foreground text-sm">
                      Purpose-built student housing with high occupancy rates. Specialized treatment for intensive use patterns and diverse international resident needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-6">
                Every Box Hill property serves different urban living needs. Our IICRC-certified technicians provide professional service that works with building management, body corporates, and diverse community requirements while ensuring thorough mould remediation.
              </p>
              <Button size="lg" className="emergency-cta">
                Call 1800 954 117 for Box Hill Building Assessment
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
              Preventing Mould in Your Box Hill Property
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Urban High-Density Considerations</h3>
                <p className="text-muted-foreground mb-4">
                  Box Hill's urban environment and high-density living create unique moisture challenges. Transport activity, population density, and multicultural living patterns require proactive moisture management in sealed apartment environments and shared buildings.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Sealed building environments trap moisture and humidity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>High population density creates consistent moisture sources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Transport vibrations can affect building integrity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Diverse cooking and living practices create varying humidity levels</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Box Hill Urban Living Prevention Tips</h3>
                <div className="space-y-4">
                  <div className="bg-accent-blue/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Mechanical Ventilation Optimization</h4>
                    <p className="text-muted-foreground text-sm">
                      Maximize apartment ventilation systems, use bathroom exhaust fans consistently, and ensure air conditioning units are maintained for optimal moisture removal.
                    </p>
                  </div>
                  <div className="bg-success-green/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">High-Density Living Management</h4>
                    <p className="text-muted-foreground text-sm">
                      Coordinate with neighbors on ventilation practices, report building maintenance issues promptly, and maintain consistent temperature control in sealed environments.
                    </p>
                  </div>
                  <div className="bg-accent-teal/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Cultural Practice Balance</h4>
                    <p className="text-muted-foreground text-sm">
                      Balance traditional cooking and household practices with apartment ventilation requirements. Use range hoods, manage steam carefully, and ventilate laundry areas.
                    </p>
                  </div>
                  <div className="bg-emergency-orange/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Building System Monitoring</h4>
                    <p className="text-muted-foreground text-sm">
                      Regular checks of apartment systems - exhaust fans, air conditioning, and shared ventilation. Report building maintenance issues to management promptly.
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
            Professional Mould Removal Service in Box Hill Melbourne
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            Protect your Box Hill property and urban community health with expert mould removal services. Our IICRC-certified specialists provide same-day emergency response with professional treatment for apartments, units, and high-density living throughout postcode 3128.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-emergency-orange" />
              <span className="text-lg">2-Hour Emergency Response</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-success-green" />
              <span className="text-lg">High-Density Living Specialists</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-accent-teal" />
              <span className="text-lg">Transport Hub Experts</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="emergency-cta text-lg px-8 py-4">
              <Phone className="w-6 h-6 mr-2" />
              Call 1800 954 117 - Emergency Box Hill Mould Service
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-primary hover:text-white text-lg px-8 py-4">
              Free Box Hill Apartment Inspection
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>

          <div className="mt-8 text-primary-foreground/80">
            <p>ABN: 47 683 089 652 | Available 7am-7pm Every Day | Body Corporate Friendly Service</p>
            <p className="mt-2">Servicing Box Hill, Box Hill North, Box Hill South, Blackburn, Mont Albert & Surrounding Eastern Suburbs</p>
          </div>
        </div>
      </section>
    </div>
  );
};