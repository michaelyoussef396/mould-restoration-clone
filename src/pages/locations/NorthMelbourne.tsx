import { ArrowRight, Clock, Shield, MapPin, Phone, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";

export const NorthMelbourne = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "North Melbourne Mould Removal", href: "/services/mould-removal-north-melbourne", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="North Melbourne"
        title="Mould Removal North Melbourne - Professional Service - Same-day Available 7am-7pm | Mould & Restoration Co"
        description="North Melbourne industrial heritage & apartment living mould experts. Errol Street precinct specialists treating converted warehouses & modern apartments. Professional service. Call 1800 954 117"
        canonical="/services/mould-removal-north-melbourne"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        serviceArea="North Melbourne, Melbourne"
        address="North Melbourne, Victoria, Australia"
        phone="1800 954 117"
        email="info@mouldrestoration.com.au"
        abn="47 683 089 652"
        description="Professional mould removal and inspection services in North Melbourne Melbourne. IICRC certified technicians specialising in worker's cottages, racing precinct properties, and heritage residential buildings."
      />

      <ServiceSchema
        serviceName="Mould Removal North Melbourne Melbourne"
        serviceType="Mould Remediation"
        areaServed="North Melbourne, Melbourne, Victoria"
        description="Professional mould removal and inspection services for North Melbourne properties including worker's cottages, heritage homes, and Flemington Racecourse area buildings."
      />

      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-primary text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in North Melbourne</span>
            <Button variant="outline" size="sm" className="bg-white text-primary border-white hover:bg-emergency-orange hover:text-white">
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
              Professional Mould Removal & Inspection in North Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Professional mould removal North Melbourne Melbourne specialists with 5+ years experience. IICRC-certified technicians serving North Melbourne's historic worker's cottages and Flemington Racecourse precinct with same-day response. Trusted by 100+ Melbourne properties with 5.0-star rating.
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
                <CheckCircle className="w-5 h-5 text-success" />
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
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Same-day professional service to North Melbourne</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success" />
                  <span>Heritage cottage specialists</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Postcodes: 3051, Flemington racing precinct</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-accent-teal" />
                  <span>Insurance work welcome</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>100% satisfaction guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
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
                Free North Melbourne Inspection Quote
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
              North Melbourne Mould Removal Specialists
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Mould & Restoration Co. provides expert mould removal North Melbourne Melbourne services in one of the inner city's most characterful residential areas. Our IICRC-certified technicians understand the unique challenges of North Melbourne's heritage worker's cottages, racing precinct properties, and established residential streets from Errol Street to Flemington Road.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">North Melbourne Property Types We Service</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Worker's Cottages:</strong> Historic Victorian and Edwardian worker's cottages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Heritage Terraces:</strong> Period terraced houses and renovated heritage homes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Racing Precinct Properties:</strong> Buildings near Flemington Racecourse and racing stables</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Modern Townhouses:</strong> Contemporary residential developments and apartment blocks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Commercial Properties:</strong> Errol Street shops, cafes, and mixed-use buildings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Public Housing:</strong> Community housing and social housing properties</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">North Melbourne Landmarks We Cover</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Flemington Racecourse:</strong> Racing precinct and surrounding residential areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Errol Street:</strong> Main shopping and dining strip with heritage buildings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Arden Street Oval:</strong> North Melbourne Football Club precinct</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Flemington Road:</strong> Major thoroughfare with mixed residential and commercial</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Macaulay Road:</strong> Industrial and residential transition zone</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Hotham Hill:</strong> Elevated residential area with heritage homes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Common North Melbourne Mould Issues</h3>
              <p className="text-gray-700 mb-6">
                North Melbourne's combination of heritage worker's cottages, racing precinct properties, and older building stock creates specific mould challenges. Our professional mould removal North Melbourne Melbourne team addresses these with heritage-appropriate solutions:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Heritage Cottage Issues</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Original timber floor moisture retention</li>
                    <li>• Single-brick wall condensation</li>
                    <li>• Poor original ventilation design</li>
                    <li>• Heritage bathroom inadequate exhaust</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Racing Precinct Challenges</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Horse stable humidity effects</li>
                    <li>• Racecourse irrigation overspray</li>
                    <li>• Event-related temporary moisture</li>
                    <li>• Underground betting ring dampness</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Community Housing Factors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• High-occupancy moisture levels</li>
                    <li>• Maintenance deferral issues</li>
                    <li>• Ageing building system failures</li>
                    <li>• Inadequate bathroom ventilation</li>
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
              Professional Mould Removal North Melbourne Melbourne Process
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center">
              Our systematic approach to mould removal North Melbourne Melbourne ensures complete elimination while preserving heritage cottage character and addressing unique racing precinct challenges.
            </p>

            <div className="grid gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Heritage Cottage Assessment</h3>
                      <p className="text-gray-700 mb-4">
                        Upon receiving your call for mould removal North Melbourne Melbourne, our IICRC-certified technicians respond Same-day professional service. We conduct comprehensive thermal imaging and moisture mapping specific to worker's cottages, heritage terraces, and racing precinct properties.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Professional service line response to North Melbourne (3051)</li>
                        <li>• Heritage cottage structure assessment</li>
                        <li>• Racing precinct environmental evaluation</li>
                        <li>• Non-invasive thermal imaging for heritage walls</li>
                        <li>• Community housing safety protocols</li>
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
                      <h3 className="text-xl font-semibold mb-3">Heritage-Sensitive Containment</h3>
                      <p className="text-gray-700 mb-4">
                        Professional mould removal North Melbourne Melbourne requires careful containment methods that respect heritage architecture. We establish controlled environments suitable for occupied cottages and community housing while maintaining resident safety.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Heritage cottage-appropriate containment</li>
                        <li>• Community housing resident safety protocols</li>
                        <li>• Minimal disruption to family homes</li>
                        <li>• Racing precinct event coordination</li>
                        <li>• Affordable housing compliance standards</li>
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
                      <h3 className="text-xl font-semibold mb-3">Heritage-Appropriate Remediation</h3>
                      <p className="text-gray-700 mb-4">
                        Our professional mould removal North Melbourne Melbourne service employs heritage-appropriate techniques suitable for worker's cottages, period terraces, and community housing while ensuring thorough mould elimination.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Heritage timber and plaster preservation</li>
                        <li>• Gentle treatment for original building materials</li>
                        <li>• Community housing approved antimicrobials</li>
                        <li>• Period-appropriate moisture barrier solutions</li>
                        <li>• Racing precinct dust and contaminant control</li>
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
                      <h3 className="text-xl font-semibold mb-3">Community-Standard Verification</h3>
                      <p className="text-gray-700 mb-4">
                        Every mould removal North Melbourne Melbourne project concludes with comprehensive verification testing suitable for heritage cottages and community housing, ensuring all properties meet Australian residential health standards.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Residential air quality clearance testing</li>
                        <li>• Heritage building moisture monitoring</li>
                        <li>• Community housing health compliance</li>
                        <li>• Family-safe environment certification</li>
                        <li>• Racing precinct environmental clearance</li>
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
              Why Choose Mould & Restoration Co. for North Melbourne?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Heritage & Community Expertise</h3>
                <p className="text-gray-700 mb-4">
                  With 5+ years serving North Melbourne, we understand the unique requirements of heritage worker's cottages, racing precinct properties, and community housing. Our team combines historical building expertise with community-focused service delivery.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Heritage worker's cottage restoration specialist experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Community housing health and safety compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Racing precinct environmental challenge expertise</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">IICRC Certified Excellence</h3>
                <p className="text-gray-700 mb-4">
                  Our professional mould removal North Melbourne Melbourne technicians are IICRC certified with additional training in heritage building restoration and community housing standards, ensuring quality service for all residents.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>IICRC water damage restoration certification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Applied structural drying for heritage timbers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Community housing health protocol training</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2 Hour</div>
                  <div className="text-sm text-professional">Professional Service - Same-day Available 7am-7pm to North Melbourne</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-professional">Heritage Cottage Safe Methods</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5.0★</div>
                  <div className="text-sm text-professional">Rating from Community Housing</div>
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
              North Melbourne Property Types We Service
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Worker's Cottages</h3>
                  <p className="text-gray-700 mb-4">
                    Professional mould removal North Melbourne Melbourne for historic Victorian and Edwardian worker's cottages. We specialise in preserving original features while eliminating moisture and mould issues.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Original timber floor preservation</li>
                    <li>• Single-brick wall moisture treatment</li>
                    <li>• Heritage bathroom ventilation upgrades</li>
                    <li>• Period fireplace moisture control</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Heritage Terraces</h3>
                  <p className="text-gray-700 mb-4">
                    Specialised professional mould removal North Melbourne Melbourne for period terraced houses and renovated heritage properties requiring conservation-compliant restoration techniques.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Original plaster and lath restoration</li>
                    <li>• Shared wall moisture management</li>
                    <li>• Heritage roofline moisture protection</li>
                    <li>• Period window frame treatment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Racing Precinct Properties</h3>
                  <p className="text-gray-700 mb-4">
                    Specialised mould removal North Melbourne Melbourne for properties near Flemington Racecourse, addressing unique environmental challenges from racing activities and crowd events.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Racing crowd event moisture recovery</li>
                    <li>• Horse stable humidity management</li>
                    <li>• Racecourse irrigation spray protection</li>
                    <li>• Event-related temporary moisture damage</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Community Housing</h3>
                  <p className="text-gray-700 mb-4">
                    Professional mould removal North Melbourne Melbourne for public housing and social housing properties, ensuring healthy living environments for families and individuals.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• High-occupancy moisture management</li>
                    <li>• Affordable housing ventilation solutions</li>
                    <li>• Community safety protocol compliance</li>
                    <li>• Health department standard achievement</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Commercial Premises</h3>
                  <p className="text-gray-700 mb-4">
                    Commercial mould removal North Melbourne Melbourne for Errol Street shops, cafes, restaurants, and mixed-use buildings with street-facing retail and residential components.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Restaurant and cafe kitchen systems</li>
                    <li>• Retail display area humidity control</li>
                    <li>• Mixed-use building coordination</li>
                    <li>• Street-level commercial ventilation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Modern Developments</h3>
                  <p className="text-gray-700 mb-4">
                    Contemporary professional mould removal North Melbourne Melbourne for new townhouses, apartment blocks, and modern residential developments near heritage areas.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• New construction moisture issues</li>
                    <li>• Modern apartment building systems</li>
                    <li>• Townhouse shared wall moisture</li>
                    <li>• Contemporary HVAC maintenance</li>
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
              North Melbourne Mould Prevention Tips
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Heritage Cottage Considerations</h3>
                <p className="text-gray-700 mb-4">
                  North Melbourne's worker's cottages and heritage terraces require specialised prevention strategies. Our professional mould removal North Melbourne Melbourne experience informs these heritage-appropriate recommendations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Heritage Ventilation Upgrades:</strong> Improve airflow without compromising period character</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Single-Brick Wall Management:</strong> Monitor condensation on interior surfaces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Heritage Bathroom Solutions:</strong> Install period-appropriate exhaust systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Timber Floor Protection:</strong> Monitor original floors for moisture damage</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Community Housing Protocols</h3>
                <p className="text-gray-700 mb-4">
                  North Melbourne's community housing requires enhanced protocols for resident health and building maintenance. Our professional mould removal North Melbourne Melbourne expertise guides these protocols.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>High-Occupancy Ventilation:</strong> Enhanced airflow for family housing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Regular Maintenance Scheduling:</strong> Proactive building system checks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Resident Education Programs:</strong> Moisture awareness for tenants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Health Department Compliance:</strong> Regular air quality monitoring</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-primary text-primary-foreground p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Early Warning Signs for North Melbourne Properties
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Heritage Cottage Signs</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Original timber floor darkening</li>
                    <li>• Single-brick wall condensation</li>
                    <li>• Heritage plaster dampness</li>
                    <li>• Period window frame swelling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Racing Precinct Indicators</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Post-race event moisture spikes</li>
                    <li>• Horse stable humidity effects</li>
                    <li>• Racecourse irrigation overspray</li>
                    <li>• Event crowd condensation buildup</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Community Housing Issues</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• High-occupancy bathroom mould</li>
                    <li>• Maintenance request increases</li>
                    <li>• Resident health complaints</li>
                    <li>• Shared facility moisture problems</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Commercial Property Signs</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Restaurant kitchen condensation</li>
                    <li>• Retail space humidity complaints</li>
                    <li>• Mixed-use building moisture transfer</li>
                    <li>• Street-level dampness issues</li>
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
              Need Immediate Mould Removal in North Melbourne?
            </h2>
            <p className="text-xl mb-8">
              Don't let mould compromise your North Melbourne worker's cottage, heritage terrace, or community housing property. Our IICRC-certified technicians provide Professional service line response with 2-hour arrival guarantee. Trusted by heritage properties and community housing with a 5.0-star rating.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white text-charcoal">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">7am-7pm daily Professional Service - Same-day Available 7am-7pm</h3>
                  <p className="mb-4">Call now for immediate mould removal North Melbourne Melbourne assistance. Our heritage and community housing specialists respond Same-day professional service.</p>
                  <Button className="w-full bg-emergency-orange hover:bg-emergency-orange/90">
                    Call 1800 954 117 Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white text-charcoal">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Free North Melbourne Inspection</h3>
                  <p className="mb-4">Heritage-sensitive assessment with thermal imaging. Specialised quotes for worker's cottages, heritage terraces, and community housing.</p>
                  <Button className="w-full" variant="outline">
                    Book Free Heritage Inspection
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg mb-2">
                <strong>ABN: 47 683 089 652</strong> | Licensed & Insured | IICRC Certified | Heritage & Community Specialists
              </p>
              <p className="text-sm opacity-90">
                Serving North Melbourne: 3051 | Errol Street | Flemington Racecourse | Arden Street | Heritage Precinct
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};