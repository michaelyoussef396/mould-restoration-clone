import React from 'react';
import { LocationPageSEO } from '../../components/seo/LocationPageSEO';
import { LocalBusinessSchema, ServiceSchema } from '../../components/seo/Schema';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Clock, Shield, MapPin, Phone, ArrowRight, Star, Award, CheckCircle } from 'lucide-react';

const YarravilleMouldRemoval = () => {
  return (
    <>
      <LocationPageSEO
        suburb="Yarraville"
        title="Professional Mould Removal Yarraville | 1800 954 117 | Mould & Restoration Co."
        description="Expert mould removal services in Yarraville 3013. Village atmosphere specialists, heritage workers cottage expertise. 5.0 stars, 100+ Melbourne properties restored. Call 1800 954 117"
        keywords="mould removal yarraville, yarraville mould inspection, yarraville village mould, workers cottage mould removal, yarraville 3013"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        address="Yarraville VIC 3013"
        phone="1800 954 117"
        email="info@mouldandrestoration.com.au"
        description="Professional mould removal services in Yarraville. Heritage workers cottage specialists with 5+ years experience."
      />

      <ServiceSchema
        serviceName="Mould Removal Yarraville"
        description="Expert mould removal and remediation services for Yarraville properties, specialising in heritage workers cottages and village atmosphere homes."
        areaServed="Yarraville VIC 3013"
        provider="Mould & Restoration Co."
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-blue-200" />
              <span className="text-blue-100 font-medium">Yarraville VIC 3013</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Professional Mould Removal Yarraville
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Heritage workers cottage specialists with expert village-style property mould solutions for Yarraville homes
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-full shadow-lg border-0">
                <Phone className="w-5 h-5 mr-2" />
                Call 1800 954 117
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg font-semibold rounded-full">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Yarraville Village Character Mould Expertise
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Yarraville's distinctive village atmosphere and heritage workers cottages create unique mould challenges that require specialised expertise. With 5+ years serving Melbourne's western suburbs and over 100 successful restorations, we understand the intricate needs of Yarraville's character properties.
                </p>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  From original workers cottages near Anderson Street to contemporary family homes throughout the 3013 postcode area, we provide comprehensive mould solutions that preserve Yarraville's architectural heritage while ensuring modern health standards.
                </p>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our team recognises that Yarraville properties, many built for industrial workers, require careful treatment that respects their historical significance while addressing modern moisture management needs. We've successfully restored everything from Victorian-era cottages to modern village-style developments.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Workers cottage expertise</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Heritage preservation methods</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Village character respect</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Community-focused service</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Yarraville Service Areas</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Anderson Street precinct</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Hyde Street village area</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Yarraville Gardens surrounds</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Workers cottage precincts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Village Square proximity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Railway station area</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Property Types Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Yarraville Property Types We Service
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Heritage Workers Cottages</h3>
                  <p className="text-gray-700 mb-4">
                    Specialised treatment for Yarraville's iconic workers cottages, preserving original character features while implementing modern moisture management and mould prevention systems.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Period timber restoration</li>
                    <li>• Original brick preservation</li>
                    <li>• Character feature protection</li>
                    <li>• Heritage-sensitive solutions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Village-Style Homes</h3>
                  <p className="text-gray-700 mb-4">
                    Modern family homes that complement Yarraville's village atmosphere, with comprehensive moisture control and contemporary mould prevention tailored to inner-west living.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Family-friendly treatments</li>
                    <li>• Modern moisture systems</li>
                    <li>• Village aesthetic preservation</li>
                    <li>• Community-conscious methods</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Renovated Properties</h3>
                  <p className="text-gray-700 mb-4">
                    Yarraville's many renovated and extended properties require specialised care where old meets new, ensuring seamless mould protection across different architectural periods and materials.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Extension integration care</li>
                    <li>• Mixed-era material expertise</li>
                    <li>• Renovation-specific solutions</li>
                    <li>• Update-sensitive treatment</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Yarraville Residents Choose Us
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Heritage Character Specialists</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our deep understanding of Yarraville's unique village character and workers cottage heritage ensures that every mould treatment preserves the architectural integrity and historical significance that makes your property special.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Village Track Record</h3>
                    <p className="text-gray-700 leading-relaxed">
                      With over 100 successful property restorations across Melbourne and 5+ years of experience, we've helped numerous Yarraville families maintain their heritage properties while ensuring modern health and safety standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Community-Focused Approach</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We understand that Yarraville's strong community values extend to preserving the suburb's character. Our treatments respect both the environment and the village atmosphere that residents cherish.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Get Your Free Yarraville Inspection</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Every Yarraville property tells a story, especially the heritage workers cottages. Our comprehensive inspection respects your property's history while identifying all moisture risks and mould concerns.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Heritage-sensitive inspection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Village character assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Preservation-focused plan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Community-conscious methods</span>
                  </div>
                </div>

                <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-6 rounded-full">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Mould Prevention Tips for Yarraville Properties
            </h2>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Heritage Property Care</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Monitor ventilation in older workers cottages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Maintain heritage roof tiles and guttering systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Preserve original timber while managing moisture</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Check under-house ventilation in raised cottages</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Village Living Tips</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Balance character preservation with moisture control</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Use period-appropriate ventilation improvements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Address moisture issues in renovated sections</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Schedule heritage-sensitive professional inspections</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Restore Your Yarraville Property?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Don't let mould compromise your heritage investment. Our Yarraville specialists preserve character while ensuring healthy living environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-full">
                <Phone className="w-5 h-5 mr-2" />
                1800 954 117
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg font-semibold rounded-full">
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

export default YarravilleMouldRemoval;