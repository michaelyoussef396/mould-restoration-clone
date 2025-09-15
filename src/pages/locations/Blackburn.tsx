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

const BlackburnPage = () => {
  return (
    <>
      <LocationPageSEO
        title="Professional Mould Removal Blackburn Melbourne | Mould & Restoration Co."
        description="Expert mould removal services in Blackburn Melbourne. 5+ years experience, 100+ properties restored. Call 1800 954 117 for professional mould inspection and remediation."
        suburb="Blackburn"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co. - Blackburn"
        address="Blackburn VIC 3130"
        phoneNumber="1800 954 117"
        email="info@mouldrestorationco.com.au"
        description="Professional mould inspection and removal services in Blackburn, Melbourne"
        priceRange="$$"
        rating={5.0}
        reviewCount={50}
        businessHours="Mo,Tu,We,Th,Fr,Sa,Su 07:00-19:00"
        abn="47 683 089 652"
        geo={{
          latitude: -37.8161,
          longitude: 145.1461
        }}
      />

      <ServiceSchema
        serviceName="Mould Removal Blackburn Melbourne"
        description="Professional mould inspection and remediation services for Blackburn residents"
        provider="Mould & Restoration Co."
        areaServed="Blackburn VIC 3130"
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
                  Blackburn VIC 3130
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Professional Mould Removal
                <span className="block text-blue-600">Blackburn Melbourne</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Protecting Blackburn's established families with expert mould inspection and removal services. Specialising in period homes, established properties, and train line corridor residences throughout the 3130 area.
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
                Local Mould Removal Experts in Blackburn
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our team understands Blackburn's character as an established family suburb with period architecture and the unique challenges facing these heritage properties.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Mould Removal Blackburn Melbourne Requires Heritage Expertise
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Period Home Architecture Preservation</h4>
                      <p className="text-gray-600">
                        Blackburn's collection of period homes from the early-mid 20th century requires specialized mould treatment approaches that preserve original architectural features while addressing modern moisture management needs. Our expertise protects heritage value while ensuring healthy living environments.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Established Family Community Needs</h4>
                      <p className="text-gray-600">
                        Blackburn's stable, established families have often lived in their homes for decades, making significant investments in renovations and extensions. Our mould removal Blackburn Melbourne services protect these long-term family investments while maintaining the suburb's cherished character.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Train Line Environmental Factors</h4>
                      <p className="text-gray-600">
                        Properties near Blackburn Railway Station and the Belgrave/Lilydale line face unique environmental challenges from transport infrastructure. Train vibrations, modified drainage patterns, and air circulation changes require specialized knowledge for effective mould prevention and treatment.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Mature Garden District Character</h4>
                      <p className="text-gray-600">
                        Blackburn's established tree-lined streets and mature gardens create beautiful but moisture-sensitive environments. Large native trees, extensive landscaping, and established drainage systems can affect residential moisture levels requiring expert understanding of local conditions.
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
                        <h3 className="text-xl font-bold text-gray-900">Blackburn Area Coverage</h3>
                        <p className="text-gray-600">VIC 3130 and surrounding suburbs</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Blackburn Railway Station Area</span>
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Canterbury Road Commercial Strip</span>
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Blackburn Primary School Vicinity</span>
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Blackburn Lake Sanctuary Area</span>
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Whitehorse Road Corridor</span>
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
                      Available 7 days a week for urgent mould problems in Blackburn period homes and established properties.
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
                Blackburn Property Types We Service
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional mould removal Blackburn Melbourne for every property type in this established heritage suburb.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Heritage Period Homes</h3>
                  <p className="text-gray-600 mb-4">
                    Blackburn's charming period homes from the 1920s-1950s feature original architectural details that require careful preservation during mould treatment. These properties often have original timber framing, period plasterwork, and heritage fixtures that need specialized restoration approaches.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Heritage detail preservation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Original material conservation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Period-appropriate treatment methods</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Established Family Renovations</h3>
                  <p className="text-gray-600 mb-4">
                    Many Blackburn families have extensively renovated their period homes over decades, creating complex properties where original features meet modern additions. These multi-era homes require expert mould removal that addresses both heritage and contemporary construction elements.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Multi-era construction integration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Heritage-modern junction treatment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Complex ventilation system coordination</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Train Line Corridor Properties</h3>
                  <p className="text-gray-600 mb-4">
                    Homes near Blackburn Railway Station and the Belgrave/Lilydale train lines face unique environmental challenges from transport infrastructure. Railway proximity affects drainage, vibration impacts, and air circulation patterns requiring specialized mould removal Blackburn Melbourne expertise.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Transport vibration impact assessment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Modified drainage pattern management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Air circulation optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Mature Garden Estate Properties</h3>
                  <p className="text-gray-600 mb-4">
                    Blackburn's tree-lined streets feature established properties with mature gardens, extensive landscaping, and decades of careful cultivation. These beautiful settings can create moisture challenges from large canopies, irrigation systems, and established drainage patterns.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Mature canopy moisture interaction</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Established drainage system assessment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Garden-building interface optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Long-Term Family Residences</h3>
                  <p className="text-gray-600 mb-4">
                    Many Blackburn families have lived in their homes for generations, creating properties with decades of modifications, improvements, and memories. These treasured family homes require respectful mould treatment that preserves both structural integrity and sentimental value.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Family heritage preservation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Generational modification integration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Respectful treatment approaches</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Sanctuary and Parkland Adjacent Homes</h3>
                  <p className="text-gray-600 mb-4">
                    Properties near Blackburn Lake Sanctuary and local parklands enjoy beautiful natural settings but may face unique moisture challenges from nearby water features, dense vegetation, and natural humidity variations created by large green spaces.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Natural water feature impact analysis</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Parkland microclimate management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Natural humidity variation accommodation</span>
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
                Why Choose Our Mould Removal Blackburn Melbourne Service?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Heritage expertise, family-focused care, and comprehensive solutions for Blackburn's established community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5+ Years Heritage Property Experience</h3>
                  <p className="text-gray-600">
                    Extensive experience working with Blackburn's period homes and heritage properties. We understand the delicate balance required to treat mould while preserving original architectural features and maintaining the character that makes these homes special.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Established Family Understanding</h3>
                  <p className="text-gray-600">
                    Deep appreciation for the emotional and financial investment Blackburn families have in their long-term homes. Our respectful approach protects both the property's integrity and the family's connection to their cherished residence.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Heritage-Safe Treatment Methods</h3>
                  <p className="text-gray-600">
                    Specialized mould removal techniques designed for period properties and heritage materials. Our methods are effective against all mould types while being gentle on original timber, plaster, and other heritage building materials.
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
                    Available 7am-7pm every day with scheduling that respects established family routines and the importance of maintaining normal life in long-term family homes. Minimal disruption to cherished family spaces.
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
                    Consistently excellent results from satisfied Blackburn families who trust us with their heritage properties. Our commitment to preserving family homes while ensuring healthy living shows in every mould removal Blackburn Melbourne project.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Local Transport Corridor Knowledge</h3>
                  <p className="text-gray-600">
                    Specialized understanding of how railway infrastructure affects residential properties. We know the unique challenges facing homes near train lines and have developed effective strategies for transport-adjacent properties.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Card className="inline-block bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Protect Your Blackburn Heritage Home?
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Contact our heritage property experts today for comprehensive mould inspection and treatment that respects your family's investment and home's character.
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
                Mould Prevention Tips for Blackburn Heritage Homes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Protect your family heritage property with these expert recommendations tailored for Blackburn's period homes and established community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Heritage Property Preservation
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Protect Original Building Materials</h4>
                      <p className="text-gray-600">
                        Period homes feature original timber framing, lath and plaster walls, and heritage fixtures that require careful moisture management. Monitor original materials for signs of moisture damage and address issues promptly to preserve heritage value.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Heritage-Appropriate Ventilation Upgrades</h4>
                      <p className="text-gray-600">
                        Improve ventilation in period homes without compromising character features. Install discrete exhaust fans in bathrooms and kitchens, and consider heritage-sensitive whole-house ventilation solutions to prevent mould removal Blackburn Melbourne needs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Multi-Generation Renovation Integration</h4>
                      <p className="text-gray-600">
                        When adding modern amenities to heritage properties, ensure proper integration between old and new construction. Seal gaps between different eras of building work and maintain consistent moisture barriers throughout the property.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Established Family Home Management
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Train Line Proximity Considerations</h4>
                      <p className="text-gray-600">
                        Properties near railway lines should monitor for vibration-related structural movement that can affect seals and ventilation systems. Regular maintenance of building seals prevents moisture entry that could lead to mould problems.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Mature Garden Drainage Management</h4>
                      <p className="text-gray-600">
                        Blackburn's established gardens are beautiful but require careful drainage management. Ensure mature trees don't compromise foundation drainage, and maintain clear gutters free from leaf buildup to prevent water damage and moisture issues.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Sanctuary Area Humidity Monitoring</h4>
                      <p className="text-gray-600">
                        Properties near Blackburn Lake Sanctuary may experience higher natural humidity levels from nearby water features and dense vegetation. Monitor indoor humidity and use dehumidifiers during high-humidity periods to maintain healthy levels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Need Professional Mould Removal Blackburn Melbourne?
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Don't risk your family heritage home with inexperienced treatment. Contact our period property specialists for comprehensive inspection and respectful mould removal that preserves your home's character.
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
              Protect Your Blackburn Heritage Today
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Expert mould removal Blackburn Melbourne services for heritage homes, established families, and period properties throughout the 3130 area.
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

export default BlackburnPage;