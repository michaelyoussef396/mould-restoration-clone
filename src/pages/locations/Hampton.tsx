import { ArrowRight, Clock, Shield, MapPin, Phone, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";

export const Hampton = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Hampton Mould Removal", href: "/services/mould-removal-hampton", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Hampton"
        title="Mould Removal Hampton - Bayside Family Specialists | Mould & Restoration Co"
        description="Professional mould removal in Hampton Melbourne. IICRC certified, 2-hour emergency response. Call 1800 954 117 for same-day Hampton mould inspection & removal."
        canonical="/services/mould-removal-hampton"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        serviceArea="Hampton, Melbourne"
        address="Hampton, Victoria, Australia"
        phone="1800 954 117"
        email="info@mouldrestoration.com.au"
        abn="47 683 089 652"
        description="Professional mould removal and inspection services in Hampton Melbourne. IICRC certified technicians specializing in bayside family homes, Hampton Street shopping precinct properties, and railway corridor buildings."
      />

      <ServiceSchema
        serviceName="Mould Removal Hampton Melbourne"
        serviceType="Mould Remediation"
        areaServed="Hampton, Melbourne, Victoria"
        description="Emergency mould removal and inspection services for Hampton properties including family homes, shopping precinct buildings, and railway corridor residences."
      />

      <Navigation />

      {/* Emergency Response Bar */}
      <div className="emergency-bar">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>24/7 Emergency Mould Response in Hampton</span>
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
              Professional Mould Removal & Inspection in Hampton, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Emergency mould removal Hampton Melbourne specialists with 5+ years experience. IICRC-certified technicians serving Hampton's bayside family homes, Hampton Street shopping precinct, and railway corridor properties with same-day response. Trusted by 100+ Melbourne properties with 5.0-star rating.
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
                  <span>2-hour emergency response to Hampton</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Bayside family home & shopping precinct expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Postcodes: 3188, railway corridor coverage</span>
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
                Free Hampton Inspection Quote
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
              Hampton Mould Removal Specialists
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Mould & Restoration Co. provides expert mould removal Hampton Melbourne services in one of Melbourne's premier bayside family suburbs. Our IICRC-certified technicians understand the unique challenges of Hampton's family homes, Hampton Street shopping precinct, and railway corridor properties, from Hampton Station to Port Phillip Bay.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Hampton Property Types We Service</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Family Homes:</strong> Large family residences with established gardens and outdoor areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Shopping Precinct Buildings:</strong> Hampton Street commercial and mixed-use properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Railway Corridor Properties:</strong> Homes and buildings near Hampton Station</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Period Homes:</strong> Character homes with heritage features requiring specialized care</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>School Zone Properties:</strong> Homes near Hampton Primary and secondary school catchments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Multi-Generation Homes:</strong> Large properties housing extended families</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Hampton Landmarks We Cover</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Hampton Street Shopping:</strong> Main commercial strip and surrounding residential areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Hampton Station Precinct:</strong> Railway corridor properties and commuter access areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Hampton Primary School:</strong> Educational precinct and surrounding family neighborhoods</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Red Bluff Cliff Access:</strong> Coastal access points and beachside walking areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Were Street Corridor:</strong> Residential spine connecting to surrounding suburbs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Bay Access Points:</strong> Properties with proximity to Port Phillip Bay</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Common Hampton Mould Issues</h3>
              <p className="text-gray-700 mb-6">
                Hampton's combination of family living, bayside location, and shopping precinct activity creates specific mould challenges. Our emergency mould removal Hampton Melbourne team addresses these with community-appropriate solutions:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Family Home Challenges</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Large family bathroom and ensuite humidity management</li>
                    <li>• Multiple laundry and utility area ventilation</li>
                    <li>• Family entertaining area moisture control</li>
                    <li>• Children's play area and bedroom ventilation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Shopping Precinct Factors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Commercial building ventilation inadequacies</li>
                    <li>• Mixed-use residential above retail moisture transfer</li>
                    <li>• High foot traffic condensation in shop areas</li>
                    <li>• Food service humidity from restaurants and cafes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Railway Corridor Issues</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Train vibration effects on building seals</li>
                    <li>• Station proximity moisture and condensation</li>
                    <li>• Commuter parking area drainage problems</li>
                    <li>• Railway cutting microclimate effects on nearby properties</li>
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
              Professional Mould Removal Hampton Melbourne Process
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center">
              Our systematic approach to mould removal Hampton Melbourne ensures complete elimination while addressing the unique challenges of family homes, shopping precincts, and railway corridor environments.
            </p>

            <div className="grid gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Comprehensive Bayside Community Assessment</h3>
                      <p className="text-gray-700 mb-4">
                        Upon receiving your call for mould removal Hampton Melbourne, our IICRC-certified technicians respond within 2 hours. We conduct comprehensive thermal imaging and moisture mapping specific to family homes, shopping precinct buildings, and railway corridor properties.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• 24/7 emergency response to Hampton (3188)</li>
                        <li>• Family home and multi-generational property assessment</li>
                        <li>• Shopping precinct commercial building evaluation</li>
                        <li>• Railway corridor vibration and moisture impact analysis</li>
                        <li>• Bayside community-appropriate service scheduling</li>
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
                        Professional mould removal Hampton Melbourne requires community-sensitive containment methods for family neighborhoods, shopping areas, and residential properties. We establish controlled environments that respect community routines and business operations.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Family and pet-safe containment systems</li>
                        <li>• Shopping precinct business continuity planning</li>
                        <li>• School zone work timing coordination</li>
                        <li>• Railway commuter access maintenance</li>
                        <li>• Neighborhood-appropriate noise and activity management</li>
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
                      <h3 className="text-xl font-semibold mb-3">Multi-Environment Remediation Techniques</h3>
                      <p className="text-gray-700 mb-4">
                        Our emergency mould removal Hampton Melbourne service employs versatile techniques suitable for family homes, commercial premises, and mixed-use buildings while maintaining community standards and ensuring healthy environments for all residents and businesses.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Family-safe treatments for residential properties</li>
                        <li>• Commercial-grade cleaning for shopping precinct buildings</li>
                        <li>• Railway environment-appropriate moisture barriers</li>
                        <li>• Multi-story building ventilation system restoration</li>
                        <li>• Community health standard compliance treatments</li>
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
                        Every mould removal Hampton Melbourne project concludes with comprehensive verification testing suitable for diverse property types, ensuring family homes, commercial buildings, and mixed-use properties meet Australian health standards for community well-being.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Multi-environment air quality clearance testing</li>
                        <li>• Family home health safety verification</li>
                        <li>• Commercial premises compliance certification</li>
                        <li>• Community health standard documentation</li>
                        <li>• Shopping precinct environmental clearance</li>
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
              Why Choose Mould & Restoration Co. for Hampton?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Bayside Community Expertise</h3>
                <p className="text-gray-700 mb-4">
                  With 5+ years serving Hampton, we understand the unique requirements of family homes, shopping precinct buildings, and railway corridor properties. Our team combines residential expertise with commercial knowledge for comprehensive community property care.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Family home and multi-generational property specialist experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Shopping precinct commercial building expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Railway corridor environmental understanding</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">IICRC Certified Excellence</h3>
                <p className="text-gray-700 mb-4">
                  Our emergency mould removal Hampton Melbourne technicians are IICRC certified with additional training in community property standards and diverse building types, ensuring comprehensive service quality for all property categories.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>IICRC water damage restoration certification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Applied structural drying for diverse building types</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Community health and safety protocol training</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2 Hour</div>
                  <div className="text-sm text-gray-600">Emergency Response to Hampton</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-gray-600">Community-Safe Treatment Methods</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5.0★</div>
                  <div className="text-sm text-gray-600">Rating from Hampton Families & Businesses</div>
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
              Need Immediate Mould Removal in Hampton?
            </h2>
            <p className="text-xl mb-8">
              Don't let mould compromise your Hampton family home, shopping precinct business, or community property. Our IICRC-certified technicians provide 24/7 emergency response with 2-hour arrival guarantee. Trusted by families, businesses, and community properties with a 5.0-star rating.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-emergency-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">24/7 Emergency Response</h3>
                  <p className="mb-4">Call now for immediate mould removal Hampton Melbourne assistance. Our community property specialists respond within 2 hours.</p>
                  <Button className="w-full bg-emergency-orange hover:bg-emergency-orange/90">
                    Call 1800 954 117 Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Free Hampton Inspection</h3>
                  <p className="mb-4">Comprehensive assessment with thermal imaging. Specialized quotes for family homes, shopping precinct buildings, and railway corridor properties.</p>
                  <Button className="w-full" variant="outline">
                    Book Free Community Property Inspection
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg mb-2">
                <strong>ABN: 47 683 089 652</strong> | Licensed & Insured | IICRC Certified | Community Property Specialists
              </p>
              <p className="text-sm opacity-90">
                Serving Hampton: 3188 | Hampton Street Shopping | Hampton Station | Were Street | Bay Access
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};