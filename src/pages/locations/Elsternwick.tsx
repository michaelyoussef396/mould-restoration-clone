import { ArrowRight, Clock, Shield, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";

export const Elsternwick = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Elsternwick Mould Removal", href: "/services/mould-removal-elsternwick", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Optimization for Elsternwick Melbourne Mould Removal */}
      <LocationPageSEO
        location="Elsternwick"
        service="removal"
        emergency={false}
        title="Mould Removal Elsternwick Melbourne - Heritage Precinct Specialists"
        description="Expert mould removal Elsternwick Melbourne. Heritage precinct specialists treating period architecture moisture issues. Art Deco restoration, character area expertise. Call 1800 954 117 for professional service."
        canonical="https://mouldrestoration.com.au/services/mould-removal-elsternwick"
      />
      <LocalBusinessSchema
        pageName="Elsternwick Mould Removal"
        pageUrl="https://mouldrestoration.com.au/locations/elsternwick"
        serviceType="removal"
        location="Elsternwick"
      />
      <ServiceSchema
        serviceName="Mould Removal Elsternwick Melbourne"
        serviceDescription="Specialized mould removal for Elsternwick's heritage precinct properties. Expert treatment for period architecture moisture issues, Art Deco restoration, and heritage character area preservation."
        serviceUrl="https://mouldrestoration.com.au/locations/elsternwick"
        priceRange="$$"
        areaServed={["Elsternwick", "Caulfield", "St Kilda East", "Brighton", "Ormond"]}
      />
      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Elsternwick</span>
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
              Professional Mould Removal & Inspection in Elsternwick, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Melbourne's premier mould removal specialists serving Elsternwick's heritage precinct properties and period architecture areas. IICRC-certified technicians with 5+ years experience treating Art Deco moisture issues, heritage character preservation, and period building challenges. same-day professional service, 100+ properties restored with 5.0/5 star rating from Elsternwick homeowners.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>same-day professional service to Elsternwick</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Heritage precinct specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Period architecture expertise</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Art Deco restoration</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Character area preservation</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Professional Mould Service - Call Now: 1800 954 117
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
                Schedule Free Elsternwick Mould Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Elsternwick Melbourne Local Area Expertise */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Elsternwick Melbourne Local Area Expertise</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Elsternwick Property Landscape</h3>
                <p className="text-muted-foreground mb-4">
                  Elsternwick sits 9km southeast of Melbourne CBD in the City of Glen Eira, encompassing postcode 3185. This distinguished heritage precinct features outstanding period architecture from the 1920s-1940s, including magnificent Art Deco apartments, heritage commercial buildings, and period residential properties with exceptional architectural significance.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Art Deco apartment buildings and streamline moderne residential complexes from 1930s-1940s</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage commercial architecture along Glen Huntly Road with period character shopfronts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Period residential streets with Federation, Edwardian, and interwar architectural heritage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage precinct protection areas requiring specialized conservation approaches</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Melbourne Climate Impact on Elsternwick</h3>
                <p className="text-muted-foreground mb-4">
                  Elsternwick's southeastern location experiences Melbourne's temperate oceanic climate with heritage architecture considerations. Annual rainfall of 650mm combines with period building systems, heritage ventilation limitations, and Art Deco design features, creating specific challenges for architectural preservation and moisture management.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage building envelope challenges with period window systems and original weatherproofing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Art Deco apartment building moisture management with shared systems and heritage constraints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Period commercial architecture with heritage roofing and original building materials aging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage precinct microclimate effects from architectural density and period landscaping</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Local Elsternwick Landmarks & Challenges</h3>
                <p className="text-muted-foreground mb-4">
                  From Elsternwick railway station to Glen Huntly Road heritage shopping strip and significant Art Deco landmarks, this heritage precinct presents sophisticated mould challenges related to architectural conservation, period building preservation, and maintaining heritage character while ensuring modern environmental health standards.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Elsternwick railway station heritage precinct with period commercial and residential integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Glen Huntly Road heritage shopping strip with significant architectural and commercial heritage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Art Deco apartment landmarks requiring specialized heritage conservation approaches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage precinct boundaries with strict architectural preservation requirements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Common Mould Issues in Elsternwick Properties</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Art Deco & Heritage Architecture Challenges</h3>
                <p className="text-muted-foreground mb-4">
                  Elsternwick's exceptional Art Deco and heritage architecture presents unique challenges with preserving significant architectural features while managing moisture issues that can compromise both structural integrity and irreplaceable heritage value in nationally significant buildings.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Art Deco apartment building systems with shared ventilation and heritage material considerations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Period window systems with original steel frames, leadlight glass, and heritage glazing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Heritage plaster and decorative ceiling features requiring conservation-grade restoration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Period commercial architecture with heritage shopfront materials and original signage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Architectural heritage fabric requiring specialist conservation and restoration expertise</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Heritage Precinct Specific Risk Factors</h3>
                <p className="text-muted-foreground mb-4">
                  Properties within Elsternwick's heritage precinct experience intensified mould risks from architectural conservation requirements, period building system limitations, and the complex moisture challenges of maintaining nationally significant heritage architecture in modern environmental conditions.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Heritage conservation requirements limiting modern moisture management installation options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Period building density creating architectural microclimate and moisture concentration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Art Deco design features with concealed moisture pathways and heritage material vulnerabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Heritage precinct planning approvals required for moisture management modifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Architectural significance preservation requirements affecting treatment methodology selection</span>
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
          <h2 className="text-3xl font-bold text-primary mb-8">Elsternwick Property Types We Service</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Art Deco Apartment Buildings</h3>
                <p className="text-muted-foreground mb-4">Significant heritage apartment complexes requiring specialized conservation-grade moisture management and architectural preservation.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Conservation-grade restoration</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Architectural significance preservation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Heritage Commercial Buildings</h3>
                <p className="text-muted-foreground mb-4">Period shopfronts and commercial architecture requiring heritage-appropriate moisture control and conservation methods.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Commercial heritage expertise</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Precinct preservation compliance</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Period Residential Heritage</h3>
                <p className="text-muted-foreground mb-4">Federation, Edwardian, and interwar residential properties requiring character-preserving restoration approaches.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Period residential expertise</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Heritage precinct coordination</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Our Elsternwick Mould Removal Process</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Heritage Architecture Assessment & Conservation Evaluation</h3>
                <p className="text-muted-foreground mb-4">
                  Our Elsternwick mould removal process begins with comprehensive heritage architecture assessment using advanced thermal imaging technology specifically calibrated for period materials, Art Deco design features, and heritage precinct conservation requirements.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage architecture moisture assessment preserving Art Deco and period architectural significance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Precinct heritage compliance and conservation planning for moisture management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Period building system analysis and heritage material moisture mapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Architectural conservation specialist consultation and heritage impact assessment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Conservation-Grade Containment & Architectural Protection</h3>
                <p className="text-muted-foreground mb-4">
                  Elsternwick's heritage precinct properties require conservation-grade containment strategies that protect irreplaceable architectural features while preventing mould spore migration through significant heritage building systems and Art Deco design elements.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Conservation-grade containment systems for architectural heritage protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Art Deco feature protection including decorative plaster, metalwork, and period glazing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage precinct community consideration with conservation-appropriate work practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Architectural significance preservation and heritage value protection during treatment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Professional Elsternwick Mould Remediation Techniques</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Conservation-Grade Architectural Restoration Methods</h3>
                <p className="text-muted-foreground mb-4">
                  Elsternwick's heritage precinct properties demand conservation-grade restoration techniques that account for architectural significance preservation, Art Deco design integrity, and the exceptional heritage value of nationally significant building stock.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Conservation-grade restoration techniques for Art Deco and heritage architectural elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage-appropriate antimicrobial treatments for significant period surfaces and materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Architectural heritage significance preservation during professional conservation treatment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage precinct conservation standards compliance and architectural integrity verification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Post-Treatment Verification & Heritage Conservation Warranty</h3>
                <p className="text-muted-foreground mb-4">
                  Our Elsternwick post-treatment verification ensures complete mould elimination with comprehensive testing protocols designed for heritage architecture standards and conservation-grade restoration requirements in significant heritage precinct environments.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage architecture air quality testing certified for conservation-grade restoration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Art Deco and period building material moisture content verification and conservation compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage precinct clearance certificates for architectural conservation and significance preservation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>12-month warranty with heritage architecture and conservation considerations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Our Elsternwick Mould Removal Services</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emergency-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Heritage Precinct Professional Service - Same-day Available 7am-7pm</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• same-day professional service response to Elsternwick</li>
                    <li>• Art Deco architecture professional moisture service</li>
                    <li>• Heritage precinct protection</li>
                    <li>• Conservation-grade assessment</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Heritage Architecture Inspection</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Period architecture property assessment</li>
                    <li>• Heritage precinct moisture evaluation</li>
                    <li>• Conservation-grade moisture mapping</li>
                    <li>• Architectural heritage air quality testing</li>
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
                  <h3 className="text-xl font-semibold mb-2 text-primary">Conservation-Grade Remediation</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• IICRC-certified conservation processes</li>
                    <li>• Heritage architecture treatments</li>
                    <li>• Art Deco preservation techniques</li>
                    <li>• Conservation clearance testing</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-success-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Heritage Conservation Planning</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Long-term heritage moisture management</li>
                    <li>• Architectural conservation coordination</li>
                    <li>• Precinct preservation maintenance</li>
                    <li>• Heritage significance protection strategies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us in Elsternwick Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Why Choose Mould & Restoration Co. in Elsternwick Melbourne</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Local Elsternwick Knowledge Since 2019</h3>
                <p className="text-muted-foreground mb-4">
                  As Elsternwick's trusted heritage precinct mould removal specialists with over 5 years of experience in Melbourne's most significant architectural heritage areas, we understand the unique challenges of Art Deco conservation, heritage precinct requirements, and architectural significance preservation.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>5+ years specializing in Elsternwick heritage precinct mould issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>100+ Elsternwick properties successfully restored with heritage preservation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Art Deco architecture and heritage precinct conservation expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage precinct compliance and architectural significance preservation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">IICRC Certified Technicians & Same-Day Response</h3>
                <p className="text-muted-foreground mb-4">
                  Our IICRC-certified technicians provide professional service Same-day professional service to Elsternwick heritage precinct properties, operating 7am-7pm daily with Professional service line availability for architectural conservation situations. ABN: 47 683 089 652.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>IICRC certification in heritage remediation and architectural conservation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Same-day professional service guarantee to Elsternwick postcode 3185</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professional service line: 1800 954 117</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Same-day conservation service scheduling 7 days per week</span>
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
                  We work directly with all major Australian insurance providers and offer comprehensive documentation for claims related to heritage architecture damage, Art Deco conservation, and heritage precinct water damage incidents requiring specialized restoration.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Direct insurance billing for approved heritage architecture claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage conservation documentation and architectural significance evidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>100% satisfaction guarantee on all Elsternwick heritage conservation work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>12-month warranty on professional heritage architecture remediation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">5.0 Star Rating & Elsternwick Customer Reviews</h3>
                <p className="text-muted-foreground mb-4">
                  With over 50+ verified 5-star reviews from Elsternwick heritage property owners, Art Deco apartment residents, and heritage precinct communities, we're the most trusted conservation-focused mould removal service in Melbourne's premier heritage areas.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>5.0/5 star rating across Google, Facebook, and heritage conservation directories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>50+ verified reviews from Elsternwick heritage precinct property owners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Trusted by heritage conservation societies, architectural societies, and Art Deco preservation groups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Recommended by heritage architecture specialists and conservation experts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Mould Prevention Tips for Elsternwick */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Local Mould Prevention Tips for Elsternwick Properties</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Melbourne Heritage Precinct Climate Considerations for Elsternwick</h3>
                <p className="text-muted-foreground mb-4">
                  Elsternwick's distinguished heritage precinct location 9km from Melbourne CBD experiences temperate climate with significant architectural conservation considerations. Properties face heritage-specific moisture challenges year-round, requiring sophisticated approach balancing conservation with environmental health.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Summer (Dec-Feb):</strong> Monitor Art Deco building systems while preserving architectural significance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Autumn (Mar-May):</strong> Check heritage precinct drainage and conservation compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Winter (Jun-Aug):</strong> Protect heritage architecture from seasonal moisture while maintaining character</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Spring (Sep-Nov):</strong> Assess period construction and architectural heritage conservation needs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Elsternwick Heritage Architecture Ventilation & Conservation Management</h3>
                <p className="text-muted-foreground mb-4">
                  Elsternwick's heritage precinct properties require conservation-grade ventilation strategies that account for architectural significance preservation while managing heritage building moisture and protecting irreplaceable Art Deco and period architectural features.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Art Deco Apartments:</strong> Maintain heritage building systems while meeting modern environmental standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Heritage Commercial:</strong> Balance conservation requirements with commercial moisture management needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Period Residential:</strong> Coordinate heritage preservation with modern comfort and health requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Precinct Properties:</strong> Ensure conservation compliance while addressing architectural moisture challenges</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Seasonal Maintenance for Elsternwick Heritage Architecture</h3>
                <p className="text-muted-foreground mb-4">
                  Elsternwick's heritage precinct properties and Art Deco architecture require conservation-grade seasonal maintenance schedules that account for architectural significance preservation, heritage material protection, and precinct conservation compliance requirements.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Monthly heritage building system assessment and conservation-grade maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Quarterly architectural heritage moisture monitoring and precinct compliance verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Bi-annual Art Deco and heritage architecture envelope inspection with conservation focus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Annual heritage significance assessment and architectural conservation planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Warning Signs Specific to Elsternwick Heritage Architecture</h3>
                <p className="text-muted-foreground mb-4">
                  Elsternwick's heritage precinct properties display unique mould warning signs due to architectural conservation requirements, Art Deco design characteristics, and the sophisticated moisture challenges of maintaining nationally significant heritage architecture.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Art Deco Buildings:</strong> Decorative plaster deterioration, heritage window condensation, period ventilation inadequacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Heritage Commercial:</strong> Shopfront moisture issues, period material degradation, architectural feature damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Period Residential:</strong> Heritage material moisture sensitivity, conservation compliance moisture challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>All Heritage Properties:</strong> Architectural significance vs moisture management balance complexities</span>
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
          <h2 className="text-3xl font-bold text-primary mb-8">Areas We Service Near Elsternwick</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                We provide heritage architecture-specialized mould removal services throughout Elsternwick and nearby significant heritage areas including:
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-medium text-primary">Elsternwick Areas:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Glen Huntly Road heritage strip</li>
                    <li>• Railway station heritage precinct</li>
                    <li>• Art Deco apartment precincts</li>
                    <li>• Heritage conservation areas</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-primary">Adjacent Heritage Areas:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Caulfield</li>
                    <li>• St Kilda East</li>
                    <li>• Brighton</li>
                    <li>• Ormond</li>
                  </ul>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Heritage Architecture Response Times to Elsternwick</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Professional service:</span>
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
                    <span className="font-semibold text-primary">15-25 minutes</span>
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
            <h2 className="text-3xl font-bold text-primary mb-6">Get Your Free Elsternwick Mould Inspection Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Protect your Elsternwick heritage architecture from precinct moisture and conservation challenges. Expert mould assessment and remediation for Art Deco and period character properties.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Heritage Architecture Contact</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span>1800 954 117 (Professional service line)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-accent-blue" />
                      <span>info@mouldrestoration.com.au</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent-teal" />
                      <span>Art Deco moisture professional service available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Heritage Architecture Process</h3>
                  <div className="space-y-3 text-left text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                      <span>Free heritage architecture consultation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                      <span>Same-day Elsternwick inspection scheduling</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                      <span>Conservation-grade assessment and reporting</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                      <span>Heritage architecture safe remediation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
                      <span>Final testing and heritage precinct protection plan</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Elsternwick Heritage Professional Service: 1800 954 117
              </Button>
              <Button variant="outline" size="lg">
                Schedule Heritage Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Serving Elsternwick and all heritage precinct suburbs • Art Deco specialists • Heritage architecture professional service available
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};