import { ArrowRight, Clock, Shield, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";

export const Hawthorn = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Hawthorn Mould Removal", href: "/services/mould-removal-hawthorn", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Optimization for Hawthorn Melbourne Mould Removal */}
      <LocationPageSEO
        location="Hawthorn"
        service="removal"
        emergency={false}
        title="Mould Removal Hawthorn Melbourne - Period Home Specialists"
        description="Expert mould removal Hawthorn Melbourne. Period home specialists treating Edwardian and Federation properties. Glenferrie Road area, established families. Call 1800 954 117 for professional service."
      />
      <LocalBusinessSchema
        pageName="Hawthorn Mould Removal"
        pageUrl="https://mouldrestoration.com.au/locations/hawthorn"
        serviceType="removal"
        location="Hawthorn"
      />
      <ServiceSchema
        serviceName="Mould Removal Hawthorn Melbourne"
        serviceDescription="Specialized mould removal for Hawthorn's period properties. Expert treatment for Edwardian and Federation homes, established suburb moisture issues, and heritage preservation."
        serviceUrl="https://mouldrestoration.com.au/locations/hawthorn"
        priceRange="$$"
        areaServed={["Hawthorn", "Hawthorn East", "Camberwell", "Richmond", "Kew"]}
      />
      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Hawthorn</span>
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
              Professional Mould Removal & Inspection in Hawthorn, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Melbourne's premier mould removal specialists serving Hawthorn's established families and period properties. IICRC-certified technicians with 5+ years experience treating Edwardian terraces, Federation homes, and shopping strip buildings near Glenferrie Road. same-day professional service, 100+ properties restored with 5.0/5 star rating from Hawthorn homeowners.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>same-day professional service to Hawthorn</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Period home mould specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Glenferrie shopping strip expertise</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Federation home preservation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Edwardian terrace treatment</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Professional Mould Service - Call Now: 1800 954 117
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
                Free Hawthorn Mould Inspection
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
                <p className="text-muted-foreground mb-4">same-day professional service to Hawthorn properties</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Call 1800 954 117</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-accent-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Period Home Specialists</h3>
                <p className="text-muted-foreground mb-4">Expert care for Hawthorn's heritage properties</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local Hawthorn Knowledge</h3>
                <p className="text-muted-foreground mb-4">Understanding Hawthorn's unique property challenges</p>
                <Button variant="outline" className="w-full">Free Quote</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hawthorn Area Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Expert Mould Removal Services in Hawthorn Melbourne
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Hawthorn Property Expertise</h3>
                <p className="text-muted-foreground mb-4">
                  Hawthorn is one of Melbourne's most established and sought-after suburbs, located approximately 6 kilometres east of the CBD. Known for its tree-lined streets, quality schools, and excellent transport links, Hawthorn attracts established families seeking character homes with modern convenience.
                </p>
                <p className="text-muted-foreground mb-4">
                  The suburb encompasses postcodes 3122 and 3123, stretching from the Yarra River in the south to Camberwell Road in the north. Glenferrie Road serves as the main shopping and dining strip, while Burke Road provides additional retail and commercial services. The area is well-serviced by Hawthorn, Glenferrie, and Auburn railway stations on the Lilydale and Belgrave lines.
                </p>
                <p className="text-muted-foreground">
                  Hawthorn's housing stock predominantly consists of Federation and Edwardian homes built between 1900-1920, with some Victorian terraces and modern developments. Many properties feature original period details, high ceilings, and ornate architectural features that require specialist mould treatment to preserve their heritage value.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Common Hawthorn Mould Issues</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Federation Home Moisture:</strong> Original timber framing and weatherboard construction can develop moisture penetration in walls and subfloors.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Period Property Ventilation:</strong> High ceilings and original window designs may create air circulation issues leading to condensation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Yarra River Proximity:</strong> Properties near the river corridor experience higher humidity levels affecting basements and ground floors.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Heritage Roof Tiles:</strong> Original terracotta tiles may develop micro-cracks allowing water penetration into roof spaces.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Established Gardens:</strong> Large trees and mature landscaping can create shaded areas with poor air circulation around foundations.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-accent-blue/10 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3">Why Hawthorn Properties Need Specialist Mould Treatment</h3>
              <p className="text-muted-foreground">
                Hawthorn's desirable location and quality period homes require careful mould removal that preserves heritage features while ensuring modern health standards. Our IICRC-certified technicians understand the unique challenges of treating Edwardian and Federation properties, using techniques that protect original plasterwork, timber details, and architectural elements while eliminating mould at its source.
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
              Our Hawthorn Mould Removal Process
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Hawthorn Property Assessment</h4>
                    <p className="text-muted-foreground text-sm">
                      Comprehensive inspection using thermal imaging to identify moisture sources in period properties. Special attention to original timber framing, heritage plasterwork, and roof spaces common in Hawthorn homes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Heritage-Safe Containment</h4>
                    <p className="text-muted-foreground text-sm">
                      Careful containment procedures that protect period features and architectural details. Negative air pressure systems prevent spore spread while preserving original plaster and timber work.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">Professional Remediation</h4>
                    <p className="text-muted-foreground text-sm">
                      IICRC-approved removal techniques suitable for Federation and Edwardian construction. Antimicrobial treatments that penetrate timber and masonry while being safe for families and pets.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold mb-2">Moisture Source Elimination</h4>
                    <p className="text-muted-foreground text-sm">
                      Address underlying moisture issues specific to Hawthorn properties - roof tile repairs, weatherboard sealing, subfloor ventilation improvements, and drainage solutions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-semibold mb-2">Post-Treatment Verification</h4>
                    <p className="text-muted-foreground text-sm">
                      Independent testing to confirm successful remediation. Air quality testing and moisture monitoring to ensure your Hawthorn home meets health standards and is safe for your family.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">6</div>
                  <div>
                    <h4 className="font-semibold mb-2">Prevention & Maintenance</h4>
                    <p className="text-muted-foreground text-sm">
                      Ongoing monitoring program with seasonal maintenance recommendations for Hawthorn's established properties. Period home care tips to prevent future mould issues.
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
              Why Choose Mould & Restoration Co. for Hawthorn Mould Removal?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-accent-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Local Hawthorn Knowledge</h3>
                <p className="text-muted-foreground">
                  Deep understanding of Hawthorn's period properties, from Federation terraces near Glenferrie Road to riverside homes. We know the unique challenges of established suburbs and heritage construction.
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Same-Day Professional Service</h3>
                <p className="text-muted-foreground">
                  Fast response to Hawthorn mould situations. Available 7am-7pm every day with same-day service for urgent situations. Professional assessment and immediate action when you need it most.
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-success-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">IICRC Certified Experts</h3>
                <p className="text-muted-foreground">
                  Fully qualified mould removal specialists with advanced training in heritage property treatment. ABN 47 683 089 652, insurance work welcome, 100% satisfaction guarantee for all Hawthorn clients.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">100+ Hawthorn Properties Successfully Restored</h3>
              <p className="text-muted-foreground mb-6">
                Our experienced team has successfully treated mould issues in Federation homes, Edwardian terraces, and modern properties throughout Hawthorn. We understand the importance of preserving your property's character while ensuring a healthy living environment for your family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 1800 954 117 for Hawthorn Service
                </Button>
                <Button size="lg" variant="outline">
                  Request Free Hawthorn Inspection
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
              Hawthorn Property Types We Service
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Heritage & Period Properties</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Federation Houses (1900-1915)</h4>
                    <p className="text-muted-foreground text-sm">
                      Specialist treatment for original timber framing, decorative plasterwork, and pressed metal ceilings. Moisture management for subfloor spaces and heritage roof tiles.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Edwardian Terraces (1910-1920)</h4>
                    <p className="text-muted-foreground text-sm">
                      Expert care for party walls, original sash windows, and ornate facades. Treatment methods that preserve heritage value while eliminating mould growth.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Victorian Era Homes (1880-1900)</h4>
                    <p className="text-muted-foreground text-sm">
                      Careful treatment of bluestone foundations, slate roofing, and cast iron details. Understanding of Victorian construction methods and moisture patterns.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Modern Hawthorn Properties</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Contemporary Family Homes</h4>
                    <p className="text-muted-foreground text-sm">
                      Modern construction mould issues including ensuite ventilation, laundry humidity, and double-glazing condensation problems. Energy-efficient solutions.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Townhouses & Units</h4>
                    <p className="text-muted-foreground text-sm">
                      Multi-level property treatment including shared walls, communal ventilation systems, and compact bathroom solutions. Body corporate compliance.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Commercial Properties</h4>
                    <p className="text-muted-foreground text-sm">
                      Glenferrie Road retail spaces, office buildings, and hospitality venues. Minimal disruption solutions for operating businesses with health compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-6">
                Every Hawthorn property is unique. Our IICRC-certified technicians assess each situation individually to provide the most effective treatment while respecting your property's character and your family's needs.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Call 1800 954 117 for Hawthorn Property Assessment
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
              Preventing Mould in Your Hawthorn Home
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Melbourne Climate Considerations</h3>
                <p className="text-muted-foreground mb-4">
                  Hawthorn experiences Melbourne's humid subtropical climate with warm, humid summers and cool, wet winters. The area's proximity to the Yarra River and established tree canopy creates microclimates that can increase moisture levels around properties.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Peak humidity periods: November through April</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Average annual rainfall: 650mm with winter concentration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>River proximity increases ground-level humidity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Established gardens create shaded, humid microclimates</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Hawthorn-Specific Prevention Tips</h3>
                <div className="space-y-4">
                  <div className="bg-accent-blue/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Period Property Ventilation</h4>
                    <p className="text-muted-foreground text-sm">
                      Improve air circulation in Federation homes by opening windows regularly, using exhaust fans in bathrooms, and ensuring original fireplaces have proper ventilation.
                    </p>
                  </div>
                  <div className="bg-success-green/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Subfloor Maintenance</h4>
                    <p className="text-muted-foreground text-sm">
                      Check subfloor ventilation annually, clear vegetation from around foundations, and ensure adequate cross-flow ventilation under the house.
                    </p>
                  </div>
                  <div className="bg-accent-teal/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Roof & Guttering Care</h4>
                    <p className="text-muted-foreground text-sm">
                      Inspect heritage roof tiles for cracks, clear gutters of autumn leaves, and ensure downpipes direct water away from foundations.
                    </p>
                  </div>
                  <div className="bg-emergency-orange/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Seasonal Monitoring</h4>
                    <p className="text-muted-foreground text-sm">
                      Watch for early signs during Melbourne's humid summer months, check for condensation in bathrooms and laundries, and monitor basement areas after heavy rainfall.
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
            Professional Mould Removal Service in Hawthorn Melbourne
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            Don't let mould damage your beautiful Hawthorn property or risk your family's health. Our IICRC-certified specialists provide same-day professional service with expert treatment for period homes and modern properties throughout postcode 3122 and 3123.
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
              Call 1800 954 117 - Emergency Hawthorn Mould Service
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-primary hover:text-white text-lg px-8 py-4">
              Free Hawthorn Mould Inspection Quote
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>

          <div className="mt-8 text-primary-foreground/80">
            <p>ABN: 47 683 089 652 | Available 7am-7pm Every Day | Insurance Work Welcome</p>
            <p className="mt-2">Servicing Hawthorn, Hawthorn East, Camberwell, Kew, Richmond & Surrounding Eastern Suburbs</p>
          </div>
        </div>
      </section>
    </div>
  );
};