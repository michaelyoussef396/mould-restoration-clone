import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Clock, CheckCircle, Users, Award, Wrench } from 'lucide-react';
import LocationPageSEO from '@/components/seo/SEOHead';
import { EnhancedSchemaMarkup } from '../../components/seo/EnhancedSchemaMarkup';





import { OptimizedImage } from '../../components/OptimizedImage';

const Keysborough: React.FC = () => {
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
    { name: 'Keysborough Mould Removal', url: '/locations/keysborough' }
  ];

  const keysboroughServices = [
    "Residential mould inspections and testing",
    "Commercial mould assessments",
    "Factory and warehouse mould remediation",
    "Retail space mould prevention",
    "Educational facility mould services",
    "Healthcare facility compliance",
    "Pre-purchase mould inspections",
    "Post-flood damage assessment",
    "Industrial mould solutions",
    "HVAC system mould cleaning",
    "Crawl space moisture control",
    "Structural drying services"
  ];

  const propertyTypes = [
    {
      type: "Modern Family Homes",
      description: "Contemporary houses built in recent decades throughout Keysborough's residential areas",
      risks: "New construction moisture issues, poor ventilation design, modern material reactions",
      solutions: "Ventilation upgrades, moisture barrier installation, modern building material mould treatment"
    },
    {
      type: "Industrial Complexes",
      description: "Manufacturing and logistics facilities in Keysborough's industrial precincts",
      risks: "High humidity processes, poor air circulation, chemical storage condensation",
      solutions: "Industrial-grade ventilation systems, process moisture control, specialised chemical-resistant treatments"
    },
    {
      type: "Retail Shopping Centres",
      description: "Commercial retail spaces serving Keysborough's growing population",
      risks: "Food court moisture, customer traffic humidity, HVAC system contamination",
      solutions: "Commercial air quality management, retail-specific mould prevention, customer safety protocols"
    },
    {
      type: "Educational Facilities",
      description: "Schools, childcare centres, and training institutions in Keysborough",
      risks: "High occupancy moisture, children's health concerns, learning environment quality",
      solutions: "Child-safe treatment methods, educational facility compliance, healthy learning environment maintenance"
    }
  ];

  const localFactors = [
    {
      factor: "Southeastern Melbourne Climate",
      impact: "Keysborough's position in Melbourne's southeast creates specific humidity patterns and seasonal moisture challenges",
      solution: "Climate-adapted moisture control strategies designed for southeastern Melbourne conditions"
    },
    {
      factor: "Dandenong Creek Proximity",
      impact: "Nearby waterways contribute to elevated humidity levels and potential flood-related moisture issues",
      solution: "Waterway-adjacent property moisture management and flood damage prevention protocols"
    },
    {
      factor: "Mixed Development Density",
      impact: "Combination of residential, industrial, and commercial properties creates varied mould risk profiles",
      solution: "Property-type specific mould prevention strategies tailored to mixed development environments"
    },
    {
      factor: "Transport Infrastructure",
      impact: "Proximity to major roads and railways can affect air quality and building ventilation needs",
      solution: "Transport-corridor specific air quality management and ventilation optimisation"
    }
  ];

  const testimonials = [
    {
      name: "David Chen",
      location: "Keysborough, VIC",
      rating: 5,
      text: "Exceptional service from Mould & Restoration Co. when we discovered mould in our modern family home. Their team understood the specific challenges of newer construction and provided comprehensive solutions. Professional, thorough, and genuinely caring about our family's health."
    },
    {
      name: "Sarah Williams",
      location: "Keysborough Industrial Area, VIC",
      rating: 5,
      text: "As a facility manager for a major warehouse operation, I needed mould remediation specialists who understood industrial environments. Their team's expertise in manufacturing facility challenges was impressive, and they worked around our 24/7 operations seamlessly."
    },
    {
      name: "Michael Thompson",
      location: "Keysborough Shopping Centre, VIC",
      rating: 5,
      text: "When mould issues threatened our retail tenants, Mould & Restoration Co. responded immediately with commercial-grade solutions. Their understanding of retail environment requirements and customer safety protocols made all the difference. Highly professional team."
    }
  ];

  const faqData = [
    {
      question: "What makes Keysborough properties particularly susceptible to mould growth?",
      answer: "Keysborough's location in southeastern Melbourne creates specific challenges including proximity to Dandenong Creek waterways, mixed residential and industrial development patterns, and modern construction methods that can trap moisture. Our team addresses these location-specific factors with tailored prevention strategies."
    },
    {
      question: "How do you handle mould remediation in Keysborough's industrial facilities?",
      answer: "Industrial facilities require specialised approaches including process-specific moisture control, chemical-resistant treatments, and minimal operational disruption. Our IICRC-certified technicians work with facility managers to develop custom solutions that maintain production schedules while ensuring worker safety and compliance."
    },
    {
      question: "Do you provide mould prevention services for new construction in Keysborough?",
      answer: "Yes, we work with builders, developers, and new homeowners to implement mould prevention strategies during construction or immediately after completion. This includes moisture barrier installation, ventilation optimisation, and material selection guidance to prevent future issues."
    },
    {
      question: "What should Keysborough business owners know about commercial mould liability?",
      answer: "Business owners have legal obligations to maintain safe environments for employees and customers. We provide comprehensive documentation, compliance reporting, and ongoing monitoring services to help businesses meet their duty of care obligations while protecting their reputation and operations."
    },
    {
      question: "How quickly can you respond to mould emergencies in Keysborough?",
      answer: "We maintain rapid response capabilities for the Keysborough area with emergency services available 7 days a week. Industrial and commercial emergencies receive priority response, typically within 2-4 hours, while residential urgent situations are addressed within 24 hours."
    },
    {
      question: "Do you work with Keysborough schools and childcare centres?",
      answer: "Absolutely. Educational facilities require special attention due to children's health vulnerabilities and regulatory requirements. We use child-safe treatment methods, provide comprehensive documentation for regulatory compliance, and work during school holidays when possible to minimise disruption."
    }
  ];

  return (
    <>
      <LocationPageSEO
        pageTitle="Professional Mould Removal Keysborough | Expert Remediation Services"
        pageDescription="Expert mould removal services in Keysborough. Specialising in residential, commercial, and industrial mould remediation. IICRC certified, 5+ years experience. Call 1800 954 117."
        pageKeywords="mould removal Keysborough, mould remediation Keysborough, mould inspection Keysborough, Keysborough mould experts, industrial mould removal Keysborough"
        canonicalUrl="/locations/keysborough"
        suburb="Keysborough"
      />

      <EnhancedSchemaMarkup
        businessName="Mould & Restoration Co."
        suburb="Keysborough"
        phoneNumber="1800 954 117"
        address="Keysborough, VIC"
        businessHours={businessHours}
        services={keysboroughServices}
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
                      <span className="block text-yellow-400">Keysborough</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                      Expert mould remediation services for Keysborough's residential, commercial, and industrial properties. IICRC certified specialists with 5+ years local experience.
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
                    src="/images/keysborough-mould-removal-hero.jpg"
                    alt="Professional mould removal services in Keysborough - expert technicians treating residential and industrial properties"
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
                      Keysborough's Trusted Mould Removal Specialists
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Serving Keysborough's diverse property landscape for over 5 years, Mould & Restoration Co. understands the unique challenges facing southeastern Melbourne properties. From modern family homes to complex industrial facilities, our IICRC-certified team delivers comprehensive mould solutions tailored to local conditions.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Residential Expertise</h4>
                        <p className="text-professional">Modern construction and family home specialists</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Industrial Solutions</h4>
                        <p className="text-professional">Manufacturing and warehouse mould remediation</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Commercial Services</h4>
                        <p className="text-professional">Retail and office building mould prevention</p>
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
                    <h3 className="font-bold text-lg text-blue-900 mb-2">Why Choose Our Keysborough Service?</h3>
                    <ul className="space-y-2 text-blue-800">
                      <li>• Local expertise in southeastern Melbourne conditions</li>
                      <li>• Specialised industrial and commercial experience</li>
                      <li>• Family-safe treatment methods for residential properties</li>
                      <li>• Comprehensive compliance documentation</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <OptimizedImage
                    src="/images/keysborough-service-area.jpg"
                    alt="Mould removal service area covering Keysborough and surrounding southeastern Melbourne suburbs"
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
                  Keysborough Property Types We Service
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  Our experienced team handles mould challenges across all property types in Keysborough, from modern family homes to complex industrial facilities.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {propertyTypes.map((property, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <OptimizedImage
                      src={`/images/keysborough-${property.type.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                      alt={`${property.type} mould removal services in Keysborough`}
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
                  Keysborough Environmental Factors
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  Understanding local conditions is crucial for effective mould prevention. Our team addresses the specific environmental challenges facing Keysborough properties.
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
                  Comprehensive Mould Services in Keysborough
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  From initial inspection to complete remediation, we provide end-to-end mould solutions tailored to Keysborough's diverse property needs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {keysboroughServices.map((service, index) => (
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
                    Our Keysborough team is available 24/7 for emergency mould situations. Don't wait - early intervention saves time and money.
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
                  Specialized Keysborough Mould Solutions
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  Beyond standard mould removal, we offer specialised services tailored to Keysborough's unique property mix and environmental challenges.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="bg-columbia w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">Industrial Facilities</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-professional">
                      Comprehensive mould management for Keysborough's manufacturing and logistics facilities, including process-specific moisture control and minimal operational disruption.
                    </p>
                    <ul className="space-y-2 text-sm text-professional">
                      <li>• Chemical-resistant treatment systems</li>
                      <li>• 24/7 production-friendly scheduling</li>
                      <li>• Worker safety compliance protocols</li>
                      <li>• Industrial-grade ventilation solutions</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-success" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">Educational Institutions</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-professional">
                      Child-safe mould remediation for Keysborough schools and childcare centres, prioritising health safety and regulatory compliance.
                    </p>
                    <ul className="space-y-2 text-sm text-professional">
                      <li>• Non-toxic treatment methods</li>
                      <li>• School holiday scheduling available</li>
                      <li>• Regulatory compliance documentation</li>
                      <li>• Ongoing monitoring programs</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wrench className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">Retail Complexes</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-professional">
                      Customer-safe mould solutions for Keysborough shopping centres and retail spaces, maintaining business operations while ensuring air quality.
                    </p>
                    <ul className="space-y-2 text-sm text-professional">
                      <li>• After-hours treatment scheduling</li>
                      <li>• Customer safety protocols</li>
                      <li>• Food service area specialisation</li>
                      <li>• Tenant communication support</li>
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
                  Our Keysborough Mould Removal Process
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  A systematic approach ensuring thorough mould elimination and long-term prevention for all Keysborough property types.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-columbia w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Initial Assessment</h3>
                  <p className="text-professional text-sm">
                    Comprehensive property inspection using advanced moisture detection equipment to identify all affected areas.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-success">2</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Containment Setup</h3>
                  <p className="text-professional text-sm">
                    Professional containment barriers to prevent spore spread during remediation process.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-yellow-600">3</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Safe Removal</h3>
                  <p className="text-professional text-sm">
                    IICRC-certified removal techniques using appropriate PPE and disposal methods for different property types.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">4</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Prevention Plan</h3>
                  <p className="text-professional text-sm">
                    Customised prevention strategies addressing specific Keysborough environmental factors and property characteristics.
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-charcoal mb-4">Quality Guarantee</h3>
                  <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                    Every Keysborough mould removal project comes with our comprehensive satisfaction guarantee. We stand behind our work with ongoing support and monitoring to ensure your property remains mould-free.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-sm text-professional">Satisfaction Rate</div>
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
                  What Keysborough Clients Say
                </h2>
                <p className="text-lg text-professional">
                  Authentic reviews from satisfied customers across Keysborough's residential, commercial, and industrial properties.
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
                      <div className="text-sm text-professional">Happy Customers</div>
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
                  Keysborough Mould Removal FAQ
                </h2>
                <p className="text-lg text-professional">
                  Common questions about mould removal services in Keysborough and southeastern Melbourne.
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
                    Our Keysborough mould removal experts are here to help with any specific concerns about your property.
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
                  Contact Keysborough's Mould Removal Experts
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Ready to address your mould concerns? Our certified team provides fast, professional service throughout Keysborough and southeastern Melbourne.
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
                      Proudly serving Keysborough and surrounding southeastern Melbourne suburbs
                    </p>
                    <div className="text-sm text-gray-400">
                      <p><strong>ABN:</strong> 47 683 089 652</p>
                      <p><strong>Certifications:</strong> IICRC Standards</p>
                    </div>
                  </div>

                  <div className="bg-blue-900 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-3">Emergency Response</h3>
                    <p className="text-blue-100 mb-4">
                      Mould emergencies can't wait. Our Keysborough team provides 24/7 emergency response for urgent situations affecting health and safety.
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
                  <h3 className="text-2xl font-bold mb-6">Get Your Free Keysborough Mould Assessment</h3>
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
                        <option value="residential">Residential Home</option>
                        <option value="commercial">Commercial Building</option>
                        <option value="industrial">Industrial Facility</option>
                        <option value="retail">Retail Space</option>
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
                        placeholder="Tell us about the mould issue, location, and any health concerns..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-md hover:bg-primary-600 transition-colors"
                    >
                      Request Free Assessment
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

export default Keysborough;