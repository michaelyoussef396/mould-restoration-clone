import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, MapPin, Phone, ArrowRight, Star, Award, CheckCircle } from 'lucide-react';
import { LocationPageSEO } from '@/components/seo/LocationPageSEO';
import { LocalBusinessSchema, ServiceSchema } from '@/components/seo/StructuredData';

export default function NorthcoteMouldRemoval() {
  return (
    <>
      <LocationPageSEO
        title="Mould Removal Northcote Melbourne | Expert Inspection & Remediation"
        description="Professional mould removal services in Northcote 3070. Music venue culture with heritage homes & modern apartments. Free inspections. Call 1800 954 117 today."
        suburb="Northcote"
        postcode="3070"
        keywords="mould removal northcote, mould inspection northcote melbourne, music venue mould treatment, heritage terrace moisture control 3070"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        address="Northcote VIC 3070"
        phone="1800 954 117"
        email="info@mouldrestorationco.com.au"
        abn="47 683 089 652"
        services={['Mould Inspection', 'Mould Removal', 'Moisture Control', 'Property Restoration']}
        serviceArea="Northcote Melbourne Victoria"
        description="Professional mould removal services in Northcote, specialising in heritage terraces, music venues and inner northern property moisture management challenges."
      />

      <ServiceSchema
        serviceName="Mould Removal Northcote"
        description="Comprehensive mould inspection and remediation services for Northcote properties, focusing on heritage homes and entertainment venues."
        provider="Mould & Restoration Co."
        areaServed="Northcote VIC 3070"
        serviceType="Property Restoration"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Mould Removal Northcote Melbourne
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Protecting Northcote families with professional mould inspection and removal services.
                Expert solutions for heritage terraces, music venues and vibrant inner northern properties in the 3070 area.
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
                  <span className="font-medium">2-Hour Professional Service - Same-day Available 7am-7pm Northcote</span>
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
                  Northcote Mould Removal Experts
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Northcote's vibrant music and arts scene presents unique mould challenges that Mould & Restoration Co. understands intimately. From heritage Victorian terraces along High Street to contemporary developments near the Corner Hotel, our IICRC certified technicians provide tailored mould removal solutions for every property type in the 3070 postcode area.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Located just 6km northeast of Melbourne's CBD, Northcote's bohemian culture and young professional community call diverse properties home. Whether you're dealing with moisture issues in a period cottage near All Nations Park, condensation problems in converted venues around Station Street, or ventilation challenges in modern apartments near Croxton Station, our local knowledge ensures effective mould remediation.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  The suburb's position along the Yarra River flats and varied elevation creates different moisture conditions across the area, particularly in lower sections near the Merri Creek confluence and around entertainment venues. Our Northcote mould removal specialists understand these local environmental factors and their impact on property moisture levels.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Local Coverage</h4>
                      <p className="text-gray-600 text-sm">Northcote 3070, Clifton Hill 3068</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Response Time</h4>
                      <p className="text-gray-600 text-sm">Same-day professional service to Northcote</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:pl-8">
                <Card className="shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Mould & Restoration Co. in Northcote?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Extensive Northcote property experience - heritage terraces to entertainment venues</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">IICRC certified technicians with 5+ years local Melbourne experience</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Same-day professional service to Northcote and surrounding suburbs</span>
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
                Our Northcote Mould Removal Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional IICRC-certified mould remediation tailored to Northcote's unique heritage and entertainment venue property challenges.
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
                    Comprehensive Northcote property inspection using thermal imaging and moisture detection to identify all affected areas and moisture sources.
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
                    Professional containment barriers and negative air pressure systems to prevent mould spores spreading throughout your Northcote property.
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
                    HEPA-filtered removal and disposal of contaminated materials, followed by antimicrobial treatment of all affected Northcote property surfaces.
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
                    Post-treatment air quality testing, moisture source elimination, and ongoing monitoring to prevent mould return in your Northcote home.
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
                Northcote Property Types We Service
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Expert mould removal for Northcote's diverse architectural landscape, from heritage Victorian terraces to iconic music venues and contemporary apartments.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Residential Properties</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Heritage Victorian Terraces</h4>
                      <p className="text-gray-600 text-sm">Period properties along High Street and surrounding areas often face ventilation challenges and heritage-appropriate mould treatment requirements.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Weatherboard Cottages</h4>
                      <p className="text-gray-600 text-sm">Classic Melbourne homes throughout Northcote may experience moisture penetration and require careful restoration to maintain character features.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Modern Apartments & Units</h4>
                      <p className="text-gray-600 text-sm">Contemporary developments near transport hubs may experience condensation issues due to energy-efficient construction and lifestyle factors.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Artist Housing & Shared Spaces</h4>
                      <p className="text-gray-600 text-sm">Creative living spaces and shared accommodations throughout Northcote require specialised mould management for diverse occupancy patterns.</p>
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
                      <h4 className="font-semibold text-gray-900">Music Venues & Entertainment Spaces</h4>
                      <p className="text-gray-600 text-sm">Iconic venues like The Corner Hotel and smaller music spaces require immediate mould response to maintain performance standards and patron safety.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Restaurants & Bars</h4>
                      <p className="text-gray-600 text-sm">Food service and hospitality establishments along Station Street need rapid mould response for health compliance and customer safety.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Creative Studios & Galleries</h4>
                      <p className="text-gray-600 text-sm">Arts spaces and creative studios require immediate mould response to protect valuable works and maintain climate-controlled environments.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Retail & Professional Services</h4>
                      <p className="text-gray-600 text-sm">Commercial premises and professional offices need rapid mould remediation to maintain healthy work environments and business continuity.</p>
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
                Northcote Mould Prevention Tips
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Local expert advice for preventing mould in Northcote's vibrant entertainment district and heritage property conditions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Climate Considerations</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Monitor humidity during Melbourne's humid summer months</li>
                    <li>• Ensure adequate heating during winter to prevent condensation</li>
                    <li>• Address Yarra River proximity moisture factors</li>
                    <li>• Consider Northcote's entertainment district climate variations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Property Maintenance</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Regular gutter cleaning to prevent water damage</li>
                    <li>• Maintain downpipes and stormwater drainage</li>
                    <li>• Check heritage home ventilation systems annually</li>
                    <li>• Inspect entertainment venue moisture management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Indoor Environment</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Use exhaust fans in bathrooms and laundries</li>
                    <li>• Maintain consistent indoor temperatures</li>
                    <li>• Address condensation on windows promptly</li>
                    <li>• Ensure adequate ventilation in shared spaces</li>
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
              Need Emergency Mould Removal in Northcote?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Don't let mould compromise your Northcote property. Our IICRC certified technicians provide Professional service hotline (7am-7pm) response with 2-hour arrival time.
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