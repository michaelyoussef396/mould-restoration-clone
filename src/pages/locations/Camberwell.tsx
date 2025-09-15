import { ArrowRight, Clock, Shield, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";

export const Camberwell = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Camberwell Mould Removal", href: "/services/mould-removal-camberwell", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Optimization for Camberwell Melbourne Mould Removal */}
      <LocationPageSEO
        location="Camberwell"
        service="removal"
        emergency={false}
        title="Mould Removal Camberwell Melbourne - Shopping Hub Period Property Specialists"
        description="Expert mould removal Camberwell Melbourne. Period property specialists treating Burke Road area homes. Shopping hub expertise, family properties. Call 1800 954 117 for professional service."
        canonical="https://mouldrestoration.com.au/services/mould-removal-camberwell"
      />
      <LocalBusinessSchema
        pageName="Camberwell Mould Removal"
        pageUrl="https://mouldrestoration.com.au/locations/camberwell"
        serviceType="removal"
        location="Camberwell"
      />
      <ServiceSchema
        serviceName="Mould Removal Camberwell Melbourne"
        serviceDescription="Specialized mould removal for Camberwell's period properties and shopping hub area. Expert treatment for Burke Road corridor homes, family residences, and established suburb moisture issues."
        serviceUrl="https://mouldrestoration.com.au/locations/camberwell"
        priceRange="$$"
        areaServed={["Camberwell", "Canterbury", "Hawthorn East", "Glen Iris", "Ashburton"]}
      />
      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Camberwell</span>
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
              Professional Mould Removal & Inspection in Camberwell, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Melbourne's premier mould removal specialists serving Camberwell's shopping hub and period property families. IICRC-certified technicians with 5+ years experience treating Burke Road corridor homes, Federation properties, and family residences near Camberwell Junction. same-day professional service, 100+ properties restored with 5.0/5 star rating from Camberwell homeowners.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>same-day professional service to Camberwell</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Period property mould specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Burke Road shopping strip expertise</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Family home preservation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Shopping hub area treatment</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Professional Mould Service - Call Now: 1800 954 117
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
                Free Camberwell Mould Inspection
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
                <p className="text-muted-foreground mb-4">same-day professional service to Camberwell properties</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Call 1800 954 117</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-accent-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Period Home Specialists</h3>
                <p className="text-muted-foreground mb-4">Expert care for Camberwell's heritage properties</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibent mb-2">Local Camberwell Knowledge</h3>
                <p className="text-muted-foreground mb-4">Understanding Burke Road area challenges</p>
                <Button variant="outline" className="w-full">Free Quote</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Camberwell Area Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Expert Mould Removal Services in Camberwell Melbourne
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Camberwell Shopping Hub Expertise</h3>
                <p className="text-muted-foreground mb-4">
                  Camberwell is one of Melbourne's premier shopping and residential suburbs, located approximately 9 kilometres east of the CBD. Known for Burke Road's extensive retail strip, excellent schools, and quality period homes, Camberwell serves as a major hub for Melbourne's eastern suburbs family life.
                </p>
                <p className="text-muted-foreground mb-4">
                  The suburb encompasses postcode 3124, bounded by Toorak Road to the south and Warrigal Road to the east. Burke Road forms the commercial spine with its famous shopping precinct, while Riversdale Road provides additional retail services. The area is well-connected by tram routes and the Camberwell railway station on the Lilydale and Belgrave lines.
                </p>
                <p className="text-muted-foreground">
                  Camberwell's housing stock features a rich mix of Federation and Edwardian homes, Victorian terraces, and quality inter-war properties, many with established gardens. The area also includes modern townhouse developments and apartments, creating diverse accommodation that attracts families seeking both heritage character and contemporary convenience.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Common Camberwell Mould Issues</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Federation Home Moisture:</strong> Original construction with timber framing and weatherboard cladding susceptible to moisture penetration and ventilation issues.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Period Property Basements:</strong> Heritage homes with original cellars and storage areas prone to humidity buildup and poor air circulation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Shopping Strip Proximity:</strong> Properties near Burke Road experiencing urban moisture challenges from increased foot traffic and commercial activity.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Multi-Level Homes:</strong> Large family properties with multiple bathrooms and living areas creating various moisture sources requiring comprehensive treatment.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Heritage Roof Systems:</strong> Original slate and tile roofing with period guttering systems prone to water penetration and drainage issues.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-accent-blue/10 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3">Why Camberwell Properties Need Professional Mould Treatment</h3>
              <p className="text-muted-foreground">
                Camberwell's combination of heritage housing, busy commercial activity, and family lifestyle creates unique moisture challenges. Our IICRC-certified technicians understand the specific requirements of treating period properties near shopping precincts, working to preserve architectural heritage while ensuring modern health standards for busy family homes.
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
              Our Camberwell Mould Removal Process
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Comprehensive Property Assessment</h4>
                    <p className="text-muted-foreground text-sm">
                      Detailed inspection of family homes using advanced moisture detection technology. Special focus on period construction details, multi-level properties, and basement areas common in Camberwell homes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Family-Safe Containment</h4>
                    <p className="text-muted-foreground text-sm">
                      Professional containment procedures designed for busy family homes. Minimal disruption to daily routines while ensuring effective spore control and protection of belongings.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">Professional Remediation</h4>
                    <p className="text-muted-foreground text-sm">
                      IICRC-approved removal techniques suitable for Federation and Edwardian construction. Safe, effective treatments that work with family schedules and preserve property value.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold mb-2">Moisture Source Resolution</h4>
                    <p className="text-muted-foreground text-sm">
                      Address underlying issues specific to Camberwell properties - roof maintenance, drainage improvements, ventilation upgrades, and basement moisture control solutions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-semibold mb-2">Quality Assurance Testing</h4>
                    <p className="text-muted-foreground text-sm">
                      Independent verification throughout your Camberwell property. Air quality monitoring and clearance testing to ensure your family home meets health standards and is safe for children.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">6</div>
                  <div>
                    <h4 className="font-semibold mb-2">Ongoing Family Protection</h4>
                    <p className="text-muted-foreground text-sm">
                      Maintenance recommendations tailored for Camberwell family homes. Seasonal monitoring and prevention strategies to keep your property healthy year-round.
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
              Why Choose Mould & Restoration Co. for Camberwell Mould Removal?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-accent-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Camberwell Area Expertise</h3>
                <p className="text-muted-foreground">
                  Extensive knowledge of Camberwell's diverse property types, from Burke Road commercial proximity to quiet residential streets. We understand the unique challenges of this busy family suburb.
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Same-Day Family Professional Service</h3>
                <p className="text-muted-foreground">
                  Rapid response to Camberwell mould situations with same-day service for families. Available 7am-7pm every day with professional assessment and immediate action when needed.
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-success-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">IICRC Certified Professionals</h3>
                <p className="text-muted-foreground">
                  Fully qualified mould removal specialists with extensive family home experience. ABN 47 683 089 652, insurance work welcome, 100% satisfaction guarantee for all Camberwell families.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">100+ Camberwell Family Properties Successfully Restored</h3>
              <p className="text-muted-foreground mb-6">
                Our experienced team has successfully treated mould issues in Federation homes, Edwardian properties, and contemporary family residences throughout Camberwell. We understand the importance of maintaining your property investment while ensuring a safe, healthy environment for your growing family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 1800 954 117 for Camberwell Service
                </Button>
                <Button size="lg" variant="outline">
                  Request Free Camberwell Family Home Inspection
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
              Camberwell Property Types We Service
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Heritage & Period Properties</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Federation Family Homes (1900-1915)</h4>
                    <p className="text-muted-foreground text-sm">
                      Large family residences with period features, multiple bedrooms, and established gardens. Specialized treatment for original construction while accommodating modern family needs.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Edwardian Properties (1910-1920)</h4>
                    <p className="text-muted-foreground text-sm">
                      Elegant homes with bay windows, decorative details, and spacious layouts. Expert care that preserves heritage features while ensuring contemporary health standards.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Victorian Terraces (1880-1900)</h4>
                    <p className="text-muted-foreground text-sm">
                      Character terraces with original details and period construction. Treatment methods that respect heritage value while addressing modern moisture challenges.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Contemporary Camberwell Properties</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Inter-War Family Homes</h4>
                    <p className="text-muted-foreground text-sm">
                      Solid brick homes from the 1920s-1940s with established gardens and mature trees. Modern treatment solutions for classic construction with updated family requirements.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Modern Family Residences</h4>
                    <p className="text-muted-foreground text-sm">
                      Contemporary homes with open floor plans and modern amenities. Advanced moisture management for current construction methods and busy family lifestyles.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Townhouses & Apartments</h4>
                    <p className="text-muted-foreground text-sm">
                      Multi-level properties and apartment living near Burke Road shopping. Specialized treatment for shared walls, communal areas, and compact living spaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-6">
                Every Camberwell property serves unique family needs. Our IICRC-certified technicians provide customized treatment plans that work with your family's schedule while ensuring thorough mould remediation and prevention.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Call 1800 954 117 for Camberwell Family Home Assessment
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
              Preventing Mould in Your Camberwell Family Home
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Shopping Hub Environment Factors</h3>
                <p className="text-muted-foreground mb-4">
                  Camberwell's position as a major shopping and commercial hub creates unique environmental conditions. The combination of increased urban activity, traffic, and Burke Road's retail density can affect moisture levels and air quality in nearby residential properties.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Higher urban humidity from increased human activity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Commercial activity creating localized moisture sources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Established residential gardens in commercial proximity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Multi-level family homes with diverse moisture challenges</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Camberwell Family Home Prevention Tips</h3>
                <div className="space-y-4">
                  <div className="bg-accent-blue/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Multi-Level Ventilation</h4>
                    <p className="text-muted-foreground text-sm">
                      Ensure proper air circulation throughout family homes with multiple bathrooms, laundries, and living areas. Use exhaust fans and maintain cross-ventilation.
                    </p>
                  </div>
                  <div className="bg-success-green/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Basement & Storage Areas</h4>
                    <p className="text-muted-foreground text-sm">
                      Monitor humidity levels in cellars and storage spaces common in period properties. Install dehumidifiers if necessary and ensure adequate ventilation.
                    </p>
                  </div>
                  <div className="bg-accent-teal/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Family Lifestyle Management</h4>
                    <p className="text-muted-foreground text-sm">
                      Manage moisture from busy family activities - showering, cooking, laundry. Use timers on exhaust fans and maintain consistent heating and ventilation.
                    </p>
                  </div>
                  <div className="bg-emergency-orange/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Regular Maintenance Schedule</h4>
                    <p className="text-muted-foreground text-sm">
                      Implement seasonal maintenance routines - gutter cleaning, roof inspections, and ventilation system checks to prevent moisture buildup before it becomes a problem.
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
            Professional Mould Removal Service in Camberwell Melbourne
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            Protect your Camberwell family property and loved ones' health with expert mould removal services. Our IICRC-certified specialists provide same-day professional service with specialized treatment for period homes and contemporary properties throughout postcode 3124.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-blue-600" />
              <span className="text-lg">Same-Day Professional Service</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-success-green" />
              <span className="text-lg">Family Home Specialists</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-accent-teal" />
              <span className="text-lg">Burke Road Area Experts</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4">
              <Phone className="w-6 h-6 mr-2" />
              Call 1800 954 117 - Emergency Camberwell Mould Service
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-primary hover:text-white text-lg px-8 py-4">
              Free Camberwell Family Home Inspection
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>

          <div className="mt-8 text-primary-foreground/80">
            <p>ABN: 47 683 089 652 | Available 7am-7pm Every Day | Insurance Work Welcome</p>
            <p className="mt-2">Servicing Camberwell, Canterbury, Hawthorn East, Glen Iris, Ashburton & Surrounding Eastern Suburbs</p>
          </div>
        </div>
      </section>
    </div>
  );
};