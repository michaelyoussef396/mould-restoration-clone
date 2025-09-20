import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, MapPin, Phone, ArrowRight, Star, Award, CheckCircle } from 'lucide-react';
import { LocationPageSEO } from '@/components/seo/SEOHead';
import { LocalBusinessSchema, ServiceSchema } from '@/components/seo/SchemaMarkup';

export default function HeidelbergMouldRemoval() {
  return (
    <>
      <LocationPageSEO
        title="Mould Removal Heidelberg Melbourne | Expert Inspection & Remediation"
        description="Professional mould removal services in Heidelberg 3084. Historic northern suburb with established homes & community properties. Free inspections. Call 1800 954 117 today."
        suburb="Heidelberg"
        postcode="3084"
        keywords="mould removal heidelberg, mould inspection heidelberg melbourne, historic suburb mould treatment, established home moisture control 3084"
        canonical="https://mouldrestoration.com.au/services/mould-removal-heidelberg"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        address="Heidelberg VIC 3084"
        phone="1800 954 117"
        email="info@mouldrestorationco.com.au"
        abn="47 683 089 652"
        services={['Mould Inspection', 'Mould Removal', 'Moisture Control', 'Property Restoration']}
        serviceArea="Heidelberg Melbourne Victoria"
        description="Professional mould removal services in Heidelberg, specialising in historic homes, established northern suburbs properties and community building moisture management challenges."
      />

      <ServiceSchema
        serviceName="Mould Removal Heidelberg"
        description="Comprehensive mould inspection and remediation services for Heidelberg properties, focusing on historic homes and established northern suburbs buildings."
        provider="Mould & Restoration Co."
        areaServed="Heidelberg VIC 3084"
        serviceType="Property Restoration"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Mould Removal Heidelberg Melbourne
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Protecting Heidelberg families with professional mould inspection and removal services.
                Expert solutions for historic homes, established properties and community buildings in the 3084 area.
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
                  <span className="font-medium">Same-Day Professional Service Heidelberg</span>
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

        {/* Local Expertise Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">
              Heidelberg Hospital Precinct Mould Expertise
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Heidelberg's unique position as a major hospital precinct and established northern suburbs community creates specific mould challenges that require specialised expertise. With 5+ years serving Melbourne's medical district neighbourhoods and over 100 successful restorations, we understand the complex needs of healthcare community residential areas.
                </p>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  From heritage homes near Austin Hospital to family properties throughout the 3084 postcode area, we provide comprehensive mould solutions tailored to Heidelberg's blend of medical facilities proximity, established residential character, and diverse community demographics.
                </p>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our team recognises that Heidelberg properties serve healthcare workers, established families, and diverse residents who value both convenience and healthy living environments. We've successfully treated everything from period homes to modern family developments in this important northern medical hub.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Hospital precinct expertise</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Healthcare community focus</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Established family specialists</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Diverse community understanding</span>
                  </div>
                </div>
              </div>

              <div className="bg-columbia p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-charcoal mb-6">Heidelberg Service Areas</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Austin Hospital vicinity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Bell Street corridor</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Heidelberg railway station area</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Warringal Private Hospital surrounds</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Olympic Village residential areas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Yarra River proximity homes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Property Types Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">
              Heidelberg Property Types We Service
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-columbia rounded-full flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Healthcare Worker Housing</h3>
                  <p className="text-gray-700 mb-4">
                    Specialised treatment for homes and apartments housing healthcare professionals, understanding the unique needs of medical workers who require healthy, clean living environments.
                  </p>
                  <ul className="space-y-2 text-sm text-professional">
                    <li>• Healthcare-aware treatments</li>
                    <li>• Professional schedule accommodation</li>
                    <li>• Health-focused solutions</li>
                    <li>• Shift worker considerations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-6">
                    <MapPin className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Established Family Homes</h3>
                  <p className="text-gray-700 mb-4">
                    Comprehensive care for Heidelberg's diverse family properties, from post-war homes to renovated period properties, ensuring family health protection in this well-connected northern suburb.
                  </p>
                  <ul className="space-y-2 text-sm text-professional">
                    <li>• Family health prioritisation</li>
                    <li>• Established home expertise</li>
                    <li>• Child-safe methodologies</li>
                    <li>• Community-focused service</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Period Character Properties</h3>
                  <p className="text-gray-700 mb-4">
                    Heritage-sensitive treatments for Heidelberg's period homes and character properties, preserving architectural features while ensuring modern moisture management and health standards.
                  </p>
                  <ul className="space-y-2 text-sm text-professional">
                    <li>• Period property expertise</li>
                    <li>• Character preservation methods</li>
                    <li>• Heritage-sensitive restoration</li>
                    <li>• Architectural integrity maintenance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">
              Why Heidelberg Residents Choose Us
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-columbia rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-3">Medical District Specialists</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our understanding of Heidelberg's unique position as a major medical precinct means we provide services that meet the high health and cleanliness standards expected by healthcare professionals and the broader community.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-3">Proven Healthcare Community Track Record</h3>
                    <p className="text-gray-700 leading-relaxed">
                      With over 100 successful property restorations across Melbourne and 5+ years of experience, we've helped numerous Heidelberg families, including healthcare workers, maintain healthy living environments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-3">Flexible Scheduling Expertise</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We understand the demanding schedules of healthcare workers and busy families, offering flexible appointment times and efficient treatments that minimise disruption to important routines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Get Your Free Heidelberg Inspection</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Every Heidelberg property deserves the highest health standards, especially in this important medical district community. Our inspection identifies all moisture risks with healthcare-level attention to detail.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Healthcare-standard assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Medical community understanding</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Family health prioritisation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Flexible scheduling options</span>
                  </div>
                </div>

                <Button size="lg" className="w-full bg-white text-primary hover:bg-columbia font-semibold py-6 rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 1800 954 117 Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Prevention Tips Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">
              Mould Prevention Tips for Heidelberg Properties
            </h2>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Healthcare-Standard Prevention</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Maintain high air quality standards suitable for healthcare workers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Address moisture issues promptly to prevent health impacts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Ensure ventilation systems operate at optimal levels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Monitor humidity levels in high-occupancy areas</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Community Property Care</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Balance established home character with modern moisture control</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Consider medical equipment storage moisture implications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Maintain drainage systems in hospital precinct proximity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Schedule regular professional inspections for healthcare standards</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-primary">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Protect Your Heidelberg Property?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Don't let mould compromise your health-focused community living. Our Heidelberg specialists provide healthcare-standard solutions for all property types.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-white text-primary hover:bg-columbia px-8 py-6 text-lg font-semibold rounded-full">
                <Phone className="w-5 h-5 mr-2" />
                1800 954 117
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold rounded-full">
                Book Free Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="text-blue-100">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-4 h-4" />
                <span>Available 7am-7pm, Every Day</span>
              </div>
              <p className="text-sm">ABN: 47 683 089 652 | Fully Licensed & Insured</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};