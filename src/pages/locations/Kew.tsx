import { ArrowRight, Clock, Shield, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";

export const Kew = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Kew Mould Removal", href: "/services/mould-removal-kew", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Optimization for Kew Melbourne Mould Removal */}
      <LocationPageSEO
        location="Kew"
        service="removal"
        emergency={false}
        title="Mould Removal Kew Melbourne - Leafy Suburb Heritage Home Specialists"
        description="Expert mould removal Kew Melbourne. Heritage home specialists treating established leafy suburb properties. Family area expertise, Studley Park proximity. Call 1800 954 117 for professional service."
      />
      <LocalBusinessSchema
        pageName="Kew Mould Removal"
        pageUrl="https://mouldrestoration.com.au/locations/kew"
        serviceType="removal"
        location="Kew"
      />
      <ServiceSchema
        serviceName="Mould Removal Kew Melbourne"
        serviceDescription="Specialized mould removal for Kew's heritage homes and leafy suburb properties. Expert treatment for established family homes, period properties, and Studley Park area moisture issues."
        serviceUrl="https://mouldrestoration.com.au/locations/kew"
        priceRange="$$"
        areaServed={["Kew", "Kew East", "Hawthorn", "Balwyn", "Camberwell"]}
      />
      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Kew</span>
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
              Professional Mould Removal & Inspection in Kew, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Melbourne's premier mould removal specialists serving Kew's leafy established suburb and heritage family homes. IICRC-certified technicians with 5+ years experience treating period properties, family residences, and Studley Park area homes. same-day professional service, 100+ properties restored with 5.0/5 star rating from Kew families.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>same-day professional service to Kew</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Heritage home mould specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Leafy suburb expertise</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Family home preservation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Established property treatment</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Professional Mould Service - Call Now: 1800 954 117
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
                Free Kew Mould Inspection
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
                <p className="text-muted-foreground mb-4">same-day professional service to all Kew properties</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Call 1800 954 117</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-accent-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Heritage Home Experts</h3>
                <p className="text-muted-foreground mb-4">Specialist care for Kew's period properties</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local Kew Knowledge</h3>
                <p className="text-muted-foreground mb-4">Understanding Kew's leafy suburb challenges</p>
                <Button variant="outline" className="w-full">Free Quote</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kew Area Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Expert Mould Removal Services in Kew Melbourne
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Kew Suburb Expertise</h3>
                <p className="text-muted-foreground mb-4">
                  Kew is one of Melbourne's most prestigious and leafy eastern suburbs, located approximately 7 kilometres from the CBD. Known for its established tree-lined streets, excellent schools, and beautiful heritage homes, Kew attracts families seeking quality residential living with character and convenience.
                </p>
                <p className="text-muted-foreground mb-4">
                  The suburb encompasses postcode 3101, bounded by the Yarra River to the south and Studley Park to the southwest. High Street serves as the main commercial spine, while Cotham Road and Burke Road provide additional shopping and services. The area is well-connected by public transport with Kew railway station and multiple tram routes.
                </p>
                <p className="text-muted-foreground">
                  Kew's housing stock features a significant proportion of heritage homes, including grand Victorian mansions, Federation houses, and Edwardian villas, many with large gardens and mature trees. The area also includes quality inter-war homes and selective contemporary developments, creating a diverse architectural landscape requiring specialist mould treatment approaches.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Common Kew Mould Issues</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Heritage Property Moisture:</strong> Grand Victorian and Edwardian homes with original construction details prone to moisture penetration and poor ventilation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Established Garden Impact:</strong> Large mature trees and extensive landscaping creating shaded areas with high humidity and poor air circulation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Yarra River Proximity:</strong> Properties near Studley Park and river flats experiencing elevated humidity levels affecting basements and lower levels.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Period Roof Systems:</strong> Original slate and terracotta roofing with aging guttering systems leading to water penetration issues.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Large Family Homes:</strong> Multiple bathrooms, laundries, and living areas creating various humidity sources requiring comprehensive treatment.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-accent-blue/10 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3">Why Kew Properties Need Professional Mould Treatment</h3>
              <p className="text-muted-foreground">
                Kew's prestigious heritage homes and leafy environment require specialist mould removal that preserves property values while ensuring modern health standards. Our IICRC-certified technicians understand the unique challenges of treating large period homes, working carefully to protect original features, architectural details, and landscaping while eliminating mould at its source.
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
              Our Kew Mould Removal Process
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Heritage Property Assessment</h4>
                    <p className="text-muted-foreground text-sm">
                      Comprehensive inspection of large heritage homes using advanced moisture detection. Special attention to period construction methods, original timber work, and architectural features unique to Kew properties.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Careful Heritage Containment</h4>
                    <p className="text-muted-foreground text-sm">
                      Professional containment procedures that protect valuable period features, antiques, and family belongings. Specialized techniques for large homes with multiple levels and rooms.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">Professional Remediation</h4>
                    <p className="text-muted-foreground text-sm">
                      IICRC-approved removal techniques suitable for Victorian and Edwardian construction. Safe, effective treatments that work with original building materials and modern family requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold mb-2">Moisture Source Control</h4>
                    <p className="text-muted-foreground text-sm">
                      Address underlying moisture issues in heritage properties - roof restoration, guttering improvements, garden drainage, and ventilation upgrades that complement period architecture.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-semibold mb-2">Quality Verification</h4>
                    <p className="text-muted-foreground text-sm">
                      Independent testing throughout your Kew property to confirm successful remediation. Air quality monitoring and clearance testing to ensure your family home is safe and healthy.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">6</div>
                  <div>
                    <h4 className="font-semibold mb-2">Ongoing Property Care</h4>
                    <p className="text-muted-foreground text-sm">
                      Maintenance program tailored for Kew's heritage properties. Seasonal monitoring and preventive care recommendations to protect your investment and family health.
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
              Why Choose Mould & Restoration Co. for Kew Mould Removal?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-accent-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Kew Heritage Expertise</h3>
                <p className="text-muted-foreground">
                  Specialized knowledge of Kew's prestigious heritage properties, from grand Victorian mansions to Federation family homes. We understand the unique requirements of leafy established suburbs.
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Same-day Professional Service</h3>
                <p className="text-muted-foreground">
                  Rapid response to Kew mould situations with same-day service available. Professional assessment and immediate action when your family property needs urgent attention.
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-success-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">IICRC Certified Team</h3>
                <p className="text-muted-foreground">
                  Fully qualified mould removal specialists with extensive heritage property experience. ABN 47 683 089 652, insurance work welcome, 100% satisfaction guarantee for Kew families.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">100+ Kew Heritage Properties Successfully Restored</h3>
              <p className="text-muted-foreground mb-6">
                Our experienced team has successfully treated mould issues in Victorian mansions, Federation houses, and modern family homes throughout Kew. We understand the importance of preserving your property's heritage value while ensuring a safe, healthy living environment for your family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 1800 954 117 for Kew Service
                </Button>
                <Button size="lg" variant="outline">
                  Request Free Kew Property Inspection
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
              Kew Property Types We Service
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Heritage & Period Homes</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Victorian Mansions (1880-1900)</h4>
                    <p className="text-muted-foreground text-sm">
                      Grand heritage homes with slate roofs, ornate plasterwork, and extensive grounds. Specialist treatment for large-scale properties with multiple levels and original features.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Federation Houses (1900-1915)</h4>
                    <p className="text-muted-foreground text-sm">
                      Elegant family homes with period features, bay windows, and decorative details. Expert care that preserves architectural integrity while ensuring modern health standards.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Edwardian Villas (1910-1920)</h4>
                    <p className="text-muted-foreground text-sm">
                      Substantial family residences with gardens and original fixtures. Treatment methods that respect period construction while providing effective mould remediation.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Contemporary Kew Properties</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Inter-War Family Homes</h4>
                    <p className="text-muted-foreground text-sm">
                      Quality homes from the 1920s-1940s with established gardens. Modern mould treatment solutions for solid construction with updated ventilation requirements.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Contemporary Residences</h4>
                    <p className="text-muted-foreground text-sm">
                      Modern architect-designed homes with energy efficiency features. Advanced treatment for contemporary construction challenges and modern family living requirements.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Luxury Developments</h4>
                    <p className="text-muted-foreground text-sm">
                      High-end townhouses and apartments with quality finishes. Specialized treatment that protects investment properties and maintains premium living standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-6">
                Every Kew property reflects the suburb's commitment to quality and heritage. Our IICRC-certified technicians provide personalized treatment plans that respect your property's character while ensuring optimal health outcomes for your family.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Call 1800 954 117 for Professional Kew Assessment
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
              Preventing Mould in Your Kew Property
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Leafy Suburb Considerations</h3>
                <p className="text-muted-foreground mb-4">
                  Kew's established tree canopy and mature gardens create beautiful living environments but also present unique moisture management challenges. The combination of large trees, expansive gardens, and heritage construction requires careful attention to prevent mould growth.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Large trees create shaded microclimates with higher humidity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Autumn leaves can block gutters and drainage systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Extensive gardens require proper drainage management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Heritage homes may have limited natural ventilation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Kew-Specific Prevention Strategies</h3>
                <div className="space-y-4">
                  <div className="bg-accent-blue/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Garden & Drainage Management</h4>
                    <p className="text-muted-foreground text-sm">
                      Maintain clear drainage around large trees, ensure gutters are regularly cleaned, and create proper grading away from heritage foundations.
                    </p>
                  </div>
                  <div className="bg-success-green/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Heritage Home Ventilation</h4>
                    <p className="text-muted-foreground text-sm">
                      Improve air circulation in period properties through strategic window opening, exhaust fan upgrades, and maintaining original ventilation systems.
                    </p>
                  </div>
                  <div className="bg-accent-teal/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Seasonal Maintenance</h4>
                    <p className="text-muted-foreground text-sm">
                      Regular autumn gutter cleaning, winter roof inspections, and spring ventilation checks to manage seasonal moisture challenges.
                    </p>
                  </div>
                  <div className="bg-emergency-orange/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Early Detection</h4>
                    <p className="text-muted-foreground text-sm">
                      Monitor basement areas, check behind furniture in large rooms, and watch for musty odours in heritage properties with limited ventilation.
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
            Professional Mould Removal Service in Kew Melbourne
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            Protect your prestigious Kew property and family's health with expert mould removal services. Our IICRC-certified specialists provide same-day professional service with specialist treatment for heritage homes and contemporary properties throughout postcode 3101.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-blue-600" />
              <span className="text-lg">Same-Day Professional Service</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-success-green" />
              <span className="text-lg">Heritage Property Specialists</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-accent-teal" />
              <span className="text-lg">5.0 Star Family Service</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4">
              <Phone className="w-6 h-6 mr-2" />
              Call 1800 954 117 - Emergency Kew Mould Service
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-primary hover:text-white text-lg px-8 py-4">
              Free Kew Heritage Property Inspection
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>

          <div className="mt-8 text-primary-foreground/80">
            <p>ABN: 47 683 089 652 | Available 7am-7pm Every Day | Insurance Work Welcome</p>
            <p className="mt-2">Servicing Kew, Kew East, Hawthorn, Balwyn, Camberwell & Surrounding Eastern Suburbs</p>
          </div>
        </div>
      </section>
    </div>
  );
};