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

const WheelersHillPage = () => {
  return (
    <>
      <LocationPageSEO
        title="Professional Mould Removal Wheelers Hill Melbourne | Mould & Restoration Co."
        description="Expert mould removal services in Wheelers Hill Melbourne. 5+ years experience, 100+ properties restored. Call 1800 954 117 for professional mould inspection and remediation."
        suburb="Wheelers Hill"
        canonical="https://mouldrestoration.com.au/services/mould-removal-wheelers-hill"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co. - Wheelers Hill"
        address="Wheelers Hill VIC 3150"
        phoneNumber="1800 954 117"
        email="info@mouldrestorationco.com.au"
        description="Professional mould inspection and removal services in Wheelers Hill, Melbourne"
        priceRange="$$"
        rating={5.0}
        reviewCount={50}
        businessHours="Mo,Tu,We,Th,Fr,Sa,Su 07:00-19:00"
        abn="47 683 089 652"
        geo={{
          latitude: -37.9066,
          longitude: 145.1809
        }}
      />

      <ServiceSchema
        serviceName="Mould Removal Wheelers Hill Melbourne"
        description="Professional mould inspection and remediation services for Wheelers Hill residents"
        provider="Mould & Restoration Co."
        areaServed="Wheelers Hill VIC 3150"
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
                  Wheelers Hill VIC 3150
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
                Professional Mould Removal
                <span className="block text-primary">Wheelers Hill Melbourne</span>
              </h1>
              <p className="text-xl text-professional mb-8 max-w-3xl mx-auto">
                Protecting Wheelers Hill's modern families with expert mould inspection and removal services. Specialising in newer suburban developments, family area properties, and shopping centre proximity homes throughout the 3150 area.
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
                Local Mould Removal Experts in Wheelers Hill
              </h2>
              <p className="text-xl text-professional max-w-3xl mx-auto">
                Our team understands Wheelers Hill's character as a newer suburban development and the specific challenges facing modern families in this growing community.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-6">
                  Why Mould Removal Wheelers Hill Melbourne Requires Modern Suburb Expertise
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Modern Construction Standards</h4>
                      <p className="text-professional">
                        Wheelers Hill's newer developments feature contemporary building standards and materials that require different mould treatment approaches than older suburbs. Our team understands modern ventilation systems, insulation methods, and building materials common in 1980s-2000s construction.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Shopping Centre Microclimate Effects</h4>
                      <p className="text-professional">
                        Proximity to Brandon Park Shopping Centre and The Glen creates unique environmental conditions for nearby residential properties. Large paved areas, increased traffic, and commercial ventilation systems can affect local humidity patterns requiring specialised mould removal Wheelers Hill Melbourne approaches.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Family Lifestyle Moisture Challenges</h4>
                      <p className="text-professional">
                        Wheelers Hill's family-focused community creates specific moisture management needs from active children, sports equipment, multiple bathrooms, and busy household schedules. Our expertise addresses the moisture challenges common in contemporary family living.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Established Landscaping Integration</h4>
                      <p className="text-professional">
                        Properties with maturing landscaping from the suburb's development period now face challenges from established tree canopies, sprinkler systems, and garden beds that can affect building moisture levels if not properly managed.
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
                        <h3 className="text-xl font-bold text-charcoal">Wheelers Hill Area Coverage</h3>
                        <p className="text-professional">VIC 3150 and surrounding suburbs</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Brandon Park Shopping Centre Area</span>
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Jells Park Vicinity</span>
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Wheelers Hill Primary School Zone</span>
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Ferntree Gully Road Corridor</span>
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Wellington Road Commercial Strip</span>
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
                      Available 7 days a week for urgent mould problems in Wheelers Hill family homes and modern developments.
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
                Wheelers Hill Property Types We Service
              </h2>
              <p className="text-xl text-professional max-w-3xl mx-auto">
                Professional mould removal Wheelers Hill Melbourne for every property type in this modern family-oriented suburb.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-columbia rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Contemporary Family Homes</h3>
                  <p className="text-professional mb-4">
                    Wheelers Hill's signature modern family homes from the 1980s-2000s development period feature contemporary construction methods, open-plan living, and modern amenities. These properties require specialised mould treatment approaches that account for modern building materials and ventilation systems.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Modern construction assessment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Contemporary ventilation optimisation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Open-plan living moisture management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-columbia rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Shopping Centre Proximity Properties</h3>
                  <p className="text-professional mb-4">
                    Homes within walking distance of Brandon Park Shopping Centre and The Glen face unique environmental challenges from commercial activities, increased vehicle traffic, and modified local weather patterns. These properties require expert mould removal Wheelers Hill Melbourne services.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Commercial microclimate assessment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Traffic pollution impact management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Enhanced air filtration solutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-columbia rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Family Activity-Focused Residences</h3>
                  <p className="text-professional mb-4">
                    Wheelers Hill's family-oriented community creates homes with multiple bathrooms, mudrooms, sports equipment storage, and active living areas. These properties face unique moisture challenges from busy family lifestyles requiring comprehensive moisture management strategies.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Multi-bathroom coordination</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Sports equipment storage solutions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Active lifestyle moisture control</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-columbia rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Maturing Landscape Properties</h3>
                  <p className="text-professional mb-4">
                    Properties with landscaping that has matured since Wheelers Hill's development now face challenges from established tree canopies, extensive garden irrigation, and sophisticated outdoor living spaces. These features can affect building moisture levels if not properly managed.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Mature landscape moisture interaction</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Irrigation system impact assessment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Outdoor living area protection</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-columbia rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Extended and Renovated Properties</h3>
                  <p className="text-professional mb-4">
                    Many Wheelers Hill families have extended their homes to accommodate growing needs, adding decks, outdoor entertaining areas, and additional living spaces. These modifications can create moisture challenges requiring specialised mould removal expertise.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Extension integration assessment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Indoor-outdoor transition management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Entertainment area moisture control</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-columbia rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Parkland Adjacent Properties</h3>
                  <p className="text-professional mb-4">
                    Homes backing onto or near Jells Park and other green spaces enjoy beautiful settings but may face unique moisture challenges from natural water features, mature vegetation, and altered local microclimates created by large parkland areas.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Parkland microclimate assessment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Natural water feature impact analysis</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Vegetation-building interface management</span>
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
                Why Choose Our Mould Removal Wheelers Hill Melbourne Service?
              </h2>
              <p className="text-xl text-professional max-w-3xl mx-auto">
                Modern suburb expertise, family-focused solutions, and comprehensive services for Wheelers Hill's contemporary community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">5+ Years Modern Suburb Experience</h3>
                  <p className="text-professional">
                    Extensive experience working with Wheelers Hill's contemporary construction methods and modern family lifestyle needs. We understand the unique challenges facing newer suburban developments and provide targeted mould removal solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Contemporary Building Expertise</h3>
                  <p className="text-professional">
                    Specialized knowledge of modern construction materials, ventilation systems, and building methods common in Wheelers Hill's development period. Our treatment approaches are tailored to contemporary suburban architecture and family living patterns.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Family-Safe Modern Methods</h3>
                  <p className="text-professional">
                    Advanced family-safe mould removal techniques perfect for Wheelers Hill's active households with children, pets, and busy lifestyles. Our methods are effective while being completely safe for modern family living environments.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Busy Family Schedule Coordination</h3>
                  <p className="text-professional">
                    Available 7am-7pm every day with flexible scheduling that accommodates busy family schedules, school runs, after-school activities, and weekend commitments. Professional service available when mould problems can't wait.
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
                    Consistently excellent results from satisfied families across Melbourne's modern suburbs. Our commitment to quality workmanship and family-focused service shows in every mould removal Wheelers Hill Melbourne project.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Shopping Centre Area Knowledge</h3>
                  <p className="text-professional">
                    Understanding of how commercial developments and shopping centres affect nearby residential properties. We know the specific environmental factors created by retail centers and busy commercial areas.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Card className="inline-block bg-columbia border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-charcoal mb-4">
                    Ready to Protect Your Wheelers Hill Family Home?
                  </h3>
                  <p className="text-lg text-professional mb-6">
                    Contact our modern suburb experts today for comprehensive mould inspection and treatment that works with your busy family lifestyle.
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
                Mould Prevention Tips for Wheelers Hill Homes
              </h2>
              <p className="text-xl text-professional max-w-3xl mx-auto">
                Protect your modern family home with these expert recommendations tailored for Wheelers Hill's contemporary suburban lifestyle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-6">
                  Modern Family Home Management
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-columbia rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Active Family Moisture Control</h4>
                      <p className="text-professional">
                        Manage moisture from busy family activities including sports gear, multiple showers, and frequent laundry loads. Ensure exhaust fans in all bathrooms run for adequate time after use, and consider timer switches for consistent operation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-columbia rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Contemporary Ventilation System Maintenance</h4>
                      <p className="text-professional">
                        Modern homes rely heavily on mechanical ventilation systems. Regularly clean and service exhaust fans, range hoods, and any whole-house ventilation systems to prevent moisture buildup that leads to mould removal Wheelers Hill Melbourne needs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-columbia rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Open Plan Living Humidity Control</h4>
                      <p className="text-professional">
                        Wheelers Hill's open-plan homes can spread moisture quickly through connected spaces. Use ceiling fans to promote air circulation and consider dehumidifiers during Melbourne's humid months to maintain healthy indoor humidity levels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-6">
                  Suburban Environment Considerations
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-columbia rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Shopping Centre Area Air Quality</h4>
                      <p className="text-professional">
                        Properties near shopping centres benefit from enhanced air filtration to manage increased dust and pollutants from commercial activity. Replace HVAC filters more frequently and consider air purification systems for optimal indoor air quality.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-columbia rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Mature Landscape Drainage Monitoring</h4>
                      <p className="text-professional">
                        As Wheelers Hill's landscaping has matured, ensure established trees and gardens don't compromise building drainage. Monitor gutters for leaf buildup and ensure irrigation systems don't direct water towards building foundations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-columbia rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Park Proximity Considerations</h4>
                      <p className="text-professional">
                        Properties backing onto parkland should monitor for increased humidity from nearby water features and vegetation. Ensure adequate air circulation and consider dehumidification during periods of high natural humidity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-columbia rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  Need Professional Mould Removal Wheelers Hill Melbourne?
                </h3>
                <p className="text-lg text-professional mb-6">
                  Don't let mould problems disrupt your busy family life. Contact our modern suburb experts for comprehensive inspection and treatment tailored to contemporary living needs.
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
              Protect Your Wheelers Hill Family Today
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Expert mould removal Wheelers Hill Melbourne services for modern family homes, shopping centre proximity properties, and contemporary developments throughout the 3150 area.
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

export default WheelersHillPage;