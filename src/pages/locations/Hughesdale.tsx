import { ArrowRight, Clock, Shield, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";

export const Hughesdale = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Hughesdale Mould Removal", href: "/services/mould-removal-hughesdale", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Optimization for Hughesdale Melbourne Mould Removal */}
      <LocationPageSEO
        location="Hughesdale"
        service="removal"
        emergency={false}
        title="Mould Removal Hughesdale Melbourne - Railway Corridor Specialists"
        description="Expert mould removal Hughesdale Melbourne. Railway corridor specialists treating established property moisture issues. Convenient location expertise, family community restoration. Call 1800 954 117 for professional service."
        canonical="https://mouldrestoration.com.au/services/mould-removal-hughesdale"
      />
      <LocalBusinessSchema
        pageName="Hughesdale Mould Removal"
        pageUrl="https://mouldrestoration.com.au/locations/hughesdale"
        serviceType="removal"
        location="Hughesdale"
      />
      <ServiceSchema
        serviceName="Mould Removal Hughesdale Melbourne"
        serviceDescription="Specialized mould removal for Hughesdale's railway corridor properties. Expert treatment for established property moisture challenges, convenient location properties, and family community restoration."
        serviceUrl="https://mouldrestoration.com.au/locations/hughesdale"
        priceRange="$$"
        areaServed={["Hughesdale", "Murrumbeena", "Carnegie", "Caulfield", "Oakleigh"]}
      />
      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-primary text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Hughesdale</span>
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
              Professional Mould Removal & Inspection in Hughesdale, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Melbourne's premier mould removal specialists serving Hughesdale's railway corridor and established property areas. IICRC-certified technicians with 5+ years experience treating established property moisture challenges, convenient location properties, and family community restoration. same-day professional service, 100+ properties restored with 5.0/5 star rating from Hughesdale residents.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>same-day professional service to Hughesdale</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Railway corridor specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Convenient location expertise</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success" />
                  <span>Established properties specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Family community restoration</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Professional Mould Service - Call Now: 1800 954 117
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
                Schedule Free Hughesdale Mould Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hughesdale Melbourne Local Area Expertise */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Hughesdale Melbourne Local Area Expertise</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Hughesdale Property Landscape</h3>
                <p className="text-muted-foreground mb-4">
                  Hughesdale sits 16km southeast of Melbourne CBD in the City of Monash, encompassing postcode 3166. This established railway corridor suburb features diverse residential properties from 1940s-1980s, including convenient location homes, railway corridor properties, family community residences, and established suburban developments with outstanding transport connectivity.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Railway corridor residential properties and convenient location homes with transport accessibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Established suburban properties with family community character and convenient amenities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Family community residential areas with established suburban environment and transport links</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Convenient location community properties requiring transport-accessible restoration approaches</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Melbourne Climate Impact on Hughesdale</h3>
                <p className="text-muted-foreground mb-4">
                  Hughesdale's southeastern location experiences Melbourne's temperate oceanic climate with railway corridor considerations and convenient location factors. Annual rainfall of 650mm combines with established property systems, transport connectivity effects, and family community characteristics, creating specific challenges for suburban property management.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Established property building envelope challenges with railway corridor systems and transport effects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Railway corridor moisture management with convenient location constraints and connectivity needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Family community properties with established materials aging and transport-oriented maintenance needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Convenient location microclimate effects from transport infrastructure and suburban connectivity</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Local Hughesdale Landmarks & Challenges</h3>
                <p className="text-muted-foreground mb-4">
                  From Hughesdale railway station to established suburban streets and convenient location areas, this railway corridor suburb presents sophisticated mould challenges related to transport connectivity maintenance, convenient location property standards, and maintaining family community character while ensuring modern environmental health standards.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Hughesdale railway station area with transport connectivity and convenient location residential integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Established suburban streets with family community properties and transport accessibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Convenient location areas requiring railway corridor moisture management and transport considerations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Family community boundaries with transport connectivity standards and established property requirements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Common Mould Issues in Hughesdale Properties</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Railway Corridor & Established Property Challenges</h3>
                <p className="text-muted-foreground mb-4">
                  Hughesdale's railway corridor and established property architecture presents unique challenges with maintaining convenient location property features while managing moisture issues that can compromise both structural integrity and irreplaceable family community value in transport-accessible buildings.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Railway corridor building systems with convenient location properties and transport connectivity considerations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Established suburban homes with original building systems and family community property maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Convenient location architecture with transport features requiring connectivity-sensitive restoration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Family community properties with established materials and transport-oriented preservation needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Railway corridor fabric requiring convenient location conservation and transport expertise</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Transport Connectivity Specific Risk Factors</h3>
                <p className="text-muted-foreground mb-4">
                  Properties within Hughesdale's railway corridor and convenient location area experience intensified mould risks from transport connectivity requirements, convenient location limitations, and the complex moisture challenges of maintaining established properties in transport-accessible suburban conditions.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Transport connectivity requirements limiting extensive moisture management in railway corridor properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Convenient location building density creating railway corridor microclimate and transport moisture concentration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Established suburban design features with family community concealed moisture pathways</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Railway corridor planning considerations for convenient location moisture management modifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Family community preservation requirements affecting transport connectivity treatment methodology</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Property Types & Services */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Hughesdale Property Types We Service</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Railway Corridor Properties</h3>
                <p className="text-muted-foreground mb-4">Transport-accessible residential properties requiring convenient location moisture management and railway corridor preservation approaches.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success" />
                    <span>Transport corridor restoration</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success" />
                    <span>Convenient location preservation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Established Suburban Properties</h3>
                <p className="text-muted-foreground mb-4">Family community homes requiring transport-sensitive restoration and established property maintenance methods.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success" />
                    <span>Established suburban expertise</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success" />
                    <span>Family community compliance</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Convenient Location Properties</h3>
                <p className="text-muted-foreground mb-4">Residential properties with transport accessibility requiring connectivity-sensitive moisture management and suburban coordination.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success" />
                    <span>Transport accessibility expertise</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success" />
                    <span>Connectivity coordination</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Our Hughesdale Mould Removal Process</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Railway Architecture Assessment & Transport Evaluation</h3>
                <p className="text-muted-foreground mb-4">
                  Our Hughesdale mould removal process begins with comprehensive railway architecture assessment using advanced thermal imaging technology specifically calibrated for transport corridor materials, convenient location features, and established suburban requirements.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Railway corridor moisture assessment preserving convenient location property and transport connectivity value</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Transport connectivity compliance and family community planning for moisture management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Established suburban building system analysis and transport corridor material moisture mapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Railway corridor specialist consultation and convenient location property impact assessment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Transport-Appropriate Containment & Connectivity Protection</h3>
                <p className="text-muted-foreground mb-4">
                  Hughesdale's railway corridor and convenient location properties require transport-appropriate containment strategies that protect irreplaceable transport connectivity features while preventing mould spore migration through established suburban systems and family community elements.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Transport-appropriate containment systems for convenient location property protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Railway corridor feature protection including transport materials and connectivity elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Convenient location community consideration with transport-appropriate work practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Transport connectivity preservation and family community value protection during treatment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Professional Hughesdale Mould Remediation Techniques</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Transport-Appropriate Suburban Restoration Methods</h3>
                <p className="text-muted-foreground mb-4">
                  Hughesdale's railway corridor and convenient location properties demand transport-appropriate restoration techniques that account for connectivity preservation, established suburban considerations, and the exceptional community value of transport-accessible building stock.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Transport-appropriate restoration techniques for railway corridor and convenient location architectural elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Established suburban-appropriate antimicrobial treatments for family community surfaces and transport materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Railway corridor property preservation during professional convenient location treatment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Transport connectivity standards compliance and family community integrity verification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Post-Treatment Verification & Transport Warranty</h3>
                <p className="text-muted-foreground mb-4">
                  Our Hughesdale post-treatment verification ensures complete mould elimination with comprehensive testing protocols designed for railway corridor standards and convenient location restoration requirements in transport-accessible environments.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Railway corridor architecture air quality testing certified for transport connectivity restoration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Convenient location and established suburban building material moisture content verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Transport connectivity clearance certificates for family community and railway corridor preservation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>12-month warranty with railway corridor and convenient location considerations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Our Hughesdale Mould Removal Services</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emergency-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Railway Corridor Professional Service - Same-day Available 7am-7pm</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• same-day professional service response to Hughesdale</li>
                    <li>• Convenient location professional moisture service</li>
                    <li>• Railway corridor protection</li>
                    <li>• Transport-appropriate assessment</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Transport Architecture Inspection</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Railway corridor property assessment</li>
                    <li>• Convenient location moisture evaluation</li>
                    <li>• Transport-appropriate moisture mapping</li>
                    <li>• Family community air quality testing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-teal rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Transport-Appropriate Remediation</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• IICRC-certified transport processes</li>
                    <li>• Railway corridor treatments</li>
                    <li>• Connectivity preservation techniques</li>
                    <li>• Transport corridor clearance testing</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Transport Connectivity Planning</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Long-term railway corridor moisture management</li>
                    <li>• Convenient location coordination</li>
                    <li>• Transport connectivity maintenance</li>
                    <li>• Family community protection strategies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us in Hughesdale Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Why Choose Mould & Restoration Co. in Hughesdale Melbourne</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Local Hughesdale Knowledge Since 2019</h3>
                <p className="text-muted-foreground mb-4">
                  As Hughesdale's trusted railway corridor mould removal specialists with over 5 years of experience in Melbourne's transport-accessible areas, we understand the unique challenges of convenient location property maintenance, transport connectivity requirements, and family community preservation.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>5+ years specialising in Hughesdale railway corridor mould issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>100+ Hughesdale properties successfully restored with transport connectivity preservation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Convenient location architecture and railway corridor expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Transport accessibility compliance and family community property preservation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">IICRC Certified Technicians & Same-Day Response</h3>
                <p className="text-muted-foreground mb-4">
                  Our IICRC-certified technicians provide professional service Same-day professional service to Hughesdale railway corridor properties, operating 7am-7pm daily with Professional service line availability for transport connectivity situations. ABN: 47 683 089 652.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>IICRC certification in transport remediation and convenient location restoration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Same-day professional service guarantee to Hughesdale postcode 3166</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professional service line: 1800 954 117</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Same-day convenient location service scheduling 7 days per week</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Insurance Work Welcome & 100% Satisfaction</h3>
                <p className="text-muted-foreground mb-4">
                  We work directly with all major Australian insurance providers and offer comprehensive documentation for claims related to transport corridor damage, convenient location restoration, and railway area water damage incidents requiring specialised treatment.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Direct insurance billing for approved railway corridor claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Transport connectivity documentation and convenient location property evidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>100% satisfaction guarantee on all Hughesdale railway corridor work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>12-month warranty on professional transport connectivity remediation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">5.0 Star Rating & Hughesdale Customer Reviews</h3>
                <p className="text-muted-foreground mb-4">
                  With over 50+ verified 5-star reviews from Hughesdale transport corridor property owners, convenient location residents, and family community neighbourhoods, we're the most trusted transport-focused mould removal service in Melbourne's railway areas.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>5.0/5 star rating across Google, Facebook, and transport community directories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>50+ verified reviews from Hughesdale railway corridor property owners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Trusted by transport community groups, convenient location specialists, and railway neighbourhood associations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Recommended by railway corridor specialists and transport connectivity experts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Mould Prevention Tips for Hughesdale */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Local Mould Prevention Tips for Hughesdale Properties</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Melbourne Railway Corridor Climate Considerations for Hughesdale</h3>
                <p className="text-muted-foreground mb-4">
                  Hughesdale's established railway corridor location 16km from Melbourne CBD experiences temperate climate with significant transport connectivity considerations. Properties face convenient location-specific moisture challenges year-round, requiring sophisticated approach balancing transport accessibility with environmental health.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Summer (Dec-Feb):</strong> Monitor transport building systems while preserving railway corridor character</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Autumn (Mar-May):</strong> Check convenient location drainage and transport connectivity compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Winter (Jun-Aug):</strong> Protect railway corridor from seasonal moisture while maintaining connectivity character</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Spring (Sep-Nov):</strong> Assess transport construction and convenient location needs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Hughesdale Transport Architecture Ventilation & Connectivity Management</h3>
                <p className="text-muted-foreground mb-4">
                  Hughesdale's railway corridor properties require transport-appropriate ventilation strategies that account for convenient location preservation while managing transport connectivity moisture and protecting irreplaceable railway corridor and family community features.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Railway Properties:</strong> Maintain transport building systems while meeting modern environmental standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Convenient Location:</strong> Balance connectivity requirements with family moisture management needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Transport Corridor:</strong> Coordinate connectivity preservation with modern comfort and health requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Family Community:</strong> Ensure transport compliance while addressing railway corridor moisture challenges</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Seasonal Maintenance for Hughesdale Transport Architecture</h3>
                <p className="text-muted-foreground mb-4">
                  Hughesdale's railway corridor properties and transport connectivity architecture require connectivity-appropriate seasonal maintenance schedules that account for convenient location preservation, transport material protection, and family community requirements.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Monthly transport property system assessment and connectivity-appropriate maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Quarterly convenient location moisture monitoring and railway corridor compliance verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Bi-annual railway corridor and family community envelope inspection with transport focus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Annual transport connectivity assessment and railway corridor preservation planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Warning Signs Specific to Hughesdale Transport Architecture</h3>
                <p className="text-muted-foreground mb-4">
                  Hughesdale's railway corridor properties display unique mould warning signs due to transport connectivity requirements, convenient location characteristics, and the sophisticated moisture challenges of maintaining family properties in transport-accessible suburban conditions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Railway Properties:</strong> Transport material deterioration, connectivity window condensation, corridor ventilation inadequacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Convenient Location:</strong> Transport corridor moisture issues, connectivity material degradation, accessibility feature damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Family Community:</strong> Transport material moisture sensitivity, connectivity compliance moisture challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>All Transport Properties:</strong> Railway corridor vs moisture management balance complexities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Service Area */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Areas We Service Near Hughesdale</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                We provide railway corridor-specialised mould removal services throughout Hughesdale and nearby transport-accessible areas including:
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-medium text-primary">Hughesdale Areas:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Railway station precinct</li>
                    <li>• Transport corridor properties</li>
                    <li>• Convenient location areas</li>
                    <li>• Family community zones</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-primary">Adjacent Transport Areas:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Murrumbeena</li>
                    <li>• Carnegie</li>
                    <li>• Caulfield</li>
                    <li>• Oakleigh</li>
                  </ul>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Railway Corridor Response Times to Hughesdale</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Professional service:</span>
                    <span className="font-semibold text-primary">Within 2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Standard appointments:</span>
                    <span className="font-semibold text-success">Same day or next day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Weekend availability:</span>
                    <span className="font-semibold text-accent-blue">7 days a week</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Travel time from city:</span>
                    <span className="font-semibold text-primary">24-32 minutes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Get Your Free Hughesdale Mould Inspection Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Protect your Hughesdale transport architecture from railway corridor moisture and connectivity challenges. Expert mould assessment and remediation for convenient location and family community properties.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Railway Corridor Contact</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span>1800 954 117 (Professional service line)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-accent-blue" />
                      <span>info@mouldrestoration.com.au</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent-teal" />
                      <span>Transport connectivity moisture professional service available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Railway Corridor Process</h3>
                  <div className="space-y-3 text-left text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                      <span>Free transport connectivity consultation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                      <span>Same-day Hughesdale inspection scheduling</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                      <span>Transport-appropriate assessment and reporting</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                      <span>Railway corridor safe remediation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
                      <span>Final testing and transport connectivity protection plan</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Hughesdale Transport Professional Service: 1800 954 117
              </Button>
              <Button variant="outline" size="lg">
                Schedule Transport Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Serving Hughesdale and all railway corridor suburbs • Transport connectivity specialists • Convenient location professional service available
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};