import { ArrowRight, Clock, Shield, MapPin, Phone, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";

export const Mulgrave = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Mulgrave Mould Removal", href: "/services/mould-removal-mulgrave", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Mulgrave"
        title="Mould Removal Mulgrave - Family Suburb Specialists | Mould & Restoration Co"
        description="Professional mould removal in Mulgrave Melbourne. IICRC certified, Same-day professional service. Call 1800 954 117 for same-day Mulgrave mould inspection & removal."
        canonical="/services/mould-removal-mulgrave"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        serviceArea="Mulgrave, Melbourne"
        address="Mulgrave, Victoria, Australia"
        phone="1800 954 117"
        email="info@mouldrestoration.com.au"
        abn="47 683 089 652"
        description="Professional mould removal and inspection services in Mulgrave Melbourne. IICRC certified technicians specializing in family suburb properties, Jells Park proximity homes, and established residential neighborhoods."
      />

      <ServiceSchema
        serviceName="Mould Removal Mulgrave Melbourne"
        serviceType="Mould Remediation"
        areaServed="Mulgrave, Melbourne, Victoria"
        description="Professional mould removal and inspection services for Mulgrave properties including family homes, parkland proximity properties, and established suburban developments."
      />

      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Mulgrave</span>
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
              Professional Mould Removal & Inspection in Mulgrave, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Professional mould removal Mulgrave Melbourne specialists with 5+ years experience. IICRC-certified technicians serving Mulgrave's family suburb properties, Jells Park proximity homes, and established residential neighborhoods with same-day response. Trusted by 100+ Melbourne properties with 5.0-star rating.
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
                  <span>Same-day professional service to Mulgrave</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Family suburb & Jells Park proximity expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Postcodes: 3170, established neighborhood coverage</span>
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
                Free Mulgrave Inspection Quote
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
              Mulgrave Mould Removal Specialists
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Mould & Restoration Co. provides expert mould removal Mulgrave Melbourne services in Melbourne's desirable family-oriented suburb. Our IICRC-certified technicians understand the unique challenges of Mulgrave's established residential properties, parkland proximity effects, and mature suburban environment, from Wellington Road to Jells Park borders.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Common Mulgrave Mould Issues</h3>
              <p className="text-gray-700 mb-6">
                Mulgrave's combination of established family homes, parkland proximity, and mature suburban infrastructure creates specific mould challenges. Our professional mould removal Mulgrave Melbourne team addresses these with family-focused solutions:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Established Family Home Challenges</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Mature home ventilation systems requiring modernization</li>
                    <li>• Established landscaping affecting foundation drainage patterns</li>
                    <li>• Family home intensive bathroom and kitchen usage patterns</li>
                    <li>• Older building materials with age-related moisture management issues</li>
                    <li>• Multi-generational family homes with extended occupancy patterns</li>
                    <li>• Established home renovation projects uncovering moisture problems</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Jells Park Proximity Factors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Parkland irrigation and water feature humidity effects</li>
                    <li>• Seasonal park activity impact on nearby property moisture</li>
                    <li>• Established tree coverage affecting natural air circulation</li>
                    <li>• Park drainage systems influencing local property water management</li>
                    <li>• Walking trail and recreation area moisture generation</li>
                    <li>• Parkland vegetation creating natural humidity microclimates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Suburban Infrastructure Issues</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Mature suburb stormwater system capacity affecting properties</li>
                    <li>• Established neighborhood density moisture transfer effects</li>
                    <li>• Family suburb pool and spa area humidity management needs</li>
                    <li>• Wellington Road corridor drainage patterns affecting nearby homes</li>
                    <li>• Suburban shopping center proximity affecting local drainage</li>
                    <li>• Multi-decade infrastructure aging requiring building adaptation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Mulgrave Family Suburb Environment</h3>
              <p className="text-gray-700 mb-6">
                As one of Melbourne's most established family suburbs, Mulgrave presents unique mould challenges related to long-term family living patterns, mature landscaping, and evolving home improvement needs spanning decades of family ownership.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Long-Term Family Living Patterns</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Multi-generational households creating complex moisture management needs</li>
                    <li>• Family swimming pools and entertaining areas requiring seasonal management</li>
                    <li>• Long-term pet ownership affecting indoor air quality and moisture patterns</li>
                    <li>• Family home workshop and storage areas with varied ventilation needs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Mature Suburban Characteristics</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Established garden irrigation systems affecting foundation moisture</li>
                    <li>• Mature street tree root systems impacting property drainage</li>
                    <li>• Decades-old construction requiring modern moisture management updates</li>
                    <li>• Neighborhood character preservation affecting renovation options</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Mulgrave Housing and Family Living Solutions</h3>
              <p className="text-gray-700 mb-6">
                From 1970s family homes to modern developments and established estates, Mulgrave's housing diversity requires tailored mould solutions addressing both building ages and family living requirements across different life stages.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-primary">Established Family Properties</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">1970s-80s Family Homes</h5>
                      <p className="text-sm text-gray-600">Original family homes from Mulgrave's development era requiring modern moisture management while maintaining character and accommodation large families.</p>
                    </div>
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">Multi-Generational Family Houses</h5>
                      <p className="text-sm text-gray-600">Extended family homes with in-law accommodations requiring comprehensive moisture control addressing varied living patterns and increased occupancy.</p>
                    </div>
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">Family Estates with Swimming Pools</h5>
                      <p className="text-sm text-gray-600">Properties with pool and spa areas requiring specialized humidity management addressing recreational water features and year-round family activities.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-primary">Modern Family Developments</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">Contemporary Family Townhouses</h5>
                      <p className="text-sm text-gray-600">Modern family developments requiring advanced moisture management systems suitable for contemporary family living with energy efficiency and comfort priorities.</p>
                    </div>
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">Renovated Family Homes</h5>
                      <p className="text-sm text-gray-600">Updated family properties combining heritage charm with modern amenities requiring balanced mould solutions addressing both old and new building elements.</p>
                    </div>
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">Family Cluster Housing</h5>
                      <p className="text-sm text-gray-600">Modern family communities near parklands requiring moisture control addressing shared walls, communal areas, and family-focused outdoor spaces.</p>
                    </div>
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Choose Mould & Restoration Co. for Mulgrave?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Family Suburb Expertise</h3>
                <p className="text-gray-700 mb-4">
                  With 5+ years serving Mulgrave, we understand the unique requirements of established family neighborhoods, parkland proximity properties, and mature suburban infrastructure. Our team combines family safety with environmental expertise.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Established family home and child-safe treatment specialist experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Jells Park proximity environmental understanding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Mature suburban infrastructure and established neighborhood expertise</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">IICRC Certified Excellence</h3>
                <p className="text-gray-700 mb-4">
                  Our professional mould removal Mulgrave Melbourne technicians are IICRC certified with training in family suburb standards and established property requirements, ensuring comprehensive service quality for residential communities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>IICRC water damage restoration certification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Applied structural drying for established family property types</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Family suburban health and safety protocol training</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2 Hour</div>
                  <div className="text-sm text-gray-600">Professional Service - Same-day Available 7am-7pm to Mulgrave</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-gray-600">Family-Safe Treatment Methods</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5.0★</div>
                  <div className="text-sm text-gray-600">Rating from Mulgrave Families</div>
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
              Need Immediate Mould Removal in Mulgrave?
            </h2>
            <p className="text-xl mb-8">
              Don't let mould compromise your Mulgrave family home, established property, or children's health. Our IICRC-certified technicians provide Professional service line response with 2-hour arrival guarantee. Trusted by families, established neighborhoods, and suburban communities with a 5.0-star rating.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">7am-7pm daily Professional Service - Same-day Available 7am-7pm</h3>
                  <p className="mb-4">Call now for immediate mould removal Mulgrave Melbourne assistance. Our family suburb specialists respond Same-day professional service.</p>
                  <Button className="w-full bg-emergency-orange hover:bg-emergency-orange/90">
                    Call 1800 954 117 Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Free Mulgrave Inspection</h3>
                  <p className="mb-4">Comprehensive family home assessment with thermal imaging. Specialized quotes for established properties, parkland proximity homes, and suburban developments.</p>
                  <Button className="w-full" variant="outline">
                    Book Free Family Suburb Inspection
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg mb-2">
                <strong>ABN: 47 683 089 652</strong> | Licensed & Insured | IICRC Certified | Family Suburb Specialists
              </p>
              <p className="text-sm opacity-90">
                Serving Mulgrave: 3170 | Wellington Road | Jells Park Proximity | Established Neighborhoods | Family Suburbs
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};