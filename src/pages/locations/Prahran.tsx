import { ArrowRight, Clock, Shield, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";

export const Prahran = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Prahran Mold Removal", href: "/services/mold-removal-prahran", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Emergency Response Bar */}
      <div className="emergency-bar">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>24/7 Emergency Mold Response in Prahran</span>
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
              Professional Mold Removal & Inspection in Prahran, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              IICRC-certified mold removal specialists serving Prahran's fashion district. Expert service for trendy apartments, boutique buildings, and commercial spaces.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-emergency-orange" />
                  <span>Same-day emergency response to Prahran</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Fashion district property specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Commercial space mold solutions</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Boutique apartment building expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Retail space protection</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="emergency-cta">
                <Phone className="w-5 h-5 mr-2" />
                Call Now for Prahran Mold Emergency: (03) 9012-3456
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
          <h2 className="text-3xl font-bold text-primary mb-8">Mold Issues Common in Prahran, Melbourne</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Fashion District Challenges</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Commercial-residential mixed developments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Boutique apartment buildings with unique layouts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Retail spaces with basement storage areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>High-density living with ventilation challenges</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Prahran-Specific Risk Factors</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Chapel Street corridor microclimate effects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Nightlife district creating additional humidity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Mixed-use buildings with complex moisture pathways</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Trendy developments with modern moisture traps</span>
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
          <h2 className="text-3xl font-bold text-primary mb-8">Prahran Property Types We Service</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Boutique Apartments</h3>
                <p className="text-muted-foreground mb-4">Designer apartment buildings with contemporary styling requiring careful moisture management.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Designer interior protection</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Premium building management</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Mixed-Use Developments</h3>
                <p className="text-muted-foreground mb-4">Commercial ground floor with residential apartments above requiring coordinated mold management.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Commercial-residential coordination</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Business continuity focus</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Fashion Retail Spaces</h3>
                <p className="text-muted-foreground mb-4">Boutique stores and fashion outlets requiring specialized commercial mold treatment approaches.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Inventory protection protocols</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>After-hours service available</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Our Prahran Mold Removal Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emergency-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Fashion District Emergency Response</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• 2-hour response time to Prahran</li>
                    <li>• Commercial space emergency containment</li>
                    <li>• Retail inventory protection protocols</li>
                    <li>• After-hours emergency service</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Commercial-Residential Inspection</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Mixed-use building assessments</li>
                    <li>• Fashion retail space moisture evaluation</li>
                    <li>• Boutique apartment complex investigation</li>
                    <li>• Commercial-grade air quality testing</li>
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
                  <h3 className="text-xl font-semibold mb-2 text-primary">Business-Safe Remediation</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• IICRC-certified commercial processes</li>
                    <li>• Business continuity protection</li>
                    <li>• Retail space minimally disruptive methods</li>
                    <li>• Fashion inventory protection systems</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-success-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Mixed-Use Building Support</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Commercial-residential coordination</li>
                    <li>• Retail tenant liaison services</li>
                    <li>• Body corporate and business liaison</li>
                    <li>• Flexible scheduling for businesses</li>
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
          <h2 className="text-3xl font-bold text-primary mb-8">Areas We Service Near Prahran</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                We provide commercial and residential mold removal services throughout Prahran and nearby fashion district areas including:
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-medium text-primary">Prahran Areas:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Chapel Street fashion precinct</li>
                    <li>• Greville Street shopping quarter</li>
                    <li>• Prahran Market surrounds</li>
                    <li>• Commercial Road corridor</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-primary">Adjacent Trendy Suburbs:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• South Yarra</li>
                    <li>• Windsor</li>
                    <li>• St Kilda</li>
                    <li>• Armadale</li>
                  </ul>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Fashion District Response Times to Prahran</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Emergency response:</span>
                    <span className="font-semibold text-emergency-orange">Within 2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Commercial appointments:</span>
                    <span className="font-semibold text-success-green">Same day scheduling</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">After-hours availability:</span>
                    <span className="font-semibold text-accent-blue">7 days a week</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Inner south travel time:</span>
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
            <h2 className="text-3xl font-bold text-primary mb-6">Get Your Free Prahran Mold Inspection Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Protect your Prahran property or business with professional mold assessment. Expert service for fashion district commercial and residential properties.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Business-Friendly Contact</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-emergency-orange" />
                      <span>(03) 9012-3456 (24/7 business emergency)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-accent-blue" />
                      <span>info@mouldrestoration.com.au</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent-teal" />
                      <span>After-hours commercial service</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Commercial Service Process</h3>
                  <div className="space-y-3 text-left text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                      <span>Free business property consultation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                      <span>Business-friendly inspection scheduling</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                      <span>Commercial/residential assessment</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                      <span>Business continuity-focused remediation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
                      <span>Final clearance and business certification</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="emergency-cta">
                <Phone className="w-5 h-5 mr-2" />
                Prahran Business Emergency: (03) 9012-3456
              </Button>
              <Button variant="outline" size="lg">
                Schedule Business Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Serving Prahran and all fashion district suburbs • Commercial property specialists • After-hours service available
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};