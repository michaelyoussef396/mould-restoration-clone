import React from 'react';
import { LocationPageSEO } from '../../components/seo/LocationPageSEO';
import { LocalBusinessSchema, ServiceSchema } from '../../components/seo/Schema';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Clock, Shield, MapPin, Phone, ArrowRight, Star, Award, CheckCircle } from 'lucide-react';

const MillParkMouldRemoval = () => {
  return (
    <>
      <LocationPageSEO
        suburb="Mill Park"
        title="Professional Mould Removal Mill Park | 1800 954 117 | Mould & Restoration Co."
        description="Expert mould removal services in Mill Park 3082. Outer north specialists, family estate expertise. 5.0 stars, 100+ Melbourne properties restored. Call 1800 954 117"
        keywords="mould removal mill park, mill park mould inspection, mill park family estates, outer north mould removal, mill park 3082"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        address="Mill Park VIC 3082"
        phone="1800 954 117"
        email="info@mouldandrestoration.com.au"
        description="Professional mould removal services in Mill Park. Outer north and family estate specialists with 5+ years experience."
      />

      <ServiceSchema
        serviceName="Mould Removal Mill Park"
        description="Expert mould removal and remediation services for Mill Park properties, specialising in outer north family homes and estate moisture management."
        areaServed="Mill Park VIC 3082"
        provider="Mould & Restoration Co."
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-blue-200" />
              <span className="text-blue-100 font-medium">Mill Park VIC 3082</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Professional Mould Removal Mill Park
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Outer north specialists with expert family estate mould solutions for Mill Park's growing residential community
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
              Mill Park Outer North Mould Expertise
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Mill Park's established position as a premier outer northern family suburb creates unique mould challenges across diverse housing estates and family-focused communities. With 5+ years serving Melbourne's outer suburban areas and over 100 successful restorations, we understand the specific moisture dynamics of outer northern family living.
                </p>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  From established family homes in Mill Park Lakes estate to newer developments throughout the 3082 postcode area, we provide comprehensive mould solutions tailored to Mill Park's blend of established residential character, family lifestyle priorities, and outer suburban environmental conditions.
                </p>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our team recognises that Mill Park properties serve growing families who chose this area for space, value, and community amenities. We've successfully treated everything from brick veneer family homes to modern estate developments, always prioritising family health and property protection.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Outer north expertise</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Family estate specialists</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Established community focus</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Family health prioritisation</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Mill Park Service Areas</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Mill Park Lakes estate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Westfield Plenty Valley vicinity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">McDonalds Road corridor</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Family residential estates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Established neighbourhood pockets</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Mill Park Secondary College area</span>
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
              Mill Park Property Types We Service
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Established Family Homes</h3>
                  <p className="text-gray-700 mb-4">
                    Comprehensive treatment for Mill Park's established family properties, from 1980s-90s brick veneer homes to extended family houses, ensuring optimal health protection for growing families.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Established home expertise</li>
                    <li>• Family health prioritisation</li>
                    <li>• Child-safe treatments</li>
                    <li>• Property value protection</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Mill Park Estate Properties</h3>
                  <p className="text-gray-700 mb-4">
                    Specialised moisture management for homes in Mill Park's prestigious estates, addressing estate-specific drainage, landscaping impacts, and community living considerations.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Estate-specific solutions</li>
                    <li>• Community drainage expertise</li>
                    <li>• Landscaping considerations</li>
                    <li>• Estate maintenance awareness</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Modern Family Developments</h3>
                  <p className="text-gray-700 mb-4">
                    Advanced moisture control for Mill Park's newer family developments and townhouse complexes, managing modern construction materials and contemporary family living patterns.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Modern construction expertise</li>
                    <li>• Townhouse complex solutions</li>
                    <li>• Contemporary moisture systems</li>
                    <li>• Family lifestyle adaptation</li>
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
              Why Mill Park Families Choose Us
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Outer North Family Specialists</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our extensive experience with Mill Park's family-focused outer northern community means we understand the priorities of growing families who value space, safety, and healthy home environments for their children.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Estate Community Track Record</h3>
                    <p className="text-gray-700 leading-relaxed">
                      With over 100 successful property restorations across Melbourne and 5+ years of experience, we've helped numerous Mill Park families protect their established home investments and family health.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Family-Focused Service Approach</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We understand the demands of busy family life in Mill Park, offering flexible scheduling, child-safe treatments, and comprehensive family health protection that fits your established community lifestyle.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Get Your Free Mill Park Inspection</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Every Mill Park family deserves a healthy home environment. Our comprehensive inspection identifies all moisture risks while protecting your family's established community investment.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Family-focused assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Estate-aware inspection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Child-safe treatment planning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Property value protection</span>
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
              Mould Prevention Tips for Mill Park Properties
            </h2>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Family Home Maintenance</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Maintain adequate ventilation in family activity areas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Monitor established home building materials for moisture retention</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Address drainage issues promptly in family garden areas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Ensure children's play areas remain moisture-free</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Estate Living Considerations</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Work with estate management on community drainage issues</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Consider landscaping impacts on home moisture levels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Maintain guttering and downpipes in estate properties</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Schedule regular professional inspections for family peace of mind</span>
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
              Ready to Protect Your Mill Park Family Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Don't let mould compromise your family's health or your established home investment. Our Mill Park specialists prioritise family wellbeing and community values.
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

export default MillParkMouldRemoval;