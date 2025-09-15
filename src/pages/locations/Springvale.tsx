import { ArrowRight, Clock, Shield, MapPin, Phone, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";

export const Springvale = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Springvale Mould Removal", href: "/services/mould-removal-springvale", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Springvale"
        title="Mould Removal Springvale - Diverse Community Specialists | Mould & Restoration Co"
        description="Springvale multicultural community & shopping district mould experts. Springvale Road specialists treating diverse family homes & established residential areas. Professional service. Call 1800 954 117"
        canonical="/services/mould-removal-springvale"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        serviceArea="Springvale, Melbourne"
        address="Springvale, Victoria, Australia"
        phone="1800 954 117"
        email="info@mouldrestoration.com.au"
        abn="47 683 089 652"
        description="Professional mould removal and inspection services in Springvale Melbourne. IICRC certified technicians specializing in diverse community housing, Springvale Road commercial precinct, and multicultural residential properties."
      />

      <ServiceSchema
        serviceName="Mould Removal Springvale Melbourne"
        serviceType="Mould Remediation"
        areaServed="Springvale, Melbourne, Victoria"
        description="Professional mould removal and inspection services for Springvale properties including diverse community housing, commercial buildings, and multicultural residential developments."
      />

      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Springvale</span>
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
              Professional Mould Removal & Inspection in Springvale, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Professional mould removal Springvale Melbourne specialists with 5+ years experience. IICRC-certified technicians serving Springvale's diverse community housing, Springvale Road commercial precinct, and multicultural residential properties with same-day response. Trusted by 100+ Melbourne properties with 5.0-star rating.
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
                  <span>Same-day professional service to Springvale</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Diverse community & multicultural expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Postcodes: 3171, Springvale Road precinct coverage</span>
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
                Free Springvale Inspection Quote
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
              Springvale Mould Removal Specialists
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Mould & Restoration Co. provides expert mould removal Springvale Melbourne services in Melbourne's vibrant multicultural community. Our IICRC-certified technicians understand the unique challenges of Springvale's diverse community housing, commercial precinct, and varied residential developments, from the railway corridor to community facilities.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Common Springvale Mould Issues</h3>
              <p className="text-gray-700 mb-6">
                Springvale's combination of diverse community housing, intensive commercial activities, and multicultural living patterns creates specific mould challenges. Our professional mould removal Springvale Melbourne team addresses these with culturally-appropriate solutions:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Diverse Community Housing Challenges</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Multicultural cooking practices creating varied humidity patterns</li>
                    <li>• Large family occupancy increasing bathroom and kitchen usage</li>
                    <li>• Diverse ventilation practices across different cultural backgrounds</li>
                    <li>• Community housing high-density moisture accumulation</li>
                    <li>• Extended family living arrangements affecting moisture management</li>
                    <li>• Traditional cooking methods generating concentrated steam and humidity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Commercial Precinct Factors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Restaurant and food service intensive humidity generation</li>
                    <li>• Springvale Road commercial building mixed-use moisture problems</li>
                    <li>• Market and shopping area high foot traffic condensation</li>
                    <li>• Above-shop residential properties moisture transfer issues</li>
                    <li>• Asian food processing businesses creating specialized humidity challenges</li>
                    <li>• Community centre and cultural facility intensive usage patterns</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Transport Corridor Issues</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Railway line proximity vibration affecting building seals</li>
                    <li>• Bus corridor and station area drainage impacting properties</li>
                    <li>• Transport hub condensation from high pedestrian traffic</li>
                    <li>• Major road drainage effects on adjacent residential buildings</li>
                    <li>• Train station vicinity high moisture from commuter activities</li>
                    <li>• Railway cutting affecting local drainage and groundwater patterns</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Springvale Cultural Community Considerations</h3>
              <p className="text-gray-700 mb-6">
                As Melbourne's most culturally diverse suburb, Springvale presents unique mould challenges requiring understanding of varied living patterns, cooking practices, and housing arrangements across different cultural communities.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Multicultural Living Patterns</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Vietnamese community traditional cooking practices creating concentrated kitchen humidity</li>
                    <li>• Sri Lankan and Indian families using intensive spice preparation increasing moisture</li>
                    <li>• Chinese community hot pot and steamboat cooking affecting indoor air quality</li>
                    <li>• Multi-generational household arrangements creating complex ventilation needs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Cultural Facility Challenges</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Buddhist temples and community centres intensive incense usage affecting air quality</li>
                    <li>• Cultural celebration venues requiring moisture management for large gatherings</li>
                    <li>• Community language schools and cultural centres with varying occupancy patterns</li>
                    <li>• Religious facility food preparation areas requiring specialized ventilation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Springvale Housing Types and Mould Solutions</h3>
              <p className="text-gray-700 mb-6">
                From post-war family homes to modern apartment complexes and community housing, Springvale's diverse housing portfolio requires tailored mould solutions addressing both building types and cultural living patterns.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-primary">Community and Public Housing</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">High-Rise Housing Commission Buildings</h5>
                      <p className="text-sm text-gray-600">Multi-storey community housing requiring specialized moisture management addressing high-density living, shared facilities, and diverse occupancy patterns.</p>
                    </div>
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">Transitional Housing Facilities</h5>
                      <p className="text-sm text-gray-600">Temporary accommodation and refugee settlement housing requiring rapid response mould solutions prioritising health and safety for vulnerable populations.</p>
                    </div>
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">Supported Accommodation Services</h5>
                      <p className="text-sm text-gray-600">Community support housing requiring gentle mould management approaches suitable for residents with varying needs and circumstances.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-primary">Private Residential Properties</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">Post-War Family Homes</h5>
                      <p className="text-sm text-gray-600">Established brick and weatherboard homes requiring heritage-sensitive mould solutions while accommodating modern multicultural family living patterns.</p>
                    </div>
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">Modern Apartment Developments</h5>
                      <p className="text-sm text-gray-600">Contemporary high-density living requiring advanced moisture management systems addressing intensive cooking, shared facilities, and varied cultural practices.</p>
                    </div>
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">Mixed-Use Commercial Properties</h5>
                      <p className="text-sm text-gray-600">Springvale Road developments combining retail, restaurant, and residential spaces requiring comprehensive moisture control across different usage zones.</p>
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
              Why Choose Mould & Restoration Co. for Springvale?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Multicultural Community Expertise</h3>
                <p className="text-gray-700 mb-4">
                  With 5+ years serving Springvale, we understand the unique requirements of diverse communities, commercial precincts, and multicultural housing. Our team combines cultural sensitivity with technical expertise for comprehensive community service.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Diverse community housing and multicultural living specialist experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Springvale Road commercial precinct understanding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Transport corridor and community facility expertise</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">IICRC Certified Excellence</h3>
                <p className="text-gray-700 mb-4">
                  Our professional mould removal Springvale Melbourne technicians are IICRC certified with training in multicultural community standards and diverse housing requirements, ensuring comprehensive service quality for all community members.
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
                  <div className="text-sm text-gray-600">Professional Service - Same-day Available 7am-7pm to Springvale</div>
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
              Need Immediate Mould Removal in Springvale?
            </h2>
            <p className="text-xl mb-8">
              Don't let mould compromise your Springvale multicultural home, commercial property, or community building. Our IICRC-certified technicians provide Professional service line response with 2-hour arrival guarantee. Trusted by diverse communities, commercial facilities, and multicultural housing with a 5.0-star rating.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">7am-7pm daily Professional Service - Same-day Available 7am-7pm</h3>
                  <p className="mb-4">Call now for immediate mould removal Springvale Melbourne assistance. Our multicultural community specialists respond Same-day professional service.</p>
                  <Button className="w-full bg-emergency-orange hover:bg-emergency-orange/90">
                    Call 1800 954 117 Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Free Springvale Inspection</h3>
                  <p className="mb-4">Comprehensive multicultural assessment with thermal imaging. Specialized quotes for diverse housing, commercial buildings, and community facilities.</p>
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
                Serving Springvale: 3171 | Springvale Road | Commercial Precinct | Community Housing | Transport Corridor
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};