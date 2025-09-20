import { ArrowRight, Clock, Shield, MapPin, Phone, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";
import { StrategicLocationLinks } from "@/components/seo/InternalLinking";

export const SouthMelbourne = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "South Melbourne Mould Removal", href: "/services/mould-removal-south-melbourne", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="South Melbourne"
        title="Mould Removal South Melbourne - Professional Service - Same-day Available 7am-7pm | Mould & Restoration Co"
        description="South Melbourne market district & heritage precinct mould experts. Clarendon Street specialists treating period terraces & converted warehouse apartments. Professional service. Call 1800 954 117"
        canonical="/services/mould-removal-south-melbourne"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        serviceArea="South Melbourne, Melbourne"
        address="South Melbourne, Victoria, Australia"
        phone="1800 954 117"
        email="info@mouldrestoration.com.au"
        abn="47 683 089 652"
        description="Professional mould removal and inspection services in South Melbourne Melbourne. IICRC certified technicians specialising in mixed housing, market area properties, and Albert Park precinct buildings."
      />

      <ServiceSchema
        serviceName="Mould Removal South Melbourne Melbourne"
        serviceType="Mould Remediation"
        areaServed="South Melbourne, Melbourne, Victoria"
        description="Professional mould removal and inspection services for South Melbourne properties including heritage terraces, modern apartments, and Albert Park area buildings."
      />

      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-primary text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in South Melbourne</span>
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
              Professional Mould Removal & Inspection in South Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Professional mould removal South Melbourne Melbourne specialists with 5+ years experience. IICRC-certified technicians serving South Melbourne's diverse mixed housing, historic market area, and Albert Park precinct with same-day response. Trusted by 100+ Melbourne properties with 5.0-star rating.
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
                  <span>Same-day professional service to South Melbourne</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success" />
                  <span>Mixed residential & commercial expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Postcodes: 3205, Albert Park precinct coverage</span>
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
                Free South Melbourne Inspection Quote
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
              South Melbourne Mould Removal Specialists
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Mould & Restoration Co. provides expert mould removal South Melbourne Melbourne services in one of inner Melbourne's most diverse and dynamic neighbourhoods. Our IICRC-certified technicians understand the unique challenges of South Melbourne's mixed housing stock, historic market area, and proximity to Albert Park, from Clarendon Street to Park Street.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">South Melbourne Property Types We Service</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Heritage Terraces:</strong> Victorian and Edwardian terraced houses and row houses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Modern Apartments:</strong> Contemporary residential developments and apartment complexes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Market Area Properties:</strong> Buildings near South Melbourne Market with unique challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Commercial Buildings:</strong> Clarendon Street shops, restaurants, and mixed-use developments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Albert Park Precinct:</strong> Properties near parklands and recreational facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Warehouse Conversions:</strong> Industrial heritage buildings converted to residential use</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">South Melbourne Landmarks We Cover</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>South Melbourne Market:</strong> Historic market and surrounding commercial precinct</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Albert Park:</strong> Parkland precinct and adjacent residential properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Clarendon Street:</strong> Main shopping and dining strip with heritage buildings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Park Street:</strong> Heritage residential precinct with period homes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Kings Way:</strong> Major arterial with mixed residential and commercial</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Emerald Hill:</strong> Elevated heritage residential area with Victorian homes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Common South Melbourne Mould Issues</h3>
              <p className="text-gray-700 mb-6">
                South Melbourne's combination of heritage housing, market proximity, and parkland adjacency creates specific mould challenges. Our professional mould removal South Melbourne Melbourne team addresses these with location-appropriate solutions:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Heritage Housing Issues</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Original lime plaster moisture retention</li>
                    <li>• Heritage brick mortar deterioration</li>
                    <li>• Period window condensation problems</li>
                    <li>• Original roofline drainage issues</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Market Area Challenges</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Commercial food storage humidity</li>
                    <li>• Market cleaning water overspray</li>
                    <li>• High foot traffic condensation</li>
                    <li>• Mixed-use building moisture transfer</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Albert Park Proximity Factors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Parkland irrigation humidity effects</li>
                    <li>• Lake proximity moisture levels</li>
                    <li>• Sports facility shower and change room humidity</li>
                    <li>• Ground level moisture from park drainage</li>
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
              Professional Mould Removal South Melbourne Melbourne Process
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center">
              Our systematic approach to mould removal South Melbourne Melbourne ensures complete elimination while addressing the unique challenges of mixed housing, market proximity, and parkland environments.
            </p>

            <div className="grid gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Comprehensive Property Assessment</h3>
                      <p className="text-gray-700 mb-4">
                        Upon receiving your call for mould removal South Melbourne Melbourne, our IICRC-certified technicians respond Same-day professional service. We conduct comprehensive thermal imaging and moisture mapping specific to heritage terraces, modern apartments, and market-adjacent properties.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Professional service line response to South Melbourne (3205)</li>
                        <li>• Heritage housing structure assessment</li>
                        <li>• Market area environmental evaluation</li>
                        <li>• Albert Park proximity moisture mapping</li>
                        <li>• Mixed-use building contamination assessment</li>
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
                      <h3 className="text-xl font-semibold mb-3">Multi-Environment Containment</h3>
                      <p className="text-gray-700 mb-4">
                        Professional mould removal South Melbourne Melbourne requires adaptable containment methods for diverse building types. We establish controlled environments suitable for heritage housing, commercial premises, and modern apartments while maintaining community access.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Heritage building-appropriate containment</li>
                        <li>• Market area business continuity planning</li>
                        <li>• Residential neighbourhood safety protocols</li>
                        <li>• Minimal disruption to Albert Park access</li>
                        <li>• Commercial tenant coordination</li>
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
                      <h3 className="text-xl font-semibold mb-3">Adaptive Remediation Techniques</h3>
                      <p className="text-gray-700 mb-4">
                        Our professional mould removal South Melbourne Melbourne service employs versatile techniques suitable for heritage terraces, modern developments, and market-area properties while preserving architectural character and community function.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Heritage brick and mortar restoration</li>
                        <li>• Modern apartment HVAC decontamination</li>
                        <li>• Market-appropriate antimicrobial treatments</li>
                        <li>• Parkland-adjacent moisture barrier systems</li>
                        <li>• Commercial-residential mixed building treatment</li>
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
                        Every mould removal South Melbourne Melbourne project concludes with comprehensive verification testing suitable for diverse property types, ensuring heritage homes, commercial premises, and modern apartments meet Australian residential and commercial health standards.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Multi-property type air quality clearance</li>
                        <li>• Heritage building moisture verification</li>
                        <li>• Commercial premises health compliance</li>
                        <li>• Residential community safety certificates</li>
                        <li>• Market area environmental clearance</li>
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
              Why Choose Mould & Restoration Co. for South Melbourne?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Mixed Community Expertise</h3>
                <p className="text-gray-700 mb-4">
                  With 5+ years serving South Melbourne, we understand the unique requirements of heritage housing, market area properties, and parkland-adjacent buildings. Our team combines historical preservation with modern residential and commercial restoration techniques.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Heritage terrace restoration specialist experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Market area commercial building expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Albert Park proximity environmental understanding</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">IICRC Certified Excellence</h3>
                <p className="text-gray-700 mb-4">
                  Our professional mould removal South Melbourne Melbourne technicians are IICRC certified with additional training in heritage building restoration and commercial property standards, ensuring comprehensive service quality for all property types.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>IICRC water damage restoration certification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Applied structural drying for mixed building types</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Commercial and residential health protocol training</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2 Hour</div>
                  <div className="text-sm text-professional">Professional Service - Same-day Available 7am-7pm to South Melbourne</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-professional">Mixed Community Safe Methods</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5.0★</div>
                  <div className="text-sm text-professional">Rating from Heritage & Modern Properties</div>
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
              South Melbourne Property Types We Service
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Heritage Terraces</h3>
                  <p className="text-gray-700 mb-4">
                    Professional mould removal South Melbourne Melbourne for Victorian and Edwardian terraced houses. We specialise in preserving original architectural features while eliminating moisture and mould issues.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Original lime plaster restoration</li>
                    <li>• Heritage brick repointing</li>
                    <li>• Period window frame preservation</li>
                    <li>• Original timber floor protection</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Modern Apartments</h3>
                  <p className="text-gray-700 mb-4">
                    Contemporary professional mould removal South Melbourne Melbourne for new residential developments, apartment complexes, and modern townhouses with sophisticated building systems.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Modern HVAC system decontamination</li>
                    <li>• Apartment bathroom ventilation upgrades</li>
                    <li>• Balcony door condensation solutions</li>
                    <li>• Underground parking moisture control</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Market Area Properties</h3>
                  <p className="text-gray-700 mb-4">
                    Specialised mould removal South Melbourne Melbourne for buildings near South Melbourne Market, addressing unique challenges from food storage, cleaning activities, and high foot traffic.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Food storage area dehumidification</li>
                    <li>• Commercial cleaning water management</li>
                    <li>• High traffic condensation control</li>
                    <li>• Market vendor space ventilation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Commercial Buildings</h3>
                  <p className="text-gray-700 mb-4">
                    Commercial mould removal South Melbourne Melbourne for Clarendon Street businesses, restaurants, retail spaces, and mixed-use developments with diverse ventilation requirements.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Restaurant kitchen exhaust systems</li>
                    <li>• Retail space humidity management</li>
                    <li>• Office building HVAC cleaning</li>
                    <li>• Mixed-use tenant coordination</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Albert Park Precinct</h3>
                  <p className="text-gray-700 mb-4">
                    Professional professional mould removal South Melbourne Melbourne for properties adjacent to Albert Park, addressing unique moisture challenges from parkland irrigation and recreational facilities.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Parkland irrigation moisture protection</li>
                    <li>• Sports facility humidity management</li>
                    <li>• Lake proximity moisture control</li>
                    <li>• Ground-level drainage solutions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Warehouse Conversions</h3>
                  <p className="text-gray-700 mb-4">
                    Specialised mould removal South Melbourne Melbourne for converted industrial buildings and warehouse lofts, preserving industrial character while ensuring healthy living environments.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Industrial heritage brick treatment</li>
                    <li>• High ceiling ventilation solutions</li>
                    <li>• Concrete floor moisture barriers</li>
                    <li>• Steel structure preservation</li>
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
              South Melbourne Mould Prevention Tips
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Heritage & Mixed Housing Considerations</h3>
                <p className="text-gray-700 mb-4">
                  South Melbourne's diverse housing stock requires tailored prevention strategies. Our professional mould removal South Melbourne Melbourne experience informs these property-specific recommendations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Heritage Ventilation Balance:</strong> Improve airflow while preserving period character</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Modern Apartment Systems:</strong> Regular HVAC maintenance and humidity monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Market Proximity Protection:</strong> Enhanced sealing against external moisture sources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Mixed-Use Building Coordination:</strong> Cross-tenant moisture management protocols</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Albert Park Proximity Protocols</h3>
                <p className="text-gray-700 mb-4">
                  South Melbourne's proximity to Albert Park and market areas requires enhanced protocols for environmental moisture management. Our professional mould removal South Melbourne Melbourne expertise guides these protocols.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Parkland Humidity Management:</strong> Monitor irrigation and lake proximity effects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Ground Level Protection:</strong> Enhanced drainage and moisture barriers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Seasonal Monitoring:</strong> Increased vigilance during high-humidity periods</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Community Education:</strong> Neighbourhood moisture awareness programs</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-primary text-primary-foreground p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Early Warning Signs for South Melbourne Properties
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Heritage Housing Signs</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Lime plaster white deposits (efflorescence)</li>
                    <li>• Heritage brick mortar crumbling</li>
                    <li>• Period window condensation</li>
                    <li>• Original timber floor moisture stains</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Market Area Indicators</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Food storage area musty odours</li>
                    <li>• Commercial cleaning moisture buildup</li>
                    <li>• High foot traffic condensation</li>
                    <li>• Vendor space ventilation strain</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Albert Park Proximity Issues</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Ground level wall dampness</li>
                    <li>• Parkland-facing window condensation</li>
                    <li>• Sports facility humidity effects</li>
                    <li>• Lake proximity moisture increases</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Modern Development Signs</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• HVAC system efficiency decline</li>
                    <li>• Apartment bathroom exhaust strain</li>
                    <li>• Balcony door frame condensation</li>
                    <li>• Underground parking humidity</li>
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
              Need Immediate Mould Removal in South Melbourne?
            </h2>
            <p className="text-xl mb-8">
              Don't let mould compromise your South Melbourne heritage terrace, modern apartment, or commercial property. Our IICRC-certified technicians provide Professional service line response with 2-hour arrival guarantee. Trusted by heritage properties, market area businesses, and modern developments with a 5.0-star rating.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white text-charcoal">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">7am-7pm daily Professional Service - Same-day Available 7am-7pm</h3>
                  <p className="mb-4">Call now for immediate mould removal South Melbourne Melbourne assistance. Our heritage and modern property specialists respond Same-day professional service.</p>
                  <Button className="w-full bg-emergency-orange hover:bg-emergency-orange/90">
                    Call 1800 954 117 Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white text-charcoal">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Free South Melbourne Inspection</h3>
                  <p className="mb-4">Comprehensive assessment with thermal imaging. Specialised quotes for heritage terraces, modern apartments, market properties, and Albert Park precinct buildings.</p>
                  <Button className="w-full" variant="outline">
                    Book Free Mixed Property Inspection
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg mb-2">
                <strong>ABN: 47 683 089 652</strong> | Licensed & Insured | IICRC Certified | Heritage & Modern Specialists
              </p>
              <p className="text-sm opacity-90">
                Serving South Melbourne: 3205 | Clarendon Street | South Melbourne Market | Albert Park | Emerald Hill
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Internal Linking for Location to Service SEO */}
      <StrategicLocationLinks
        currentLocation="South Melbourne"
        businessType="mould removal"
        serviceTypes={["inspection", "removal", "remediation"]}
      />
    </div>
  );
};