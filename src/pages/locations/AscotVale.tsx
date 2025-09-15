import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, MapPin, Phone, ArrowRight, Star, Award, CheckCircle } from 'lucide-react';
import { LocationPageSEO } from '@/components/seo/LocationPageSEO';
import { LocalBusinessSchema, ServiceSchema } from '@/components/seo/StructuredData';

export default function AscotValeMouldRemoval() {
  return (
    <>
      <LocationPageSEO
        title="Mould Removal Ascot Vale Melbourne | Expert Inspection & Remediation"
        description="Professional mould removal services in Ascot Vale 3032. Union Road shopping with period homes near racing facilities. Free inspections. Call 1800 954 117 today."
        suburb="Ascot Vale"
        postcode="3032"
        keywords="mould removal ascot vale, mould inspection ascot vale melbourne, period homes mould treatment, racing precinct moisture control 3032"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        address="Ascot Vale VIC 3032"
        phone="1800 954 117"
        email="info@mouldrestorationco.com.au"
        abn="47 683 089 652"
        services={['Mould Inspection', 'Mould Removal', 'Moisture Control', 'Property Restoration']}
        serviceArea="Ascot Vale Melbourne Victoria"
        description="Professional mould removal services in Ascot Vale, specialising in period homes and racing precinct properties with expert moisture management."
      />

      <ServiceSchema
        serviceName="Mould Removal Ascot Vale"
        description="Comprehensive mould inspection and remediation services for Ascot Vale properties, focusing on heritage homes and racing facility proximity considerations."
        provider="Mould & Restoration Co."
        areaServed="Ascot Vale VIC 3032"
        serviceType="Property Restoration"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Mould Removal Ascot Vale Melbourne
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Protecting Ascot Vale's established community with professional mould inspection and removal services.
                Expert solutions for period homes and racing precinct properties throughout the 3032 area.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
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
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <div className="font-semibold text-gray-900">Same Day</div>
                <div className="text-sm text-gray-600">Emergency Response</div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <div className="font-semibold text-gray-900">5+ Years</div>
                <div className="text-sm text-gray-600">Experience</div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <div className="font-semibold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">Properties Restored</div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <div className="font-semibold text-gray-900">5.0 Stars</div>
                <div className="text-sm text-gray-600">50+ Reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Ascot Vale Expertise Section */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Local Ascot Vale Area Expertise
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    <strong>Ascot Vale (3032)</strong> combines heritage charm with modern convenience,
                    featuring a thriving shopping precinct and proximity to Melbourne's famous racing
                    facilities. Our mould removal specialists understand the unique challenges facing
                    this established inner-western community with its period architecture and racing heritage.
                  </p>
                  <p>
                    From the bustling <strong>Union Road</strong> shopping strip to the prestigious
                    areas near <strong>Flemington Racecourse</strong>, we service all residential
                    areas including the heritage neighbourhoods around <strong>Maribyrnong River</strong>
                    and the established family streets near <strong>Ascot Vale Railway Station</strong>.
                  </p>
                  <p>
                    The suburb's unique position between racing facilities and residential areas,
                    combined with its heritage building stock and proximity to the Maribyrnong River,
                    creates distinctive moisture management requirements that our experienced team
                    addresses with heritage awareness and environmental expertise.
                  </p>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Postcode: 3032</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">6km from Melbourne CBD</span>
                  </div>
                </div>
              </div>

              <div className="lg:order-first">
                <div className="bg-blue-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Ascot Vale Property Specialisation
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Period homes and heritage cottages</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Racing facility proximity properties</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Maribyrnong River adjacent homes</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Commercial-residential mixed areas</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Established family neighbourhoods</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ascot Vale Property Types We Service
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Every property type in Ascot Vale presents unique challenges from heritage character and
                racing precinct proximity. Our expert team provides specialised solutions for this distinctive community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Heritage Period Properties
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Ascot Vale's heritage cottages and period homes require specialist understanding
                    of traditional building materials and construction methods. We provide
                    heritage-sensitive moisture management that preserves character while ensuring comfort.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Period construction expertise</li>
                    <li>• Heritage material preservation</li>
                    <li>• Traditional building restoration</li>
                    <li>• Character feature protection</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Racing Precinct Properties
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Properties near Flemington Racecourse and racing facilities face unique challenges
                    from event-related activity, crowd impacts, and seasonal usage patterns. Our
                    specialists provide event-aware moisture management solutions.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Racing season impact management</li>
                    <li>• Event-related moisture variations</li>
                    <li>• Crowd activity considerations</li>
                    <li>• Seasonal property protection</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    River Adjacent Family Homes
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Properties near the Maribyrnong River require understanding of river system
                    influences and seasonal water variations. We provide river-aware moisture
                    management for families enjoying waterside living.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• River system moisture assessment</li>
                    <li>• Seasonal water table management</li>
                    <li>• Waterside living protection</li>
                    <li>• Family recreation area care</li>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Ascot Vale River-Racing Precinct Climate Challenges
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Ascot Vale's unique river-racing position</strong> creates complex
                    microclimatic conditions influenced by the Maribyrnong River system, racing
                    facility operations, and established residential areas. This distinctive
                    combination requires specialised moisture management approaches.
                  </p>
                  <p>
                    <strong>Winter moisture management</strong> becomes critical near river areas
                    where increased humidity combines with heritage building challenges. Racing
                    season activities create additional environmental factors that affect local
                    moisture patterns throughout residential areas.
                  </p>
                  <p>
                    <strong>Spring and summer considerations</strong> include managing the effects
                    of river proximity humidity, racing season crowd impacts, and the challenges
                    of maintaining period properties during peak activity periods around major
                    racing events and festivals.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Racing-River Moisture Patterns
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Winter (Jun-Aug)</div>
                      <div className="text-sm text-gray-700">River humidity and heritage building moisture challenges</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Spring (Sep-Nov)</div>
                      <div className="text-sm text-gray-700">Racing season buildup and river seasonal changes</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Summer (Dec-Feb)</div>
                      <div className="text-sm text-gray-700">Peak racing activity and river recreation impacts</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Autumn (Mar-May)</div>
                      <div className="text-sm text-gray-700">Melbourne Cup season and river system variations</div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Ascot Vale Residents Choose Mould & Restoration Co.
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Over 5 years of dedicated service to Melbourne's heritage suburbs, with 100+ properties
                successfully restored and a 5.0-star rating from satisfied customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Heritage Expertise</h3>
                  <p className="text-sm text-gray-700">
                    Specialist knowledge of period property construction and preservation methods.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Racing Precinct Awareness</h3>
                  <p className="text-sm text-gray-700">
                    Understanding of racing season impacts and event-related considerations.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">River System Knowledge</h3>
                  <p className="text-sm text-gray-700">
                    Experience with Maribyrnong River proximity moisture challenges.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
                  <p className="text-sm text-gray-700">
                    100+ successful restorations with authentic 5.0-star reviews from locals.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ascot Vale Heritage Property Maintenance
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Protect your period property with these targeted prevention strategies designed specifically
                for Ascot Vale's heritage character and river-racing precinct environment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Heritage Building Care
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Preserve period ventilation systems while improving efficiency</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Monitor traditional building materials for moisture sensitivity</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Address heritage timber and masonry moisture concerns</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Maintain character features during moisture improvements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Environmental Factor Management
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Account for river proximity humidity variations</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Plan for racing season activity and crowd impacts</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Monitor seasonal water table and river system changes</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Professional assessment for unique environmental factors</span>
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
              Protect Your Ascot Vale Heritage Property Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't let river and racing precinct moisture challenges compromise your period property.
              Contact Melbourne's trusted heritage specialists for immediate assistance.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />
                Call 1800 954 117 Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4">
                Free Inspection Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="text-sm opacity-75">
              ✓ Open 7am-7pm Every Day  ✓ Same-Day Emergency Service  ✓ Free Quotes  ✓ 5.0 Star Rating
            </div>
          </div>
        </div>
      </div>
    </>
  );
}