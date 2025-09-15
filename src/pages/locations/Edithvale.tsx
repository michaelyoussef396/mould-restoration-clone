import { ArrowRight, Clock, Shield, MapPin, Phone, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";

export const Edithvale = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Edithvale Mould Removal", href: "/services/mould-removal-edithvale", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Edithvale"
        title="Mould Removal Edithvale - Beach Community Specialists | Mould & Restoration Co"
        description="Professional mould removal in Edithvale Melbourne. IICRC certified, Same-day professional service. Call 1800 954 117 for same-day Edithvale mould inspection & removal."
        canonical="/services/mould-removal-edithvale"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        serviceArea="Edithvale, Melbourne"
        address="Edithvale, Victoria, Australia"
        phone="1800 954 117"
        email="info@mouldrestoration.com.au"
        abn="47 683 089 652"
        description="Professional mould removal and inspection services in Edithvale Melbourne. IICRC certified technicians specializing in beach community living, residential coastal properties, and Edithvale Beach proximity buildings."
      />

      <ServiceSchema
        serviceName="Mould Removal Edithvale Melbourne"
        serviceType="Mould Remediation"
        areaServed="Edithvale, Melbourne, Victoria"
        description="Professional mould removal and inspection services for Edithvale properties including beach community homes, coastal residential properties, and beachside living environments."
      />

      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Edithvale</span>
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
              Professional Mould Removal & Inspection in Edithvale, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Professional mould removal Edithvale Melbourne specialists with 5+ years experience. IICRC-certified technicians serving Edithvale's beach community properties, coastal residential homes, and beachside living environments with same-day response. Trusted by 100+ Melbourne properties with 5.0-star rating.
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
                  <span>Same-day professional service to Edithvale</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Beach community & coastal living expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Postcodes: 3196, beachside coverage</span>
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
                Free Edithvale Inspection Quote
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
              Edithvale Mould Removal Specialists
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Mould & Restoration Co. provides expert mould removal Edithvale Melbourne services in Melbourne's cherished beachside suburb. Our IICRC-certified technicians understand the unique challenges of Edithvale's coastal environment, beach community properties, and salt air exposure, from Edithvale Beach to the Wetlands Conservation Area. Located 27km southeast of Melbourne CBD along the Nepean Highway corridor, Edithvale presents distinctive mould challenges requiring specialized coastal expertise.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Common Edithvale Mould Issues</h3>
              <p className="text-gray-700 mb-6">
                Edithvale's combination of coastal proximity, beach community living, and wetlands environment creates specific mould challenges. Our professional mould removal Edithvale Melbourne team addresses these with coastal-specific solutions:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Coastal Property Challenges</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Salt air corrosion affecting building envelope integrity</li>
                    <li>• Sea spray moisture penetration in beachfront properties</li>
                    <li>• Coastal wind-driven rain impacting building exteriors</li>
                    <li>• Beach proximity humidity levels year-round</li>
                    <li>• Marine environment accelerating material degradation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Wetlands Proximity Factors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Edithvale Wetlands Conservation Area humidity effects</li>
                    <li>• Natural wetland ecosystem moisture migration</li>
                    <li>• Seasonal water table fluctuations affecting foundations</li>
                    <li>• Protected wetlands drainage restrictions impacting properties</li>
                    <li>• Bird sanctuary area creating unique environmental conditions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Beach Community Issues</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Beach lifestyle sand and moisture tracking indoors</li>
                    <li>• Nepean Highway traffic corridor drainage concerns</li>
                    <li>• Frankston railway line proximity vibration effects</li>
                    <li>• Beach box and boat storage area moisture accumulation</li>
                    <li>• Seasonal beach tourism impacting local infrastructure</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Melbourne Climate Impact on Edithvale Properties</h3>
              <p className="text-gray-700 mb-6">
                Edithvale's beachside location experiences unique microclimate conditions within greater Melbourne's temperate oceanic climate. The suburb faces specific seasonal challenges:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Summer Conditions (December-February)</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• High humidity from Port Phillip Bay sea breezes</li>
                    <li>• Beach activity increasing indoor moisture from wet swimwear</li>
                    <li>• Air conditioning condensation in coastal properties</li>
                    <li>• Salt crystallization damage during dry periods</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Winter Conditions (June-August)</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Coastal storms driving moisture into buildings</li>
                    <li>• Reduced ventilation in beach homes during cold months</li>
                    <li>• Wetlands fog creating persistent dampness</li>
                    <li>• Indoor heating creating condensation on cold surfaces</li>
                  </ul>
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
              Why Choose Mould & Restoration Co. for Edithvale?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Coastal Environment Expertise</h3>
                <p className="text-gray-700 mb-4">
                  With 5+ years serving Edithvale and bayside Melbourne, we understand the unique requirements of coastal properties, wetlands proximity, and beach community living. Our team combines marine environment knowledge with advanced mould remediation techniques specifically adapted for salt air conditions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Specialized coastal property mould treatment protocols</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Salt-resistant treatment solutions for beachside homes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Wetlands microclimate moisture management expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Understanding of Kingston Council building requirements</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">IICRC Certified Excellence</h3>
                <p className="text-gray-700 mb-4">
                  Our professional mould removal Edithvale Melbourne technicians are IICRC certified with additional training in coastal environment challenges and marine atmosphere effects on building materials. We apply international best practices adapted for Australian coastal conditions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>IICRC water damage restoration certification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Applied structural drying for coastal property types</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Specialized training in salt damage remediation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Beach community health and safety protocols</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Local Edithvale Landmarks We Service</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Key Locations</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Properties near Edithvale Beach and foreshore</li>
                    <li>• Homes surrounding Edithvale Wetlands Conservation Area</li>
                    <li>• Residences along Nepean Highway corridor</li>
                    <li>• Properties near Edithvale Railway Station</li>
                    <li>• Edithvale Recreation Reserve vicinity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Property Types</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Beachfront and beach-proximity homes</li>
                    <li>• 1960s-1970s beach community houses</li>
                    <li>• Modern coastal townhouse developments</li>
                    <li>• Wetlands-adjacent properties</li>
                    <li>• Nepean Highway commercial properties</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2 Hour</div>
                  <div className="text-sm text-gray-600">Professional Service - Same-day Available 7am-7pm to Edithvale</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-gray-600">Coastal-Safe Treatment Methods</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5.0★</div>
                  <div className="text-sm text-gray-600">Rating from Beach Community</div>
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
              Need Immediate Mould Removal in Edithvale?
            </h2>
            <p className="text-xl mb-8">
              Don't let mould compromise your Edithvale beach community home or coastal property. Our IICRC-certified technicians provide Professional service line response with 2-hour arrival guarantee. Trusted by beach communities and coastal families with a 5.0-star rating.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">7am-7pm daily Professional Service - Same-day Available 7am-7pm</h3>
                  <p className="mb-4">Call now for immediate mould removal Edithvale Melbourne assistance. Our beach community specialists respond Same-day professional service.</p>
                  <Button className="w-full bg-emergency-orange hover:bg-emergency-orange/90">
                    Call 1800 954 117 Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Free Edithvale Inspection</h3>
                  <p className="mb-4">Comprehensive beach community assessment with thermal imaging. Specialized quotes for coastal homes and beachside living properties.</p>
                  <Button className="w-full" variant="outline">
                    Book Free Beach Community Inspection
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg mb-2">
                <strong>ABN: 47 683 089 652</strong> | Licensed & Insured | IICRC Certified | Beach Community Specialists
              </p>
              <p className="text-sm opacity-90">
                Serving Edithvale: 3196 | Beach Community Living | Coastal Properties | Beachside Homes
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};