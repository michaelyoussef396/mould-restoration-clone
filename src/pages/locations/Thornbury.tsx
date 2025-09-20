import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, MapPin, Phone, ArrowRight, Star, Award, CheckCircle } from 'lucide-react';
import { LocationPageSEO } from '@/components/seo/SEOHead';
import { LocalBusinessSchema, ServiceSchema } from '@/components/seo/SchemaMarkup';

export default function ThornburyMouldRemoval() {
  return (
    <>
      <LocationPageSEO
        title="Mould Removal Thornbury Melbourne | Expert Inspection & Remediation"
        description="Professional mould removal services in Thornbury 3071. Trendy inner northern suburb with heritage homes & modern cafes. Free inspections. Call 1800 954 117 today."
        suburb="Thornbury"
        postcode="3071"
        keywords="mould removal thornbury, mould inspection thornbury melbourne, heritage home mould treatment, hipster suburb moisture control 3071"
        canonical="https://mouldrestoration.com.au/services/mould-removal-thornbury"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        address="Thornbury VIC 3071"
        phone="1800 954 117"
        email="info@mouldrestorationco.com.au"
        abn="47 683 089 652"
        services={['Mould Inspection', 'Mould Removal', 'Moisture Control', 'Property Restoration']}
        serviceArea="Thornbury Melbourne Victoria"
        description="Professional mould removal services in Thornbury, specialising in heritage homes, converted warehouses and trendy inner northern property moisture management challenges."
      />

      <ServiceSchema
        serviceName="Mould Removal Thornbury"
        description="Comprehensive mould inspection and remediation services for Thornbury properties, focusing on heritage homes and contemporary conversions."
        provider="Mould & Restoration Co."
        areaServed="Thornbury VIC 3071"
        serviceType="Property Restoration"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Mould Removal Thornbury Melbourne
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Protecting Thornbury families with professional mould inspection and removal services.
                Expert solutions for heritage homes, converted warehouses and trendy inner northern properties in the 3071 area.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 1800 954 117
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-columbia px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                  Free Inspection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                  <Clock className="h-4 w-4 text-primary mr-2" />
                  <span className="font-medium">Same-Day Professional Service Thornbury</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="font-medium">5.0 Stars • 100+ Properties Restored</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                  <Award className="h-4 w-4 text-primary mr-2" />
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
                <h2 className="text-3xl font-bold text-charcoal mb-6">
                  Thornbury Mould Removal Experts
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Thornbury's trendy inner northern landscape presents unique mould challenges that Mould & Restoration Co. understands intimately. From heritage Edwardian homes along High Street to converted warehouses near the Darebin Trail, our IICRC certified technicians provide tailored mould removal solutions for every property type in the 3071 postcode area.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Located just 7km north of Melbourne's CBD, Thornbury's vibrant foodie scene and young professional community call diverse properties home. Whether you're dealing with moisture issues in a period cottage near Thornbury Park, condensation problems in industrial conversions around the craft brewery district, or ventilation challenges in modern apartments near Croxton Station, our local knowledge ensures effective mould remediation.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  The suburb's proximity to the Darebin Creek and mixed industrial-residential zoning creates varied moisture conditions, particularly in converted spaces and lower-lying areas near the creek system. Our Thornbury mould removal specialists understand these local environmental factors and their impact on property moisture levels.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Local Coverage</h4>
                      <p className="text-professional text-sm">Thornbury 3071, Alphington 3078</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Response Time</h4>
                      <p className="text-professional text-sm">Same-day professional service to Thornbury</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:pl-8">
                <Card className="shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-charcoal mb-4">Why Choose Mould & Restoration Co. in Thornbury?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Extensive Thornbury property experience - heritage homes to warehouse conversions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">IICRC certified technicians with 5+ years local Melbourne experience</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Same-day professional service to Thornbury and surrounding suburbs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Comprehensive insurance documentation and preferred provider status</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
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
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Our Thornbury Mould Removal Process
              </h2>
              <p className="text-lg text-professional max-w-3xl mx-auto">
                Professional IICRC-certified mould remediation tailored to Thornbury's unique heritage and converted property challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-3">Initial Assessment</h3>
                  <p className="text-professional text-sm">
                    Comprehensive Thornbury property inspection using thermal imaging and moisture detection to identify all affected areas and moisture sources.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-3">Containment Setup</h3>
                  <p className="text-professional text-sm">
                    Professional containment barriers and negative air pressure systems to prevent mould spores spreading throughout your Thornbury property.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-3">Safe Removal</h3>
                  <p className="text-professional text-sm">
                    HEPA-filtered removal and disposal of contaminated materials, followed by antimicrobial treatment of all affected Thornbury property surfaces.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-3">Prevention & Monitoring</h3>
                  <p className="text-professional text-sm">
                    Post-treatment air quality testing, moisture source elimination, and ongoing monitoring to prevent mould return in your Thornbury home.
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
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Thornbury Property Types We Service
              </h2>
              <p className="text-lg text-professional max-w-3xl mx-auto">
                Expert mould removal for Thornbury's diverse architectural landscape, from heritage Edwardian homes to trendy warehouse conversions and craft brewery venues.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-6">Residential Properties</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Heritage Edwardian Homes</h4>
                      <p className="text-professional text-sm">Period properties along High Street and neighbouring areas often face ventilation challenges and heritage-sensitive mould treatment requirements.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Converted Warehouses & Lofts</h4>
                      <p className="text-professional text-sim">Former industrial spaces converted to residential use throughout Thornbury's hipster quarter often experience unique moisture and ventilation challenges.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Weatherboard Cottages</h4>
                      <p className="text-professional text-sm">Classic Melbourne homes throughout Thornbury may experience moisture penetration and require careful restoration to maintain character features.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Modern Apartments & Townhouses</h4>
                      <p className="text-professional text-sm">Contemporary developments near transport hubs may experience condensation issues due to energy-efficient construction and lifestyle factors.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-6">Commercial Properties</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Restaurants & Craft Breweries</h4>
                      <p className="text-professional text-sm">Food service and brewing establishments around High Street need rapid mould response to maintain health compliance and food safety standards.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Creative Studios & Galleries</h4>
                      <p className="text-professional text-sm">Arts spaces and creative studios require immediate mould response to protect valuable works and maintain climate-controlled environments.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Retail & Hospitality Venues</h4>
                      <p className="text-professional text-sm">Commercial premises and hospitality venues require minimal disruption during mould remediation to maintain customer service and business operations.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Office & Co-working Spaces</h4>
                      <p className="text-professional text-sm">Professional offices and shared working spaces need rapid mould remediation to maintain healthy work environments and productivity.</p>
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
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Thornbury Mould Prevention Tips
              </h2>
              <p className="text-lg text-professional max-w-3xl mx-auto">
                Local expert advice for preventing mould in Thornbury's trendy converted spaces and heritage property conditions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Climate Considerations</h3>
                  <ul className="space-y-2 text-professional">
                    <li>• Monitor humidity during Melbourne's humid summer months</li>
                    <li>• Ensure adequate heating during winter to prevent condensation</li>
                    <li>• Address Darebin Creek proximity moisture factors</li>
                    <li>• Consider Thornbury's mixed industrial-residential climate effects</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Property Maintenance</h3>
                  <ul className="space-y-2 text-professional">
                    <li>• Regular gutter cleaning to prevent water damage</li>
                    <li>• Maintain downpipes and stormwater drainage</li>
                    <li>• Check heritage home ventilation systems annually</li>
                    <li>• Inspect converted warehouse moisture sealing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Indoor Environment</h3>
                  <ul className="space-y-2 text-professional">
                    <li>• Use exhaust fans in bathrooms and laundries</li>
                    <li>• Maintain consistent indoor temperatures</li>
                    <li>• Address condensation on windows promptly</li>
                    <li>• Ensure adequate ventilation in open-plan conversions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 px-4 bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Professional Mould Removal in Thornbury?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Don't let mould compromise your Thornbury property. Our IICRC certified technicians provide Professional service line response with 2-hour arrival time.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                <Phone className="mr-2 h-5 w-5" />
                Call 1800 954 117 Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200">
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