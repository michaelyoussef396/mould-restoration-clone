import { ArrowRight, Clock, Shield, MapPin, Phone, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";

export const Bonbeach = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Bonbeach Mould Removal", href: "/services/mould-removal-bonbeach", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Bonbeach"
        title="Mould Removal Bonbeach - Beachfront Living Specialists | Mould & Restoration Co"
        description="Professional mould removal in Bonbeach Melbourne. IICRC certified, Same-day professional service. Call 1800 954 117 for same-day Bonbeach mould inspection & removal."
        canonical="/services/mould-removal-bonbeach"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        serviceArea="Bonbeach, Melbourne"
        address="Bonbeach, Victoria, Australia"
        phone="1800 954 117"
        email="info@mouldrestoration.com.au"
        abn="47 683 089 652"
        description="Professional mould removal and inspection services in Bonbeach Melbourne. IICRC certified technicians specializing in beachfront living properties, Station Road corridor, and direct beach access homes."
      />

      <ServiceSchema
        serviceName="Mould Removal Bonbeach Melbourne"
        serviceType="Mould Remediation"
        areaServed="Bonbeach, Melbourne, Victoria"
        description="Emergency mould removal and inspection services for Bonbeach properties including beachfront homes, Station Road properties, and direct beach access residences."
      />

      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Bonbeach</span>
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
              Professional Mould Removal & Inspection in Bonbeach, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Emergency mould removal Bonbeach Melbourne specialists with 5+ years experience. IICRC-certified technicians serving Bonbeach's beachfront living properties, Station Road corridor, and direct beach access homes with same-day response. Trusted by 100+ Melbourne properties with 5.0-star rating.
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
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>Same-day professional service to Bonbeach</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Beachfront living & direct beach access expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Postcodes: 3196, Station Road corridor coverage</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-accent-teal" />
                  <span>Insurance work welcome</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success-green" />
                  <span>100% satisfaction guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>ABN: 47 683 089 652</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emergency-orange hover:bg-emergency-orange/90 text-white">
                <Phone className="mr-2 h-5 w-5" />
                Call 1800 954 117 Now
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Free Bonbeach Inspection Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Expertise */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Local Expertise in Bonbeach Melbourne</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Bonbeach Community Profile</h3>
                <p className="text-muted-foreground mb-4">
                  Bonbeach (postcode 3196) is located 28km southeast of Melbourne CBD, representing the epitome of beachfront living along Port Phillip Bay. This direct beach access community features premium beachfront properties, Station Road corridor developments, and immediate bay frontage homes creating exceptional coastal exposure challenges. As part of Kingston Council, Bonbeach offers unparalleled beach access with corresponding environmental complexities for property maintenance.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>28km from Melbourne CBD with premium beachfront living access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Kingston Council managed beachfront community with direct bay access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mix of beachfront homes, Station Road properties, and direct bay frontage developments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Exceptional coastal exposure: immediate beach access and maximum salt air exposure</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Melbourne Climate Impact on Bonbeach</h3>
                <p className="text-muted-foreground mb-4">
                  Bonbeach's direct beachfront position experiences Melbourne's temperate oceanic climate at maximum intensity with immediate bay exposure. Annual rainfall of 650mm combines with constant salt spray, direct wind patterns, and sand infiltration to create the most challenging coastal conditions for property maintenance in Melbourne's southeastern bayside. Properties experience 24/7 marine exposure requiring specialized management approaches.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Maximum summer salt spray exposure affecting all external building surfaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Direct winter storm exposure from bay frontage creating extreme moisture challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Constant coastal humidity with 24/7 marine environment exposure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Direct beach sand infiltration and salt crystal formation on building materials</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Local Bonbeach Landmarks & Challenges</h3>
                <p className="text-muted-foreground mb-4">
                  From Bonbeach Beach with its direct bay access to Station Road's residential corridor, the suburb presents maximum coastal mould challenges. Beachfront properties face constant salt air and sand exposure while Station Road properties experience wind tunnel effects and marine moisture infiltration from their proximity to immediate beach access.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Bonbeach Beach with direct bay frontage creating maximum salt air exposure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Station Road corridor properties with marine wind tunnel effects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Bonbeach Railway Station area with coastal commuter property exposures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Direct bay frontage properties with immediate marine environment challenges</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Common Mould Issues in Bonbeach Properties</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Beachfront Property Maximum Exposure Challenges</h3>
                <p className="text-muted-foreground mb-4">
                  Bonbeach's premium beachfront properties experience maximum coastal exposure with direct bay frontage creating unprecedented salt air, sand infiltration, and marine moisture challenges. These properties require specialized construction approaches and maintenance protocols to manage constant marine environment exposure affecting all building materials and systems.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Direct bay frontage salt spray creating constant corrosion and moisture entry points</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Beach sand infiltration through building envelope gaps and ventilation systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Marine environment humidity affecting internal air quality and materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Constant salt air exposure requiring specialized sealants and protective systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Direct storm exposure from bay weather systems affecting structural integrity</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Station Road Corridor Wind Effects</h3>
                <p className="text-muted-foreground mb-4">
                  Properties along Bonbeach's Station Road corridor experience intensified marine wind effects channeled from direct beach access, creating unique pressure differentials and moisture intrusion patterns. These properties face both direct salt air exposure and wind tunnel effects that accelerate moisture penetration and building material deterioration.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Marine wind tunnel effects from direct beach access accelerating moisture intrusion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Salt air channeling through corridor creating concentrated exposure patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Pressure differentials from bay winds affecting building seal performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Direct beach proximity sandy soil drainage creating foundation moisture issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Marine environment corrosion affecting metal fixtures and structural elements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us in Bonbeach Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Why Choose Mould & Restoration Co. in Bonbeach Melbourne</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Local Bonbeach Knowledge Since 2019</h3>
                <p className="text-muted-foreground mb-4">
                  As Bonbeach's trusted beachfront mould removal specialists with over 5 years of experience in Melbourne's premium coastal properties, we understand the unique challenges of direct bay frontage exposure, maximum salt air conditions, and Kingston Council area beachfront property requirements and regulations.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>5+ years specializing in Bonbeach beachfront and direct bay access property mould issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>100+ Bonbeach properties successfully restored across beachfront and Station Road areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Maximum coastal exposure expertise: direct bay frontage and marine environment management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Kingston Council area beachfront property compliance and premium property knowledge</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">IICRC Certified Technicians & 2-Hour Response</h3>
                <p className="text-muted-foreground mb-4">
                  Our IICRC-certified technicians provide emergency response Same-day professional service to Bonbeach beachfront properties, operating 7am-7pm daily with Professional service hotline (7am-7pm) availability. Licensed and insured for premium coastal properties across Melbourne's beachfront communities. ABN: 47 683 089 652.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>IICRC certification in mould remediation and beachfront property restoration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Same-day professional service guarantee to Bonbeach postcode 3196</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professional service hotline (7am-7pm): 1800 954 117</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Same-day service scheduling for beachfront and direct bay access properties</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Insurance Work Welcome & 100% Satisfaction</h3>
                <p className="text-muted-foreground mb-4">
                  We work directly with all major Australian insurance providers offering comprehensive documentation for claims related to marine storm damage, maximum salt air corrosion, and beachfront property moisture issues in Bonbeach premium properties.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Direct insurance billing for approved beachfront and marine exposure claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>100% satisfaction guarantee on all Bonbeach mould removal work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>12-month warranty on professional beachfront and marine environment remediation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">5.0 Star Rating & Bonbeach Customer Reviews</h3>
                <p className="text-muted-foreground mb-4">
                  With over 50+ verified 5-star reviews from Bonbeach beachfront property owners, direct bay access specialists, and premium coastal communities, we're the most trusted mould removal service for Melbourne's premier beachfront properties.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>5.0/5 star rating across Google, Facebook, and industry directories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>50+ verified customer reviews from Bonbeach beachfront and direct bay properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Trusted by Station Road residents and premium beachfront property owners</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Performance Metrics & Results</h3>
                <p className="text-muted-foreground mb-4">
                  Our proven track record in Bonbeach demonstrates consistent excellence across beachfront properties and direct bay access homes, with industry-leading response times and customer satisfaction rates for premium coastal properties.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Average 80-minute response time to Bonbeach emergency calls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>100% customer satisfaction rate in beachfront and premium coastal properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Zero comeback rates on completed beachfront and marine environment remediation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Immediate Mould Removal in Bonbeach?
            </h2>
            <p className="text-xl mb-8">
              Don't let mould compromise your Bonbeach beachfront home or direct beach access property. Our IICRC-certified technicians provide Professional service hotline (7am-7pm) response with 2-hour arrival guarantee. Trusted by beachfront communities and direct beach access homes with a 5.0-star rating.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">24/7 Professional Service - Same-day Available 7am-7pm</h3>
                  <p className="mb-4">Call now for immediate mould removal Bonbeach Melbourne assistance. Our beachfront living specialists respond Same-day professional service.</p>
                  <Button className="w-full bg-emergency-orange hover:bg-emergency-orange/90">
                    Call 1800 954 117 Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Free Bonbeach Inspection</h3>
                  <p className="mb-4">Comprehensive beachfront assessment with thermal imaging. Specialized quotes for direct beach access homes and Station Road properties.</p>
                  <Button className="w-full" variant="outline">
                    Book Free Beachfront Property Inspection
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg mb-2">
                <strong>ABN: 47 683 089 652</strong> | Licensed & Insured | IICRC Certified | Beachfront Living Specialists
              </p>
              <p className="text-sm opacity-90">
                Serving Bonbeach: 3196 | Station Road | Beachfront Living | Direct Beach Access
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};