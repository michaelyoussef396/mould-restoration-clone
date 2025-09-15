import { ArrowRight, Clock, Shield, MapPin, Phone, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";

export const Clayton = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Clayton Mould Removal", href: "/services/mould-removal-clayton", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Clayton"
        title="Mould Removal Clayton - University Precinct Specialists | Mould & Restoration Co"
        description="Professional mould removal in Clayton Melbourne. IICRC certified, 2-hour emergency response. Call 1800 954 117 for same-day Clayton mould inspection & removal."
        canonical="/services/mould-removal-clayton"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        serviceArea="Clayton, Melbourne"
        address="Clayton, Victoria, Australia"
        phone="1800 954 117"
        email="info@mouldrestoration.com.au"
        abn="47 683 089 652"
        description="Professional mould removal and inspection services in Clayton Melbourne. IICRC certified technicians specializing in university precinct properties, student accommodation, and research facility buildings."
      />

      <ServiceSchema
        serviceName="Mould Removal Clayton Melbourne"
        serviceType="Mould Remediation"
        areaServed="Clayton, Melbourne, Victoria"
        description="Emergency mould removal and inspection services for Clayton properties including university buildings, student accommodation, research facilities, and surrounding residential developments."
      />

      <Navigation />

      {/* Emergency Response Bar */}
      <div className="emergency-bar">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>24/7 Emergency Mould Response in Clayton</span>
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
              Professional Mould Removal & Inspection in Clayton, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Emergency mould removal Clayton Melbourne specialists with 5+ years experience. IICRC-certified technicians serving Clayton's university precinct properties, student accommodation, and research facilities with same-day response. Trusted by 100+ Melbourne properties with 5.0-star rating.
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
                  <span>2-hour emergency response to Clayton</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>University precinct & student accommodation expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Postcodes: 3168, Monash University vicinity coverage</span>
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
                Free Clayton Inspection Quote
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
              Clayton Mould Removal Specialists
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Mould & Restoration Co. provides expert mould removal Clayton Melbourne services in Melbourne's premier university precinct. Our IICRC-certified technicians understand the unique challenges of Clayton's educational facilities, student accommodation, and research buildings, from Monash University to the surrounding residential developments.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Common Clayton Mould Issues</h3>
              <p className="text-gray-700 mb-6">
                Clayton's combination of university facilities, high-density student living, and research environments creates specific mould challenges. Our emergency mould removal Clayton Melbourne team addresses these with education-sector expertise:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">University Precinct Challenges</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• High-occupancy lecture halls and teaching spaces moisture buildup</li>
                    <li>• Laboratory and research facility climate control system issues</li>
                    <li>• University building HVAC system maintenance variations</li>
                    <li>• Educational facility intensive usage creating humidity challenges</li>
                    <li>• Library and study space poor air circulation problems</li>
                    <li>• Auditorium and conference facility ventilation inconsistencies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Student Accommodation Factors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• High-density student housing moisture accumulation</li>
                    <li>• Shared bathroom and kitchen facilities intensive usage</li>
                    <li>• Student lifestyle patterns affecting ventilation practices</li>
                    <li>• Residential college dormitory humidity management challenges</li>
                    <li>• Common area laundry facilities steam and moisture issues</li>
                    <li>• Multi-storey accommodation building moisture transfer problems</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Research Facility Issues</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Laboratory controlled environment system moisture problems</li>
                    <li>• Research facility specialized HVAC requirements</li>
                    <li>• Scientific equipment climate control affecting building moisture</li>
                    <li>• Clean room and sterile environment humidity control challenges</li>
                    <li>• Chemical storage areas moisture management complications</li>
                    <li>• Research animal housing facility ventilation moisture concerns</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Clayton Climate and Seasonal Challenges</h3>
              <p className="text-gray-700 mb-6">
                Clayton experiences unique climate challenges due to its position in Melbourne's southeastern growth corridor and proximity to educational facilities with varying occupancy patterns throughout the academic year.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Seasonal Academic Patterns</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Summer semester break periods with reduced ventilation maintenance</li>
                    <li>• Autumn high-occupancy return creating moisture spikes in buildings</li>
                    <li>• Winter heating system usage affecting university building humidity levels</li>
                    <li>• Spring preparation periods and facility deep cleaning moisture challenges</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Environmental Factors</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Higher density development affecting local microclimate patterns</li>
                    <li>• Large campus building complexes creating wind tunnel moisture effects</li>
                    <li>• Educational precinct traffic increasing localised air quality challenges</li>
                    <li>• Research facility emissions requiring specialized environmental controls</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Clayton Property Types and Mould Challenges</h3>
              <p className="text-gray-700 mb-6">
                From heritage university buildings to modern student accommodation and research facilities, Clayton's diverse property portfolio requires specialized mould removal approaches tailored to each building type and usage pattern.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-primary">Educational and Research Buildings</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">Historic University Buildings</h5>
                      <p className="text-sm text-gray-600">Heritage structures with traditional ventilation systems require careful mould management preserving architectural integrity while ensuring modern health standards.</p>
                    </div>
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">Modern Research Facilities</h5>
                      <p className="text-sm text-gray-600">State-of-the-art laboratories and research centres with complex HVAC systems demanding precise moisture control for equipment protection and research integrity.</p>
                    </div>
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">Student Services Buildings</h5>
                      <p className="text-sm text-gray-600">High-traffic facilities including cafeterias, sports centres, and administration buildings requiring intensive moisture management protocols.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-primary">Residential and Commercial Properties</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">Student Accommodation Complexes</h5>
                      <p className="text-sm text-gray-600">Purpose-built student housing with shared facilities requiring specialized moisture control addressing high occupancy density and varying lifestyle patterns.</p>
                    </div>
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">Mixed-Use Developments</h5>
                      <p className="text-sm text-gray-600">Modern apartment complexes combining retail, office, and residential spaces near campus requiring comprehensive moisture management across different usage zones.</p>
                    </div>
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">Established Family Homes</h5>
                      <p className="text-sm text-gray-600">Traditional suburban properties in established Clayton neighbourhoods requiring family-focused mould solutions maintaining home comfort and children's health.</p>
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
              Why Choose Mould & Restoration Co. for Clayton?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">University Precinct Expertise</h3>
                <p className="text-gray-700 mb-4">
                  With 5+ years serving Clayton, we understand the unique requirements of educational facilities, student accommodation, and research environments. Our team combines educational sector expertise with technical precision for comprehensive campus service.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>University building and student accommodation specialist experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Monash University precinct environmental understanding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Research facility and laboratory environment expertise</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">IICRC Certified Excellence</h3>
                <p className="text-gray-700 mb-4">
                  Our emergency mould removal Clayton Melbourne technicians are IICRC certified with training in educational facility standards and research environment requirements, ensuring comprehensive service quality for academic communities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>IICRC water damage restoration certification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Applied structural drying for university property types</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Educational facility health and safety protocol training</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2 Hour</div>
                  <div className="text-sm text-gray-600">Emergency Response to Clayton</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-gray-600">Education-Safe Treatment Methods</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5.0★</div>
                  <div className="text-sm text-gray-600">Rating from University Community</div>
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
              Need Immediate Mould Removal in Clayton?
            </h2>
            <p className="text-xl mb-8">
              Don't let mould compromise your Clayton university building, student accommodation, or research facility. Our IICRC-certified technicians provide 24/7 emergency response with 2-hour arrival guarantee. Trusted by educational facilities, student communities, and research institutions with a 5.0-star rating.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-emergency-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">24/7 Emergency Response</h3>
                  <p className="mb-4">Call now for immediate mould removal Clayton Melbourne assistance. Our university precinct specialists respond within 2 hours.</p>
                  <Button className="w-full bg-emergency-orange hover:bg-emergency-orange/90">
                    Call 1800 954 117 Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Free Clayton Inspection</h3>
                  <p className="mb-4">Comprehensive educational facility assessment with thermal imaging. Specialized quotes for university buildings, student accommodation, and research facilities.</p>
                  <Button className="w-full" variant="outline">
                    Book Free University Precinct Inspection
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg mb-2">
                <strong>ABN: 47 683 089 652</strong> | Licensed & Insured | IICRC Certified | University Precinct Specialists
              </p>
              <p className="text-sm opacity-90">
                Serving Clayton: 3168 | Monash University | Student Accommodation | Research Facilities | Educational Buildings
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};