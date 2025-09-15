import { ArrowRight, Clock, Shield, MapPin, Phone, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";

export const Mentone = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Mentone Mould Removal", href: "/services/mould-removal-mentone", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Mentone"
        title="Mould Removal Mentone - Family Beach Living Specialists | Mould & Restoration Co"
        description="Professional mould removal in Mentone Melbourne. IICRC certified, 2-hour emergency response. Call 1800 954 117 for same-day Mentone mould inspection & removal."
        canonical="/services/mould-removal-mentone"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        serviceArea="Mentone, Melbourne"
        address="Mentone, Victoria, Australia"
        phone="1800 954 117"
        email="info@mouldrestoration.com.au"
        abn="47 683 089 652"
        description="Professional mould removal and inspection services in Mentone Melbourne. IICRC certified technicians specializing in family beach living, Mentone Station precinct properties, and Balcombe Creek area buildings."
      />

      <ServiceSchema
        serviceName="Mould Removal Mentone Melbourne"
        serviceType="Mould Remediation"
        areaServed="Mentone, Melbourne, Victoria"
        description="Emergency mould removal and inspection services for Mentone properties including family beach homes, station precinct buildings, and Balcombe Creek area properties."
      />

      <Navigation />

      {/* Emergency Response Bar */}
      <div className="emergency-bar">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>24/7 Emergency Mould Response in Mentone</span>
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
              Professional Mould Removal & Inspection in Mentone, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Emergency mould removal Mentone Melbourne specialists with 5+ years experience. IICRC-certified technicians serving Mentone's family beach living properties, station precinct buildings, and Balcombe Creek area homes with same-day response. Trusted by 100+ Melbourne properties with 5.0-star rating.
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
                  <span>2-hour emergency response to Mentone</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Family beach living & creek area expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Postcodes: 3194, station precinct coverage</span>
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
                Free Mentone Inspection Quote
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
              Mentone Mould Removal Specialists
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Mould & Restoration Co. provides expert mould removal Mentone Melbourne services in one of Melbourne's most family-friendly beachside suburbs. Our IICRC-certified technicians understand the unique challenges of Mentone's family beach living properties, station precinct buildings, and Balcombe Creek area homes, from Mentone Beach to the railway corridor.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Mentone Property Types We Service</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Family Beach Homes:</strong> Residential properties with beach access and family living focus</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Station Precinct Buildings:</strong> Properties near Mentone Station with commuter access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Balcombe Creek Area:</strong> Properties near waterway with elevated humidity concerns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>School Zone Properties:</strong> Family homes within Mentone Primary and secondary catchments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Heritage Family Homes:</strong> Older family residences with period features and large gardens</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Modern Family Developments:</strong> Contemporary townhouses and family unit complexes</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Mentone Landmarks We Cover</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Mentone Beach:</strong> Beachfront and beach access properties with salt air exposure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Mentone Station:</strong> Railway precinct with commuter facilities and parking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Balcombe Creek:</strong> Waterway corridor with parkland and recreational areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Como Parade:</strong> Main shopping and dining strip serving local community</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Mentone Primary Schools:</strong> Educational precincts and surrounding family neighborhoods</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Mentone Park:</strong> Community recreational space and adjacent residential areas</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Common Mentone Mould Issues</h3>
              <p className="text-gray-700 mb-6">
                Mentone's combination of family beach living, creek proximity, and suburban amenities creates specific mould challenges. Our emergency mould removal Mentone Melbourne team addresses these with family-appropriate solutions:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Family Beach Living Challenges</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Beach activity moisture and sand tracking into homes</li>
                    <li>• Family bathroom and shower overuse during summer months</li>
                    <li>• Salt air penetration affecting family home ventilation</li>
                    <li>• Children's beach equipment storage moisture issues</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Creek Area Environmental Factors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Balcombe Creek proximity humidity and moisture effects</li>
                    <li>• Waterway drainage impact on nearby property foundations</li>
                    <li>• Creek parkland irrigation moisture on adjacent homes</li>
                    <li>• Seasonal creek flow variation affecting local microclimate</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Station Precinct Issues</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Railway cutting microclimate effects on nearby properties</li>
                    <li>• Commuter parking area drainage and stormwater issues</li>
                    <li>• Station infrastructure moisture impacts on local buildings</li>
                    <li>• Mixed residential and transport infrastructure challenges</li>
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
              Professional Mould Removal Mentone Melbourne Process
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center">
              Our systematic approach to mould removal Mentone Melbourne ensures complete elimination while addressing the unique challenges of family beach living, creek area environments, and station precinct properties.
            </p>

            <div className="grid gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Comprehensive Family Community Assessment</h3>
                      <p className="text-gray-700 mb-4">
                        Upon receiving your call for mould removal Mentone Melbourne, our IICRC-certified technicians respond within 2 hours. We conduct comprehensive thermal imaging and moisture mapping specific to family beach homes, creek area properties, and station precinct buildings.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• 24/7 emergency response to Mentone (3194)</li>
                        <li>• Family beach property salt air and moisture assessment</li>
                        <li>• Creek proximity waterway impact evaluation</li>
                        <li>• Station precinct microclimate analysis</li>
                        <li>• Family-focused property health and safety assessment</li>
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
                      <h3 className="text-xl font-semibold mb-3">Family-Safe Environmental Containment</h3>
                      <p className="text-gray-700 mb-4">
                        Professional mould removal Mentone Melbourne requires family-appropriate containment methods for beachside properties with children and community access needs. We establish controlled environments that maintain family routines while ensuring treatment effectiveness.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Child and pet-safe containment systems for family homes</li>
                        <li>• Beach access and family activity coordination</li>
                        <li>• School zone and community facility timing consideration</li>
                        <li>• Creek area and parkland access maintenance</li>
                        <li>• Family neighborhood-appropriate noise and disruption management</li>
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
                      <h3 className="text-xl font-semibold mb-3">Family Community Remediation Techniques</h3>
                      <p className="text-gray-700 mb-4">
                        Our emergency mould removal Mentone Melbourne service employs family-community techniques suitable for beach homes, creek area properties, and station precinct buildings while maintaining healthy environments for families and community members.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Non-toxic family-safe treatments for beach homes</li>
                        <li>• Creek area moisture-resistant barrier systems</li>
                        <li>• Station precinct appropriate ventilation restoration</li>
                        <li>• Family home specialized dehumidification systems</li>
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
                      <h3 className="text-xl font-semibold mb-3">Family Community Health Verification</h3>
                      <p className="text-gray-700 mb-4">
                        Every mould removal Mentone Melbourne project concludes with comprehensive verification testing suitable for family communities, ensuring beach homes, creek area properties, and station precinct buildings meet Australian family residential health standards.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Family community air quality clearance testing</li>
                        <li>• Beach home salt air impact verification</li>
                        <li>• Creek area moisture level confirmation</li>
                        <li>• Station precinct environmental clearance</li>
                        <li>• Family health safety certification and documentation</li>
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
              Why Choose Mould & Restoration Co. for Mentone?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Family Beach Community Expertise</h3>
                <p className="text-gray-700 mb-4">
                  With 5+ years serving Mentone, we understand the unique requirements of family beach living, creek area properties, and station precinct buildings. Our team combines family safety with environmental expertise for comprehensive community property care.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Family beach living and child-safe treatment specialist experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Creek area waterway environmental understanding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Station precinct mixed infrastructure property expertise</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">IICRC Certified Excellence</h3>
                <p className="text-gray-700 mb-4">
                  Our emergency mould removal Mentone Melbourne technicians are IICRC certified with additional training in family community standards and diverse environmental property requirements, ensuring comprehensive service quality for beachside families.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>IICRC water damage restoration certification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Applied structural drying for diverse environmental properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Family community health and safety protocol training</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2 Hour</div>
                  <div className="text-sm text-gray-600">Emergency Response to Mentone</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-gray-600">Family-Safe Treatment Methods</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5.0★</div>
                  <div className="text-sm text-gray-600">Rating from Mentone Families</div>
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
              Need Immediate Mould Removal in Mentone?
            </h2>
            <p className="text-xl mb-8">
              Don't let mould compromise your Mentone family beach home, creek area property, or children's health. Our IICRC-certified technicians provide 24/7 emergency response with 2-hour arrival guarantee. Trusted by families, schools, and community properties with a 5.0-star rating.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-emergency-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">24/7 Emergency Response</h3>
                  <p className="mb-4">Call now for immediate mould removal Mentone Melbourne assistance. Our family community specialists respond within 2 hours.</p>
                  <Button className="w-full bg-emergency-orange hover:bg-emergency-orange/90">
                    Call 1800 954 117 Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Free Mentone Inspection</h3>
                  <p className="mb-4">Comprehensive family assessment with thermal imaging. Specialized quotes for beach homes, creek area properties, and station precinct buildings.</p>
                  <Button className="w-full" variant="outline">
                    Book Free Family Community Inspection
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg mb-2">
                <strong>ABN: 47 683 089 652</strong> | Licensed & Insured | IICRC Certified | Family Community Specialists
              </p>
              <p className="text-sm opacity-90">
                Serving Mentone: 3194 | Como Parade | Mentone Beach | Balcombe Creek | Station Precinct
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};