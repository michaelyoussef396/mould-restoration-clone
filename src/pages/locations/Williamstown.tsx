import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, MapPin, Phone, ArrowRight, Star, Award, CheckCircle } from 'lucide-react';
import { LocationPageSEO } from '@/components/seo/SEOHead';
import { LocalBusinessSchema, ServiceSchema } from '@/components/seo/SchemaMarkup';

export default function WilliamstownMouldRemoval() {
  return (
    <>
      <LocationPageSEO
        title="Mould Removal Williamstown Melbourne | Expert Inspection & Remediation"
        description="Professional mould removal services in Williamstown 3016. Coastal heritage suburb with naval history and ferry access. Free inspections. Call 1800 954 117 today."
        suburb="Williamstown"
        postcode="3016"
        keywords="mould removal williamstown, mould inspection williamstown melbourne, coastal property mould treatment, heritage maritime moisture control 3016"
        canonical="https://mouldrestoration.com.au/services/mould-removal-williamstown"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        address="Williamstown VIC 3016"
        phone="1800 954 117"
        email="info@mouldrestorationco.com.au"
        abn="47 683 089 652"
        services={['Mould Inspection', 'Mould Removal', 'Moisture Control', 'Property Restoration']}
        serviceArea="Williamstown Melbourne Victoria"
        description="Professional mould removal services in Williamstown, specialising in coastal heritage properties with maritime challenges and expert moisture management."
      />

      <ServiceSchema
        serviceName="Mould Removal Williamstown"
        description="Comprehensive mould inspection and remediation services for Williamstown properties, focusing on coastal heritage homes and maritime environment challenges."
        provider="Mould & Restoration Co."
        areaServed="Williamstown VIC 3016"
        serviceType="Property Restoration"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Mould Removal Williamstown Melbourne
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Protecting Williamstown's coastal heritage properties with professional mould inspection and removal services.
                Expert solutions for maritime properties and historic homes throughout the 3016 peninsula.
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

        {/* Williamstown Expertise Section */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-charcoal mb-6">
                  Local Williamstown Area Expertise
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    <strong>Williamstown (3016)</strong> embodies Melbourne's rich maritime heritage,
                    combining historic naval significance with stunning coastal living. Our mould
                    removal specialists understand the unique challenges facing this prestigious
                    bayside peninsula with its heritage architecture and waterfront exposure.
                  </p>
                  <p>
                    From the historic <strong>Nelson Place</strong> precinct to the modern marina
                    developments at <strong>Gem Pier</strong>, we service all residential areas including
                    the heritage cottages near <strong>Commonwealth Reserve</strong> and the waterfront
                    properties along <strong>The Strand</strong>.
                  </p>
                  <p>
                    The suburb's coastal location, combined with its naval heritage buildings and
                    proximity to <strong>Port Phillip Bay</strong>, creates distinctive moisture
                    management requirements that our experienced team addresses with maritime-specific
                    expertise and heritage sensitivity.
                  </p>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">Postcode: 3016</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">9km from Melbourne CBD</span>
                  </div>
                </div>
              </div>

              <div className="lg:order-first">
                <div className="bg-columbia p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-charcoal mb-6">
                    Williamstown Property Specialisation
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Coastal heritage properties</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Maritime and naval buildings</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Waterfront and bay view homes</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Historic Victorian cottages</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Marina and ferry precinct properties</span>
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
                Williamstown Property Types We Service
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Every property type in Williamstown faces unique coastal and heritage challenges.
                Our expert team provides specialised solutions for this prestigious maritime community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">
                    Heritage Maritime Properties
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Williamstown's naval heritage buildings and historic cottages require specialist
                    knowledge of 19th-century construction combined with understanding of maritime
                    moisture challenges from constant bay exposure.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li>• Naval heritage building preservation</li>
                    <li>• Victorian-era construction expertise</li>
                    <li>• Salt air corrosion management</li>
                    <li>• Heritage-compliant treatments</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">
                    Waterfront & Bay View Homes
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Properties along The Strand and waterfront areas face intense maritime moisture
                    challenges from sea spray, bay winds, and tidal influences. Our specialists
                    provide comprehensive coastal protection solutions.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li>• Sea spray moisture management</li>
                    <li>• Bay wind infiltration control</li>
                    <li>• Waterfront foundation protection</li>
                    <li>• Coastal climate adaptation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">
                    Marina & Modern Developments
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Contemporary marina apartments and modern developments near the ferry terminal
                    require advanced moisture management approaches accounting for marine environment
                    exposure and modern building materials.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li>• Marina environment specialisation</li>
                    <li>• Modern apartment moisture control</li>
                    <li>• Balcony and terrace treatments</li>
                    <li>• Underground parking ventilation</li>
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
                  Williamstown Coastal Climate Challenges
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Williamstown's bayside peninsula location</strong> creates intense
                    maritime moisture challenges from Port Phillip Bay exposure. The combination
                    of sea spray, bay winds, and tidal influences creates year-round moisture
                    management requirements unique to coastal living.
                  </p>
                  <p>
                    <strong>Winter moisture management</strong> becomes critical with increased
                    storm activity, driving rain from bay winds, and the challenges of heating
                    heritage properties exposed to coastal conditions. Salt air corrosion
                    compounds traditional moisture problems.
                  </p>
                  <p>
                    <strong>Spring and summer considerations</strong> include managing the effects
                    of sea breezes, high coastal humidity, and the challenges of maintaining
                    comfort in heritage properties during peak tourist and ferry activity
                    periods around the waterfront precincts.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-charcoal mb-6">
                  Maritime Moisture Patterns
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-charcoal">Winter (Jun-Aug)</div>
                      <div className="text-sm text-gray-700">Bay storms and driving rain from westerly winds</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-charcoal">Spring (Sep-Nov)</div>
                      <div className="text-sm text-gray-700">Increased humidity with warming bay waters</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-charcoal">Summer (Dec-Feb)</div>
                      <div className="text-sm text-gray-700">Sea breeze moisture and tourist season activity</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-charcoal">Autumn (Mar-May)</div>
                      <div className="text-sm text-gray-700">Tidal variations and autumn storm preparations</div>
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
                Why Williamstown Residents Choose Mould & Restoration Co.
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Over 5 years of dedicated service to Melbourne's bayside suburbs, with 100+ properties
                successfully restored and a 5.0-star rating from satisfied customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Coastal Expertise</h3>
                  <p className="text-sm text-gray-700">
                    Specialist knowledge of maritime moisture challenges and salt air impacts.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Heritage Sensitivity</h3>
                  <p className="text-sm text-gray-700">
                    Preserving Williamstown's naval heritage while ensuring healthy homes.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Rapid Response</h3>
                  <p className="text-sm text-gray-700">
                    Same-day professional service throughout the peninsula and ferry precincts.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Proven Results</h3>
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
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Williamstown Coastal Property Maintenance
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Protect your heritage coastal property with these targeted prevention strategies
                designed specifically for Williamstown's maritime environment and bay exposure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">
                    Maritime Moisture Management
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span>Monitor salt air impacts on building materials</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span>Address sea spray accumulation on windows and walls</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span>Manage bay wind infiltration through heritage features</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span>Regular inspection of waterfront-facing structures</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">
                    Heritage Building Care
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span>Preserve original ventilation features while improving efficiency</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span>Maintain heritage gutters and downpipes for coastal conditions</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span>Address subfloor moisture in Victorian-era foundations</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span>Professional assessment of naval heritage structures</span>
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
              Protect Your Williamstown Coastal Heritage Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't let maritime moisture compromise your heritage property investment.
              Contact Melbourne's trusted coastal specialists for immediate assistance.
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