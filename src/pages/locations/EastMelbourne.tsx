import { ArrowRight, Clock, Shield, MapPin, Phone, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";

export const EastMelbourne = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "East Melbourne Mould Removal", href: "/services/mould-removal-east-melbourne", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="East Melbourne"
        title="Mould Removal East Melbourne - Emergency Response | Mould & Restoration Co"
        description="Professional mould removal in East Melbourne Melbourne. IICRC certified, 2-hour emergency response. Call 1800 954 117 for same-day East Melbourne mould inspection & removal."
        canonical="/services/mould-removal-east-melbourne"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        serviceArea="East Melbourne, Melbourne"
        address="East Melbourne, Victoria, Australia"
        phone="1800 954 117"
        email="info@mouldrestoration.com.au"
        abn="47 683 089 652"
        description="Professional mould removal and inspection services in East Melbourne Melbourne. IICRC certified technicians specializing in heritage mansions, medical precinct buildings, and garden district properties."
      />

      <ServiceSchema
        serviceName="Mould Removal East Melbourne Melbourne"
        serviceType="Mould Remediation"
        areaServed="East Melbourne, Melbourne, Victoria"
        description="Emergency mould removal and inspection services for East Melbourne properties including heritage mansions, medical buildings, and luxury townhouses."
      />

      <Navigation />

      {/* Emergency Response Bar */}
      <div className="emergency-bar">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>24/7 Emergency Mould Response in East Melbourne</span>
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
              Professional Mould Removal & Inspection in East Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Emergency mould removal East Melbourne Melbourne specialists with 5+ years experience. IICRC-certified technicians serving East Melbourne's prestigious medical precinct and heritage mansions with same-day response. Trusted by 100+ Melbourne properties with 5.0-star rating.
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
                  <span>2-hour emergency response to East Melbourne</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Heritage mansion specialists</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Postcodes: 3002, Medical precinct expertise</span>
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
                Free East Melbourne Inspection Quote
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
              East Melbourne Mould Removal Specialists
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Mould & Restoration Co. provides expert mould removal East Melbourne Melbourne services in one of the city's most prestigious and historic areas. Our IICRC-certified technicians understand the unique challenges of East Melbourne's heritage mansions, medical buildings, and garden district properties, from Wellington Parade to Clarendon Street.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">East Melbourne Property Types We Service</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Heritage Mansions:</strong> Victorian and Edwardian mansions with intricate architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Medical Buildings:</strong> Specialist clinics, consulting suites, and medical facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Luxury Townhouses:</strong> Modern renovated townhouses and apartments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Garden Apartments:</strong> Properties surrounded by heritage gardens</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Professional Offices:</strong> Medical and legal professional suites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Historic Buildings:</strong> Government and institutional buildings</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">East Melbourne Landmarks We Cover</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Melbourne Cricket Ground (MCG):</strong> Surrounding premium properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Fitzroy Gardens:</strong> Properties overlooking heritage gardens</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Wellington Parade:</strong> Medical precinct and specialty clinics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Parliament House:</strong> Government precinct buildings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Clarendon Street:</strong> Historic residential terraces and mansions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Cathedral Place:</strong> Religious and heritage institutional buildings</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Common East Melbourne Mould Issues</h3>
              <p className="text-gray-700 mb-6">
                East Melbourne's unique combination of heritage architecture, prestigious medical facilities, and garden-adjacent properties creates specific mould challenges. Our emergency mould removal East Melbourne Melbourne team addresses these with heritage-appropriate solutions:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Heritage Building Issues</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Original plaster and lath moisture retention</li>
                    <li>• Cast iron guttering and downpipe leaks</li>
                    <li>• Heritage timber floor moisture</li>
                    <li>• Period fireplaces and chimney dampness</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Medical Facility Challenges</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Sterilisation equipment humidity</li>
                    <li>• Medical grade air filtration requirements</li>
                    <li>• Patient safety and contamination concerns</li>
                    <li>• Equipment room moisture control</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Garden District Factors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• High garden irrigation humidity</li>
                    <li>• Mature tree root moisture effects</li>
                    <li>• Underground basement dampness</li>
                    <li>• Heritage garden sprinkler overspray</li>
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
              Professional Mould Removal East Melbourne Melbourne Process
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center">
              Our systematic approach to mould removal East Melbourne Melbourne ensures complete elimination while preserving heritage architectural features and maintaining medical facility standards.
            </p>

            <div className="grid gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Heritage-Sensitive Assessment</h3>
                      <p className="text-gray-700 mb-4">
                        Upon receiving your call for mould removal East Melbourne Melbourne, our IICRC-certified technicians respond within 2 hours. We conduct comprehensive thermal imaging and moisture mapping with special attention to heritage architectural elements and medical facility requirements.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• 24/7 emergency response to East Melbourne (3002)</li>
                        <li>• Heritage building conservation assessment</li>
                        <li>• Medical facility contamination protocols</li>
                        <li>• Non-invasive thermal imaging for heritage walls</li>
                        <li>• Air quality testing for medical grade standards</li>
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
                      <h3 className="text-xl font-semibold mb-3">Heritage-Compliant Containment</h3>
                      <p className="text-gray-700 mb-4">
                        Professional mould removal East Melbourne Melbourne requires heritage-sensitive containment methods. We establish controlled environments that protect both occupants and historic architectural features while maintaining medical facility operations.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Heritage-appropriate containment materials</li>
                        <li>• Medical facility continuity planning</li>
                        <li>• HEPA filtration for medical grade air quality</li>
                        <li>• Minimal impact on heritage decorative elements</li>
                        <li>• Patient and staff safety protocols</li>
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
                      <h3 className="text-xl font-semibold mb-3">Conservation-Grade Remediation</h3>
                      <p className="text-gray-700 mb-4">
                        Our emergency mould removal East Melbourne Melbourne service employs conservation-appropriate techniques suitable for heritage mansions and medical facilities, ensuring both mould elimination and architectural preservation.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Gentle heritage plaster and timber treatment</li>
                        <li>• Medical facility approved antimicrobials</li>
                        <li>• Cast iron and heritage metal restoration</li>
                        <li>• Period-appropriate moisture barrier installation</li>
                        <li>• Medical equipment protection protocols</li>
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
                      <h3 className="text-xl font-semibold mb-3">Medical-Grade Verification</h3>
                      <p className="text-gray-700 mb-4">
                        Every mould removal East Melbourne Melbourne project concludes with comprehensive verification testing meeting both heritage conservation and medical facility standards, ensuring your property exceeds Australian health requirements.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Medical-grade air quality clearance testing</li>
                        <li>• Heritage building moisture verification</li>
                        <li>• Photographic documentation for insurance</li>
                        <li>• Medical facility compliance certificates</li>
                        <li>• Heritage conservation compliance reporting</li>
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
              Why Choose Mould & Restoration Co. for East Melbourne?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Heritage & Medical Expertise</h3>
                <p className="text-gray-700 mb-4">
                  With 5+ years serving East Melbourne, we understand the unique requirements of both heritage conservation and medical facility standards. Our team combines historical building expertise with modern medical-grade remediation techniques.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Heritage building conservation specialist certification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Medical facility contamination control expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Understanding of East Melbourne's garden district climate</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">IICRC Certified Excellence</h3>
                <p className="text-gray-700 mb-4">
                  Our emergency mould removal East Melbourne Melbourne technicians are IICRC certified with additional training in heritage building restoration and medical facility standards, ensuring the highest quality service.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>IICRC water damage restoration certification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Applied structural drying specialist credentials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Medical facility hygiene and safety training</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2 Hour</div>
                  <div className="text-sm text-gray-600">Emergency Response to East Melbourne</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-gray-600">Heritage Building Safe Methods</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5.0★</div>
                  <div className="text-sm text-gray-600">Rating from Medical Facilities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              East Melbourne Property Types We Service
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Heritage Mansions</h3>
                  <p className="text-gray-700 mb-4">
                    Professional mould removal East Melbourne Melbourne for Victorian and Edwardian mansions. We specialise in preserving original architectural features while eliminating mould from heritage plaster, timber, and cast iron elements.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Original plaster and lath restoration</li>
                    <li>• Heritage timber floor treatment</li>
                    <li>• Cast iron feature preservation</li>
                    <li>• Period fireplace moisture control</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Medical Facilities</h3>
                  <p className="text-gray-700 mb-4">
                    Specialised emergency mould removal East Melbourne Melbourne for medical centres, specialist clinics, and consultation suites requiring medical-grade air quality and sterile environments.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Medical-grade air filtration</li>
                    <li>• Sterilisation room humidity control</li>
                    <li>• Patient area contamination prevention</li>
                    <li>• Medical equipment protection</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Luxury Apartments</h3>
                  <p className="text-gray-700 mb-4">
                    High-end mould removal East Melbourne Melbourne for luxury apartments and townhouses, including modern renovations within heritage buildings and purpose-built luxury developments.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Luxury bathroom moisture management</li>
                    <li>• Wine cellar humidity control</li>
                    <li>• Heritage building modern conversions</li>
                    <li>• Garden-facing wall moisture protection</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Professional Offices</h3>
                  <p className="text-gray-700 mb-4">
                    Commercial mould removal East Melbourne Melbourne for legal chambers, medical consulting rooms, and professional offices requiring pristine environments for client consultations.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Legal document storage protection</li>
                    <li>• Client consultation area air quality</li>
                    <li>• Professional office HVAC systems</li>
                    <li>• Reception area humidity control</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Government Buildings</h3>
                  <p className="text-gray-700 mb-4">
                    Professional mould removal East Melbourne Melbourne for government offices, parliamentary precinct buildings, and institutional facilities requiring compliance with strict health standards.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Government security clearance protocols</li>
                    <li>• Heritage institutional building care</li>
                    <li>• Public health compliance standards</li>
                    <li>• Archival document area protection</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Garden District Properties</h3>
                  <p className="text-gray-700 mb-4">
                    Specialised emergency mould removal East Melbourne Melbourne for properties adjacent to Fitzroy Gardens and heritage garden estates, addressing unique irrigation-related moisture challenges.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Garden irrigation moisture effects</li>
                    <li>• Mature tree root moisture management</li>
                    <li>• Heritage garden wall dampness</li>
                    <li>• Underground basement waterproofing</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              East Melbourne Mould Prevention Tips
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Heritage Building Considerations</h3>
                <p className="text-gray-700 mb-4">
                  East Melbourne's heritage mansions and medical facilities require specialised prevention strategies. Our emergency mould removal East Melbourne Melbourne experience informs these heritage-appropriate recommendations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Heritage Ventilation:</strong> Upgrade ventilation without compromising architectural integrity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Original Plaster Care:</strong> Monitor lime plaster for moisture penetration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Cast Iron Maintenance:</strong> Regular inspection of heritage guttering and downpipes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Heritage Timber Protection:</strong> Monitor period floors for moisture damage</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Medical Facility Protocols</h3>
                <p className="text-gray-700 mb-4">
                  East Melbourne's medical precinct requires higher standards for air quality and contamination prevention. Our professional mould removal East Melbourne Melbourne expertise guides these protocols.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Medical-Grade Filtration:</strong> HEPA air filtration systems for patient safety</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Equipment Room Humidity:</strong> Control moisture from sterilisation equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Patient Area Monitoring:</strong> Regular air quality testing in consultation rooms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Waste Management:</strong> Proper disposal of contaminated medical materials</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-primary text-primary-foreground p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Early Warning Signs for East Melbourne Properties
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Heritage Building Signs</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Plaster efflorescence (white deposits)</li>
                    <li>• Heritage timber darkening</li>
                    <li>• Cast iron rust staining</li>
                    <li>• Period wallpaper peeling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Medical Facility Indicators</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Equipment room condensation</li>
                    <li>• Sterilisation area odours</li>
                    <li>• Patient complaint increase</li>
                    <li>• Air filtration system strain</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Garden District Issues</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Basement wall moisture</li>
                    <li>• Garden-facing room humidity</li>
                    <li>• Underground sprinkler effects</li>
                    <li>• Mature tree root moisture</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Professional Office Signs</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Document storage mustiness</li>
                    <li>• Client area air quality complaints</li>
                    <li>• Reception desk condensation</li>
                    <li>• HVAC system efficiency decline</li>
                  </ul>
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
              Need Immediate Mould Removal in East Melbourne?
            </h2>
            <p className="text-xl mb-8">
              Don't let mould compromise your East Melbourne heritage property or medical facility. Our IICRC-certified technicians provide 24/7 emergency response with 2-hour arrival guarantee. Trusted by heritage properties and medical facilities with a 5.0-star rating.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-emergency-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">24/7 Emergency Response</h3>
                  <p className="mb-4">Call now for immediate mould removal East Melbourne Melbourne assistance. Our heritage and medical specialists respond within 2 hours.</p>
                  <Button className="w-full bg-emergency-orange hover:bg-emergency-orange/90">
                    Call 1800 954 117 Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Free East Melbourne Inspection</h3>
                  <p className="mb-4">Heritage-sensitive assessment with thermal imaging. Specialised quotes for medical facilities and heritage mansions in East Melbourne.</p>
                  <Button className="w-full" variant="outline">
                    Book Free Heritage Inspection
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg mb-2">
                <strong>ABN: 47 683 089 652</strong> | Licensed & Insured | IICRC Certified | Heritage Specialists
              </p>
              <p className="text-sm opacity-90">
                Serving East Melbourne: 3002 | Medical Precinct | Fitzroy Gardens | Wellington Parade | Parliament Precinct
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};