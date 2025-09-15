import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, MapPin, Phone, ArrowRight, Star, Award, CheckCircle } from 'lucide-react';
import { LocationPageSEO } from '@/components/seo/LocationPageSEO';
import { LocalBusinessSchema, ServiceSchema } from '@/components/seo/StructuredData';

export default function CroydonMouldRemoval() {
  return (
    <>
      <LocationPageSEO
        title="Mould Removal Croydon Melbourne | Expert Inspection & Remediation"
        description="Professional mould removal services in Croydon 3136. Outer eastern family suburb near Dandenong Ranges. Free inspections. Call 1800 954 117 today."
        suburb="Croydon"
        postcode="3136"
        keywords="mould removal croydon, mould inspection croydon melbourne, family suburb mould treatment, mountain proximity moisture control 3136"
        canonical="https://mouldrestoration.com.au/services/mould-removal-croydon"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        address="Croydon VIC 3136"
        phone="1800 954 117"
        email="info@mouldrestorationco.com.au"
        abn="47 683 089 652"
        services={['Mould Inspection', 'Mould Removal', 'Moisture Control', 'Property Restoration']}
        serviceArea="Croydon Melbourne Victoria"
        description="Professional mould removal services in Croydon, specialising in family properties with mountain proximity challenges and expert moisture management solutions."
      />

      <ServiceSchema
        serviceName="Mould Removal Croydon"
        description="Comprehensive mould inspection and remediation services for Croydon properties, focusing on outer eastern family homes with mountain proximity considerations."
        provider="Mould & Restoration Co."
        areaServed="Croydon VIC 3136"
        serviceType="Property Restoration"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Mould Removal Croydon Melbourne
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Protecting Croydon families with professional mould inspection and removal services.
                Expert solutions for outer eastern properties with mountain proximity challenges in the 3136 area.
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

        {/* Croydon Expertise Section */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Local Croydon Area Expertise
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    <strong>Croydon (3136)</strong> represents the perfect balance of family-friendly
                    suburban living with the natural beauty of mountain proximity. Our mould removal
                    specialists understand the unique challenges facing this outer eastern community
                    with its distinctive elevation and climate patterns.
                  </p>
                  <p>
                    From <strong>Croydon Railway Station</strong> to the scenic areas near
                    <strong>Dorset Recreation Reserve</strong>, we service all residential areas
                    including the family neighbourhoods around <strong>Croydon Hills Primary School</strong>
                    and the established streets near <strong>Tarralla Creek Trail</strong>.
                  </p>
                  <p>
                    The suburb's proximity to the <strong>Dandenong Ranges</strong> and elevated
                    position creates specific moisture management requirements that our experienced
                    team addresses with mountain-aware expertise and family-focused care.
                  </p>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Postcode: 3136</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">27km from Melbourne CBD</span>
                  </div>
                </div>
              </div>

              <div className="lg:order-first">
                <div className="bg-blue-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Croydon Property Specialisation
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Family homes with mountain views</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Properties with elevation challenges</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Outer eastern residential areas</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Creek proximity properties</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Transport corridor family homes</span>
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
                Croydon Property Types We Service
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Every property type in Croydon presents unique challenges from mountain proximity and
                elevation. Our expert team provides specialised solutions for this scenic family community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Mountain Proximity Family Homes
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Properties near the Dandenong Ranges foothills face unique moisture challenges
                    from elevated humidity, mountain air patterns, and natural water runoff. Our
                    specialists provide mountain-aware moisture management for family comfort.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Mountain humidity pattern management</li>
                    <li>• Natural drainage solutions</li>
                    <li>• Elevated position moisture control</li>
                    <li>• Family-safe treatment methods</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Creek System Properties
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Homes near Tarralla Creek and other waterways require specialist understanding
                    of water table influences and seasonal moisture variations. We provide
                    comprehensive creek-adjacent property protection solutions.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Creek system moisture assessment</li>
                    <li>• Water table impact management</li>
                    <li>• Seasonal variation planning</li>
                    <li>• Natural environment preservation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Established Family Neighbourhoods
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Croydon's mature residential areas feature established family homes with
                    developed gardens and tree coverage. We provide solutions that respect
                    neighbourhood character while ensuring healthy family living environments.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Established garden moisture management</li>
                    <li>• Mature tree canopy considerations</li>
                    <li>• Family neighbourhood respect</li>
                    <li>• Property value protection</li>
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
                  Croydon Mountain Climate Challenges
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Croydon's mountain proximity location</strong> creates distinctive
                    climate patterns influenced by the Dandenong Ranges elevation and natural
                    water systems. The suburb's position results in unique moisture challenges
                    that require specialised understanding and treatment approaches.
                  </p>
                  <p>
                    <strong>Winter moisture management</strong> becomes complex with mountain air
                    patterns bringing increased humidity and cooler temperatures. Properties at
                    different elevations throughout Croydon experience varying moisture levels
                    requiring tailored solutions for each family home.
                  </p>
                  <p>
                    <strong>Spring and summer considerations</strong> include managing moisture from
                    mountain runoff, established native vegetation, and the area's popular
                    outdoor recreation activities. Our mountain-aware approach ensures families
                    enjoy Croydon's natural setting without moisture concerns.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Mountain Proximity Moisture Patterns
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Winter (Jun-Aug)</div>
                      <div className="text-sm text-gray-700">Mountain air humidity and cooler elevation effects</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Spring (Sep-Nov)</div>
                      <div className="text-sm text-gray-700">Mountain runoff and native vegetation moisture</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Summer (Dec-Feb)</div>
                      <div className="text-sm text-gray-700">Elevation cooling and outdoor activity moisture</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Autumn (Mar-May)</div>
                      <div className="text-sm text-gray-700">Leaf fall moisture and mountain weather changes</div>
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
                Why Croydon Families Choose Mould & Restoration Co.
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Mountain Expertise</h3>
                  <p className="text-sm text-gray-700">
                    Specialist knowledge of moisture challenges near the Dandenong Ranges foothills.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Family-Centered Service</h3>
                  <p className="text-sm text-gray-700">
                    Safe, effective methods prioritising children's health in this family community.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Prompt Service</h3>
                  <p className="text-sm text-gray-700">
                    same-day professional service despite outer eastern location and terrain.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
                  <p className="text-sm text-gray-700">
                    100+ successful restorations with authentic 5.0-star reviews from local families.
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
                Croydon Mountain Area Prevention Tips
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Protect your family home with these targeted prevention strategies designed specifically
                for Croydon's mountain proximity environment and elevation challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Mountain Climate Management
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Monitor mountain humidity levels in family living areas</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Address elevation-related condensation patterns</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Manage natural drainage from mountain runoff</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Maintain ventilation for mountain air circulation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Natural Environment Integration
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Work with native vegetation moisture patterns</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Plan for seasonal mountain weather variations</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Protect against leaf litter moisture accumulation</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Regular professional assessment for elevation factors</span>
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
              Protect Your Croydon Mountain Home Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't let mountain moisture challenges compromise your family's health and comfort.
              Contact Melbourne's trusted elevation-aware specialists for immediate assistance.
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