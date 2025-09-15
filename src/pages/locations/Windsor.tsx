import { ArrowRight, Clock, Shield, MapPin, Phone, Star, CheckCircle, AlertTriangle, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";

export const Windsor = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    { label: "Windsor Mould Removal", href: "/locations/windsor", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        title="Mould Removal Windsor Melbourne - Professional Service - Same-day Available 7am-7pm | Mould & Restoration Co"
        description="Professional mould removal in Windsor Melbourne. IICRC certified, Same-day professional service. Call 1800 954 117 for same-day Windsor mould inspection & removal."
        suburb="Windsor"
        postcode="3181"
        canonicalUrl="https://mouldrestorationco.com.au/locations/windsor"
      />
      <LocalBusinessSchema
        businessName="Mould & Restoration Co"
        suburb="Windsor"
        state="Victoria"
        postcode="3181"
        phone="1800 954 117"
        email="info@mouldrestorationco.com.au"
        abn="47 683 089 652"
        services={["Mould Inspection", "Mould Removal", "Mould Remediation"]}
        serviceAreas={["Windsor", "Prahran", "South Yarra", "St Kilda East", "Armadale"]}
      />
      <ServiceSchema
        serviceName="Mould Removal Windsor"
        description="Professional mould removal and remediation services in Windsor Melbourne"
        provider="Mould & Restoration Co"
        areaServed="Windsor, Melbourne, Victoria"
        availableChannel="https://mouldrestorationco.com.au/locations/windsor"
      />
      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Windsor</span>
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
              Professional Mould Removal & Inspection in Windsor, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Emergency mould removal in Windsor Melbourne with same-day response. IICRC-certified technicians specializing in Victorian terraces, heritage apartments, and modern urban properties. 5.0 stars, 100+ properties restored.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>Same-day emergency response to Windsor</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Victorian terrace specialist service</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Heritage property preservation methods</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Urban village community solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Chapel Street corridor expertise</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Professional Mould Service - Call Now: 1800 954 117
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
                Schedule Free Windsor Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Mould Removal Windsor Melbourne - Local Area Expertise</h2>

          <div className="mb-12">
            <p className="text-lg text-muted-foreground mb-6">
              Our mould removal Windsor Melbourne team understands the unique challenges facing this charming inner-city village. Located in postcode 3181, Windsor combines Victorian-era terraces with contemporary urban developments, creating specific moisture management challenges. With a mix of heritage properties, modern apartments, and the busy Chapel Street precinct, Windsor presents distinctive mould risks that require specialized local expertise.
            </p>

            <p className="text-lg text-muted-foreground mb-6">
              The suburb's village atmosphere, heritage building stock, and proximity to entertainment and shopping precincts creates unique humidity levels and ventilation challenges. Properties along Chapel Street, around Dandenong Road, and in the quiet residential streets experience different moisture patterns due to varying building ages, architectural styles, and urban activity levels. Our emergency mould removal Windsor service responds Same-day professional service to protect your heritage terrace or modern apartment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Heritage Village Challenges</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Victorian terraces with period ventilation challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Heritage building materials requiring specialist care</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Converted heritage properties with modern additions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Community-sensitive treatment requirements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Windsor-Specific Risk Factors</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Chapel Street commercial humidity from restaurants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Dense urban environment with limited airflow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Mixed building ages creating ventilation conflicts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Urban village microclimate effects</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6">Why Choose Our Mould Inspection Windsor Service</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">Heritage Village Specialists</h4>
                <p className="text-muted-foreground mb-4">
                  Our mould treatment Windsor Melbourne specialists have extensive experience with the suburb's unique heritage village challenges. From Victorian terraces to modern Chapel Street apartments, we understand how Melbourne's urban village environment affects moisture patterns across postcode 3181 and surrounding areas.
                </p>

                <h4 className="text-xl font-semibold mb-4 text-primary">IICRC Certified Village-Safe Service</h4>
                <p className="text-muted-foreground mb-4">
                  All our technicians are IICRC certified with specialized training in heritage terrace and urban village remediation techniques. We understand Windsor residents need considerate service that respects the community atmosphere. Our mould removal Windsor Melbourne service includes comprehensive neighbourhood impact assessments.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">Urban Village Professional Service - Same-day Available 7am-7pm</h4>
                <p className="text-muted-foreground mb-4">
                  When you need urgent mould removal Windsor, our emergency response team reaches your property Same-day professional service. Operating 7am-7pm every day with ABN 47 683 089 652, we provide immediate containment and assessment with village-appropriate methods. Our 100% satisfaction guarantee ensures complete peace of mind.
                </p>

                <h4 className="text-xl font-semibold mb-4 text-primary">Comprehensive Property Protection</h4>
                <p className="text-muted-foreground mb-4">
                  From initial thermal imaging inspection to final clearance testing, our mould inspection Windsor service covers every aspect of property protection. We provide detailed reports for heritage considerations and insurance claims, plus ongoing maintenance recommendations specific to your property type and Windsor's urban village environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Mould Removal Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Professional Mould Removal Process for Windsor Properties</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Advanced Assessment Technology</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Heritage-Appropriate Thermal Imaging</h4>
                    <p className="text-muted-foreground text-sm">Our mould inspection Windsor service uses advanced thermal imaging to detect hidden moisture in heritage walls, Victorian features, and period elements without damage to historical materials or architectural character.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Community-Sensitive Air Quality Testing</h4>
                    <p className="text-muted-foreground text-sm">Comprehensive air sampling throughout your Windsor property and adjacent areas to identify mould spore concentrations and cross-contamination risks. Results compared against Australian heritage community standards.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emergency-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Village Property Moisture Mapping</h4>
                    <p className="text-muted-foreground text-sm">Detailed moisture level documentation across your property and neighbouring areas to identify source patterns and create targeted treatment plans specific to Windsor's urban village architecture.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Heritage-Safe Remediation Methods</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-success-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Containment and Community Protection</h4>
                    <p className="text-muted-foreground text-sm">Professional containment systems protect period features and community areas during treatment. Considerate protocols ensure minimal disruption to your Windsor neighbourhood and village atmosphere.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Heritage-Compliant Treatment</h4>
                    <p className="text-muted-foreground text-sm">Specialized techniques for Windsor's heritage buildings that meet preservation requirements while eliminating mould. Expert coordination with heritage considerations and village community standards.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Final Verification and Documentation</h4>
                    <p className="text-muted-foreground text-sm">Post-treatment air quality testing and visual inspection ensures complete mould removal. Comprehensive reporting for heritage assessments and insurance claims with community-appropriate clearance protocols.</p>
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
          <h2 className="text-3xl font-bold text-primary mb-8">Windsor Property Mould Prevention Tips</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Urban Village Climate Management</h3>
                <p className="text-muted-foreground mb-4">Understanding how Melbourne's urban village environment affects your Windsor property throughout the year and seasons.</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                    <span>Chapel Street commercial humidity impact</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                    <span>Urban density microclimate awareness</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                    <span>Heritage ventilation system optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                    <span>Village property climate control strategies</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Victorian Terrace Maintenance</h3>
                <p className="text-muted-foreground mb-4">Specific maintenance strategies for Windsor's Victorian terraces and heritage properties to prevent moisture issues.</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                    <span>Period building material preservation methods</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                    <span>Heritage ventilation system maintenance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                    <span>Terrace property moisture source identification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                    <span>Community-appropriate maintenance scheduling</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Heritage Village Warning Signs</h3>
                <p className="text-muted-foreground mb-4">Early detection signs specific to Windsor heritage and period properties with original building systems.</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full"></div>
                    <span>Musty odors in period rooms or basements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full"></div>
                    <span>Condensation on Victorian windows</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full"></div>
                    <span>Heritage wall moisture stains</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full"></div>
                    <span>Period feature deterioration patterns</span>
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
          <h2 className="text-3xl font-bold text-primary mb-8">Windsor Property Types We Service</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Victorian Terraces</h3>
                <p className="text-muted-foreground mb-4">Classic Victorian terrace houses with period features requiring sensitive heritage treatment approaches.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Heritage preservation methods</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Period feature protection</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Modern Urban Apartments</h3>
                <p className="text-muted-foreground mb-4">Contemporary apartment developments requiring specialized urban density treatment approaches.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Urban-appropriate assessment</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Community-sensitive service</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Chapel Street Commercial Properties</h3>
                <p className="text-muted-foreground mb-4">Mixed-use commercial and residential properties along Chapel Street requiring specialized treatment.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Commercial moisture management</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Mixed-use building solutions</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Our Windsor Mould Removal Services</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emergency-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Village Professional Service - Same-day Available 7am-7pm</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• 2-hour response time to Windsor</li>
                    <li>• Community-sensitive coordination</li>
                    <li>• Immediate property protection</li>
                    <li>• Neighbourhood impact minimization</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Heritage Village Inspection</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Victorian terrace assessments</li>
                    <li>• Village property moisture mapping</li>
                    <li>• Heritage-appropriate air quality testing</li>
                    <li>• Community-considerate reporting formats</li>
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
                  <h3 className="text-xl font-semibold mb-2 text-primary">Heritage-Safe Remediation</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• IICRC-certified heritage processes</li>
                    <li>• Community-appropriate work methods</li>
                    <li>• Period feature protection protocols</li>
                    <li>• Minimal neighbourhood disruption</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-success-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Community Support</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Neighbourhood liaison</li>
                    <li>• Comprehensive documentation for heritage properties</li>
                    <li>• Insurance coordination for village properties</li>
                    <li>• Community-appropriate prevention recommendations</li>
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
          <h2 className="text-3xl font-bold text-primary mb-8">Areas We Service Near Windsor</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                We provide heritage building and urban village mould removal services throughout Windsor and nearby areas including:
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-medium text-primary">Windsor Areas:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Chapel Street precinct</li>
                    <li>• Dandenong Road corridor</li>
                    <li>• Quiet residential streets</li>
                    <li>• Heritage terrace areas</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-primary">Adjacent Inner Suburbs:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Prahran</li>
                    <li>• South Yarra</li>
                    <li>• St Kilda East</li>
                    <li>• Armadale</li>
                  </ul>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Rapid Response Times to Windsor</h3>
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
                    <span className="text-muted-foreground">Inner city travel time:</span>
                    <span className="font-semibold text-primary">10-20 minutes</span>
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
            <h2 className="text-3xl font-bold text-primary mb-6">Get Your Free Windsor Mould Inspection Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Protect your Windsor heritage property or modern apartment from mould damage. Expert service designed for urban village living and heritage preservation.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Heritage-Friendly Contact</h3>
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
                      <span>Community liaison available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Village Service Process</h3>
                  <div className="space-y-3 text-left text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                      <span>Free heritage property consultation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                      <span>Community coordination (if required)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                      <span>Sensitive village property inspection</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                      <span>Community-considerate remediation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
                      <span>Final clearance and heritage documentation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Windsor Heritage Emergency: 1800 954 117
              </Button>
              <Button variant="outline" size="lg">
                Schedule Heritage Inspection
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