import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, MapPin, Phone, ArrowRight, Star, Award, CheckCircle } from 'lucide-react';
import { LocationPageSEO } from '@/components/seo/LocationPageSEO';
import { LocalBusinessSchema, ServiceSchema } from '@/components/seo/StructuredData';

export default function AltonaMouldRemoval() {
  return (
    <>
      <LocationPageSEO
        title="Mould Removal Altona Melbourne | Expert Inspection & Remediation"
        description="Professional mould removal services in Altona 3018. Coastal family area with petrochemical industry nearby. Free inspections. Call 1800 954 117 today."
        suburb="Altona"
        postcode="3018"
        keywords="mould removal altona, mould inspection altona melbourne, coastal family mould treatment, industrial area moisture control 3018"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        address="Altona VIC 3018"
        phone="1800 954 117"
        email="info@mouldrestorationco.com.au"
        abn="47 683 089 652"
        services={['Mould Inspection', 'Mould Removal', 'Moisture Control', 'Property Restoration']}
        serviceArea="Altona Melbourne Victoria"
        description="Professional mould removal services in Altona, specialising in coastal family properties with industrial proximity challenges and expert moisture management."
      />

      <ServiceSchema
        serviceName="Mould Removal Altona"
        description="Comprehensive mould inspection and remediation services for Altona properties, focusing on coastal family homes and industrial area considerations."
        provider="Mould & Restoration Co."
        areaServed="Altona VIC 3018"
        serviceType="Property Restoration"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Mould Removal Altona Melbourne
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Protecting Altona families with professional mould inspection and removal services.
                Expert solutions for coastal properties balancing beach lifestyle with industrial proximity in the 3018 area.
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

        {/* Altona Expertise Section */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Local Altona Area Expertise
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    <strong>Altona (3018)</strong> offers the perfect balance of coastal family living
                    with proximity to industrial areas. Our mould removal specialists understand the
                    unique challenges facing this bayside community where beach lifestyle meets
                    industrial heritage along Port Phillip Bay.
                  </p>
                  <p>
                    From the popular <strong>Altona Beach</strong> and <strong>Cherry Lake Reserve</strong>
                    to the established neighbourhoods near <strong>Pier Street</strong>, we service all
                    residential areas including the family streets around <strong>Louis Joel Arts Centre</strong>
                    and properties near the <strong>Altona Coastal Park</strong>.
                  </p>
                  <p>
                    The suburb's unique position between coastal recreation and industrial zones,
                    including proximity to petrochemical facilities, creates distinctive moisture
                    management requirements that our experienced team addresses with comprehensive
                    environmental awareness and family safety focus.
                  </p>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Postcode: 3018</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">13km from Melbourne CBD</span>
                  </div>
                </div>
              </div>

              <div className="lg:order-first">
                <div className="bg-blue-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Altona Property Specialisation
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Coastal family homes</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Beach proximity properties</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Industrial area residential</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Established family neighbourhoods</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Wetland adjacent properties</span>
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
                Altona Property Types We Service
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Every property type in Altona presents unique challenges from coastal exposure and
                industrial proximity. Our expert team provides balanced solutions for this diverse community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Coastal Family Homes
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Properties near Altona Beach and the foreshore face intense maritime moisture
                    challenges from sea spray and bay winds. Our specialists provide comprehensive
                    coastal protection while ensuring family-safe treatment methods.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Beach proximity moisture management</li>
                    <li>• Salt air impact control</li>
                    <li>• Family-safe coastal treatments</li>
                    <li>• Outdoor living area protection</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Industrial Area Residential
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Homes near petrochemical and industrial zones require specialist understanding
                    of environmental factors combined with residential comfort. We provide
                    comprehensive solutions accounting for unique air quality considerations.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Industrial proximity assessment</li>
                    <li>• Air quality impact management</li>
                    <li>• Environmental factor consideration</li>
                    <li>• Family health prioritisation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Wetland Adjacent Properties
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Properties near Cherry Lake and Truganina Swamp face unique moisture challenges
                    from wetland proximity and seasonal water variations. Our team provides
                    nature-aware moisture management solutions.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Wetland humidity management</li>
                    <li>• Seasonal water table variations</li>
                    <li>• Natural environment preservation</li>
                    <li>• Wildlife-safe treatment methods</li>
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
                  Altona Coastal-Industrial Climate Challenges
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Altona's unique coastal-industrial position</strong> creates complex
                    microclimatic conditions influenced by Port Phillip Bay, industrial zones,
                    and wetland systems. This distinctive combination requires specialised
                    moisture management approaches for family homes.
                  </p>
                  <p>
                    <strong>Winter moisture management</strong> becomes critical with bay storms,
                    industrial area humidity, and wetland proximity creating multiple moisture
                    sources. Properties must balance coastal exposure with industrial environmental
                    factors while maintaining family comfort.
                  </p>
                  <p>
                    <strong>Spring and summer considerations</strong> include managing beach activity
                    moisture, industrial heat island effects, and the challenges of maintaining
                    healthy indoor environments when outdoor air quality varies with wind
                    direction and industrial operations.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Coastal-Industrial Moisture Patterns
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Winter (Jun-Aug)</div>
                      <div className="text-sm text-gray-700">Bay storms and industrial zone humidity</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Spring (Sep-Nov)</div>
                      <div className="text-sm text-gray-700">Wetland moisture and warming beach conditions</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Summer (Dec-Feb)</div>
                      <div className="text-sm text-gray-700">Beach activity moisture and industrial heat effects</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Autumn (Mar-May)</div>
                      <div className="text-sm text-gray-700">Seasonal wetland changes and bay weather patterns</div>
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
                Why Altona Families Choose Mould & Restoration Co.
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Over 5 years of dedicated service to Melbourne's western suburbs, with 100+ properties
                successfully restored and a 5.0-star rating from satisfied customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Dual Environment Expertise</h3>
                  <p className="text-sm text-gray-700">
                    Specialist knowledge of coastal and industrial moisture challenges.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Family-Safe Methods</h3>
                  <p className="text-sm text-gray-700">
                    Child and pet-friendly treatments prioritising family health.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Beach to Industry Coverage</h3>
                  <p className="text-sm text-gray-700">
                    Same-day service from coastal areas to industrial zones.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
                  <p className="text-sm text-gray-700">
                    100+ successful restorations with authentic 5.0-star reviews from families.
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
                Altona Coastal-Industrial Property Care
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Protect your family home with these targeted prevention strategies designed specifically
                for Altona's unique coastal location with industrial proximity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Coastal Living Management
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Monitor sea spray impacts on exterior surfaces</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Manage beach activity moisture in summer months</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Address bay wind moisture infiltration</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Maintain outdoor living spaces for coastal conditions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Environmental Awareness
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Account for industrial zone wind patterns</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Monitor wetland proximity humidity levels</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Ensure adequate ventilation for varying air quality</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Regular professional environmental assessment</span>
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
              Protect Your Altona Family Home Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't let coastal and industrial moisture challenges compromise your family's health.
              Contact Melbourne's trusted environmental-aware specialists for immediate assistance.
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