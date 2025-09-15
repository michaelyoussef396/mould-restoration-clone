import { ArrowRight, Clock, Shield, MapPin, Phone, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";

export const Sandringham = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Sandringham Mould Removal", href: "/services/mould-removal-sandringham", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Sandringham"
        title="Mould Removal Sandringham - Beachside Living Specialists | Mould & Restoration Co"
        description="Professional mould removal in Sandringham Melbourne. IICRC certified, 2-hour emergency response. Call 1800 954 117 for same-day Sandringham mould inspection & removal."
        canonical="/services/mould-removal-sandringham"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        serviceArea="Sandringham, Melbourne"
        address="Sandringham, Victoria, Australia"
        phone="1800 954 117"
        email="info@mouldrestoration.com.au"
        abn="47 683 089 652"
        description="Professional mould removal and inspection services in Sandringham Melbourne. IICRC certified technicians specializing in beachside living properties, marina proximity buildings, and Bay Road commercial precinct."
      />

      <ServiceSchema
        serviceName="Mould Removal Sandringham Melbourne"
        serviceType="Mould Remediation"
        areaServed="Sandringham, Melbourne, Victoria"
        description="Emergency mould removal and inspection services for Sandringham properties including beachside homes, marina buildings, and Bay Road commercial properties."
      />

      <Navigation />

      {/* Emergency Response Bar */}
      <div className="emergency-bar">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>24/7 Emergency Mould Response in Sandringham</span>
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
              Professional Mould Removal & Inspection in Sandringham, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Emergency mould removal Sandringham Melbourne specialists with 5+ years experience. IICRC-certified technicians serving Sandringham's beachside living properties, marina proximity buildings, and Bay Road commercial precinct with same-day response. Trusted by 100+ Melbourne properties with 5.0-star rating.
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
                  <span>2-hour emergency response to Sandringham</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Beachside living & marina proximity expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Postcodes: 3191, Bay Road precinct coverage</span>
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
                Free Sandringham Inspection Quote
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
              Sandringham Mould Removal Specialists
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Mould & Restoration Co. provides expert mould removal Sandringham Melbourne services in one of Melbourne's premier beachside lifestyle suburbs. Our IICRC-certified technicians understand the unique challenges of Sandringham's beachside living properties, marina proximity buildings, and Bay Road commercial precinct, from Royal Melbourne Yacht Squadron to Sandringham Beach.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Sandringham Property Types We Service</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Beachside Homes:</strong> Properties with direct or proximity beach access and marine exposure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Marina Buildings:</strong> Properties near Royal Melbourne Yacht Squadron and marina facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Bay Road Commercial:</strong> Shop fronts, restaurants, and mixed-use buildings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Luxury Residences:</strong> High-value beachside estates and premium family homes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Holiday Properties:</strong> Beach houses and seasonal accommodation rentals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span><strong>Yacht Club Facilities:</strong> Marine recreational buildings and event spaces</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Sandringham Landmarks We Cover</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Royal Melbourne Yacht Squadron:</strong> Prestigious marina and surrounding residential areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Sandringham Beach:</strong> Beachfront properties and foreshore access points</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Bay Road Shopping:</strong> Main commercial strip and dining precinct</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Sandringham Station:</strong> Railway access point and commuter parking areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Beach Road Corridor:</strong> Coastal road properties with bay views</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Picnic Point:</strong> Parkland access and recreational facility surrounds</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Common Sandringham Mould Issues</h3>
              <p className="text-gray-700 mb-6">
                Sandringham's combination of beachside living, marina activities, and commercial precinct creates specific mould challenges. Our emergency mould removal Sandringham Melbourne team addresses these with marine-appropriate solutions:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Beachside Living Challenges</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Constant salt air penetration and corrosion effects</li>
                    <li>• Sand and moisture tracked from beach activities</li>
                    <li>• Sea breeze humidity affecting building ventilation</li>
                    <li>• Beachside outdoor entertaining area moisture issues</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Marina Proximity Factors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Marina activity moisture and spray effects</li>
                    <li>• Yacht storage and maintenance area humidity</li>
                    <li>• Marine event and function facility condensation</li>
                    <li>• Boat access area water splash and drainage issues</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Commercial Precinct Issues</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Restaurant and cafe kitchen ventilation overload</li>
                    <li>• Mixed-use building moisture transfer problems</li>
                    <li>• High pedestrian traffic condensation buildup</li>
                    <li>• Bay Road facing building weather exposure</li>
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
              Professional Mould Removal Sandringham Melbourne Process
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center">
              Our systematic approach to mould removal Sandringham Melbourne ensures complete elimination while addressing the unique challenges of beachside living, marina proximity, and commercial precinct environments.
            </p>

            <div className="grid gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Comprehensive Marine Environment Assessment</h3>
                      <p className="text-gray-700 mb-4">
                        Upon receiving your call for mould removal Sandringham Melbourne, our IICRC-certified technicians respond within 2 hours. We conduct comprehensive thermal imaging and moisture mapping specific to beachside homes, marina buildings, and commercial precinct properties.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• 24/7 emergency response to Sandringham (3191)</li>
                        <li>• Beachside property salt air exposure assessment</li>
                        <li>• Marina proximity moisture impact evaluation</li>
                        <li>• Commercial precinct ventilation system analysis</li>
                        <li>• Marine environment-specific contamination mapping</li>
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
                      <h3 className="text-xl font-semibold mb-3">Marine-Appropriate Containment</h3>
                      <p className="text-gray-700 mb-4">
                        Professional mould removal Sandringham Melbourne requires marine-environment containment methods for coastal properties with salt air exposure and high humidity. We establish controlled environments that protect against marine corrosion while maintaining treatment effectiveness.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Salt-resistant containment materials and equipment</li>
                        <li>• Beachside property access and safety protocols</li>
                        <li>• Marina activity and yacht club event coordination</li>
                        <li>• Commercial precinct business continuity planning</li>
                        <li>• Marine environment-appropriate noise and disruption control</li>
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
                      <h3 className="text-xl font-semibold mb-3">Marine-Grade Remediation Techniques</h3>
                      <p className="text-gray-700 mb-4">
                        Our emergency mould removal Sandringham Melbourne service employs marine-grade techniques suitable for beachside properties, marina buildings, and commercial premises while addressing salt air corrosion and maintaining coastal building integrity.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Salt-resistant antimicrobial treatments for coastal exposure</li>
                        <li>• Marine-environment compatible dehumidification systems</li>
                        <li>• Beachside property moisture barrier installation</li>
                        <li>• Commercial marine precinct ventilation restoration</li>
                        <li>• Yacht club and marina facility specialized cleaning</li>
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
                      <h3 className="text-xl font-semibold mb-3">Marine Environment Health Verification</h3>
                      <p className="text-gray-700 mb-4">
                        Every mould removal Sandringham Melbourne project concludes with comprehensive verification testing suitable for marine environments, ensuring beachside properties, marina buildings, and commercial premises meet Australian coastal health standards.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Marine environment air quality clearance testing</li>
                        <li>• Beachside property salt air impact verification</li>
                        <li>• Marina building moisture level confirmation</li>
                        <li>• Commercial precinct health compliance certification</li>
                        <li>• Coastal property environmental clearance documentation</li>
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
              Why Choose Mould & Restoration Co. for Sandringham?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Marine Environment Expertise</h3>
                <p className="text-gray-700 mb-4">
                  With 5+ years serving Sandringham, we understand the unique requirements of beachside living, marina proximity buildings, and Bay Road commercial properties. Our team combines marine environmental knowledge with coastal property expertise for comprehensive service delivery.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Beachside living and salt air exposure specialist experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Marina proximity building environmental understanding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Bay Road commercial precinct property expertise</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">IICRC Certified Excellence</h3>
                <p className="text-gray-700 mb-4">
                  Our emergency mould removal Sandringham Melbourne technicians are IICRC certified with additional training in marine environment standards and coastal property requirements, ensuring comprehensive service quality for beachside communities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>IICRC water damage restoration certification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Applied structural drying for marine environment properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                    <span>Coastal health and safety protocol training</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2 Hour</div>
                  <div className="text-sm text-gray-600">Emergency Response to Sandringham</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-gray-600">Marine-Safe Treatment Methods</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5.0★</div>
                  <div className="text-sm text-gray-600">Rating from Beachside Properties</div>
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
              Need Immediate Mould Removal in Sandringham?
            </h2>
            <p className="text-xl mb-8">
              Don't let mould compromise your Sandringham beachside home, marina property, or Bay Road business. Our IICRC-certified technicians provide 24/7 emergency response with 2-hour arrival guarantee. Trusted by beachside communities, marina facilities, and commercial properties with a 5.0-star rating.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-emergency-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">24/7 Emergency Response</h3>
                  <p className="mb-4">Call now for immediate mould removal Sandringham Melbourne assistance. Our marine environment specialists respond within 2 hours.</p>
                  <Button className="w-full bg-emergency-orange hover:bg-emergency-orange/90">
                    Call 1800 954 117 Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Free Sandringham Inspection</h3>
                  <p className="mb-4">Comprehensive assessment with thermal imaging. Specialized quotes for beachside homes, marina buildings, and Bay Road commercial properties.</p>
                  <Button className="w-full" variant="outline">
                    Book Free Marine Environment Inspection
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg mb-2">
                <strong>ABN: 47 683 089 652</strong> | Licensed & Insured | IICRC Certified | Marine Environment Specialists
              </p>
              <p className="text-sm opacity-90">
                Serving Sandringham: 3191 | Bay Road Shopping | Royal Melbourne Yacht Squadron | Sandringham Beach
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};