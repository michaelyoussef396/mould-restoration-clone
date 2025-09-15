import { ArrowRight, Clock, Shield, MapPin, Phone, Star, CheckCircle, AlertTriangle, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";

export const Armadale = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    { label: "Armadale Mould Removal", href: "/locations/armadale", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        title="Mould Removal Armadale Melbourne - Professional Service - Same-day Available 7am-7pm | Mould & Restoration Co"
        description="Professional mould removal in Armadale Melbourne. IICRC certified, Same-day professional service. Call 1800 954 117 for same-day Armadale mould inspection & removal."
        suburb="Armadale"
        postcode="3143"
        canonicalUrl="https://mouldrestorationco.com.au/locations/armadale"
      />
      <LocalBusinessSchema
        businessName="Mould & Restoration Co"
        suburb="Armadale"
        state="Victoria"
        postcode="3143"
        phone="1800 954 117"
        email="info@mouldrestorationco.com.au"
        abn="47 683 089 652"
        services={["Mould Inspection", "Mould Removal", "Mould Remediation"]}
        serviceAreas={["Armadale", "Toorak", "Malvern", "Kooyong", "Glen Iris"]}
      />
      <ServiceSchema
        serviceName="Mould Removal Armadale"
        description="Professional mould removal and remediation services in Armadale Melbourne"
        provider="Mould & Restoration Co"
        areaServed="Armadale, Melbourne, Victoria"
        availableChannel="https://mouldrestorationco.com.au/locations/armadale"
      />
      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Armadale</span>
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
              Professional Mould Removal & Inspection in Armadale, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Emergency mould removal in Armadale Melbourne with same-day response. IICRC-certified technicians specializing in leafy suburban properties, heritage homes, and modern family residences. 5.0 stars, 100+ properties restored.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>Same-day emergency response to Armadale</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Leafy suburban specialist service</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Family home preservation methods</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Garden suburb moisture solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>High Street commercial corridor expertise</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Professional Mould Service - Call Now: 1800 954 117
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
                Schedule Free Armadale Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Mould Removal Armadale Melbourne - Local Area Expertise</h2>

          <div className="mb-12">
            <p className="text-lg text-muted-foreground mb-6">
              Our mould removal Armadale Melbourne team understands the unique challenges facing this leafy suburban community. Located in postcode 3143, Armadale combines established family homes with modern residential developments, creating specific moisture management challenges. With a mix of heritage properties, contemporary houses, and the bustling High Street commercial precinct, Armadale presents distinctive mould risks that require specialized suburban expertise.
            </p>

            <p className="text-lg text-muted-foreground mb-6">
              The suburb's mature tree canopy, established garden settings, and family-oriented architecture creates unique humidity levels and ventilation challenges. Properties near the railway line, along High Street, and in the quiet residential streets experience different moisture patterns due to varying building ages, architectural styles, and landscaping influences. Our emergency mould removal Armadale service responds Same-day professional service to protect your family home or commercial property.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Garden Suburb Challenges</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Mature trees creating moisture microclimates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Family homes with complex ventilation needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Garden irrigation affecting foundation moisture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Family-sensitive treatment requirements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Armadale-Specific Risk Factors</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Railway line proximity creating humidity pockets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Established landscaping moisture retention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Family home multiple moisture sources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>High Street commercial humidity spillover</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6">Why Choose Our Mould Inspection Armadale Service</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">Garden Suburb Specialists</h4>
                <p className="text-muted-foreground mb-4">
                  Our mould treatment Armadale Melbourne specialists have extensive experience with the suburb's unique garden suburb challenges. From established family homes to modern High Street developments, we understand how Melbourne's leafy suburban environment affects moisture patterns across postcode 3143 and surrounding areas.
                </p>

                <h4 className="text-xl font-semibold mb-4 text-primary">IICRC Certified Family-Safe Service</h4>
                <p className="text-muted-foreground mb-4">
                  All our technicians are IICRC certified with specialized training in family home and suburban property remediation techniques. We understand Armadale residents need safe, family-friendly service that protects children and pets. Our mould removal Armadale Melbourne service includes comprehensive family safety assessments.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">Suburban Professional Service - Same-day Available 7am-7pm</h4>
                <p className="text-muted-foreground mb-4">
                  When you need urgent mould removal Armadale, our emergency response team reaches your property Same-day professional service. Operating 7am-7pm every day with ABN 47 683 089 652, we provide immediate containment and assessment with family-safe methods. Our 100% satisfaction guarantee ensures complete peace of mind.
                </p>

                <h4 className="text-xl font-semibold mb-4 text-primary">Comprehensive Property Protection</h4>
                <p className="text-muted-foreground mb-4">
                  From initial thermal imaging inspection to final clearance testing, our mould inspection Armadale service covers every aspect of property protection. We provide detailed reports for family safety and insurance claims, plus ongoing maintenance recommendations specific to your property type and Armadale's leafy suburban environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Mould Removal Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Professional Mould Removal Process for Armadale Properties</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Advanced Assessment Technology</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Family-Safe Thermal Imaging</h4>
                    <p className="text-muted-foreground text-sm">Our mould inspection Armadale service uses advanced thermal imaging to detect hidden moisture in family walls, garden-facing areas, and home features without disruption to daily family routines or children's safety.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Comprehensive Family Air Quality Testing</h4>
                    <p className="text-muted-foreground text-sm">Thorough air sampling throughout your Armadale property and outdoor areas to identify mould spore concentrations affecting family health. Results compared against Australian family home safety standards.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emergency-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Suburban Property Moisture Mapping</h4>
                    <p className="text-muted-foreground text-sm">Detailed moisture level documentation across your property and landscaped areas to identify source patterns and create targeted treatment plans specific to Armadale's garden suburb architecture.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Family-Safe Remediation Methods</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-success-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Containment and Family Protection</h4>
                    <p className="text-muted-foreground text-sm">Professional containment systems protect family areas and children's spaces during treatment. Safe protocols ensure minimal disruption to your Armadale family home and daily activities.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Family-Compliant Treatment</h4>
                    <p className="text-muted-foreground text-sm">Specialized techniques for Armadale's family homes that meet child and pet safety standards while eliminating mould. Expert coordination with family schedules and school routines.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Final Verification and Documentation</h4>
                    <p className="text-muted-foreground text-sm">Post-treatment air quality testing and visual inspection ensures complete mould removal and family safety. Comprehensive reporting for family health records and insurance claims with child-safe clearance protocols.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention and Maintenance */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Armadale Property Mould Prevention Tips</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Garden Suburb Climate Management</h3>
                <p className="text-muted-foreground mb-4">Understanding how Melbourne's leafy suburban environment affects your Armadale property throughout the seasons.</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                    <span>Mature tree canopy moisture impact</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                    <span>Garden irrigation moisture management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                    <span>Seasonal humidity pattern awareness</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                    <span>Railway proximity humidity monitoring</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Family Home Maintenance</h3>
                <p className="text-muted-foreground mb-4">Specific maintenance strategies for Armadale's family homes and garden properties to prevent moisture issues.</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                    <span>Family ventilation system optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                    <span>Garden drainage moisture prevention</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                    <span>Multiple room moisture source identification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                    <span>Child and pet safe maintenance methods</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Family Home Warning Signs</h3>
                <p className="text-muted-foreground mb-4">Early detection signs specific to Armadale family properties with children's areas and pet spaces.</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full"></div>
                    <span>Musty odors in children's bedrooms or play areas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full"></div>
                    <span>Condensation on family room windows</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full"></div>
                    <span>Garden-facing wall moisture stains</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full"></div>
                    <span>Family health symptoms increasing indoors</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Property Types & Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Armadale Property Types We Service</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Established Family Homes</h3>
                <p className="text-muted-foreground mb-4">Multi-generational family homes with mature gardens requiring comprehensive moisture management approaches.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Family-safe treatment methods</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Child and pet protection</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Garden Suburb Properties</h3>
                <p className="text-muted-foreground mb-4">Properties with extensive landscaping and outdoor entertainment areas requiring specialized moisture solutions.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Garden moisture management</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Outdoor area integration</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">High Street Commercial Properties</h3>
                <p className="text-muted-foreground mb-4">Commercial properties along High Street requiring business-friendly treatment approaches.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Business continuity focus</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Commercial moisture solutions</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Our Armadale Mould Removal Services</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emergency-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Family Professional Service - Same-day Available 7am-7pm</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• 2-hour response time to Armadale</li>
                    <li>• Family schedule coordination</li>
                    <li>• Immediate child and pet safety protection</li>
                    <li>• School routine accommodation</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Family Home Inspection</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Comprehensive family property assessments</li>
                    <li>• Garden and outdoor area moisture mapping</li>
                    <li>• Child-safe air quality testing</li>
                    <li>• Family health focused reporting</li>
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
                  <h3 className="text-xl font-semibold mb-2 text-primary">Family-Safe Remediation</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• IICRC-certified family-safe processes</li>
                    <li>• Child and pet friendly methods</li>
                    <li>• Family area protection protocols</li>
                    <li>• Minimal daily routine disruption</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-success-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Family Support Services</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Family health consultation</li>
                    <li>• Comprehensive documentation for family records</li>
                    <li>• Family insurance coordination</li>
                    <li>• Child-safe prevention recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Service Area */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Areas We Service Near Armadale</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                We provide family home and garden suburb mould removal services throughout Armadale and nearby areas including:
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-medium text-primary">Armadale Areas:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• High Street shopping district</li>
                    <li>• Railway station precinct</li>
                    <li>• Residential family streets</li>
                    <li>• Garden suburb areas</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-primary">Adjacent Suburbs:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Toorak</li>
                    <li>• Malvern</li>
                    <li>• Kooyong</li>
                    <li>• Glen Iris</li>
                  </ul>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Rapid Response Times to Armadale</h3>
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
                    <span className="text-muted-foreground">Suburban travel time:</span>
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
            <h2 className="text-3xl font-bold text-primary mb-6">Get Your Free Armadale Mould Inspection Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Protect your Armadale family home from mould damage. Expert service designed for family safety and garden suburb living.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Family-Friendly Contact</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span>1800 954 117 (Professional service hotline (7am-7pm))</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-accent-blue" />
                      <span>info@mouldrestorationco.com.au</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent-teal" />
                      <span>Family schedule coordination available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Family Service Process</h3>
                  <div className="space-y-3 text-left text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                      <span>Free family home consultation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                      <span>Family schedule coordination</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                      <span>Child and pet safe inspection</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                      <span>Family-friendly remediation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
                      <span>Final clearance and family safety certification</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Armadale Family Emergency: 1800 954 117
              </Button>
              <Button variant="outline" size="lg">
                Schedule Family Home Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Mould & Restoration Co. • ABN: 47 683 089 652 • 5.0 stars, 100+ properties restored • 7am-7pm Every Day
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};