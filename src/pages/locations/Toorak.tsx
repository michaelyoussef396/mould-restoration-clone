import { ArrowRight, Clock, Shield, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";

export const Toorak = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Toorak Mold Removal", href: "/services/mold-removal-toorak", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Emergency Response Bar */}
      <div className="emergency-bar">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>24/7 Emergency Mold Response in Toorak</span>
            <Button variant="outline" size="sm" className="bg-white text-emergency-orange border-white hover:bg-emergency-orange hover:text-white">
              Call (03) 9012-3456
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
              Professional Mold Removal & Inspection in Toorak, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              IICRC-certified mold removal specialists serving Toorak's luxury properties. Discreet, professional service with same-day emergency response.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-emergency-orange" />
                  <span>Same-day emergency response to Toorak</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Luxury property specialist techniques</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Discreet, professional service approach</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Heritage property preservation focus</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Premium insurance claim assistance</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="emergency-cta">
                <Phone className="w-5 h-5 mr-2" />
                Call Now for Toorak Mold Emergency: (03) 9012-3456
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
                Schedule Free Toorak Mold Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Mold Issues Common in Toorak, Melbourne</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Luxury Property Challenges</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Luxury homes with basement wine cellars prone to humidity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Large properties with complex ventilation systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Heritage homes requiring specialized mold treatment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>High property values demanding professional restoration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Toorak-Specific Risk Factors</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Mature tree roots affecting foundation drainage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Period architecture with concealed moisture pathways</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Swimming pools and water features increasing humidity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Extensive landscaping affecting building envelope</span>
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
          <h2 className="text-3xl font-bold text-primary mb-8">Toorak Property Types We Service</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Heritage Mansions</h3>
                <p className="text-muted-foreground mb-4">Prestigious period homes requiring specialized preservation-focused mold treatment techniques.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Heritage preservation methods</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Architectural feature protection</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Luxury Modern Homes</h3>
                <p className="text-muted-foreground mb-4">Contemporary high-end properties with complex HVAC and water feature systems.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>System integration expertise</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Minimal aesthetic disruption</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Wine Cellars & Basements</h3>
                <p className="text-muted-foreground mb-4">Climate-controlled spaces requiring specialized humidity and mold management.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Climate control preservation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Wine collection protection</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Our Toorak Mold Removal Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emergency-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Discreet Emergency Response</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• 2-hour response time to Toorak</li>
                    <li>• Unmarked vehicles for privacy</li>
                    <li>• Immediate containment and assessment</li>
                    <li>• Neighbor-conscious work practices</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Premium Property Inspection</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Comprehensive luxury property assessment</li>
                    <li>• Advanced moisture mapping technology</li>
                    <li>• Indoor air quality testing</li>
                    <li>• Detailed written inspection reports</li>
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
                    <li>• IICRC-certified removal process</li>
                    <li>• Heritage preservation techniques</li>
                    <li>• HEPA air filtration systems</li>
                    <li>• Final clearance testing and certification</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-success-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Premium Insurance Support</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• High-value property documentation</li>
                    <li>• Direct premium insurer liaison</li>
                    <li>• Expert witness services if required</li>
                    <li>• Comprehensive claim support</li>
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
          <h2 className="text-3xl font-bold text-primary mb-8">Areas We Service Near Toorak</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                We provide luxury mold removal services throughout Toorak and nearby premium suburbs including:
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-medium text-primary">Toorak Areas:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Toorak Village shopping district</li>
                    <li>• Kooyong Tennis Club area</li>
                    <li>• Hawksburn Station precinct</li>
                    <li>• Fawkner Park surrounds</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-primary">Adjacent Premium Suburbs:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• South Yarra</li>
                    <li>• Armadale</li>
                    <li>• Malvern</li>
                    <li>• Kooyong</li>
                  </ul>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Priority Response Times to Toorak</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Emergency response:</span>
                    <span className="font-semibold text-emergency-orange">Within 2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Premium appointments:</span>
                    <span className="font-semibold text-success-green">Same day scheduling</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Weekend availability:</span>
                    <span className="font-semibold text-accent-blue">7 days a week</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Average travel time:</span>
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
            <h2 className="text-3xl font-bold text-primary mb-6">Get Your Free Toorak Mold Inspection Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Protect your Toorak property investment with professional mold assessment and remediation. Discreet, expert service for luxury properties.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Premium Contact Service</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-emergency-orange" />
                      <span>(03) 9012-3456 (24/7 priority line)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-accent-blue" />
                      <span>info@mouldrestoration.com.au</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent-teal" />
                      <span>Confidential online assessment form</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Premium Service Process</h3>
                  <div className="space-y-3 text-left text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                      <span>Confidential consultation about your Toorak property</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                      <span>Priority same-day inspection scheduling</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                      <span>Comprehensive assessment with detailed reporting</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                      <span>Discreet remediation with heritage-safe methods</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
                      <span>Final certification and insurance documentation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="emergency-cta">
                <Phone className="w-5 h-5 mr-2" />
                Priority Toorak Response: (03) 9012-3456
              </Button>
              <Button variant="outline" size="lg">
                Schedule Premium Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Serving Toorak and all premium Melbourne suburbs • Discreet, professional service • Emergency response within 2 hours
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};