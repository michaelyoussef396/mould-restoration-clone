import { ArrowRight, Clock, Shield, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";

export const PortMelbourne = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Port Melbourne Mould Removal", href: "/services/mould-removal-port-melbourne", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Optimization for Port Melbourne Mould Removal */}
      <LocationPageSEO
        location="Port Melbourne"
        service="removal"
        emergency={false}
        title="Mould Removal Port Melbourne - Waterfront Industrial Specialists"
        description="Expert mould removal Port Melbourne. Waterfront industrial specialists treating docklands properties and warehouse conversions. Bay Street area expertise. Call 1800 954 117 for professional service."
        canonical="https://mouldrestoration.com.au/services/mould-removal-port-melbourne"
      />
      <LocalBusinessSchema
        pageName="Port Melbourne Mould Removal"
        pageUrl="https://mouldrestoration.com.au/locations/port-melbourne"
        serviceType="removal"
        location="Port Melbourne"
      />
      <ServiceSchema
        serviceName="Mould Removal Port Melbourne"
        serviceDescription="Specialized mould removal for Port Melbourne's waterfront properties. Expert treatment for industrial conversions, docklands developments, and waterfront residences with professional waterfront standards."
        serviceUrl="https://mouldrestoration.com.au/locations/port-melbourne"
        priceRange="$$"
        areaServed={["Port Melbourne", "South Melbourne", "Middle Park", "Albert Park", "Docklands"]}
      />
      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Port Melbourne</span>
            <Button variant="outline" size="sm" className="bg-white text-blue-600 border-white hover:bg-emergency-orange hover:text-white">
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
              Professional Mould Removal & Inspection in Port Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Melbourne's premier mould removal specialists serving Port Melbourne's dynamic waterfront community and industrial heritage properties. IICRC-certified technicians with 5+ years experience treating warehouse conversions, docklands developments, and Bay Street commercial premises. same-day professional service, 100+ properties restored with 5.0/5 star rating from Port Melbourne residents and businesses.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>same-day professional service to Port Melbourne</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Warehouse conversion specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Waterfront property expertise</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Industrial heritage preservation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Commercial waterfront service</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Professional Mould Service - Call Now: 1800 954 117
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
                Free Waterfront Property Inspection
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
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Professional Service - Same-day Available 7am-7pm</h3>
                <p className="text-muted-foreground mb-4">same-day professional service to Port Melbourne waterfront properties</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Call 1800 954 117</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-accent-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Waterfront Specialists</h3>
                <p className="text-muted-foreground mb-4">Expert care for Port Melbourne's diverse waterfront properties</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Industrial Heritage Knowledge</h3>
                <p className="text-muted-foreground mb-4">Understanding Port Melbourne's unique conversion challenges</p>
                <Button variant="outline" className="w-full">Free Quote</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Port Melbourne Area Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Expert Mould Removal Services in Port Melbourne
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Port Melbourne Waterfront Expertise</h3>
                <p className="text-muted-foreground mb-4">
                  Port Melbourne is one of Melbourne's most dynamic waterfront suburbs, located approximately 5 kilometres southwest of the CBD. Known for its industrial heritage, warehouse conversions, and proximity to Port Phillip Bay, Port Melbourne attracts young professionals, families, and businesses seeking waterfront living with urban convenience.
                </p>
                <p className="text-muted-foreground mb-4">
                  The suburb encompasses postcode 3207, stretching from the Yarra River in the north to Port Phillip Bay in the south. Bay Street serves as the main commercial strip, featuring cafes, restaurants, and boutique shopping, while the area includes significant industrial heritage buildings converted to residential and commercial use.
                </p>
                <p className="text-muted-foreground">
                  Port Melbourne's distinctive waterfront location and industrial heritage create unique environmental conditions. The combination of bay proximity, converted warehouse spaces, and modern developments creates diverse moisture challenges requiring specialized understanding of both heritage preservation and contemporary waterfront living.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Common Port Melbourne Mould Issues</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Warehouse Conversion Challenges:</strong> Industrial buildings converted to residential and commercial use with original construction requiring specialized moisture management approaches.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Waterfront Humidity Effects:</strong> Proximity to Port Phillip Bay and the Yarra River creating elevated humidity levels affecting waterfront properties and nearby developments.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Industrial Heritage Issues:</strong> Original brick and timber construction with high ceilings and large spaces creating unique ventilation and moisture control challenges.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Modern Waterfront Development:</strong> Contemporary apartments and townhouses dealing with sealed environments and water proximity moisture sources.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Commercial Mixed-Use Complexity:</strong> Bay Street commercial premises with residential above creating cross-contamination risks and complex treatment requirements.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-accent-blue/10 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3">Why Port Melbourne Properties Need Specialized Waterfront Mould Treatment</h3>
              <p className="text-muted-foreground">
                Port Melbourne's unique combination of waterfront location, industrial heritage, and diverse property types requires specialized mould removal approaches. Our IICRC-certified technicians understand the challenges of treating converted warehouses, managing bay proximity humidity, and working with both heritage preservation requirements and modern waterfront living standards to deliver effective solutions for this dynamic community.
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
              Our Port Melbourne Waterfront Mould Removal Process
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Waterfront Property Assessment</h4>
                    <p className="text-muted-foreground text-sm">
                      Comprehensive evaluation of waterfront and converted properties using advanced moisture detection technology. Special attention to heritage construction, bay humidity effects, and industrial conversion challenges.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Heritage-Safe Containment</h4>
                    <p className="text-muted-foreground text-sm">
                      Professional containment procedures designed for warehouse conversions and heritage properties that protect original architectural features while ensuring thorough treatment coverage.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">Specialist Waterfront Remediation</h4>
                    <p className="text-muted-foreground text-sm">
                      IICRC-approved removal techniques specifically designed for waterfront and converted industrial properties. Specialized treatments that address humidity challenges while preserving heritage character.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold mb-2">Waterfront Moisture Management</h4>
                    <p className="text-muted-foreground text-sm">
                      Address moisture sources specific to Port Melbourne's waterfront location - bay proximity humidity control, industrial building ventilation optimization, and drainage solutions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-semibold mb-2">Comprehensive Property Verification</h4>
                    <p className="text-muted-foreground text-sm">
                      Independent testing throughout your Port Melbourne property. Comprehensive air quality monitoring and clearance testing suited to both residential and commercial waterfront environments.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">6</div>
                  <div>
                    <h4 className="font-semibold mb-2">Waterfront Property Maintenance</h4>
                    <p className="text-muted-foreground text-sm">
                      Tailored maintenance programs for Port Melbourne's diverse properties. Ongoing monitoring and prevention strategies that account for waterfront effects and heritage building requirements.
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
              Why Choose Mould & Restoration Co. for Port Melbourne Mould Removal?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-accent-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Waterfront Property Expertise</h3>
                <p className="text-muted-foreground">
                  Extensive experience with Port Melbourne's warehouse conversions and waterfront properties. We understand the unique moisture challenges of bay proximity and industrial heritage buildings.
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Same-Day Professional Service</h3>
                <p className="text-muted-foreground">
                  Fast response to Port Melbourne mould situations. Available 7am-7pm every day with same-day service for urgent situations. Professional assessment and immediate action when you need it most.
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-success-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">IICRC Certified Experts</h3>
                <p className="text-muted-foreground">
                  Fully qualified mould removal specialists with heritage and waterfront property experience. ABN 47 683 089 652, insurance work welcome, 100% satisfaction guarantee for all Port Melbourne clients.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">100+ Port Melbourne Properties Successfully Restored</h3>
              <p className="text-muted-foreground mb-6">
                Our experienced team has successfully treated mould issues in warehouse conversions, waterfront apartments, Bay Street commercial premises, and heritage properties throughout Port Melbourne. We understand the importance of preserving industrial character while ensuring healthy living and working environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 1800 954 117 for Port Melbourne Service
                </Button>
                <Button size="lg" variant="outline">
                  Request Waterfront Property Consultation
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
              Port Melbourne Property Types We Service
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Industrial Heritage Properties</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Warehouse Conversions</h4>
                    <p className="text-muted-foreground text-sm">
                      Industrial buildings converted to residential lofts and apartments requiring specialized treatment for original brick construction, high ceilings, and large open spaces.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Heritage Commercial Conversions</h4>
                    <p className="text-muted-foreground text-sm">
                      Historic industrial premises converted to offices, studios, and commercial spaces requiring treatment that preserves original architectural character.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Mixed Heritage Developments</h4>
                    <p className="text-muted-foreground text-sm">
                      Combined residential and commercial developments in converted industrial buildings requiring coordinated treatment approaches for different use zones.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Modern Waterfront Properties</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Contemporary Waterfront Apartments</h4>
                    <p className="text-muted-foreground text-sm">
                      Modern developments with bay views and waterfront proximity requiring specialized moisture management for sealed building environments and humidity exposure.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Bay Street Commercial Premises</h4>
                    <p className="text-muted-foreground text-sm">
                      Cafes, restaurants, and retail spaces along the main commercial strip requiring treatment that maintains operating standards while addressing waterfront humidity challenges.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Waterfront Townhouses</h4>
                    <p className="text-muted-foreground text-sm">
                      Contemporary multi-level homes with bay proximity requiring comprehensive moisture management for modern construction and waterfront exposure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-6">
                Every Port Melbourne property benefits from our specialized understanding of waterfront and heritage challenges. Our IICRC-certified technicians provide customized treatment plans that respect both industrial heritage and modern waterfront living requirements.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Call 1800 954 117 for Port Melbourne Property Assessment
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
              Preventing Mould in Your Port Melbourne Property
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Waterfront Environment Factors</h3>
                <p className="text-muted-foreground mb-4">
                  Port Melbourne's waterfront location and industrial heritage create unique environmental conditions affecting properties. The combination of bay proximity, converted warehouse spaces, and Melbourne's maritime climate requires specialized moisture management approaches.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Port Phillip Bay and Yarra River proximity increasing humidity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Industrial heritage construction with unique ventilation challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Mixed commercial and residential moisture sources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>High pedestrian traffic and commercial activity effects</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Port Melbourne-Specific Prevention Tips</h3>
                <div className="space-y-4">
                  <div className="bg-accent-blue/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Warehouse Conversion Ventilation</h4>
                    <p className="text-muted-foreground text-sm">
                      Optimize air circulation in converted spaces with high ceilings and large rooms. Ensure adequate ventilation systems are installed to manage humidity in warehouse-style living spaces.
                    </p>
                  </div>
                  <div className="bg-success-green/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Waterfront Humidity Management</h4>
                    <p className="text-muted-foreground text-sm">
                      Monitor indoor humidity levels carefully, especially during Melbourne's humid months. Use dehumidifiers when necessary and ensure waterfront exposure doesn't compromise building materials.
                    </p>
                  </div>
                  <div className="bg-accent-teal/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Heritage Building Maintenance</h4>
                    <p className="text-muted-foreground text-sm">
                      Regular maintenance of original brick and timber construction. Address any water damage quickly and ensure proper drainage around heritage building foundations.
                    </p>
                  </div>
                  <div className="bg-emergency-orange/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Mixed-Use Property Care</h4>
                    <p className="text-muted-foreground text-sm">
                      Coordinate moisture management between commercial and residential zones. Ensure commercial activities don't create excess humidity affecting residential areas.
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
            Professional Mould Removal Service in Port Melbourne
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            Protect your Port Melbourne waterfront or heritage property with our professional mould removal services. Our IICRC-certified specialists provide same-day professional service with expert treatment for warehouse conversions and waterfront developments throughout postcode 3207.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-blue-600" />
              <span className="text-lg">Same-Day Professional Service</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-success-green" />
              <span className="text-lg">100+ Properties Restored</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-accent-teal" />
              <span className="text-lg">5.0 Star Rating</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4">
              <Phone className="w-6 h-6 mr-2" />
              Call 1800 954 117 - Emergency Port Melbourne Mould Service
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-primary hover:text-white text-lg px-8 py-4">
              Free Waterfront Property Inspection
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>

          <div className="mt-8 text-primary-foreground/80">
            <p>ABN: 47 683 089 652 | Available 7am-7pm Every Day | Insurance Work Welcome</p>
            <p className="mt-2">Servicing Port Melbourne, South Melbourne, Middle Park, Albert Park, Docklands & Surrounding Waterfront Melbourne Suburbs</p>
          </div>
        </div>
      </section>
    </div>
  );
};