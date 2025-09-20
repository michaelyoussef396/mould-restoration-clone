import { ArrowRight, Clock, Shield, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { StrategicLocationLinks } from "@/components/seo/InternalLinking";

export const GlenWaverley = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Glen Waverley Mould Removal", href: "/services/mould-removal-glen-waverley", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Optimization for Glen Waverley Melbourne Mould Removal */}
      <LocationPageSEO
        location="Glen Waverley"
        service="removal"
        emergency={false}
        title="Mould Removal Glen Waverley Melbourne - Family Area Asian Community Specialists"
        description="Expert mould removal Glen Waverley Melbourne. Family area specialists treating newer homes, Asian community properties. Multicultural expertise, quality schools. Call 1800 954 117 for professional service."
        canonical="https://mouldrestoration.com.au/services/mould-removal-glen-waverley"
      />
      <LocalBusinessSchema
        pageName="Glen Waverley Mould Removal"
        pageUrl="https://mouldrestoration.com.au/locations/glen-waverley"
        serviceType="removal"
        location="Glen Waverley"
      />
      <ServiceSchema
        serviceName="Mould Removal Glen Waverley Melbourne"
        serviceDescription="Specialized mould removal for Glen Waverley's family homes and multicultural community. Expert treatment for newer construction, established family properties, and Asian community housing needs."
        serviceUrl="https://mouldrestoration.com.au/locations/glen-waverley"
        priceRange="$$"
        areaServed={["Glen Waverley", "Mount Waverley", "Wheelers Hill", "Mulgrave", "Clayton"]}
      />
      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-primary text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Glen Waverley</span>
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
              Professional Mould Removal & Inspection in Glen Waverley, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Melbourne's premier mould removal specialists serving Glen Waverley's diverse multicultural community and family homes. IICRC-certified technicians with 5+ years experience treating newer constructions, established properties, and homes serving the Asian community near quality schools. same-day professional service, 100+ properties restored with 5.0/5 star rating from Glen Waverley families.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>same-day professional service to Glen Waverley</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Family home mould specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Multicultural community expertise</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success" />
                  <span>Newer construction treatment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>School zone area expertise</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Professional Mould Service - Call Now: 1800 954 117
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
                Free Glen Waverley Mould Inspection
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
                <h3 className="text-xl font-semibold mb-2">Professional Service - Same-day Available 7am-7pm</h3>
                <p className="text-muted-foreground mb-4">same-day professional service to all Glen Waverley properties</p>
                <Button className="w-full bg-primary hover:bg-primary-600 text-white">Call 1800 954 117</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-accent-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Family Home Specialists</h3>
                <p className="text-muted-foreground mb-4">Expert care for Glen Waverley family properties</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Multicultural Community Service</h3>
                <p className="text-muted-foreground mb-4">Understanding diverse community needs</p>
                <Button variant="outline" className="w-full">Free Quote</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Glen Waverley Area Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Expert Mould Removal Services in Glen Waverley Melbourne
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Glen Waverley Community Expertise</h3>
                <p className="text-muted-foreground mb-4">
                  Glen Waverley is one of Melbourne's premier family suburbs and multicultural communities, located approximately 19 kilometres southeast of the CBD. Known for excellent schools, diverse Asian community, and quality newer housing, Glen Waverley represents modern suburban family living at its best.
                </p>
                <p className="text-muted-foreground mb-4">
                  The suburb encompasses postcode 3150, bounded by Waverley Road and High Street Road. Kingsway provides the main shopping precinct with The Glen shopping centre, while Springvale Road offers additional commercial services. The area is excellently served by Glen Waverley railway station as the terminus of the Pakenham and Cranbourne lines.
                </p>
                <p className="text-muted-foreground">
                  Glen Waverley's housing stock features predominantly newer construction from the 1960s onwards, including quality brick veneer family homes, contemporary townhouses, and modern apartment developments. The area's popularity with families, particularly the Asian community, has driven continued development and modernization of housing stock requiring specialised mould treatment approaches.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Common Glen Waverley Mould Issues</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Modern Construction Moisture:</strong> Newer brick veneer homes with concrete slabs potentially experiencing condensation and poor ventilation in bathrooms and laundries.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Family Home Humidity:</strong> Large family properties with multiple bathrooms, frequent cooking, and varied lifestyle patterns creating diverse moisture sources.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Townhouse Complexes:</strong> Multi-level properties with shared walls and communal ventilation systems requiring specialised treatment approaches.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Apartment Living:</strong> Modern apartment blocks with sealed windows and mechanical ventilation systems prone to humidity buildup and air circulation issues.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                    <span><strong>Cultural Lifestyle Factors:</strong> Diverse cooking methods, indoor drying practices, and varying household routines affecting moisture levels throughout properties.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-accent-blue/10 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3">Why Glen Waverley Properties Need Professional Mould Treatment</h3>
              <p className="text-muted-foreground">
                Glen Waverley's diverse community and modern housing stock create unique moisture management challenges. Our IICRC-certified technicians understand the specific requirements of newer construction, multicultural family lifestyles, and contemporary building methods, providing culturally sensitive service while ensuring modern health standards for all families.
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
              Our Glen Waverley Mould Removal Process
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Modern Home Assessment</h4>
                    <p className="text-muted-foreground text-sm">
                      Comprehensive inspection of contemporary family homes using advanced moisture detection. Special focus on modern construction methods, mechanical ventilation systems, and diverse family lifestyle patterns.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Family-Sensitive Containment</h4>
                    <p className="text-muted-foreground text-sm">
                      Professional containment procedures that respect busy multicultural family routines. Minimal disruption to school schedules, cooking activities, and diverse household patterns.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">Professional Remediation</h4>
                    <p className="text-muted-foreground text-sm">
                      IICRC-approved removal techniques suitable for modern construction and contemporary living spaces. Safe, effective treatments that work with diverse cultural practices and family needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold mb-2">Modern Moisture Solutions</h4>
                    <p className="text-muted-foreground text-sm">
                      Address contemporary moisture challenges - mechanical ventilation upgrades, bathroom fan improvements, and drainage solutions suited to newer construction methods.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-semibold mb-2">Family Health Verification</h4>
                    <p className="text-muted-foreground text-sm">
                      Independent testing throughout your Glen Waverley family home. Air quality monitoring with special attention to areas affected by diverse cooking and living practices.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">6</div>
                  <div>
                    <h4 className="font-semibold mb-2">Culturally Aware Prevention</h4>
                    <p className="text-muted-foreground text-sm">
                      Maintenance recommendations that respect diverse cultural practices while ensuring optimal moisture control. Education about modern home care for multicultural families.
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
              Why Choose Mould & Restoration Co. for Glen Waverley Mould Removal?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-accent-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Multicultural Community Understanding</h3>
                <p className="text-muted-foreground">
                  Respectful service for Glen Waverley's diverse community, understanding varied cultural practices and family lifestyles. Experience serving Asian families and multicultural households.
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Same-Day Family Professional Service</h3>
                <p className="text-muted-foreground">
                  Rapid response to Glen Waverley family situations with same-day service. Understanding of busy family schedules, school commitments, and community events.
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-success mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Modern Construction Specialists</h3>
                <p className="text-muted-foreground">
                  Expert knowledge of contemporary building methods and newer construction challenges. ABN 47 683 089 652, insurance work welcome, 100% satisfaction guarantee for all families.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">100+ Glen Waverley Family Properties Successfully Restored</h3>
              <p className="text-muted-foreground mb-6">
                Our experienced team has successfully treated mould issues in modern family homes, townhouses, and apartments throughout Glen Waverley. We understand the importance of providing culturally sensitive service while maintaining healthy living environments for diverse families and children attending local schools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 1800 954 117 for Glen Waverley Service
                </Button>
                <Button size="lg" variant="outline">
                  Request Free Glen Waverley Family Home Inspection
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
              Glen Waverley Property Types We Service
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Modern Family Properties</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Brick Veneer Family Homes (1960s-1990s)</h4>
                    <p className="text-muted-foreground text-sm">
                      Solid family homes with established gardens and multiple living areas. Modern treatment for conventional construction with updated ventilation and moisture management.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Contemporary Residences (2000s+)</h4>
                    <p className="text-muted-foreground text-sm">
                      Modern architect-designed homes with energy efficiency features. Advanced treatment for current construction challenges and diverse family lifestyle requirements.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Townhouse Developments</h4>
                    <p className="text-muted-foreground text-sm">
                      Multi-level properties with shared walls and modern amenities. Specialized treatment for contemporary construction and communal building management requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">High-Density Living</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Modern Apartments</h4>
                    <p className="text-muted-foreground text-sm">
                      Contemporary apartment living with sealed environments and mechanical ventilation. Specialized treatment for high-density buildings and diverse resident needs.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Unit Complexes</h4>
                    <p className="text-muted-foreground text-sm">
                      Established unit developments with varying construction ages. Treatment solutions that work with body corporate requirements and shared facility considerations.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Investment Properties</h4>
                    <p className="text-muted-foreground text-sm">
                      Rental properties requiring efficient treatment with minimal tenant disruption. Professional service that maintains property values and ensures healthy living conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-6">
                Every Glen Waverley property serves different family and cultural needs. Our IICRC-certified technicians provide respectful, professional service that accommodates diverse lifestyles while ensuring comprehensive mould remediation and prevention.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                Call 1800 954 117 for Glen Waverley Property Assessment
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
              Preventing Mould in Your Glen Waverley Family Home
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Modern Family Home Considerations</h3>
                <p className="text-muted-foreground mb-4">
                  Glen Waverley's newer construction and diverse multicultural community create specific moisture management needs. Modern family homes with multiple bathrooms, frequent cooking activities, and varied lifestyle patterns require proactive moisture control strategies.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Modern sealed construction can trap humidity indoors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Diverse cooking methods create varying moisture levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Multiple family members create consistent bathroom usage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span>Indoor clothes drying practices affect humidity levels</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Glen Waverley Family Prevention Strategies</h3>
                <div className="space-y-4">
                  <div className="bg-accent-blue/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Modern Home Ventilation</h4>
                    <p className="text-muted-foreground text-sm">
                      Maximize mechanical ventilation systems, use exhaust fans during cooking and showering, and maintain consistent air circulation throughout modern family homes.
                    </p>
                  </div>
                  <div className="bg-success/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Cultural Practice Management</h4>
                    <p className="text-muted-foreground text-sm">
                      Balance traditional cooking and household practices with modern moisture control. Use range hoods, ventilate laundries, and manage indoor drying carefully.
                    </p>
                  </div>
                  <div className="bg-accent-teal/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Family Routine Optimization</h4>
                    <p className="text-muted-foreground text-sm">
                      Coordinate bathroom schedules to reduce humidity buildup, implement consistent heating/cooling practices, and educate all family members about moisture awareness.
                    </p>
                  </div>
                  <div className="bg-emergency-orange/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Proactive Monitoring</h4>
                    <p className="text-muted-foreground text-sm">
                      Regular checks of modern home systems - mechanical ventilation, bathroom exhaust fans, and air conditioning units to ensure optimal performance.
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
            Professional Mould Removal Service in Glen Waverley Melbourne
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            Protect your Glen Waverley family property and multicultural community health with expert mould removal services. Our IICRC-certified specialists provide same-day professional service with culturally sensitive treatment for modern homes and contemporary properties throughout postcode 3150.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-primary" />
              <span className="text-lg">Same-Day Professional Service</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-success" />
              <span className="text-lg">Modern Family Home Specialists</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-accent-teal" />
              <span className="text-lg">Multicultural Community Service</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-600 text-white text-lg px-8 py-4">
              <Phone className="w-6 h-6 mr-2" />
              Call 1800 954 117 - Emergency Glen Waverley Mould Service
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-primary hover:text-white text-lg px-8 py-4">
              Free Glen Waverley Family Home Inspection
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>

          <div className="mt-8 text-primary-foreground/80">
            <p>ABN: 47 683 089 652 | Available 7am-7pm Every Day | Insurance Work Welcome</p>
            <p className="mt-2">Servicing Glen Waverley, Mount Waverley, Wheelers Hill, Mulgrave, Clayton & Surrounding Eastern Suburbs</p>
          </div>
        </div>
      </section>

      {/* Strategic Internal Linking for Location to Service SEO */}
      <StrategicLocationLinks
        currentLocation="Glen Waverley"
        businessType="mould removal"
        serviceTypes={["inspection", "removal", "remediation"]}
      />
    </div>
  );
};