import React from 'react';
import { LocationPageSEO } from '../../components/seo/LocationPageSEO';
import { LocalBusinessSchema, ServiceSchema } from '../../components/seo/Schema';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Clock, Shield, MapPin, Phone, ArrowRight, Star, Award, CheckCircle } from 'lucide-react';

const MaribyrnongMouldRemoval = () => {
  return (
    <>
      <LocationPageSEO
        suburb="Maribyrnong"
        title="Professional Mould Removal Maribyrnong | 1800 954 117 | Mould & Restoration Co."
        description="Expert mould removal services in Maribyrnong 3032. River-adjacent expertise, waterfront property specialists. 5.0 stars, 100+ Melbourne properties restored. Call 1800 954 117"
        keywords="mould removal maribyrnong, maribyrnong mould inspection, maribyrnong river mould, waterfront mould removal, maribyrnong 3032"
        canonical="https://mouldrestoration.com.au/services/mould-removal-maribyrnong"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        address="Maribyrnong VIC 3032"
        phone="1800 954 117"
        email="info@mouldandrestoration.com.au"
        description="Professional mould removal services in Maribyrnong. River-adjacent property specialists with 5+ years experience."
      />

      <ServiceSchema
        serviceName="Mould Removal Maribyrnong"
        description="Expert mould removal and remediation services for Maribyrnong properties, specialising in river-adjacent homes and waterfront conditions."
        areaServed="Maribyrnong VIC 3032"
        provider="Mould & Restoration Co."
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-blue-200" />
              <span className="text-blue-100 font-medium">Maribyrnong VIC 3032</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Professional Mould Removal Maribyrnong
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              River-adjacent property specialists with expert waterfront mould solutions for Maribyrnong homes and businesses
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
              Maribyrnong River-Adjacent Mould Expertise
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Maribyrnong's unique position along the Maribyrnong River creates specific moisture challenges that our experienced team understands intimately. With 5+ years serving riverside Melbourne properties and over 100 successful restorations, we've developed specialised techniques for waterfront mould conditions.
                </p>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  From heritage homes near Maribyrnong Park to modern riverside apartments and established family properties throughout the 3032 postcode area, we provide comprehensive mould solutions tailored to Maribyrnong's river-influenced environment and diverse architectural landscape.
                </p>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our team recognises that Maribyrnong properties face unique challenges from river humidity, seasonal flooding risks, and the area's transitional climate patterns. We've successfully treated everything from Federation-era homes near Highpoint to contemporary developments along the river corridor.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">River humidity expertise</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Waterfront property specialists</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Heritage restoration experience</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Modern development solutions</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Maribyrnong Service Areas</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">River precinct properties</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Maribyrnong Park surrounds</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Highpoint vicinity homes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Industrial heritage areas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Riverside apartment complexes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Western Ring Road corridor</span>
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
              Maribyrnong Property Types We Service
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Heritage River Homes</h3>
                  <p className="text-gray-700 mb-4">
                    Specialised treatment for Federation and Edwardian homes near the Maribyrnong River, with expertise in period features and heritage-sensitive restoration methods.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Period timber preservation</li>
                    <li>• Heritage plaster restoration</li>
                    <li>• Original feature protection</li>
                    <li>• River humidity management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Riverside Apartments</h3>
                  <p className="text-gray-700 mb-4">
                    Modern waterfront apartments with comprehensive moisture control solutions, balcony treatment, and multi-level building expertise along the river corridor.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Waterfront moisture control</li>
                    <li>• Balcony mould prevention</li>
                    <li>• Multi-storey access solutions</li>
                    <li>• River-view property care</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Family Properties</h3>
                  <p className="text-gray-700 mb-4">
                    Established family homes throughout Maribyrnong's diverse neighbourhoods, with child-safe treatments and comprehensive family health protection protocols.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Child-safe treatment methods</li>
                    <li>• Family health prioritisation</li>
                    <li>• Playground area consideration</li>
                    <li>• Pet-friendly solutions</li>
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
              Why Maribyrnong Residents Choose Us
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">River-Adjacent Property Specialists</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our extensive experience with Maribyrnong's riverside conditions means we understand the unique moisture challenges, seasonal variations, and architectural considerations that affect properties along the river corridor and throughout the suburb.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Maribyrnong Track Record</h3>
                    <p className="text-gray-700 leading-relaxed">
                      With over 100 successful property restorations across Melbourne and 5+ years of experience, we've helped numerous Maribyrnong families restore their homes to healthy, mould-free environments with lasting results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Waterfront Moisture Expertise</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We've developed specialised techniques for managing the elevated humidity and moisture challenges that come with living near the Maribyrnong River, ensuring comprehensive protection for your riverside investment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Get Your Free Maribyrnong Inspection</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Every Maribyrnong property is unique, especially with river proximity and diverse architecture. Our comprehensive inspection identifies all moisture sources and potential mould risks specific to your location.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Thermal imaging moisture detection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">River humidity assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Detailed remediation plan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Prevention recommendations</span>
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
              Mould Prevention Tips for Maribyrnong Properties
            </h2>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">River Climate Management</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Monitor humidity levels near the river, especially during wet months</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Ensure adequate ventilation in riverside properties</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Address any water seepage from river-facing foundations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Maintain gutters and drainage systems regularly</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Property-Specific Care</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Use dehumidifiers during high river humidity periods</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Inspect waterfront-facing walls for moisture intrusion</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Ensure bathroom and kitchen fans are working effectively</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Schedule regular professional inspections for early detection</span>
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
              Ready to Restore Your Maribyrnong Property?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Don't let mould compromise your riverside investment. Our Maribyrnong specialists are ready to provide expert assessment and lasting solutions.
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

export default MaribyrnongMouldRemoval;