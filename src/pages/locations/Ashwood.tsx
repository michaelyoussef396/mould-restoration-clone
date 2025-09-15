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

const AshwoodPage = () => {
  return (
    <>
      <LocationPageSEO
        title="Professional Mould Removal Ashwood Melbourne | Mould & Restoration Co."
        description="Expert mould removal services in Ashwood Melbourne. 5+ years experience, 100+ properties restored. Call 1800 954 117 for professional mould inspection and remediation."
        suburb="Ashwood"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co. - Ashwood"
        address="Ashwood VIC 3147"
        phoneNumber="1800 954 117"
        email="info@mouldrestorationco.com.au"
        description="Professional mould inspection and removal services in Ashwood, Melbourne"
        priceRange="$$"
        rating={5.0}
        reviewCount={50}
        businessHours="Mo,Tu,We,Th,Fr,Sa,Su 07:00-19:00"
        abn="47 683 089 652"
        geo={{
          latitude: -37.8668,
          longitude: 145.0951
        }}
      />

      <ServiceSchema
        serviceName="Mould Removal Ashwood Melbourne"
        description="Professional mould inspection and remediation services for Ashwood residents"
        provider="Mould & Restoration Co."
        areaServed="Ashwood VIC 3147"
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
                  Ashwood VIC 3147
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Professional Mould Removal
                <span className="block text-blue-600">Ashwood Melbourne</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Protecting Ashwood's quiet residential families with expert mould inspection and removal services. Specialising in post-war homes and established family properties throughout the 3147 area.
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
                Local Mould Removal Experts in Ashwood
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our team understands Ashwood's unique residential character and the specific challenges facing post-war homes and established family properties in the 3147 area.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Mould Removal Ashwood Melbourne Requires Local Knowledge
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Post-War Housing Challenges</h4>
                      <p className="text-gray-600">
                        Many Ashwood homes date from the 1940s-1960s era, featuring original building materials and construction methods that require specialised mould removal techniques. Our team understands timber framing, original plaster walls, and period ventilation systems.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Established Garden Districts</h4>
                      <p className="text-gray-600">
                        Ashwood's mature tree canopy and established gardens create microclimates around homes. Large native trees and dense foliage can reduce natural airflow and increase humidity levels, particularly affecting properties near Gardiner Creek and surrounding parklands.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Family Home Renovations</h4>
                      <p className="text-gray-600">
                        Many Ashwood families have extended and renovated their post-war homes over decades. Additions, ensuite bathrooms, and modern kitchens in older structures can create moisture problems if not properly ventilated during mould removal Ashwood Melbourne services.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Quiet Residential Character</h4>
                      <p className="text-gray-600">
                        We respect Ashwood's peaceful family atmosphere, conducting mould inspections and treatments with minimal disruption to neighbours. Our discrete service approach maintains the suburb's quiet residential charm while ensuring thorough mould remediation.
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
                        <h3 className="text-xl font-bold text-gray-900">Ashwood Area Coverage</h3>
                        <p className="text-gray-600">VIC 3147 and surrounding suburbs</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-700">High Street Commercial Area</span>
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Ashwood College Precinct</span>
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Gardiner Creek Reserve</span>
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Warner Avenue Shopping</span>
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Warrigal Road Corridor</span>
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
                      Available 7 days a week for urgent mould problems in Ashwood homes.
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
                Ashwood Property Types We Service
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional mould removal Ashwood Melbourne for every property type in this established family suburb.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Post-War Family Homes</h3>
                  <p className="text-gray-600 mb-4">
                    Ashwood's characteristic 1940s-1960s brick veneer homes require specialised mould treatment approaches. Original construction materials, solid fuel heating remnants, and period ventilation systems need expert assessment and careful remediation.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Original timber framing assessment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Period plaster wall treatment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Ventilation system upgrade advice</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Extended Family Properties</h3>
                  <p className="text-gray-600 mb-4">
                    Many Ashwood homes have been thoughtfully extended by growing families. Additions from different eras, extra bathrooms, and modern kitchens added to period homes can create unique moisture challenges requiring comprehensive mould removal solutions.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Multi-era construction assessment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Addition and extension treatment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Moisture bridge identification</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Corner Block Properties</h3>
                  <p className="text-gray-600 mb-4">
                    Ashwood's tree-lined streets feature many prominent corner properties with established gardens. These homes often face unique challenges from dual-aspect weather exposure and mature landscaping affecting drainage and airflow patterns around the property.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Dual exposure assessment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Garden drainage impact analysis</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Mature tree root system consideration</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Renovated Period Homes</h3>
                  <p className="text-gray-600 mb-4">
                    Ashwood families often invest in substantial renovations to their established homes. Modern amenities integrated with period architecture can create moisture challenges where old and new construction methods meet, requiring expert mould removal Ashwood Melbourne services.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Period-modern integration assessment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Updated bathroom ventilation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Kitchen extension moisture control</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Garden Apartment Complexes</h3>
                  <p className="text-gray-600 mb-4">
                    Ashwood's quieter residential areas include some well-established garden apartment developments. These properties often feature shared walls, common areas, and established landscaping that can affect moisture levels and require coordinated mould management approaches.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Shared wall moisture assessment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Common area consultation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Strata-friendly treatment plans</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">School District Properties</h3>
                  <p className="text-gray-600 mb-4">
                    Properties near Ashwood College and local primary schools often house busy families with active lifestyles. Higher occupancy levels, sports equipment storage, and frequent use of bathrooms and laundries can increase moisture levels requiring proactive mould prevention.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>High-occupancy moisture management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Sports equipment storage solutions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Family bathroom optimization</span>
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
                Why Choose Our Mould Removal Ashwood Melbourne Service?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Local expertise, proven results, and comprehensive solutions for Ashwood families.
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
                    Extensive experience with Ashwood's post-war housing stock and family home renovation challenges. We understand the unique characteristics of 3147 area properties and have successfully treated over 100 properties across Melbourne's eastern suburbs.
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
                    Detailed inspection of post-war construction methods, period materials, and modern additions. Our thorough approach identifies all moisture sources and potential mould growth areas in Ashwood's diverse housing stock.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Family-Safe Methods</h3>
                  <p className="text-gray-600">
                    Eco-friendly, family-safe mould removal techniques perfect for Ashwood's family-focused community. Our treatments are safe around children, pets, and elderly residents while being completely effective against all mould types.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">7am-7pm Every Day</h3>
                  <p className="text-gray-600">
                    Flexible scheduling that works around busy family schedules and school routines. Professional service available for urgent mould problems that can't wait. We respect Ashwood's quiet residential character.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5.0/5 Star Rating</h3>
                  <p className="text-gray-600">
                    Consistently excellent results have earned us perfect ratings from satisfied customers across Melbourne. Our commitment to quality workmanship and professional service shows in every mould removal Ashwood Melbourne project.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Local Knowledge</h3>
                  <p className="text-gray-600">
                    Deep understanding of Ashwood's established character, post-war housing challenges, and local climate factors. We know how mature gardens, creek proximity, and suburb-specific weather patterns affect mould growth.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Card className="inline-block bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Protect Your Ashwood Family Home?
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Contact our mould removal experts today for a comprehensive inspection and personalised treatment plan.
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
                Mould Prevention Tips for Ashwood Homes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Protect your family with these expert recommendations tailored for Ashwood's established housing and local climate conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Post-War Home Maintenance
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Inspect Original Timber Framing</h4>
                      <p className="text-gray-600">
                        Check your home's original timber framing for signs of moisture damage, particularly around foundation areas and where additions meet the original structure. Post-war Ashwood homes may have aging timber that needs attention.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Update Period Ventilation Systems</h4>
                      <p className="text-gray-600">
                        Consider upgrading original ventilation with modern exhaust fans in bathrooms and laundries. Many Ashwood homes retain original ventilation that may not meet current moisture control standards.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Monitor Extension Connections</h4>
                      <p className="text-gray-600">
                        Pay special attention to where modern additions connect to original post-war structures. These junction points can develop moisture problems if not properly maintained and sealed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Established Garden Management
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Manage Mature Tree Canopy</h4>
                      <p className="text-gray-600">
                        Trim large trees to ensure adequate sunlight reaches your home and air can circulate freely. Ashwood's established gardens are beautiful but can create damp conditions if not properly maintained.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Maintain Proper Drainage</h4>
                      <p className="text-gray-600">
                        Ensure gutters and downpipes direct water away from your home's foundation. Check that established garden beds don't slope towards the house, particularly important in Ashwood's hilly terrain.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Monitor Creek Proximity Effects</h4>
                      <p className="text-gray-600">
                        Properties near Gardiner Creek should pay extra attention to foundation moisture and basement areas. The creek's influence on local humidity levels requires proactive mould prevention measures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Need Professional Mould Removal Ashwood Melbourne?
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Don't let mould problems escalate in your family home. Contact our local experts for comprehensive inspection and treatment services tailored to Ashwood properties.
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
              Protect Your Ashwood Family Home Today
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Expert mould removal Ashwood Melbourne services for post-war homes, family properties, and established residences throughout the 3147 area.
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

export default AshwoodPage;