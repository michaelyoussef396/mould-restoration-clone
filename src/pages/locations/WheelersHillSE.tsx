import { ArrowRight, Clock, Shield, MapPin, Phone, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";

export const WheelersHillSE = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Wheelers Hill Mould Removal", href: "/services/mould-removal-wheelers-hill-se", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Wheelers Hill"
        title="Mould Removal Wheelers Hill - Hillside Estate Specialists | Mould & Restoration Co"
        description="Wheelers Hill SE established residential & parkland mould specialists. Family suburb experts treating quality homes & mature neighbourhood properties. Professional service. Call 1800 954 117"
        canonical="/services/mould-removal-wheelers-hill-se"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        serviceArea="Wheelers Hill, Melbourne"
        address="Wheelers Hill, Victoria, Australia"
        phone="1800 954 117"
        email="info@mouldrestoration.com.au"
        abn="47 683 089 652"
        description="Professional mould removal and inspection services in Wheelers Hill Melbourne. IICRC certified technicians specialising in hillside estate properties, modern family homes, and elevated residential developments."
      />

      <ServiceSchema
        serviceName="Mould Removal Wheelers Hill Melbourne"
        serviceType="Mould Remediation"
        areaServed="Wheelers Hill, Melbourne, Victoria"
        description="Professional mould removal and inspection services for Wheelers Hill properties including hillside estates, modern family homes, and elevated residential developments."
      />

      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-primary text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Wheelers Hill</span>
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
              Professional Mould Removal & Inspection in Wheelers Hill, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Professional mould removal Wheelers Hill Melbourne specialists with 5+ years experience. IICRC-certified technicians serving Wheelers Hill's hillside estate properties, modern family homes, and elevated residential developments with same-day response. Trusted by 100+ Melbourne properties with 5.0-star rating.
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
                  <span>Same-day professional service to Wheelers Hill</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success" />
                  <span>Hillside estate & elevated property expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Postcodes: 3150, elevated residential coverage</span>
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
                Free Wheelers Hill Inspection Quote
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
              Wheelers Hill Mould Removal Specialists
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Mould & Restoration Co. provides expert mould removal Wheelers Hill Melbourne services in Melbourne's prestigious hillside community. Our IICRC-certified technicians understand the unique challenges of Wheelers Hill's elevated properties, modern estate homes, and hillside environmental factors, from Brandon Park to the elevated residential developments.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Common Wheelers Hill Mould Issues</h3>
              <p className="text-gray-700 mb-6">
                Wheelers Hill's combination of elevated terrain, modern estate development, and hillside weather exposure creates specific mould challenges. Our professional mould removal Wheelers Hill Melbourne team addresses these with elevation-focused solutions:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Elevated Property Challenges</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Hillside wind and weather exposure affecting building envelope</li>
                    <li>• Elevated foundation drainage requiring specialised management</li>
                    <li>• Slope-related water runoff and foundation moisture issues</li>
                    <li>• Elevated property ventilation challenges from wind patterns</li>
                    <li>• Hillside construction soil stability affecting foundation moisture</li>
                    <li>• Multi-level home moisture transfer between elevated levels</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Modern Estate Factors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Contemporary home design HVAC system optimisation needs</li>
                    <li>• Modern estate landscaping irrigation affecting properties</li>
                    <li>• Family estate home intensive usage patterns</li>
                    <li>• New development settling affecting moisture control systems</li>
                    <li>• Estate swimming pools and water features requiring humidity management</li>
                    <li>• Contemporary building materials requiring specific treatment approaches</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Hillside Environmental Issues</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Natural hillside vegetation affecting property humidity</li>
                    <li>• Elevated microclimate weather pattern effects</li>
                    <li>• Hillside stormwater management impacting foundation areas</li>
                    <li>• Tree coverage and natural shade affecting moisture retention</li>
                    <li>• Elevated position bushfire risk affecting ventilation design</li>
                    <li>• Natural spring water affecting hillside property foundations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-columbia p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Wheelers Hill Elevated Living Environment</h3>
              <p className="text-gray-700 mb-6">
                Positioned on one of Melbourne's highest residential areas, Wheelers Hill presents unique mould challenges related to elevated positioning, hillside weather patterns, and modern estate living requirements demanding specialised environmental understanding.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Hillside Climate Effects</h4>
                  <ul className="space-y-2 text-sm text-professional">
                    <li>• Elevated position creating unique wind patterns affecting building ventilation</li>
                    <li>• Hillside temperature variations causing condensation challenges</li>
                    <li>• Natural bushland proximity affecting moisture and air quality</li>
                    <li>• Elevated storm water runoff requiring specialised drainage solutions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Modern Estate Living</h4>
                  <ul className="space-y-2 text-sm text-professional">
                    <li>• Large family homes with complex HVAC systems requiring optimisation</li>
                    <li>• Multi-level house designs creating varied moisture zones</li>
                    <li>• Entertainment areas and family spaces requiring specialised humidity control</li>
                    <li>• Modern architectural designs requiring contemporary moisture management</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Wheelers Hill Property Types and Elevation Solutions</h3>
              <p className="text-gray-700 mb-6">
                From contemporary family estates to luxury hillside homes and modern developments, Wheelers Hill's elevated residential landscape requires specialised mould solutions addressing both hillside environmental challenges and modern family living requirements.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-primary">Hillside Estate Properties</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">Contemporary Hillside Estates</h5>
                      <p className="text-sm text-professional">Modern family estates built into hillside terrain requiring specialised moisture management addressing slope drainage, elevation effects, and contemporary living needs.</p>
                    </div>
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">Multi-Level Family Homes</h5>
                      <p className="text-sm text-professional">Split-level and multi-storey homes requiring comprehensive moisture control addressing different elevation zones and varying environmental exposure levels.</p>
                    </div>
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">Luxury Hillside Residences</h5>
                      <p className="text-sm text-professional">Premium properties with extensive entertaining areas requiring advanced moisture management protecting both architectural investment and family comfort.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-primary">Modern Family Developments</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">Estate Living Communities</h5>
                      <p className="text-sm text-professional">Modern family communities requiring moisture management addressing shared environmental challenges and contemporary building standards.</p>
                    </div>
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">Executive Family Homes</h5>
                      <p className="text-sm text-professional">Large family residences with home offices and entertainment areas requiring professional-grade moisture control suitable for business and family use.</p>
                    </div>
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">Sustainable Hill Properties</h5>
                      <p className="text-sm text-professional">Environmentally conscious homes requiring mould solutions compatible with sustainable building practices and energy-efficient design features.</p>
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
              Why Choose Mould & Restoration Co. for Wheelers Hill?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Hillside Estate Expertise</h3>
                <p className="text-gray-700 mb-4">
                  With 5+ years serving Wheelers Hill, we understand the unique requirements of elevated properties, modern estate homes, and hillside environmental challenges. Our team combines elevation expertise with contemporary building knowledge for comprehensive service.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Elevated property and modern estate home specialist experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Hillside environmental and weather pattern understanding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Contemporary building and family estate expertise</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">IICRC Certified Excellence</h3>
                <p className="text-gray-700 mb-4">
                  Our professional mould removal Wheelers Hill Melbourne technicians are IICRC certified with training in elevated property standards and modern building requirements, ensuring comprehensive service quality for hillside communities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>IICRC water damage restoration certification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Applied structural drying for elevated property types</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Modern estate health and safety protocol training</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2 Hour</div>
                  <div className="text-sm text-professional">Professional Service - Same-day Available 7am-7pm to Wheelers Hill</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-professional">Estate-Safe Treatment Methods</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5.0★</div>
                  <div className="text-sm text-professional">Rating from Hillside Families</div>
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
              Need Immediate Mould Removal in Wheelers Hill?
            </h2>
            <p className="text-xl mb-8">
              Don't let mould compromise your Wheelers Hill estate home, elevated property, or modern family residence. Our IICRC-certified technicians provide Professional service line response with 2-hour arrival guarantee. Trusted by hillside communities and estate families with a 5.0-star rating.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white text-charcoal">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">7am-7pm daily Professional Service - Same-day Available 7am-7pm</h3>
                  <p className="mb-4">Call now for immediate mould removal Wheelers Hill Melbourne assistance. Our hillside estate specialists respond Same-day professional service.</p>
                  <Button className="w-full bg-emergency-orange hover:bg-emergency-orange/90">
                    Call 1800 954 117 Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white text-charcoal">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Free Wheelers Hill Inspection</h3>
                  <p className="mb-4">Comprehensive elevated property assessment with thermal imaging. Specialized quotes for estate homes, hillside properties, and modern developments.</p>
                  <Button className="w-full" variant="outline">
                    Book Free Hillside Estate Inspection
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg mb-2">
                <strong>ABN: 47 683 089 652</strong> | Licensed & Insured | IICRC Certified | Hillside Estate Specialists
              </p>
              <p className="text-sm opacity-90">
                Serving Wheelers Hill: 3150 | Elevated Properties | Modern Estates | Hillside Developments | Family Communities
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};