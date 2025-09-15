import { ArrowRight, Clock, Shield, MapPin, Phone, Star, CheckCircle, AlertTriangle, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";

export const Prahran = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    { label: "Prahran Mould Removal", href: "/locations/prahran", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        title="Mould Removal Prahran Melbourne - Professional Service - Same-day Available 7am-7pm | Mould & Restoration Co"
        description="Prahran Chapel Street & commercial district mould experts. Retail space specialists treating nightlife venues & mixed-use properties. Expert service. Call 1800 954 117"
        suburb="Prahran"
        postcode="3181"
        canonicalUrl="https://mouldrestorationco.com.au/locations/prahran"
      />
      <LocalBusinessSchema
        businessName="Mould & Restoration Co"
        suburb="Prahran"
        state="Victoria"
        postcode="3181"
        phone="1800 954 117"
        email="info@mouldrestorationco.com.au"
        abn="47 683 089 652"
        services={["Mould Inspection", "Mould Removal", "Mould Remediation"]}
        serviceAreas={["Prahran", "South Yarra", "Windsor", "St Kilda", "Armadale"]}
      />
      <ServiceSchema
        serviceName="Mould Removal Prahran"
        description="Professional mould removal and remediation services in Prahran Melbourne"
        provider="Mould & Restoration Co"
        areaServed="Prahran, Melbourne, Victoria"
        availableChannel="https://mouldrestorationco.com.au/locations/prahran"
      />
      <Navigation />
      
      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Prahran - ABN 47 683 089 652</span>
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
              Professional Mould Removal & Inspection in Prahran Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Melbourne's premier mould removal specialists serving Prahran (3181). Expert professional service for Chapel Street entertainment district, fashion boutiques, and mixed-use developments. IICRC certified technicians, 5.0-star rating, 100+ properties restored.
            </p>

            <div className="flex items-center gap-6 mb-6 text-primary-foreground/90">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-semibold">5.0 Stars</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>100+ Properties Restored</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span>IICRC Certified</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-blue-600" />
                  <span>Same-day professional service to Prahran Melbourne</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Chapel Street entertainment district specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Mixed-use development mould solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-success-green" />
                  <span>After-hours service for nightlife venues</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Boutique apartment building expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Fashion retail space protection</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-blue" />
                  <span>Insurance claims welcome</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>ABN 47 683 089 652</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Professional Mould Service - Call Now: 1800 954 117
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
                Schedule Free Prahran Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Expert Mould Removal in Prahran Melbourne 3181</h2>

          <div className="prose prose-lg max-w-4xl mb-12">
            <p className="text-lg text-muted-foreground mb-6">
              Mould & Restoration Co specialises in professional mould removal Prahran Melbourne, serving the vibrant entertainment district with professional service and comprehensive mould remediation services. Our IICRC certified technicians understand the unique challenges facing Prahran's mixed residential and commercial properties, from Chapel Street's bustling fashion boutiques to the area's characteristic mixed-use developments.
            </p>

            <p className="text-lg text-muted-foreground mb-6">
              Located in postcode 3181, Prahran combines trendy apartment living with one of Melbourne's premier entertainment precincts. The suburb's distinctive blend of heritage buildings converted to apartments, modern mixed-use developments, and commercial spaces creates specific moisture management challenges. From Prahran Market's heritage buildings to the contemporary developments along Commercial Road, our mould inspection Prahran services address the unique environmental factors affecting properties in this dynamic Melbourne suburb.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-primary mb-8">Mould Issues Common in Prahran Melbourne Properties</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4 text-primary">Entertainment District Challenges</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-accent-teal mt-1 flex-shrink-0" />
                    <span>Mixed-use developments with commercial ground floors and residential apartments above creating complex moisture pathways</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-accent-teal mt-1 flex-shrink-0" />
                    <span>Chapel Street's high-density nightlife venues contributing to elevated humidity levels in surrounding properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-accent-teal mt-1 flex-shrink-0" />
                    <span>Boutique apartment buildings with unique layouts and limited natural ventilation pathways</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-accent-teal mt-1 flex-shrink-0" />
                    <span>Fashion retail spaces with basement storage areas prone to rising damp and poor air circulation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4 text-primary">Prahran 3181 Specific Risk Factors</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Proximity to Prahran Market heritage buildings creating microclimatic moisture retention in surrounding developments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Commercial Road's busy traffic corridor contributing to air quality issues and building moisture seal problems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Heritage warehouse conversions with original masonry creating thermal bridging and condensation issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Modern apartment developments with sealed building design lacking adequate natural ventilation for Melbourne's humid climate</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-bold text-primary mb-8">Our Professional Mould Removal Process for Prahran Properties</h3>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-primary">Emergency Assessment</h4>
                <p className="text-muted-foreground mb-4">Rapid response mould inspection Prahran with advanced thermal imaging and moisture mapping technology specifically designed for mixed-use developments and entertainment district properties.</p>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Same-day professional service to Prahran 3181</li>
                  <li>• Thermal imaging for hidden moisture</li>
                  <li>• Air quality testing for commercial spaces</li>
                  <li>• Business continuity assessment</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent-teal rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-primary">Containment & Safety</h4>
                <p className="text-muted-foreground mb-4">IICRC-certified containment protocols for Prahran's unique mixed commercial-residential environments, protecting both business operations and resident health.</p>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Negative air pressure systems</li>
                  <li>• Retail space protection barriers</li>
                  <li>• Residential tenant safety measures</li>
                  <li>• After-hours work scheduling</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-success-green rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-primary">Professional Remediation</h4>
                <p className="text-muted-foreground mb-4">Complete mould removal Prahran Melbourne using IICRC certified techniques, with specialized approaches for heritage conversions and modern apartment complexes.</p>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• HEPA filtration and removal</li>
                  <li>• Structural drying and dehumidification</li>
                  <li>• Anti-microbial treatment application</li>
                  <li>• Post-treatment clearance testing</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 mb-8">
            <h4 className="text-lg font-semibold mb-4 text-primary">Why Prahran Properties Choose Mould & Restoration Co</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-1 flex-shrink-0" />
                    <span><strong>Local Melbourne expertise</strong> - 5+ years serving Prahran's entertainment district with deep understanding of local property challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-1 flex-shrink-0" />
                    <span><strong>Mixed-use specialists</strong> - Expert coordination between commercial and residential spaces in the same building</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-1 flex-shrink-0" />
                    <span><strong>Business-friendly scheduling</strong> - After-hours and weekend service to minimize disruption to Chapel Street businesses</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-1 flex-shrink-0" />
                    <span><strong>Insurance approved</strong> - Direct billing welcome with comprehensive documentation for all insurance claims</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-1 flex-shrink-0" />
                    <span><strong>5.0 star rating</strong> - 100+ properties successfully restored across Melbourne with verified customer testimonials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-1 flex-shrink-0" />
                    <span><strong>ABN 47 683 089 652</strong> - Fully licensed and insured with IICRC certified technicians</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types & Services */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Specialized Mould Services for Prahran Melbourne Property Types</h2>

          <div className="prose prose-lg max-w-4xl mb-12">
            <p className="text-lg text-muted-foreground mb-6">
              Prahran's unique position as Melbourne's premier entertainment and fashion district creates diverse property challenges requiring specialized mould removal expertise. From Chapel Street's heritage conversions to Commercial Road's modern mixed-use developments, our professional mould removal Prahran services are tailored to each property type's specific moisture management requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Boutique Apartment Buildings</h3>
                <p className="text-muted-foreground mb-4">Contemporary designer apartment complexes throughout Prahran requiring specialized moisture management to protect high-end finishes and resident health.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Premium interior finish protection</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Body corporate coordination</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Tenant-friendly scheduling</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Mixed-Use Developments</h3>
                <p className="text-muted-foreground mb-4">Complex buildings with commercial ground floors and residential apartments above, requiring coordinated mould management across different use zones.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Multi-zone containment systems</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Business continuity planning</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Cross-contamination prevention</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Chapel Street Fashion Retail</h3>
                <p className="text-muted-foreground mb-4">Boutique fashion stores, showrooms, and retail spaces requiring minimal disruption mould treatment to protect valuable inventory and maintain business operations.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Inventory protection protocols</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>After-hours service priority</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Rapid response capabilities</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Entertainment Venues</h3>
                <p className="text-muted-foreground mb-4">Restaurants, bars, and nightlife establishments in Prahran's entertainment district requiring specialized commercial mould remediation and prevention strategies.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Health department compliance</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Kitchen and bar area expertise</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Minimal downtime solutions</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Heritage Warehouse Conversions</h3>
                <p className="text-muted-foreground mb-4">Historic industrial buildings converted to apartments or commercial spaces, requiring specialized approaches for original masonry and heritage building constraints.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Heritage building compliance</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Original fabric preservation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Masonry treatment expertise</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Commercial Office Spaces</h3>
                <p className="text-muted-foreground mb-4">Modern office developments and shared workspaces throughout Commercial Road requiring professional-grade air quality management and minimal workplace disruption.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Workplace health compliance</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Off-hours treatment scheduling</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Documentation for tenancy</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Comprehensive Mould Removal Services for Prahran Melbourne</h2>

          <div className="prose prose-lg max-w-4xl mb-8">
            <p className="text-lg text-muted-foreground mb-6">
              Our professional mould removal Prahran Melbourne services combine IICRC-certified techniques with local expertise to address the entertainment district's unique environmental challenges. From professional service for Chapel Street businesses to comprehensive remediation for mixed-use developments, we provide specialized solutions for Prahran's diverse property portfolio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emergency-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Professional Service - Same-day Available 7am-7pm Prahran</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Same-day professional service time to Prahran 3181</li>
                    <li>• 7am-7pm daily availability for entertainment venue situations</li>
                    <li>• Rapid containment for mixed-use developments</li>
                    <li>• Fashion retail inventory protection protocols</li>
                    <li>• After-hours service to minimize business disruption</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Professional Mould Inspection Prahran</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Thermal imaging for Chapel Street heritage buildings</li>
                    <li>• Commercial-grade air quality testing</li>
                    <li>• Mixed-use building comprehensive assessments</li>
                    <li>• Entertainment venue humidity monitoring</li>
                    <li>• Pre-purchase inspections for investment properties</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-teal rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Heritage Building Mould Treatment</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Warehouse conversion specialized techniques</li>
                    <li>• Original masonry preservation methods</li>
                    <li>• Heritage compliance documentation</li>
                    <li>• Thermal bridging moisture management</li>
                    <li>• Period building ventilation solutions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-success-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Commercial Mould Remediation</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Business continuity-focused treatment plans</li>
                    <li>• Retail space minimally disruptive methods</li>
                    <li>• Restaurant and bar health compliance</li>
                    <li>• Office space air quality restoration</li>
                    <li>• Insurance documentation and direct billing</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Apartment Complex Services</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Body corporate liaison and coordination</li>
                    <li>• Multi-unit building containment systems</li>
                    <li>• Tenant-friendly scheduling and communication</li>
                    <li>• Common area treatment protocols</li>
                    <li>• Strata documentation and compliance</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Preventive Maintenance Programs</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Regular monitoring for entertainment venues</li>
                    <li>• Seasonal moisture management programs</li>
                    <li>• Early detection systems installation</li>
                    <li>• Humidity control optimization</li>
                    <li>• Melbourne climate adaptation strategies</li>
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
          <h2 className="text-3xl font-bold text-primary mb-8">Mould Prevention Tips for Prahran Melbourne Properties</h2>

          <div className="prose prose-lg max-w-4xl mb-12">
            <p className="text-lg text-muted-foreground mb-6">
              Understanding Melbourne's climate impact on Prahran properties is essential for effective mould prevention. The entertainment district's unique microclimate, combined with mixed-use developments and high-density living, creates specific challenges requiring proactive moisture management strategies tailored to postcode 3181.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4 text-primary">Entertainment District Climate Control</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-1 flex-shrink-0" />
                    <span>Install commercial-grade ventilation in basement retail spaces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-1 flex-shrink-0" />
                    <span>Monitor humidity levels during Melbourne's humid summer months</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-1 flex-shrink-0" />
                    <span>Address thermal bridging in heritage warehouse conversions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4 text-primary">Mixed-Use Building Maintenance</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-1 flex-shrink-0" />
                    <span>Coordinate ventilation between commercial and residential zones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-1 flex-shrink-0" />
                    <span>Regular building envelope inspections for moisture penetration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-1 flex-shrink-0" />
                    <span>Professional moisture barrier maintenance in shared walls</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4 text-primary">Seasonal Melbourne Considerations</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-1 flex-shrink-0" />
                    <span>Pre-winter humidity control system checks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-1 flex-shrink-0" />
                    <span>Summer rainfall drainage system maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green mt-1 flex-shrink-0" />
                    <span>Chapel Street microclimate moisture monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-bold text-primary mb-8">Professional Mould Removal Service Areas Near Prahran</h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Mould & Restoration Co provides rapid professional mould removal services throughout Prahran Melbourne 3181 and surrounding entertainment district areas. Our 2-hour response commitment covers all property types from Chapel Street fashion boutiques to Commercial Road mixed-use developments.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-medium text-primary">Prahran Precincts (3181):</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Chapel Street fashion and entertainment precinct</li>
                    <li>• Greville Street boutique shopping quarter</li>
                    <li>• Prahran Market heritage area and surrounds</li>
                    <li>• Commercial Road business and mixed-use corridor</li>
                    <li>• Williams Road residential and apartment zone</li>
                    <li>• Toorak Road commercial and retail spaces</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-primary">Adjacent Melbourne Suburbs:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• <a href="/locations/south-yarra" className="text-accent-blue hover:underline">South Yarra</a> (5 minutes)</li>
                    <li>• <a href="/locations/windsor" className="text-accent-blue hover:underline">Windsor</a> (8 minutes)</li>
                    <li>• <a href="/locations/st-kilda" className="text-accent-blue hover:underline">St Kilda</a> (10 minutes)</li>
                    <li>• <a href="/locations/armadale" className="text-accent-blue hover:underline">Armadale</a> (12 minutes)</li>
                    <li>• <a href="/locations/toorak" className="text-accent-blue hover:underline">Toorak</a> (8 minutes)</li>
                    <li>• <a href="/locations/malvern" className="text-accent-blue hover:underline">Malvern</a> (15 minutes)</li>
                  </ul>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4 text-primary">Professional Response Times to Prahran 3181</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Emergency mould response:</span>
                    <span className="font-semibold text-blue-600">Within 2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Commercial property appointments:</span>
                    <span className="font-semibold text-success-green">Same day scheduling</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">After-hours entertainment venues:</span>
                    <span className="font-semibold text-accent-blue">Available 7 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Travel from Melbourne CBD:</span>
                    <span className="font-semibold text-primary">10-15 minutes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Service hours:</span>
                    <span className="font-semibold text-accent-teal">7am-7pm daily</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-primary">ABN 47 683 089 652</strong> - Licensed & Insured • IICRC Certified • 5.0 Star Rating • 100+ Properties Restored
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Professional Mould Inspection Prahran Melbourne - Call 1800 954 117</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Protect your Prahran property or business with expert mould assessment from Melbourne's premier remediation specialists. Professional service for Chapel Street entertainment district, mixed-use developments, and boutique apartment buildings throughout postcode 3181.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Expert Prahran Mould Removal Contact</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span><strong>1800 954 117</strong> (Professional service line response)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-accent-blue" />
                      <span>info@mouldrestorationco.com.au</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent-teal" />
                      <span>7am-7pm daily service hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-success-green" />
                      <span>ABN 47 683 089 652 - Licensed & Insured</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span>5.0 stars - 100+ properties restored</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Professional Mould Removal Process</h3>
                  <div className="space-y-3 text-left text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                      <span><strong>Free consultation</strong> - Professional service to Prahran 3181 Same-day response</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                      <span><strong>Professional inspection</strong> - Thermal imaging and air quality testing</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                      <span><strong>IICRC certified treatment</strong> - Specialized techniques for mixed-use buildings</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                      <span><strong>Business-friendly remediation</strong> - Minimal disruption, after-hours available</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
                      <span><strong>Clearance certification</strong> - Final testing and documentation for insurance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Professional Mould Removal Prahran: 1800 954 117
              </Button>
              <Button variant="outline" size="lg">
                Schedule Free Prahran Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="bg-muted/30 rounded-lg p-6 mt-8">
              <h4 className="text-lg font-semibold mb-4 text-primary">Why Choose Mould & Restoration Co for Prahran Properties?</h4>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h5 className="font-semibold text-primary mb-2">Local Melbourne Expertise</h5>
                  <p className="text-sm text-muted-foreground">5+ years specializing in Prahran's entertainment district and mixed-use developments</p>
                </div>
                <div>
                  <h5 className="font-semibold text-primary mb-2">Entertainment District Specialists</h5>
                  <p className="text-sm text-muted-foreground">After-hours service for Chapel Street venues, business continuity focus</p>
                </div>
                <div>
                  <h5 className="font-semibold text-primary mb-2">Proven Track Record</h5>
                  <p className="text-sm text-muted-foreground">100+ properties restored, 5.0-star rating, IICRC certified technicians</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              <strong>Professional mould removal Prahran Melbourne</strong> • Entertainment district specialists • Mixed-use building experts • Professional service 7am-7pm daily • ABN 47 683 089 652
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};