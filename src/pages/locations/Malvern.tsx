import { ArrowRight, Clock, Shield, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";

export const Malvern = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Malvern Mould Removal", href: "/services/mould-removal-malvern", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        title="Mould Removal Malvern Melbourne - Professional Service - Same-day Available 7am-7pm | Mould & Restoration Co"
        description="Professional mould removal in Malvern Melbourne. IICRC certified, Same-day professional service. Call 1800 954 117 for same-day Malvern mould inspection & removal."
        suburb="Malvern"
        postcode="3144"
        canonical="https://mouldrestoration.com.au/mould-removal-malvern-melbourne"
        keywords="mould removal Malvern Melbourne, mould inspection Malvern, professional mould removal Malvern, mould treatment Malvern Melbourne"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co - Malvern"
        description="Professional mould removal and inspection services in Malvern Melbourne. IICRC certified technicians, professional service, family-safe methods."
        address="Malvern, Melbourne, VIC 3144"
        phone="1800 954 117"
        email="info@mouldrestoration.com.au"
        areaServed="Malvern Melbourne"
        openingHours="Mo,Tu,We,Th,Fr,Sa,Su 07:00-19:00"
        aggregateRating="5.0"
        reviewCount="100"
      />

      <ServiceSchema
        serviceName="Mould Removal Malvern"
        serviceType="Mould Inspection and Remediation"
        provider="Mould & Restoration Co"
        areaServed="Malvern Melbourne VIC 3144"
        description="Professional mould removal services in Malvern Melbourne. Professional assessment, family-safe treatment, and complete remediation for Federation homes and modern properties."
      />

      <Navigation />
      
      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Malvern</span>
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
              Professional Mould Removal & Inspection in Malvern, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Professional mould removal in Malvern Melbourne with same-day response. IICRC-certified technicians specializing in established residential areas, Federation homes, and family properties. 5.0 stars, 100+ properties restored.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>same-day professional service to Malvern</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Federation home specialist service</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Family property protection focus</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Quality residential building expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Heritage preservation approach</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Professional Mould Service - Call Now: 1800 954 117
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
                Schedule Free Malvern Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Mould Removal Malvern Melbourne - Local Area Expertise</h2>

          <div className="mb-12">
            <p className="text-lg text-muted-foreground mb-6">
              Our mould removal Malvern Melbourne team understands the unique challenges facing this established residential suburb. Located in postcode 3144, Malvern sits between Toorak and Glen Iris in Melbourne's prestigious eastern suburbs. With mature tree-lined streets, Federation and Edwardian period homes, and well-established family properties, Malvern presents specific mould risks that require local expertise.
            </p>

            <p className="text-lg text-muted-foreground mb-6">
              The suburb's elevated position on the Malvern Hills, combined with Melbourne's humid climate, creates unique moisture management challenges. Properties around Glenferrie Road, near Malvern Central shopping precinct, and surrounding Lloyd Park often experience different humidity patterns due to mature landscaping and varied building orientations. Our professional mould removal Malvern service responds Same-day professional service to protect your family home.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Established Residential Challenges</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Federation and Edwardian homes with original moisture issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Large family homes with complex ventilation needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Quality apartment blocks requiring discrete service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Mature landscaping affecting building moisture</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Malvern-Specific Risk Factors</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Leafy suburb with tree root drainage impacts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>School zone areas with family home moisture challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Period property renovations creating moisture pathways</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Quality construction with hidden moisture problems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6">Why Choose Our Mould Inspection Malvern Service</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">Local Melbourne Knowledge</h4>
                <p className="text-muted-foreground mb-4">
                  Our mould treatment Malvern Melbourne specialists have extensive experience with the suburb's unique building types and climate challenges. From Federation cottages near Central Park to modern family homes around Malvern East border, we understand how Melbourne's weather patterns affect different property styles across postcodes 3144 and surrounding areas.
                </p>

                <h4 className="text-xl font-semibold mb-4 text-primary">IICRC Certified Family-Safe Service</h4>
                <p className="text-muted-foreground mb-4">
                  All our technicians are IICRC certified with extensive training in family-safe mould remediation techniques. We understand Malvern families need discrete, professional service that protects children and pets while preserving the character of heritage homes. Our mould removal Malvern Melbourne service includes comprehensive insurance work assistance.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">Professional Service - Same-day Available 7am-7pm Excellence</h4>
                <p className="text-muted-foreground mb-4">
                  When you need urgent mould removal Malvern, our professional service team reaches your property Same-day professional service. Operating 7am-7pm every day with ABN 47 683 089 652, we provide immediate containment and assessment. Our 100% satisfaction guarantee ensures complete family peace of mind.
                </p>

                <h4 className="text-xl font-semibold mb-4 text-primary">Comprehensive Property Protection</h4>
                <p className="text-muted-foreground mb-4">
                  From initial thermal imaging inspection to final clearance testing, our mould inspection Malvern service covers every aspect of property protection. We provide detailed reports for insurance claims and ongoing maintenance recommendations specific to your property type and Malvern's climate conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Mould Removal Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Professional Mould Removal Process for Malvern Properties</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Advanced Assessment Technology</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Thermal Imaging Inspection</h4>
                    <p className="text-muted-foreground text-sm">Our mould inspection Malvern service uses advanced thermal imaging to detect hidden moisture in Federation home walls, period property subfloors, and modern family home building cavities without damage.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Air Quality Testing</h4>
                    <p className="text-muted-foreground text-sm">Comprehensive air sampling throughout your Malvern property to identify mould spore concentrations and ensure family health safety. Results compared against Australian indoor air quality standards.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emergency-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Moisture Mapping</h4>
                    <p className="text-muted-foreground text-sm">Detailed moisture level documentation across your property to identify source patterns and create targeted treatment plans specific to Malvern's established residential architecture.</p>
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
                    <h4 className="font-semibold text-primary mb-2">Containment and Safety Protocols</h4>
                    <p className="text-muted-foreground text-sm">Professional containment systems protect your family during treatment. Child and pet safe protocols ensure minimal disruption to your Malvern family home routine.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Heritage-Conscious Treatment</h4>
                    <p className="text-muted-foreground text-sm">Specialized techniques for Malvern's Federation and Edwardian homes that preserve architectural features while eliminating mould. Expert restoration of period property elements.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Final Verification and Clearance</h4>
                    <p className="text-muted-foreground text-sm">Post-treatment air quality testing and visual inspection ensures complete mould removal. Comprehensive reporting for insurance claims and family health records.</p>
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
          <h2 className="text-3xl font-bold text-primary mb-8">Malvern Property Mould Prevention Tips</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Melbourne Climate Management</h3>
                <p className="text-muted-foreground mb-4">Understanding how Melbourne's humid subtropical climate affects your Malvern property throughout the year.</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                    <span>November-April: High humidity monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                    <span>Winter ventilation strategies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                    <span>Seasonal moisture pattern awareness</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                    <span>Malvern elevation effects on humidity</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Federation Home Maintenance</h3>
                <p className="text-muted-foreground mb-4">Specific maintenance strategies for Malvern's heritage and period properties to prevent moisture issues.</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                    <span>Period property ventilation upgrades</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                    <span>Heritage-appropriate moisture barriers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                    <span>Original building material preservation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                    <span>Subfloor moisture management</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Family Home Warning Signs</h3>
                <p className="text-muted-foreground mb-4">Early detection signs specific to Malvern family properties and established residential buildings.</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full"></div>
                    <span>Musty odors in bedrooms or bathrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full"></div>
                    <span>Water stains on period property walls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full"></div>
                    <span>Increased family allergy symptoms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full"></div>
                    <span>Peeling paint or wallpaper</span>
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
          <h2 className="text-3xl font-bold text-primary mb-8">Malvern Property Types We Service</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Federation & Edwardian Homes</h3>
                <p className="text-muted-foreground mb-4">Period family homes with heritage features requiring specialized preservation-focused mold treatment.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Heritage feature preservation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Family-safe treatment methods</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Modern Family Homes</h3>
                <p className="text-muted-foreground mb-4">Contemporary homes with modern amenities requiring advanced moisture management approaches.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Modern system integration</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Child and pet safe processes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Quality Apartment Buildings</h3>
                <p className="text-muted-foreground mb-4">Well-established apartment blocks and unit developments with professional management requirements.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Professional building management</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Resident-considerate service</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Our Malvern Mold Removal Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emergency-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Family Home Professional Service - Same-day Available 7am-7pm</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• same-day professional service response to Malvern</li>
                    <li>• Family-safe emergency protocols</li>
                    <li>• Child and pet protection measures</li>
                    <li>• Neighbor-considerate service approach</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Family Property Inspection</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Comprehensive family home assessments</li>
                    <li>• Child-friendly inspection methods</li>
                    <li>• Federation home moisture mapping</li>
                    <li>• Family health-focused air quality testing</li>
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
                    <li>• Non-toxic treatment methods where possible</li>
                    <li>• Heritage home preservation techniques</li>
                    <li>• Child and pet safety protocols</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-success-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Family Property Protection</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Long-term family home moisture management</li>
                    <li>• School zone property maintenance advice</li>
                    <li>• Family insurance claim assistance</li>
                    <li>• Preventive maintenance planning</li>
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
          <h2 className="text-3xl font-bold text-primary mb-8">Areas We Service Near Malvern</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                We provide family-focused mold removal services throughout Malvern and nearby established residential suburbs including:
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-medium text-primary">Malvern Areas:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Glenferrie Road shopping strip</li>
                    <li>• Malvern Central shopping area</li>
                    <li>• Lloyd Park surrounds</li>
                    <li>• Malvern railway station precinct</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-primary">Adjacent Family Suburbs:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Malvern East</li>
                    <li>• Armadale</li>
                    <li>• Toorak</li>
                    <li>• Glen Iris</li>
                  </ul>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Family-Friendly Response Times to Malvern</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Emergency response:</span>
                    <span className="font-semibold text-blue-600">Within 2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Family appointments:</span>
                    <span className="font-semibold text-success-green">School-hours scheduling</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Weekend availability:</span>
                    <span className="font-semibold text-accent-blue">Family-friendly times</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Southeast travel time:</span>
                    <span className="font-semibold text-primary">20-30 minutes</span>
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
            <h2 className="text-3xl font-bold text-primary mb-6">Get Your Free Malvern Mold Inspection Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Protect your Malvern family home with professional mold assessment. Expert service designed for established residential properties and family safety.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Family-Focused Contact</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span>(03) 9012-3456 (Professional service line)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-accent-blue" />
                      <span>info@mouldrestoration.com.au</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent-teal" />
                      <span>School-hours scheduling available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Family Home Service Process</h3>
                  <div className="space-y-3 text-left text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                      <span>Free family home consultation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                      <span>Child-friendly inspection scheduling</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                      <span>Family health-focused assessment</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                      <span>Family-safe remediation methods</span>
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
                Malvern Family Professional Service: (03) 9012-3456
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