import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Clock, CheckCircle, Users, Award, Wrench } from 'lucide-react';
import { LocationPageSEO } from '@/components/seo/SEOHead';
import { EnhancedSchemaMarkup } from '../../components/seo/EnhancedSchemaMarkup';





import { EnhancedOptimizedImage } from '../../components/seo/EnhancedOptimizedImage';

const Berwick: React.FC = () => {
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
    { name: 'Berwick Mould Removal', url: '/locations/berwick' }
  ];

  const berwickServices = [
    "Residential mould inspections and testing",
    "Commercial mould assessments",
    "School and childcare mould services",
    "Retail complex mould prevention",
    "Medical facility air quality management",
    "Office building mould solutions",
    "Pre-purchase mould inspections",
    "Post-flood damage assessment",
    "Emergency mould response",
    "HVAC system mould cleaning",
    "Basement moisture control",
    "New home mould prevention"
  ];

  const propertyTypes = [
    {
      type: "Family Housing Estates",
      description: "Modern suburban developments and established family neighbourhoods throughout Berwick",
      risks: "New construction moisture trapping, poor bathroom ventilation, basement dampness issues",
      solutions: "Family-safe treatment protocols, ventilation system upgrades, comprehensive moisture barrier installation"
    },
    {
      type: "Educational Facilities",
      description: "Schools, childcare centres, and educational institutions serving Berwick's growing population",
      risks: "High occupancy humidity, children's health vulnerabilities, learning environment air quality",
      solutions: "Child-safe remediation methods, school holiday scheduling, regulatory compliance documentation"
    },
    {
      type: "Healthcare Facilities",
      description: "Medical centres, dental practices, and healthcare services in Berwick's commercial areas",
      risks: "Patient safety concerns, sterile environment requirements, regulatory compliance needs",
      solutions: "Medical-grade air quality solutions, infection control protocols, minimal patient disruption"
    },
    {
      type: "Retail and Commercial",
      description: "Shopping centres, office buildings, and commercial facilities in Berwick's business districts",
      risks: "Customer safety requirements, business operation continuity, shared ventilation systems",
      solutions: "Customer-safe treatment methods, after-hours scheduling, comprehensive air quality management"
    }
  ];

  const localFactors = [
    {
      factor: "Outer Southeast Climate",
      impact: "Berwick's outer southeastern location creates specific seasonal humidity patterns and temperature variations affecting mould growth",
      solution: "Climate-adapted moisture control strategies designed for outer southeastern Melbourne's weather patterns"
    },
    {
      factor: "Growing Family Community",
      impact: "Rapidly expanding residential development increases demand for family-safe mould solutions and child health protection",
      solution: "Family-focused treatment protocols with child-safe methods and comprehensive health protection measures"
    },
    {
      factor: "Educational Hub Status",
      impact: "High concentration of schools and childcare facilities requires specialised air quality management and regulatory compliance",
      solution: "Educational facility expertise with child safety focus and regulatory compliance documentation"
    },
    {
      factor: "Mixed Urban Development",
      impact: "Combination of new estates, established homes, and commercial areas creates diverse mould risk profiles",
      solution: "Property-specific treatment approaches tailored to different development types and ages"
    }
  ];

  const testimonials = [
    {
      name: "Rebecca Martinez",
      location: "Berwick Family Estate, VIC",
      rating: 5,
      text: "Fantastic service when we discovered mould in our children's playroom. The team prioritised our family's safety with child-safe treatments and provided comprehensive follow-up care. Professional, caring, and thorough."
    },
    {
      name: "James Wilson",
      location: "Berwick Primary School, VIC",
      rating: 5,
      text: "As a school principal, I needed mould remediation specialists who understood educational facility requirements. Their team worked during school holidays, provided all necessary documentation, and ensured complete safety for our students' return."
    },
    {
      name: "Dr. Amanda Foster",
      location: "Berwick Medical Centre, VIC",
      rating: 5,
      text: "When mould threatened our medical practice, they responded with medical-grade solutions that maintained our sterile environment standards. Their understanding of healthcare facility requirements was exceptional."
    }
  ];

  const faqData = [
    {
      question: "What makes Berwick properties particularly prone to mould problems?",
      answer: "Berwick's outer southeastern location creates specific challenges including seasonal humidity variations, new construction moisture issues in growing estates, and the need for family-safe solutions in this rapidly expanding residential area. Our team addresses these location-specific factors with tailored prevention strategies."
    },
    {
      question: "How do you handle mould remediation in Berwick's schools and childcare centres?",
      answer: "Educational facilities require specialised approaches including child-safe treatment methods, school holiday scheduling to minimise disruption, comprehensive regulatory compliance documentation, and ongoing air quality monitoring to ensure safe learning environments for children."
    },
    {
      question: "Do you provide mould services for Berwick's healthcare facilities?",
      answer: "Yes, we specialise in healthcare facility mould remediation with medical-grade air quality solutions, infection control protocols, sterile environment maintenance, and minimal patient disruption scheduling to meet healthcare industry standards."
    },
    {
      question: "What should new homeowners in Berwick know about mould prevention?",
      answer: "New Berwick homeowners should focus on proper ventilation installation, basement moisture control, regular HVAC maintenance, and understanding moisture patterns in new construction. We provide comprehensive new home assessments and prevention planning."
    },
    {
      question: "How quickly can you respond to mould emergencies in Berwick?",
      answer: "We provide rapid emergency response for Berwick properties, typically within 2-4 hours for schools, healthcare facilities, and commercial emergencies, and within 24 hours for residential urgent situations, with priority given to child safety concerns."
    },
    {
      question: "Do you work with Berwick property developers and builders?",
      answer: "Absolutely. We work with developers, builders, and real estate professionals in Berwick's growing market, providing pre-construction moisture planning, new home mould prevention strategies, and comprehensive property assessments for sales and purchases."
    }
  ];

  return (
    <>
      <LocationPageSEO
        pageTitle="Professional Mould Removal Berwick | Expert Remediation Services"
        pageDescription="Expert mould removal services in Berwick. Specialising in family-safe residential and educational facility mould remediation. IICRC certified, 5+ years experience. Call 1800 954 117."
        pageKeywords="mould removal Berwick, mould remediation Berwick, mould inspection Berwick, Berwick mould experts, school mould removal Berwick"
        canonicalUrl="/locations/berwick"
        suburb="Berwick"
      />

      <EnhancedSchemaMarkup
        businessName="Mould & Restoration Co."
        suburb="Berwick"
        phoneNumber="1800 954 117"
        address="Berwick, VIC"
        businessHours={businessHours}
        services={berwickServices}
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
                      <span className="block text-yellow-400">Berwick</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                      Expert family-safe mould remediation services for Berwick's residential estates, schools, and commercial properties. IICRC certified specialists with 5+ years local experience.
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
                  <EnhancedOptimizedImage
                    src="/images/berwick-mould-removal-hero.jpg"
                    alt="Professional mould removal services in Berwick - family-safe treatments for residential estates, schools, and commercial properties"
                    location="Berwick"
                    className="rounded-lg shadow-2xl"
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
                      Berwick's Trusted Family-Safe Mould Removal Specialists
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Serving Berwick's growing family community for over 5 years, Mould & Restoration Co. understands the unique needs of outer southeastern Melbourne's residential estates, schools, and commercial facilities. Our IICRC-certified team delivers family-safe mould solutions prioritising child health and safety.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Family-Safe Solutions</h4>
                        <p className="text-professional">Child-safe treatments for residential properties</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Educational Expertise</h4>
                        <p className="text-professional">School and childcare facility specialists</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Healthcare Standards</h4>
                        <p className="text-professional">Medical facility air quality solutions</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Emergency Response</h4>
                        <p className="text-professional">24/7 availability for urgent situations</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-columbia p-6 rounded-lg">
                    <h3 className="font-bold text-lg text-blue-900 mb-2">Why Choose Our Berwick Service?</h3>
                    <ul className="space-y-2 text-blue-800">
                      <li>• Specialised family and child safety focus</li>
                      <li>• Educational facility expertise and compliance</li>
                      <li>• Healthcare-grade air quality solutions</li>
                      <li>• Comprehensive new home prevention planning</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <EnhancedOptimizedImage
                    src="/images/berwick-service-area.jpg"
                    alt="Mould removal service area covering Berwick and surrounding outer southeastern Melbourne suburbs"
                    location="Berwick"
                    className="rounded-lg shadow-lg"
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
                  Berwick Property Types We Service
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  Our experienced team handles mould challenges across all property types in Berwick, from family housing estates to educational and healthcare facilities.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {propertyTypes.map((property, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <EnhancedOptimizedImage
                      src={`/images/berwick-${property.type.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                      alt={`${property.type} mould removal services in Berwick`}
                      propertyType={property.type}
                      location="Berwick"
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
                  Berwick Environmental Factors
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  Understanding local conditions is crucial for effective mould prevention. Our team addresses the specific environmental challenges facing Berwick properties.
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
                  Comprehensive Mould Services in Berwick
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  From initial inspection to complete remediation, we provide end-to-end mould solutions tailored to Berwick's family-focused community needs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {berwickServices.map((service, index) => (
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
                    Our Berwick team is available 24/7 for emergency mould situations. Don't wait - early intervention saves time and money.
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
                  Specialized Berwick Mould Solutions
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  Beyond standard mould removal, we offer specialised services tailored to Berwick's family-focused community and educational facilities.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="bg-columbia w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">Family Estate Services</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-professional">
                      Comprehensive mould management for Berwick's family housing estates, prioritising child safety with non-toxic treatments and comprehensive prevention strategies.
                    </p>
                    <ul className="space-y-2 text-sm text-professional">
                      <li>• Child-safe treatment protocols</li>
                      <li>• Family health protection focus</li>
                      <li>• New home prevention planning</li>
                      <li>• Ongoing monitoring programs</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-success" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">Educational Facilities</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-professional">
                      Specialised mould remediation for Berwick's schools and childcare centres, ensuring safe learning environments with regulatory compliance focus.
                    </p>
                    <ul className="space-y-2 text-sm text-professional">
                      <li>• School holiday scheduling</li>
                      <li>• Regulatory compliance documentation</li>
                      <li>• Child safety priority protocols</li>
                      <li>• Air quality certification</li>
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
                      Medical-grade mould solutions for Berwick's healthcare facilities, maintaining sterile environments with infection control protocols.
                    </p>
                    <ul className="space-y-2 text-sm text-professional">
                      <li>• Medical-grade air quality systems</li>
                      <li>• Patient safety protocols</li>
                      <li>• Sterile environment maintenance</li>
                      <li>• Healthcare compliance standards</li>
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
                  Our Berwick Mould Removal Process
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  A systematic approach ensuring thorough mould elimination and long-term prevention for all Berwick property types with family safety priority.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-columbia w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Family-Safe Assessment</h3>
                  <p className="text-professional text-sm">
                    Comprehensive property inspection with special attention to child-safe areas and family health concerns using advanced detection equipment.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-success">2</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Safe Containment</h3>
                  <p className="text-professional text-sm">
                    Professional containment barriers designed to protect family living areas and prevent spore spread during remediation.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-yellow-600">3</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Non-Toxic Treatment</h3>
                  <p className="text-professional text-sm">
                    IICRC-certified removal using family-safe, non-toxic methods prioritising child health and safety throughout the process.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">4</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Long-Term Prevention</h3>
                  <p className="text-professional text-sm">
                    Comprehensive prevention strategies tailored to Berwick's climate and property types with ongoing family health monitoring.
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-charcoal mb-4">Family Health Guarantee</h3>
                  <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                    Every Berwick mould removal project comes with our family health guarantee. We prioritise child safety and provide ongoing support to ensure your family's wellbeing and property health.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-sm text-professional">Family Safe</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success">5+</div>
                      <div className="text-sm text-professional">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">24/7</div>
                      <div className="text-sm text-professional">Support Available</div>
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
                  What Berwick Families Say
                </h2>
                <p className="text-lg text-professional">
                  Authentic reviews from satisfied families and professionals across Berwick's residential and commercial properties.
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
                      <div className="text-sm text-professional">Happy Families</div>
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
                  Berwick Mould Removal FAQ
                </h2>
                <p className="text-lg text-professional">
                  Common questions about family-safe mould removal services in Berwick and outer southeastern Melbourne.
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
                    Our Berwick family-safe mould removal experts are here to help with any specific concerns about your property.
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
                  Contact Berwick's Family-Safe Mould Removal Experts
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Ready to protect your family's health? Our certified team provides fast, family-safe service throughout Berwick and outer southeastern Melbourne.
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
                      Proudly serving Berwick and surrounding outer southeastern Melbourne suburbs
                    </p>
                    <div className="text-sm text-gray-400">
                      <p><strong>ABN:</strong> 47 683 089 652</p>
                      <p><strong>Certifications:</strong> IICRC Standards</p>
                    </div>
                  </div>

                  <div className="bg-blue-900 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-3">Emergency Response</h3>
                    <p className="text-blue-100 mb-4">
                      Family health can't wait. Our Berwick team provides 24/7 emergency response for urgent mould situations affecting children and families.
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
                  <h3 className="text-2xl font-bold mb-6">Get Your Free Berwick Family-Safe Assessment</h3>
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
                        <option value="residential">Family Home</option>
                        <option value="school">School/Childcare</option>
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
                        placeholder="Tell us about the mould issue, location, and any child safety concerns..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-md hover:bg-primary-600 transition-colors"
                    >
                      Request Free Family-Safe Assessment
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

export default Berwick;