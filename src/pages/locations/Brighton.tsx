import { ArrowRight, Clock, Shield, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import { SuburbClusterLinks } from "@/components/seo/InternalLinking";

export const Brighton = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Brighton Mold Removal", href: "/services/mold-removal-brighton", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Optimization for Brighton Melbourne Mould Removal */}
      <LocationPageSEO
        location="Brighton"
        service="removal"
        emergency={false}
        title="Mould Removal Brighton Melbourne - Coastal Property Specialists"
        description="Mould removal Brighton Melbourne - Coastal property specialists. Salt air & humidity solutions for Federation homes. Expert service. Call 1800 954 117"
        canonical="https://mouldrestoration.com.au/services/mould-removal-brighton"
      />
      <LocalBusinessSchema
        pageName="Brighton Mould Removal"
        pageUrl="https://mouldrestoration.com.au/locations/brighton"
        serviceType="removal"
        location="Brighton"
      />
      <ServiceSchema
        serviceName="Mould Removal Brighton Melbourne"
        serviceDescription="Specialized mould removal for Brighton's coastal properties. Expert treatment for salt air corrosion, weatherboard moisture issues, and Federation home preservation."
        serviceUrl="https://mouldrestoration.com.au/locations/brighton"
        priceRange="$$"
        areaServed={["Brighton", "Brighton East", "Hampton", "Sandringham", "Bentleigh"]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mouldrestoration.com.au/" },
          { name: "Services", url: "https://mouldrestoration.com.au/services" },
          { name: "Brighton Mould Removal", url: "https://mouldrestoration.com.au/services/mould-removal-brighton" }
        ]}
      />
      <Navigation />
      
      {/* Professional Service Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <span className="hidden sm:inline">Monday - Sunday: 7 AM - 7PM</span>
            <span className="sm:hidden">7 AM - 7PM Daily</span>
            <span>1800 954 117</span>
            <span className="hidden sm:inline">admin@mouldandrestoration.com.au</span>
            <span>Melbourne, VIC 📍</span>
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
              Professional Mould Removal & Inspection in Brighton, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Melbourne's premier mould removal specialists serving Brighton's coastal properties and bayside estates. IICRC-certified technicians with 5+ years experience treating salt air damage, humidity issues, and Federation home preservation. Same-day service available, 100+ properties restored with 5.0/5 star rating from Brighton homeowners.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>Same-day professional service to Brighton</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Coastal property mold specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Federation home preservation expertise</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Salt air corrosion treatment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Weatherboard moisture solutions</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call Brighton Professional Service: 1800 954 117
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
                Schedule Brighton Mould Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brighton Melbourne Local Area Expertise */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Brighton Melbourne Local Area Expertise</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Brighton Property Landscape</h3>
                <p className="text-muted-foreground mb-4">
                  Brighton sits 11km southeast of Melbourne CBD along Port Phillip Bay, encompassing postcodes 3186 and parts of 3187. The suburb stretches from Bay Street shopping precinct to Brighton Beach foreshore, featuring an elegant mix of Federation homes, Art Deco residences, and contemporary coastal developments.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Federation and Edwardian homes from 1900-1920 along Middle Brighton area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Weatherboard beach houses and worker cottages near Brighton Beach station</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Art Deco apartments and townhouses along New Street and Were Street</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Modern luxury developments between Bay Street and the beach</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Melbourne Climate Impact on Brighton</h3>
                <p className="text-muted-foreground mb-4">
                  Brighton's bayside location exposes properties to Melbourne's temperate oceanic climate intensified by coastal conditions. Annual rainfall of 650mm combines with salt air and sea breezes, creating unique challenges for heritage properties and modern builds alike.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Summer sea breezes carrying salt moisture inland affecting weatherboard homes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Winter storm surge and heavy rains impacting beach-adjacent properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Coastal humidity year-round affecting properties within 1km of the bay</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Sand and salt deposits affecting building seals and ventilation systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Local Brighton Landmarks & Challenges</h3>
                <p className="text-muted-foreground mb-4">
                  From Brighton Beach with its iconic bathing boxes to Brighton Grammar School, the suburb's prestigious locations present specific mould challenges. High-value properties demand expert care while heritage restrictions require specialized approaches.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Brighton Beach foreshore properties with extreme salt air exposure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Church Street shopping precinct mixed-use buildings with ventilation issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Brighton Grammar School area heritage properties requiring preservation methods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Dendy Park surrounds with mature tree canopy affecting property drainage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Common Mould Issues in Brighton Properties</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Federation & Edwardian Coastal Home Challenges</h3>
                <p className="text-muted-foreground mb-4">
                  Brighton's Federation homes (1900-1920) and Edwardian residences face unique coastal challenges with their weatherboard construction, timber window frames, and original building materials exposed to constant salt air and sea moisture.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Weatherboard cladding deterioration from salt air corrosion and moisture penetration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Original timber window frames swelling and gaps allowing moisture intrusion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Suspended timber floors with inadequate ventilation in coastal humidity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Heritage roofing materials (slate, terracotta) with age-related water penetration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Original lime mortar joints failing under coastal weather conditions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Brighton Beachside Specific Risk Factors</h3>
                <p className="text-muted-foreground mb-4">
                  Properties within Brighton's coastal zone (0-2km from Port Phillip Bay) experience intensified mould risks from salt spray, sandy soil conditions, and seasonal weather patterns affecting drainage and building performance.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>Salt spray damage to building seals creating moisture entry points</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>Sandy soil drainage issues affecting foundation moisture levels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>Sea breeze moisture penetration through aging weather seals and caulking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>Beach house design features (large windows, open plans) lacking moisture control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>Holiday rental property maintenance gaps during peak summer occupancy</span>
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
          <h2 className="text-3xl font-bold text-primary mb-8">Brighton Property Types We Service</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Federation Homes</h3>
                <p className="text-muted-foreground mb-4">Period properties with weatherboard construction requiring specialized coastal moisture management.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Heritage-appropriate treatments</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Weatherboard preservation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Coastal Modern Homes</h3>
                <p className="text-muted-foreground mb-4">Contemporary properties with large windows and open designs exposed to sea air humidity.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Modern material compatibility</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>HVAC system integration</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Beach House Rentals</h3>
                <p className="text-muted-foreground mb-4">Holiday and investment properties requiring rapid treatment between tenancies.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Fast turnaround service</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Investment property protection</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Our Brighton Mould Removal Process</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Initial Assessment & Coastal Property Evaluation</h3>
                <p className="text-muted-foreground mb-4">
                  Our Brighton mould removal process begins with comprehensive coastal property assessment using advanced thermal imaging technology specifically calibrated for salt air exposure, heritage building materials, and beachside moisture conditions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Salt air damage assessment for weatherboard and building seals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage Federation home structural moisture mapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Coastal foundation moisture penetration analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Beach proximity impact evaluation on building materials</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Containment & Heritage Protection</h3>
                <p className="text-muted-foreground mb-4">
                  Brighton's coastal properties require specialized containment strategies that protect heritage features while preventing mould spore migration. Our approach preserves architectural integrity while ensuring effective treatment.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Negative air pressure systems designed for coastal properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage-appropriate protective barriers and coverings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Salt-resistant equipment and materials for coastal conditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Neighbouring property protection in dense Brighton residential areas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Professional Brighton Mould Remediation Techniques</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Coastal-Safe Mould Removal Methods</h3>
                <p className="text-muted-foreground mb-4">
                  Brighton's coastal properties demand specialized removal techniques that account for salt air corrosion, heritage material preservation, and ongoing moisture management in the marine environment.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Low-invasive techniques for heritage weatherboard and timber features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Salt-resistant antimicrobial treatments designed for coastal exposure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Federation-era lime plaster and timber preservation during treatment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Coastal building material compatibility testing before application</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Post-Treatment Verification & Warranty</h3>
                <p className="text-muted-foreground mb-4">
                  Our Brighton post-treatment verification ensures complete mould elimination with comprehensive testing protocols designed for Melbourne's coastal conditions and heritage building requirements.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Independent laboratory air quality testing certified for coastal properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Moisture content verification in heritage building materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Clearance certificates for insurance claims and property sales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>12-month treatment warranty with coastal condition considerations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Our Brighton Mould Removal Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Professional Coastal Service</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Same-day service available to Brighton</li>
                    <li>• Storm damage mould prevention</li>
                    <li>• Professional moisture assessment</li>
                    <li>• Salt air exposure evaluation</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Specialized Coastal Inspection</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Beach environment property assessment</li>
                    <li>• Salt air corrosion evaluation</li>
                    <li>• Moisture penetration mapping</li>
                    <li>• Coastal-specific air quality testing</li>
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
                  <h3 className="text-xl font-semibold mb-2 text-primary">Coastal-Safe Remediation</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• IICRC-certified coastal processes</li>
                    <li>• Salt-resistant treatment methods</li>
                    <li>• Weatherboard-safe techniques</li>
                    <li>• Marine environment clearance testing</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-success-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Property Protection Planning</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Long-term coastal moisture management</li>
                    <li>• Insurance documentation for sea air damage</li>
                    <li>• Preventive maintenance scheduling</li>
                    <li>• Property value protection strategies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us in Brighton Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Why Choose Mould & Restoration Co. in Brighton Melbourne</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Local Brighton Knowledge Since 2019</h3>
                <p className="text-muted-foreground mb-4">
                  As Brighton's trusted coastal mould removal specialists with over 5 years of experience in Melbourne's bayside suburbs, we understand the unique challenges of salt air exposure, heritage Federation homes, and beachside property maintenance.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>5+ years specializing in Brighton coastal property mould issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>100+ Brighton properties successfully restored and protected</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Federation and weatherboard home preservation expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Salt air damage assessment and prevention strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">IICRC Certified Technicians & Professional Service</h3>
                <p className="text-muted-foreground mb-4">
                  Our IICRC-certified technicians provide professional service to Brighton coastal properties, operating 7am-7pm daily with same-day availability during business hours. ABN: 47 683 089 652.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>IICRC certification in mould remediation and water damage restoration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professional service guarantee to Brighton postcode 3186</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professional hotline: 1800 954 117 (7am-7pm daily)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Same-day service scheduling 7 days per week</span>
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
                  We work directly with all major Australian insurance providers and offer comprehensive documentation for claims related to storm damage, salt air corrosion, and mould growth in Brighton coastal properties.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Direct insurance billing available for approved coastal property claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Comprehensive salt air damage documentation and photo evidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>100% satisfaction guarantee on all Brighton mould removal work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>12-month warranty on professional coastal remediation services</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">5.0 Star Rating & Brighton Customer Reviews</h3>
                <p className="text-muted-foreground mb-4">
                  With over 50+ verified 5-star reviews from Brighton property owners, Federation home specialists, and bayside residents, we're the most trusted coastal mould removal service in Melbourne's southeast.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>5.0/5 star rating across Google, Facebook, and industry directories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>50+ verified customer reviews from Brighton coastal property owners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Trusted by Brighton Grammar School families and Bay Street businesses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Recommended by local Brighton real estate agents and property managers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Mould Prevention Tips for Brighton */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Local Mould Prevention Tips for Brighton Properties</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Melbourne Coastal Climate Considerations for Brighton</h3>
                <p className="text-muted-foreground mb-4">
                  Brighton's bayside location 11km from Melbourne CBD experiences intensified coastal weather patterns. Properties face salt air year-round, with seasonal variations affecting heritage buildings and modern coastal developments differently.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Summer (Dec-Feb):</strong> Monitor sea breeze moisture impact on weatherboard and window seals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Autumn (Mar-May):</strong> Clear coastal debris from gutters and check salt air damage to building materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Winter (Jun-Aug):</strong> Protect heritage timber from storm surge moisture and condensation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Spring (Sep-Nov):</strong> Assess weatherboard condition and reseal coastal-facing building elements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Brighton Salt Air & Ventilation Management</h3>
                <p className="text-muted-foreground mb-4">
                  Brighton's coastal properties require specialized ventilation strategies that account for constant salt air exposure while managing moisture levels. Heritage constraints and modern efficiency demands require balanced approaches.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Federation Homes:</strong> Install salt-resistant exhaust fans while preserving heritage character</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Beach Houses:</strong> Ensure cross-ventilation while protecting from salt spray intrusion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Modern Coastal Homes:</strong> Service HVAC systems with salt-air filters annually</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Basement Areas:</strong> Use marine-grade dehumidifiers during humid summer months</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Seasonal Maintenance for Brighton Coastal Buildings</h3>
                <p className="text-muted-foreground mb-4">
                  Brighton's heritage Federation homes and modern coastal developments require tailored seasonal maintenance schedules that account for salt air damage, storm exposure, and Melbourne's variable weather patterns.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Quarterly gutter cleaning to prevent salt-laden debris causing overflow onto weatherboard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Annual weatherboard and window seal inspection for salt air corrosion damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Spring roof and gutter assessment after winter storms affecting coastal properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage timber treatment with marine-grade sealants before peak summer exposure</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Warning Signs Specific to Brighton Coastal Properties</h3>
                <p className="text-muted-foreground mb-4">
                  Brighton's coastal properties display unique mould warning signs due to salt air exposure, heritage building materials, and constant moisture from Port Phillip Bay proximity.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Federation Homes:</strong> White salt crystallization on brick, paint peeling on weatherboard, musty odors in under-floor areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Beach Houses:</strong> Black spots around coastal-facing windows, timber window frame swelling and warping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Modern Coastal Homes:</strong> HVAC system salt corrosion odors, bathroom exhaust fan salt buildup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>All Property Types:</strong> Increased allergies during sea breeze conditions, salt residue on interior surfaces near windows</span>
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
          <h2 className="text-3xl font-bold text-primary mb-8">Areas We Service Near Brighton</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                We provide coastal-specialized mold removal services throughout Brighton and nearby beachside suburbs including:
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-medium text-primary">Brighton Areas:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Brighton Beach foreshore</li>
                    <li>• Church Street shopping district</li>
                    <li>• Brighton Grammar precinct</li>
                    <li>• Dendy Park surrounds</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-primary">Adjacent Coastal Suburbs:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Brighton East</li>
                    <li>• Hampton</li>
                    <li>• Sandringham</li>
                    <li>• Bentleigh</li>
                  </ul>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Professional Service Times to Brighton</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Professional response:</span>
                    <span className="font-semibold text-blue-600">Same-day available</span>
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
                    <span className="font-semibold text-primary">25-35 minutes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Coastal Suburbs */}
      <SuburbClusterLinks currentLocation="Brighton" />

      {/* Contact Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Get Your Free Brighton Mold Inspection Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Protect your Brighton coastal property from salt air and humidity damage. Expert mold assessment and remediation for beachside homes.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Coastal Property Contact</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span>1800 954 117 (Professional service 7am-7pm daily)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-accent-blue" />
                      <span>admin@mouldandrestoration.com.au</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent-teal" />
                      <span>Storm damage professional response available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Coastal Property Process</h3>
                  <div className="space-y-3 text-left text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                      <span>Free coastal property consultation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                      <span>Same-day Brighton inspection scheduling</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                      <span>Coastal-specific assessment and reporting</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                      <span>Salt air-resistant remediation methods</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
                      <span>Final testing and coastal protection plan</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Brighton Professional Service: 1800 954 117
              </Button>
              <Button variant="outline" size="lg">
                Schedule Coastal Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Serving Brighton and all bayside Melbourne suburbs • Coastal property specialists • Storm damage response available
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};