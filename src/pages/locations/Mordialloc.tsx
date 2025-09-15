import { ArrowRight, Clock, Shield, MapPin, Phone, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";

export const Mordialloc = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Mordialloc Mould Removal", href: "/services/mould-removal-mordialloc", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Mordialloc"
        title="Mould Removal Mordialloc - Creek & Beach Living Specialists | Mould & Restoration Co"
        description="Professional mould removal in Mordialloc Melbourne. IICRC certified, Same-day professional service. Call 1800 954 117 for same-day Mordialloc mould inspection & removal."
        canonical="/services/mould-removal-mordialloc"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        serviceArea="Mordialloc, Melbourne"
        address="Mordialloc, Victoria, Australia"
        phone="1800 954 117"
        email="info@mouldrestoration.com.au"
        abn="47 683 089 652"
        description="Professional mould removal and inspection services in Mordialloc Melbourne. IICRC certified technicians specializing in creek & beach living properties, Main Street commercial precinct, and waterway proximity buildings."
      />

      <ServiceSchema
        serviceName="Mould Removal Mordialloc Melbourne"
        serviceType="Mould Remediation"
        areaServed="Mordialloc, Melbourne, Victoria"
        description="Professional mould removal and inspection services for Mordialloc properties including creek homes, beach access properties, and Main Street commercial buildings."
      />

      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Mordialloc</span>
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
              Professional Mould Removal & Inspection in Mordialloc, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Professional mould removal Mordialloc Melbourne specialists with 5+ years experience. IICRC-certified technicians serving Mordialloc's creek & beach living properties, Main Street commercial precinct, and waterway proximity buildings with same-day response. Trusted by 100+ Melbourne properties with 5.0-star rating.
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
                  <span>Same-day professional service to Mordialloc</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Creek & beach living waterway expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Postcodes: 3195, Main Street precinct coverage</span>
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
                Free Mordialloc Inspection Quote
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
              Mordialloc Mould Removal Specialists
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Mould & Restoration Co. provides expert mould removal Mordialloc Melbourne services in Melbourne's unique creek and beach living community. Our IICRC-certified technicians understand the challenges of Mordialloc Creek proximity, beach access properties, and Main Street commercial precinct, from the creek mouth to Mordialloc Station.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Common Mordialloc Mould Issues</h3>
              <p className="text-gray-700 mb-6">
                Mordialloc's unique combination of creek proximity, beach access, and commercial precinct creates specific waterway-related mould challenges requiring specialized creek and beach living solutions.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Creek Proximity Challenges</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Mordialloc Creek high humidity effects on nearby properties</li>
                    <li>• Waterway overflow and flood impact moisture issues</li>
                    <li>• Creek mouth estuary salt spray and moisture combination</li>
                    <li>• Tidal variation affecting creek-adjacent building foundations</li>
                    <li>• Creek bank erosion affecting nearby property drainage systems</li>
                    <li>• Marine vegetation decomposition creating moisture hotspots</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Beach Access Factors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Beach proximity salt air penetration and corrosion</li>
                    <li>• Sand and moisture tracking from beach activities</li>
                    <li>• Coastal weather pattern exposure intensification</li>
                    <li>• Beach house seasonal occupancy ventilation gaps</li>
                    <li>• Sea breeze moisture carrying from Port Phillip Bay</li>
                    <li>• Coastal storm events increasing building moisture exposure</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Main Street Precinct Issues</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Commercial precinct mixed-use ventilation challenges</li>
                    <li>• Restaurant and retail high humidity from operations</li>
                    <li>• Above-shop residential moisture transfer problems</li>
                    <li>• Main Street drainage and stormwater management effects</li>
                    <li>• Heritage commercial building moisture penetration issues</li>
                    <li>• High pedestrian traffic creating condensation patterns</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Mordialloc Dual Waterway Environment</h3>
              <p className="text-gray-700 mb-6">
                Located where Mordialloc Creek meets Port Phillip Bay, this unique dual waterway environment creates complex moisture challenges requiring specialized understanding of both freshwater and marine influences on property conditions.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Creek to Bay Gradient Effects</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Transitional salinity levels affecting different building materials differently</li>
                    <li>• Freshwater creek influence in upper Mordialloc areas versus marine exposure closer to bay</li>
                    <li>• Tidal flow patterns bringing marine moisture inland through creek system</li>
                    <li>• Creek delta sediment creating varying soil moisture conditions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Seasonal Waterway Variations</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Summer low creek flow concentrating salinity and affecting nearby foundations</li>
                    <li>• Autumn storm water increasing both creek and bay moisture impact</li>
                    <li>• Winter bay storm activity creating sustained coastal moisture exposure</li>
                    <li>• Spring creek flow changes affecting waterway adjacent property moisture patterns</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Mordialloc Property Styles and Mould Considerations</h3>
              <p className="text-gray-700 mb-6">
                From beach cottages and creek homes to Main Street heritage buildings and modern waterfront developments, Mordialloc's diverse architectural landscape requires tailored mould solutions addressing both aesthetic preservation and environmental protection.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-primary">Waterway Adjacent Properties</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">Creek Front Homes</h5>
                      <p className="text-sm text-gray-600">Properties with direct creek access requiring specialized moisture management addressing freshwater humidity, periodic flooding, and unique drainage challenges.</p>
                    </div>
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">Beach Access Cottages</h5>
                      <p className="text-sm text-gray-600">Traditional beach houses often with elevated designs requiring saltwater corrosion protection and sand infiltration moisture management.</p>
                    </div>
                    <div className="border-l-4 border-blue-200 pl-4">
                      <h5 className="font-medium text-gray-800">Modern Waterfront Developments</h5>
                      <p className="text-sm text-gray-600">Contemporary apartments and townhouses with glass facades requiring advanced moisture control systems addressing both aesthetic and structural integrity.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-primary">Established Community Areas</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">Main Street Heritage Buildings</h5>
                      <p className="text-sm text-gray-600">Historic commercial and residential buildings requiring heritage-sensitive mould solutions preserving architectural character while ensuring occupant health and safety.</p>
                    </div>
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">Established Family Neighbourhoods</h5>
                      <p className="text-sm text-gray-600">Mid-century homes in established streets requiring family-focused mould management addressing children's health while maintaining comfortable living environments.</p>
                    </div>
                    <div className="border-l-4 border-green-200 pl-4">
                      <h5 className="font-medium text-gray-800">Parkland Adjacent Properties</h5>
                      <p className="text-sm text-gray-600">Homes near waterway reserves and parkland requiring consideration of natural vegetation moisture, seasonal flooding, and wildlife habitat protection protocols.</p>
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
              Why Choose Mould & Restoration Co. for Mordialloc?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Creek & Beach Environment Expertise</h3>
                <p className="text-gray-700 mb-4">
                  With 5+ years serving Mordialloc, we understand the unique dual waterway challenges of creek proximity and beach access properties. Our team specializes in creek estuary and beachside environmental moisture management.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Creek proximity and waterway moisture specialist experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Beach access property salt air environmental understanding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Main Street commercial precinct mixed-use expertise</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">IICRC Certified Excellence</h3>
                <p className="text-gray-700 mb-4">
                  Our professional mould removal Mordialloc Melbourne technicians are IICRC certified with specialized training in waterway environment properties and creek-beach dual exposure challenges.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>IICRC water damage restoration certification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Applied structural drying for waterway environment properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Creek and coastal dual environment protocol training</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2 Hour</div>
                  <div className="text-sm text-gray-600">Professional Service - Same-day Available 7am-7pm to Mordialloc</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-gray-600">Waterway-Safe Treatment Methods</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5.0★</div>
                  <div className="text-sm text-gray-600">Rating from Creek & Beach Properties</div>
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
              Need Immediate Mould Removal in Mordialloc?
            </h2>
            <p className="text-xl mb-8">
              Don't let mould compromise your Mordialloc creek home, beach property, or Main Street business. Our IICRC-certified technicians provide Professional service line response with 2-hour arrival guarantee. Trusted by waterway communities and beachside properties with a 5.0-star rating.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">7am-7pm daily Professional Service - Same-day Available 7am-7pm</h3>
                  <p className="mb-4">Call now for immediate mould removal Mordialloc Melbourne assistance. Our waterway environment specialists respond Same-day professional service.</p>
                  <Button className="w-full bg-emergency-orange hover:bg-emergency-orange/90">
                    Call 1800 954 117 Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Free Mordialloc Inspection</h3>
                  <p className="mb-4">Comprehensive waterway assessment with thermal imaging. Specialized quotes for creek properties, beach homes, and Main Street commercial buildings.</p>
                  <Button className="w-full" variant="outline">
                    Book Free Creek & Beach Environment Inspection
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg mb-2">
                <strong>ABN: 47 683 089 652</strong> | Licensed & Insured | IICRC Certified | Creek & Beach Specialists
              </p>
              <p className="text-sm opacity-90">
                Serving Mordialloc: 3195 | Main Street | Mordialloc Creek | Beach Access | Station Precinct
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};