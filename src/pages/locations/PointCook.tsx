import React from 'react';
import { LocationPageSEO } from '@/components/seo/SEOHead';
import { LocalBusinessSchema, ServiceSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Clock, Shield, MapPin, Phone, ArrowRight, Star, Award, CheckCircle } from 'lucide-react';

const PointCookMouldRemoval = () => {
  return (
    <>
      <LocationPageSEO
        suburb="Point Cook"
        title="Professional Mould Removal Point Cook | 1800 954 117 | Mould & Restoration Co."
        description="Expert mould removal services in Point Cook 3030. New estate specialists, modern family home expertise. 5.0 stars, 100+ Melbourne properties restored. Call 1800 954 117"
        keywords="mould removal point cook, point cook mould inspection, point cook estates, modern home mould removal, point cook 3030"
        canonical="https://mouldrestoration.com.au/services/mould-removal-point-cook"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co."
        address="Point Cook VIC 3030"
        phone="1800 954 117"
        email="info@mouldandrestoration.com.au"
        description="Professional mould removal services in Point Cook. New estate and modern family home specialists with 5+ years experience."
      />

      <ServiceSchema
        serviceName="Mould Removal Point Cook"
        description="Expert mould removal and remediation services for Point Cook properties, specialising in new estate homes and modern family moisture management."
        areaServed="Point Cook VIC 3030"
        provider="Mould & Restoration Co."
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-blue-200" />
              <span className="text-blue-100 font-medium">Point Cook VIC 3030</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Professional Mould Removal Point Cook
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              New estate specialists with expert modern family home mould solutions for Point Cook's growing communities
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
              Point Cook New Estate Mould Expertise
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Point Cook's reputation as Melbourne's premier new estate community brings unique mould challenges specific to contemporary construction and growing family neighbourhoods. With 5+ years serving Melbourne's development areas and over 100 successful restorations, we understand the moisture dynamics of modern estate living.
                </p>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  From brand new family homes in established estates to contemporary townhouses throughout the 3030 postcode area, we provide comprehensive mould solutions tailored to Point Cook's modern architecture and family-focused community lifestyle requirements.
                </p>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our team recognises that Point Cook properties, while modern, face specific challenges from new construction settlement, landscaping development, and the coastal influence from nearby Port Phillip Bay. We've successfully protected everything from display homes to established family properties.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-gray-700">New estate expertise</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Modern construction specialists</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Family-focused solutions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Coastal influence management</span>
                  </div>
                </div>
              </div>

              <div className="bg-columbia p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-charcoal mb-6">Point Cook Service Areas</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Saltwater Coast estates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Point Cook Central precinct</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Boardwalk Boulevard vicinity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Featherbrook estate areas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Town Centre surrounds</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">Coastal park proximities</span>
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
              Point Cook Property Types We Service
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-columbia rounded-full flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Modern Family Homes</h3>
                  <p className="text-gray-700 mb-4">
                    Comprehensive treatment for Point Cook's contemporary family homes, addressing new construction moisture dynamics, landscaping impacts, and modern building material considerations.
                  </p>
                  <ul className="space-y-2 text-sm text-professional">
                    <li>• New construction expertise</li>
                    <li>• Modern material treatments</li>
                    <li>• Family-safe methodologies</li>
                    <li>• Landscaping moisture management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-6">
                    <MapPin className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Estate Townhouses</h3>
                  <p className="text-gray-700 mb-4">
                    Specialised moisture control for Point Cook's popular townhouse developments, managing shared wall considerations, estate drainage, and community living environmental factors.
                  </p>
                  <ul className="space-y-2 text-sm text-professional">
                    <li>• Townhouse-specific solutions</li>
                    <li>• Shared wall considerations</li>
                    <li>• Estate drainage expertise</li>
                    <li>• Community-conscious methods</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Coastal Proximity Properties</h3>
                  <p className="text-gray-700 mb-4">
                    Advanced moisture management for homes near Point Cook's coastal areas, addressing saltwater influence, elevated humidity, and weather pattern variations from Port Phillip Bay proximity.
                  </p>
                  <ul className="space-y-2 text-sm text-professional">
                    <li>• Coastal environment expertise</li>
                    <li>• Saltwater influence mitigation</li>
                    <li>• Weather pattern adaptation</li>
                    <li>• Bay proximity solutions</li>
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
              Why Point Cook Families Choose Us
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-columbia rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-3">New Estate Specialists</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our extensive experience with Point Cook's modern estate developments means we understand the unique challenges of new construction, from building settlement moisture to landscaping establishment impacts on your family home.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-3">Proven Family-Focused Track Record</h3>
                    <p className="text-gray-700 leading-relaxed">
                      With over 100 successful property restorations across Melbourne and 5+ years of experience, we've helped numerous Point Cook families protect their new home investments with child-safe, effective treatments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-3">Coastal Environment Expertise</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We've mastered moisture management in Point Cook's unique coastal-influenced environment, protecting your modern home from the elevated humidity and weather patterns that come with Port Phillip Bay proximity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Get Your Free Point Cook Inspection</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Every Point Cook home is a significant family investment. Our comprehensive inspection identifies all moisture risks while protecting your property value and family health in this coastal-influenced environment.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">New construction assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Coastal environment evaluation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Family-safe treatment planning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-50">Estate-aware prevention strategies</span>
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
              Mould Prevention Tips for Point Cook Properties
            </h2>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">New Estate Property Care</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Monitor building settlement and resulting moisture changes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Maintain new landscaping drainage away from foundations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Ensure modern ventilation systems operate effectively</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Address any construction warranty moisture issues promptly</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Coastal Environment Management</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Manage elevated humidity from Port Phillip Bay proximity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Use dehumidifiers during high coastal humidity periods</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Consider saltwater influence on exterior surfaces</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Schedule regular professional inspections for estate properties</span>
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
              Ready to Protect Your Point Cook Family Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Don't let mould compromise your family's health or your property investment. Our Point Cook specialists provide modern solutions for contemporary homes.
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

export default PointCookMouldRemoval;