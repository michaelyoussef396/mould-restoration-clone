import { ArrowRight, Clock, Shield, MapPin, Phone, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";

export const HoppersCrossing = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Hoppers Crossing Mould Removal", href: "/services/mould-removal-hoppers-crossing", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Hoppers Crossing"
        title="Mould Removal Hoppers Crossing - Growth Corridor Specialists | Mould & Restoration Co"
        description="Professional mould removal in Hoppers Crossing Melbourne. IICRC certified, Same-day professional service. Call 1800 954 117 for same-day Hoppers Crossing mould inspection & removal."
        canonical="/services/mould-removal-hoppers-crossing"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        serviceArea="Hoppers Crossing, Melbourne"
        address="Hoppers Crossing, Victoria, Australia"
        phone="1800 954 117"
        email="info@mouldrestoration.com.au"
        abn="47 683 089 652"
        description="Professional mould removal and inspection services in Hoppers Crossing Melbourne. IICRC certified technicians specializing in new estate developments, growth corridor properties, and modern family homes."
      />

      <ServiceSchema
        serviceName="Mould Removal Hoppers Crossing Melbourne"
        serviceType="Mould Remediation"
        areaServed="Hoppers Crossing, Melbourne, Victoria"
        description="Emergency mould removal and inspection services for Hoppers Crossing properties including new estates, modern family homes, and growth corridor developments."
      />

      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Hoppers Crossing</span>
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
              Professional Mould Removal & Inspection in Hoppers Crossing, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Emergency mould removal Hoppers Crossing Melbourne specialists with 5+ years experience. IICRC-certified technicians serving Hoppers Crossing's new estate developments, modern family homes, and growth corridor properties with same-day response. Trusted by 100+ Melbourne properties with 5.0-star rating.
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
                  <span>Same-day professional service to Hoppers Crossing</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>New estate & growth corridor expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Postcodes: 3029, Pacific Werribee vicinity coverage</span>
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
                Free Hoppers Crossing Inspection Quote
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
              Hoppers Crossing Mould Removal Specialists
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Mould & Restoration Co. provides expert mould removal Hoppers Crossing Melbourne services in Melbourne's rapidly growing western corridor. Our IICRC-certified technicians understand the unique challenges of Hoppers Crossing's new estate developments, modern construction standards, and growth area infrastructure, from Pacific Werribee to the expanding residential precincts.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Common Hoppers Crossing Mould Issues</h3>
              <p className="text-gray-700 mb-6">
                Hoppers Crossing's combination of new estate development, modern construction practices, and rapid growth infrastructure creates specific mould challenges. Our emergency mould removal Hoppers Crossing Melbourne team addresses these with growth corridor solutions:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">New Estate Development Challenges</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• New construction settling affecting building moisture systems</li>
                    <li>• Estate development landscaping irrigation affecting properties</li>
                    <li>• Modern building materials requiring proper moisture management</li>
                    <li>• New home warranty period moisture issue identification</li>
                    <li>• Estate infrastructure development affecting local drainage patterns</li>
                    <li>• New family home intensive usage affecting ventilation systems</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Growth Corridor Infrastructure Factors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Rapid development stormwater management capacity challenges</li>
                    <li>• New infrastructure settlement affecting nearby property drainage</li>
                    <li>• Growth area service connection affecting building moisture</li>
                    <li>• Pacific Werribee vicinity development creating localized effects</li>
                    <li>• Transport infrastructure development affecting air circulation</li>
                    <li>• New shopping and community facility drainage affecting area moisture</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Modern Construction Issues</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Contemporary building standards requiring optimal moisture control</li>
                    <li>• Energy-efficient home design ventilation optimization needs</li>
                    <li>• Modern family home high-performance HVAC systems</li>
                    <li>• New construction material moisture protection requirements</li>
                    <li>• Open plan living design moisture distribution patterns</li>
                    <li>• Contemporary outdoor entertaining area moisture management</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Hoppers Crossing Growth Corridor Living</h3>
              <p className="text-gray-700 mb-6">
                Located in Melbourne's fastest-growing western corridor, Hoppers Crossing presents unique mould challenges related to new development, modern building standards, and the transition from rural to urban infrastructure requiring specialized growth area expertise.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">New Development Environment</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• New estate landscaping and irrigation creating localized humidity patterns</li>
                    <li>• Modern construction standards requiring contemporary moisture management</li>
                    <li>• Growth area infrastructure affecting local environmental conditions</li>
                    <li>• New family settlement patterns creating varied moisture usage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Modern Family Living Patterns</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Young family demographics creating specific moisture management needs</li>
                    <li>• Modern home entertainment and lifestyle requiring humidity control</li>
                    <li>• New community facilities and amenities affecting local moisture</li>
                    <li>• Growth corridor lifestyle changes affecting building usage patterns</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Hoppers Crossing Property Types and Modern Solutions</h3>
              <p className="text-gray-700 mb-6">
                From contemporary estate homes to modern townhouse developments and new family communities, Hoppers Crossing's new development landscape requires advanced mould solutions addressing both modern construction standards and young family living requirements.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-primary">New Estate Properties</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">Contemporary Family Estates</h5>
                      <p className="text-sm text-gray-600">Modern new estates requiring advanced moisture management systems addressing contemporary building standards and young family living with energy efficiency priorities.</p>
                    </div>
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">First Home Buyer Developments</h5>
                      <p className="text-sm text-gray-600">New developments popular with first home buyers requiring cost-effective moisture management suitable for young families establishing their first home with modern amenities.</p>
                    </div>
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">Master-Planned Community Homes</h5>
                      <p className="text-sm text-gray-600">Comprehensive estate developments requiring moisture management addressing shared community facilities, estate landscaping, and modern family lifestyle integration.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-primary">Growth Corridor Housing</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">Modern Townhouse Developments</h5>
                      <p className="text-sm text-gray-600">Contemporary townhouse communities requiring shared wall moisture management and modern family living solutions suitable for growth corridor demographics.</p>
                    </div>
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">Family Investment Properties</h5>
                      <p className="text-sm text-gray-600">New investment properties requiring low-maintenance moisture solutions suitable for rental families while maintaining property value in growth corridor markets.</p>
                    </div>
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">Modern Sustainable Homes</h5>
                      <p className="text-sm text-gray-600">Energy-efficient new homes requiring moisture management compatible with sustainable building practices and modern environmental standards.</p>
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
              Why Choose Mould & Restoration Co. for Hoppers Crossing?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Growth Corridor & New Estate Expertise</h3>
                <p className="text-gray-700 mb-4">
                  With 5+ years serving Hoppers Crossing, we understand the unique challenges of new developments, modern construction standards, and young family living patterns. Our team specializes in growth corridor moisture management solutions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>New estate development and modern construction specialist experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Growth corridor infrastructure and environmental understanding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Young family and first home buyer moisture management expertise</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">IICRC Certified Excellence</h3>
                <p className="text-gray-700 mb-4">
                  Our emergency mould removal Hoppers Crossing Melbourne technicians are IICRC certified with specialized training in modern construction standards and new development moisture management.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>IICRC water damage restoration certification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Applied structural drying for new and modern properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Modern family home and new development protocol training</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2 Hour</div>
                  <div className="text-sm text-gray-600">Professional Service - Same-day Available 7am-7pm to Hoppers Crossing</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-gray-600">New Home Safe Treatment Methods</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5.0★</div>
                  <div className="text-sm text-gray-600">Rating from Growth Corridor Families</div>
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
              Need Immediate Mould Removal in Hoppers Crossing?
            </h2>
            <p className="text-xl mb-8">
              Don't let mould compromise your Hoppers Crossing new home, estate property, or family investment. Our IICRC-certified technicians provide Professional service hotline (7am-7pm) response with 2-hour arrival guarantee. Trusted by growth corridor families and new development communities with a 5.0-star rating.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">24/7 Professional Service - Same-day Available 7am-7pm</h3>
                  <p className="mb-4">Call now for immediate mould removal Hoppers Crossing Melbourne assistance. Our growth corridor specialists respond Same-day professional service.</p>
                  <Button className="w-full bg-emergency-orange hover:bg-emergency-orange/90">
                    Call 1800 954 117 Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Free Hoppers Crossing Inspection</h3>
                  <p className="mb-4">Comprehensive new home assessment with thermal imaging. Specialized quotes for estate properties, modern homes, and growth corridor developments.</p>
                  <Button className="w-full" variant="outline">
                    Book Free New Estate Property Inspection
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg mb-2">
                <strong>ABN: 47 683 089 652</strong> | Licensed & Insured | IICRC Certified | Growth Corridor Specialists
              </p>
              <p className="text-sm opacity-90">
                Serving Hoppers Crossing: 3029 | Pacific Werribee | New Estates | Growth Corridor | Modern Developments
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};