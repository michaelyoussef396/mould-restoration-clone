import { ArrowRight, Clock, Shield, MapPin, Phone, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";

export const Carnegie = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Carnegie Mould Removal", href: "/services/mould-removal-carnegie", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Carnegie"
        title="Mould Removal Carnegie - Village Community Specialists | Mould & Restoration Co"
        description="Professional mould removal in Carnegie Melbourne. IICRC certified, 2-hour emergency response. Call 1800 954 117 for same-day Carnegie mould inspection & removal."
        canonical="/services/mould-removal-carnegie"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        serviceArea="Carnegie, Melbourne"
        address="Carnegie, Victoria, Australia"
        phone="1800 954 117"
        email="info@mouldrestoration.com.au"
        abn="47 683 089 652"
        description="Professional mould removal and inspection services in Carnegie Melbourne. IICRC certified technicians specializing in village community properties, Koornang Road precinct, and period home restorations."
      />

      <ServiceSchema
        serviceName="Mould Removal Carnegie Melbourne"
        serviceType="Mould Remediation"
        areaServed="Carnegie, Melbourne, Victoria"
        description="Emergency mould removal and inspection services for Carnegie properties including village community homes, period properties, and Koornang Road commercial buildings."
      />

      <Navigation />

      {/* Emergency Response Bar */}
      <div className="emergency-bar">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>24/7 Emergency Mould Response in Carnegie</span>
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
              Professional Mould Removal & Inspection in Carnegie, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Emergency mould removal Carnegie Melbourne specialists with 5+ years experience. IICRC-certified technicians serving Carnegie's village community properties, Koornang Road precinct, and period home renovations with same-day response. Trusted by 100+ Melbourne properties with 5.0-star rating.
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
                  <span>2-hour emergency response to Carnegie</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Village community & period home expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Postcodes: 3163, Koornang Road precinct coverage</span>
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
                Free Carnegie Inspection Quote
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
              Carnegie Mould Removal Specialists
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Mould & Restoration Co. provides expert mould removal Carnegie Melbourne services in Melbourne's charming village community. Our IICRC-certified technicians understand the unique challenges of Carnegie's period properties, Koornang Road commercial precinct, and established neighborhood character, from Carnegie Station to the local parks.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Common Carnegie Mould Issues</h3>
              <p className="text-gray-700 mb-6">
                Carnegie's combination of period architecture, village community atmosphere, and heritage building preservation creates specific mould challenges. Our emergency mould removal Carnegie Melbourne team addresses these with heritage-sensitive solutions:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Period Property Challenges</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Heritage building materials requiring specialized treatment approaches</li>
                    <li>• Period home ventilation systems needing modern moisture management</li>
                    <li>• Original building envelope moisture penetration issues</li>
                    <li>• Restored period features requiring careful mould remediation</li>
                    <li>• Victorian and Edwardian era homes with original timber framing</li>
                    <li>• Traditional plaster and lathe construction moisture absorption</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Village Community Factors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Tree-lined streets creating natural shade and moisture retention</li>
                    <li>• Community garden and park areas affecting local humidity</li>
                    <li>• Village atmosphere dense housing moisture transfer effects</li>
                    <li>• Local character preservation affecting building modification options</li>
                    <li>• Mature street tree root systems affecting property drainage</li>
                    <li>• Close proximity housing creating microclimate moisture patterns</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Koornang Road Precinct Issues</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Commercial village precinct mixed-use building challenges</li>
                    <li>• Above-shop residential properties moisture management</li>
                    <li>• Shopping village pedestrian area drainage affecting properties</li>
                    <li>• Heritage commercial buildings requiring specialized approaches</li>
                    <li>• Traditional shopfront buildings with modern retrofit challenges</li>
                    <li>• Village market and community events affecting building moisture</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Carnegie Heritage and Character Preservation</h3>
              <p className="text-gray-700 mb-6">
                Carnegie's heritage overlay and strict character preservation requirements create unique challenges for mould remediation, requiring specialized approaches that maintain architectural integrity while ensuring modern health standards.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Heritage Building Considerations</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Heritage overlay requirements affecting mould remediation methods</li>
                    <li>• Period building materials requiring conservation-grade treatment</li>
                    <li>• Original architectural features needing careful preservation during work</li>
                    <li>• Traditional construction methods affecting modern moisture management</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Character Area Protection</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Village character streetscape maintaining consistency during restoration</li>
                    <li>• Community expectations for sympathetic building conservation</li>
                    <li>• Local planning restrictions affecting external building modifications</li>
                    <li>• Neighborhood character guidelines influencing renovation approaches</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Carnegie Property Types and Heritage Considerations</h3>
              <p className="text-gray-700 mb-6">
                From Victorian cottages to Edwardian family homes and heritage commercial buildings, Carnegie's well-preserved architectural heritage requires expert mould solutions that respect historical significance while ensuring occupant health and safety.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-primary">Heritage Residential Properties</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">Victorian and Edwardian Cottages</h5>
                      <p className="text-sm text-gray-600">Original heritage cottages with traditional materials requiring conservation-grade mould remediation preserving architectural authenticity while ensuring modern safety standards.</p>
                    </div>
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">Period Family Homes</h5>
                      <p className="text-sm text-gray-600">Established heritage family homes with original features requiring family-focused mould management maintaining character while ensuring children's health and comfort.</p>
                    </div>
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">Renovated Heritage Properties</h5>
                      <p className="text-sm text-gray-600">Carefully restored period homes requiring specialized mould solutions protecting both original heritage features and modern renovation investments.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-primary">Village Commercial and Community</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">Koornang Road Heritage Shops</h5>
                      <p className="text-sm text-gray-600">Traditional shopfront buildings requiring commercial-grade mould management balancing heritage preservation with modern business operational requirements.</p>
                    </div>
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">Community and Cultural Buildings</h5>
                      <p className="text-sm text-gray-600">Village community centres and cultural facilities requiring public-use mould solutions ensuring safe community gathering spaces while respecting architectural character.</p>
                    </div>
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">Modern Village Developments</h5>
                      <p className="text-sm text-gray-600">Contemporary housing designed to complement village character requiring modern mould management systems while maintaining neighborhood architectural consistency.</p>
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
              Why Choose Mould & Restoration Co. for Carnegie?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Heritage & Village Community Expertise</h3>
                <p className="text-gray-700 mb-4">
                  With 5+ years serving Carnegie, we understand the unique requirements of period properties, heritage buildings, and village community character preservation. Our team combines heritage expertise with modern mould remediation techniques.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Period property and heritage building specialist experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Koornang Road village precinct understanding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Heritage-sensitive restoration and community character expertise</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">IICRC Certified Excellence</h3>
                <p className="text-gray-700 mb-4">
                  Our emergency mould removal Carnegie Melbourne technicians are IICRC certified with training in heritage building standards and period property requirements, ensuring comprehensive service quality for village community preservation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>IICRC water damage restoration certification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Applied structural drying for period property types</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Heritage building health and safety protocol training</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2 Hour</div>
                  <div className="text-sm text-gray-600">Emergency Response to Carnegie</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-gray-600">Heritage-Safe Treatment Methods</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5.0★</div>
                  <div className="text-sm text-gray-600">Rating from Village Community</div>
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
              Need Immediate Mould Removal in Carnegie?
            </h2>
            <p className="text-xl mb-8">
              Don't let mould compromise your Carnegie period property, heritage building, or village community home. Our IICRC-certified technicians provide 24/7 emergency response with 2-hour arrival guarantee. Trusted by heritage property owners and village community residents with a 5.0-star rating.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-emergency-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">24/7 Emergency Response</h3>
                  <p className="mb-4">Call now for immediate mould removal Carnegie Melbourne assistance. Our heritage property specialists respond within 2 hours.</p>
                  <Button className="w-full bg-emergency-orange hover:bg-emergency-orange/90">
                    Call 1800 954 117 Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Free Carnegie Inspection</h3>
                  <p className="mb-4">Comprehensive heritage assessment with thermal imaging. Specialized quotes for period properties, village homes, and Koornang Road commercial buildings.</p>
                  <Button className="w-full" variant="outline">
                    Book Free Heritage Property Inspection
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg mb-2">
                <strong>ABN: 47 683 089 652</strong> | Licensed & Insured | IICRC Certified | Heritage Property Specialists
              </p>
              <p className="text-sm opacity-90">
                Serving Carnegie: 3163 | Koornang Road | Period Properties | Village Community | Heritage Buildings
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};