import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Clock, CheckCircle, Users, Award, Wrench } from 'lucide-react';
import LocationPageSEO from '@/components/seo/SEOHead';
import { EnhancedSchemaMarkup } from '../../components/seo/EnhancedSchemaMarkup';





import { OptimizedImage } from '../../components/OptimizedImage';

const Frankston: React.FC = () => {
  const businessHours = [
    "Monday: 7:00 AM - 7:00 PM",
    "Tuesday: 7:00 AM - 7:00 PM",
    "Wednesday: 7:00 AM - 7:00 PM",
    "Thursday: 7:00 AM - 7:00 PM",
    "Friday: 7:00 AM - 7:00 PM",
    "Saturday: 7:00 AM - 7:00 PM",
    "Sunday: 7:00 AM - 7:00 PM"
  ];

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/areas' },
    { name: 'Melbourne', url: '/areas/melbourne' },
    { name: 'Frankston Mould Removal', url: '/locations/frankston' }
  ];

  const frankstonServices = [
    "Residential mould inspections and testing",
    "Commercial mould assessments",
    "Coastal property mould solutions",
    "Holiday rental mould management",
    "Shopping centre air quality control",
    "Healthcare facility mould services",
    "Pre-purchase mould inspections",
    "Post-flood damage assessment",
    "Emergency mould response",
    "HVAC system mould cleaning",
    "Humidity control systems",
    "Salt air corrosion assessment"
  ];

  const propertyTypes = [
    {
      type: "Coastal Residential Properties",
      description: "Beachside homes, apartments, and holiday houses throughout Frankston's waterfront areas",
      risks: "Salt air corrosion, high humidity, seasonal occupancy moisture, coastal weather exposure",
      solutions: "Coastal-specific treatments, salt air resistant systems, humidity control, weatherproofing strategies"
    },
    {
      type: "Holiday and Rental Properties",
      description: "Short-term accommodations, holiday rentals, and seasonal properties near Frankston Beach",
      risks: "Irregular maintenance, seasonal moisture fluctuations, high occupancy turnover, inadequate ventilation",
      solutions: "Rental property maintenance programs, seasonal monitoring, guest safety protocols, property manager support"
    },
    {
      type: "Commercial and Retail",
      description: "Shopping centres, restaurants, hotels, and commercial facilities in Frankston's business district",
      risks: "Customer safety requirements, food service moisture, hospitality humidity, business continuity needs",
      solutions: "Commercial-grade air quality systems, customer safety protocols, minimal business disruption methods"
    },
    {
      type: "Healthcare and Aged Care",
      description: "Medical facilities, aged care centres, and healthcare services throughout Frankston",
      risks: "Patient vulnerability, infection control requirements, regulatory compliance, sterile environment needs",
      solutions: "Medical-grade remediation, infection prevention protocols, healthcare compliance documentation"
    }
  ];

  const localFactors = [
    {
      factor: "Coastal Environment",
      impact: "Frankston's bayside location creates elevated humidity, salt air corrosion, and unique moisture challenges from coastal weather patterns",
      solution: "Coastal-specific moisture control systems with salt air resistant treatments and humidity management designed for seaside properties"
    },
    {
      factor: "Tourism and Holiday Properties",
      impact: "High volume of holiday rentals and seasonal properties creates irregular maintenance and occupancy-related moisture issues",
      solution: "Seasonal monitoring programs, property manager coordination, and holiday rental specific maintenance schedules"
    },
    {
      factor: "Healthcare and Aged Care Hub",
      impact: "Significant concentration of healthcare facilities requires medical-grade air quality standards and infection control protocols",
      solution: "Healthcare-specialised remediation with medical compliance, patient safety protocols, and sterile environment maintenance"
    },
    {
      factor: "Regional Shopping Centre",
      impact: "Major retail and commercial activities create large-scale air quality challenges and customer safety requirements",
      solution: "Commercial-scale air management systems with customer safety protocols and business continuity planning"
    }
  ];

  const testimonials = [
    {
      name: "Karen Mitchell",
      location: "Frankston Beach House, VIC",
      rating: 5,
      text: "Outstanding service for our beachside holiday rental. The team understood coastal property challenges and provided long-term solutions that protect our investment and guest safety. Professional coastal expertise."
    },
    {
      name: "Dr. Peter Hayes",
      location: "Frankston Medical Centre, VIC",
      rating: 5,
      text: "As a medical practice owner, I needed mould remediation that met healthcare standards. Their team provided medical-grade solutions with full compliance documentation. Exceptional healthcare facility expertise."
    },
    {
      name: "Amanda Roberts",
      location: "Frankston Shopping Centre, VIC",
      rating: 5,
      text: "When mould threatened our retail operations, they responded with commercial-scale solutions that maintained customer safety while keeping our business running. Outstanding commercial service and professionalism."
    }
  ];

  const faqData = [
    {
      question: "What makes Frankston properties particularly susceptible to mould problems?",
      answer: "Frankston's coastal location creates specific challenges including elevated humidity from Port Phillip Bay, salt air corrosion effects, seasonal weather variations, holiday property maintenance gaps, and the need for specialised treatments that can withstand coastal environmental conditions."
    },
    {
      question: "How do you handle mould in Frankston's holiday rental properties?",
      answer: "Holiday rentals require specialised approaches including seasonal monitoring programs, guest safety protocols, property manager coordination, irregular occupancy moisture management, and maintenance schedules designed around rental booking patterns to ensure guest health and property protection."
    },
    {
      question: "Do you provide mould services for Frankston's healthcare facilities?",
      answer: "Yes, we specialise in healthcare facility mould remediation with medical-grade air quality solutions, infection control protocols, patient safety measures, regulatory compliance documentation, and sterile environment maintenance meeting healthcare industry standards."
    },
    {
      question: "What coastal-specific mould challenges do Frankston properties face?",
      answer: "Coastal properties face salt air corrosion, elevated humidity from bay proximity, seasonal weather exposure, unique ventilation challenges, and the need for treatments resistant to marine environments. Our coastal expertise addresses these specific environmental factors."
    },
    {
      question: "How quickly can you respond to mould emergencies in Frankston?",
      answer: "We provide rapid emergency response for Frankston properties, typically within 2-4 hours for healthcare facilities and commercial emergencies, and within 24 hours for residential situations, with priority given to coastal weather damage and holiday rental guest safety."
    },
    {
      question: "Do you work with Frankston property managers and real estate agents?",
      answer: "Absolutely. We work extensively with property managers, real estate agents, and holiday rental operators in Frankston, providing comprehensive assessments, maintenance programs, compliance documentation, and guest safety protocols for rental and commercial properties."
    }
  ];

  return (
    <>
      <LocationPageSEO
        pageTitle="Professional Mould Removal Frankston | Expert Coastal Remediation Services"
        pageDescription="Expert mould removal services in Frankston. Specialising in coastal properties, holiday rentals, and healthcare facilities. IICRC certified, 5+ years experience. Call 1800 954 117."
        pageKeywords="mould removal Frankston, mould remediation Frankston, mould inspection Frankston, Frankston coastal mould experts, holiday rental mould Frankston"
        canonicalUrl="/locations/frankston"
        suburb="Frankston"
      />

      <EnhancedSchemaMarkup
        businessName="Mould & Restoration Co."
        suburb="Frankston"
        phoneNumber="1800 954 117"
        address="Frankston, VIC"
        businessHours={businessHours}
        services={frankstonServices}
      />



      <div className="min-h-screen bg-white">
        <main className="pt-16">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-24">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      Professional Mould Removal
                      <span className="block text-yellow-400">Frankston</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                      Expert coastal mould remediation services for Frankston's residential properties, holiday rentals, and healthcare facilities. IICRC certified specialists with 5+ years coastal expertise.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:1800954117"
                      className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call 1800 954 117
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
                    >
                      Get Free Quote
                    </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400">5+</div>
                      <div className="text-blue-100">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400">100+</div>
                      <div className="text-blue-100">Properties Restored</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400">24/7</div>
                      <div className="text-blue-100">Emergency Response</div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <OptimizedImage
                    src="/images/frankston-mould-removal-hero.jpg"
                    alt="Professional mould removal services in Frankston - coastal property specialists treating beachside homes, holiday rentals, and healthcare facilities"
                    className="rounded-lg shadow-2xl w-full h-96 object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-4 rounded-lg font-bold text-lg shadow-lg">
                    IICRC Certified
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Emergency Banner */}
          <section className="bg-red-600 text-white py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6" />
                  <span className="font-semibold text-lg">24/7 Emergency Mould Removal Available</span>
                </div>
                <a
                  href="tel:1800954117"
                  className="bg-white text-red-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors"
                >
                  Call Now: 1800 954 117
                </a>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
                      Frankston's Trusted Coastal Mould Removal Specialists
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Serving Frankston's unique coastal environment for over 5 years, Mould & Restoration Co. understands the specific challenges facing bayside properties, holiday rentals, and healthcare facilities. Our IICRC-certified team delivers coastal-specific mould solutions designed for Frankston's marine environment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Coastal Property Expertise</h4>
                        <p className="text-professional">Beachside and waterfront specialists</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Holiday Rental Solutions</h4>
                        <p className="text-professional">Guest safety and property protection</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Healthcare Standards</h4>
                        <p className="text-professional">Medical-grade air quality solutions</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Emergency Response</h4>
                        <p className="text-professional">24/7 availability for coastal emergencies</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-columbia p-6 rounded-lg">
                    <h3 className="font-bold text-lg text-blue-900 mb-2">Why Choose Our Frankston Service?</h3>
                    <ul className="space-y-2 text-blue-800">
                      <li>• Coastal environment moisture expertise</li>
                      <li>• Holiday rental property management support</li>
                      <li>• Healthcare facility compliance specialisation</li>
                      <li>• Salt air resistant treatment systems</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <OptimizedImage
                    src="/images/frankston-service-area.jpg"
                    alt="Mould removal service area covering Frankston and surrounding bayside Melbourne suburbs"
                    className="rounded-lg shadow-lg w-full h-64 object-cover"
                  />

                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary">
                    <h3 className="font-bold text-lg text-charcoal mb-3">ABN: 47 683 089 652</h3>
                    <div className="space-y-2 text-gray-700">
                      <p className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-primary" />
                        <strong>Phone:</strong> 1800 954 117
                      </p>
                      <p className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <strong>Hours:</strong> 7am - 7pm, 7 days
                      </p>
                      <p className="flex items-center">
                        <Award className="h-4 w-4 mr-2 text-primary" />
                        <strong>Certified:</strong> IICRC Standards
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Property Types Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                  Frankston Property Types We Service
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  Our experienced team handles mould challenges across all property types in Frankston, from coastal residential homes to holiday rentals and healthcare facilities.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {propertyTypes.map((property, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <OptimizedImage
                      src={`/images/frankston-${property.type.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                      alt={`${property.type} mould removal services in Frankston`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-charcoal mb-2">{property.type}</h3>
                      <p className="text-professional text-sm mb-3">{property.description}</p>

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-sm text-red-700 mb-1">Common Risks:</h4>
                          <p className="text-xs text-professional">{property.risks}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-sm text-green-700 mb-1">Our Solutions:</h4>
                          <p className="text-xs text-professional">{property.solutions}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Local Factors Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                  Frankston Environmental Factors
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  Understanding local conditions is crucial for effective mould prevention. Our team addresses the specific coastal environmental challenges facing Frankston properties.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {localFactors.map((factor, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="font-bold text-lg text-charcoal mb-3">{factor.factor}</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm text-orange-700 mb-1">Local Impact:</h4>
                        <p className="text-professional text-sm">{factor.impact}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-blue-700 mb-1">Our Approach:</h4>
                        <p className="text-professional text-sm">{factor.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                  Comprehensive Mould Services in Frankston
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  From initial inspection to complete remediation, we provide end-to-end mould solutions tailored to Frankston's coastal environment and diverse property needs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {frankstonServices.map((service, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-primary">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-charcoal">{service}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-columbia rounded-lg p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Need Immediate Assistance?</h3>
                  <p className="text-blue-800 mb-6">
                    Our Frankston team is available 24/7 for emergency mould situations. Don't wait - early intervention saves time and money.
                  </p>
                  <a
                    href="tel:1800954117"
                    className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call 1800 954 117 Now
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Specialized Services */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                  Specialized Frankston Mould Solutions
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  Beyond standard mould removal, we offer specialised services tailored to Frankston's unique coastal environment and tourism-focused property market.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="bg-columbia w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">Coastal Property Solutions</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-professional">
                      Specialised mould management for Frankston's beachside and waterfront properties, including salt air resistant treatments and coastal humidity control.
                    </p>
                    <ul className="space-y-2 text-sm text-professional">
                      <li>• Salt air resistant treatment systems</li>
                      <li>• Coastal humidity management</li>
                      <li>• Weatherproofing strategies</li>
                      <li>• Marine environment expertise</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-success" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">Holiday Rental Properties</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-professional">
                      Comprehensive mould solutions for holiday rentals and short-term accommodations, ensuring guest safety and property protection with flexible scheduling.
                    </p>
                    <ul className="space-y-2 text-sm text-professional">
                      <li>• Seasonal monitoring programs</li>
                      <li>• Guest safety protocols</li>
                      <li>• Property manager coordination</li>
                      <li>• Flexible maintenance schedules</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wrench className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">Healthcare Facilities</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-professional">
                      Medical-grade mould remediation for Frankston's healthcare and aged care facilities, maintaining sterile environments with full regulatory compliance.
                    </p>
                    <ul className="space-y-2 text-sm text-professional">
                      <li>• Medical-grade air quality systems</li>
                      <li>• Infection control protocols</li>
                      <li>• Healthcare compliance documentation</li>
                      <li>• Patient safety priority</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                  Our Frankston Mould Removal Process
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  A systematic approach ensuring thorough mould elimination and long-term prevention for all Frankston property types with coastal environment expertise.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-columbia w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Coastal Environment Assessment</h3>
                  <p className="text-professional text-sm">
                    Comprehensive property evaluation considering coastal humidity, salt air effects, and marine environment factors using specialised detection equipment.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-success">2</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Coastal-Safe Containment</h3>
                  <p className="text-professional text-sm">
                    Professional containment systems designed for coastal properties, protecting against salt air while preventing spore spread during treatment.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-yellow-600">3</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Marine-Resistant Treatment</h3>
                  <p className="text-professional text-sm">
                    IICRC-certified removal using treatments specifically designed to withstand coastal conditions and provide long-term protection.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">4</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Coastal Prevention Strategy</h3>
                  <p className="text-professional text-sm">
                    Comprehensive prevention plans addressing coastal environmental factors, seasonal monitoring, and marine-resistant protection systems.
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-charcoal mb-4">Coastal Expertise Guarantee</h3>
                  <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                    Every Frankston mould removal project benefits from our coastal environment expertise. We understand the unique challenges of seaside properties and provide solutions designed for marine conditions.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-sm text-professional">Coastal Expertise</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success">5+</div>
                      <div className="text-sm text-professional">Years Bayside Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">24/7</div>
                      <div className="text-sm text-professional">Emergency Response</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                  What Frankston Clients Say
                </h2>
                <p className="text-lg text-professional">
                  Authentic reviews from satisfied customers across Frankston's coastal residential, holiday rental, and healthcare properties.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-lg">★</span>
                        ))}
                      </div>
                      <span className="ml-2 text-professional text-sm">({testimonial.rating}/5)</span>
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-charcoal">{testimonial.name}</div>
                      <div className="text-sm text-professional">{testimonial.location}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <div className="bg-white rounded-lg p-6 shadow-lg inline-block">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-500">5.0</div>
                      <div className="flex text-yellow-400 text-lg">★★★★★</div>
                      <div className="text-sm text-professional">Average Rating</div>
                    </div>
                    <div className="border-l h-16 mx-4"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-professional">Satisfied Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                  Frankston Mould Removal FAQ
                </h2>
                <p className="text-lg text-professional">
                  Common questions about coastal mould removal services in Frankston and bayside Melbourne.
                </p>
              </div>

              <div className="space-y-6">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-charcoal mb-3">{faq.question}</h3>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <div className="bg-columbia rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Still Have Questions?</h3>
                  <p className="text-blue-800 mb-4">
                    Our Frankston coastal mould removal experts are here to help with any specific concerns about your property.
                  </p>
                  <a
                    href="tel:1800954117"
                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Ask Our Experts - 1800 954 117
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Contact Frankston's Coastal Mould Removal Experts
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Ready to protect your coastal property? Our certified team provides fast, professional service throughout Frankston and bayside Melbourne.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800 p-6 rounded-lg">
                      <Phone className="h-8 w-8 text-yellow-400 mb-3" />
                      <h3 className="font-bold text-lg mb-2">Phone</h3>
                      <p className="text-gray-300">Call us 24/7 for immediate assistance</p>
                      <a href="tel:1800954117" className="text-yellow-400 font-semibold text-xl">
                        1800 954 117
                      </a>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg">
                      <Clock className="h-8 w-8 text-yellow-400 mb-3" />
                      <h3 className="font-bold text-lg mb-2">Hours</h3>
                      <p className="text-gray-300">Open every day</p>
                      <p className="text-yellow-400 font-semibold">7:00 AM - 7:00 PM</p>
                    </div>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg">
                    <Award className="h-8 w-8 text-yellow-400 mb-3" />
                    <h3 className="font-bold text-lg mb-2">Service Area</h3>
                    <p className="text-gray-300 mb-3">
                      Proudly serving Frankston and surrounding bayside Melbourne suburbs
                    </p>
                    <div className="text-sm text-gray-400">
                      <p><strong>ABN:</strong> 47 683 089 652</p>
                      <p><strong>Certifications:</strong> IICRC Standards</p>
                    </div>
                  </div>

                  <div className="bg-blue-900 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-3">Emergency Response</h3>
                    <p className="text-blue-100 mb-4">
                      Coastal weather emergencies can't wait. Our Frankston team provides 24/7 emergency response for urgent mould situations affecting coastal properties.
                    </p>
                    <a
                      href="tel:1800954117"
                      className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Emergency Line: 1800 954 117
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 text-charcoal">
                  <h3 className="text-2xl font-bold mb-6">Get Your Free Frankston Coastal Assessment</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                        Property Type
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select Property Type</option>
                        <option value="coastal-residential">Coastal Residential</option>
                        <option value="holiday-rental">Holiday Rental</option>
                        <option value="healthcare">Healthcare Facility</option>
                        <option value="commercial">Commercial Building</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Describe Your Mould Concern
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tell us about the mould issue, coastal conditions, and any specific concerns..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-md hover:bg-primary-600 transition-colors"
                    >
                      Request Free Coastal Assessment
                    </button>
                  </form>

                  <div className="mt-6 text-sm text-professional text-center">
                    <p>Or call us directly for immediate assistance:</p>
                    <a href="tel:1800954117" className="text-primary font-semibold text-lg">
                      1800 954 117
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
};

export default Frankston;