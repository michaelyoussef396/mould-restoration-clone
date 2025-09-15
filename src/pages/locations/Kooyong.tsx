import { ArrowRight, Clock, Shield, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";

export const Kooyong = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Kooyong Mould Removal", href: "/services/mould-removal-kooyong", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Optimization for Kooyong Melbourne Mould Removal */}
      <LocationPageSEO
        location="Kooyong"
        service="removal"
        emergency={false}
        title="Mould Removal Kooyong Melbourne - Premium Residential Specialists"
        description="Expert mould removal Kooyong Melbourne. Premium residential specialists treating tennis precinct moisture issues. Leafy streets expertise, luxury home restoration. Call 1800 954 117 for professional service."
      />
      <LocalBusinessSchema
        pageName="Kooyong Mould Removal"
        pageUrl="https://mouldrestoration.com.au/locations/kooyong"
        serviceType="removal"
        location="Kooyong"
      />
      <ServiceSchema
        serviceName="Mould Removal Kooyong Melbourne"
        serviceDescription="Specialized mould removal for Kooyong's premium residential properties. Expert treatment for tennis precinct moisture challenges, leafy street properties, and luxury home restoration."
        serviceUrl="https://mouldrestoration.com.au/locations/kooyong"
        priceRange="$$"
        areaServed={["Kooyong", "Toorak", "Armadale", "Malvern", "Glen Iris"]}
      />
      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Kooyong</span>
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
              Professional Mould Removal & Inspection in Kooyong, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Melbourne's premier mould removal specialists serving Kooyong's premium residential area and tennis precinct properties. IICRC-certified technicians with 5+ years experience treating luxury home moisture challenges, leafy street properties, and premium residential restoration. Same-day emergency response, 100+ properties restored with 5.0/5 star rating from Kooyong residents.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>Same-day emergency response to Kooyong</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Premium residential specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Tennis precinct expertise</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Leafy streets specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Luxury home restoration</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Professional Mould Service - Call Now: 1800 954 117
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
                Schedule Free Kooyong Mould Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Kooyong Melbourne Local Area Expertise */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Kooyong Melbourne Local Area Expertise</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Kooyong Property Landscape</h3>
                <p className="text-muted-foreground mb-4">
                  Kooyong sits 7km southeast of Melbourne CBD in the City of Stonnington, encompassing postcode 3144. This prestigious premium residential area features luxury properties from 1920s-1960s, including tennis precinct estates, leafy street mansions, luxury residential properties, and premium architectural developments with outstanding suburban character.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Premium residential estates and luxury homes with tennis precinct proximity and prestige</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Leafy street properties with mature tree canopies and established residential gardens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Tennis precinct residential areas with exclusive sporting facility proximity and luxury amenities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Premium residential community properties requiring high-end moisture management approaches</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Melbourne Climate Impact on Kooyong</h3>
                <p className="text-muted-foreground mb-4">
                  Kooyong's southeastern location experiences Melbourne's temperate oceanic climate with premium residential considerations and leafy street microclimate factors. Annual rainfall of 650mm combines with luxury property systems, tennis precinct landscaping, and mature tree canopy effects, creating specific challenges for premium property management.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Luxury building envelope challenges with premium construction and high-end property systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Tennis precinct moisture management with leafy street canopy and mature landscaping effects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Premium residential properties with luxury materials aging and exclusive maintenance requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Leafy streets microclimate effects from mature tree coverage and premium landscape design</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Local Kooyong Landmarks & Challenges</h3>
                <p className="text-muted-foreground mb-4">
                  From Kooyong Lawn Tennis Club to premium residential streets and leafy suburban areas, this prestigious suburb presents sophisticated mould challenges related to luxury property maintenance, premium residential standards, and maintaining exclusive property value while ensuring environmental health excellence.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Kooyong Lawn Tennis Club precinct with premium sporting facility and exclusive residential proximity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Premium residential streets with luxury homes and exclusive suburban character</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Leafy suburban areas requiring premium moisture management and luxury property care</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Premium residential community boundaries with exclusive property standards and maintenance requirements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Common Mould Issues in Kooyong Properties</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Premium Residential & Luxury Architecture Challenges</h3>
                <p className="text-muted-foreground mb-4">
                  Kooyong's premium residential and luxury architecture presents unique challenges with maintaining exclusive property features while managing moisture issues that can compromise both structural integrity and irreplaceable luxury value in high-end residential buildings.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Premium residential building systems with luxury properties and tennis precinct considerations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Luxury home systems with high-end building materials and exclusive architectural features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Tennis precinct architecture with premium features requiring luxury-appropriate restoration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Leafy streets properties with mature landscaping and exclusive environmental considerations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Premium residential fabric requiring luxury property conservation and exclusive expertise</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Tennis Precinct Specific Risk Factors</h3>
                <p className="text-muted-foreground mb-4">
                  Properties within Kooyong's tennis precinct and premium residential area experience intensified mould risks from luxury property requirements, exclusive maintenance limitations, and the complex moisture challenges of maintaining high-end architecture in prestigious residential conditions.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Premium property requirements limiting standard moisture management in luxury residential properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Tennis precinct building density creating luxury microclimate and exclusive moisture concentration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Leafy streets design features with premium landscaping concealed moisture pathways</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Premium residential planning approvals required for luxury moisture management modifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Exclusive property value preservation requirements affecting premium treatment methodology</span>
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
          <h2 className="text-3xl font-bold text-primary mb-8">Kooyong Property Types We Service</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Premium Residential Estates</h3>
                <p className="text-muted-foreground mb-4">Luxury residential properties requiring premium moisture management and exclusive property value preservation approaches.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Luxury home restoration</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Premium property preservation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Tennis Precinct Properties</h3>
                <p className="text-muted-foreground mb-4">Exclusive residential properties near Kooyong Tennis Club requiring prestigious moisture management and luxury property methods.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Tennis precinct expertise</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Exclusive property compliance</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Leafy Streets Residential</h3>
                <p className="text-muted-foreground mb-4">Premium residential properties with mature tree canopies requiring luxury moisture management and exclusive landscaping coordination.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Leafy streets expertise</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Mature canopy coordination</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Our Kooyong Mould Removal Process</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Premium Architecture Assessment & Luxury Evaluation</h3>
                <p className="text-muted-foreground mb-4">
                  Our Kooyong mould removal process begins with comprehensive premium architecture assessment using advanced thermal imaging technology specifically calibrated for luxury materials, tennis precinct features, and premium residential requirements.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Premium residential moisture assessment preserving luxury property and tennis precinct value</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Exclusive property compliance and luxury conservation planning for moisture management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Leafy streets building system analysis and premium material moisture mapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Tennis precinct specialist consultation and luxury property impact assessment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Luxury-Grade Containment & Premium Protection</h3>
                <p className="text-muted-foreground mb-4">
                  Kooyong's tennis precinct and premium residential properties require luxury-grade containment strategies that protect irreplaceable premium property features while preventing mould spore migration through exclusive building systems and leafy street elements.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Luxury-grade containment systems for premium property protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Premium residential feature protection including luxury materials and exclusive elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Tennis precinct community consideration with luxury-appropriate work practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Premium property value preservation and exclusive property protection during treatment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Professional Kooyong Mould Remediation Techniques</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Luxury-Grade Premium Restoration Methods</h3>
                <p className="text-muted-foreground mb-4">
                  Kooyong's premium residential and tennis precinct properties demand luxury-grade restoration techniques that account for exclusive property preservation, premium residential considerations, and the exceptional value of high-end residential building stock.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Luxury-grade restoration techniques for premium residential and tennis precinct architectural elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Premium-appropriate antimicrobial treatments for luxury property surfaces and exclusive materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Tennis precinct property value preservation during professional luxury treatment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Premium property standards compliance and exclusive property integrity verification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Post-Treatment Verification & Premium Warranty</h3>
                <p className="text-muted-foreground mb-4">
                  Our Kooyong post-treatment verification ensures complete mould elimination with comprehensive testing protocols designed for premium property standards and luxury-grade restoration requirements in tennis precinct environments.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Premium residential architecture air quality testing certified for luxury restoration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Tennis precinct and leafy streets building material moisture content verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Premium property clearance certificates for luxury residential and exclusive property preservation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>12-month warranty with premium residential and tennis precinct considerations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Our Kooyong Mould Removal Services</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emergency-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Tennis Precinct Professional Service - Same-day Available 7am-7pm</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• 2-hour response time to Kooyong</li>
                    <li>• Premium residential moisture emergency</li>
                    <li>• Tennis precinct protection</li>
                    <li>• Luxury-grade assessment</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Premium Architecture Inspection</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Luxury residential property assessment</li>
                    <li>• Tennis precinct moisture evaluation</li>
                    <li>• Premium-grade moisture mapping</li>
                    <li>• Leafy streets air quality testing</li>
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
                  <h3 className="text-xl font-semibold mb-2 text-primary">Luxury-Grade Remediation</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• IICRC-certified luxury processes</li>
                    <li>• Premium residential treatments</li>
                    <li>• Exclusive property techniques</li>
                    <li>• Premium clearance testing</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-success-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Premium Property Planning</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Long-term luxury property moisture management</li>
                    <li>• Tennis precinct coordination</li>
                    <li>• Premium residential maintenance</li>
                    <li>• Exclusive property protection strategies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us in Kooyong Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Why Choose Mould & Restoration Co. in Kooyong Melbourne</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Local Kooyong Knowledge Since 2019</h3>
                <p className="text-muted-foreground mb-4">
                  As Kooyong's trusted premium residential mould removal specialists with over 5 years of experience in Melbourne's luxury residential areas, we understand the unique challenges of tennis precinct properties, leafy street requirements, and exclusive property management.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>5+ years specializing in Kooyong premium residential mould issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>100+ Kooyong properties successfully restored with luxury property preservation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Tennis precinct architecture and premium residential expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Leafy streets compliance and exclusive property value preservation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">IICRC Certified Technicians & 2-Hour Response</h3>
                <p className="text-muted-foreground mb-4">
                  Our IICRC-certified technicians provide emergency response Same-day professional service to Kooyong premium residential properties, operating 7am-7pm daily with Professional service hotline (7am-7pm) availability for luxury property emergencies. ABN: 47 683 089 652.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>IICRC certification in premium remediation and luxury property restoration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Same-day professional service guarantee to Kooyong postcode 3144</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professional service hotline (7am-7pm) hotline: 1800 954 117</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Same-day tennis precinct service scheduling 7 days per week</span>
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
                  We work directly with all major Australian insurance providers and offer comprehensive documentation for claims related to premium property damage, luxury residential restoration, and tennis precinct water damage incidents requiring specialized treatment.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Direct insurance billing for approved premium property claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Tennis precinct documentation and luxury property value evidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>100% satisfaction guarantee on all Kooyong premium residential work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>12-month warranty on professional luxury property remediation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">5.0 Star Rating & Kooyong Customer Reviews</h3>
                <p className="text-muted-foreground mb-4">
                  With over 50+ verified 5-star reviews from Kooyong premium property owners, tennis precinct residents, and leafy street communities, we're the most trusted luxury-focused mould removal service in Melbourne's premium residential areas.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>5.0/5 star rating across Google, Facebook, and premium residential directories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>50+ verified reviews from Kooyong premium residential property owners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Trusted by tennis precinct societies, luxury property specialists, and exclusive community groups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Recommended by premium residential specialists and luxury property experts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Mould Prevention Tips for Kooyong */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Local Mould Prevention Tips for Kooyong Properties</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Melbourne Premium Residential Climate Considerations for Kooyong</h3>
                <p className="text-muted-foreground mb-4">
                  Kooyong's prestigious premium residential location 7km from Melbourne CBD experiences temperate climate with significant luxury property considerations. Properties face tennis precinct-specific moisture challenges year-round, requiring sophisticated approach balancing exclusive property standards with environmental health.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Summer (Dec-Feb):</strong> Monitor premium building systems while preserving luxury property character</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Autumn (Mar-May):</strong> Check tennis precinct drainage and luxury property compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Winter (Jun-Aug):</strong> Protect premium residential from seasonal moisture while maintaining exclusive character</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Spring (Sep-Nov):</strong> Assess leafy streets construction and premium residential needs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Kooyong Premium Architecture Ventilation & Luxury Management</h3>
                <p className="text-muted-foreground mb-4">
                  Kooyong's premium residential properties require luxury-grade ventilation strategies that account for exclusive property preservation while managing tennis precinct moisture and protecting irreplaceable premium residential and leafy street features.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Premium Estates:</strong> Maintain luxury building systems while meeting exclusive environmental standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Tennis Precinct:</strong> Balance exclusive requirements with premium moisture management needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Leafy Streets:</strong> Coordinate luxury preservation with modern comfort and health requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Premium Properties:</strong> Ensure luxury compliance while addressing exclusive moisture challenges</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Seasonal Maintenance for Kooyong Premium Architecture</h3>
                <p className="text-muted-foreground mb-4">
                  Kooyong's premium residential properties and tennis precinct architecture require luxury-grade seasonal maintenance schedules that account for exclusive property preservation, luxury material protection, and premium residential requirements.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Monthly premium property system assessment and luxury-grade maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Quarterly exclusive property moisture monitoring and premium compliance verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Bi-annual tennis precinct and leafy streets envelope inspection with luxury focus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Annual premium residential assessment and tennis precinct preservation planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Warning Signs Specific to Kooyong Premium Architecture</h3>
                <p className="text-muted-foreground mb-4">
                  Kooyong's premium residential properties display unique mould warning signs due to luxury property requirements, tennis precinct characteristics, and the sophisticated moisture challenges of maintaining exclusive architecture in prestigious residential conditions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Premium Estates:</strong> Luxury material deterioration, premium window condensation, exclusive ventilation inadequacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Tennis Precinct:</strong> Premium property moisture issues, luxury material degradation, exclusive feature damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Leafy Streets:</strong> Luxury material moisture sensitivity, premium compliance moisture challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>All Premium Properties:</strong> Exclusive property vs moisture management balance complexities</span>
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
          <h2 className="text-3xl font-bold text-primary mb-8">Areas We Service Near Kooyong</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                We provide premium residential-specialized mould removal services throughout Kooyong and nearby luxury property areas including:
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-medium text-primary">Kooyong Areas:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Tennis Club precinct</li>
                    <li>• Premium residential streets</li>
                    <li>• Leafy suburban areas</li>
                    <li>• Luxury property estates</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-primary">Adjacent Premium Areas:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Toorak</li>
                    <li>• Armadale</li>
                    <li>• Malvern</li>
                    <li>• Glen Iris</li>
                  </ul>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Premium Property Response Times to Kooyong</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Emergency response:</span>
                    <span className="font-semibold text-blue-600">Within 2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Standard appointments:</span>
                    <span className="font-semibold text-success-green">Same day or next day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Weekend availability:</span>
                    <span className="font-semibold text-accent-blue">7 days a week</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Travel time from city:</span>
                    <span className="font-semibold text-primary">12-18 minutes</span>
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
            <h2 className="text-3xl font-bold text-primary mb-6">Get Your Free Kooyong Mould Inspection Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Protect your Kooyong premium architecture from tennis precinct moisture and luxury property challenges. Expert mould assessment and remediation for exclusive residential and leafy street properties.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Premium Property Contact</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span>1800 954 117 (Professional service hotline (7am-7pm) line)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-accent-blue" />
                      <span>info@mouldrestoration.com.au</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent-teal" />
                      <span>Tennis precinct moisture emergency response available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Premium Property Process</h3>
                  <div className="space-y-3 text-left text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                      <span>Free premium property consultation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                      <span>Same-day Kooyong inspection scheduling</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                      <span>Luxury-grade assessment and reporting</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                      <span>Premium residential safe remediation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
                      <span>Final testing and tennis precinct protection plan</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Kooyong Premium Emergency: 1800 954 117
              </Button>
              <Button variant="outline" size="lg">
                Schedule Premium Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Serving Kooyong and all premium residential suburbs • Tennis precinct specialists • Luxury property emergency response available
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};