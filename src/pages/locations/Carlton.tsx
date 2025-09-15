import { ArrowRight, Clock, Shield, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";

export const Carlton = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Carlton Mold Removal", href: "/services/mold-removal-carlton", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Optimization for Carlton Melbourne Mould Removal */}
      <LocationPageSEO
        location="Carlton"
        service="removal"
        emergency={false}
        title="Mould Removal Carlton Melbourne - Victorian Heritage Property Specialists"
        description="Expert mould removal Carlton Melbourne. Heritage property specialists treating Victorian terraces and student housing. University precinct professionals. Call 1800 954 117 for same-day service."
      />
      <LocalBusinessSchema
        pageName="Carlton Mould Removal"
        pageUrl="https://mouldrestoration.com.au/locations/carlton"
        serviceType="removal"
        location="Carlton"
      />
      <ServiceSchema
        serviceName="Mould Removal Carlton Melbourne"
        serviceDescription="Specialized mould removal for Carlton's heritage properties. Expert treatment for Victorian terraces, student housing, and university precinct buildings."
        serviceUrl="https://mouldrestoration.com.au/locations/carlton"
        priceRange="$$"
        areaServed={["Carlton", "Carlton North", "Fitzroy", "North Melbourne", "Parkville"]}
      />
      <Navigation />
      
      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Carlton</span>
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
              Professional Mould Removal & Inspection in Carlton, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Melbourne's premier mould removal specialists serving Carlton's heritage properties and university precinct. IICRC-certified technicians with 5+ years experience treating Victorian terraces, student housing, and heritage buildings. same-day professional service, 100+ properties restored with 5.0/5 star rating.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>Same-day professional service to Carlton</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Heritage property mould specialists</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Victorian terrace expertise</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>University precinct service</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Student housing treatment</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Professional Mould Service - Call Now: 1800 954 117
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
                Schedule Free Carlton Mould Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Expertise Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Carlton Melbourne Local Area Expertise</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Carlton Property Landscape</h3>
                <p className="text-muted-foreground mb-4">
                  Carlton sits just 2km north of Melbourne CBD, bordered by Royal Parade, Nicholson Street, and Grattan Street. Known for its eclectic mix of Victorian terraces, Edwardian homes, and modern apartments, Carlton presents unique mould challenges across different architectural styles.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Victorian terraces from the 1880s-1900s with solid brick construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Edwardian homes with weatherboard features along Drummond Street</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>1960s-80s apartment blocks near University of Melbourne</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Contemporary developments along Swanston Street corridor</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Melbourne Climate Impact on Carlton</h3>
                <p className="text-muted-foreground mb-4">
                  Carlton experiences Melbourne's temperate oceanic climate with annual rainfall of 650mm. The inner-city location creates urban heat island effects while heritage buildings struggle with modern ventilation demands during Melbourne's humid summers and wet winters.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Summer humidity peaks in January-February affecting student housing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Winter condensation in heritage properties with poor insulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Urban runoff affecting basement levels in Lygon Street precinct</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Local Carlton Landmarks & Challenges</h3>
                <p className="text-muted-foreground mb-4">
                  From the Royal Exhibition Building to Lygon Street's famous Italian quarter, Carlton's heritage significance requires specialized mould treatment approaches that preserve architectural integrity while ensuring occupant health.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage overlay restrictions requiring approved treatment methods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Lygon Street commercial properties with aging ventilation systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>University of Melbourne proximity affecting rental property turnover</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Common Mould Issues in Carlton Properties</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Victorian Heritage Property Challenges</h3>
                <p className="text-muted-foreground mb-4">
                  Carlton's Victorian terraces, built between 1880-1920, present unique mould challenges due to their solid brick construction, lime mortar joints, and original timber flooring systems over suspended floors.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Basement and cellar moisture from original bluestone foundations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Shared party walls with moisture transfer between properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Original timber window frames with condensation issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Heritage ventilation restrictions limiting modern extraction systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Original slate roofing with age-related water penetration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">University Precinct Specific Risk Factors</h3>
                <p className="text-muted-foreground mb-4">
                  Carlton's role as Melbourne's university precinct creates specific mould challenges in high-occupancy student housing, boarding houses, and rental properties with rapid tenant turnover.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>High-occupancy student housing with excess moisture from multiple residents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Rental property maintenance deferred by transient occupancy patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Converted boarding houses with inadequate ventilation for current use</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Aging apartment blocks near Royal Parade with building envelope failures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Commercial kitchen conversions in share houses creating excess humidity</span>
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
          <h2 className="text-3xl font-bold text-primary mb-8">Carlton Property Types We Service</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Victorian Terraces</h3>
                <p className="text-muted-foreground mb-4">Heritage-listed terraces from 1880s-1920s featuring solid brick construction, slate roofs, and bluestone foundations requiring specialized preservation treatments.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Heritage-sensitive techniques</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Basement moisture control</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Party wall treatments</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Student Accommodation</h3>
                <p className="text-muted-foreground mb-4">High-occupancy rental properties, boarding houses, and share houses serving University of Melbourne students with rapid turnover schedules.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Fast turnaround for tenants</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Landlord liaison service</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Between-semester scheduling</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Modern Apartments</h3>
                <p className="text-muted-foreground mb-4">Contemporary developments along Swanston Street and Carlton Gardens area with building envelope and mechanical ventilation issues.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Building management liaison</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Minimal resident disruption</span>
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
                <h3 className="text-lg font-semibold mb-3 text-primary">Commercial Properties</h3>
                <p className="text-muted-foreground mb-4">Lygon Street restaurants, University precinct offices, and mixed-use buildings requiring specialized commercial mould treatment protocols.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>After-hours service</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Business continuity planning</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Food safety compliance</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Our Carlton Mould Removal Process</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Initial Assessment & Thermal Imaging</h3>
                <p className="text-muted-foreground mb-4">
                  Our Carlton mould removal process begins with comprehensive property assessment using advanced thermal imaging technology specifically calibrated for Melbourne's heritage building materials and modern construction methods.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage building moisture mapping for Victorian terraces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Student housing high-occupancy impact assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Basement and cellar moisture penetration analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Party wall moisture transfer evaluation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Containment & Safety Protocols</h3>
                <p className="text-muted-foreground mb-4">
                  Carlton's high-density housing requires specialized containment strategies to prevent mould spore migration between properties and protect neighboring residents, particularly in shared terrace walls and student accommodations.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Negative air pressure systems for terraced properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage-appropriate protective barriers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Student housing resident notification protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Minimal disruption scheduling for high-occupancy buildings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Professional Remediation Techniques</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Heritage-Appropriate Mould Removal</h3>
                <p className="text-muted-foreground mb-4">
                  Carlton's Victorian and Edwardian properties require specialized techniques that preserve architectural integrity while effectively eliminating mould colonies from heritage building materials.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Low-invasive techniques for heritage plaster and lime mortar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Bluestone foundation moisture barrier treatments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Original timber preservation during remediation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage overlay compliance documentation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Post-Treatment Verification</h3>
                <p className="text-muted-foreground mb-4">
                  Our Carlton post-treatment verification ensures complete mould elimination with comprehensive testing protocols designed for Melbourne's climate conditions and building standards.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Independent laboratory air quality testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Moisture content verification in heritage materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Clearance certificates for insurance claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>12-month treatment warranty</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us in Carlton Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Why Choose Mould & Restoration Co. in Carlton Melbourne</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Local Melbourne Knowledge Since 2019</h3>
                <p className="text-muted-foreground mb-4">
                  As Carlton's trusted mould removal specialists with over 5 years of experience in Melbourne's inner suburbs, we understand the unique challenges of heritage properties, university housing, and modern apartments in this diverse precinct.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>5+ years specializing in Carlton heritage property mould issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>100+ Carlton properties successfully restored</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>University precinct student housing expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage building preservation specialists</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">IICRC Certified Technicians & Same-Day Response</h3>
                <p className="text-muted-foreground mb-4">
                  Our IICRC-certified technicians provide professional service Same-day professional service to Carlton properties, operating 7am-7pm daily with Professional service line availability. ABN: 47 683 089 652.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>IICRC certification in mould remediation and water damage restoration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Same-day professional service guarantee to Carlton postcodes 3053, 3054</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professional service line: 1800 954 117</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
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
                  We work directly with all major Australian insurance providers and offer comprehensive documentation for claims related to water damage, storm damage, and mould growth in Carlton properties.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Direct insurance billing available for approved claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Comprehensive damage documentation and photo evidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>100% satisfaction guarantee on all Carlton mould removal work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>12-month warranty on professional remediation services</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">5.0 Star Rating & Customer Reviews</h3>
                <p className="text-muted-foreground mb-4">
                  With over 50+ verified 5-star reviews from Carlton property owners, landlords, and University of Melbourne staff, we're the most trusted mould removal service in the inner north.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>5.0/5 star rating across Google, Facebook, and industry directories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>50+ verified customer reviews from Carlton property owners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Trusted by University of Melbourne for campus-adjacent properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Recommended by local real estate agents and property managers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Mould Prevention Tips for Carlton */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Local Mould Prevention Tips for Carlton Properties</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Melbourne Climate Considerations for Carlton</h3>
                <p className="text-muted-foreground mb-4">
                  Carlton's inner-city location experiences Melbourne's temperate oceanic climate with specific challenges from urban heat island effects, higher humidity levels near the Yarra River, and seasonal weather patterns affecting heritage buildings.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Summer (Dec-Feb):</strong> Monitor air conditioning condensation in heritage properties without adequate insulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Autumn (Mar-May):</strong> Check gutters and downpipes before heavy rains affect bluestone foundations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Winter (Jun-Aug):</strong> Increase ventilation in student housing to combat condensation from heating systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Spring (Sep-Nov):</strong> Inspect slate roofs and timber window frames for weather damage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Carlton Humidity & Ventilation Management</h3>
                <p className="text-muted-foreground mb-4">
                  Carlton's high-density housing, from Victorian terraces to modern apartments, requires specific ventilation strategies to prevent mould growth while respecting heritage constraints and managing high occupancy levels.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Heritage Properties:</strong> Install heritage-appropriate exhaust fans in bathrooms and kitchens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Student Housing:</strong> Ensure adequate ventilation for high-occupancy situations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Basements & Cellars:</strong> Use dehumidifiers during Melbourne's wet months (Jun-Sep)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Modern Apartments:</strong> Regularly clean and maintain mechanical ventilation systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Seasonal Maintenance for Carlton Buildings</h3>
                <p className="text-muted-foreground mb-4">
                  Carlton's diverse architectural styles require tailored seasonal maintenance approaches, from Victorian terrace upkeep to modern apartment building management, accounting for Melbourne's variable weather patterns.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Inspect and clean heritage gutters quarterly to prevent overflow onto bluestone foundations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Check party walls for shared moisture issues between terraced properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Service heating systems before winter to prevent condensation in student housing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Seal timber window frames annually to prevent moisture penetration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Warning Signs Specific to Carlton Building Types</h3>
                <p className="text-muted-foreground mb-4">
                  Carlton's unique mix of heritage and modern properties presents distinct warning signs that require immediate attention to prevent extensive mould growth and costly remediation.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Victorian Terraces:</strong> Musty odors in basements, white salt deposits on brick walls, paint peeling on heritage plaster</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Student Housing:</strong> Black spots around windows, increased allergy symptoms, condensation on single-glazed glass</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Modern Apartments:</strong> HVAC system odors, bathroom exhaust fan issues, carpet dampness near sliding doors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Commercial Properties:</strong> Lygon Street restaurants with kitchen ventilation problems, office buildings with poor air quality</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comprehensive Carlton Service Coverage Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Comprehensive Carlton Melbourne Service Coverage</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Carlton Professional Service - Same-day Available 7am-7pm Network</h3>
                <p className="text-muted-foreground mb-4">
                  Our Carlton mould removal professional service network ensures rapid deployment to all Carlton postcodes (3053, 3054) Same-day professional service of your call. Operating from our Melbourne base, we maintain specialized equipment ready for University precinct and heritage property situations.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professional mould removal Carlton: 2-hour response guarantee 7am-7pm daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Carlton heritage property emergency protocols for Victorian terraces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>University of Melbourne semester break scheduling for student housing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Lygon Street commercial property after-hours emergency service</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Carlton Mould Inspection Specialists</h3>
                <p className="text-muted-foreground mb-4">
                  Professional mould inspection Carlton services using IICRC-certified assessment protocols specifically designed for heritage properties, student housing, and University precinct buildings across Carlton North and Carlton proper.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Carlton mould inspection: Same-day scheduling 7 days per week</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage Victorian terrace moisture assessment and documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Student housing high-occupancy air quality testing protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Insurance-compliant inspection reports for Carlton property claims</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Advanced Carlton Mould Treatment Technologies</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Thermal Imaging Assessment</h3>
                <p className="text-muted-foreground mb-4">Advanced thermal imaging technology reveals hidden moisture patterns in Carlton's heritage buildings and modern developments.</p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Shield className="w-3 h-3 text-accent-teal" />
                    <span>Heritage building moisture mapping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-3 h-3 text-accent-teal" />
                    <span>Party wall moisture detection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-3 h-3 text-accent-teal" />
                    <span>Bluestone foundation analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Air Quality Monitoring</h3>
                <p className="text-muted-foreground mb-4">Comprehensive air quality testing for Carlton student housing and commercial properties using laboratory-certified protocols.</p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Shield className="w-3 h-3 text-success-green" />
                    <span>Student housing air quality certification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-3 h-3 text-success-green" />
                    <span>Commercial property compliance testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-3 h-3 text-success-green" />
                    <span>Heritage property safe air verification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Specialized Equipment</h3>
                <p className="text-muted-foreground mb-4">Professional-grade equipment designed for Carlton's unique property challenges, from Victorian terraces to modern apartments.</p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Shield className="w-3 h-3 text-accent-blue" />
                    <span>Heritage-safe containment systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-3 h-3 text-accent-blue" />
                    <span>High-capacity dehumidification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-3 h-3 text-accent-blue" />
                    <span>HEPA air filtration systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Carlton Business and Property Owner Services */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Carlton Business & Property Owner Services</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Lygon Street Commercial Property Services</h3>
                <p className="text-muted-foreground mb-4">
                  Specialized mould treatment Carlton for Lygon Street's famous Italian restaurants, cafes, and retail spaces. Our commercial protocols ensure minimal business disruption while maintaining food safety compliance and customer health standards.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>After-hours Carlton mould removal for restaurants and cafes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Food safety compliance mould treatment protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Commercial kitchen exhaust and ventilation system cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage commercial building preservation during treatment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Student Housing Property Management</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive mould inspection Carlton and treatment services for student housing providers, boarding houses, and rental properties. We understand University semester schedules and high-occupancy property challenges.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Between-semester mould treatment Carlton scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Property manager liaison and direct billing services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>High-occupancy property ventilation improvement recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Rental property maintenance schedule integration</span>
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
          <h2 className="text-3xl font-bold text-primary mb-8">Areas We Service Near Carlton Melbourne</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Our Carlton mould removal specialists provide comprehensive services throughout the University precinct and surrounding inner-city Melbourne areas, with specialized knowledge of heritage properties and high-density housing challenges.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-medium text-primary">Carlton Precincts (3053, 3054):</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• University of Melbourne campus precinct</li>
                    <li>• Lygon Street Italian restaurant quarter</li>
                    <li>• Carlton Gardens & Royal Exhibition Building area</li>
                    <li>• Princes Park residential surrounds</li>
                    <li>• Drummond Street heritage corridor</li>
                    <li>• Swanston Street mixed-use developments</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-primary">Adjacent Inner Melbourne Suburbs:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Carlton North (3054)</li>
                    <li>• Fitzroy (3065)</li>
                    <li>• North Melbourne (3051)</li>
                    <li>• Parkville (3052)</li>
                    <li>• Melbourne CBD (3000)</li>
                    <li>• East Melbourne (3002)</li>
                  </ul>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Carlton Response Times & Service Coverage</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Emergency mould response:</span>
                    <span className="font-semibold text-blue-600">Within 2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Standard inspection appointments:</span>
                    <span className="font-semibold text-success-green">Same day or next day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Weekend & public holiday service:</span>
                    <span className="font-semibold text-accent-blue">7 days a week</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Travel time from Melbourne CBD:</span>
                    <span className="font-semibold text-primary">8-15 minutes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">University semester scheduling:</span>
                    <span className="font-semibold text-accent-teal">Available</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Carlton Postcodes Serviced:</strong> 3053, 3054 and all adjacent inner Melbourne suburbs within 10km radius.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Get Your Free Carlton Mould Inspection Today</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Protect your Carlton heritage property, student housing, or modern apartment from mould damage. Our IICRC-certified specialists provide same-day response with over 5 years of University precinct experience.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Carlton Heritage Property Contact</h3>
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
                      <span>Operating: 7am-7pm daily</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-success-green" />
                      <span>ABN: 47 683 089 652</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Carlton Service Process</h3>
                  <div className="space-y-3 text-left text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                      <span>Free consultation about your Carlton property type and mould concerns</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                      <span>Same-day or next-day inspection appointment scheduling</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                      <span>Heritage-appropriate assessment with thermal imaging technology</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                      <span>Professional remediation preserving architectural integrity</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
                      <span>Final clearance testing with 12-month warranty documentation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">University & Student Housing</h3>
                  <div className="space-y-3 text-left text-sm">
                    <div className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-success-green mt-1 flex-shrink-0" />
                      <span><strong>Landlord Services:</strong> Direct communication with property managers for rental properties</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-success-green mt-1 flex-shrink-0" />
                      <span><strong>Student Scheduling:</strong> Between-semester treatment scheduling to minimize disruption</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-success-green mt-1 flex-shrink-0" />
                      <span><strong>Insurance Claims:</strong> Comprehensive documentation for water damage and mould claims</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-success-green mt-1 flex-shrink-0" />
                      <span><strong>Professional Service - Same-day Available 7am-7pm:</strong> same-day professional service response for urgent Carlton mould situations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-success-green mt-1 flex-shrink-0" />
                      <span><strong>University Precinct:</strong> Specialized service for high-occupancy student accommodations</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent-blue/10 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">Carlton Melbourne Mould Professional Service - Same-day Available 7am-7pm</h3>
              <p className="text-center text-muted-foreground mb-6">
                Serving Carlton's heritage properties, student housing, and modern developments with Melbourne's most trusted mould removal specialists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Professional Service - Same-day Available 7am-7pm: 1800 954 117
                </Button>
                <Button variant="outline" size="lg" className="bg-white text-primary border-primary hover:bg-primary hover:text-white">
                  Schedule Carlton Heritage Property Inspection
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="text-center">
                <p className="text-muted-foreground">
                  <strong>Carlton Service Areas:</strong> University of Melbourne precinct, Lygon Street, Carlton Gardens, Drummond Street heritage corridor, Swanston Street developments
                </p>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground">
                  <strong>Response Guarantee:</strong> Emergency calls Same-day professional service to Carlton postcodes 3053, 3054 • Same-day inspection scheduling • 7 days a week availability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};