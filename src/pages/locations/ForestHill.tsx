import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";
import {
  Clock,
  Shield,
  MapPin,
  Phone,
  ArrowRight,
  Star,
  Award,
  CheckCircle,
} from "lucide-react";

const ForestHillPage = () => {
  return (
    <>
      <LocationPageSEO
        title="Professional Mould Removal Forest Hill Melbourne | Mould & Restoration Co."
        description="Expert mould removal services in Forest Hill Melbourne. 5+ years experience, 100+ properties restored. Call 1800 954 117 for professional mould inspection and remediation."
        suburb="Forest Hill"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co. - Forest Hill"
        address="Forest Hill VIC 3131"
        phoneNumber="1800 954 117"
        email="info@mouldrestorationco.com.au"
        description="Professional mould inspection and removal services in Forest Hill, Melbourne"
        priceRange="$$"
        rating={5.0}
        reviewCount={50}
        businessHours="Mo,Tu,We,Th,Fr,Sa,Su 07:00-19:00"
        abn="47 683 089 652"
        geo={{
          latitude: -37.8334,
          longitude: 145.1782
        }}
      />

      <ServiceSchema
        serviceName="Mould Removal Forest Hill Melbourne"
        description="Professional mould inspection and remediation services for Forest Hill residents"
        provider="Mould & Restoration Co."
        areaServed="Forest Hill VIC 3131"
        serviceType="MouldRemovalService"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-50 to-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <MapPin className="h-6 w-6 text-blue-600" />
                <span className="text-lg font-medium text-gray-600">
                  Forest Hill VIC 3131
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Professional Mould Removal
                <span className="block text-blue-600">Forest Hill Melbourne</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Protecting Forest Hill's quiet residential families with expert mould inspection and removal services. Specialising in Whitehorse area properties, family residential developments, and established suburban homes throughout the 3131 area.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 1800 954 117
                </Button>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">5.0/5 from 50+ reviews</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-gray-700">5+ Years Experience</span>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-gray-700">100+ Properties Restored</span>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-gray-700">7am-7pm Every Day</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Local Expertise Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Local Mould Removal Experts in Forest Hill
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our team understands Forest Hill's character as a quiet residential suburb within the Whitehorse area and the specific needs of this family-focused community.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Mould Removal Forest Hill Melbourne Requires Residential Expertise
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Quiet Residential Character Protection</h4>
                      <p className="text-gray-600">
                        Forest Hill's peaceful residential environment requires mould removal services that respect the suburb's quiet character. Our discreet, professional approach ensures minimal disruption to neighbors while providing thorough mould treatment for family homes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Whitehorse Area Family Needs</h4>
                      <p className="text-gray-600">
                        Forest Hill families within the Whitehorse municipality value stability, safety, and community wellbeing. Our mould removal Forest Hill Melbourne services prioritize family health while maintaining the comfortable suburban lifestyle that attracts families to this area.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Established Suburban Development Challenges</h4>
                      <p className="text-gray-600">
                        Properties in Forest Hill's established residential developments from different eras face varying moisture management challenges. Our expertise covers everything from post-war homes to contemporary subdivisions, addressing each property's unique mould prevention needs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Natural Environment Integration</h4>
                      <p className="text-gray-600">
                        Forest Hill's leafy suburban streets and natural vegetation create beautiful living environments that can also affect local humidity patterns. Our team understands how established gardens, mature trees, and natural drainage affect residential moisture levels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <MapPin className="h-8 w-8 text-blue-600" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Forest Hill Area Coverage</h3>
                        <p className="text-gray-600">VIC 3131 and surrounding suburbs</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Canterbury Gardens Area</span>
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Forest Hill College Vicinity</span>
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Canterbury Road Corridor</span>
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Whitehorse Road Access Area</span>
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Forest Hill Shopping Precinct</span>
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Emergency Mould Response
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Available 7 days a week for urgent mould problems in Forest Hill family homes and residential properties.
                    </p>
                    <Button variant="outline" className="w-full border-green-600 text-green-700 hover:bg-green-600 hover:text-white">
                      <Phone className="mr-2 h-4 w-4" />
                      Call 1800 954 117 Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Property Types Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Forest Hill Property Types We Service
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional mould removal Forest Hill Melbourne for every property type in this quiet residential Whitehorse suburb.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Quiet Family Residences</h3>
                  <p className="text-gray-600 mb-4">
                    Forest Hill's signature quiet family homes create peaceful residential environments perfect for growing families. These properties often feature family-focused layouts, multiple bedrooms, and established gardens requiring careful moisture management to maintain healthy family living spaces.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Family-focused moisture management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Peaceful environment preservation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Child-safe treatment protocols</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Whitehorse Municipality Properties</h3>
                  <p className="text-gray-600 mb-4">
                    Properties within the Whitehorse area benefit from well-maintained infrastructure and family-focused community services. These homes often feature established construction with good access to schools, parks, and community facilities requiring comprehensive mould removal Forest Hill Melbourne services.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Municipal standard compliance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Community-focused treatment approaches</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Infrastructure integration assessment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">School Proximity Family Homes</h3>
                  <p className="text-gray-600 mb-4">
                    Properties near Forest Hill College and local primary schools attract families seeking quality education options. These homes often accommodate busy school schedules, after-school activities, and family study areas that can create specific moisture management challenges.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>School schedule accommodation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Study area moisture optimization</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Family activity moisture control</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Established Garden Properties</h3>
                  <p className="text-gray-600 mb-4">
                    Forest Hill's leafy suburban character includes many properties with mature, established gardens and landscaping. These beautiful residential settings can create moisture challenges from extensive irrigation, tree canopies, and sophisticated outdoor living areas.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Garden moisture interaction assessment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Landscape drainage optimization</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Tree canopy humidity management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Generational Residential Properties</h3>
                  <p className="text-gray-600 mb-4">
                    Forest Hill's stable community attracts families who remain in the area across generations, creating homes that accommodate changing family needs over time. These properties may have undergone multiple renovations and extensions requiring comprehensive moisture management.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Multi-generation needs accommodation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Long-term family home optimization</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Progressive renovation integration</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Contemporary Suburban Developments</h3>
                  <p className="text-gray-600 mb-4">
                    Newer residential developments in Forest Hill feature contemporary construction standards and modern family amenities. These properties incorporate current building codes and modern ventilation systems but may still face moisture challenges from busy family lifestyles.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Contemporary building standard expertise</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Modern family lifestyle accommodation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Current code compliance verification</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Mould Removal Forest Hill Melbourne Service?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Residential expertise, family-focused care, and comprehensive solutions for Forest Hill's quiet community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5+ Years Residential Community Experience</h3>
                  <p className="text-gray-600">
                    Extensive experience working in quiet residential suburbs like Forest Hill where family comfort and community peace are priorities. We understand the importance of discreet, professional service that respects neighborhood character.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Family-Centered Service Approach</h3>
                  <p className="text-gray-600">
                    Understanding that Forest Hill families prioritize safety, comfort, and minimal disruption to daily routines. Our mould removal services are designed to protect family health while maintaining the peaceful suburban lifestyle families choose.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Quiet Residential Treatment Methods</h3>
                  <p className="text-gray-600">
                    Specialized mould removal techniques that respect Forest Hill's quiet character. Our methods are highly effective while minimizing noise, disruption, and impact on neighboring properties and community tranquility.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Respectful Family Scheduling</h3>
                  <p className="text-gray-600">
                    Available 7am-7pm every day with scheduling that respects family routines, school schedules, and the quiet residential character of Forest Hill. Flexible appointment times that work around busy family commitments.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5.0/5 Star Rating</h3>
                  <p className="text-gray-600">
                    Consistently excellent results from satisfied Forest Hill families who value quality service and community respect. Our commitment to family health and community consideration shows in every mould removal Forest Hill Melbourne project.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Whitehorse Area Knowledge</h3>
                  <p className="text-gray-600">
                    Local understanding of Whitehorse municipality standards, community expectations, and the specific environmental factors affecting residential properties in this well-established suburban area.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Card className="inline-block bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Protect Your Forest Hill Family Home?
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Contact our residential community experts today for comprehensive mould inspection and treatment that respects your family and neighborhood.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                      <Phone className="mr-2 h-5 w-5" />
                      Call 1800 954 117
                    </Button>
                    <p className="text-sm text-gray-600">
                      ABN 47 683 089 652 | Available 7am-7pm Every Day
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Prevention Tips Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mould Prevention Tips for Forest Hill Homes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Protect your quiet family residence with these expert recommendations tailored for Forest Hill's suburban lifestyle and Whitehorse area conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Residential Family Home Management
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Family Activity Moisture Management</h4>
                      <p className="text-gray-600">
                        Forest Hill's family-focused homes generate moisture from daily activities including multiple showers, homework areas, and family meal preparation. Ensure bathroom exhaust fans run adequately after use and maintain good ventilation in study and living areas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Quiet Ventilation Solutions</h4>
                      <p className="text-gray-600">
                        Choose ventilation systems that maintain Forest Hill's peaceful character while effectively managing indoor humidity. Consider quiet-operation exhaust fans and natural ventilation strategies that don't disturb the neighborhood's tranquil atmosphere.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Multi-Generational Home Considerations</h4>
                      <p className="text-gray-600">
                        Homes accommodating multiple generations or extended family visits need enhanced moisture management. Ensure guest areas, additional bathrooms, and expanded living spaces have adequate ventilation to prevent mould removal Forest Hill Melbourne needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Suburban Environment Optimization
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Established Garden Drainage Management</h4>
                      <p className="text-gray-600">
                        Forest Hill's leafy suburban character requires careful attention to garden drainage and mature tree management. Ensure established landscaping doesn't compromise building drainage, and maintain clear pathways for water runoff from roof and garden areas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">School Schedule Coordination</h4>
                      <p className="text-gray-600">
                        Plan maintenance and ventilation routines around busy school schedules and family activities. Morning and evening moisture management is particularly important during school terms when bathroom and kitchen use peaks around family routines.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Community-Conscious Maintenance</h4>
                      <p className="text-gray-600">
                        Maintain your property in ways that respect Forest Hill's community character. Schedule maintenance activities considerately, maintain property drainage that doesn't affect neighbors, and choose solutions that enhance rather than detract from neighborhood appeal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Need Professional Mould Removal Forest Hill Melbourne?
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Don't let mould problems disrupt your peaceful family life. Contact our residential community experts for comprehensive inspection and treatment that respects your home and neighborhood character.
                </p>
                <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 1800 954 117 Today
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Protect Your Forest Hill Family Today
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Expert mould removal Forest Hill Melbourne services for quiet residential properties, family homes, and Whitehorse area developments throughout the 3131 area.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold bg-white text-blue-600 hover:bg-blue-50">
                <Phone className="mr-2 h-5 w-5" />
                Call 1800 954 117
              </Button>
              <div className="text-blue-100">
                <p className="font-medium">Available 7am-7pm Every Day</p>
                <p className="text-sm">ABN 47 683 089 652</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForestHillPage;