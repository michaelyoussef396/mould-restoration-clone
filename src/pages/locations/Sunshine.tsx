import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, MapPin, Phone, ArrowRight, Star, Award, CheckCircle } from 'lucide-react';
import { LocationPageSEO } from '@/components/seo/SEOHead';
import { LocalBusinessSchema, ServiceSchema } from '@/components/seo/SchemaMarkup';

export default function SunshineMouldRemoval() {
  return (
    <>
      <LocationPageSEO
        title="Mould Removal Sunshine Melbourne | Expert Inspection & Remediation"
        description="Professional mould removal services in Sunshine 3020. Multicultural growth area with major transport hub. Free inspections. Call 1800 954 117 today."
        suburb="Sunshine"
        postcode="3020"
        keywords="mould removal sunshine, mould inspection sunshine melbourne, multicultural area mould treatment, transport hub moisture control 3020"
        canonical="https://mouldrestoration.com.au/services/mould-removal-sunshine"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        address="Sunshine VIC 3020"
        phone="1800 954 117"
        email="info@mouldrestorationco.com.au"
        abn="47 683 089 652"
        services={['Mould Inspection', 'Mould Removal', 'Moisture Control', 'Property Restoration']}
        serviceArea="Sunshine Melbourne Victoria"
        description="Professional mould removal services in Sunshine, specialising in multicultural communities and transport hub developments with expert moisture management."
      />

      <ServiceSchema
        serviceName="Mould Removal Sunshine"
        description="Comprehensive mould inspection and remediation services for Sunshine properties, focusing on growth area developments and diverse community housing."
        provider="Mould & Restoration Co."
        areaServed="Sunshine VIC 3020"
        serviceType="Property Restoration"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Mould Removal Sunshine Melbourne
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Protecting Sunshine's diverse growing community with professional mould inspection and removal services.
                Expert solutions for multicultural properties and transport developments throughout the 3020 area.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary-600 text-white px-8 py-4">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 1800 954 117
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4">
                  Free Inspection Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <div className="font-semibold text-charcoal">Same Day</div>
                <div className="text-sm text-professional">Professional Service - Same-day Available 7am-7pm</div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div className="font-semibold text-charcoal">5+ Years</div>
                <div className="text-sm text-professional">Experience</div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div className="font-semibold text-charcoal">100+</div>
                <div className="text-sm text-professional">Properties Restored</div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <div className="font-semibold text-charcoal">5.0 Stars</div>
                <div className="text-sm text-professional">50+ Reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sunshine Expertise Section */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-charcoal mb-6">
                  Local Sunshine Area Expertise
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    <strong>Sunshine (3020)</strong> represents Melbourne's most dynamic growth corridor,
                    combining rich multicultural heritage with major transport infrastructure development.
                    Our mould removal specialists understand the unique challenges facing this rapidly
                    evolving western suburb with its diverse housing needs.
                  </p>
                  <p>
                    From the bustling <strong>Sunshine Station</strong> transport interchange to the
                    multicultural precincts around <strong>Hampshire Road</strong>, we service all
                    residential areas including the growth developments near <strong>Albion</strong>
                    and the established communities around <strong>Sunshine Marketplace</strong>.
                  </p>
                  <p>
                    The suburb's role as Melbourne's key western transport hub, combined with rapid
                    residential development and diverse cultural communities, creates complex moisture
                    management requirements that our experienced team addresses with cultural
                    sensitivity and growth-area expertise.
                  </p>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">Postcode: 3020</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">12km from Melbourne CBD</span>
                  </div>
                </div>
              </div>

              <div className="lg:order-first">
                <div className="bg-columbia p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-charcoal mb-6">
                    Sunshine Property Specialisation
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Multicultural community housing</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Growth corridor developments</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Transport hub apartments</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Established family neighbourhoods</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Public housing and social developments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Property Types Section */}
        <div className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Sunshine Property Types We Service
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Every property type in Sunshine presents unique challenges from rapid growth and
                cultural diversity. Our expert team provides community-focused solutions for this dynamic suburb.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">
                    Multicultural Community Properties
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Sunshine's diverse community housing requires culturally-sensitive approaches
                    to mould management, understanding varied family structures, cooking methods,
                    and lifestyle patterns that influence moisture accumulation.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li>• Multi-generational family considerations</li>
                    <li>• Diverse cooking and ventilation needs</li>
                    <li>• Culturally-appropriate service delivery</li>
                    <li>• Community-respectful treatment methods</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">
                    Growth Corridor Developments
                  </h3>
                  <p className="text-gray-700 mb-4">
                    New residential developments in Sunshine's growth areas require understanding
                    of modern construction on former industrial land, with attention to building
                    standards and warranty considerations for growing families.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li>• New construction moisture management</li>
                    <li>• Former industrial site considerations</li>
                    <li>• Building warranty protection</li>
                    <li>• Growth area infrastructure impacts</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">
                    Transport Hub Properties
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Properties near Sunshine Station and major transport corridors face unique
                    challenges from vibration, increased density, and the moisture patterns
                    created by major infrastructure and high population throughput.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li>• Transport vibration impact assessment</li>
                    <li>• High-density living moisture control</li>
                    <li>• Infrastructure proximity management</li>
                    <li>• Public transport accessibility maintenance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Climate Considerations */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-charcoal mb-6">
                  Sunshine Growth Area Climate Challenges
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Sunshine's growth corridor position</strong> creates complex
                    microclimatic conditions influenced by rapid development, transport
                    infrastructure, and increased population density. The transformation from
                    industrial to high-density residential brings unique moisture challenges.
                  </p>
                  <p>
                    <strong>Winter moisture management</strong> becomes critical in high-density
                    developments where varied heating methods, cultural cooking practices, and
                    transport corridor humidity create complex indoor climate requirements
                    for diverse community needs.
                  </p>
                  <p>
                    <strong>Spring and summer considerations</strong> include managing moisture
                    from construction activity, the challenges of cooling new developments
                    efficiently, and addressing the impacts of increased population density
                    on local humidity and air circulation patterns.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-charcoal mb-6">
                  Growth Area Moisture Patterns
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-charcoal">Winter (Jun-Aug)</div>
                      <div className="text-sm text-gray-700">High-density heating variations and cultural cooking moisture</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-charcoal">Spring (Sep-Nov)</div>
                      <div className="text-sm text-gray-700">Construction activity moisture and development impacts</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-charcoal">Summer (Dec-Feb)</div>
                      <div className="text-sm text-gray-700">Transport corridor heat and cooling system moisture</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-charcoal">Autumn (Mar-May)</div>
                      <div className="text-sm text-gray-700">Population density moisture and infrastructure changes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Why Sunshine Residents Choose Mould & Restoration Co.
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Over 5 years of dedicated service to Melbourne's western suburbs, with 100+ properties
                successfully restored and a 5.0-star rating from satisfied customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Cultural Expertise</h3>
                  <p className="text-sm text-gray-700">
                    Deep understanding of diverse community needs and cultural considerations.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Growth Area Focus</h3>
                  <p className="text-sm text-gray-700">
                    Specialising in new developments and rapid growth corridor challenges.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Transport Access</h3>
                  <p className="text-sm text-gray-700">
                    Excellent coverage leveraging Sunshine's major transport connections.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Proven Results</h3>
                  <p className="text-sm text-gray-700">
                    100+ successful restorations with authentic 5.0-star reviews from residents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prevention Tips Section */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Sunshine Community Moisture Prevention
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Protect your family home with these targeted prevention strategies designed specifically
                for Sunshine's diverse community and rapid growth environment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">
                    Multicultural Living Adaptation
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span>Manage moisture from diverse cooking styles and equipment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span>Address high-occupancy family living patterns</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span>Ensure ventilation meets cultural living requirements</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span>Regular community-appropriate maintenance schedules</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">
                    Growth Area Considerations
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span>Monitor new construction moisture and settling issues</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span>Address transport corridor vibration impacts on seals</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span>Manage increased population density humidity</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span>Professional assessment for growth area developments</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 px-4 bg-gradient-to-br from-blue-600 to-indigo-700">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Protect Your Sunshine Community Home Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't let growth area moisture challenges compromise your family's health and comfort.
              Contact Melbourne's trusted community-focused specialists for immediate assistance.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />
                Call 1800 954 117 Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4">
                Free Inspection Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="text-sm opacity-75">
              ✓ Open 7am-7pm Every Day  ✓ Same-Day Professional Service  ✓ Free Quotes  ✓ 5.0 Star Rating
            </div>
          </div>
        </div>
      </div>
    </>
  );
}