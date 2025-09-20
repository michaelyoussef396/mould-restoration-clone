import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, MapPin, Phone, ArrowRight, Star, Award, CheckCircle } from 'lucide-react';
import { LocationPageSEO } from '@/components/seo/SEOHead';
import { LocalBusinessSchema, ServiceSchema } from '@/components/seo/SchemaMarkup';

export default function MooneePondsMouldRemoval() {
  return (
    <>
      <LocationPageSEO
        title="Mould Removal Moonee Ponds Melbourne | Expert Inspection & Remediation"
        description="Professional mould removal services in Moonee Ponds 3039. Trendy suburb for young families near Queens Park. Free inspections. Call 1800 954 117 today."
        suburb="Moonee Ponds"
        postcode="3039"
        keywords="mould removal moonee ponds, mould inspection moonee ponds melbourne, trendy suburb mould treatment, young families moisture control 3039"
        canonical="https://mouldrestoration.com.au/services/mould-removal-moonee-ponds"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        address="Moonee Ponds VIC 3039"
        phone="1800 954 117"
        email="info@mouldrestorationco.com.au"
        abn="47 683 089 652"
        services={['Mould Inspection', 'Mould Removal', 'Moisture Control', 'Property Restoration']}
        serviceArea="Moonee Ponds Melbourne Victoria"
        description="Professional mould removal services in Moonee Ponds, specialising in trendy family properties and period homes with expert moisture management."
      />

      <ServiceSchema
        serviceName="Mould Removal Moonee Ponds"
        description="Comprehensive mould inspection and remediation services for Moonee Ponds properties, focusing on young family homes and trendy renovated properties."
        provider="Mould & Restoration Co."
        areaServed="Moonee Ponds VIC 3039"
        serviceType="Property Restoration"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Mould Removal Moonee Ponds Melbourne
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Protecting Moonee Ponds' trendy family community with professional mould inspection and removal services.
                Expert solutions for young families and renovated properties near Queens Park in the 3039 area.
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

        {/* Moonee Ponds Expertise Section */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-charcoal mb-6">
                  Local Moonee Ponds Area Expertise
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    <strong>Moonee Ponds (3039)</strong> has emerged as one of Melbourne's most
                    sought-after suburbs for young families, combining trendy café culture with
                    excellent parklands. Our mould removal specialists understand the unique challenges
                    facing this vibrant community with its mix of renovated period homes and modern developments.
                  </p>
                  <p>
                    From the popular <strong>Puckle Street</strong> shopping and dining strip to the
                    expansive <strong>Queens Park</strong> recreational area, we service all residential
                    areas including the trendy neighbourhoods around <strong>Moonee Ponds Creek Trail</strong>
                    and the family-friendly streets near <strong>Moonee Valley Racecourse</strong>.
                  </p>
                  <p>
                    The suburb's appeal to young families, combined with ongoing renovation projects
                    and proximity to parklands and waterways, creates distinctive moisture management
                    requirements that our experienced team addresses with family-focused expertise
                    and renovation-aware solutions.
                  </p>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">Postcode: 3039</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">7km from Melbourne CBD</span>
                  </div>
                </div>
              </div>

              <div className="lg:order-first">
                <div className="bg-columbia p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-charcoal mb-6">
                    Moonee Ponds Property Specialisation
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Young family renovated homes</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Trendy period property updates</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Parkland adjacent properties</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Creek proximity family homes</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Modern townhouse developments</span>
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
                Moonee Ponds Property Types We Service
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Every property type in Moonee Ponds presents unique challenges from trendy renovations and
                family living. Our expert team provides modern solutions for this dynamic community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">
                    Young Family Renovated Homes
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Moonee Ponds' renovated period properties require understanding of modern updates
                    to heritage structures. We provide family-safe moisture management that works
                    with contemporary living while respecting original architectural elements.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li>• Renovation moisture assessment</li>
                    <li>• Family-safe treatment methods</li>
                    <li>• Modern-heritage integration</li>
                    <li>• Child and pet-friendly solutions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">
                    Parkland Adjacent Properties
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Homes near Queens Park and recreational areas benefit from green spaces but
                    face unique moisture challenges from parkland irrigation and increased humidity.
                    Our specialists provide nature-aware moisture management solutions.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li>• Parkland humidity management</li>
                    <li>• Irrigation overspray considerations</li>
                    <li>• Green space moisture balance</li>
                    <li>• Outdoor activity area protection</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">
                    Creek Proximity Family Properties
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Properties near Moonee Ponds Creek and waterway systems require specialist
                    understanding of water table influences and seasonal moisture variations
                    while maintaining family comfort and property value.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li>• Creek system moisture assessment</li>
                    <li>• Water table impact management</li>
                    <li>• Seasonal variation planning</li>
                    <li>• Family recreation area protection</li>
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
                  Moonee Ponds Family-Friendly Climate Challenges
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Moonee Ponds' trendy family environment</strong> creates unique
                    microclimatic conditions influenced by Queens Park, Moonee Ponds Creek,
                    and intensive family living patterns. The combination of parkland humidity
                    and active family households requires specialised moisture management.
                  </p>
                  <p>
                    <strong>Winter moisture management</strong> becomes important in renovated
                    homes where modern heating systems work with period architecture, while
                    family activities create additional humidity from cooking, bathing, and
                    indoor drying during cooler months.
                  </p>
                  <p>
                    <strong>Spring and summer considerations</strong> include managing moisture
                    from outdoor entertaining areas, children's play equipment, and the
                    challenges of maintaining comfort in family homes with increased activity
                    during warmer months and school holiday periods.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-charcoal mb-6">
                  Family Living Moisture Patterns
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-charcoal">Winter (Jun-Aug)</div>
                      <div className="text-sm text-gray-700">Family heating patterns and indoor activity moisture</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-charcoal">Spring (Sep-Nov)</div>
                      <div className="text-sm text-gray-700">Parkland humidity and renovation season impacts</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-charcoal">Summer (Dec-Feb)</div>
                      <div className="text-sm text-gray-700">Family activity moisture and outdoor entertaining</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-600 rounded-full w-3 h-3 mt-2"></div>
                    <div>
                      <div className="font-semibold text-charcoal">Autumn (Mar-May)</div>
                      <div className="text-sm text-gray-700">Creek system changes and school holiday patterns</div>
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
                Why Moonee Ponds Families Choose Mould & Restoration Co.
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Over 5 years of dedicated service to Melbourne's family suburbs, with 100+ properties
                successfully restored and a 5.0-star rating from satisfied customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Family-Safe Expertise</h3>
                  <p className="text-sm text-gray-700">
                    Child and pet-friendly treatments prioritising young family health.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Renovation Awareness</h3>
                  <p className="text-sm text-gray-700">
                    Understanding of modern updates to period properties and ongoing projects.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Family Schedule Friendly</h3>
                  <p className="text-sm text-gray-700">
                    Flexible service times working around family routines and school schedules.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Proven Results</h3>
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
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Moonee Ponds Family Home Moisture Prevention
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Protect your family investment with these targeted prevention strategies designed
                specifically for Moonee Ponds' trendy family environment and active lifestyle.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">
                    Active Family Living Management
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span>Monitor moisture from children's activities and play areas</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span>Manage bathroom moisture from busy family schedules</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span>Address kitchen moisture from family cooking and dining</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span>Maintain outdoor entertaining areas for family gatherings</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">
                    Trendy Suburb Considerations
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span>Plan renovation projects with moisture management in mind</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span>Address parkland proximity humidity and irrigation impacts</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span>Monitor creek system proximity moisture levels</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <span>Professional family home assessment and maintenance scheduling</span>
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
              Protect Your Moonee Ponds Family Home Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't let moisture compromise your family's health and property investment.
              Contact Melbourne's trusted family-focused specialists for immediate assistance.
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