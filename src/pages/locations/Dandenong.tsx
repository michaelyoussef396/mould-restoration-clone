import { ArrowRight, Clock, Shield, MapPin, Phone, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";

export const Dandenong = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Dandenong Mould Removal", href: "/services/mould-removal-dandenong", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Dandenong"
        title="Mould Removal Dandenong - Multicultural Community Specialists | Mould & Restoration Co"
        description="Professional mould removal in Dandenong Melbourne. IICRC certified, 2-hour emergency response. Call 1800 954 117 for same-day Dandenong mould inspection & removal."
        canonical="/services/mould-removal-dandenong"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        serviceArea="Dandenong, Melbourne"
        address="Dandenong, Victoria, Australia"
        phone="1800 954 117"
        email="info@mouldrestoration.com.au"
        abn="47 683 089 652"
        description="Professional mould removal and inspection services in Dandenong Melbourne. IICRC certified technicians specializing in multicultural community housing, industrial precinct properties, and diverse residential developments."
      />

      <ServiceSchema
        serviceName="Mould Removal Dandenong Melbourne"
        serviceType="Mould Remediation"
        areaServed="Dandenong, Melbourne, Victoria"
        description="Emergency mould removal and inspection services for Dandenong properties including multicultural housing, industrial buildings, and diverse community developments."
      />

      <Navigation />

      {/* Emergency Response Bar */}
      <div className="emergency-bar">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>24/7 Emergency Mould Response in Dandenong</span>
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
              Professional Mould Removal & Inspection in Dandenong, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Emergency mould removal Dandenong Melbourne specialists with 5+ years experience. IICRC-certified technicians serving Dandenong's multicultural community housing, industrial precinct properties, and diverse residential developments with same-day response. Trusted by 100+ Melbourne properties with 5.0-star rating.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">5.0 Stars</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-teal" />
                <span className="text-sm font-medium">100+ Properties Restored</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success-green" />
                <span className="text-sm font-medium">IICRC Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent-blue" />
                <span className="text-sm font-medium">5+ Years Experience</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-emergency-orange" />
                  <span>2-hour emergency response to Dandenong</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Multicultural community & industrial expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Postcodes: 3175, industrial precinct coverage</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-accent-teal" />
                  <span>Insurance work welcome</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success-green" />
                  <span>100% satisfaction guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emergency-orange" />
                  <span>ABN: 47 683 089 652</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emergency-orange hover:bg-emergency-orange/90 text-white">
                <Phone className="mr-2 h-5 w-5" />
                Call 1800 954 117 Now
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Free Dandenong Inspection Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Dandenong Mould Removal Specialists
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Mould & Restoration Co. provides expert mould removal Dandenong Melbourne services in Melbourne's major multicultural and industrial hub. Our IICRC-certified technicians understand the unique challenges of Dandenong's diverse community housing, industrial precinct properties, and mixed-use developments, from Dandenong Station to the manufacturing districts.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Dandenong Property Types We Service</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Multicultural Housing:</strong> Diverse community residential properties with varied building styles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Industrial Buildings:</strong> Manufacturing facilities, warehouses, and commercial-industrial properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>High-Density Housing:</strong> Unit complexes, apartment buildings, and social housing developments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Mixed-Use Developments:</strong> Commercial ground floor with residential above arrangements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Community Facilities:</strong> Cultural centres, places of worship, and community buildings</strong>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Transportation Hub Buildings:</strong> Properties near Dandenong Station and transport infrastructure</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Dandenong Landmarks We Cover</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Dandenong Station:</strong> Major transport hub and surrounding high-density developments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Walker Street Shopping:</strong> Main commercial strip with diverse retail and dining</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Dandenong Market:</strong> Major multicultural market and surrounding commercial area</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Industrial Precinct:</strong> Manufacturing and warehouse districts with diverse facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Harmony Square:</strong> Community and cultural precinct with public facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Greater Dandenong Civic Centre:</strong> Municipal facilities and surrounding developments</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Common Dandenong Mould Issues</h3>
              <p className="text-gray-700 mb-6">
                Dandenong's combination of multicultural community housing, industrial activities, and high-density living creates specific mould challenges. Our emergency mould removal Dandenong Melbourne team addresses these with community-appropriate solutions:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Multicultural Housing Challenges</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Diverse cooking styles creating varied humidity and moisture patterns</li>
                    <li>• High occupancy housing with intensive bathroom and kitchen usage</li>
                    <li>• Cultural ventilation practices varying by community backgrounds</li>
                    <li>• Language barriers requiring culturally sensitive service approaches</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Industrial Precinct Factors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Manufacturing process humidity affecting nearby residential properties</li>
                    <li>• Industrial building moisture from production and storage activities</li>
                    <li>• Heavy vehicle traffic impact on building foundations and drainage</li>
                    <li>• Mixed zoning moisture transfer between industrial and residential areas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">High-Density Living Issues</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Unit complex shared ventilation system contamination spread</li>
                    <li>• Apartment building moisture transfer between units</li>
                    <li>• Common area humidity from laundry and storage facilities</li>
                    <li>• Social housing maintenance gaps creating moisture accumulation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mould Removal Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Professional Mould Removal Dandenong Melbourne Process
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center">
              Our systematic approach to mould removal Dandenong Melbourne ensures complete elimination while addressing the unique challenges of multicultural communities, industrial environments, and high-density living situations.
            </p>

            <div className="grid gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Comprehensive Multicultural Community Assessment</h3>
                      <p className="text-gray-700 mb-4">
                        Upon receiving your call for mould removal Dandenong Melbourne, our IICRC-certified technicians respond within 2 hours. We conduct comprehensive thermal imaging and moisture mapping suitable for diverse community housing, industrial buildings, and high-density developments.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• 24/7 emergency response to Dandenong (3175)</li>
                        <li>• Multicultural housing and community building assessment</li>
                        <li>• Industrial precinct environmental impact evaluation</li>
                        <li>• High-density housing moisture source identification</li>
                        <li>• Culturally sensitive inspection protocols for diverse communities</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Community-Appropriate Containment</h3>
                      <p className="text-gray-700 mb-4">
                        Professional mould removal Dandenong Melbourne requires community-sensitive containment methods for multicultural housing with diverse lifestyle patterns. We establish controlled environments that respect cultural practices while ensuring safety.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Culturally sensitive containment systems for diverse communities</li>
                        <li>• Industrial area safety protocols for mixed-use environments</li>
                        <li>• High-density housing resident coordination and communication</li>
                        <li>• Transportation hub area access management</li>
                        <li>• Multilingual safety information and community coordination</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Diverse Community Remediation Techniques</h3>
                      <p className="text-gray-700 mb-4">
                        Our emergency mould removal Dandenong Melbourne service employs adaptable techniques suitable for multicultural housing, industrial buildings, and high-density developments while maintaining community health standards for all residents.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Community-safe treatments for diverse household compositions</li>
                        <li>• Industrial-grade decontamination for manufacturing area buildings</li>
                        <li>• High-density housing shared system decontamination</li>
                        <li>• Multicultural community health standard compliance</li>
                        <li>• Mixed-use building comprehensive moisture barrier systems</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Community Health Verification</h3>
                      <p className="text-gray-700 mb-4">
                        Every mould removal Dandenong Melbourne project concludes with comprehensive verification testing suitable for diverse communities, ensuring multicultural housing, industrial buildings, and high-density developments meet Australian health standards.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Multicultural community air quality clearance testing</li>
                        <li>• Industrial environment health safety verification</li>
                        <li>• High-density housing shared space clearance certification</li>
                        <li>• Community health safety documentation in multiple languages</li>
                        <li>• Diverse community health standard compliance reporting</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Choose Mould & Restoration Co. for Dandenong?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Multicultural Community Expertise</h3>
                <p className="text-gray-700 mb-4">
                  With 5+ years serving Dandenong, we understand the unique requirements of multicultural communities, industrial precinct buildings, and high-density housing developments. Our team combines cultural sensitivity with technical expertise for comprehensive community service.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Multicultural community housing and cultural sensitivity specialist experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Industrial precinct environmental understanding and safety protocols</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>High-density housing and community building expertise</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">IICRC Certified Excellence</h3>
                <p className="text-gray-700 mb-4">
                  Our emergency mould removal Dandenong Melbourne technicians are IICRC certified with additional training in diverse community standards and industrial safety requirements, ensuring comprehensive service quality for all community members.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>IICRC water damage restoration certification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Applied structural drying for diverse community property types</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Multicultural community health and safety protocol training</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2 Hour</div>
                  <div className="text-sm text-gray-600">Emergency Response to Dandenong</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-gray-600">Community-Safe Treatment Methods</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5.0★</div>
                  <div className="text-sm text-gray-600">Rating from Diverse Communities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Immediate Mould Removal in Dandenong?
            </h2>
            <p className="text-xl mb-8">
              Don't let mould compromise your Dandenong multicultural housing, industrial facility, or community building. Our IICRC-certified technicians provide 24/7 emergency response with 2-hour arrival guarantee. Trusted by diverse communities, industrial facilities, and high-density developments with a 5.0-star rating.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-emergency-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">24/7 Emergency Response</h3>
                  <p className="mb-4">Call now for immediate mould removal Dandenong Melbourne assistance. Our multicultural community specialists respond within 2 hours.</p>
                  <Button className="w-full bg-emergency-orange hover:bg-emergency-orange/90">
                    Call 1800 954 117 Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Free Dandenong Inspection</h3>
                  <p className="mb-4">Comprehensive community assessment with thermal imaging. Specialized quotes for multicultural housing, industrial buildings, and high-density developments.</p>
                  <Button className="w-full" variant="outline">
                    Book Free Multicultural Community Inspection
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg mb-2">
                <strong>ABN: 47 683 089 652</strong> | Licensed & Insured | IICRC Certified | Multicultural Community Specialists
              </p>
              <p className="text-sm opacity-90">
                Serving Dandenong: 3175 | Walker Street | Station Precinct | Industrial Area | Community Facilities
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};