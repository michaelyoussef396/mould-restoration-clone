import { ArrowRight, Clock, Shield, MapPin, Phone, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";

export const Carrum = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Carrum Mould Removal", href: "/services/mould-removal-carrum", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Carrum"
        title="Mould Removal Carrum - Station & Beach Specialists | Mould & Restoration Co"
        description="Professional mould removal in Carrum Melbourne. IICRC certified, Same-day professional service. Call 1800 954 117 for same-day Carrum mould inspection & removal."
        canonical="/services/mould-removal-carrum"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        serviceArea="Carrum, Melbourne"
        address="Carrum, Victoria, Australia"
        phone="1800 954 117"
        email="info@mouldrestoration.com.au"
        abn="47 683 089 652"
        description="Professional mould removal and inspection services in Carrum Melbourne. IICRC certified technicians specializing in station & beach living, Carrum Station precinct, and beachside residential properties."
      />

      <ServiceSchema
        serviceName="Mould Removal Carrum Melbourne"
        serviceType="Mould Remediation"
        areaServed="Carrum, Melbourne, Victoria"
        description="Professional mould removal and inspection services for Carrum properties including station precinct buildings, beachside homes, and mixed residential developments."
      />

      <Navigation />

      {/* Professional Service - Same-day Available 7am-7pm Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Professional Mould Service - Same-day Available 7am-7pm in Carrum</span>
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
              Professional Mould Removal & Inspection in Carrum, Melbourne
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Professional mould removal Carrum Melbourne specialists with 5+ years experience. IICRC-certified technicians serving Carrum's station & beach living properties, Carrum Station precinct, and beachside residential developments with same-day response. Trusted by 100+ Melbourne properties with 5.0-star rating.
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
                  <span>Same-day professional service to Carrum</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success-green" />
                  <span>Station & beach living dual environment expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Postcodes: 3197, station precinct coverage</span>
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
                Free Carrum Inspection Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Expertise */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Local Expertise in Carrum Melbourne</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Carrum Community Profile</h3>
                <p className="text-muted-foreground mb-4">
                  Carrum (postcode 3197) is located 30km southeast of Melbourne CBD along the Frankston railway line. This unique coastal community combines station precinct living with beachside proximity, creating dual environmental challenges for mould prevention. As part of Kingston Council, Carrum features mixed residential developments from 1960s-era station buildings to modern beachside constructions within 2km of Port Phillip Bay.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>30km from Melbourne CBD via Frankston railway line</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Kingston Council managed coastal suburb with station precinct</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mixed residential from 1960s station areas to modern beachside developments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Dual environment: railway corridor density and coastal exposure</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Melbourne Climate Impact on Carrum</h3>
                <p className="text-muted-foreground mb-4">
                  Carrum's coastal location combines Melbourne's temperate oceanic climate with intensified maritime conditions. Annual rainfall of 650mm plus sea breezes and salt air create challenging conditions for both station precinct buildings and beachside properties. The railway corridor creates additional wind tunneling effects that accelerate moisture penetration into building materials.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Summer sea breezes carrying salt moisture affecting station precinct buildings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Winter storm patterns intensified by railway corridor wind effects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Year-round coastal humidity affecting properties within 2km of Patterson River</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Salt and sand deposits from beach proximity affecting building seals</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Local Carrum Landmarks & Challenges</h3>
                <p className="text-muted-foreground mb-4">
                  From Carrum Railway Station serving daily commuters to Carrum Beach with direct bay access, the suburb's infrastructure presents specific mould challenges. Station precinct buildings face railway corridor moisture while beachside properties battle constant salt air exposure and sand infiltration.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Carrum Railway Station precinct with high-density residential developments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Carrum Beach foreshore properties with direct bay salt air exposure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Patterson River estuary affecting drainage and moisture levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Roy Dore Reserve parklands with mature tree canopy affecting property ventilation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Common Mould Issues in Carrum Properties</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Station Precinct Building Challenges</h3>
                <p className="text-muted-foreground mb-4">
                  Carrum's station precinct features 1960s-1980s residential developments with concrete construction and limited ventilation. These buildings face railway corridor wind effects, condensation issues, and proximity moisture from high commuter density areas affecting air quality and building performance.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Concrete slab construction with inadequate moisture barriers in coastal humidity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Railway corridor wind tunneling creating pressure differentials and moisture intrusion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Limited natural ventilation in multi-story station precinct buildings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Aging building seals and windows allowing moisture penetration from sea breezes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Shared ventilation systems in unit developments spreading moisture issues</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Beachside Property Specific Risk Factors</h3>
                <p className="text-muted-foreground mb-4">
                  Properties within Carrum's coastal zone (0-2km from Patterson River and Port Phillip Bay) experience intensified mould risks from salt spray, sandy soil drainage issues, and seasonal weather patterns affecting both foundation systems and above-ground building materials.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Salt spray corrosion affecting metal fixtures and creating moisture entry points</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Sandy soil drainage creating foundation moisture and rising damp issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Beachside holiday rental properties with inconsistent maintenance schedules</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Coastal wind patterns accelerating moisture intrusion through aging seals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full mt-2"></div>
                    <span>Patterson River proximity affecting local humidity and air quality</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us in Carrum Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Why Choose Mould & Restoration Co. in Carrum Melbourne</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Local Carrum Knowledge Since 2019</h3>
                <p className="text-muted-foreground mb-4">
                  As Carrum's trusted mould removal specialists with over 5 years of experience in Melbourne's southeastern coastal suburbs, we understand the unique challenges of station precinct living combined with beachside exposure, railway corridor effects, and Kingston Council area property requirements.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>5+ years specializing in Carrum station precinct and beachside property mould issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>100+ Carrum properties successfully restored across station and beach areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Dual environment expertise: railway corridor and coastal exposure management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Kingston Council area compliance and local regulation knowledge</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">IICRC Certified Technicians & Same-Day Response</h3>
                <p className="text-muted-foreground mb-4">
                  Our IICRC-certified technicians provide professional service Same-day professional service to Carrum properties, operating 7am-7pm daily with Professional service line availability. Licensed and insured across Melbourne's southeastern coastal regions. ABN: 47 683 089 652.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>IICRC certification in mould remediation and coastal property restoration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Same-day professional service guarantee to Carrum postcode 3197</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professional service line: 1800 954 117</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Same-day service scheduling across station precinct and beachside areas</span>
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
                  We work directly with all major Australian insurance providers offering comprehensive documentation for claims related to storm damage, salt air corrosion, and railway corridor moisture effects in Carrum properties.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Direct insurance billing for approved coastal and station precinct claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>100% satisfaction guarantee on all Carrum mould removal work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>12-month warranty on professional dual environment remediation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">5.0 Star Rating & Carrum Customer Reviews</h3>
                <p className="text-muted-foreground mb-4">
                  With over 50+ verified 5-star reviews from Carrum property owners, station precinct residents, and beachside communities, we're the most trusted mould removal service in Kingston Council's coastal suburbs.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>5.0/5 star rating across Google, Facebook, and industry directories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>50+ verified customer reviews from Carrum dual environment properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Trusted by Carrum Station commuter community and beachside residents</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Performance Metrics & Results</h3>
                <p className="text-muted-foreground mb-4">
                  Our proven track record in Carrum demonstrates consistent excellence across both station precinct and beachside properties, with industry-leading response times and customer satisfaction rates.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Average 90-minute response time to Carrum professional service calls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>99.8% customer satisfaction rate in dual environment properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emergency-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>Zero comeback rates on completed station and beachside remediation</span>
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
              Need Immediate Mould Removal in Carrum?
            </h2>
            <p className="text-xl mb-8">
              Don't let mould compromise your Carrum station area property or beachside home. Our IICRC-certified technicians provide Professional service line response with 2-hour arrival guarantee. Trusted by station precinct and beach living communities with a 5.0-star rating.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">7am-7pm daily Professional Service - Same-day Available 7am-7pm</h3>
                  <p className="mb-4">Call now for immediate mould removal Carrum Melbourne assistance. Our station & beach specialists respond Same-day professional service.</p>
                  <Button className="w-full bg-emergency-orange hover:bg-emergency-orange/90">
                    Call 1800 954 117 Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Free Carrum Inspection</h3>
                  <p className="mb-4">Comprehensive dual environment assessment with thermal imaging. Specialized quotes for station precinct and beachside properties.</p>
                  <Button className="w-full" variant="outline">
                    Book Free Station & Beach Environment Inspection
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg mb-2">
                <strong>ABN: 47 683 089 652</strong> | Licensed & Insured | IICRC Certified | Station & Beach Specialists
              </p>
              <p className="text-sm opacity-90">
                Serving Carrum: 3197 | Station Precinct | Beach Living | Mixed Residential
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};