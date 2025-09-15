import { ArrowRight, Clock, Shield, MapPin, Phone, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";

export const NottingHill = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Notting Hill Mould Removal", href: "/services/mould-removal-notting-hill", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Notting Hill"
        title="Mould Removal Notting Hill - Established Suburb Specialists | Mould & Restoration Co"
        description="Professional mould removal in Notting Hill Melbourne. IICRC certified, Same-day professional service. Call 1800 954 117 for same-day Notting Hill mould inspection & removal."
        canonical="/services/mould-removal-notting-hill"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        serviceArea="Notting Hill, Melbourne"
        address="Notting Hill, Victoria, Australia"
        phone="1800 954 117"
        email="info@mouldrestoration.com.au"
        abn="47 683 089 652"
        description="Professional mould removal and inspection services in Notting Hill Melbourne. IICRC certified technicians specializing in established family homes, unit developments, and mature suburban properties."
      />

      <ServiceSchema
        serviceName="Mould Removal Notting Hill Melbourne"
        serviceType="Mould Remediation"
        areaServed="Notting Hill, Melbourne, Victoria"
        description="Emergency mould removal and inspection services for Notting Hill properties including established family homes, unit complexes, and mature suburban developments."
      />

      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Notting Hill</span>
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
              Professional Mould Removal & Inspection in Notting Hill, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Emergency mould removal Notting Hill Melbourne specialists with 5+ years experience. IICRC-certified technicians serving Notting Hill's established family homes, unit developments, and mature suburban properties with same-day response. Trusted by 100+ Melbourne properties with 5.0-star rating.
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
                  <span>Same-day professional service to Notting Hill</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Established family homes & unit complex expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Postcodes: 3168, mature suburban coverage</span>
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
                Free Notting Hill Inspection Quote
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
              Notting Hill Mould Removal Specialists
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Mould & Restoration Co. provides expert mould removal Notting Hill Melbourne services in Melbourne's established southeastern suburb. Our IICRC-certified technicians understand the unique challenges of Notting Hill's mature family homes, unit developments, and established suburban infrastructure, from Ferntree Gully Road to the local shopping precincts.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Common Notting Hill Mould Issues</h3>
              <p className="text-gray-700 mb-6">
                Notting Hill's combination of established family housing, mature suburban infrastructure, and diverse property ages creates specific mould challenges. Our emergency mould removal Notting Hill Melbourne team addresses these with comprehensive suburban solutions:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Established Family Home Challenges</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 1970s-80s home ventilation systems requiring updates</li>
                    <li>• Original building materials aging moisture management issues</li>
                    <li>• Mature landscaping affecting foundation drainage patterns</li>
                    <li>• Family home bathroom and kitchen renovation moisture challenges</li>
                    <li>• Established swimming pools and outdoor entertaining areas</li>
                    <li>• Multi-generational family home moisture usage patterns</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Unit Complex and Development Factors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Unit complex shared wall moisture transfer issues</li>
                    <li>• Multi-storey development moisture management challenges</li>
                    <li>• Unit block laundry facility steam and humidity effects</li>
                    <li>• Apartment balcony and outdoor area moisture issues</li>
                    <li>• Unit complex shared ventilation system optimization</li>
                    <li>• Body corporate building maintenance moisture concerns</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Mature Suburban Infrastructure Issues</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Established suburb stormwater system capacity effects</li>
                    <li>• Mature street tree root systems affecting property drainage</li>
                    <li>• Shopping precinct proximity affecting local moisture patterns</li>
                    <li>• Public transport corridor condensation and drainage effects</li>
                    <li>• Established neighbourhood density affecting air circulation</li>
                    <li>• Local park and reserve irrigation affecting nearby properties</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Notting Hill Mature Suburban Living</h3>
              <p className="text-gray-700 mb-6">
                As a well-established southeastern Melbourne suburb, Notting Hill presents mould challenges related to aging building stock, mature infrastructure, and the transition from original family ownership to modern diverse residential use.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Established Building Stock Characteristics</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Original 1970s-80s family homes requiring modern moisture management updates</li>
                    <li>• Established unit complexes with shared building maintenance challenges</li>
                    <li>• Mature building materials requiring specialized treatment approaches</li>
                    <li>• Renovation and extension projects affecting original moisture systems</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Suburban Transition Challenges</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Properties transitioning from original family ownership to modern use</li>
                    <li>• Investment property maintenance affecting moisture management</li>
                    <li>• First home buyer properties requiring updated moisture systems</li>
                    <li>• Multigenerational families creating varied moisture usage patterns</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Notting Hill Property Types and Family Solutions</h3>
              <p className="text-gray-700 mb-6">
                From established family homes to modern unit developments and renovated properties, Notting Hill's diverse housing portfolio requires tailored mould solutions addressing both building ages and modern family living needs.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-primary">Established Residential Properties</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">Original 1970s-80s Family Homes</h5>
                      <p className="text-sm text-gray-600">Established family homes requiring modern moisture management systems while maintaining original architectural character and accommodating contemporary family needs.</p>
                    </div>
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">Extended and Renovated Family Properties</h5>
                      <p className="text-sm text-gray-600">Family homes with additions and renovations requiring integrated moisture management addressing both original and new building elements.</p>
                    </div>
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">Multi-Generational Family Homes</h5>
                      <p className="text-sm text-gray-600">Established family properties accommodating extended families requiring comprehensive moisture control addressing varied living patterns and increased occupancy.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-primary">Modern Residential Developments</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">Contemporary Unit Complexes</h5>
                      <p className="text-sm text-gray-600">Modern apartment and unit developments requiring advanced moisture management systems addressing shared living, body corporate maintenance, and contemporary design features.</p>
                    </div>
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">Investment and Rental Properties</h5>
                      <p className="text-sm text-gray-600">Investment properties requiring tenant-friendly mould solutions ensuring rental suitability while maintaining property value and meeting residential tenancy standards.</p>
                    </div>
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">First Home Buyer Properties</h5>
                      <p className="text-sm text-gray-600">Properties popular with first home buyers requiring cost-effective mould management solutions suitable for young families establishing their first family home.</p>
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
              Why Choose Mould & Restoration Co. for Notting Hill?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Established Suburb & Family Home Expertise</h3>
                <p className="text-gray-700 mb-4">
                  With 5+ years serving Notting Hill, we understand the unique challenges of established family homes, aging building stock, and modern suburban living patterns. Our team specializes in mature suburb moisture management solutions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Established family home and unit complex specialist experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Aging building stock moisture management expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Suburban family living pattern moisture understanding</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">IICRC Certified Excellence</h3>
                <p className="text-gray-700 mb-4">
                  Our emergency mould removal Notting Hill Melbourne technicians are IICRC certified with specialized training in established home renovation and unit complex moisture management.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>IICRC water damage restoration certification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Applied structural drying for established and modern properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Family home and unit complex health and safety protocol training</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2 Hour</div>
                  <div className="text-sm text-gray-600">Professional Service - Same-day Available 7am-7pm to Notting Hill</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-gray-600">Family-Safe Treatment Methods</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5.0★</div>
                  <div className="text-sm text-gray-600">Rating from Suburban Families</div>
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
              Need Immediate Mould Removal in Notting Hill?
            </h2>
            <p className="text-xl mb-8">
              Don't let mould compromise your Notting Hill family home, unit complex, or investment property. Our IICRC-certified technicians provide Professional service hotline (7am-7pm) response with 2-hour arrival guarantee. Trusted by established suburban families and property investors with a 5.0-star rating.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">24/7 Professional Service - Same-day Available 7am-7pm</h3>
                  <p className="mb-4">Call now for immediate mould removal Notting Hill Melbourne assistance. Our established suburb specialists respond Same-day professional service.</p>
                  <Button className="w-full bg-emergency-orange hover:bg-emergency-orange/90">
                    Call 1800 954 117 Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Free Notting Hill Inspection</h3>
                  <p className="mb-4">Comprehensive family home assessment with thermal imaging. Specialized quotes for established homes, unit complexes, and suburban properties.</p>
                  <Button className="w-full" variant="outline">
                    Book Free Suburban Property Inspection
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg mb-2">
                <strong>ABN: 47 683 089 652</strong> | Licensed & Insured | IICRC Certified | Suburban Family Specialists
              </p>
              <p className="text-sm opacity-90">
                Serving Notting Hill: 3168 | Ferntree Gully Road | Shopping Precincts | Established Suburbs | Unit Complexes
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};