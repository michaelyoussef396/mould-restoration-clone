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

const ChadstonePage = () => {
  return (
    <>
      <LocationPageSEO
        title="Professional Mould Removal Chadstone Melbourne | Mould & Restoration Co."
        description="Expert mould removal services in Chadstone Melbourne. 5+ years experience, 100+ properties restored. Call 1800 954 117 for professional mould inspection and remediation."
        suburb="Chadstone"
        canonical="https://mouldrestoration.com.au/services/mould-removal-chadstone"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co. - Chadstone"
        address="Chadstone VIC 3148"
        phoneNumber="1800 954 117"
        email="info@mouldrestorationco.com.au"
        description="Professional mould inspection and removal services in Chadstone, Melbourne"
        priceRange="$$"
        rating={5.0}
        reviewCount={50}
        businessHours="Mo,Tu,We,Th,Fr,Sa,Su 07:00-19:00"
        abn="47 683 089 652"
        geo={{
          latitude: -37.8856,
          longitude: 145.0936
        }}
      />

      <ServiceSchema
        serviceName="Mould Removal Chadstone Melbourne"
        description="Professional mould inspection and remediation services for Chadstone residents"
        provider="Mould & Restoration Co."
        areaServed="Chadstone VIC 3148"
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
                  Chadstone VIC 3148
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Professional Mould Removal
                <span className="block text-blue-600">Chadstone Melbourne</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Protecting Chadstone families with expert mould inspection and removal services. Specialising in shopping centre proximity properties, mixed residential developments, and modern family homes throughout the 3148 area.
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
                Local Mould Removal Experts in Chadstone
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our team understands Chadstone's unique position as home to Australia's largest shopping centre and the distinct challenges this creates for residential properties in the 3148 area.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Mould Removal Chadstone Melbourne Requires Local Knowledge
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Shopping Centre Microclimate Effects</h4>
                      <p className="text-gray-600">
                        Proximity to Chadstone Shopping Centre creates unique environmental conditions for nearby residential properties. Large car park surfaces, extensive air conditioning systems, and high pedestrian traffic can affect local humidity patterns and require specialized mould removal approaches.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Mixed Housing Development Challenges</h4>
                      <p className="text-gray-600">
                        Chadstone features a diverse mix of established 1960s homes, modern unit developments, and contemporary family properties. Each housing type presents distinct moisture management challenges requiring targeted mould removal Chadstone Melbourne solutions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Transport Hub Ventilation Issues</h4>
                      <p className="text-gray-600">
                        Properties near major transport links including Chadstone shopping centre buses and nearby train connections often experience increased air pollution and dust, which can contribute to indoor air quality issues that encourage mould growth.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Commercial-Residential Interface</h4>
                      <p className="text-gray-600">
                        The interface between residential areas and commercial developments creates unique drainage and airflow patterns. Our local expertise ensures effective mould treatment that considers these environmental factors specific to the Chadstone area.
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
                        <h3 className="text-xl font-bold text-gray-900">Chadstone Area Coverage</h3>
                        <p className="text-gray-600">VIC 3148 and surrounding suburbs</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Chadstone Shopping Centre Precinct</span>
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Warrigal Road Corridor</span>
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Pinewood Shopping Village Area</span>
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Holmesglen TAFE Vicinity</span>
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Chadstone Primary School Zone</span>
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Professional Service - Same-day Available 7am-7pm
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Available 7 days a week for urgent mould problems in Chadstone homes and nearby properties.
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
                Chadstone Property Types We Service
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional mould removal Chadstone Melbourne for every property type in this dynamic shopping and residential hub.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Shopping Centre Proximity Homes</h3>
                  <p className="text-gray-600 mb-4">
                    Properties within walking distance of Chadstone Shopping Centre face unique environmental challenges from heavy pedestrian traffic, extensive car parking areas, and modified local weather patterns. Our specialized approach addresses these commercial-residential interface issues.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Commercial microclimate assessment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Enhanced ventilation solutions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Air quality optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Unit Developments</h3>
                  <p className="text-gray-600 mb-4">
                    Chadstone's newer apartment complexes and unit developments often feature contemporary building materials and shared ventilation systems. These properties require specialized mould prevention strategies that account for high-density living and shared building infrastructure.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Shared ventilation system assessment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Body corporate coordination</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Common area mould prevention</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Established Family Homes</h3>
                  <p className="text-gray-600 mb-4">
                    Many Chadstone family homes date from the 1960s-1980s boom period when the shopping centre was first developed. These properties often feature period construction materials and may have been renovated multiple times, creating complex moisture management challenges.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Period construction assessment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Multi-era renovation integration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Original material preservation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Student and Young Professional Housing</h3>
                  <p className="text-gray-600 mb-4">
                    Properties near Holmesglen TAFE and convenient to public transport often house students and young professionals. Higher occupancy levels and busy lifestyles can increase moisture production, requiring proactive mould removal Chadstone Melbourne approaches.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>High-occupancy moisture management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Rental property compliance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Tenant education programs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Transport Corridor Properties</h3>
                  <p className="text-gray-600 mb-4">
                    Homes located along major transport routes including Warrigal Road and near bus interchange facilities may experience increased air pollution and dust infiltration, which can contribute to indoor air quality issues and mould susceptibility.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Air filtration system recommendations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Dust infiltration prevention</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Enhanced sealing strategies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Contemporary Townhouse Complexes</h3>
                  <p className="text-gray-600 mb-4">
                    Modern townhouse developments in Chadstone feature contemporary building standards but may face challenges from shared walls, limited natural ventilation, and landscaped common areas that can increase local humidity levels around individual properties.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Shared wall moisture assessment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Natural ventilation optimization</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Landscape drainage coordination</span>
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
                Why Choose Our Mould Removal Chadstone Melbourne Service?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Local expertise, proven results, and comprehensive solutions for Chadstone's diverse property types.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5+ Years Local Experience</h3>
                  <p className="text-gray-600">
                    Extensive experience with Chadstone's unique commercial-residential environment and diverse property types. We understand how the shopping centre's presence affects local residential properties and have developed specialized treatment approaches.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Assessment</h3>
                  <p className="text-gray-600">
                    Detailed inspection considering commercial proximity effects, mixed construction eras, and shared building systems. Our thorough approach identifies all potential mould growth factors specific to Chadstone properties.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Treatment Methods</h3>
                  <p className="text-gray-600">
                    State-of-the-art mould removal techniques suitable for modern unit complexes, established homes, and mixed-use environments. Our methods are effective while being safe for high-density residential areas.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Scheduling</h3>
                  <p className="text-gray-600">
                    Available 7am-7pm every day to work around busy schedules of Chadstone residents. We coordinate with building management for unit complexes and offer flexible timing for working families and students.
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
                    Consistently excellent results from satisfied customers across Melbourne's diverse property types. Our commitment to quality workmanship and professional service shows in every mould removal Chadstone Melbourne project.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial-Residential Expertise</h3>
                  <p className="text-gray-600">
                    Specialized knowledge of how commercial developments affect residential properties. We understand the unique environmental factors created by shopping centres, transport hubs, and mixed-use developments.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Card className="inline-block bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Protect Your Chadstone Property?
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Contact our mould removal experts today for a comprehensive inspection tailored to your property type and local conditions.
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
                Mould Prevention Tips for Chadstone Properties
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Protect your investment with these expert recommendations tailored for Chadstone's unique commercial-residential environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Shopping Centre Area Considerations
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Enhanced Air Filtration</h4>
                      <p className="text-gray-600">
                        Properties near the shopping centre benefit from upgraded air filtration systems to manage increased dust and pollutants from high traffic areas. Regular filter replacement is essential for maintaining indoor air quality.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Monitor Traffic-Related Humidity</h4>
                      <p className="text-gray-600">
                        Heavy pedestrian and vehicle traffic can affect local humidity patterns. Use hygrometers to monitor indoor humidity levels and ensure they stay below 60% to prevent mould growth in your Chadstone property.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Seal Against Pollution Infiltration</h4>
                      <p className="text-gray-600">
                        Ensure windows and doors are properly sealed to prevent dust and pollutants from entering your home. This is particularly important for properties facing major roads or car park areas around the shopping centre.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Mixed Housing Development Management
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Coordinate Unit Complex Maintenance</h4>
                      <p className="text-gray-600">
                        In apartment and unit developments, work with building management to ensure shared ventilation systems are properly maintained. Regular cleaning of common area exhaust systems prevents mould spores from circulating throughout the building.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Address Shared Wall Moisture</h4>
                      <p className="text-gray-600">
                        Monitor areas where your unit shares walls with neighbors, particularly around bathrooms and kitchens. Moisture issues in adjacent properties can affect your space, requiring coordinated mould removal Chadstone Melbourne approaches.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Optimize Modern Ventilation Systems</h4>
                      <p className="text-gray-600">
                        Contemporary properties often feature mechanical ventilation systems that require regular maintenance. Ensure heat recovery ventilators and bathroom exhaust fans are cleaned and operating efficiently to prevent moisture buildup.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Need Professional Mould Removal Chadstone Melbourne?
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Don't let mould problems affect your property value or family health. Contact our local experts for comprehensive inspection and treatment services tailored to Chadstone's unique environment.
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
              Protect Your Chadstone Property Today
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Expert mould removal Chadstone Melbourne services for shopping centre proximity properties, modern developments, and established homes throughout the 3148 area.
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

export default ChadstonePage;