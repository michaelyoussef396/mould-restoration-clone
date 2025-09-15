import { ArrowRight, Clock, Shield, MapPin, Phone, Star, CheckCircle, AlertTriangle, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/LocationPageSEO";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

export const StKilda = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    { label: "St Kilda Mould Removal", href: "/locations/st-kilda", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        title="Mould Removal St Kilda Melbourne - Emergency Response | Mould & Restoration Co"
        description="Professional mould removal in St Kilda Melbourne. IICRC certified, 2-hour emergency response. Call 1800 954 117 for same-day St Kilda mould inspection & removal."
        suburb="St Kilda"
        postcode="3182"
        canonicalUrl="https://mouldrestorationco.com.au/locations/st-kilda"
      />
      <LocalBusinessSchema
        businessName="Mould & Restoration Co"
        suburb="St Kilda"
        state="Victoria"
        postcode="3182"
        phone="1800 954 117"
        email="info@mouldrestorationco.com.au"
        abn="47 683 089 652"
        services={["Mould Inspection", "Mould Removal", "Mould Remediation"]}
        serviceAreas={["St Kilda", "Windsor", "Prahran", "Elwood", "Balaclava"]}
      />
      <ServiceSchema
        serviceName="Mould Removal St Kilda"
        description="Professional mould removal and remediation services in St Kilda Melbourne"
        provider="Mould & Restoration Co"
        areaServed="St Kilda, Melbourne, Victoria"
        availableChannel="https://mouldrestorationco.com.au/locations/st-kilda"
      />
      <Navigation />

      {/* Emergency Response Bar */}
      <div className="emergency-bar">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>24/7 Emergency Mould Response in St Kilda</span>
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
              Professional Mould Removal & Inspection in St Kilda, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Emergency mould removal in St Kilda Melbourne with same-day response. IICRC-certified technicians specializing in seaside properties, heritage apartments, and vibrant community developments. 5.0 stars, 100+ properties restored.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-emergency-orange" />
                  <span>Same-day emergency response to St Kilda</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Coastal environment specialist service</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Heritage seaside property preservation methods</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Acland Street entertainment precinct solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Bay proximity moisture expertise</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="emergency-cta">
                <Phone className="w-5 h-5 mr-2" />
                Call Now for St Kilda Mould Emergency: 1800 954 117
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
                Schedule Free St Kilda Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Mould Removal St Kilda Melbourne - Local Area Expertise</h2>

          <div className="mb-12">
            <p className="text-lg text-muted-foreground mb-6">
              Our mould removal St Kilda Melbourne team understands the unique challenges facing this iconic seaside suburb. Located in postcode 3182, St Kilda combines coastal heritage properties with vibrant entertainment developments, creating specific moisture management challenges. With a mix of heritage apartments, modern developments, and the bustling Acland Street entertainment precinct, St Kilda presents distinctive mould risks that require specialized coastal expertise.
            </p>

            <p className="text-lg text-muted-foreground mb-6">
              The suburb's coastal environment, entertainment district atmosphere, and proximity to Port Phillip Bay creates unique humidity levels and salt air challenges. Properties near the beach, along Acland Street, and in the artistic quarter experience different moisture patterns due to varying building ages, coastal exposure, and entertainment activity levels. Our emergency mould removal St Kilda service responds within 2 hours to protect your seaside property or entertainment venue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Coastal Environment Challenges</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Salt air exposure accelerating moisture issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Bay proximity creating elevated humidity levels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Heritage coastal buildings with period ventilation challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Entertainment district high-activity impact</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">St Kilda-Specific Risk Factors</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Acland Street restaurant humidity spillover</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Entertainment venue moisture accumulation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Coastal weather patterns affecting indoor humidity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Mixed residential and entertainment building moisture conflicts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6">Why Choose Our Mould Inspection St Kilda Service</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">Coastal Entertainment Specialists</h4>
                <p className="text-muted-foreground mb-4">
                  Our mould treatment St Kilda Melbourne specialists have extensive experience with the suburb's unique coastal entertainment challenges. From heritage seaside apartments to modern Acland Street developments, we understand how Melbourne's coastal entertainment environment affects moisture patterns across postcode 3182 and surrounding areas.
                </p>

                <h4 className="text-xl font-semibold mb-4 text-primary">IICRC Certified Coastal-Safe Service</h4>
                <p className="text-muted-foreground mb-4">
                  All our technicians are IICRC certified with specialized training in coastal property and entertainment venue remediation techniques. We understand St Kilda residents and business operators need dynamic service that works with the vibrant community atmosphere. Our mould removal St Kilda Melbourne service includes comprehensive coastal impact assessments.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">Coastal Entertainment Emergency Response</h4>
                <p className="text-muted-foreground mb-4">
                  When you need urgent mould removal St Kilda, our emergency response team reaches your property within 2 hours. Operating 7am-7pm every day with ABN 47 683 089 652, we provide immediate containment and assessment with coastal-appropriate methods. Our 100% satisfaction guarantee ensures complete peace of mind.
                </p>

                <h4 className="text-xl font-semibold mb-4 text-primary">Comprehensive Property Protection</h4>
                <p className="text-muted-foreground mb-4">
                  From initial thermal imaging inspection to final clearance testing, our mould inspection St Kilda service covers every aspect of property protection. We provide detailed reports for coastal property considerations and insurance claims, plus ongoing maintenance recommendations specific to your property type and St Kilda's coastal entertainment environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Mould Removal Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Professional Mould Removal Process for St Kilda Properties</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Advanced Assessment Technology</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Coastal-Appropriate Thermal Imaging</h4>
                    <p className="text-muted-foreground text-sm">Our mould inspection St Kilda service uses advanced thermal imaging to detect hidden moisture in coastal walls, salt-exposed areas, and entertainment venue features without disruption to business operations or community activities.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Entertainment District Air Quality Testing</h4>
                    <p className="text-muted-foreground text-sm">Comprehensive air sampling throughout your St Kilda property and entertainment areas to identify mould spore concentrations and activity-related contamination risks. Results compared against Australian coastal entertainment standards.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emergency-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Coastal Property Moisture Mapping</h4>
                    <p className="text-muted-foreground text-sm">Detailed moisture level documentation across your property and coastal exposure areas to identify source patterns and create targeted treatment plans specific to St Kilda's coastal entertainment architecture.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Coastal-Safe Remediation Methods</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-success-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Containment and Community Protection</h4>
                    <p className="text-muted-foreground text-sm">Professional containment systems protect entertainment areas and community spaces during treatment. Dynamic protocols ensure minimal disruption to your St Kilda property's vibrant atmosphere and business operations.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Entertainment-Compliant Treatment</h4>
                    <p className="text-muted-foreground text-sm">Specialized techniques for St Kilda's entertainment and coastal properties that maintain community vibrancy while eliminating mould. Expert coordination with business schedules and entertainment venue requirements.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Final Verification and Documentation</h4>
                    <p className="text-muted-foreground text-sm">Post-treatment air quality testing and visual inspection ensures complete mould removal and coastal safety. Comprehensive reporting for entertainment venue compliance and insurance claims with coastal-appropriate clearance protocols.</p>
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
          <h2 className="text-3xl font-bold text-primary mb-8">St Kilda Property Mould Prevention Tips</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Coastal Climate Management</h3>
                <p className="text-muted-foreground mb-4">Understanding how Melbourne's coastal environment affects your St Kilda property throughout the seasons and weather patterns.</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                    <span>Port Phillip Bay proximity humidity monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                    <span>Salt air corrosion prevention awareness</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                    <span>Coastal weather ventilation strategies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                    <span>Entertainment district humidity impact management</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Seaside Property Maintenance</h3>
                <p className="text-muted-foreground mb-4">Specific maintenance strategies for St Kilda's seaside and entertainment properties to prevent coastal moisture issues.</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                    <span>Coastal building material protection methods</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                    <span>Salt air ventilation system maintenance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                    <span>Entertainment venue moisture source identification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                    <span>Business-appropriate maintenance scheduling</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Coastal Entertainment Warning Signs</h3>
                <p className="text-muted-foreground mb-4">Early detection signs specific to St Kilda coastal and entertainment properties with high-activity environments.</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full"></div>
                    <span>Musty odors in entertainment or dining areas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full"></div>
                    <span>Condensation on coastal-facing windows</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full"></div>
                    <span>Salt air accelerated moisture stains</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full"></div>
                    <span>Entertainment venue air quality deterioration</span>
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
          <h2 className="text-3xl font-bold text-primary mb-8">St Kilda Property Types We Service</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Heritage Seaside Apartments</h3>
                <p className="text-muted-foreground mb-4">Period coastal apartment buildings requiring heritage-sensitive treatment approaches with coastal exposure considerations.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Coastal heritage preservation methods</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Salt air impact protection</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Entertainment Venue Properties</h3>
                <p className="text-muted-foreground mb-4">Commercial entertainment venues requiring business-friendly treatment approaches with minimal operational disruption.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Entertainment business continuity focus</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>High-activity moisture management</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Modern Coastal Developments</h3>
                <p className="text-muted-foreground mb-4">Contemporary residential and mixed-use developments requiring specialized coastal environment treatment.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Modern coastal system management</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Bay proximity moisture solutions</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Our St Kilda Mould Removal Services</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emergency-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Coastal Entertainment Emergency Response</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• 2-hour response time to St Kilda</li>
                    <li>• Entertainment venue coordination</li>
                    <li>• Immediate coastal property protection</li>
                    <li>• Business activity accommodation</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Coastal Entertainment Inspection</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Seaside and entertainment property assessments</li>
                    <li>• Coastal moisture mapping</li>
                    <li>• Entertainment-safe air quality testing</li>
                    <li>• Business compliance focused reporting</li>
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
                    <li>• IICRC-certified coastal-entertainment processes</li>
                    <li>• Business and community appropriate methods</li>
                    <li>• Coastal property protection protocols</li>
                    <li>• Minimal entertainment disruption</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-success-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Entertainment Community Support</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Entertainment business consultation</li>
                    <li>• Comprehensive documentation for venue compliance</li>
                    <li>• Entertainment industry insurance coordination</li>
                    <li>• Coastal-appropriate prevention recommendations</li>
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
          <h2 className="text-3xl font-bold text-primary mb-8">Areas We Service Near St Kilda</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                We provide coastal entertainment and seaside property mould removal services throughout St Kilda and nearby areas including:
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-medium text-primary">St Kilda Areas:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Acland Street entertainment strip</li>
                    <li>• St Kilda Beach foreshore</li>
                    <li>• Fitzroy Street precinct</li>
                    <li>• Seaside residential areas</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-primary">Adjacent Suburbs:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Windsor</li>
                    <li>• Prahran</li>
                    <li>• Elwood</li>
                    <li>• Balaclava</li>
                  </ul>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Rapid Response Times to St Kilda</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Emergency response:</span>
                    <span className="font-semibold text-emergency-orange">Within 2 hours</span>
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
                    <span className="text-muted-foreground">Coastal area travel time:</span>
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
            <h2 className="text-3xl font-bold text-primary mb-6">Get Your Free St Kilda Mould Inspection Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Protect your St Kilda coastal property or entertainment venue from mould damage. Expert service designed for seaside living and vibrant community entertainment.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Coastal-Entertainment Contact</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-emergency-orange" />
                      <span>1800 954 117 (24/7 coastal entertainment emergency)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-accent-blue" />
                      <span>info@mouldrestorationco.com.au</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent-teal" />
                      <span>Entertainment venue coordination available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Entertainment Service Process</h3>
                  <div className="space-y-3 text-left text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                      <span>Free coastal entertainment property consultation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                      <span>Entertainment venue coordination</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                      <span>Business-friendly coastal inspection</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                      <span>Entertainment-appropriate remediation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
                      <span>Final clearance and coastal documentation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="emergency-cta">
                <Phone className="w-5 h-5 mr-2" />
                St Kilda Coastal Entertainment Emergency: 1800 954 117
              </Button>
              <Button variant="outline" size="lg">
                Schedule Coastal Inspection
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