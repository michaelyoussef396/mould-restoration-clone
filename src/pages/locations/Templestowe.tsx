import { ArrowRight, Clock, Shield, MapPin, Phone, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import { SuburbClusterLinks } from "@/components/seo/InternalLinking";

export const Templestowe = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Templestowe Mould Removal", href: "/services/mould-removal-templestowe", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Optimization for Templestowe Melbourne Mould Removal */}
      <LocationPageSEO
        location="Templestowe"
        service="removal"
        emergency={false}
        title="Mould Removal Templestowe Melbourne - Yarra River Proximity Specialists"
        description="Professional mould removal Templestowe Melbourne - Yarra River proximity specialists. Family estate expertise. Expert service. Call 1800 954 117"
        canonical="https://mouldrestoration.com.au/services/mould-removal-templestowe"
      />
      <LocalBusinessSchema
        pageName="Templestowe Mould Removal"
        pageUrl="https://mouldrestoration.com.au/locations/templestowe"
        serviceType="removal"
        location="Templestowe"
      />
      <ServiceSchema
        serviceName="Mould Removal Templestowe Melbourne"
        serviceDescription="Specialized mould removal for Templestowe's eastern suburbs properties, family estates, and Yarra River proximity homes. Expert treatment for riverside properties, established homes, and luxury estates."
        serviceUrl="https://mouldrestoration.com.au/locations/templestowe"
        priceRange="$$"
        areaServed={["Templestowe", "Templestowe Lower", "Doncaster East", "Warrandyte", "Bulleen"]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mouldrestoration.com.au/" },
          { name: "Services", url: "https://mouldrestoration.com.au/services" },
          { name: "Templestowe Mould Removal", url: "https://mouldrestoration.com.au/services/mould-removal-templestowe" }
        ]}
      />
      <Navigation />

      {/* Professional Service Bar */}
      <div className="bg-primary text-white py-2 px-4 text-center text-sm font-medium">
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
              Professional Mould Removal & Inspection in Templestowe, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Melbourne's premier mould removal specialists serving Templestowe's eastern suburbs family estates, Yarra River proximity properties, and established family homes. IICRC-certified technicians with 5+ years experience treating riverside properties, luxury estates, and established homes. Same-day service available, 100+ properties restored with 5.0/5 star rating from Templestowe homeowners.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Same-day professional service to Templestowe</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Yarra River proximity specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Family estate preservation expertise</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success" />
                  <span>Riverside property treatment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Luxury home solutions</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call Templestowe Professional Service: 1800 954 117
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
                Schedule Templestowe Mould Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Templestowe Melbourne Local Area Expertise */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Templestowe Melbourne Local Area Expertise</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Templestowe Property Landscape</h3>
                <p className="text-muted-foreground mb-4">
                  Templestowe sits 15km northeast of Melbourne CBD, encompassing postcodes 3106 and serving as one of Melbourne's premier eastern suburbs riverside communities. The suburb stretches from the Yarra River to Macedon Road, featuring an distinguished mix of luxury family estates, established homes, and riverside properties with extensive mature landscaping.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Luxury family estates from 1980s-2000s with extensive grounds and pools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Yarra River proximity properties with natural flood plain considerations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Established family homes with mature native and European gardens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Contemporary architectural homes taking advantage of river and valley views</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Melbourne Climate Impact on Templestowe</h3>
                <p className="text-muted-foreground mb-4">
                  Templestowe's eastern suburbs location combines Melbourne's temperate oceanic climate with significant Yarra River influence and valley microclimate effects. Annual rainfall of 650mm combines with river proximity humidity and established vegetation to create complex moisture management challenges.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Summer river valley humidity creating elevated moisture levels around properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Winter fog and mist from Yarra River affecting riverside and valley properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Established tree canopy creating natural humidity pockets around family homes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Valley drainage patterns affecting foundation moisture and landscaping</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Local Templestowe Landmarks & Challenges</h3>
                <p className="text-muted-foreground mb-4">
                  From Westfield Doncaster shopping centre proximity to the Yarra River parklands, Templestowe's premium residential community presents specific mould challenges. High-value properties and riverside locations require expert moisture management while maintaining luxury living standards.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Yarra River parklands and wetlands affecting nearby property humidity levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Macedon Road established homes with mature landscape moisture challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Thompson Reserve and Ruffey Lake Park proximity affecting drainage patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Eastern Freeway corridor properties with traffic-related condensation issues</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Common Mould Issues in Templestowe Properties</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Riverside & Valley Property Challenges</h3>
                <p className="text-muted-foreground mb-4">
                  Templestowe's riverside and valley properties face unique mould challenges from Yarra River proximity, natural flood plain considerations, and the complex interaction between luxury home features and natural moisture from the river environment.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Yarra River proximity creating year-round elevated humidity and moisture conditions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Natural flood plain drainage affecting foundation areas and basement levels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>River mist and fog penetration through inadequate building seals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Luxury home features like wine cellars and basements in high-moisture environments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Extensive landscaping irrigation combining with natural river moisture</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Templestowe Luxury Estate Risk Factors</h3>
                <p className="text-muted-foreground mb-4">
                  Templestowe's luxury family estates and established properties experience specific mould risks from extensive grounds, swimming pools, entertainment areas, and the complex interaction between large homes and their surrounding mature garden environments.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Large swimming pools and spas contributing to localized humidity around homes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Extensive outdoor entertainment areas with inadequate moisture barriers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Multi-level luxury homes with complex roof systems and potential leak points</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Home theaters and basement entertainment areas in naturally moist environments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Luxury lifestyle patterns including frequent entertaining affecting humidity levels</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Service Details */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Professional Mould Removal Service Details for Templestowe</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">IICRC Certification & Melbourne Expertise</h3>
                <p className="text-muted-foreground mb-4">
                  Our Templestowe mould removal team holds comprehensive IICRC (Institute of Inspection, Cleaning and Restoration Certification) credentials specifically relevant to riverside properties, luxury estates, and Melbourne's eastern suburbs unique moisture challenges.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Water Damage Restoration (WRT) certification for riverside and luxury home environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Applied Structural Drying (ASD) for complex estate buildings and luxury materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mould remediation specialist training for high-value residential properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Eastern suburbs and riverside property expertise with natural environment considerations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Templestowe-Specific Treatment Approaches</h3>
                <p className="text-muted-foreground mb-4">
                  Our approach to Templestowe properties recognizes the unique requirements of luxury estates, riverside proximity considerations, and the specific challenges of maintaining high-value homes in naturally moist eastern suburbs environments.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Luxury home-appropriate treatment methods preserving high-value finishes and features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Riverside property techniques accounting for ongoing moisture from river proximity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Coordinated scheduling around luxury lifestyle patterns and home entertainment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Estate landscaping and pool area moisture management integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Advanced Equipment & Technology for Templestowe Properties</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Luxury Estate Assessment Technology</h3>
                <p className="text-muted-foreground mb-4">
                  Templestowe's luxury estate environment requires advanced diagnostic equipment capable of comprehensive assessment across large properties, complex building systems, and riverside moisture conditions while protecting valuable furnishings and finishes.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Thermal imaging cameras for large estate comprehensive moisture mapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professional moisture meters calibrated for luxury building materials and finishes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Luxury home-safe air quality testing equipment with immediate precision results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Riverside and valley moisture impact assessment with environmental monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Luxury Home-Safe Treatment Equipment</h3>
                <p className="text-muted-foreground mb-4">
                  Our Templestowe operations utilise professional-grade equipment designed for luxury home environments, ensuring effective treatment while protecting valuable furnishings, artwork, and high-end finishes throughout the remediation process.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>HEPA-filtered air systems ensuring luxury home air quality during treatment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Ultra-quiet equipment for minimal disruption to luxury lifestyle patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>High-end dehumidification systems suitable for valuable contents and finishes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Luxury material-safe drying equipment protecting estate building elements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us in Templestowe Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Why Choose Mould & Restoration Co. in Templestowe Melbourne</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Local Templestowe Luxury Estate Expertise Since 2019</h3>
                <p className="text-muted-foreground mb-4">
                  As Templestowe's trusted luxury estate and riverside mould removal specialists with over 5 years of experience in Melbourne's premier eastern suburbs communities, we understand the unique requirements of high-value properties, riverside locations, and established family estates.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>5+ years specialising in Templestowe luxury estate and riverside property issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>100+ Melbourne luxury properties and estates successfully restored</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Eastern suburbs riverside and valley property specialised experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Luxury lifestyle-focused service approach with privacy and discretion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">IICRC Certified Technicians & Professional Service</h3>
                <p className="text-muted-foreground mb-4">
                  Our IICRC-certified technicians provide professional service to Templestowe luxury estates and residential properties, operating 7am-7pm daily with same-day availability during business hours. ABN: 47 683 089 652.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>IICRC certification in mould remediation and luxury property restoration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professional service guarantee to Templestowe postcode 3106</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professional hotline: 1800 954 117 (7am-7pm daily)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Same-day service scheduling with luxury lifestyle accommodation</span>
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
                  We work directly with all major Australian insurance providers and luxury property insurance programs, offering comprehensive documentation for claims related to weather events, riverside moisture damage, and high-value property concerns.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Direct insurance billing for approved luxury property and estate claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Comprehensive documentation for high-value property insurance requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>100% satisfaction guarantee on all Templestowe luxury estate services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>12-month warranty on professional luxury estate remediation services</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">5.0 Star Rating & Templestowe Estate Reviews</h3>
                <p className="text-muted-foreground mb-4">
                  With over 50+ verified 5-star reviews from Templestowe estate owners, luxury property specialists, and eastern suburbs families, we're Melbourne's most trusted luxury estate mould removal service specialising in riverside and premium residential areas.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>5.0/5 star rating across Google, luxury directories, and estate community networks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>50+ verified reviews from Templestowe luxury estate owners and residents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Trusted by local luxury builders and high-end property maintenance companies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Recommended by eastern suburbs real estate agents specialising in luxury properties</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comprehensive Service Process */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Our Comprehensive 5-Step Templestowe Luxury Estate Mould Removal Process</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Step 1: Initial Assessment & Estate Consultation</h3>
                <p className="text-muted-foreground mb-4">
                  Our Templestowe assessment process begins with comprehensive evaluation designed for luxury estates, considering riverside proximity, valuable contents, and the specific moisture challenges of eastern suburbs premium properties.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Luxury estate assessment with valuable contents and finishes protection analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Riverside property evaluation with moisture source and environmental documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Estate landscaping and pool area moisture impact comprehensive evaluation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Step 2: Luxury-Safe Containment & Asset Protection</h3>
                <p className="text-muted-foreground mb-4">
                  Templestowe luxury estates require specialised containment strategies that protect valuable furnishings, artwork, and high-end finishes while maintaining estate functionality and luxury lifestyle comfort throughout treatment.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Luxury estate negative air systems protecting valuable contents and finishes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>High-value asset protection with museum-quality conservation barriers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Estate functionality maintenance ensuring continued luxury lifestyle operations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Step 3: Safe Removal & Estate Preservation</h3>
                <p className="text-muted-foreground mb-4">
                  Our removal process for Templestowe properties utilises luxury-appropriate methods suitable for high-value estates, ensuring effective treatment while maintaining property value and luxury standard preservation.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Luxury-safe techniques suitable for high-value estates with premium finishes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Estate-appropriate antimicrobial treatments preserving luxury materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Coordinated scheduling around luxury lifestyle and entertainment patterns</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Step 4: Advanced Drying & Luxury Environment Restoration</h3>
                <p className="text-muted-foreground mb-4">
                  Templestowe luxury estates require sophisticated drying strategies that account for riverside moisture, valuable contents, and the need to restore luxury living environments to pristine condition quickly and effectively.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Luxury estate dehumidification systems suitable for valuable contents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>High-end building material-appropriate drying protecting luxury finishes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Continuous monitoring ensuring optimal luxury living environment conditions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Step 5: Final Testing & Estate Quality Certification</h3>
              <p className="text-muted-foreground mb-4">
                Our final verification ensures complete treatment success with comprehensive testing protocols designed for luxury estate standards, providing documentation suitable for high-value property requirements and insurance compliance.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <span>Independent laboratory air quality testing meeting luxury estate health standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <span>Luxury building material moisture verification and premium finish preservation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <span>Comprehensive clearance certificates for luxury estate insurance documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <span>12-month treatment warranty with luxury estate service support included</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Local Service Area */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Areas We Service Near Templestowe</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                We provide luxury estate-specialised mould removal services throughout Templestowe and nearby eastern suburbs Melbourne areas including:
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-medium text-primary">Templestowe Areas:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Yarra River parklands proximity</li>
                    <li>• Macedon Road established homes</li>
                    <li>• Thompson Reserve surrounds</li>
                    <li>• Eastern Freeway corridor</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-primary">Adjacent Eastern Suburbs:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Templestowe Lower</li>
                    <li>• Doncaster East</li>
                    <li>• Bulleen</li>
                    <li>• Warrandyte</li>
                  </ul>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Professional Service Times to Templestowe</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Luxury estate emergency:</span>
                    <span className="font-semibold text-primary">Same-day available</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Standard estate appointments:</span>
                    <span className="font-semibold text-success">Same day or next day</span>
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

      {/* Contact Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Get Your Free Templestowe Estate Inspection Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Protect your Templestowe luxury estate with expert mould assessment and remediation for premium residential properties and manicured gardens.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Luxury Estate Contact</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span>1800 954 117 (Professional service 7am-7pm daily)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-accent-blue" />
                      <span>admin@mouldandrestoration.com.au</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent-teal" />
                      <span>Luxury estate emergency response available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Luxury Estate Process</h3>
                  <div className="space-y-3 text-left text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                      <span>Free luxury estate consultation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                      <span>Same-day Templestowe inspection scheduling</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                      <span>Luxury-safe assessment and riverside evaluation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                      <span>High-value property-appropriate remediation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
                      <span>Final testing and luxury estate quality certification</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Templestowe Professional Service: 1800 954 117
              </Button>
              <Button variant="outline" size="lg">
                Schedule Luxury Estate Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Serving Templestowe luxury estates and properties • Eastern suburbs specialists • Riverside property experts
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};