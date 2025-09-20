import React from 'react';
import { LocationPageSEO } from '@/components/seo/SEOHead';
import { LocalBusinessSchema, ServiceSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Clock, Shield, MapPin, Phone, ArrowRight, Star, Award, CheckCircle } from 'lucide-react';

const EppingMouldRemoval = () => {
  return (
    <>
      <LocationPageSEO
        suburb="Epping"
        title="Professional Mould Removal Epping | 1800 954 117 | Mould & Restoration Co."
        description="Expert mould removal services in Epping 3076. Outer north specialists, family community expertise. 5.0 stars, 100+ Melbourne properties restored. Call 1800 954 117"
        keywords="mould removal epping, epping mould inspection, epping outer north, family community mould removal, epping 3076"
        canonical="https://mouldrestoration.com.au/services/mould-removal-epping"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        address="Epping VIC 3076"
        phone="1800 954 117"
        email="info@mouldandrestoration.com.au"
        description="Professional mould removal services in Epping. Outer north and family community specialists with 5+ years experience."
      />

      <ServiceSchema
        serviceName="Mould Removal Epping"
        description="Expert mould removal and remediation services for Epping properties, specialising in outer north family homes and community moisture management."
        areaServed="Epping VIC 3076"
        provider="Mould & Restoration Co."
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-blue-200" />
              <span className="text-blue-100 font-medium">Epping VIC 3076</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Professional Mould Removal Epping
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Outer north specialists with expert family community mould solutions for Epping's established residential areas
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-white text-primary hover:bg-columbia px-8 py-6 text-lg font-semibold rounded-full shadow-lg border-0">
                <Phone className="w-5 h-5 mr-2" />
                Call 1800 954 117
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold rounded-full">
                Free Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-300" />
                <span>5.0 Star Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-200" />
                <span>100+ Properties Restored</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-200" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-200" />
                <span>Fully Insured</span>
              </div>
            </div>
          </div>
        </section>

        {/* Local Expertise Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">
              Epping Outer North Mould Expertise
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Epping's established reputation as a family-friendly outer northern suburb creates specific mould challenges across diverse housing styles and community-focused neighbourhoods. With 5+ years serving Melbourne's outer northern areas and over 100 successful restorations, we understand the unique moisture dynamics of established suburban family living.
                </p>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  From family homes near Epping Plaza to residential properties throughout the 3076 postcode area, we provide comprehensive mould solutions tailored to Epping's blend of established suburban character, family community values, and outer northern environmental conditions.
                </p>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our team recognises that Epping properties serve established families who value community connections, good schools, and suburban space. We've successfully treated everything from brick veneer family homes to modern developments in this well-connected outer northern community.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Outer north expertise</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Family community specialists</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Established suburban focus</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Transport hub understanding</span>
                  </div>
                </div>
              </div>

              <div className="bg-columbia p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-charcoal mb-6">Epping Service Areas</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Epping Plaza vicinity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Epping railway station area</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">High Street corridor</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Family residential estates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">School proximity neighbourhoods</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Community facility surrounds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Property Types Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">
              Epping Property Types We Service
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-columbia rounded-full flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Established Family Homes</h3>
                  <p className="text-gray-700 mb-4">
                    Comprehensive treatment for Epping's well-established family properties, from 1970s-80s brick homes to renovated family houses, ensuring optimal health protection for growing families.
                  </p>
                  <ul className="space-y-2 text-sm text-professional">
                    <li>• Established home expertise</li>
                    <li>• Family health prioritisation</li>
                    <li>• Child-safe treatments</li>
                    <li>• Property investment protection</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-6">
                    <MapPin className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Community-Focused Properties</h3>
                  <p className="text-gray-700 mb-4">
                    Specialised moisture management for homes near Epping's schools, parks, and community facilities, understanding the family lifestyle priorities of this well-connected suburb.
                  </p>
                  <ul className="space-y-2 text-sm text-professional">
                    <li>• School proximity considerations</li>
                    <li>• Community facility awareness</li>
                    <li>• Family lifestyle adaptation</li>
                    <li>• Neighbourhood-respectful service</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Modern Suburban Developments</h3>
                  <p className="text-gray-700 mb-4">
                    Advanced moisture control for Epping's contemporary family developments and townhouse complexes, managing modern construction materials and suburban family living patterns.
                  </p>
                  <ul className="space-y-2 text-sm text-professional">
                    <li>• Modern construction expertise</li>
                    <li>• Townhouse complex solutions</li>
                    <li>• Contemporary moisture systems</li>
                    <li>• Suburban family adaptation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">
              Why Epping Families Choose Us
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-columbia rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-3">Outer Northern Family Specialists</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our extensive experience with Epping's established family community means we understand the priorities of suburban families who value space, schools, and community connections for their children's development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-3">Proven Suburban Community Track Record</h3>
                    <p className="text-gray-700 leading-relaxed">
                      With over 100 successful property restorations across Melbourne and 5+ years of experience, we've helped numerous Epping families protect their established suburban home investments and family health.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-3">Community-Connected Service Approach</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We understand the rhythm of Epping family life, offering flexible scheduling around school routines, community activities, and the established suburban lifestyle that residents cherish.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Get Your Free Epping Inspection</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Every Epping family deserves a healthy suburban home environment. Our comprehensive inspection identifies all moisture risks while protecting your family's established community investment.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Family-focused assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Suburban community understanding</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">School schedule accommodation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Established home expertise</span>
                  </div>
                </div>

                <Button size="lg" className="w-full bg-white text-primary hover:bg-columbia font-semibold py-6 rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 1800 954 117 Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Prevention Tips Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">
              Mould Prevention Tips for Epping Properties
            </h2>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Suburban Family Home Care</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Maintain adequate ventilation in family activity areas and bedrooms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Monitor established home building materials for moisture retention</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Address drainage issues in established suburban gardens</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Ensure children's play and study areas remain moisture-free</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Community Living Considerations</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Consider school and community activity impacts on home schedules</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Maintain suburban landscaping to support proper drainage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Balance established home character with moisture control needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Schedule regular inspections around family and school routines</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-primary">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Protect Your Epping Family Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Don't let mould compromise your family's health or your suburban community investment. Our Epping specialists prioritise family wellbeing and suburban lifestyle values.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-white text-primary hover:bg-columbia px-8 py-6 text-lg font-semibold rounded-full">
                <Phone className="w-5 h-5 mr-2" />
                1800 954 117
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold rounded-full">
                Book Free Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="text-blue-100">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-4 h-4" />
                <span>Available 7am-7pm, Every Day</span>
              </div>
              <p className="text-sm">ABN: 47 683 089 652 | Fully Licensed & Insured</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EppingMouldRemoval;