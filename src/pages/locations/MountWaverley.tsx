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

const MountWaverleyPage = () => {
  return (
    <>
      <LocationPageSEO
        title="Professional Mould Removal Mount Waverley Melbourne | Mould & Restoration Co."
        description="Expert mould removal services in Mount Waverley Melbourne. 5+ years experience, 100+ properties restored. Call 1800 954 117 for professional mould inspection and remediation."
        suburb="Mount Waverley"
        canonical="https://mouldrestoration.com.au/services/mould-removal-mount-waverley"
      />

      <LocalBusinessSchema
        businessName="Mould & Restoration Co. - Mount Waverley"
        address="Mount Waverley VIC 3149"
        phoneNumber="1800 954 117"
        email="info@mouldrestorationco.com.au"
        description="Professional mould inspection and removal services in Mount Waverley, Melbourne"
        priceRange="$$"
        rating={5.0}
        reviewCount={50}
        businessHours="Mo,Tu,We,Th,Fr,Sa,Su 07:00-19:00"
        abn="47 683 089 652"
        geo={{
          latitude: -37.8774,
          longitude: 145.1173
        }}
      />

      <ServiceSchema
        serviceName="Mould Removal Mount Waverley Melbourne"
        description="Professional mould inspection and remediation services for Mount Waverley residents"
        provider="Mould & Restoration Co."
        areaServed="Mount Waverley VIC 3149"
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
                  Mount Waverley VIC 3149
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
                Professional Mould Removal
                <span className="block text-primary">Mount Waverley Melbourne</span>
              </h1>
              <p className="text-xl text-professional mb-8 max-w-3xl mx-auto">
                Protecting Mount Waverley's family-focused community with expert mould inspection and removal services. Specialising in good school zone properties, established family homes, and premium residential developments throughout the 3149 area.
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
                Local Mould Removal Experts in Mount Waverley
              </h2>
              <p className="text-xl text-professional max-w-3xl mx-auto">
                Our team understands Mount Waverley's reputation as a premier family suburb with excellent schools and the unique challenges this creates for high-value residential properties.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-6">
                  Why Mould Removal Mount Waverley Melbourne Requires Premium Service
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Premium School Zone Properties</h4>
                      <p className="text-professional">
                        Mount Waverley's proximity to highly-rated schools creates premium property values and discerning homeowners. These families invest significantly in their homes and require mould removal services that match their high standards for quality, professionalism, and property preservation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Family-Focused Community Standards</h4>
                      <p className="text-professional">
                        Mount Waverley families prioritize health and safety, particularly around children's wellbeing. Our mould removal Mount Waverley Melbourne services use family-safe methods while delivering thorough results that protect growing families in this education-focused community.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">Established Home Renovation Challenges</h4>
                      <p className="text-professional">
                        Many Mount Waverley families extend and renovate their established homes to accommodate growing children and changing needs. These renovations can create moisture challenges where new construction meets original structures, requiring expert knowledge and careful treatment approaches.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-charcoal">High-Value Property Protection</h4>
                      <p className="text-professional">
                        With some of Melbourne's highest property values, Mount Waverley homeowners require mould treatment that preserves and protects their significant investment. Our services ensure both immediate mould removal and long-term property value protection.
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
                        <h3 className="text-xl font-bold text-charcoal">Mount Waverley Area Coverage</h3>
                        <p className="text-professional">VIC 3149 and surrounding suburbs</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Mount Waverley Primary School Zone</span>
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Mount Waverley Secondary College Area</span>
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Stephensons Road Shopping Centre</span>
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Mount Waverley Railway Station Vicinity</span>
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Jordanville Station Precinct</span>
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
                      Available 7 days a week for urgent mould problems in Mount Waverley family homes and school zone properties.
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
                Mount Waverley Property Types We Service
              </h2>
              <p className="text-xl text-professional max-w-3xl mx-auto">
                Professional mould removal Mount Waverley Melbourne for every property type in this premium family-focused suburb.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-columbia rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Premium Family Homes</h3>
                  <p className="text-professional mb-4">
                    Mount Waverley's reputation for excellent schools attracts successful families who invest heavily in premium properties. These high-value homes often feature quality construction, established gardens, and significant extensions requiring sophisticated mould removal approaches that protect substantial investments.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>High-value property protection</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Premium material preservation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Investment-grade treatment standards</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-columbia rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">School Zone Investment Properties</h3>
                  <p className="text-professional mb-4">
                    Properties purchased specifically for school zone access represent significant family investments. These homes may be older properties requiring updating while maintaining their location value, creating moisture management challenges that need expert mould removal attention.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Location value preservation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Renovation-ready treatment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Family safety prioritization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-columbia rounded-lg flex items-center-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Extended Family Residences</h3>
                  <p className="text-professional mb-4">
                    Many Mount Waverley families extend their homes significantly to accommodate growing children, home offices, and multigenerational living. These complex renovations create unique challenges where old and new construction meets, requiring specialised mould removal Mount Waverley Melbourne expertise.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Multi-era construction integration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Extension junction treatment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Complex ventilation optimisation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-columbia rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Executive Professional Properties</h3>
                  <p className="text-professional mb-4">
                    Mount Waverley attracts successful professionals who demand high standards in all services. These discerning homeowners require mould removal services that match their expectations for quality, timeliness, and minimal disruption to busy family and professional schedules.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Executive service standards</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Minimal disruption protocols</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Professional scheduling flexibility</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-columbia rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Established Garden Properties</h3>
                  <p className="text-professional mb-4">
                    Mount Waverley's established properties often feature mature landscaping and premium garden developments. These beautiful settings can create moisture challenges from extensive irrigation, mature tree canopies, and sophisticated outdoor living spaces requiring expert moisture management.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Landscape moisture interaction</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Garden drainage integration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Outdoor living space protection</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-columbia rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Heritage Character Homes</h3>
                  <p className="text-professional mb-4">
                    Some of Mount Waverley's most valuable properties feature heritage character with period details that require careful preservation during mould treatment. These homes combine historical significance with modern family living needs, requiring specialised restoration expertise.
                  </p>
                  <ul className="text-sm text-professional space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Heritage detail preservation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Period-appropriate treatment methods</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Character value enhancement</span>
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
                Why Choose Our Mould Removal Mount Waverley Melbourne Service?
              </h2>
              <p className="text-xl text-professional max-w-3xl mx-auto">
                Premium service standards, family-focused expertise, and comprehensive solutions for Mount Waverley's discerning community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">5+ Years Premium Service Experience</h3>
                  <p className="text-professional">
                    Extensive experience working with Mount Waverley's high-value properties and discerning families. We understand the premium service standards expected in this elite school zone and consistently deliver results that protect substantial property investments.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Family Health Priority</h3>
                  <p className="text-professional">
                    Understanding that Mount Waverley families prioritize children's health and wellbeing above all else. Our family-safe mould removal methods ensure complete protection for growing families while maintaining the healthy home environments essential for academic success.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Investment-Grade Results</h3>
                  <p className="text-professional">
                    High-quality mould removal techniques that protect and enhance property values in one of Melbourne's most sought-after suburbs. Our treatments are designed to meet the standards expected by Mount Waverley's successful families and professional community.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Professional Schedule Accommodation</h3>
                  <p className="text-professional">
                    Flexible scheduling that respects busy professional and family commitments. Available 7am-7pm every day with appointment times that work around school schedules, after-school activities, and executive work demands.
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
                    Consistently excellent results from Mount Waverley's quality-focused families. Our commitment to premium service standards and comprehensive mould removal shows in every mould removal Mount Waverley Melbourne project we complete.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">School Zone Property Expertise</h3>
                  <p className="text-professional">
                    Deep understanding of property value factors in premium school zones. We know how to protect and enhance the investment value that makes Mount Waverley properties so sought-after by Melbourne families.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Card className="inline-block bg-columbia border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-charcoal mb-4">
                    Ready to Protect Your Mount Waverley Investment?
                  </h3>
                  <p className="text-lg text-professional mb-6">
                    Contact our premium mould removal experts today for a comprehensive inspection that meets Mount Waverley's exacting standards.
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
                Mould Prevention Tips for Mount Waverley Homes
              </h2>
              <p className="text-xl text-professional max-w-3xl mx-auto">
                Protect your premium family investment with these expert recommendations tailored for Mount Waverley's high-value properties and family-focused lifestyle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-6">
                  Premium Property Maintenance
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-columbia rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Investment-Grade Ventilation Systems</h4>
                      <p className="text-professional">
                        Invest in high-quality ventilation systems that match the premium nature of your Mount Waverley property. Quality whole-house ventilation, bathroom exhaust systems, and kitchen range hoods protect both your family's health and your property investment value.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-columbia rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Extension Integration Monitoring</h4>
                      <p className="text-professional">
                        Carefully monitor areas where home extensions meet original structures. Mount Waverley's extensive family renovations can create moisture bridges if not properly sealed and maintained, potentially affecting your significant property investment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-columbia rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Professional Maintenance Scheduling</h4>
                      <p className="text-professional">
                        Implement regular professional maintenance schedules that fit busy family and work commitments. Preventive maintenance protects your investment and prevents minor issues from becoming major mould removal Mount Waverley Melbourne requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-6">
                  Family Lifestyle Management
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-columbia rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">School Schedule Moisture Management</h4>
                      <p className="text-professional">
                        During busy school mornings, ensure bathroom fans run after showers and windows are opened when possible. School-age children's schedules can create moisture patterns that need management to maintain healthy home environments.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-columbia rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Premium Garden Integration</h4>
                      <p className="text-professional">
                        Maintain proper drainage around established landscaping and premium garden features. Mount Waverley's beautiful mature gardens can affect home moisture levels if drainage isn't properly managed, particularly during Melbourne's wet seasons.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-columbia rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Executive Home Office Considerations</h4>
                      <p className="text-professional">
                        Home offices and study areas require adequate ventilation, especially in converted spaces or extensions. Ensure proper air circulation in areas where family members spend extended time studying or working from home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-columbia rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  Need Professional Mould Removal Mount Waverley Melbourne?
                </h3>
                <p className="text-lg text-professional mb-6">
                  Don't compromise on your family's health or property investment. Contact our premium service experts for comprehensive inspection and treatment that meets Mount Waverley's high standards.
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
              Protect Your Mount Waverley Family Investment Today
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Premium mould removal Mount Waverley Melbourne services for school zone properties, family homes, and established residences throughout the 3149 area.
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

export default MountWaverleyPage;