import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Clock, CheckCircle, Users, Award, Wrench } from 'lucide-react';
import LocationPageSEO from '@/components/seo/SEOHead';
import { EnhancedSchemaMarkup } from '../../components/seo/EnhancedSchemaMarkup';





import { OptimizedImage } from '../../components/OptimizedImage';

const Cranbourne: React.FC = () => {
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
    { name: 'Cranbourne Mould Removal', url: '/locations/cranbourne' }
  ];

  const cranbourneServices = [
    "Residential mould inspections and testing",
    "Commercial mould assessments",
    "New housing estate mould solutions",
    "Shopping centre air quality management",
    "Educational facility mould services",
    "Industrial facility mould remediation",
    "Pre-purchase mould inspections",
    "Post-construction mould assessment",
    "Emergency mould response",
    "HVAC system mould cleaning",
    "Rapid development moisture control",
    "Community facility mould solutions"
  ];

  const propertyTypes = [
    {
      type: "New Housing Estates",
      description: "Large-scale residential developments and master-planned communities throughout Cranbourne's growth areas",
      risks: "New construction moisture issues, rapid development challenges, builder defect moisture problems, estate-wide ventilation concerns",
      solutions: "New construction expertise, estate-wide prevention strategies, builder coordination protocols, rapid response systems"
    },
    {
      type: "Established Family Homes",
      description: "Older residential properties and established neighbourhoods throughout central and older Cranbourne areas",
      risks: "Aging building materials, outdated ventilation systems, renovation moisture issues, family health concerns",
      solutions: "Family-safe treatments, heritage building expertise, renovation support, health-focused solutions"
    },
    {
      type: "Industrial and Manufacturing",
      description: "Manufacturing facilities, warehouses, and industrial complexes in Cranbourne's industrial precincts",
      risks: "Large-scale process humidity, worker safety concerns, production continuity needs, storage moisture issues",
      solutions: "Industrial-scale remediation, worker safety protocols, minimal production disruption, large facility expertise"
    },
    {
      type: "Community and Commercial",
      description: "Shopping centres, schools, community facilities, and commercial buildings serving Cranbourne's growing population",
      risks: "Public safety requirements, business continuity, community health concerns, diverse occupancy patterns",
      solutions: "Community-focused approaches, business continuity planning, public safety protocols, diverse facility expertise"
    }
  ];

  const localFactors = [
    {
      factor: "Rapid Urban Development",
      impact: "Cranbourne's position as a major Melbourne growth area creates construction-related moisture challenges and new development issues requiring specialised approaches",
      solution: "Growth area expertise with new construction moisture management, developer coordination, and rapid development response systems"
    },
    {
      factor: "Diverse Community Needs",
      impact: "Mix of new families, established residents, and diverse demographics creates varied mould risk profiles and treatment preferences across different areas",
      solution: "Community-specific approaches tailored to different demographic needs, cultural considerations, and varied property requirements"
    },
    {
      factor: "Educational and Community Hub",
      impact: "High concentration of schools, community centres, and public facilities requires specialised approaches for community health and safety",
      solution: "Community facility expertise with public safety focus, educational institution experience, and comprehensive community health protection"
    },
    {
      factor: "Industrial Development Zone",
      impact: "Growing industrial sector creates unique workplace challenges and large-scale facility requirements for specialised industrial treatments",
      solution: "Industrial facility expertise with workplace safety protocols, large-scale remediation capabilities, and production continuity focus"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Cranbourne New Estate, VIC",
      rating: 5,
      text: "Excellent service when we discovered mould in our brand new home. The team understood new construction issues and worked directly with our builder to resolve the problem. Professional expertise in new developments."
    },
    {
      name: "Michael Chen",
      location: "Cranbourne Manufacturing Facility, VIC",
      rating: 5,
      text: "As a facility manager for a large manufacturing operation, I needed mould specialists who could work around our production schedule. Their industrial expertise and minimal disruption approach was exactly what we needed."
    },
    {
      name: "Lisa Anderson",
      location: "Cranbourne Primary School, VIC",
      rating: 5,
      text: "When mould was discovered in our school library, their team provided immediate solutions with full attention to student safety. Excellent communication with parents and staff throughout the process."
    }
  ];

  const faqData = [
    {
      question: "What makes Cranbourne properties particularly susceptible to mould issues?",
      answer: "Cranbourne's rapid development creates specific challenges including new construction moisture issues, growing industrial activities, diverse community needs, and the mix of new estates with established homes requiring varied treatment approaches tailored to different property types and ages."
    },
    {
      question: "How do you handle mould in Cranbourne's new housing estates?",
      answer: "New housing estates require specialised approaches including new construction moisture management, builder defect assessment, estate-wide prevention strategies, developer coordination, and rapid response systems designed for large-scale residential developments."
    },
    {
      question: "Do you provide mould services for Cranbourne's industrial facilities?",
      answer: "Yes, we specialise in industrial facility mould remediation with large-scale process humidity control, worker safety protocols, minimal production disruption, industrial-grade treatment systems, and workplace compliance designed for manufacturing environments."
    },
    {
      question: "What should new home buyers in Cranbourne know about mould prevention?",
      answer: "New home buyers should focus on construction quality assessment, proper ventilation installation, understanding new building moisture patterns, builder warranty issues, and ongoing monitoring systems. We provide comprehensive new home assessments and prevention planning."
    },
    {
      question: "How quickly can you respond to mould emergencies in Cranbourne?",
      answer: "We provide rapid emergency response for Cranbourne properties, typically within 2-4 hours for schools, industrial facilities, and community buildings, and within 24 hours for residential emergencies, with priority response for new construction and community facilities."
    },
    {
      question: "Do you work with Cranbourne schools and community facilities?",
      answer: "Absolutely. We have extensive experience with schools, community centres, and public facilities in Cranbourne, providing child-safe treatments, community health protection, regulatory compliance documentation, and public safety protocols."
    }
  ];

  return (
    <>
      <LocationPageSEO
        pageTitle="Professional Mould Removal Cranbourne | Expert Growth Area Remediation Services"
        pageDescription="Expert mould removal services in Cranbourne. Specialising in new housing estates, industrial facilities, and community buildings. IICRC certified, 5+ years experience. Call 1800 954 117."
        pageKeywords="mould removal Cranbourne, mould remediation Cranbourne, mould inspection Cranbourne, Cranbourne new estate mould experts, industrial mould removal Cranbourne"
        canonicalUrl="/locations/cranbourne"
        suburb="Cranbourne"
      />

      <EnhancedSchemaMarkup
        businessName="Mould & Restoration Co."
        suburb="Cranbourne"
        phoneNumber="1800 954 117"
        address="Cranbourne, VIC"
        businessHours={businessHours}
        services={cranbourneServices}
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
                      <span className="block text-yellow-400">Cranbourne</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                      Expert mould remediation services for Cranbourne's new housing estates, industrial facilities, and community buildings. IICRC certified specialists with 5+ years growth area expertise.
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
                    src="/images/cranbourne-mould-removal-hero.jpg"
                    alt="Professional mould removal services in Cranbourne - growth area specialists treating new housing estates, industrial facilities, and community buildings"
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
                      Cranbourne's Trusted Growth Area Mould Specialists
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Serving Cranbourne's rapid development corridor for over 5 years, Mould & Restoration Co. understands the unique challenges facing Melbourne's major southeastern growth area. From new housing estates to industrial facilities, our IICRC-certified team delivers comprehensive mould solutions tailored to diverse community needs.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">New Construction Expertise</h4>
                        <p className="text-professional">Housing estate and builder specialists</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Industrial Solutions</h4>
                        <p className="text-professional">Manufacturing facility specialists</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Community Facilities</h4>
                        <p className="text-professional">Schools and public building experts</p>
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
                    <h3 className="font-bold text-lg text-blue-900 mb-2">Why Choose Our Cranbourne Service?</h3>
                    <ul className="space-y-2 text-blue-800">
                      <li>• Growth area development expertise</li>
                      <li>• New construction moisture management</li>
                      <li>• Industrial facility remediation experience</li>
                      <li>• Community-focused health protection</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <OptimizedImage
                    src="/images/cranbourne-service-area.jpg"
                    alt="Mould removal service area covering Cranbourne and surrounding Melbourne growth corridor suburbs"
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
                  Cranbourne Property Types We Service
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  Our experienced team handles mould challenges across all property types in Cranbourne, from new housing estates to industrial facilities and community buildings.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {propertyTypes.map((property, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <OptimizedImage
                      src={`/images/cranbourne-${property.type.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                      alt={`${property.type} mould removal services in Cranbourne`}
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
                  Cranbourne Growth Area Factors
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  Understanding local conditions is crucial for effective mould prevention. Our team addresses the specific environmental challenges facing Cranbourne's rapid development area.
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
                  Comprehensive Mould Services in Cranbourne
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  From initial inspection to complete remediation, we provide end-to-end mould solutions tailored to Cranbourne's diverse growth area needs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cranbourneServices.map((service, index) => (
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
                    Our Cranbourne team is available 24/7 for emergency mould situations. Don't wait - early intervention saves time and money.
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
                  Specialized Cranbourne Mould Solutions
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  Beyond standard mould removal, we offer specialised services tailored to Cranbourne's unique growth area environment and diverse community needs.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="bg-columbia w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">New Housing Estates</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-professional">
                      Comprehensive mould management for Cranbourne's new residential developments, including new construction moisture management and estate-wide prevention strategies.
                    </p>
                    <ul className="space-y-2 text-sm text-professional">
                      <li>• New construction expertise</li>
                      <li>• Builder defect assessment</li>
                      <li>• Estate-wide prevention systems</li>
                      <li>• Developer coordination protocols</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-success" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">Industrial Facilities</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-professional">
                      Large-scale mould remediation for Cranbourne's manufacturing and industrial facilities, maintaining operations while ensuring worker safety.
                    </p>
                    <ul className="space-y-2 text-sm text-professional">
                      <li>• Industrial-scale remediation</li>
                      <li>• Worker safety protocols</li>
                      <li>• Minimal production disruption</li>
                      <li>• Large facility expertise</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wrench className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">Community Facilities</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-professional">
                      Specialised mould solutions for schools, community centres, and public facilities, prioritising community health and safety with child-safe treatments.
                    </p>
                    <ul className="space-y-2 text-sm text-professional">
                      <li>• Community health protection</li>
                      <li>• Child-safe treatment methods</li>
                      <li>• Public safety protocols</li>
                      <li>• Educational facility expertise</li>
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
                  Our Cranbourne Mould Removal Process
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  A systematic approach ensuring thorough mould elimination and long-term prevention for all Cranbourne property types with growth area expertise.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-columbia w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Growth Area Assessment</h3>
                  <p className="text-professional text-sm">
                    Comprehensive property evaluation considering new development factors, construction quality, and growth area environmental conditions.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-success">2</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Property-Specific Containment</h3>
                  <p className="text-professional text-sm">
                    Professional containment systems designed for different property types, from new homes to industrial facilities, preventing contamination spread.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-yellow-600">3</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Community-Safe Remediation</h3>
                  <p className="text-professional text-sm">
                    IICRC-certified removal using community-safe methods appropriate for residential, industrial, and public facility requirements.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">4</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Growth Area Prevention</h3>
                  <p className="text-professional text-sm">
                    Comprehensive prevention strategies addressing growth area challenges, new construction issues, and community health protection.
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-charcoal mb-4">Growth Area Expertise Guarantee</h3>
                  <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                    Every Cranbourne mould removal project benefits from our growth area expertise. We understand the unique challenges of rapid development and provide solutions for diverse community needs.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-sm text-professional">Community Focus</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success">5+</div>
                      <div className="text-sm text-professional">Years Growth Area Experience</div>
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
                  What Cranbourne Clients Say
                </h2>
                <p className="text-lg text-professional">
                  Authentic reviews from satisfied customers across Cranbourne's residential, industrial, and community properties.
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
                      <div className="text-sm text-professional">Happy Clients</div>
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
                  Cranbourne Mould Removal FAQ
                </h2>
                <p className="text-lg text-professional">
                  Common questions about mould removal services in Cranbourne and Melbourne's growth corridor.
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
                    Our Cranbourne growth area mould removal experts are here to help with any specific concerns about your property.
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
                  Contact Cranbourne's Growth Area Mould Experts
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Ready to address your mould concerns? Our certified team provides fast, professional service throughout Cranbourne and Melbourne's growth corridor.
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
                      Proudly serving Cranbourne and surrounding Melbourne growth corridor suburbs
                    </p>
                    <div className="text-sm text-gray-400">
                      <p><strong>ABN:</strong> 47 683 089 652</p>
                      <p><strong>Certifications:</strong> IICRC Standards</p>
                    </div>
                  </div>

                  <div className="bg-blue-900 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-3">Emergency Response</h3>
                    <p className="text-blue-100 mb-4">
                      Growth area emergencies can't wait. Our Cranbourne team provides 24/7 emergency response for urgent situations affecting homes, businesses, and community facilities.
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
                  <h3 className="text-2xl font-bold mb-6">Get Your Free Cranbourne Assessment</h3>
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
                        <option value="new-estate">New Housing Estate</option>
                        <option value="established-home">Established Family Home</option>
                        <option value="industrial">Industrial Facility</option>
                        <option value="community">Community/School Building</option>
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
                        placeholder="Tell us about the mould issue, property type, and any specific concerns..."
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

export default Cranbourne;