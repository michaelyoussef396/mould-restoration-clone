import React from 'react';
import { LocationPageSEO } from '@/components/seo/SEOHead';
import { LocalBusinessSchema, ServiceSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Clock, Shield, MapPin, Phone, ArrowRight, Star, Award, CheckCircle } from 'lucide-react';

const LavertonMouldRemoval = () => {
  return (
    <>
      <LocationPageSEO
        suburb="Laverton"
        title="Professional Mould Removal Laverton | 1800 954 117 | Mould & Restoration Co."
        description="Expert mould removal services in Laverton 3028. Industrial transition specialists, aviation precinct expertise. 5.0 stars, 100+ Melbourne properties restored. Call 1800 954 117"
        keywords="mould removal laverton, laverton mould inspection, laverton aviation precinct, industrial mould removal, laverton 3028"
        canonical="https://mouldrestoration.com.au/services/mould-removal-laverton"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        address="Laverton VIC 3028"
        phone="1800 954 117"
        email="info@mouldandrestoration.com.au"
        description="Professional mould removal services in Laverton. Industrial transition and aviation precinct specialists with 5+ years experience."
      />

      <ServiceSchema
        serviceName="Mould Removal Laverton"
        description="Expert mould removal and remediation services for Laverton properties, specialising in industrial transition areas and aviation precinct moisture management."
        areaServed="Laverton VIC 3028"
        provider="Mould & Restoration Co."
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-blue-200" />
              <span className="text-blue-100 font-medium">Laverton VIC 3028</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Professional Mould Removal Laverton
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Industrial transition specialists with expert aviation precinct mould solutions for Laverton's diverse properties
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-white text-primary hover:bg-columbia px-8 py-6 text-lg font-semibold rounded-full shadow-lg border-0">
                <Phone className="w-5 h-5 mr-2" />
                Call 1800 954 117
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold rounded-full">
                Free Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-300" />
                <span>5.0 Star Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-200" />
                <span>100+ Properties Restored</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-200" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-200" />
                <span>Fully Insured</span>
              </div>
            </div>
          </div>
        </section>

        {/* Local Expertise Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">
              Laverton Industrial Transition Mould Expertise
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Laverton's evolution from heavy industrial area to mixed residential and aviation precinct creates unique mould challenges that demand specialised expertise. With 5+ years serving Melbourne's transitional suburbs and over 100 successful restorations, we understand the complex moisture dynamics of changing urban landscapes.
                </p>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  From established family homes near Laverton railway station to contemporary developments throughout the 3028 postcode area, we provide comprehensive mould solutions tailored to Laverton's diverse property types and proximity to aviation and industrial activities.
                </p>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our team recognises that Laverton properties face unique environmental pressures from industrial history, aviation activities, and urban development. We've successfully treated everything from post-war suburban homes to modern family developments, always considering the area's distinctive challenges.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Industrial transition expertise</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Aviation precinct understanding</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Environmental adaptation methods</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Mixed-use area solutions</span>
                  </div>
                </div>
              </div>

              <div className="bg-columbia p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-charcoal mb-6">Laverton Service Areas</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Aviation precinct vicinity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Laverton railway station area</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Industrial heritage zones</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Residential development areas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Community housing estates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Mixed residential-commercial zones</span>
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
              Laverton Property Types We Service
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-columbia rounded-full flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Post-War Family Homes</h3>
                  <p className="text-gray-700 mb-4">
                    Comprehensive treatment for Laverton's established post-war suburban homes, managing the unique moisture challenges that come with older construction methods and industrial area environmental factors.
                  </p>
                  <ul className="space-y-2 text-sm text-professional">
                    <li>• Post-war construction expertise</li>
                    <li>• Established suburb solutions</li>
                    <li>• Environmental adaptation care</li>
                    <li>• Industrial impact mitigation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-6">
                    <MapPin className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Aviation Precinct Properties</h3>
                  <p className="text-gray-700 mb-4">
                    Specialised moisture management for homes near aviation activities, addressing unique environmental conditions, noise barriers, and air quality considerations that affect mould growth patterns.
                  </p>
                  <ul className="space-y-2 text-sm text-professional">
                    <li>• Aviation environment expertise</li>
                    <li>• Specialised ventilation systems</li>
                    <li>• Noise barrier considerations</li>
                    <li>• Air quality adaptation methods</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Modern Development Properties</h3>
                  <p className="text-gray-700 mb-4">
                    Contemporary homes and townhouses in Laverton's newer developments, with advanced moisture management systems designed to handle the area's transitional environment and growth patterns.
                  </p>
                  <ul className="space-y-2 text-sm text-professional">
                    <li>• Modern building treatments</li>
                    <li>• Development-aware solutions</li>
                    <li>• Growth area adaptation</li>
                    <li>• Future-focused prevention</li>
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
              Why Laverton Residents Choose Us
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-columbia rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-3">Industrial Transition Specialists</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our deep understanding of Laverton's evolution from heavy industrial area to diverse residential and aviation precinct means we can address the unique environmental and moisture challenges that come with this transformation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-3">Proven Diverse Area Track Record</h3>
                    <p className="text-gray-700 leading-relaxed">
                      With over 100 successful property restorations across Melbourne and 5+ years of experience, we've helped numerous Laverton families navigate the unique challenges of living in a transitional urban environment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-3">Environmental Adaptation Expertise</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We've mastered the art of protecting properties from the various environmental factors unique to Laverton, including industrial legacy impacts, aviation activities, and the area's changing urban landscape.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Get Your Free Laverton Inspection</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Every Laverton property faces unique challenges from the area's industrial history and ongoing development. Our comprehensive inspection identifies all environmental and moisture risks specific to your location.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Environmental impact assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Industrial legacy evaluation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Aviation precinct considerations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Transition-aware prevention plan</span>
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
              Mould Prevention Tips for Laverton Properties
            </h2>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Environmental Protection</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Monitor air quality impacts from industrial and aviation activities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Maintain effective filtration systems for environmental protection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Address moisture issues promptly in transitional environments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Ensure adequate ventilation despite external factors</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Adaptive Home Maintenance</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Adapt maintenance schedules to environmental pressures</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Use protective measures for post-war construction materials</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Consider sound barrier and insulation moisture implications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Schedule professional inspections suited to transitional areas</span>
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
              Ready to Restore Your Laverton Property?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Don't let environmental challenges compromise your home. Our Laverton specialists understand your unique location and provide lasting solutions.
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

export default LavertonMouldRemoval;