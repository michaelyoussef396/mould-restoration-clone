import { ArrowRight, Clock, Shield, MapPin, Phone, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";

export const Parkville = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Parkville Mould Removal", href: "/services/mould-removal-parkville", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Parkville"
        title="Mould Removal Parkville - University & Hospital Precinct Specialists | Mould & Restoration Co"
        description="Professional mould removal in Parkville Melbourne. IICRC certified, Same-day professional service. Call 1800 954 117 for same-day Parkville mould inspection & removal."
        canonical="/services/mould-removal-parkville"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        serviceArea="Parkville, Melbourne"
        address="Parkville, Victoria, Australia"
        phone="1800 954 117"
        email="info@mouldrestoration.com.au"
        abn="47 683 089 652"
        description="Professional mould removal and inspection services in Parkville Melbourne. IICRC certified technicians specializing in university precinct, hospital vicinity, and heritage residential properties."
      />

      <ServiceSchema
        serviceName="Mould Removal Parkville Melbourne"
        serviceType="Mould Remediation"
        areaServed="Parkville, Melbourne, Victoria"
        description="Emergency mould removal and inspection services for Parkville properties including university buildings, hospital vicinity homes, heritage properties, and research facilities."
      />

      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Parkville</span>
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
              Professional Mould Removal & Inspection in Parkville, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Emergency mould removal Parkville Melbourne specialists with 5+ years experience. IICRC-certified technicians serving Parkville's university precinct, hospital vicinity properties, and heritage residential areas with same-day response. Trusted by 100+ Melbourne properties with 5.0-star rating.
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
                  <span>Same-day professional service to Parkville</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>University & hospital precinct expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Postcodes: 3052, Royal Park vicinity coverage</span>
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
                Free Parkville Inspection Quote
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
              Parkville Mould Removal Specialists
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Mould & Restoration Co. provides expert mould removal Parkville Melbourne services in Melbourne's prestigious university and medical precinct. Our IICRC-certified technicians understand the unique challenges of Parkville's institutional buildings, heritage residential properties, and Royal Park proximity effects, from the University of Melbourne to the hospital district.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Common Parkville Mould Issues</h3>
              <p className="text-gray-700 mb-6">
                Parkville's combination of prestigious institutions, heritage architecture, and parkland proximity creates specific mould challenges. Our emergency mould removal Parkville Melbourne team addresses these with institutional-grade solutions:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">University Precinct Challenges</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Academic building high occupancy moisture accumulation</li>
                    <li>• Research facility controlled environment system issues</li>
                    <li>• Student accommodation intensive usage patterns</li>
                    <li>• University heritage building preservation requirements</li>
                    <li>• Laboratory and teaching facility specialized ventilation needs</li>
                    <li>• Campus landscaping irrigation affecting nearby residential properties</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Hospital District Factors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Medical facility specialized air quality requirements</li>
                    <li>• Hospital vicinity residential moisture management</li>
                    <li>• Healthcare infrastructure drainage effects</li>
                    <li>• Medical precinct high-traffic building condensation</li>
                    <li>• Hospital landscaping and water feature humidity effects</li>
                    <li>• Emergency service vehicle area drainage challenges</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Heritage Residential Issues</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Victorian and Edwardian heritage home conservation</li>
                    <li>• Period property original building material challenges</li>
                    <li>• Heritage overlay requirements affecting remediation methods</li>
                    <li>• Royal Park proximity natural humidity effects</li>
                    <li>• Tree-lined street mature vegetation moisture retention</li>
                    <li>• Heritage terrace shared wall moisture transfer issues</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Parkville Institutional and Heritage Environment</h3>
              <p className="text-gray-700 mb-6">
                As Melbourne's premier educational and medical precinct, Parkville presents unique mould challenges requiring understanding of institutional requirements, heritage preservation standards, and the complex interaction between large facilities and residential properties.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Institutional Precinct Effects</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• University and hospital facilities creating localized humidity patterns</li>
                    <li>• Large institutional HVAC systems affecting surrounding air quality</li>
                    <li>• Research facility emissions requiring specialized environmental controls</li>
                    <li>• Educational and medical facility intensive water usage affecting area drainage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Royal Park Proximity Benefits and Challenges</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Large parkland providing natural air circulation benefits</li>
                    <li>• Park irrigation and water features affecting nearby property humidity</li>
                    <li>• Mature park vegetation creating natural humidity control</li>
                    <li>• Seasonal park activity patterns affecting local environmental conditions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Parkville Property Types and Heritage Solutions</h3>
              <p className="text-gray-700 mb-6">
                From grand Victorian mansions to contemporary apartments and institutional buildings, Parkville's diverse architecture requires specialized mould solutions addressing both heritage preservation and modern institutional requirements.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-primary">Heritage and Prestigious Residential</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">Victorian and Edwardian Mansions</h5>
                      <p className="text-sm text-gray-600">Grand heritage homes requiring conservation-grade mould remediation preserving architectural significance while ensuring modern health and comfort standards.</p>
                    </div>
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">Heritage Terraces and Cottages</h5>
                      <p className="text-sm text-gray-600">Period residential properties requiring heritage-sensitive solutions addressing original materials while accommodating contemporary living needs.</p>
                    </div>
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">Contemporary Park-Adjacent Apartments</h5>
                      <p className="text-sm text-gray-600">Modern residential developments requiring advanced moisture management systems taking advantage of parkland proximity while addressing urban density challenges.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-primary">Institutional and Educational Properties</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">University Buildings and Facilities</h5>
                      <p className="text-sm text-gray-600">Educational institutions requiring specialized moisture management addressing high occupancy, research requirements, and heritage building preservation.</p>
                    </div>
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">Medical and Healthcare Facilities</h5>
                      <p className="text-sm text-gray-600">Hospital and medical buildings requiring hospital-grade mould solutions ensuring sterile environments and specialized air quality standards.</p>
                    </div>
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">Student Accommodation and Housing</h5>
                      <p className="text-sm text-gray-600">Student housing requiring intensive moisture management addressing high-density living and varying occupancy patterns throughout academic cycles.</p>
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
              Why Choose Mould & Restoration Co. for Parkville?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Institutional & Heritage Expertise</h3>
                <p className="text-gray-700 mb-4">
                  With 5+ years serving Parkville, we understand the unique requirements of educational institutions, medical facilities, and heritage properties. Our team combines institutional expertise with heritage conservation knowledge for comprehensive service.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>University and hospital facility specialist experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Heritage building conservation and preservation expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Institutional air quality and health standard compliance</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">IICRC Certified Excellence</h3>
                <p className="text-gray-700 mb-4">
                  Our emergency mould removal Parkville Melbourne technicians are IICRC certified with specialized training in institutional facilities and heritage building conservation standards.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>IICRC water damage restoration certification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Applied structural drying for heritage and institutional properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Institutional health and safety protocol training</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2 Hour</div>
                  <div className="text-sm text-gray-600">Professional Service - Same-day Available 7am-7pm to Parkville</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-gray-600">Heritage-Safe Treatment Methods</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5.0★</div>
                  <div className="text-sm text-gray-600">Rating from Institutional & Heritage Properties</div>
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
              Need Immediate Mould Removal in Parkville?
            </h2>
            <p className="text-xl mb-8">
              Don't let mould compromise your Parkville institutional facility, heritage property, or residential building. Our IICRC-certified technicians provide Professional service hotline (7am-7pm) response with 2-hour arrival guarantee. Trusted by educational institutions, medical facilities, and heritage property owners with a 5.0-star rating.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">24/7 Professional Service - Same-day Available 7am-7pm</h3>
                  <p className="mb-4">Call now for immediate mould removal Parkville Melbourne assistance. Our institutional and heritage specialists respond Same-day professional service.</p>
                  <Button className="w-full bg-emergency-orange hover:bg-emergency-orange/90">
                    Call 1800 954 117 Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Free Parkville Inspection</h3>
                  <p className="mb-4">Comprehensive institutional and heritage assessment with thermal imaging. Specialized quotes for university buildings, medical facilities, and heritage properties.</p>
                  <Button className="w-full" variant="outline">
                    Book Free Heritage & Institutional Inspection
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg mb-2">
                <strong>ABN: 47 683 089 652</strong> | Licensed & Insured | IICRC Certified | Heritage & Institutional Specialists
              </p>
              <p className="text-sm opacity-90">
                Serving Parkville: 3052 | University of Melbourne | Royal Melbourne Hospital | Royal Park | Heritage Precinct
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};