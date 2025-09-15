import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, MapPin, Phone, ArrowRight, Star, Award, CheckCircle } from 'lucide-react';
import { LocationPageSEO } from '@/components/seo/LocationPageSEO';
import { LocalBusinessSchema, ServiceSchema } from '@/components/seo/StructuredData';

export default function RingwoodMouldRemoval() {
  return (
    <>
      <LocationPageSEO
        title="Mould Removal Ringwood Melbourne | Expert Inspection & Remediation"
        description="Professional mould removal services in Ringwood 3134. Major shopping hub with mixed housing types. Free inspections. Call 1800 954 117 today."
        suburb="Ringwood"
        postcode="3134"
        keywords="mould removal ringwood, mould inspection ringwood melbourne, shopping centre moisture control, transport hub mould treatment 3134"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        address="Ringwood VIC 3134"
        phone="1800 954 117"
        email="info@mouldrestorationco.com.au"
        abn="47 683 089 652"
        services={['Mould Inspection', 'Mould Removal', 'Moisture Control', 'Property Restoration']}
        serviceArea="Ringwood Melbourne Victoria"
        description="Professional mould removal services in Ringwood, specialising in properties near shopping centres and transport hubs with comprehensive moisture management solutions."
      />

      <ServiceSchema
        serviceName="Mould Removal Ringwood"
        description="Comprehensive mould inspection and remediation services for Ringwood properties, focusing on mixed housing near major shopping and transport centres."
        provider="Mould & Restoration Co."
        areaServed="Ringwood VIC 3134"
        serviceType="Property Restoration"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Mould Removal Ringwood Melbourne
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Protecting Ringwood's diverse community with professional mould inspection and removal services.
                Expert solutions for mixed housing near major shopping and transport centres in the 3134 area.
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
                <div className="text-sm text-gray-600">Professional Service - Same-day Available 7am-7pm</div>
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

        {/* Ringwood Expertise Section */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Local Ringwood Area Expertise
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    <strong>Ringwood (3134)</strong> serves as a major regional shopping and transport
                    hub for Melbourne's eastern suburbs. Our mould removal specialists understand the
                    unique challenges facing this bustling community with its diverse mix of residential
                    properties and commercial activity.
                  </p>
                  <p>
                    From <strong>Ringwood Station</strong> and <strong>Eastland Shopping Centre</strong>
                    to the residential streets near <strong>Ringwood Lake Park</strong>, we service all
                    areas including the established neighbourhoods around <strong>Maroondah Highway</strong>
                    and the family areas near <strong>Aquanation Ringwood</strong>.
                  </p>
                  <p>
                    The suburb's role as a transport center and shopping destination creates unique
                    moisture management challenges, from busy commercial areas to quiet residential
                    streets, all requiring our specialised local expertise and understanding.
                  </p>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Postcode: 3134</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">23km from Melbourne CBD</span>
                  </div>
                </div>
              </div>

              <div className="lg:order-first">
                <div className="bg-blue-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Ringwood Property Specialisation
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Mixed housing near shopping centres</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Transport hub residential properties</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Family homes in established areas</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Modern apartments and units</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Commercial-adjacent residential</span>
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
                Ringwood Property Types We Service
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Every property type in Ringwood faces unique challenges from the area's role as a major
                shopping and transport hub. Our expert team provides tailored solutions for this dynamic community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Shopping Centre Adjacent Properties
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Homes near Eastland and other shopping complexes face unique moisture challenges
                    from increased traffic, parking areas, and commercial activity. Our specialists
                    provide solutions that account for these urban density factors.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Urban density moisture management</li>
                    <li>• Commercial activity impact assessment</li>
                    <li>• Traffic pollution and air quality considerations</li>
                    <li>• Noise barrier moisture implications</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Transport Hub Residential
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Properties near Ringwood Station and major bus routes require specialist
                    moisture management approaches. We understand the unique challenges of
                    transport-adjacent living and provide effective remediation solutions.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Railway corridor moisture management</li>
                    <li>• Vibration impact considerations</li>
                    <li>• Public transport accessibility maintenance</li>
                    <li>• Multi-unit building specialisation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Established Residential Areas
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Ringwood's quieter residential streets away from commercial activity present
                    their own moisture challenges. We provide comprehensive family home solutions
                    that maintain neighbourhood character and property values.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Family home moisture protection</li>
                    <li>• Garden and landscaping considerations</li>
                    <li>• Neighbourhood character preservation</li>
                    <li>• Property value protection strategies</li>
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
                  Ringwood Climate & Moisture Challenges
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Ringwood's regional hub status</strong> creates unique microclimatic
                    conditions influenced by increased urban activity and infrastructure density.
                    The combination of shopping centres, transport facilities, and residential
                    areas affects moisture patterns throughout the suburb.
                  </p>
                  <p>
                    <strong>Winter moisture management</strong> becomes complex near commercial areas
                    where increased heating, traffic, and activity create humidity variations.
                    Properties near Eastland and the station precinct require careful moisture
                    balance to manage these urban heat island effects.
                  </p>
                  <p>
                    <strong>Spring and summer considerations</strong> include managing moisture from
                    air conditioning systems, increased commercial activity, and the popular
                    Lake Ringwood recreation areas. Our comprehensive approach addresses both
                    urban and residential moisture challenges.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Urban Hub Moisture Patterns
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Winter (Jun-Aug)</div>
                      <div className="text-sm text-gray-700">Commercial heating impact and transport condensation</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Spring (Sep-Nov)</div>
                      <div className="text-sm text-gray-700">Increased activity and lake recreation moisture</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Summer (Dec-Feb)</div>
                      <div className="text-sm text-gray-700">Shopping centre air conditioning and urban heat</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Autumn (Mar-May)</div>
                      <div className="text-sm text-gray-700">Commercial drainage and leaf litter management</div>
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
                Why Ringwood Residents Choose Mould & Restoration Co.
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Over 5 years of dedicated service to Melbourne's eastern suburbs, with 100+ properties
                successfully restored and a 5.0-star rating from satisfied customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Urban Expertise</h3>
                  <p className="text-sm text-gray-700">
                    Specialist knowledge of moisture challenges near shopping centres and transport hubs.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Community-Focused</h3>
                  <p className="text-sm text-gray-700">
                    Understanding of diverse housing needs in this major regional centre.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessible Service</h3>
                  <p className="text-sm text-gray-700">
                    Same-day emergency response leveraging excellent transport connectivity.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
                  <p className="text-sm text-gray-700">
                    100+ successful restorations with authentic 5.0-star reviews from local residents.
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
                Ringwood Urban Living Moisture Prevention
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Protect your property with these targeted prevention strategies designed specifically
                for Ringwood's unique urban environment and diverse housing challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Urban Environment Management
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Monitor air quality and ventilation near commercial areas</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Address urban heat island effects on moisture levels</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Manage condensation from increased urban activity</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Account for transport vibration impacts on seals</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Property-Specific Solutions
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Maintain drainage systems with increased urban runoff</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Regular inspection of building seals and weatherproofing</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Balanced ventilation for urban density living</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Professional moisture assessment for mixed-use areas</span>
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
              Protect Your Ringwood Property Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't let mould compromise your family's health or property investment.
              Contact Melbourne's trusted urban moisture management specialists for immediate assistance.
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