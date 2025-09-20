import React from 'react';
import { LocationPageSEO } from '@/components/seo/SEOHead';
import { LocalBusinessSchema, ServiceSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Clock, Shield, MapPin, Phone, ArrowRight, Star, Award, CheckCircle } from 'lucide-react';

const SeddonMouldRemoval = () => {
  return (
    <>
      <LocationPageSEO
        suburb="Seddon"
        title="Professional Mould Removal Seddon | 1800 954 117 | Mould & Restoration Co."
        description="Expert mould removal services in Seddon 3011. Industrial heritage specialists, gentrified area expertise. 5.0 stars, 100+ Melbourne properties restored. Call 1800 954 117"
        keywords="mould removal seddon, seddon mould inspection, seddon industrial heritage, gentrification mould removal, seddon 3011"
        canonical="https://mouldrestoration.com.au/services/mould-removal-seddon"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        address="Seddon VIC 3011"
        phone="1800 954 117"
        email="info@mouldandrestoration.com.au"
        description="Professional mould removal services in Seddon. Industrial heritage and gentrified property specialists with 5+ years experience."
      />

      <ServiceSchema
        serviceName="Mould Removal Seddon"
        description="Expert mould removal and remediation services for Seddon properties, specialising in industrial heritage homes and gentrified area moisture management."
        areaServed="Seddon VIC 3011"
        provider="Mould & Restoration Co."
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-blue-200" />
              <span className="text-blue-100 font-medium">Seddon VIC 3011</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Professional Mould Removal Seddon
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Industrial heritage specialists with expert gentrified area mould solutions for Seddon's evolving properties
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
              Seddon Industrial Heritage Mould Expertise
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Seddon's transformation from industrial heartland to sought-after inner-west suburb creates unique mould challenges that require specialised understanding. With 5+ years serving Melbourne's gentrified areas and over 100 successful restorations, we navigate the complex needs of both heritage and modernised properties.
                </p>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  From original workers cottages near Victoria Street to contemporary renovations throughout the 3011 postcode area, we provide comprehensive mould solutions that respect Seddon's industrial heritage while meeting today's living standards and property values.
                </p>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our team recognises that Seddon properties often combine original industrial-era construction with modern renovations, requiring careful treatment that addresses both historical building methods and contemporary moisture management expectations in this rapidly evolving neighbourhood.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Industrial heritage expertise</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Gentrification-aware methods</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Modern renovation integration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Value preservation focus</span>
                  </div>
                </div>
              </div>

              <div className="bg-columbia p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-charcoal mb-6">Seddon Service Areas</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Victoria Street precinct</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Charles Grimes Bridge area</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Industrial heritage pockets</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Seddon railway station vicinity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Converted warehouse properties</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Renovated workers cottages</span>
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
              Seddon Property Types We Service
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-columbia rounded-full flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Industrial Heritage Homes</h3>
                  <p className="text-gray-700 mb-4">
                    Specialised treatment for Seddon's original industrial-era properties, including workers cottages and converted spaces, preserving historical character while addressing modern moisture challenges.
                  </p>
                  <ul className="space-y-2 text-sm text-professional">
                    <li>• Original brick preservation</li>
                    <li>• Industrial-era timber care</li>
                    <li>• Heritage ventilation systems</li>
                    <li>• Period-sensitive restoration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-6">
                    <MapPin className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Renovated Properties</h3>
                  <p className="text-gray-700 mb-4">
                    Comprehensive care for Seddon's many renovated and extended properties, managing moisture where heritage structures meet contemporary additions and modern living requirements.
                  </p>
                  <ul className="space-y-2 text-sm text-professional">
                    <li>• Extension integration expertise</li>
                    <li>• Modern-heritage transitions</li>
                    <li>• Value-preserving treatments</li>
                    <li>• Contemporary moisture systems</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Contemporary Developments</h3>
                  <p className="text-gray-700 mb-4">
                    Modern townhouses and apartments that complement Seddon's evolving character, with advanced moisture management systems and contemporary mould prevention technology.
                  </p>
                  <ul className="space-y-2 text-sm text-professional">
                    <li>• Modern building treatments</li>
                    <li>• Advanced ventilation systems</li>
                    <li>• Contemporary moisture control</li>
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
              Why Seddon Residents Choose Us
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-columbia rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-3">Gentrification-Aware Specialists</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our deep understanding of Seddon's transformation from industrial suburb to desirable inner-west location means we protect both heritage character and modern property values with every mould treatment we perform.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-3">Proven Inner-West Track Record</h3>
                    <p className="text-gray-700 leading-relaxed">
                      With over 100 successful property restorations across Melbourne and 5+ years of experience, we've helped numerous Seddon families protect their investments during the suburb's ongoing evolution.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-3">Heritage-Modern Integration</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We excel at managing moisture challenges where Seddon's industrial heritage meets contemporary renovations, ensuring seamless protection across different building eras and materials.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Get Your Free Seddon Inspection</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Every Seddon property is unique, especially with the blend of industrial heritage and modern improvements. Our inspection identifies all moisture risks while respecting your property's character and value.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Heritage-modern assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Value-preservation focus</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Renovation-aware planning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Investment protection methods</span>
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
              Mould Prevention Tips for Seddon Properties
            </h2>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Heritage Property Management</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Maintain original building ventilation systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Preserve industrial-era building materials properly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Monitor moisture in converted spaces</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Address drainage issues around heritage foundations</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Modern Integration Care</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Balance heritage preservation with modern comfort</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Manage moisture at old-new building interfaces</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Use contemporary systems without character compromise</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Schedule value-protecting professional assessments</span>
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
              Ready to Restore Your Seddon Property?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Don't let mould compromise your inner-west investment. Our Seddon specialists protect both heritage character and modern property values.
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

export default SeddonMouldRemoval;