import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, MapPin, Phone, ArrowRight, Star, Award, CheckCircle } from 'lucide-react';
import { LocationPageSEO } from '@/components/seo/LocationPageSEO';
import { LocalBusinessSchema, ServiceSchema } from '@/components/seo/StructuredData';

export default function IvanhoeMouldRemoval() {
  return (
    <>
      <LocationPageSEO
        title="Mould Removal Ivanhoe Melbourne | Expert Inspection & Remediation"
        description="Professional mould removal services in Ivanhoe 3079. Riverside leafy suburb with established homes & heritage properties. Free inspections. Call 1800 954 117 today."
        suburb="Ivanhoe"
        postcode="3079"
        keywords="mould removal ivanhoe, mould inspection ivanhoe melbourne, leafy suburb mould treatment, heritage home moisture control 3079"
        canonical="https://mouldrestoration.com.au/services/mould-removal-ivanhoe"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        address="Ivanhoe VIC 3079"
        phone="1800 954 117"
        email="info@mouldrestorationco.com.au"
        abn="47 683 089 652"
        services={['Mould Inspection', 'Mould Removal', 'Moisture Control', 'Property Restoration']}
        serviceArea="Ivanhoe Melbourne Victoria"
        description="Professional mould removal services in Ivanhoe, specialising in heritage homes, leafy suburban properties and established northern suburbs moisture management challenges."
      />

      <ServiceSchema
        serviceName="Mould Removal Ivanhoe"
        description="Comprehensive mould inspection and remediation services for Ivanhoe properties, focusing on heritage homes and established leafy suburban buildings."
        provider="Mould & Restoration Co."
        areaServed="Ivanhoe VIC 3079"
        serviceType="Property Restoration"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Mould Removal Ivanhoe Melbourne
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Protecting Ivanhoe families with professional mould inspection and removal services.
                Expert solutions for heritage homes, leafy suburban properties and established northern suburbs in the 3079 area.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 1800 954 117
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                  Free Inspection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                  <Clock className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="font-medium">Same-Day Professional Service Ivanhoe</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="font-medium">5.0 Stars • 100+ Properties Restored</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                  <Award className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="font-medium">IICRC Certified Technicians</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Local Area Expertise */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Ivanhoe Mould Removal Experts
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Ivanhoe's prestigious leafy northern suburbs landscape presents unique mould challenges that Mould & Restoration Co. understands intimately. From heritage homes along Lower Heidelberg Road to contemporary townhouses near Ivanhoe East, our IICRC certified technicians provide tailored mould removal solutions for every property type in the 3079 postcode area.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Located just 10km northeast of Melbourne's CBD, Ivanhoe's established family community and tree-lined streets house quality properties throughout the suburb. Whether you're dealing with moisture issues in a period home near Ivanhoe Park, humidity problems in properties close to the Yarra River, or ventilation challenges in heritage buildings along The Boulevard, our local knowledge ensures effective mould remediation.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  The suburb's mature tree coverage and proximity to the Yarra River creates varied moisture conditions, particularly affecting older homes with established gardens and properties in lower-lying areas. Our Ivanhoe mould removal specialists understand these local environmental factors and their seasonal impact on property moisture levels.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Local Coverage</h4>
                      <p className="text-gray-600 text-sm">Ivanhoe 3079, Ivanhoe East 3079</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Response Time</h4>
                      <p className="text-gray-600 text-sm">Same-day professional service to Ivanhoe</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:pl-8">
                <Card className="shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Mould & Restoration Co. in Ivanhoe?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Extensive Ivanhoe property experience - heritage homes to leafy suburban properties</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">IICRC certified technicians with 5+ years local Melbourne experience</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Same-day professional service to Ivanhoe and surrounding suburbs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Comprehensive insurance documentation and preferred provider status</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">100% satisfaction guarantee with 12-month workmanship warranty</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Mould Removal Process */}
        <div className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Ivanhoe Mould Removal Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional IICRC-certified mould remediation tailored to Ivanhoe's unique leafy suburban and heritage property challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Initial Assessment</h3>
                  <p className="text-gray-600 text-sm">
                    Comprehensive Ivanhoe property inspection using thermal imaging and moisture detection to identify all affected areas and moisture sources.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Containment Setup</h3>
                  <p className="text-gray-600 text-sm">
                    Professional containment barriers and negative air pressure systems to prevent mould spores spreading throughout your Ivanhoe property.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Safe Removal</h3>
                  <p className="text-gray-600 text-sm">
                    HEPA-filtered removal and disposal of contaminated materials, followed by antimicrobial treatment of all affected Ivanhoe property surfaces.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Prevention & Monitoring</h3>
                  <p className="text-gray-600 text-sm">
                    Post-treatment air quality testing, moisture source elimination, and ongoing monitoring to prevent mould return in your Ivanhoe home.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Property Types We Service */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ivanhoe Property Types We Service
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Expert mould removal for Ivanhoe's prestigious architectural landscape, from heritage Edwardian homes to contemporary family residences and leafy suburban properties.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Residential Properties</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Heritage Edwardian & Federation Homes</h4>
                      <p className="text-gray-600 text-sm">Period properties along Lower Heidelberg Road and The Boulevard often face unique ventilation challenges and heritage-appropriate mould treatment requirements.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Established Family Homes</h4>
                      <p className="text-gray-600 text-sm">Quality family residences throughout Ivanhoe's leafy streets may experience moisture issues related to mature gardens and established drainage systems.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Contemporary Townhouses</h4>
                      <p className="text-gray-600 text-sm">Modern developments near transport hubs may experience condensation issues due to energy-efficient construction and urban lifestyle factors.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Investment Properties</h4>
                      <p className="text-gray-600 text-sm">Rental properties throughout Ivanhoe require rapid mould response to maintain tenant safety and property value in this desirable suburb.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Commercial Properties</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Local Retail & Cafes</h4>
                      <p className="text-gray-600 text-sm">Local businesses along Upper Heidelberg Road need rapid mould response to maintain customer safety and compliance with health standards.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Medical & Professional Services</h4>
                      <p className="text-gray-600 text-sm">Healthcare facilities and professional offices require immediate mould remediation to maintain sterile environments and professional standards.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Educational Facilities</h4>
                      <p className="text-gray-600 text-sm">Local schools and childcare centres need immediate mould response to ensure safe learning environments for Ivanhoe's family community.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Community Centres</h4>
                      <p className="text-gray-600 text-sm">Local community facilities and sporting clubs require immediate mould remediation to maintain safe environments for Ivanhoe residents.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Local Prevention Tips */}
        <div className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ivanhoe Mould Prevention Tips
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Local expert advice for preventing mould in Ivanhoe's leafy suburban environment and established property conditions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Leafy Suburb Climate</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Manage moisture from mature tree coverage and fallen leaves</li>
                    <li>• Ensure adequate sunlight reaches lower-level areas</li>
                    <li>• Address increased humidity from established gardens</li>
                    <li>• Monitor drainage from elevated landscape features</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Heritage Property Care</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Regular maintenance of period home ventilation systems</li>
                    <li>• Heritage-appropriate moisture control solutions</li>
                    <li>• Check original timber and masonry for moisture retention</li>
                    <li>• Preserve character features while improving airflow</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Seasonal Maintenance</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Clear gutters of leaves from mature street trees</li>
                    <li>• Maintain downpipes and established drainage systems</li>
                    <li>• Monitor basement and lower-level moisture levels</li>
                    <li>• Ensure adequate heating during Melbourne's cool winters</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 px-4 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Professional Mould Removal in Ivanhoe?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Don't let mould compromise your Ivanhoe property. Our IICRC certified technicians provide Professional service line response with 2-hour arrival time.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                <Phone className="mr-2 h-5 w-5" />
                Call 1800 954 117 Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                Get Free Inspection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="text-blue-100 mt-6 text-sm">
              ✓ 100% Satisfaction Guarantee ✓ Insurance Work Welcome ✓ 5.0 Star Rating
            </p>
          </div>
        </div>
      </div>
    </>
  );
}