import { ArrowRight, Clock, Shield, MapPin, Phone, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";

export const Fitzroy = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Fitzroy Mould Removal", href: "/services/mould-removal-fitzroy", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Fitzroy"
        title="Mould Removal Fitzroy Melbourne - Emergency Response | Mould & Restoration Co"
        description="Professional mould removal in Fitzroy Melbourne. IICRC certified, 2-hour emergency response. Call 1800 954 117 for same-day Fitzroy mould inspection & removal."
        canonical="/services/mould-removal-fitzroy"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        serviceArea="Fitzroy, Melbourne"
        address="Fitzroy, Victoria, Australia"
        phone="1800 954 117"
        email="info@mouldrestoration.com.au"
        abn="47 683 089 652"
        description="Professional mould removal and inspection services in Fitzroy Melbourne. IICRC certified technicians specializing in heritage properties, artist studios, and creative spaces."
      />

      <ServiceSchema
        serviceName="Mould Removal Fitzroy Melbourne"
        serviceType="Mould Remediation"
        areaServed="Fitzroy, Melbourne, Victoria"
        description="Emergency mould removal and inspection services for Fitzroy properties including heritage terraces, artist studios, and converted warehouses."
      />

      <Navigation />
      
      {/* Emergency Response Bar */}
      <div className="emergency-bar">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>24/7 Emergency Mould Response in Fitzroy</span>
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
              Professional Mould Removal & Inspection in Fitzroy, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Emergency mould removal Fitzroy Melbourne specialists with 5+ years experience. IICRC-certified technicians serving Fitzroy's creative quarter with same-day response for heritage terraces, artist studios, and converted warehouses. Trusted by 100+ Melbourne properties with 5.0-star rating.
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
                  <span>2-hour emergency response to Fitzroy</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Creative quarter mould specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Artist studio mould solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success-green" />
                  <span>Brunswick Street precinct expertise</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Heritage terrace preservation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-accent-teal" />
                  <span>ABN 47 683 089 652 - Fully licensed</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-accent-blue" />
                  <span>7am-7pm every day service</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emergency-orange" />
                  <span>Postcode 3065 - Local experts</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="emergency-cta">
                <Phone className="w-5 h-5 mr-2" />
                Fitzroy Mould Emergency: 1800 954 117
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
                Free Fitzroy Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Mould Removal Fitzroy Melbourne - Local Expertise</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  <strong>Mould & Restoration Co.</strong> provides emergency mould removal Fitzroy Melbourne with deep understanding of this vibrant inner-city suburb. Located in postcode <strong>3065</strong>, Fitzroy is Melbourne's original bohemian quarter, famous for its creative scene along <strong>Brunswick Street</strong>, <strong>Gertrude Street</strong>, and <strong>Rose Street</strong>. Our IICRC-certified technicians understand the unique mould challenges facing Fitzroy's heritage terraces, artist studios, and converted warehouses.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Professional mould inspection Fitzroy Melbourne services by Mould & Restoration Co. address the complex moisture issues common in this historic area. Fitzroy's Victorian-era terraces, dating back to the 1860s-1880s, often feature original timber construction and heritage preservation requirements. Our team provides expert mould removal Fitzroy Melbourne while respecting heritage overlay restrictions and maintaining the character of these iconic properties.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  Emergency mould removal Fitzroy Melbourne is essential for the suburb's thriving creative community. From <strong>Edinburgh Gardens</strong> surrounds to the <strong>Fitzroy Town Hall</strong> precinct, our local expertise extends throughout Fitzroy's diverse property portfolio. We serve artist studios in converted warehouses, heritage cottages, modern apartments, and share houses popular with Melbourne's creative professionals.
                </p>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Fitzroy 3065 Service Areas</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent-blue" />
                    <span>Brunswick Street arts precinct</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent-blue" />
                    <span>Gertrude Street gallery district</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent-blue" />
                    <span>Rose Street artist quarter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent-blue" />
                    <span>Edinburgh Gardens surrounds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent-blue" />
                    <span>Fitzroy Town Hall precinct</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent-blue" />
                    <span>Nicholson Street heritage strip</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent-blue" />
                    <span>Webb Street creative laneways</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent-blue" />
                    <span>Smith Street retail corridor</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Common Mould Issues in Fitzroy Melbourne Properties</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Heritage Property Challenges</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Victorian terrace poor subfloor ventilation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Original timber flooring moisture retention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Heritage limestone and brick rising damp</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Slate roof water penetration issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Cast iron plumbing system failures</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Creative Space Mould Problems</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Artist studio inadequate ventilation systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Warehouse conversion humidity accumulation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Share house overcrowding moisture issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Creative material storage mould growth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Laneway property unique drainage challenges</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Melbourne Climate Impact on Fitzroy */}
          <div className="bg-muted/30 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6">Melbourne Climate Impact on Fitzroy Mould Issues</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-4">
                  Fitzroy Melbourne's inner-city location creates unique mould risk factors. The suburb's heritage building stock, combined with Melbourne's humid subtropical climate (average annual rainfall 648mm), creates ideal conditions for mould growth. Our professional mould removal Fitzroy Melbourne team understands these local factors:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Winter condensation:</strong> Heritage single-glazed windows in Victorian terraces</li>
                  <li>• <strong>Summer humidity:</strong> Poor airflow in converted warehouse studios</li>
                  <li>• <strong>Autumn leaf blockages:</strong> Plane tree debris blocking gutters and drains</li>
                  <li>• <strong>Spring rain penetration:</strong> Aging terrace roof systems requiring maintenance</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Fitzroy Property Age Impact</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>1860s-1880s terraces:</strong> Original construction lacking damp courses</li>
                  <li>• <strong>1920s-1950s cottages:</strong> Weatherboard moisture penetration</li>
                  <li>• <strong>1980s-2000s conversions:</strong> Inadequate heritage-compliant upgrades</li>
                  <li>• <strong>Modern apartments:</strong> New building defects and poor ventilation</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Emergency mould removal Fitzroy Melbourne by Mould & Restoration Co. addresses each property type with appropriate techniques and heritage considerations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types & Services */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Fitzroy Property Types - Professional Mould Removal Melbourne</h2>

          <div className="grid lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Victorian Heritage Terraces</h3>
                <p className="text-muted-foreground mb-4">1860s-1890s terraces along Brunswick Street, Gertrude Street, and surrounding laneways requiring heritage-sensitive mould removal Fitzroy Melbourne.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Heritage overlay compliance</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Original timber preservation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Cast iron feature protection</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Artist Studios & Warehouses</h3>
                <p className="text-muted-foreground mb-4">Converted industrial spaces and creative studios requiring specialized emergency mould removal Fitzroy Melbourne approaches.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Artwork protection protocols</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Equipment relocation assistance</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Creative space ventilation upgrades</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Modern Apartment Conversions</h3>
                <p className="text-muted-foreground mb-4">Contemporary developments and heritage building conversions requiring professional mould inspection Fitzroy Melbourne.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Body corporate coordination</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Minimal tenant disruption</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Building defect rectification</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Share Houses & Student Housing</h3>
                <p className="text-muted-foreground mb-4">Multi-tenancy properties popular with Fitzroy's creative community requiring affordable mould removal Fitzroy Melbourne.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Flexible payment options</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Landlord direct billing</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Preventive education programs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Comprehensive Mould Removal Process - Fitzroy Melbourne</h2>

          <div className="bg-white rounded-lg p-8 mb-12">
            <div className="prose max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Our IICRC-certified mould removal Fitzroy Melbourne process combines cutting-edge technology with respect for Fitzroy's unique architectural heritage. Mould & Restoration Co. provides comprehensive emergency mould removal Fitzroy Melbourne services designed for the suburb's diverse property types and creative community needs.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Initial Assessment Phase</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                      <div>
                        <strong>Emergency response dispatch</strong> - 2-hour response time to Fitzroy 3065, with priority given to health-threatening mould situations
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                      <div>
                        <strong>Heritage-sensitive property inspection</strong> - Detailed assessment respecting Fitzroy's heritage overlay requirements and original building features
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                      <div>
                        <strong>Advanced moisture detection</strong> - Thermal imaging and moisture meters to identify hidden mould behind heritage plaster and timber
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                      <div>
                        <strong>Air quality testing</strong> - Spore sampling to determine mould types and concentrations affecting Fitzroy residents and creative professionals
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Professional Remediation Phase</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-teal text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</div>
                      <div>
                        <strong>Containment establishment</strong> - Negative air pressure systems protecting adjacent areas while preserving heritage architectural elements
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-teal text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">6</div>
                      <div>
                        <strong>IICRC-certified removal</strong> - Professional mould removal using heritage-appropriate techniques and council-approved methods
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-teal text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">7</div>
                      <div>
                        <strong>Creative space protection</strong> - Artwork, musical instruments, and creative materials safely relocated and protected throughout process
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-teal text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">8</div>
                      <div>
                        <strong>Antimicrobial treatment</strong> - Hospital-grade disinfection ensuring long-term protection while maintaining heritage material integrity
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Why Choose Mould & Restoration Co. for Fitzroy Melbourne</h2>

          <div className="bg-white rounded-lg p-8 mb-12">
            <div className="prose max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                For professional mould removal Fitzroy Melbourne, Mould & Restoration Co. combines 5+ years local experience with IICRC-certified expertise. Our emergency mould removal Fitzroy Melbourne team understands the unique challenges facing Fitzroy's creative community and heritage property owners. We've successfully restored 100+ Melbourne properties, maintaining our 5.0-star rating through specialist knowledge of inner-city Melbourne mould issues.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">Local Fitzroy Expertise</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Deep understanding of 3065 property challenges</li>
                    <li>• Brunswick Street precinct specialist knowledge</li>
                    <li>• Edinburgh Gardens area climate factors</li>
                    <li>• Heritage overlay compliance experience</li>
                    <li>• Creative community trusted partner</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">Professional Credentials</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• IICRC certified mould remediation technicians</li>
                    <li>• Fully licensed ABN 47 683 089 652</li>
                    <li>• Insurance work accepted and preferred</li>
                    <li>• Work health and safety compliant</li>
                    <li>• Heritage council approved methods</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">Service Guarantee</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 100% satisfaction guarantee</li>
                    <li>• 2-hour emergency response Fitzroy</li>
                    <li>• 7am-7pm service availability</li>
                    <li>• Free initial consultation and quote</li>
                    <li>• Post-treatment clearance testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Specialized Services for Fitzroy Property Types</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emergency-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Emergency Mould Removal Fitzroy</h3>
                  <p className="text-muted-foreground mb-3">Rapid response for health-threatening mould emergencies in Fitzroy's creative spaces and heritage properties.</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• 2-hour response time to any Fitzroy 3065 address</li>
                    <li>• Artist studio emergency containment procedures</li>
                    <li>• Heritage building rapid assessment protocols</li>
                    <li>• Creative work and equipment protection priority</li>
                    <li>• Health-first approach for vulnerable community members</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Professional Mould Inspection Fitzroy</h3>
                  <p className="text-muted-foreground mb-3">Comprehensive property assessments tailored to Fitzroy's unique architectural and environmental challenges.</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Heritage-sensitive visual inspection methods</li>
                    <li>• Thermal imaging for concealed moisture detection</li>
                    <li>• Air quality sampling and laboratory analysis</li>
                    <li>• Creative space environment assessment</li>
                    <li>• Property-specific remediation planning</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-success-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Heritage Property Specialization</h3>
                  <p className="text-muted-foreground mb-3">Expert care for Fitzroy's Victorian terraces and heritage-listed buildings requiring specialized treatment approaches.</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Heritage overlay compliance and documentation</li>
                    <li>• Original material preservation techniques</li>
                    <li>• Council-approved restoration methods</li>
                    <li>• Period-appropriate building material sourcing</li>
                    <li>• Historical accuracy maintenance</li>
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
                  <h3 className="text-xl font-semibold mb-2 text-primary">Creative Space Mould Solutions</h3>
                  <p className="text-muted-foreground mb-3">Specialized approaches for artist studios, galleries, and creative workspaces throughout Brunswick Street precinct.</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Artwork and creative material protection protocols</li>
                    <li>• Ventilation system design and upgrade recommendations</li>
                    <li>• Chemical-sensitive environment considerations</li>
                    <li>• Flexible scheduling around creative projects</li>
                    <li>• Community workspace coordination services</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Preventive Maintenance Programs</h3>
                  <p className="text-muted-foreground mb-3">Ongoing protection for Fitzroy properties against future mould issues through education and maintenance planning.</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Seasonal property health assessments</li>
                    <li>• Moisture control system maintenance</li>
                    <li>• Owner and tenant education programs</li>
                    <li>• Early warning system installation</li>
                    <li>• Annual heritage property check-ups</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Insurance Claims Support</h3>
                  <p className="text-muted-foreground mb-3">Full assistance with insurance claims for mould damage in Fitzroy properties, including documentation and liaison.</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Comprehensive damage assessment reports</li>
                    <li>• Insurance company communication liaison</li>
                    <li>• Photographic and technical documentation</li>
                    <li>• Work scope development and costing</li>
                    <li>• Direct billing arrangements available</li>
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
          <h2 className="text-3xl font-bold text-primary mb-8">Emergency Mould Removal Fitzroy Melbourne Service Areas</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  Mould & Restoration Co. provides comprehensive professional mould removal Fitzroy Melbourne services throughout postcode <strong>3065</strong> and surrounding inner Melbourne creative communities. Our emergency mould removal Fitzroy Melbourne team specializes in the unique challenges facing heritage properties, artist studios, and cultural spaces throughout this vibrant suburb.
                </p>

                <p className="text-lg text-muted-foreground mb-6">
                  Professional mould inspection Fitzroy Melbourne services extend from the iconic <strong>Brunswick Street</strong> arts precinct to the leafy streets surrounding <strong>Edinburgh Gardens</strong>. We understand the specific needs of Fitzroy's diverse property types, from heritage Victorian terraces requiring preservation-compliant treatment to modern warehouse conversions housing Melbourne's thriving creative industries.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="font-semibold text-primary mb-3">Fitzroy 3065 Precincts</h3>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent-blue" />
                      <span>Brunswick Street arts and dining precinct</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent-blue" />
                      <span>Gertrude Street gallery and fashion district</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent-blue" />
                      <span>Rose Street artist quarter and studios</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent-blue" />
                      <span>Edinburgh Gardens residential surrounds</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent-blue" />
                      <span>Smith Street retail and hospitality corridor</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent-blue" />
                      <span>Nicholson Street heritage residential</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent-blue" />
                      <span>Webb Street and creative laneways</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent-blue" />
                      <span>Fitzroy Town Hall and civic precinct</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-3">Adjacent Inner Melbourne Suburbs</h3>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent-teal" />
                      <span>Carlton (3053) - University precinct</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent-teal" />
                      <span>Fitzroy North (3068) - Creative extensions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent-teal" />
                      <span>Collingwood (3066) - Industrial heritage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent-teal" />
                      <span>Clifton Hill (3068) - Yarra River proximity</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent-teal" />
                      <span>Richmond (3121) - Warehouse conversions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent-teal" />
                      <span>East Melbourne (3002) - Heritage mansions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent-teal" />
                      <span>Brunswick (3056) - Creative community</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent-teal" />
                      <span>North Melbourne (3051) - Mixed residential</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Fitzroy Response Times & Coverage</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Emergency response:</span>
                    <span className="font-semibold text-emergency-orange">2 hours max</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Standard appointments:</span>
                    <span className="font-semibold text-success-green">Same/next day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Service hours:</span>
                    <span className="font-semibold text-accent-blue">7am-7pm daily</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Melbourne CBD:</span>
                    <span className="font-semibold text-primary">15-20 minutes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Eastern suburbs:</span>
                    <span className="font-semibold text-primary">20-30 minutes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Northern suburbs:</span>
                    <span className="font-semibold text-primary">15-25 minutes</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold text-primary mb-3">Emergency Situations</h4>
                  <ul className="text-xs space-y-1 text-muted-foreground">
                    <li>• Health-threatening black mould exposure</li>
                    <li>• Water damage with active mould growth</li>
                    <li>• Heritage building emergency preservation</li>
                    <li>• Creative workspace contamination</li>
                    <li>• Vulnerable resident health concerns</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fitzroy Prevention Tips */}
          <div className="bg-muted/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Mould Prevention Tips for Fitzroy Melbourne Properties</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Heritage Property Owners</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Subfloor ventilation:</strong> Ensure heritage terraces have adequate underfloor airflow to prevent moisture buildup</li>
                  <li>• <strong>Original window maintenance:</strong> Seal heritage window frames while preserving historical authenticity</li>
                  <li>• <strong>Rising damp prevention:</strong> Monitor heritage brick and stone foundations for early moisture signs</li>
                  <li>• <strong>Roof maintenance:</strong> Keep slate and heritage roof systems well-maintained to prevent water penetration</li>
                  <li>• <strong>Gutter management:</strong> Clear autumn leaf debris from heritage guttering systems regularly</li>
                  <li>• <strong>Council compliance:</strong> Ensure all moisture-related repairs meet heritage overlay requirements</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Creative Space Operators</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Studio ventilation:</strong> Install adequate airflow systems for art studios and creative workshops</li>
                  <li>• <strong>Material storage:</strong> Elevate creative materials and artworks in warehouse conversions</li>
                  <li>• <strong>Humidity monitoring:</strong> Use dehumidifiers during Melbourne's humid summer months</li>
                  <li>• <strong>Chemical management:</strong> Proper ventilation for paint, solvents, and creative materials</li>
                  <li>• <strong>Share house coordination:</strong> Educate multiple tenants on moisture prevention practices</li>
                  <li>• <strong>Seasonal awareness:</strong> Increase vigilance during winter condensation and spring rain periods</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Need expert advice?</strong> Mould & Restoration Co. offers free consultations for Fitzroy property owners. Call <strong>1800 954 117</strong> for professional mould prevention assessment and heritage-appropriate recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Emergency Mould Removal Fitzroy Melbourne - Contact Experts</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Professional mould removal Fitzroy Melbourne by <strong>Mould & Restoration Co.</strong> - your trusted partner for heritage property preservation and creative space protection. IICRC-certified, fully licensed (ABN 47 683 089 652), with 5+ years Melbourne experience and 100+ properties restored.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <Card className="lg:col-span-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">Get Your Free Fitzroy Mould Inspection</h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Emergency Contact - Available 7am-7pm Daily</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-emergency-orange" />
                          <div>
                            <span className="font-semibold text-lg">1800 954 117</span>
                            <p className="text-sm text-muted-foreground">24/7 Emergency Response Fitzroy</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-accent-blue" />
                          <div>
                            <span>info@mouldrestoration.com.au</span>
                            <p className="text-sm text-muted-foreground">Free quotes and consultations</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-accent-teal" />
                          <div>
                            <span>ABN 47 683 089 652</span>
                            <p className="text-sm text-muted-foreground">Fully licensed and insured</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-3">Service Highlights</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success-green" />
                          <span>2-hour emergency response to Fitzroy 3065</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success-green" />
                          <span>Heritage property preservation specialist</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success-green" />
                          <span>Creative space and artist studio expertise</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success-green" />
                          <span>IICRC-certified professional technicians</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success-green" />
                          <span>Insurance claims welcome and supported</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success-green" />
                          <span>100% satisfaction guarantee on all work</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-6">
                    <h4 className="font-semibold text-primary mb-4">Professional Mould Removal Fitzroy Melbourne Process</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                          <div>
                            <strong>Free consultation</strong> - Heritage-sensitive property assessment
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                          <div>
                            <strong>Professional inspection</strong> - Advanced moisture detection and testing
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                          <div>
                            <strong>Detailed quote</strong> - Transparent pricing with no hidden costs
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-accent-teal text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                          <div>
                            <strong>IICRC remediation</strong> - Professional mould removal process
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-accent-teal text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
                          <div>
                            <strong>Final clearance</strong> - Post-treatment testing and certification
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-accent-teal text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">6</div>
                          <div>
                            <strong>Prevention advice</strong> - Ongoing protection recommendations
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Why Choose Us for Fitzroy</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm font-medium">5.0 Stars</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-accent-teal" />
                      <span className="text-sm">100+ Melbourne Properties Restored</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success-green" />
                      <span className="text-sm">5+ Years Local Experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-accent-blue" />
                      <span className="text-sm">IICRC Certified Technicians</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-primary mb-3">Fitzroy Specializations</h4>
                    <ul className="text-xs space-y-1 text-muted-foreground">
                      <li>• Brunswick Street precinct properties</li>
                      <li>• Victorian heritage terrace restoration</li>
                      <li>• Artist studio and creative workspace</li>
                      <li>• Edinburgh Gardens area expertise</li>
                      <li>• Heritage overlay compliance</li>
                      <li>• Creative community partnerships</li>
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t">
                    <p className="text-xs text-muted-foreground">
                      <strong>Emergency Situations:</strong> Health-threatening black mould, water damage, heritage building emergencies, or creative workspace contamination - call immediately for priority response.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button size="lg" className="emergency-cta text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Fitzroy Mould: 1800 954 117
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Free Fitzroy Inspection
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="max-w-3xl mx-auto">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Mould & Restoration Co.</strong> - Professional mould removal Fitzroy Melbourne specialists serving postcode 3065 and surrounding creative communities. Heritage property experts with emergency mould removal Fitzroy Melbourne services available 7am-7pm daily. Trusted by Brunswick Street artists, Edinburgh Gardens residents, and Gertrude Street creative professionals for comprehensive mould inspection Fitzroy Melbourne solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};