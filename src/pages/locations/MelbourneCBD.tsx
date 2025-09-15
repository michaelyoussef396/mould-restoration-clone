import { ArrowRight, Clock, Shield, MapPin, Phone, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";

export const MelbourneCBD = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Melbourne CBD Mould Removal", href: "/services/mould-removal-melbourne-cbd", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Melbourne CBD"
        title="Mould Removal Melbourne CBD - Professional Service - Same-day Available 7am-7pm | Mould & Restoration Co"
        description="Melbourne CBD commercial & high-rise apartment mould experts. Business district specialists treating office buildings & luxury residential towers. Professional service. Call 1800 954 117"
        canonical="/services/mould-removal-melbourne-cbd"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        serviceArea="Melbourne CBD, Melbourne"
        address="Melbourne CBD, Victoria, Australia"
        phone="1800 954 117"
        email="info@mouldrestoration.com.au"
        abn="47 683 089 652"
        description="Professional mould removal and inspection services in Melbourne CBD. IICRC certified technicians specializing in commercial towers, apartments, and business properties."
      />

      <ServiceSchema
        serviceName="Mould Removal Melbourne CBD"
        serviceType="Mould Remediation"
        areaServed="Melbourne CBD, Melbourne, Victoria"
        description="Professional mould removal and inspection services for Melbourne CBD properties including commercial towers, high-rise apartments, and heritage buildings."
      />

      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Melbourne CBD</span>
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
              Professional Mould Removal & Inspection in Melbourne CBD
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Professional mould removal Melbourne CBD specialists with 5+ years experience. IICRC-certified technicians serving Melbourne's business district with same-day response for commercial towers, high-rise apartments, and heritage buildings. Trusted by 100+ Melbourne properties with 5.0-star rating.
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
                  <span>Same-day professional service to Melbourne CBD</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Commercial and residential expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Postcodes: 3000, 3004, 3006, 3008</span>
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
                Free CBD Inspection Quote
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
              Melbourne CBD Mould Removal Specialists
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Mould & Restoration Co. provides expert mould removal Melbourne CBD services across the heart of Australia's cultural capital. Our IICRC-certified technicians understand the unique challenges of Melbourne CBD properties, from modern commercial towers to heritage-listed buildings in the Golden Mile.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Melbourne CBD Property Types We Service</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Commercial Towers:</strong> Collins Street, Bourke Street high-rises with HVAC mould issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Luxury Apartments:</strong> Southbank towers, Eureka Tower residences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Heritage Buildings:</strong> Block Arcade, Royal Arcade historic properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Office Buildings:</strong> Legal precinct, financial district offices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Retail Spaces:</strong> Hardware Lane, Degraves Street commercial properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Student Housing:</strong> University precinct apartments and residences</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Melbourne CBD Landmarks We Cover</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Collins Street:</strong> "Paris End", financial district towers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Bourke Street Mall:</strong> Retail precinct, pedestrian zone</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Flinders Street Station:</strong> Transport hub, surrounding buildings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Federation Square:</strong> Cultural precinct, modern architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Queen Victoria Market:</strong> Historic market area properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Royal Botanic Gardens:</strong> Nearby high-humidity zone properties</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Common Melbourne CBD Mould Issues</h3>
              <p className="text-gray-700 mb-6">
                Melbourne CBD's unique urban microclimate creates specific mould challenges. Our professional mould removal Melbourne CBD team addresses these issues with precision:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">High-Rise Building Issues</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• HVAC system contamination</li>
                    <li>• Concrete cancer and moisture</li>
                    <li>• Window condensation issues</li>
                    <li>• Underground parking humidity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Heritage Building Challenges</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Poor original ventilation systems</li>
                    <li>• Rising damp in basements</li>
                    <li>• Sandstone moisture retention</li>
                    <li>• Historic bluestone foundations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Urban Climate Factors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Yarra River humidity effects</li>
                    <li>• Urban heat island moisture</li>
                    <li>• Concrete jungle condensation</li>
                    <li>• Storm water drainage issues</li>
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
              Professional Mould Removal Melbourne CBD Process
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center">
              Our systematic approach to mould removal Melbourne CBD ensures complete elimination while minimising disruption to your business or residence.
            </p>

            <div className="grid gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Professional Service - Same-day Available 7am-7pm & Assessment</h3>
                      <p className="text-gray-700 mb-4">
                        Upon receiving your call for mould removal Melbourne CBD, our IICRC-certified technicians respond Same-day professional service. We conduct comprehensive thermal imaging and moisture mapping specific to CBD building types, whether commercial towers or heritage structures.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Professional service line response to Melbourne CBD (3000, 3004, 3006, 3008)</li>
                        <li>• Commercial building access coordination</li>
                        <li>• Thermal imaging for concealed moisture detection</li>
                        <li>• Air quality testing and spore sampling</li>
                        <li>• Heritage building specialist assessment</li>
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
                      <h3 className="text-xl font-semibold mb-3">Containment & Safety Protocols</h3>
                      <p className="text-gray-700 mb-4">
                        Professional mould removal Melbourne CBD requires strict containment, especially in occupied commercial buildings. We establish negative pressure zones and implement safety protocols that comply with Victorian health regulations.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• HEPA filtration and negative pressure systems</li>
                        <li>• Commercial building occupant safety protocols</li>
                        <li>• Plastic sheeting containment barriers</li>
                        <li>• Safe access routes for CBD foot traffic</li>
                        <li>• Personal protective equipment (PPE) standards</li>
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
                      <h3 className="text-xl font-semibold mb-3">Advanced Remediation Techniques</h3>
                      <p className="text-gray-700 mb-4">
                        Our professional mould removal Melbourne CBD service employs cutting-edge remediation techniques suitable for complex CBD environments, from high-rise HVAC systems to heritage masonry restoration.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• HVAC system decontamination for commercial buildings</li>
                        <li>• Sandblasting and soda blasting for heritage structures</li>
                        <li>• Industrial-grade antimicrobial treatment</li>
                        <li>• Concrete and steel structure remediation</li>
                        <li>• HEPA vacuuming and surface cleaning</li>
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
                      <h3 className="text-xl font-semibold mb-3">Post-Treatment Verification</h3>
                      <p className="text-gray-700 mb-4">
                        Every mould removal Melbourne CBD project concludes with comprehensive verification testing and clearance certification, ensuring your property meets Australian health standards before reoccupation.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Air quality clearance testing</li>
                        <li>• Moisture level verification</li>
                        <li>• Photographic documentation of completed work</li>
                        <li>• Written clearance certificates</li>
                        <li>• Insurance compliance documentation</li>
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
              Why Choose Mould & Restoration Co. for Melbourne CBD?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Local Melbourne CBD Knowledge</h3>
                <p className="text-gray-700 mb-4">
                  With 5+ years serving Melbourne CBD, we understand the unique challenges of mould removal Melbourne CBD properties face. From Collins Street commercial towers to Hardware Lane heritage buildings, our team knows every postcode (3000, 3004, 3006, 3008) intimately.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Expertise in CBD commercial building systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Heritage building conservation experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Understanding of Melbourne's urban climate</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">IICRC Certified Excellence</h3>
                <p className="text-gray-700 mb-4">
                  Our professional mould removal Melbourne CBD technicians are IICRC certified, ensuring you receive the highest standard of professional service. We maintain strict protocols for health, safety, and restoration quality.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>IICRC certified water damage restoration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Applied structural drying specialist certification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Continuing education in latest techniques</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2 Hour</div>
                  <div className="text-sm text-gray-600">Professional Service - Same-day Available 7am-7pm to Melbourne CBD</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction Guarantee</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5.0★</div>
                  <div className="text-sm text-gray-600">Rating from 100+ Properties</div>
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
              Melbourne CBD Property Types We Service
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Commercial High-Rise</h3>
                  <p className="text-gray-700 mb-4">
                    Professional mould removal Melbourne CBD services for Collins Street, Bourke Street, and King Street commercial towers. We address HVAC contamination, concrete moisture issues, and high-occupancy building challenges.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Office building HVAC systems</li>
                    <li>• Concrete structure moisture</li>
                    <li>• Underground parking areas</li>
                    <li>• Commercial kitchen ventilation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Heritage Buildings</h3>
                  <p className="text-gray-700 mb-4">
                    Specialised professional mould removal Melbourne CBD for heritage-listed properties including Block Arcade, Royal Arcade, and historic bluestone buildings requiring conservation-compliant restoration.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Sandstone and bluestone structures</li>
                    <li>• Historic ventilation upgrades</li>
                    <li>• Rising damp solutions</li>
                    <li>• Heritage-compliant treatments</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Luxury Apartments</h3>
                  <p className="text-gray-700 mb-4">
                    High-end mould removal Melbourne CBD for Southbank towers, Eureka Tower residences, and premium apartment buildings with sophisticated climate control systems.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Ensuite bathroom ventilation</li>
                    <li>• Balcony door condensation</li>
                    <li>• Laundry humidity control</li>
                    <li>• Wine cellar moisture management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Retail & Hospitality</h3>
                  <p className="text-gray-700 mb-4">
                    Commercial mould removal Melbourne CBD for Hardware Lane restaurants, Degraves Street cafes, and Bourke Street Mall retail spaces with unique ventilation and moisture challenges.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Restaurant kitchen exhaust systems</li>
                    <li>• Basement storage areas</li>
                    <li>• Retail display humidity</li>
                    <li>• Customer area air quality</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Educational Facilities</h3>
                  <p className="text-gray-700 mb-4">
                    Professional mould removal Melbourne CBD for RMIT University buildings, student accommodation, and educational facilities requiring healthy learning environments.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Lecture hall ventilation</li>
                    <li>• Student accommodation bathrooms</li>
                    <li>• Library humidity control</li>
                    <li>• Laboratory safety standards</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Medical & Legal</h3>
                  <p className="text-gray-700 mb-4">
                    Specialised professional mould removal Melbourne CBD for Collins Street medical suites, legal chambers, and professional offices requiring pristine air quality standards.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Medical clinic air filtration</li>
                    <li>• Legal document storage protection</li>
                    <li>• Professional office environments</li>
                    <li>• Client consultation areas</li>
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
              Melbourne CBD Mould Prevention Tips
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Climate Considerations</h3>
                <p className="text-gray-700 mb-4">
                  Melbourne CBD's urban microclimate, influenced by the Yarra River and concrete urban heat island effect, creates unique moisture challenges requiring proactive prevention strategies.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Humidity Monitoring:</strong> Maintain 30-50% relative humidity in CBD properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Seasonal Awareness:</strong> Extra vigilance during Melbourne's humid summer months</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>River Proximity:</strong> Properties near Yarra River require enhanced ventilation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Urban Heat Effects:</strong> Concrete buildings trap moisture differently than suburbs</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Building-Specific Maintenance</h3>
                <p className="text-gray-700 mb-4">
                  Different Melbourne CBD building types require tailored prevention approaches. Our professional mould removal Melbourne CBD experience informs these maintenance recommendations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>HVAC Systems:</strong> Quarterly professional cleaning and inspection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Heritage Buildings:</strong> Monitor sandstone moisture penetration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>High-Rise Apartments:</strong> Check window seals and balcony drainage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Commercial Kitchens:</strong> Exhaust fan maintenance and grease trap cleaning</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-primary text-primary-foreground p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Early Warning Signs for Melbourne CBD Properties
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Visual Indicators</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Black spots on walls or ceilings</li>
                    <li>• Discolouration around air vents</li>
                    <li>• Peeling paint or wallpaper</li>
                    <li>• Staining on concrete surfaces</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Odour Detection</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Musty, earthy smells</li>
                    <li>• Damp basement odours</li>
                    <li>• Stale air in office spaces</li>
                    <li>• Unusual HVAC system smells</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Health Symptoms</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Respiratory issues in staff</li>
                    <li>• Increased allergy symptoms</li>
                    <li>• Headaches in certain areas</li>
                    <li>• Skin irritation or rashes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Environmental Changes</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Increased humidity readings</li>
                    <li>• Condensation on windows</li>
                    <li>• Water damage or leaks</li>
                    <li>• Poor air circulation areas</li>
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
              Need Immediate Mould Removal in Melbourne CBD?
            </h2>
            <p className="text-xl mb-8">
              Don't let mould compromise your Melbourne CBD property. Our IICRC-certified technicians provide Professional service line response with 2-hour arrival guarantee. Trusted by 100+ Melbourne properties with a 5.0-star rating.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">7am-7pm daily Professional Service - Same-day Available 7am-7pm</h3>
                  <p className="mb-4">Call now for immediate mould removal Melbourne CBD assistance. Our certified technicians respond Same-day professional service to all CBD postcodes.</p>
                  <Button className="w-full bg-emergency-orange hover:bg-emergency-orange/90">
                    Call 1800 954 117 Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Free Melbourne CBD Inspection</h3>
                  <p className="mb-4">Professional assessment with thermal imaging and moisture mapping. No obligation quotes for all CBD commercial and residential properties.</p>
                  <Button className="w-full" variant="outline">
                    Book Free Inspection
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg mb-2">
                <strong>ABN: 47 683 089 652</strong> | Licensed & Insured | IICRC Certified
              </p>
              <p className="text-sm opacity-90">
                Serving Melbourne CBD: 3000, 3004, 3006, 3008 | Collins St | Bourke St | Flinders St | Hardware Lane
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};