import { ArrowRight, Clock, Shield, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import { SuburbClusterLinks, StrategicLocationLinks } from "@/components/seo/InternalLinking";
import { OptimizedImage } from '../../components/OptimizedImage';
import { generateLocationImages, getOptimizedImage } from "@/utils/imageAssets";

export const PrincesHill = () => {
  const location = "PrincesHill";

  // Generate Princes Hill-specific optimized images
  const princesHillImages = generateLocationImages('PrincesHill');
  const galleryImages = [
    {
      src: '/src/assets/residential-inspection.jpg',
      location: 'PrincesHill',
      service: 'inspection' as const,
      context: 'heritage residential elevated hilltop property university area moisture assessment'
    },
    {
      src: '/src/assets/mould-removal.jpg',
      location: 'PrincesHill',
      service: 'removal' as const,
      context: 'elevated residential heritage character building professional mould elimination'
    },
    {
      src: '/src/assets/fogging-sanitisation.jpg',
      location: 'PrincesHill',
      service: 'fogging' as const,
      context: 'character home antimicrobial treatment heritage building sanitisation'
    },
    {
      src: '/src/assets/clean-residential-interior.jpg',
      location: 'PrincesHill',
      service: 'remediation' as const,
      context: 'restored character home post-treatment heritage preservation results'
    }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Princes Hill Mould Removal", href: "/services/mould-removal-princes-hill", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Optimization for Princes Hill Melbourne Mould Removal */}
      <LocationPageSEO
        location="Princes Hill"
        service="removal"
        emergency={false}
        title="Mould Removal Princes Hill Melbourne - University Area Heritage Terrace Specialists"
        description="Mould removal Princes Hill Melbourne - University area heritage terrace & student housing specialists. Victorian property moisture solutions. Expert service. Call 1800 954 117"
        canonical="https://mouldrestoration.com.au/services/mould-removal-princes-hill"
      />
      <LocalBusinessSchema
        pageName="Princes Hill Mould Removal"
        pageUrl="https://mouldrestoration.com.au/locations/princes-hill"
        serviceType="removal"
        location="Princes Hill"
      />
      <ServiceSchema
        serviceName="Mould Removal Princes Hill Melbourne"
        serviceDescription="Specialized mould removal for Princes Hill's university area heritage terraces and student housing properties. Expert treatment for Victorian building moisture, shared accommodation challenges, and heritage preservation."
        serviceUrl="https://mouldrestoration.com.au/locations/princes-hill"
        priceRange="$$"
        areaServed={["Princes Hill", "Carlton North", "Parkville", "North Melbourne", "Brunswick East"]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mouldrestoration.com.au/" },
          { name: "Services", url: "https://mouldrestoration.com.au/services" },
          { name: "Princes Hill Mould Removal", url: "https://mouldrestoration.com.au/services/mould-removal-princes-hill" }
        ]}
      />
      <Navigation />

      <main>
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
              Professional Mould Removal & Inspection in Princes Hill, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Melbourne's premier mould removal specialists serving Princes Hill's university area heritage terraces and student housing properties. IICRC-certified technicians with 5+ years experience treating Victorian building moisture issues, shared accommodation challenges, and heritage preservation requirements. Same-day service available, 100+ properties restored with 5.0/5 star rating from Princes Hill residents and property managers.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Same-day professional service to Princes Hill</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>University area property specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Heritage terrace expertise</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success" />
                  <span>Student housing solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Victorian building preservation</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call Princes Hill Professional Service: 1800 954 117
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
                Schedule Princes Hill Mould Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Princes Hill Melbourne Local Area Expertise */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Princes Hill Melbourne Local Area Expertise</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Princes Hill Property Landscape</h3>
                <p className="text-muted-foreground mb-4">
                  Princes Hill sits 3km north of Melbourne CBD adjacent to the University of Melbourne, encompassing postcode 3054. The suburb features predominantly Victorian-era terraces, heritage cottages, converted rooming houses for students, and modern apartment developments, creating unique challenges for shared accommodation and heritage preservation.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Victorian terraces from 1880s-1900s along Pigdon Street and Canning Street converted for student use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage worker's cottages and period homes with original features and shared wall construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Student accommodation conversions with multiple occupancy and high-density living arrangements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Contemporary apartment developments near university facilities with modern building standards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Melbourne Climate Impact on Princes Hill</h3>
                <p className="text-muted-foreground mb-4">
                  Princes Hill's university area location experiences Melbourne's temperate oceanic climate with elevated humidity from high occupancy densities and limited ventilation in converted heritage buildings. The suburb's urban setting and heritage building stock create unique moisture management challenges for student accommodation and family properties.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Summer humidity buildup in shared student accommodation with limited air conditioning and ventilation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Winter condensation issues in Victorian properties with poor thermal performance and high occupancy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Urban heat island effects affecting heritage buildings with limited insulation and modern upgrades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>High density living creating excess moisture from cooking, laundry, and bathroom use in shared spaces</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Local Princes Hill Landmarks & Challenges</h3>
                <p className="text-muted-foreground mb-4">
                  From Royal Park proximity to the University of Melbourne campus edge, Princes Hill's academic and recreational landmarks present specific mould challenges. Student housing conversions and heritage properties require specialised approaches for high-occupancy moisture management and preservation compliance.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>University of Melbourne proximity properties with student housing conversions and shared facilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Royal Park edge properties with parkland humidity and mature vegetation affecting drainage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage-protected Victorian terraces requiring conservation-approved treatment methods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>High-turnover rental properties requiring rapid treatment between tenancies and academic terms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Common Mould Issues in Princes Hill Properties</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Student Housing & Shared Accommodation Challenges</h3>
                <p className="text-muted-foreground mb-4">
                  Princes Hill's converted student housing and shared accommodation properties face unique challenges with high occupancy densities, limited ventilation systems, shared bathroom and kitchen facilities, and heritage building constraints affecting modern moisture management upgrades.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>High occupancy moisture from multiple residents using shared bathrooms, kitchens, and laundry facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Limited ventilation in converted Victorian properties with small rooms and shared air circulation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Student lifestyle patterns creating inconsistent heating, ventilation, and moisture control behaviors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Shared bathroom and kitchen humidity affecting adjacent bedrooms and common areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Rapid tenant turnover requiring quick treatment between academic terms and semester breaks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Princes Hill Victorian Heritage Specific Risk Factors</h3>
                <p className="text-muted-foreground mb-4">
                  Victorian-era terraces in Princes Hill experience intensified mould risks from original building materials, heritage preservation restrictions, shared wall construction, and adaptation challenges when converting period properties for modern student accommodation use.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Original lime mortar and brick construction with rising damp and shared wall moisture transfer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Heritage timber floors and ceiling construction with limited modern waterproofing and insulation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Period bathroom and kitchen conversions with modern usage exceeding original design capacity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Heritage window and door seals with poor thermal performance creating condensation zones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Conservation restrictions limiting installation of modern HVAC systems and ventilation upgrades</span>
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
          <h2 className="text-3xl font-bold text-primary mb-8">Princes Hill Property Types We Service</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Student Housing Conversions</h3>
                <p className="text-muted-foreground mb-4">Victorian terraces converted for student accommodation requiring specialised treatment for high-occupancy moisture management.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success" />
                    <span>High-occupancy moisture solutions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success" />
                    <span>Rapid treatment scheduling</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Heritage Victorian Terraces</h3>
                <p className="text-muted-foreground mb-4">Period properties requiring conservation-approved treatment methods while managing modern accommodation demands.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success" />
                    <span>Heritage preservation methods</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success" />
                    <span>Conservation-approved treatments</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">University Area Apartments</h3>
                <p className="text-muted-foreground mb-4">Modern residential developments near campus requiring contemporary moisture management for student and professional residents.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success" />
                    <span>Modern building compatibility</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success" />
                    <span>University area specialist service</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Our Princes Hill Mould Removal Process</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Initial Assessment & University Area Property Evaluation</h3>
                <p className="text-muted-foreground mb-4">
                  Our Princes Hill mould removal process begins with comprehensive university area property assessment using advanced thermal imaging technology specifically calibrated for student housing, heritage building materials, and high-occupancy residential environments.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Student accommodation moisture analysis for shared bathrooms, kitchens, and high-occupancy areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage Victorian building material evaluation and conservation-compliant treatment planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Shared accommodation ventilation system assessment and air quality testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>University area property management coordination for minimal academic term disruption</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Containment & Student Safety Protection</h3>
                <p className="text-muted-foreground mb-4">
                  Princes Hill's student housing properties require specialised containment strategies that protect residents' health while preventing mould spore migration through shared accommodation spaces and heritage buildings with interconnected areas.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Student accommodation-safe negative air pressure systems protecting shared living environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage property protective barriers preserving Victorian features during student accommodation treatment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Academic term scheduling coordination minimizing disruption to student residents and study periods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Shared facility protection protocols for communal kitchens, bathrooms, and study areas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Professional Princes Hill Mould Remediation Techniques</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Student Housing-Safe Mould Removal Methods</h3>
                <p className="text-muted-foreground mb-4">
                  Princes Hill's student housing and heritage properties demand specialised removal techniques that account for resident health safety, heritage preservation requirements, and high-occupancy accommodation environments with shared living arrangements.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Student accommodation-safe techniques certified for young adult health in shared living environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage Victorian property-compatible antimicrobial treatments preserving period features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Rapid treatment methods allowing quick turnaround between academic terms and semester breaks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>High-occupancy accommodation preservation methods protecting shared facilities and personal belongings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Post-Treatment Verification & Warranty</h3>
                <p className="text-muted-foreground mb-4">
                  Our Princes Hill post-treatment verification ensures complete mould elimination with comprehensive testing protocols designed for Melbourne's university area accommodation standards and heritage building requirements.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Independent laboratory air quality testing certified for student accommodation and heritage environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Moisture content verification in heritage timber, lime mortar, and Victorian building materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Student accommodation health clearance certificates for safe residential occupancy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>12-month treatment warranty with university area and heritage property considerations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Our Princes Hill Mould Removal Services</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Professional University Area Service</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Same-day service available to Princes Hill</li>
                    <li>• Student housing mould specialist</li>
                    <li>• Professional moisture assessment</li>
                    <li>• Academic term scheduling coordination</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Specialized University Area Inspection</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Student accommodation air quality assessment</li>
                    <li>• Heritage Victorian terrace evaluation</li>
                    <li>• Shared facility moisture mapping</li>
                    <li>• High-occupancy specific testing</li>
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
                  <h3 className="text-xl font-semibold mb-2 text-primary">Student Housing-Safe Remediation</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• IICRC-certified student accommodation processes</li>
                    <li>• Heritage preservation treatments</li>
                    <li>• Rapid turnaround techniques</li>
                    <li>• University area clearance testing</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">University Property Protection Planning</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Long-term student accommodation moisture management</li>
                    <li>• Property management coordination</li>
                    <li>• Academic term preventive maintenance</li>
                    <li>• Heritage property protection strategies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us in Princes Hill Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Why Choose Mould & Restoration Co. in Princes Hill Melbourne</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Local Princes Hill Knowledge Since 2019</h3>
                <p className="text-muted-foreground mb-4">
                  As Princes Hill's trusted university area mould removal specialists with over 5 years of experience in Melbourne's inner north suburbs, we understand the unique challenges of student housing, heritage terraces, and high-occupancy accommodation properties.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>5+ years specialising in Princes Hill student accommodation and heritage property mould issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>100+ Princes Hill student housing conversions and Victorian terraces successfully restored</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage preservation and student accommodation safety expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>University area property management coordination and academic term scheduling strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">IICRC Certified Technicians & Professional Service</h3>
                <p className="text-muted-foreground mb-4">
                  Our IICRC-certified technicians provide professional service to Princes Hill university area properties, operating 7am-7pm daily with same-day availability during business hours. ABN: 47 683 089 652.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>IICRC certification in mould remediation and water damage restoration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professional service guarantee to Princes Hill postcode 3054</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professional hotline: 1800 954 117 (7am-7pm daily)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
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
                  We work directly with all major Australian insurance providers and offer comprehensive documentation for claims related to student housing damage, heritage building moisture, and mould growth in Princes Hill university area properties.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Direct insurance billing available for approved student accommodation and heritage property claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Comprehensive university area property damage documentation and photo evidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>100% satisfaction guarantee on all Princes Hill mould removal work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>12-month warranty on professional student accommodation remediation services</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">5.0 Star Rating & Princes Hill Customer Reviews</h3>
                <p className="text-muted-foreground mb-4">
                  With over 50+ verified 5-star reviews from Princes Hill property managers, student residents, and heritage property owners, we're the most trusted university area mould removal service in Melbourne's inner north.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>5.0/5 star rating across Google, Facebook, and industry directories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>50+ verified customer reviews from Princes Hill student accommodation and property managers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Trusted by University of Melbourne area property managers and student housing providers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Recommended by local Princes Hill heritage consultants and university area real estate agents</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Get Your Free Princes Hill Mould Inspection Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Protect your Princes Hill student accommodation or heritage property from moisture damage. Expert mould assessment and remediation for university area properties and heritage preservation.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">University Area Property Contact</h3>
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
                      <span>Student accommodation specialist response available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">University Area Property Process</h3>
                  <div className="space-y-3 text-left text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                      <span>Free university area property consultation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                      <span>Same-day Princes Hill inspection scheduling</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                      <span>Student accommodation-specific assessment and reporting</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                      <span>Heritage-safe and student-safe remediation methods</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
                      <span>Final testing and academic term protection plan</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Princes Hill Professional Service: 1800 954 117
              </Button>
              <Button variant="outline" size="lg">
                Schedule University Area Property Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Serving Princes Hill and all inner north Melbourne suburbs • University area specialists • Student accommodation experts
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Internal Linking for Location to Service SEO */}


      </main>
    </div>
  );
};

export default PrincesHill;
