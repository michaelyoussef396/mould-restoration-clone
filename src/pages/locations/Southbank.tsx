import { ArrowRight, Clock, Shield, MapPin, Phone, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";

export const Southbank = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Southbank Mould Removal", href: "/services/mould-removal-southbank", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Southbank"
        title="Mould Removal Southbank Melbourne - Emergency Response | Mould & Restoration Co"
        description="Professional mould removal in Southbank Melbourne. IICRC certified, 2-hour emergency response. Call 1800 954 117 for same-day Southbank mould inspection & removal."
        canonical="/services/mould-removal-southbank"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        serviceArea="Southbank, Melbourne"
        address="Southbank, Victoria, Australia"
        phone="1800 954 117"
        email="info@mouldrestoration.com.au"
        abn="47 683 089 652"
        description="Professional mould removal and inspection services in Southbank Melbourne. IICRC certified technicians specializing in high-rise apartments, riverside towers, and Crown precinct buildings."
      />

      <ServiceSchema
        serviceName="Mould Removal Southbank Melbourne"
        serviceType="Mould Remediation"
        areaServed="Southbank, Melbourne, Victoria"
        description="Emergency mould removal and inspection services for Southbank properties including luxury high-rise apartments, riverside developments, and Crown precinct buildings."
      />

      <Navigation />

      {/* Emergency Response Bar */}
      <div className="emergency-bar">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>24/7 Emergency Mould Response in Southbank</span>
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
              Professional Mould Removal & Inspection in Southbank Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Emergency mould removal Southbank Melbourne specialists with 5+ years experience. IICRC-certified technicians serving Southbank's luxury high-rise apartments, Yarra River towers, and Crown precinct with same-day response. Trusted by 100+ Melbourne properties with 5.0-star rating.
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
                <span className="text-sm font-medium">IICRC Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success-green" />
                <span className="text-sm font-medium">100+ Properties Restored</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-emergency-orange" />
                  <span>Same-day emergency response to Southbank</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>High-rise apartment specialist service</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Crown precinct expertise</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Riverside tower moisture solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Strata management coordination</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emergency-orange" />
                  <span>24/7 emergency availability</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="emergency-cta">
                <Phone className="w-5 h-5 mr-2" />
                Call Now for Southbank Mould Emergency: 1800 954 117
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
                Schedule Free Southbank Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Expertise */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Mould Removal Southbank Melbourne - Local Area Expertise</h2>

          <div className="mb-12">
            <p className="text-lg text-muted-foreground mb-6">
              Our mould removal Southbank Melbourne team understands the unique challenges facing this premier riverside district. Located in postcode 3006, Southbank stretches along the southern banks of the Yarra River, creating Melbourne's most distinctive high-rise living environment. With luxury apartment towers, the Crown entertainment complex, and modern riverside developments, Southbank presents specific mould risks that require specialized urban high-rise expertise.
            </p>

            <p className="text-lg text-muted-foreground mb-6">
              The precinct's position along the Yarra River creates elevated humidity levels, while sealed high-rise building envelopes can trap moisture in apartment units. Properties near Crown Casino, along Southbank Promenade, and in the Arts Precinct experience varying humidity patterns due to river proximity and building density. Our emergency mould removal Southbank service responds within 2 hours to protect your luxury apartment or commercial space.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">High-Rise Living Challenges</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Luxury apartment sealed building systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>High-rise tower ventilation complexities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Riverside humidity affecting upper floors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Premium building management requirements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Southbank-Specific Risk Factors</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Yarra River moisture creating elevated humidity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Crown precinct commercial moisture challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Modern apartment bathroom moisture traps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Urban heat island effects in high-rise canyon</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6">Why Choose Our Mould Inspection Southbank Service</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">High-Rise Apartment Specialists</h4>
                <p className="text-muted-foreground mb-4">
                  Our mould treatment Southbank Melbourne specialists have extensive experience with the precinct's unique luxury high-rise challenges. From Crown precinct apartments to Yarra River towers and Arts Precinct developments, we understand how Melbourne's riverside climate affects different building types across postcode 3006 and surrounding areas.
                </p>

                <h4 className="text-xl font-semibold mb-4 text-primary">IICRC Certified Luxury-Safe Service</h4>
                <p className="text-muted-foreground mb-4">
                  All our technicians are IICRC certified with specialized training in luxury apartment and premium building remediation techniques. We understand Southbank residents expect discrete, premium service that maintains building standards and strata requirements. Our mould removal Southbank Melbourne service includes comprehensive building management liaison.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">Riverside Emergency Response</h4>
                <p className="text-muted-foreground mb-4">
                  When you need urgent mould removal Southbank, our emergency response team reaches your property within 2 hours. Operating 7am-7pm every day with ABN 47 683 089 652, we provide immediate containment and assessment with minimal disruption to your luxury living environment. Our 100% satisfaction guarantee ensures complete peace of mind.
                </p>

                <h4 className="text-xl font-semibold mb-4 text-primary">Comprehensive Property Protection</h4>
                <p className="text-muted-foreground mb-4">
                  From initial thermal imaging inspection to final clearance testing, our mould inspection Southbank service covers every aspect of high-rise property protection. We provide detailed reports for strata committees and insurance claims, plus ongoing maintenance recommendations specific to riverside building conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Mould Removal Process */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Professional Mould Removal Process for Southbank Properties</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Advanced Assessment Technology</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">High-Rise Thermal Imaging</h4>
                    <p className="text-muted-foreground text-sm">Our mould inspection Southbank service uses advanced thermal imaging to detect hidden moisture in luxury apartment walls, high-rise building elements, and river-facing units without damage to premium finishes.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Premium Air Quality Testing</h4>
                    <p className="text-muted-foreground text-sm">Comprehensive air sampling throughout your Southbank property to identify mould spore concentrations and assess river humidity impacts. Results compared against luxury building living standards.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emergency-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Riverside Moisture Mapping</h4>
                    <p className="text-muted-foreground text-sm">Detailed moisture level documentation across your property and building systems to identify river humidity patterns and create targeted treatment plans specific to Southbank's high-rise architecture.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Luxury-Safe Remediation Methods</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-success-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Discrete Containment Systems</h4>
                    <p className="text-muted-foreground text-sm">Professional containment systems protect your luxury apartment during treatment. Premium service protocols ensure minimal disruption to your Southbank lifestyle and building community.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Premium Building Treatment</h4>
                    <p className="text-muted-foreground text-sm">Specialized techniques for Southbank's luxury high-rise buildings that meet premium building standards while eliminating mould. Expert coordination with building management and concierge services.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Final Verification and Clearance</h4>
                    <p className="text-muted-foreground text-sm">Post-treatment air quality testing and visual inspection ensures complete mould removal. Comprehensive reporting for building management and insurance with luxury property clearance protocols.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types & Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Southbank Property Types We Service</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Luxury High-Rise Apartments</h3>
                <p className="text-muted-foreground mb-4">Premium apartment towers with river views requiring specialized high-rise moisture management and luxury service standards.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Premium building coordination</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Luxury service standards</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Crown Precinct Buildings</h3>
                <p className="text-muted-foreground mb-4">Commercial and mixed-use buildings in the Crown entertainment district with unique moisture challenges.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Commercial building expertise</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Entertainment venue solutions</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Riverside Developments</h3>
                <p className="text-muted-foreground mb-4">Modern waterfront developments facing unique Yarra River humidity and moisture management challenges.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Riverside moisture solutions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Waterfront building expertise</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Our Southbank Mould Removal Services</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emergency-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">High-Rise Emergency Response</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• 2-hour response time to Southbank</li>
                    <li>• Building management notification</li>
                    <li>• Immediate luxury apartment containment</li>
                    <li>• Premium service protocols</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Luxury Property Inspection</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• High-rise building assessments</li>
                    <li>• River humidity moisture mapping</li>
                    <li>• Premium apartment air quality testing</li>
                    <li>• Strata management reporting</li>
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
                  <h3 className="text-xl font-semibold mb-2 text-primary">Premium-Safe Remediation</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• IICRC-certified luxury processes</li>
                    <li>• Discrete, professional methods</li>
                    <li>• Premium building protection</li>
                    <li>• Luxury service standards</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-success-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Building Management Support</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Premium building management liaison</li>
                    <li>• Comprehensive strata documentation</li>
                    <li>• Insurance coordination support</li>
                    <li>• Building-wide prevention advice</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Southbank Property Mould Prevention Tips</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Riverside Climate Management</h3>
                <p className="text-muted-foreground mb-4">Understanding how Yarra River humidity affects your Southbank high-rise apartment throughout the year.</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                    <span>River humidity monitoring systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                    <span>High-rise ventilation optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                    <span>Seasonal moisture pattern awareness</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                    <span>Crown precinct humidity effects</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">High-Rise Apartment Maintenance</h3>
                <p className="text-muted-foreground mb-4">Specific maintenance strategies for Southbank's luxury apartment buildings and premium developments.</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                    <span>Luxury apartment HVAC maintenance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                    <span>Premium bathroom ventilation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                    <span>Building envelope moisture barriers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                    <span>Strata moisture reporting</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">High-Rise Warning Signs</h3>
                <p className="text-muted-foreground mb-4">Early detection signs specific to Southbank luxury apartments and riverside building systems.</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full"></div>
                    <span>Musty odors in luxury bathrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full"></div>
                    <span>Condensation on river-view windows</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full"></div>
                    <span>Water stains on premium finishes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full"></div>
                    <span>Increased humidity in bedrooms</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Service Area */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Areas We Service Near Southbank</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                We provide luxury apartment and high-rise mould removal services throughout Southbank and nearby Melbourne areas including:
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-medium text-primary">Southbank Areas:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Crown Precinct towers</li>
                    <li>• Southbank Promenade</li>
                    <li>• Arts Precinct developments</li>
                    <li>• Yarra River frontage</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-primary">Adjacent Inner Suburbs:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Melbourne CBD</li>
                    <li>• South Melbourne</li>
                    <li>• Port Melbourne</li>
                    <li>• Docklands</li>
                  </ul>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Premium Response Times to Southbank</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Emergency response:</span>
                    <span className="font-semibold text-emergency-orange">Within 2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Premium appointments:</span>
                    <span className="font-semibold text-success-green">Same day or next day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Weekend availability:</span>
                    <span className="font-semibold text-accent-blue">7 days a week</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">City center travel time:</span>
                    <span className="font-semibold text-primary">5-15 minutes</span>
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
            <h2 className="text-3xl font-bold text-primary mb-6">Get Your Free Southbank Mould Inspection Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Protect your Southbank luxury apartment from mould damage. Expert service designed for high-rise living and premium building environments.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Premium Service Contact</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-emergency-orange" />
                      <span>1800 954 117 (24/7 luxury emergency)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-accent-blue" />
                      <span>info@mouldrestoration.com.au</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent-teal" />
                      <span>Building management liaison available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">High-Rise Service Process</h3>
                  <div className="space-y-3 text-left text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                      <span>Free luxury apartment consultation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                      <span>Building management notification</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                      <span>Premium discrete inspection</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                      <span>Luxury-standard remediation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
                      <span>Final clearance and premium documentation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="emergency-cta">
                <Phone className="w-5 h-5 mr-2" />
                Southbank Luxury Emergency: 1800 954 117
              </Button>
              <Button variant="outline" size="lg">
                Schedule Premium Inspection
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