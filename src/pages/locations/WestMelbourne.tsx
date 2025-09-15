import { ArrowRight, Clock, Shield, MapPin, Phone, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";

export const WestMelbourne = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "West Melbourne Mould Removal", href: "/services/mould-removal-west-melbourne", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="West Melbourne"
        title="Mould Removal West Melbourne - Emergency Response | Mould & Restoration Co"
        description="Professional mould removal in West Melbourne Melbourne. IICRC certified, 2-hour emergency response. Call 1800 954 117 for same-day West Melbourne mould inspection & removal."
        canonical="/services/mould-removal-west-melbourne"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        serviceArea="West Melbourne, Melbourne"
        address="West Melbourne, Victoria, Australia"
        phone="1800 954 117"
        email="info@mouldrestoration.com.au"
        abn="47 683 089 652"
        description="Professional mould removal and inspection services in West Melbourne Melbourne. IICRC certified technicians specializing in mixed residential, industrial heritage, and university area properties."
      />

      <ServiceSchema
        serviceName="Mould Removal West Melbourne Melbourne"
        serviceType="Mould Remediation"
        areaServed="West Melbourne, Melbourne, Victoria"
        description="Emergency mould removal and inspection services for West Melbourne properties including converted warehouses, university buildings, and residential developments."
      />

      <Navigation />

      {/* Emergency Response Bar */}
      <div className="emergency-bar">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>24/7 Emergency Mould Response in West Melbourne</span>
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
              Professional Mould Removal & Inspection in West Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Emergency mould removal West Melbourne Melbourne specialists with 5+ years experience. IICRC-certified technicians serving West Melbourne's diverse mixed residential and industrial heritage area with same-day response. Trusted by 100+ Melbourne properties with 5.0-star rating.
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
                  <span>2-hour emergency response to West Melbourne</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Mixed residential & industrial expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Postcodes: 3003, University area coverage</span>
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
                Free West Melbourne Inspection Quote
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
              West Melbourne Mould Removal Specialists
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Mould & Restoration Co. provides expert mould removal West Melbourne Melbourne services in one of the city's most diverse and rapidly evolving areas. Our IICRC-certified technicians understand the unique challenges of West Melbourne's mixed residential and industrial heritage properties, from Dudley Street warehouse conversions to university precinct student housing.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">West Melbourne Property Types We Service</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Warehouse Conversions:</strong> Industrial heritage buildings converted to loft apartments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>University Housing:</strong> Student accommodation and university faculty buildings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Modern Apartments:</strong> New residential developments and townhouse complexes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Commercial Spaces:</strong> Mixed-use developments with retail and office components</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Industrial Buildings:</strong> Active and converted industrial facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Worker's Cottages:</strong> Historic residential properties and renovated heritage homes</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">West Melbourne Landmarks We Cover</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Victoria University:</strong> Campus buildings and surrounding student areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Dudley Street:</strong> Warehouse conversion precinct and loft apartments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Spencer Street:</strong> Mixed residential and commercial developments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Adderley Street:</strong> Industrial heritage and residential conversions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Hawke Street:</strong> University precinct and student accommodation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Victoria Market:</strong> Proximity to Melbourne's historic market area</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Common West Melbourne Mould Issues</h3>
              <p className="text-gray-700 mb-6">
                West Melbourne's unique mix of converted industrial buildings, university facilities, and modern developments creates specific mould challenges. Our emergency mould removal West Melbourne Melbourne team addresses these with industry-appropriate solutions:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Industrial Conversion Issues</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Concrete floor moisture wicking</li>
                    <li>• Original brick wall condensation</li>
                    <li>• High ceiling ventilation challenges</li>
                    <li>• Steel beam condensation problems</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">University Area Challenges</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Student housing high occupancy humidity</li>
                    <li>• Shared facility moisture management</li>
                    <li>• Laboratory and workshop ventilation</li>
                    <li>• Dormitory bathroom condensation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Mixed Development Factors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Commercial kitchen exhaust systems</li>
                    <li>• Retail space humidity control</li>
                    <li>• Underground parking moisture</li>
                    <li>• New construction settlement issues</li>
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
              Professional Mould Removal West Melbourne Melbourne Process
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center">
              Our systematic approach to mould removal West Melbourne Melbourne ensures complete elimination while accommodating the unique challenges of converted industrial spaces and university environments.
            </p>

            <div className="grid gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Industrial Heritage Assessment</h3>
                      <p className="text-gray-700 mb-4">
                        Upon receiving your call for mould removal West Melbourne Melbourne, our IICRC-certified technicians respond within 2 hours. We conduct comprehensive thermal imaging and moisture mapping specific to converted industrial buildings, university facilities, and mixed-use developments.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• 24/7 emergency response to West Melbourne (3003)</li>
                        <li>• Industrial building structure assessment</li>
                        <li>• University facility safety protocols</li>
                        <li>• Thermal imaging for concrete and brick structures</li>
                        <li>• Air quality testing for high-occupancy buildings</li>
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
                      <h3 className="text-xl font-semibold mb-3">Multi-Use Space Containment</h3>
                      <p className="text-gray-700 mb-4">
                        Professional mould removal West Melbourne Melbourne requires versatile containment methods for diverse building types. We establish controlled environments suitable for everything from warehouse lofts to university dormitories while maintaining facility operations.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Industrial-scale containment systems</li>
                        <li>• University facility continuity planning</li>
                        <li>• Student accommodation safety protocols</li>
                        <li>• Minimal disruption to mixed-use developments</li>
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
                      <h3 className="text-xl font-semibold mb-3">Industrial-Grade Remediation</h3>
                      <p className="text-gray-700 mb-4">
                        Our emergency mould removal West Melbourne Melbourne service employs industrial-strength techniques suitable for converted warehouses, concrete structures, and high-occupancy university buildings while preserving architectural character.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Concrete and brick structure treatment</li>
                        <li>• Steel beam and column decontamination</li>
                        <li>• University-approved antimicrobial solutions</li>
                        <li>• High-volume HEPA air filtration</li>
                        <li>• Industrial moisture barrier installation</li>
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
                      <h3 className="text-xl font-semibold mb-3">Multi-Facility Verification</h3>
                      <p className="text-gray-700 mb-4">
                        Every mould removal West Melbourne Melbourne project concludes with comprehensive verification testing suitable for diverse property types, ensuring industrial conversions, university buildings, and residential developments meet Australian health standards.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Multi-zone air quality clearance testing</li>
                        <li>• University health compliance verification</li>
                        <li>• Industrial building moisture monitoring</li>
                        <li>• Mixed-use facility safety certificates</li>
                        <li>• Student accommodation health clearance</li>
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
              Why Choose Mould & Restoration Co. for West Melbourne?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Industrial & University Expertise</h3>
                <p className="text-gray-700 mb-4">
                  With 5+ years serving West Melbourne, we understand the unique requirements of converted industrial buildings, university facilities, and mixed-use developments. Our team combines industrial restoration expertise with educational facility safety standards.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Industrial building conversion specialist experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>University facility health and safety compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Mixed-use development coordination expertise</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">IICRC Certified Excellence</h3>
                <p className="text-gray-700 mb-4">
                  Our emergency mould removal West Melbourne Melbourne technicians are IICRC certified with additional training in industrial building restoration and educational facility standards, ensuring comprehensive service quality.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>IICRC water damage restoration certification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Applied structural drying for concrete structures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>University health and safety protocol training</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2 Hour</div>
                  <div className="text-sm text-gray-600">Emergency Response to West Melbourne</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-gray-600">University Safety Compliant</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5.0★</div>
                  <div className="text-sm text-gray-600">Rating from Mixed-Use Properties</div>
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
              West Melbourne Property Types We Service
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Warehouse Lofts</h3>
                  <p className="text-gray-700 mb-4">
                    Professional mould removal West Melbourne Melbourne for converted warehouse loft apartments. We specialise in treating exposed brick, concrete floors, and high ceilings while preserving industrial character.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Exposed brick wall treatment</li>
                    <li>• Concrete floor moisture control</li>
                    <li>• High ceiling ventilation solutions</li>
                    <li>• Steel beam preservation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">University Buildings</h3>
                  <p className="text-gray-700 mb-4">
                    Specialised emergency mould removal West Melbourne Melbourne for Victoria University buildings, student accommodation, and educational facilities requiring health-compliant environments.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Student dormitory moisture management</li>
                    <li>• Lecture hall air quality control</li>
                    <li>• Laboratory ventilation systems</li>
                    <li>• Shared facility hygiene standards</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Modern Apartments</h3>
                  <p className="text-gray-700 mb-4">
                    Contemporary mould removal West Melbourne Melbourne for new residential developments, townhouses, and apartment complexes with modern building systems and moisture challenges.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• New construction settlement issues</li>
                    <li>• Modern HVAC system cleaning</li>
                    <li>• Balcony and terrace moisture</li>
                    <li>• Underground parking humidity</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Mixed-Use Developments</h3>
                  <p className="text-gray-700 mb-4">
                    Commercial mould removal West Melbourne Melbourne for mixed-use buildings combining residential, retail, and office spaces with complex ventilation and moisture management requirements.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Multi-tenant building coordination</li>
                    <li>• Commercial kitchen exhaust systems</li>
                    <li>• Retail space humidity control</li>
                    <li>• Office area air quality</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Industrial Facilities</h3>
                  <p className="text-gray-700 mb-4">
                    Professional mould removal West Melbourne Melbourne for active industrial buildings, manufacturing facilities, and warehouse operations requiring minimal disruption during remediation.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Production facility continuity</li>
                    <li>• Industrial ventilation systems</li>
                    <li>• Manufacturing equipment protection</li>
                    <li>• Worker safety protocols</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Heritage Cottages</h3>
                  <p className="text-gray-700 mb-4">
                    Specialised emergency mould removal West Melbourne Melbourne for heritage worker's cottages and renovated period homes requiring preservation of original architectural features.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Original timber floor preservation</li>
                    <li>• Heritage brick and mortar care</li>
                    <li>• Period window frame treatment</li>
                    <li>• Chimney and fireplace moisture</li>
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
              West Melbourne Mould Prevention Tips
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Industrial Building Considerations</h3>
                <p className="text-gray-700 mb-4">
                  West Melbourne's converted industrial buildings and warehouse lofts require specialised prevention strategies. Our emergency mould removal West Melbourne Melbourne experience informs these industrial-specific recommendations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Concrete Floor Care:</strong> Install moisture barriers and monitor concrete sweating</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>High Ceiling Ventilation:</strong> Upgrade air circulation for warehouse-style spaces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Exposed Brick Maintenance:</strong> Seal and monitor heritage brick walls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Steel Beam Protection:</strong> Insulate and treat steel structural elements</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">University Area Protocols</h3>
                <p className="text-gray-700 mb-4">
                  West Melbourne's university precinct requires enhanced protocols for student accommodation and educational facilities. Our professional mould removal West Melbourne Melbourne expertise guides these protocols.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>High-Occupancy Management:</strong> Enhanced ventilation for student housing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Shared Facility Hygiene:</strong> Regular maintenance of communal areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Laboratory Air Quality:</strong> Specialised ventilation for research facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Student Education:</strong> Moisture awareness programs for residents</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-primary text-primary-foreground p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Early Warning Signs for West Melbourne Properties
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Industrial Building Signs</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Concrete floor discolouration</li>
                    <li>• Steel beam rust staining</li>
                    <li>• Exposed brick efflorescence</li>
                    <li>• High ceiling condensation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">University Area Indicators</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Dormitory bathroom condensation</li>
                    <li>• Shared space musty odours</li>
                    <li>• Laboratory ventilation strain</li>
                    <li>• Student health complaints</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Mixed-Use Development Issues</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Commercial kitchen moisture</li>
                    <li>• Retail space humidity</li>
                    <li>• Underground parking dampness</li>
                    <li>• Multi-tenant odour transfer</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Modern Building Signs</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• New construction settlement</li>
                    <li>• HVAC system inefficiency</li>
                    <li>• Balcony door condensation</li>
                    <li>• Apartment bathroom humidity</li>
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
              Need Immediate Mould Removal in West Melbourne?
            </h2>
            <p className="text-xl mb-8">
              Don't let mould compromise your West Melbourne warehouse loft, university facility, or mixed-use development. Our IICRC-certified technicians provide 24/7 emergency response with 2-hour arrival guarantee. Trusted by industrial conversions and educational facilities with a 5.0-star rating.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-emergency-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">24/7 Emergency Response</h3>
                  <p className="mb-4">Call now for immediate mould removal West Melbourne Melbourne assistance. Our industrial and university specialists respond within 2 hours.</p>
                  <Button className="w-full bg-emergency-orange hover:bg-emergency-orange/90">
                    Call 1800 954 117 Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Free West Melbourne Inspection</h3>
                  <p className="mb-4">Industrial-specific assessment with thermal imaging. Specialised quotes for warehouse conversions, university buildings, and mixed developments.</p>
                  <Button className="w-full" variant="outline">
                    Book Free Industrial Inspection
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg mb-2">
                <strong>ABN: 47 683 089 652</strong> | Licensed & Insured | IICRC Certified | Industrial Specialists
              </p>
              <p className="text-sm opacity-90">
                Serving West Melbourne: 3003 | Victoria University | Dudley Street | Spencer Street | Industrial Precinct
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};