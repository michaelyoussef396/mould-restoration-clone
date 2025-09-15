import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, MapPin, Phone, ArrowRight, Star, Award, CheckCircle } from 'lucide-react';
import { LocationPageSEO } from '@/components/seo/LocationPageSEO';
import { LocalBusinessSchema, ServiceSchema } from '@/components/seo/StructuredData';

export default function FlemingtonMouldRemoval() {
  return (
    <>
      <LocationPageSEO
        title="Mould Removal Flemington Melbourne | Expert Inspection & Remediation"
        description="Professional mould removal services in Flemington 3031. Famous racecourse with industrial and residential mix. Free inspections. Call 1800 954 117 today."
        suburb="Flemington"
        postcode="3031"
        keywords="mould removal flemington, mould inspection flemington melbourne, racecourse area mould treatment, industrial residential moisture control 3031"
        canonical="https://mouldrestoration.com.au/services/mould-removal-flemington"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        address="Flemington VIC 3031"
        phone="1800 954 117"
        email="info@mouldrestorationco.com.au"
        abn="47 683 089 652"
        services={['Mould Inspection', 'Mould Removal', 'Moisture Control', 'Property Restoration']}
        serviceArea="Flemington Melbourne Victoria"
        description="Professional mould removal services in Flemington, specialising in racecourse proximity properties and industrial-residential mixed areas with expert moisture management."
      />

      <ServiceSchema
        serviceName="Mould Removal Flemington"
        description="Comprehensive mould inspection and remediation services for Flemington properties, focusing on racecourse area and industrial-residential considerations."
        provider="Mould & Restoration Co."
        areaServed="Flemington VIC 3031"
        serviceType="Property Restoration"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Mould Removal Flemington Melbourne
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Protecting Flemington's unique community with professional mould inspection and removal services.
                Expert solutions for racecourse properties and industrial-residential areas throughout the 3031 region.
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

        {/* Flemington Expertise Section */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Local Flemington Area Expertise
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    <strong>Flemington (3031)</strong> is globally renowned as home to the Melbourne
                    Cup and Flemington Racecourse, creating a unique community where racing heritage
                    meets residential living. Our mould removal specialists understand the distinctive
                    challenges facing this inner-western suburb with its world-famous racing precinct.
                  </p>
                  <p>
                    From the prestigious <strong>Flemington Racecourse</strong> to the residential
                    areas along <strong>Epsom Road</strong>, we service all properties including
                    the industrial-residential zones near <strong>Kensington</strong> and the
                    established neighbourhoods around <strong>Flemington Railway Station</strong>.
                  </p>
                  <p>
                    The suburb's unique combination of world-class racing facilities, industrial heritage,
                    and residential areas creates complex moisture management requirements during
                    major racing events, particularly the <strong>Melbourne Cup Carnival</strong>,
                    that our experienced team addresses with event-aware expertise.
                  </p>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Postcode: 3031</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">4km from Melbourne CBD</span>
                  </div>
                </div>
              </div>

              <div className="lg:order-first">
                <div className="bg-blue-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Flemington Property Specialisation
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Racecourse proximity properties</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Industrial heritage conversions</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Event-impacted residential areas</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Mixed-use industrial residential</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Transport corridor properties</span>
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
                Flemington Property Types We Service
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Every property type in Flemington presents unique challenges from racing events and
                industrial heritage. Our expert team provides event-aware solutions for this world-famous community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Racecourse Proximity Properties
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Properties near Flemington Racecourse face intense seasonal pressures during
                    major racing events, particularly Melbourne Cup week. Our specialists provide
                    event-specific moisture management for these high-profile occasions.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Melbourne Cup Carnival planning</li>
                    <li>• Event season moisture management</li>
                    <li>• Crowd impact assessment</li>
                    <li>• Racing schedule coordination</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Industrial Heritage Conversions
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Flemington's converted industrial buildings and warehouses require specialist
                    understanding of industrial construction adapted for residential use. We provide
                    heritage-industrial moisture management solutions.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Industrial conversion expertise</li>
                    <li>• Heritage warehouse treatment</li>
                    <li>• Mixed-use building solutions</li>
                    <li>• Industrial material compatibility</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Event-Impacted Residential Areas
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Residential properties affected by racing events and increased activity require
                    understanding of seasonal usage patterns and crowd impacts. We provide
                    event-aware residential moisture management.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Seasonal activity planning</li>
                    <li>• Event crowd impact management</li>
                    <li>• Residential comfort protection</li>
                    <li>• Property value preservation</li>
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
                  Flemington Racing Event Climate Challenges
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Flemington's world-famous racing status</strong> creates intense
                    seasonal moisture management challenges, particularly during Melbourne Cup
                    Carnival when the suburb experiences massive increases in activity, crowds,
                    and temporary infrastructure that affects residential properties.
                  </p>
                  <p>
                    <strong>Melbourne Cup season moisture management</strong> becomes critical
                    as autumn racing events bring increased humidity from crowds, temporary
                    facilities, and event-related activity. Properties near the racecourse
                    require specialized preparation for these intense periods.
                  </p>
                  <p>
                    <strong>Year-round considerations</strong> include managing the effects of
                    regular race meetings, training activities, and the challenges of maintaining
                    residential comfort in an area that balances world-class sporting facilities
                    with everyday family living throughout all seasons.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Racing Season Moisture Patterns
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Winter (Jun-Aug)</div>
                      <div className="text-sm text-gray-700">Training season activity and industrial area moisture</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Spring (Sep-Nov)</div>
                      <div className="text-sm text-gray-700">Melbourne Cup Carnival preparation and crowd buildup</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Summer (Dec-Feb)</div>
                      <div className="text-sm text-gray-700">Post-carnival recovery and summer racing events</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Autumn (Mar-May)</div>
                      <div className="text-sm text-gray-700">Peak Melbourne Cup season and maximum event impact</div>
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
                Why Flemington Residents Choose Mould & Restoration Co.
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Over 5 years of dedicated service to Melbourne's unique suburbs, with 100+ properties
                successfully restored and a 5.0-star rating from satisfied customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Racing Event Expertise</h3>
                  <p className="text-sm text-gray-700">
                    Understanding of Melbourne Cup and racing season impacts on properties.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Industrial Heritage Focus</h3>
                  <p className="text-sm text-gray-700">
                    Specialist knowledge of converted industrial properties and mixed-use buildings.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Event-Aware Scheduling</h3>
                  <p className="text-sm text-gray-700">
                    Service timing coordinated around major racing events and carnival periods.
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
                Flemington Racing Precinct Property Care
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Protect your property with these targeted prevention strategies designed specifically
                for Flemington's unique racing environment and seasonal event pressures.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Racing Season Preparation
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Prepare properties for Melbourne Cup Carnival moisture impacts</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Plan maintenance around major racing event schedules</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Address crowd and activity-related moisture increases</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Monitor seasonal racing activity impact on property</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Industrial-Residential Balance
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Maintain converted industrial property moisture systems</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Address mixed-use building ventilation challenges</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Balance heritage preservation with modern moisture control</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Professional assessment for event-impacted properties</span>
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
              Protect Your Flemington Property Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't let racing season and industrial heritage moisture challenges compromise your property.
              Contact Melbourne's trusted event-aware specialists for immediate assistance.
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
              ✓ Open 7am-7pm Every Day  ✓ Same-Day Professional Service  ✓ Free Quotes  ✓ 5.0 Star Rating
            </div>
          </div>
        </div>
      </div>
    </>
  );
}