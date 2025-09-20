import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, MapPin, Phone, ArrowRight, Star, Award, CheckCircle } from 'lucide-react';
import { LocationPageSEO } from '@/components/seo/SEOHead';
import { LocalBusinessSchema, ServiceSchema } from '@/components/seo/SchemaMarkup';

export default function CoburgMouldRemoval() {
  return (
    <>
      <LocationPageSEO
        title="Mould Removal Coburg Melbourne | Expert Inspection & Remediation"
        description="Professional mould removal services in Coburg 3058. Diverse northern suburb with period homes & modern developments. Free inspections. Call 1800 954 117 today."
        suburb="Coburg"
        postcode="3058"
        keywords="mould removal coburg, mould inspection coburg melbourne, period home mould treatment, northern suburbs moisture control 3058"
        canonical="https://mouldrestoration.com.au/services/mould-removal-coburg"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        address="Coburg VIC 3058"
        phone="1800 954 117"
        email="info@mouldrestorationco.com.au"
        abn="47 683 089 652"
        services={['Mould Inspection', 'Mould Removal', 'Moisture Control', 'Property Restoration']}
        serviceArea="Coburg Melbourne Victoria"
        description="Professional mould removal services in Coburg, specialising in period homes, modern developments and northern suburbs property moisture management challenges."
      />

      <ServiceSchema
        serviceName="Mould Removal Coburg"
        description="Comprehensive mould inspection and remediation services for Coburg properties, focusing on diverse residential and commercial property types."
        provider="Mould & Restoration Co."
        areaServed="Coburg VIC 3058"
        serviceType="Property Restoration"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Mould Removal Coburg Melbourne
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Protecting Coburg families with professional mould inspection and removal services.
                Expert solutions for period homes, modern developments and diverse northern suburbs properties in the 3058 area.
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
                  <span className="font-medium">Same-Day Professional Service Coburg</span>
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
                  Coburg Mould Removal Experts
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Coburg's diverse northern suburbs landscape presents unique mould challenges that Mould & Restoration Co. understands intimately. From post-war homes along Bell Street to modern townhouses near Coburg Station, our IICRC certified technicians provide tailored mould removal solutions for every property type in the 3058 postcode area.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Located just 8km north of Melbourne's CBD, Coburg's multicultural community and growing family demographic call varied properties home. Whether you're dealing with moisture issues in a Californian bungalow near Coburg Lake, condensation problems in converted flats around Sydney Road, or ventilation challenges in new developments near Pentridge Village, our local knowledge ensures effective mould remediation.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  The suburb's proximity to the Merri Creek and varied terrain creates different moisture conditions across the area, particularly in lower-lying sections near the creek and around the former Pentridge Prison site. Our Coburg mould removal specialists understand these local environmental factors and their impact on property moisture levels.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Local Coverage</h4>
                      <p className="text-professional text-sm">Coburg 3058, Coburg North 3058</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Response Time</h4>
                      <p className="text-professional text-sm">Same-day professional service to Coburg</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:pl-8">
                <Card className="shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-charcoal mb-4">Why Choose Mould & Restoration Co. in Coburg?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Extensive Coburg property experience - post-war homes to modern developments</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">IICRC certified technicians with 5+ years local Melbourne experience</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Same-day professional service to Coburg and surrounding suburbs</span>
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
                Our Coburg Mould Removal Process
              </h2>
              <p className="text-lg text-professional max-w-3xl mx-auto">
                Professional IICRC-certified mould remediation tailored to Coburg's diverse property challenges, from period homes to contemporary developments.
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
                    Comprehensive Coburg property inspection using thermal imaging and moisture detection to identify all affected areas and moisture sources.
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
                    Professional containment barriers and negative air pressure systems to prevent mould spores spreading throughout your Coburg property.
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
                    HEPA-filtered removal and disposal of contaminated materials, followed by antimicrobial treatment of all affected Coburg property surfaces.
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
                    Post-treatment air quality testing, moisture source elimination, and ongoing monitoring to prevent mould return in your Coburg home.
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
                Coburg Property Types We Service
              </h2>
              <p className="text-lg text-professional max-w-3xl mx-auto">
                Expert mould removal for Coburg's diverse architectural landscape, from post-war family homes to contemporary townhouse developments.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-6">Residential Properties</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Post-War Family Homes</h4>
                      <p className="text-professional text-sm">Californian bungalows and weatherboard homes throughout Coburg often experience ventilation challenges and moisture issues requiring targeted mould treatment.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Period Cottages & Terraces</h4>
                      <p className="text-professional text-sm">Heritage homes near Bell Street and central Coburg areas may face rising damp and ventilation issues common to older construction methods.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Modern Townhouses & Units</h4>
                      <p className="text-professional text-sm">Contemporary developments around Pentridge Village and near transport hubs may experience condensation issues due to modern construction methods.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Converted Flats & Apartments</h4>
                      <p className="text-professional text-sm">Split residential properties and converted apartments along major roads require careful moisture management and mould prevention strategies.</p>
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
                      <h4 className="font-semibold text-charcoal">Retail & Shopping Centres</h4>
                      <p className="text-professional text-sm">Commercial premises along Sydney Road and Bell Street require immediate mould response to maintain customer safety and business operations.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Healthcare & Medical Facilities</h4>
                      <p className="text-professional text-sm">Medical centres and healthcare providers need rapid mould remediation to maintain sterile environments and patient safety standards.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Educational Facilities</h4>
                      <p className="text-professional text-sm">Schools and childcare centres require immediate mould response to ensure safe learning environments for Coburg's growing families.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Industrial & Warehouse Spaces</h4>
                      <p className="text-professional text-sm">Light industrial facilities and storage spaces require comprehensive moisture control to protect goods and maintain workplace safety.</p>
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
                Coburg Mould Prevention Tips
              </h2>
              <p className="text-lg text-professional max-w-3xl mx-auto">
                Local expert advice for preventing mould in Coburg's diverse climate and property conditions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Climate Considerations</h3>
                  <ul className="space-y-2 text-professional">
                    <li>• Monitor humidity during Melbourne's humid summer months</li>
                    <li>• Ensure adequate heating during winter to prevent condensation</li>
                    <li>• Address Merri Creek proximity moisture factors</li>
                    <li>• Consider Coburg's varied terrain and drainage patterns</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Property Maintenance</h3>
                  <ul className="space-y-2 text-professional">
                    <li>• Regular gutter cleaning to prevent water damage</li>
                    <li>• Maintain downpipes and stormwater drainage</li>
                    <li>• Check post-war home ventilation systems annually</li>
                    <li>• Seal period property potential moisture entry points</li>
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
                    <li>• Ensure adequate cross-ventilation in living areas</li>
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
              Need Professional Mould Removal in Coburg?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Don't let mould compromise your Coburg property. Our IICRC certified technicians provide Professional service line response with 2-hour arrival time.
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