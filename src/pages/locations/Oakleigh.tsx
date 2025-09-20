import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LocationPageSEO, LocalBusinessSchema, ServiceSchema } from "@/components/seo";
import { StrategicLocationLinks } from "@/components/seo/InternalLinking";
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

const OakleighPage = () => {
  return (
    <>
      <LocationPageSEO
        title="Professional Mould Removal Oakleigh Melbourne | Mould & Restoration Co."
        description="Expert mould removal services in Oakleigh Melbourne. 5+ years experience, 100+ properties restored. Call 1800 954 117 for professional mould inspection and remediation."
        suburb="Oakleigh"
        canonical="https://mouldrestoration.com.au/services/mould-removal-oakleigh"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co. - Oakleigh"
        address="Oakleigh VIC 3166"
        phoneNumber="1800 954 117"
        email="info@mouldrestorationco.com.au"
        description="Professional mould inspection and removal services in Oakleigh, Melbourne"
        priceRange="$$"
        rating={5.0}
        reviewCount={50}
        businessHours="Mo,Tu,We,Th,Fr,Sa,Su 07:00-19:00"
        abn="47 683 089 652"
        geo={{
          latitude: -37.8997,
          longitude: 145.0888
        }}
      />

      <ServiceSchema
        serviceName="Mould Removal Oakleigh Melbourne"
        description="Professional mould inspection and remediation services for Oakleigh residents"
        provider="Mould & Restoration Co."
        areaServed="Oakleigh VIC 3166"
        serviceType="MouldRemovalService"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-50 to-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="text-lg font-medium text-professional">
                  Oakleigh VIC 3166
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
                Professional Mould Removal
                <span className="block text-primary">Oakleigh Melbourne</span>
              </h1>
              <p className="text-xl text-professional mb-8 max-w-3xl mx-auto">
                Protecting Oakleigh's Greek community and established families with expert mould inspection and removal services. Specialising in heritage homes, established properties, and train line corridor residential areas throughout the 3166 area.
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
                  <span className="text-professional font-medium">5.0/5 from 50+ reviews</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-medium text-gray-700">5+ Years Experience</span>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="font-medium text-gray-700">100+ Properties Restored</span>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
                  <Clock className="h-5 w-5 text-primary" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Local Mould Removal Experts in Oakleigh
              </h2>
              <p className="text-xl text-professional max-w-3xl mx-auto">
                Our team understands Oakleigh's rich Greek heritage and established community character, along with the specific challenges facing properties in this culturally vibrant suburb.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-6">
                  Why Mould Removal Oakleigh Melbourne Requires Cultural Sensitivity
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Heritage Mediterranean Architecture</h4>
                      <p className="text-professional">
                        Many Oakleigh homes reflect the suburb's strong Greek heritage with Mediterranean-style architecture from the post-war immigration period. These properties often feature unique construction materials and methods that require specialised mould removal approaches respecting cultural preservation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Multi-Generational Family Homes</h4>
                      <p className="text-professional">
                        Oakleigh's Greek community values often results in extended families sharing homes or living in close proximity. These multi-generational properties may have higher occupancy levels and specialised cultural requirements that influence our mould removal Oakleigh Melbourne approaches.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Train Line Corridor Challenges</h4>
                      <p className="text-professional">
                        Properties near the Frankston railway line face unique environmental challenges from vibration, air circulation disruption, and modified local weather patterns. Our expertise includes understanding how transport infrastructure affects residential moisture levels.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Commercial Strip Integration</h4>
                      <p className="text-professional">
                        Oakleigh's vibrant Eaton Mall and commercial areas create unique microclimates for nearby residential properties. The blend of commercial and residential zones requires specialised knowledge of moisture management in mixed-use environments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-blue-200 bg-columbia">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <MapPin className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="text-xl font-bold text-charcoal">Oakleigh Area Coverage</h3>
                        <p className="text-professional">VIC 3166 and surrounding suburbs</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Eaton Mall Commercial District</span>
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Oakleigh Railway Station Area</span>
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Warrigal Road Corridor</span>
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Oakleigh Recreation Centre Vicinity</span>
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Greek Orthodox Community Areas</span>
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-success/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-charcoal mb-4">
                      Professional Service - Same-day Available 7am-7pm
                    </h3>
                    <p className="text-professional mb-4">
                      Available 7 days a week for urgent mould problems in Oakleigh homes and Greek community properties.
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
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Oakleigh Property Types We Service
              </h2>
              <p className="text-xl text-professional max-w-3xl mx-auto">
                Professional mould removal Oakleigh Melbourne for every property type in this established multicultural suburb.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-columbia rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Greek Heritage Family Homes</h3>
                  <p className="text-professional mb-4">
                    Oakleigh's substantial Greek community has created a distinctive residential landscape with Mediterranean-influenced homes dating from the 1950s-1970s. These properties often feature unique architectural elements, cultural adaptations, and multi-generational living arrangements requiring specialised mould treatment.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Mediterranean architecture assessment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Cultural preservation considerations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Multi-generational living optimisation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-columbia rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Established Post-War Homes</h3>
                  <p className="text-professional mb-4">
                    Many of Oakleigh's established homes were built during the post-war boom to accommodate new migrant families. These properties often feature solid construction with brick veneer, tile roofs, and established gardens that create specific moisture management challenges for mould removal services.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Post-war construction expertise</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Established garden moisture management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Original material preservation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-columbia rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Railway Corridor Properties</h3>
                  <p className="text-professional mb-4">
                    Homes near Oakleigh Railway Station and the Frankston line corridor face unique environmental challenges from train vibrations, modified air circulation, and proximity to transport infrastructure. These properties require specialised mould removal Oakleigh Melbourne approaches.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Transport vibration impact assessment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Air circulation optimisation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Noise barrier microclimate management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-columbia rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Commercial-Residential Mixed Zones</h3>
                  <p className="text-professional mb-4">
                    Properties near Eaton Mall and the commercial heart of Oakleigh often combine residential and commercial elements. Mixed zoning creates unique challenges for moisture management, requiring expert knowledge of how commercial activities affect nearby residential properties.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Mixed-use building assessment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Commercial activity impact analysis</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Dual-purpose ventilation solutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-columbia rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Modern Family Developments</h3>
                  <p className="text-professional mb-4">
                    Contemporary townhouse and unit developments in Oakleigh cater to young families and professionals seeking convenient train access to the city. These modern properties require current building standard compliance while fitting into the established suburban character.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Modern building standard compliance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Contemporary ventilation systems</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Shared wall moisture prevention</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-columbia rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Community Organisation Properties</h3>
                  <p className="text-professional mb-4">
                    Oakleigh's Greek Orthodox churches, community centres, and cultural organisations often occupy significant heritage properties requiring specialised mould management. These buildings serve important community functions and need culturally sensitive treatment approaches.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Heritage building expertise</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Cultural sensitivity protocols</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Community space optimisation</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Why Choose Our Mould Removal Oakleigh Melbourne Service?
              </h2>
              <p className="text-xl text-professional max-w-3xl mx-auto">
                Local expertise, cultural sensitivity, and comprehensive solutions for Oakleigh's diverse community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">5+ Years Local Experience</h3>
                  <p className="text-professional">
                    Extensive experience working with Oakleigh's Greek community and established residential properties. We understand the suburb's unique cultural heritage and the specific challenges facing Mediterranean-influenced architecture and multi-generational family homes.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Cultural Sensitivity</h3>
                  <p className="text-professional">
                    Respectful approach to heritage properties and cultural considerations important to the Greek community. Our team understands the significance of family homes and community spaces in Oakleigh's social fabric.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Multi-Generational Safe Methods</h3>
                  <p className="text-professional">
                    Family-safe mould removal techniques perfect for Oakleigh's multi-generational households. Our treatments are safe around elderly family members, young children, and everyone in between while being completely effective.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Flexible Community Scheduling</h3>
                  <p className="text-professional">
                    Available 7am-7pm every day to work around community events, religious observances, and busy family schedules. We understand the importance of maintaining normal family routines during mould removal treatments.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">5.0/5 Star Rating</h3>
                  <p className="text-professional">
                    Consistently excellent results from satisfied customers across Melbourne's diverse communities. Our commitment to quality workmanship and respectful service shows in every mould removal Oakleigh Melbourne project.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Transport Corridor Expertise</h3>
                  <p className="text-professional">
                    Specialized knowledge of how railway proximity affects residential properties. We understand the unique challenges facing homes near Oakleigh Station and the Frankston train line corridor.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Card className="inline-block bg-columbia border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-charcoal mb-4">
                    Ready to Protect Your Oakleigh Family Home?
                  </h3>
                  <p className="text-lg text-professional mb-6">
                    Contact our mould removal experts today for a comprehensive inspection that respects your cultural heritage and family needs.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                      <Phone className="mr-2 h-5 w-5" />
                      Call 1800 954 117
                    </Button>
                    <p className="text-sm text-professional">
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
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Mould Prevention Tips for Oakleigh Homes
              </h2>
              <p className="text-xl text-professional max-w-3xl mx-auto">
                Protect your family heritage home with these expert recommendations tailored for Oakleigh's established community and local conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-6">
                  Heritage Home Preservation
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-columbia rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Respect Original Mediterranean Features</h4>
                      <p className="text-professional">
                        When preventing mould in Greek heritage homes, maintain original architectural features like courtyard areas, pergolas, and Mediterranean garden integration. Ensure modern moisture control methods complement rather than compromise cultural design elements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-columbia rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Multi-Generational Living Considerations</h4>
                      <p className="text-professional">
                        Oakleigh's multi-generational families create higher occupancy and diverse living patterns. Ensure adequate ventilation in all areas of the home, particularly bedrooms, bathrooms, and common areas that accommodate extended family members.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-columbia rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Traditional Cooking Moisture Management</h4>
                      <p className="text-professional">
                        Greek cooking traditions often involve methods that create substantial moisture and heat. Ensure kitchen exhaust systems can handle traditional cooking requirements and prevent moisture from affecting other areas of your home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-6">
                  Transport Corridor Management
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-columbia rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Railway Vibration Considerations</h4>
                      <p className="text-professional">
                        Properties near the train line should monitor structural integrity regularly. Train vibrations can affect building seals and ventilation systems over time, potentially creating moisture entry points that encourage mould growth.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-columbia rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Enhanced Air Filtration Systems</h4>
                      <p className="text-professional">
                        Train corridor properties benefit from upgraded air filtration to manage dust and pollutants. Clean filters regularly and consider air purification systems to maintain healthy indoor air quality that prevents mould removal Oakleigh Melbourne needs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-columbia rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Commercial Area Drainage Monitoring</h4>
                      <p className="text-professional">
                        Properties near Eaton Mall and commercial areas should monitor how nearby development affects local drainage patterns. Ensure your property's drainage systems can handle changes in local water flow and surface runoff.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-columbia rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  Need Professional Mould Removal Oakleigh Melbourne?
                </h3>
                <p className="text-lg text-professional mb-6">
                  Don't let mould problems affect your family heritage home. Contact our culturally sensitive experts for comprehensive inspection and treatment services that respect your community values.
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
              Protect Your Oakleigh Family Heritage Today
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Expert mould removal Oakleigh Melbourne services for Greek heritage homes, established families, and railway corridor properties throughout the 3166 area.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold bg-white text-primary hover:bg-columbia">
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

export default OakleighPage;