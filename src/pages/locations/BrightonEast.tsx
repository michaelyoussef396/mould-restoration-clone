import { ArrowRight, Clock, Shield, MapPin, Phone, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";

export const BrightonEast = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Brighton East Mould Removal", href: "/services/mould-removal-brighton-east", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Brighton East"
        title="Mould Removal Brighton East - Coastal Property Specialists | Mould & Restoration Co"
        description="Professional mould removal in Brighton East Melbourne. IICRC certified, Same-day professional service. Call 1800 954 117 for same-day Brighton East mould inspection & removal."
        canonical="/services/mould-removal-brighton-east"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        serviceArea="Brighton East, Melbourne"
        address="Brighton East, Victoria, Australia"
        phone="1800 954 117"
        email="info@mouldrestoration.com.au"
        abn="47 683 089 652"
        description="Professional mould removal and inspection services in Brighton East Melbourne. IICRC certified technicians specializing in coastal family homes, beachside living, and salt air exposure properties."
      />

      <ServiceSchema
        serviceName="Mould Removal Brighton East Melbourne"
        serviceType="Mould Remediation"
        areaServed="Brighton East, Melbourne, Victoria"
        description="Professional mould removal and inspection services for Brighton East properties including family homes, beachside residences, and coastal exposure buildings."
      />

      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Brighton East</span>
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
              Professional Mould Removal & Inspection in Brighton East, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Professional mould removal Brighton East Melbourne specialists with 5+ years experience. IICRC-certified technicians serving Brighton East's family homes, beachside residences, and coastal exposure properties with same-day response. Trusted by 100+ Melbourne properties with 5.0-star rating.
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
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>Same-day professional service to Brighton East</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Family home & coastal property expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Postcodes: 3187, beachside living coverage</span>
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
                  <Phone className="w-5 h-5 text-blue-600" />
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
                Free Brighton East Inspection Quote
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
              Brighton East Mould Removal Specialists
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Mould & Restoration Co. provides expert mould removal Brighton East Melbourne services in one of Melbourne's most desirable beachside family suburbs. Our IICRC-certified technicians understand the unique challenges of Brighton East's family homes, coastal exposure, and proximity to both beach and parklands, from New Street to Male Street.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Brighton East Property Types We Service</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Family Homes:</strong> Single and double-storey family residences with gardens</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Beachside Residences:</strong> Properties within walking distance of Brighton Beach</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Modern Developments:</strong> Contemporary townhouses and unit developments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Heritage Properties:</strong> Preserved older homes with heritage features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>School Zone Properties:</strong> Homes near Brighton East Primary and secondary schools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Rental Properties:</strong> Investment properties requiring rapid maintenance solutions</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Brighton East Landmarks We Cover</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Brighton Beach Access:</strong> Properties with beach proximity and salt air exposure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>New Street Hub:</strong> Local shopping and community facilities area</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Male Street Corridor:</strong> Major residential street with established homes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>School Precincts:</strong> Areas around Brighton East Primary and local schools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Bayside Trail:</strong> Properties adjacent to coastal walkways and cycleways</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Transport Links:</strong> Areas near Brighton East Station and bus routes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Common Brighton East Mould Issues</h3>
              <p className="text-gray-700 mb-6">
                Brighton East's combination of family living, beachside location, and suburban density creates specific mould challenges. Our professional mould removal Brighton East Melbourne team addresses these with family-appropriate solutions:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Family Home Challenges</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Large family bathroom humidity from multiple users</li>
                    <li>• Laundry areas with frequent washing and drying</li>
                    <li>• Kitchen moisture from family cooking activities</li>
                    <li>• Children's bedroom ventilation issues</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Beachside Environmental Factors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Salt air penetration through windows and doors</li>
                    <li>• Sand and moisture tracked into homes from beach visits</li>
                    <li>• Coastal humidity affecting internal climate</li>
                    <li>• Seasonal weather pattern impacts on building</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Suburban Living Issues</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Garden and landscaping irrigation effects</li>
                    <li>• Pool and spa area humidity and splash damage</li>
                    <li>• Garage conversion moisture problems</li>
                    <li>• Basement and storage area ventilation gaps</li>
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
              Professional Mould Removal Brighton East Melbourne Process
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center">
              Our systematic approach to mould removal Brighton East Melbourne ensures complete elimination while addressing the unique challenges of family homes, beachside living, and coastal environmental factors.
            </p>

            <div className="grid gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Comprehensive Family Home Assessment</h3>
                      <p className="text-gray-700 mb-4">
                        Upon receiving your call for mould removal Brighton East Melbourne, our IICRC-certified technicians respond Same-day professional service. We conduct comprehensive thermal imaging and moisture mapping specific to family homes, beachside properties, and coastal exposure areas.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Professional service line response to Brighton East (3187)</li>
                        <li>• Family home structure and ventilation assessment</li>
                        <li>• Beachside environmental impact evaluation</li>
                        <li>• Salt air exposure and moisture penetration mapping</li>
                        <li>• Child-safe assessment protocols for family properties</li>
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
                      <h3 className="text-xl font-semibold mb-3">Family-Safe Containment</h3>
                      <p className="text-gray-700 mb-4">
                        Professional mould removal Brighton East Melbourne requires family-appropriate containment methods for residential properties with children and pets. We establish controlled environments that maintain family routine while ensuring safety.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Child and pet-safe containment systems</li>
                        <li>• Minimal disruption to family living areas</li>
                        <li>• School zone work timing coordination</li>
                        <li>• Safe access to essential family areas maintained</li>
                        <li>• Neighbourhood-appropriate noise management</li>
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
                      <h3 className="text-xl font-semibold mb-3">Family Home Remediation Techniques</h3>
                      <p className="text-gray-700 mb-4">
                        Our professional mould removal Brighton East Melbourne service employs family-safe techniques suitable for residential homes, children's areas, and beachside properties while maintaining healthy indoor environments for all family members.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Non-toxic treatments safe for children and pets</li>
                        <li>• Family home HVAC system decontamination</li>
                        <li>• Beachside-appropriate moisture barrier installation</li>
                        <li>• Child bedroom and play area priority treatment</li>
                        <li>• Family bathroom and kitchen specialized cleaning</li>
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
                      <h3 className="text-xl font-semibold mb-3">Family Home Health Verification</h3>
                      <p className="text-gray-700 mb-4">
                        Every mould removal Brighton East Melbourne project concludes with comprehensive verification testing suitable for family homes, ensuring properties meet Australian residential health standards safe for children, elderly, and sensitive family members.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Family home air quality clearance testing</li>
                        <li>• Child-safe environment verification protocols</li>
                        <li>• Beachside property moisture level confirmation</li>
                        <li>• Family health safety certificates provided</li>
                        <li>• School zone property compliance documentation</li>
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
              Why Choose Mould & Restoration Co. for Brighton East?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Family Living Expertise</h3>
                <p className="text-gray-700 mb-4">
                  With 5+ years serving Brighton East, we understand the unique requirements of family homes, beachside living, and school zone properties. Our team combines residential expertise with coastal environmental knowledge for comprehensive family property care.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Family home and child-safe treatment specialist experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Beachside property environmental understanding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>School zone timing and community coordination</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">IICRC Certified Excellence</h3>
                <p className="text-gray-700 mb-4">
                  Our professional mould removal Brighton East Melbourne technicians are IICRC certified with additional training in family home safety and coastal property standards, ensuring comprehensive service quality for residential properties.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>IICRC water damage restoration certification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Applied structural drying for family home types</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Residential health and safety protocol training</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2 Hour</div>
                  <div className="text-sm text-gray-600">Professional Service - Same-day Available 7am-7pm to Brighton East</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-gray-600">Family-Safe Treatment Methods</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5.0★</div>
                  <div className="text-sm text-gray-600">Rating from Brighton East Families</div>
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
              Need Immediate Mould Removal in Brighton East?
            </h2>
            <p className="text-xl mb-8">
              Don't let mould compromise your Brighton East family home, beachside property, or children's health. Our IICRC-certified technicians provide Professional service line response with 2-hour arrival guarantee. Trusted by families, schools, and coastal properties with a 5.0-star rating.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">7am-7pm daily Professional Service - Same-day Available 7am-7pm</h3>
                  <p className="mb-4">Call now for immediate mould removal Brighton East Melbourne assistance. Our family home specialists respond Same-day professional service.</p>
                  <Button className="w-full bg-emergency-orange hover:bg-emergency-orange/90">
                    Call 1800 954 117 Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Free Brighton East Inspection</h3>
                  <p className="mb-4">Comprehensive family home assessment with thermal imaging. Specialized quotes for beachside properties, family homes, and school zone residences.</p>
                  <Button className="w-full" variant="outline">
                    Book Free Family Home Inspection
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg mb-2">
                <strong>ABN: 47 683 089 652</strong> | Licensed & Insured | IICRC Certified | Family Home Specialists
              </p>
              <p className="text-sm opacity-90">
                Serving Brighton East: 3187 | New Street | Male Street | Brighton Beach Access | School Zones
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};