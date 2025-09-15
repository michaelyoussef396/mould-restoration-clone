import { ArrowRight, Clock, Shield, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";

export const AlbertPark = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Albert Park Mould Removal", href: "/services/mould-removal-albert-park", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Optimization for Albert Park Melbourne Mould Removal */}
      <LocationPageSEO
        location="Albert Park"
        service="removal"
        emergency={false}
        title="Mould Removal Albert Park Melbourne - Lakeside Living Specialists"
        description="Expert mould removal Albert Park Melbourne. Lakeside living specialists treating lakefront properties and grand Prix circuit homes. Sports precinct expertise. Call 1800 954 117 for premium service."
        canonical="https://mouldrestoration.com.au/services/mould-removal-albert-park"
      />
      <LocalBusinessSchema
        pageName="Albert Park Mould Removal"
        pageUrl="https://mouldrestoration.com.au/locations/albert-park"
        serviceType="removal"
        location="Albert Park"
      />
      <ServiceSchema
        serviceName="Mould Removal Albert Park Melbourne"
        serviceDescription="Specialized mould removal for Albert Park's lakeside properties. Expert treatment for lakefront homes, Grand Prix circuit residences, and sports precinct developments with premium lakeside standards."
        serviceUrl="https://mouldrestoration.com.au/locations/albert-park"
        priceRange="$$$"
        areaServed={["Albert Park", "Middle Park", "Port Melbourne", "South Melbourne", "St Kilda"]}
      />
      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Albert Park</span>
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
              Professional Mould Removal & Inspection in Albert Park, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Melbourne's premier mould removal specialists serving Albert Park's prestigious lakeside community and sports precinct. IICRC-certified technicians with 5+ years experience treating lakefront properties, Grand Prix circuit homes, and premium developments around Albert Park Lake. same-day professional service, 100+ properties restored with 5.0/5 star rating from discerning Albert Park residents.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>same-day professional service to Albert Park</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Lakefront property specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Grand Prix circuit area expertise</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Sports precinct property care</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Premium lakeside service standards</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Professional Mould Service - Call Now: 1800 954 117
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
                Free Lakefront Property Inspection
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
                <h3 className="text-xl font-semibold mb-2">Priority Albert Park Response</h3>
                <p className="text-muted-foreground mb-4">2-hour priority response to Albert Park lakeside properties</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Call 1800 954 117</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-accent-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Lakeside Specialists</h3>
                <p className="text-muted-foreground mb-4">Expert care for Albert Park's lakefront properties</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Sports Precinct Knowledge</h3>
                <p className="text-muted-foreground mb-4">Understanding Albert Park Lake area challenges</p>
                <Button variant="outline" className="w-full">Premium Quote</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Albert Park Area Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Expert Mould Removal Services in Albert Park Melbourne
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Albert Park Lakeside Living Expertise</h3>
                <p className="text-muted-foreground mb-4">
                  Albert Park is one of Melbourne's most prestigious inner suburbs, located approximately 3 kilometres south of the CBD. Famous for Albert Park Lake, the Formula 1 Grand Prix circuit, and its vibrant sports precinct, Albert Park attracts professionals and families seeking lakeside luxury with urban convenience.
                </p>
                <p className="text-muted-foreground mb-4">
                  The suburb encompasses postcode 3206, stretching from Albert Park Lake in the east to Pickles Street in the west. The area features a unique blend of Victorian terraces, Edwardian homes, and contemporary apartments, all benefiting from proximity to the lake and sports facilities.
                </p>
                <p className="text-muted-foreground">
                  Albert Park's distinctive lakeside location and sports precinct atmosphere create specific environmental conditions. The proximity to Albert Park Lake, combined with the area's popularity for outdoor activities and events, creates unique moisture challenges requiring specialized understanding and treatment approaches.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Common Albert Park Mould Issues</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Lakeside Humidity Effects:</strong> Proximity to Albert Park Lake creating elevated humidity levels, particularly affecting lakefront properties and nearby residences.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Grand Prix Circuit Microclimate:</strong> The racing circuit and associated infrastructure creating unique wind patterns and moisture retention around nearby properties.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Sports Precinct Conditions:</strong> High pedestrian traffic and event activities contributing to localized humidity and air quality variations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Period Property Challenges:</strong> Victorian and Edwardian homes with original construction requiring careful balance of heritage preservation and moisture control.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Modern Development Issues:</strong> Contemporary apartments and townhouses dealing with sealed building environments and proximity to water features.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-accent-blue/10 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3">Why Albert Park Properties Need Specialized Lakeside Mould Treatment</h3>
              <p className="text-muted-foreground">
                Albert Park's unique lakeside environment and sports precinct atmosphere require specialized mould removal approaches that understand the specific challenges of waterfront living. Our IICRC-certified technicians have extensive experience treating properties affected by lake proximity, managing the elevated humidity levels while preserving the premium lifestyle and property values that make Albert Park so desirable.
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
              Our Albert Park Lakeside Mould Removal Process
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Lakeside Property Assessment</h4>
                    <p className="text-muted-foreground text-sm">
                      Comprehensive evaluation of lakefront properties using advanced moisture detection technology. Special attention to humidity effects from Albert Park Lake and environmental factors unique to the sports precinct area.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Premium Lakeside Containment</h4>
                    <p className="text-muted-foreground text-sm">
                      Professional containment procedures that protect valuable lakeside properties and maintain the premium lifestyle standards expected by Albert Park residents.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">Specialist Lakefront Remediation</h4>
                    <p className="text-muted-foreground text-sm">
                      IICRC-approved removal techniques specifically designed for lakeside properties. Specialized treatments that address humidity challenges while preserving property character and value.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold mb-2">Lake Proximity Moisture Management</h4>
                    <p className="text-muted-foreground text-sm">
                      Address moisture sources specific to Albert Park's lakeside location - humidity control systems, ventilation optimization, and specialized treatments for water-proximity challenges.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-semibold mb-2">Premium Quality Verification</h4>
                    <p className="text-muted-foreground text-sm">
                      Independent testing throughout your Albert Park property. Comprehensive air quality monitoring and clearance testing to ensure lakeside living meets the highest health standards.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">6</div>
                  <div>
                    <h4 className="font-semibold mb-2">Lakeside Property Maintenance</h4>
                    <p className="text-muted-foreground text-sm">
                      Tailored maintenance programs for Albert Park's lakeside properties. Ongoing monitoring and prevention strategies that account for seasonal lake effects and sports precinct activities.
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
              Why Choose Mould & Restoration Co. for Albert Park Mould Removal?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-accent-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Lakeside Property Expertise</h3>
                <p className="text-muted-foreground">
                  Extensive experience with Albert Park's lakefront properties and sports precinct homes. We understand the unique moisture challenges of living near Albert Park Lake and the Grand Prix circuit.
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Priority Lakeside Response</h3>
                <p className="text-muted-foreground">
                  Exclusive priority response to Albert Park lakeside properties. Available 7am-7pm every day with same-day service for urgent situations. Professional service that respects the premium lakeside lifestyle.
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-success-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">IICRC Lakefront Specialists</h3>
                <p className="text-muted-foreground">
                  Certified mould removal specialists with lakeside property experience. ABN 47 683 089 652, premium insurance work welcome, 100% satisfaction guarantee for discerning Albert Park residents.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">100+ Albert Park Properties Successfully Restored</h3>
              <p className="text-muted-foreground mb-6">
                Our experienced team has successfully treated mould issues in lakefront terraces, Grand Prix circuit properties, and modern developments throughout Albert Park. We understand the importance of maintaining the premium lakeside lifestyle while ensuring the highest standards of health and safety.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 1800 954 117 for Albert Park Service
                </Button>
                <Button size="lg" variant="outline">
                  Request Lakefront Property Consultation
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
              Albert Park Property Types We Service
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Lakeside Residential Properties</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Lakefront Victorian Terraces</h4>
                    <p className="text-muted-foreground text-sm">
                      Period homes with direct lake proximity requiring specialized treatment for heritage construction and elevated humidity exposure from Albert Park Lake.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Grand Prix Circuit Properties</h4>
                    <p className="text-muted-foreground text-sm">
                      Homes near the Formula 1 circuit with unique environmental challenges from racing activities and associated infrastructure, requiring specialized moisture management.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Modern Lakeside Apartments</h4>
                    <p className="text-muted-foreground text-sm">
                      Contemporary developments with lake views, premium finishes, and sealed building environments requiring sophisticated humidity control and ventilation management.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Sports Precinct Properties</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Sports Facility Commercial Spaces</h4>
                    <p className="text-muted-foreground text-sm">
                      Business premises serving the sports precinct including cafes, fitness facilities, and professional services requiring specialized commercial treatment approaches.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Event Venue Properties</h4>
                    <p className="text-muted-foreground text-sm">
                      Properties affected by major events including Grand Prix activities and lakeside festivals, requiring treatment that accommodates event schedules and high activity periods.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Community Housing Developments</h4>
                    <p className="text-muted-foreground text-sm">
                      Mixed residential developments and community housing near sports facilities, requiring coordinated treatment approaches for multiple residents and shared facilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-6">
                Every Albert Park property benefits from our specialized understanding of lakeside living challenges. Our IICRC-certified technicians provide customized treatment plans that preserve the unique character and premium lifestyle of lakefront living.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Call 1800 954 117 for Albert Park Lakeside Assessment
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
              Preventing Mould in Your Albert Park Lakeside Property
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Lakeside Environment Factors</h3>
                <p className="text-muted-foreground mb-4">
                  Albert Park's unique lakeside location creates distinctive environmental conditions that affect nearby properties. The combination of Albert Park Lake proximity, sports precinct activities, and Melbourne's climate patterns requires specialized moisture management strategies.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Albert Park Lake proximity increasing ambient humidity levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Grand Prix circuit activities affecting local air circulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Sports precinct foot traffic and event impacts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Seasonal lake level variations affecting nearby properties</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Lakeside Property Prevention Strategies</h3>
                <div className="space-y-4">
                  <div className="bg-accent-blue/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Lakefront Humidity Management</h4>
                    <p className="text-muted-foreground text-sm">
                      Monitor indoor humidity levels regularly, especially during Melbourne's humid summer months. Use dehumidifiers when necessary and ensure adequate ventilation systems function properly.
                    </p>
                  </div>
                  <div className="bg-success-green/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Lake Proximity Ventilation</h4>
                    <p className="text-muted-foreground text-sm">
                      Maintain excellent air circulation in properties near Albert Park Lake. Ensure exhaust fans work effectively and consider installing additional ventilation if needed.
                    </p>
                  </div>
                  <div className="bg-accent-teal/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Seasonal Property Care</h4>
                    <p className="text-muted-foreground text-sm">
                      Adjust moisture management strategies with Melbourne's seasonal changes, particularly during winter months when lake humidity effects may be more pronounced.
                    </p>
                  </div>
                  <div className="bg-emergency-orange/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Event Period Preparation</h4>
                    <p className="text-muted-foreground text-sm">
                      Prepare properties for major events like the Grand Prix by ensuring ventilation systems are optimized and any moisture issues are addressed beforehand.
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
            Premium Mould Removal Service in Albert Park Melbourne
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            Protect your prestigious Albert Park lakeside property with our premium mould removal services. Our IICRC-certified specialists provide priority response with specialized treatment for lakefront homes and Grand Prix circuit properties throughout postcode 3206.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-blue-600" />
              <span className="text-lg">Priority Lakeside Response</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-success-green" />
              <span className="text-lg">Lakefront Property Specialists</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-accent-teal" />
              <span className="text-lg">Premium Lakeside Service</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4">
              <Phone className="w-6 h-6 mr-2" />
              Call 1800 954 117 - Premium Albert Park Mould Service
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-primary hover:text-white text-lg px-8 py-4">
              Request Lakefront Property Consultation
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>

          <div className="mt-8 text-primary-foreground/80">
            <p>ABN: 47 683 089 652 | Available 7am-7pm Every Day | Premium Insurance Work Welcome</p>
            <p className="mt-2">Servicing Albert Park, Middle Park, Port Melbourne, South Melbourne, St Kilda & Surrounding Lakeside Melbourne Suburbs</p>
          </div>
        </div>
      </section>
    </div>
  );
};