import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Clock, CheckCircle, Users, Award, Wrench } from 'lucide-react';
import LocationPageSEO from '@/components/seo/SEOHead';
import { EnhancedSchemaMarkup } from '../../components/seo/EnhancedSchemaMarkup';





import { OptimizedImage } from '../../components/OptimizedImage';

const NarreWarren: React.FC = () => {
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
    { name: 'Narre Warren Mould Removal', url: '/locations/narre-warren' }
  ];

  const narreWarrenServices = [
    "Residential mould inspections and testing",
    "Commercial mould assessments",
    "Shopping centre air quality management",
    "Industrial facility mould remediation",
    "Educational facility mould services",
    "Healthcare facility compliance",
    "Pre-purchase mould inspections",
    "Post-construction mould assessment",
    "Emergency mould response",
    "HVAC system mould cleaning",
    "New development moisture control",
    "Body corporate mould solutions"
  ];

  const propertyTypes = [
    {
      type: "Master-Planned Communities",
      description: "Large-scale residential developments and modern estates throughout Narre Warren's growth corridors",
      risks: "New construction moisture issues, shared infrastructure challenges, development-stage ventilation problems",
      solutions: "Master-plan specific moisture strategies, community-wide prevention systems, developer coordination protocols"
    },
    {
      type: "Major Shopping Centres",
      description: "Large retail complexes including Westfield Fountain Gate and commercial shopping precincts",
      risks: "High customer traffic humidity, food court moisture, complex HVAC systems, tenant density challenges",
      solutions: "Commercial-scale air management, customer safety protocols, tenant coordination, retail-specific treatments"
    },
    {
      type: "Industrial and Logistics",
      description: "Manufacturing facilities, warehouses, and distribution centres in Narre Warren's industrial areas",
      risks: "Large-scale process humidity, storage condensation, worker safety concerns, operational continuity needs",
      solutions: "Industrial-grade remediation systems, minimal disruption scheduling, workplace compliance protocols"
    },
    {
      type: "Established Housing Areas",
      description: "Older residential neighbourhoods and established family homes throughout central Narre Warren",
      risks: "Aging building materials, outdated ventilation systems, renovation-related moisture issues",
      solutions: "Heritage-sensitive treatments, ventilation upgrades, family-safe renovation support"
    }
  ];

  const localFactors = [
    {
      factor: "Major Growth Corridor",
      impact: "Narre Warren's status as a key Melbourne growth area creates construction-related moisture challenges and new development issues",
      solution: "Growth-corridor specific strategies including new construction moisture management and development-stage prevention"
    },
    {
      factor: "Regional Shopping Hub",
      impact: "Major retail centres create high-density commercial moisture challenges requiring large-scale air quality management",
      solution: "Commercial-scale remediation systems designed for major retail environments with customer safety priority"
    },
    {
      factor: "Transport Infrastructure",
      impact: "Major road and rail connections affect air circulation patterns and create unique building ventilation challenges",
      solution: "Infrastructure-adapted ventilation strategies and transport corridor air quality management"
    },
    {
      factor: "Diverse Community Needs",
      impact: "Mixed demographics from new families to established residents create varied mould risk profiles and treatment preferences",
      solution: "Community-specific approaches tailored to diverse household needs and property types"
    }
  ];

  const testimonials = [
    {
      name: "Michelle Thompson",
      location: "Narre Warren Estate, VIC",
      rating: 5,
      text: "Excellent service when mould appeared in our new home's ensuite. The team understood new construction challenges and provided comprehensive solutions with ongoing prevention advice. Professional and thorough throughout."
    },
    {
      name: "Robert Kim",
      location: "Fountain Gate Shopping Centre, VIC",
      rating: 5,
      text: "As a retail manager, I needed mould remediation that wouldn't impact our customers or operations. Their team worked seamlessly around shopping hours and provided comprehensive air quality solutions. Outstanding commercial service."
    },
    {
      name: "Sandra Phillips",
      location: "Narre Warren Industrial Park, VIC",
      rating: 5,
      text: "When mould issues threatened our warehouse operations, they responded with industrial-scale solutions that maintained our logistics schedule. Their understanding of large facility challenges was impressive."
    }
  ];

  const faqData = [
    {
      question: "What makes Narre Warren properties particularly susceptible to mould growth?",
      answer: "Narre Warren's rapid development creates specific challenges including new construction moisture issues, high-density commercial activities from major shopping centres, transport infrastructure effects on air circulation, and diverse property types from master-planned estates to established homes requiring varied approaches."
    },
    {
      question: "How do you handle mould remediation in Narre Warren's major shopping centres?",
      answer: "Major retail centres require specialised large-scale approaches including commercial-grade air management systems, customer safety protocols, after-hours scheduling coordination, tenant communication, and comprehensive air quality management designed for high-traffic retail environments."
    },
    {
      question: "Do you provide mould services for Narre Warren's industrial facilities?",
      answer: "Yes, we specialise in industrial-scale mould remediation for manufacturing and logistics facilities with large-scale process humidity control, minimal operational disruption, workplace safety compliance, and industrial-grade treatment systems designed for warehouse and distribution environments."
    },
    {
      question: "What should new home buyers in Narre Warren know about mould prevention?",
      answer: "New home buyers should focus on construction-stage moisture management, proper ventilation installation, understanding new building material moisture patterns, and ongoing monitoring systems. We provide comprehensive new home assessments and prevention planning for master-planned developments."
    },
    {
      question: "How quickly can you respond to mould emergencies in Narre Warren?",
      answer: "We provide rapid emergency response for Narre Warren properties, typically within 2-4 hours for commercial and industrial facilities, and within 24 hours for residential emergencies, with priority response for major retail centres and industrial operations."
    },
    {
      question: "Do you work with Narre Warren developers and body corporates?",
      answer: "Absolutely. We work extensively with developers, body corporates, and property managers in Narre Warren's growth corridor, providing master-plan moisture strategies, community-wide prevention systems, compliance documentation, and ongoing monitoring for large-scale developments."
    }
  ];

  return (
    <>
      <LocationPageSEO
        pageTitle="Professional Mould Removal Narre Warren | Expert Remediation Services"
        pageDescription="Expert mould removal services in Narre Warren. Specialising in master-planned communities, shopping centres, and industrial facilities. IICRC certified, 5+ years experience. Call 1800 954 117."
        pageKeywords="mould removal Narre Warren, mould remediation Narre Warren, mould inspection Narre Warren, Narre Warren mould experts, shopping centre mould removal"
        canonicalUrl="/locations/narre-warren"
        suburb="Narre Warren"
      />

      <EnhancedSchemaMarkup
        businessName="Mould & Restoration Co."
        suburb="Narre Warren"
        phoneNumber="1800 954 117"
        address="Narre Warren, VIC"
        businessHours={businessHours}
        services={narreWarrenServices}
      />



      <div className="min-h-screen bg-white">
        <main className="pt-16">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-24">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-centre">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      Professional Mould Removal
                      <span className="block text-yellow-400">Narre Warren</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                      Expert mould remediation services for Narre Warren's master-planned communities, major shopping centres, and industrial facilities. IICRC certified specialists with 5+ years local experience.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:1800954117"
                      className="inline-flex items-centre justify-centre px-8 py-4 text-lg font-semibold bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call 1800 954 117
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-centre justify-centre px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
                    >
                      Get Free Quote
                    </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                    <div className="text-centre">
                      <div className="text-3xl font-bold text-yellow-400">5+</div>
                      <div className="text-blue-100">Years Experience</div>
                    </div>
                    <div className="text-centre">
                      <div className="text-3xl font-bold text-yellow-400">100+</div>
                      <div className="text-blue-100">Properties Restored</div>
                    </div>
                    <div className="text-centre">
                      <div className="text-3xl font-bold text-yellow-400">24/7</div>
                      <div className="text-blue-100">Emergency Response</div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <OptimizedImage
                    src="/images/narre-warren-mould-removal-hero.jpg"
                    alt="Professional mould removal services in Narre Warren - expert treatment for master-planned communities, shopping centres, and industrial facilities"
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
              <div className="flex items-centre justify-between flex-wrap gap-4">
                <div className="flex items-centre space-x-3">
                  <Clock className="h-6 w-6" />
                  <span className="font-semibold text-lg">24/7 Emergency Mould Removal Available</span>
                </div>
                <a
                  href="tel:1800954117"
                  className="bg-white text-red-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colours"
                >
                  Call Now: 1800 954 117
                </a>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-centre">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
                      Narre Warren's Trusted Growth Corridor Mould Specialists
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Serving Narre Warren's dynamic growth corridor for over 5 years, Mould & Restoration Co. understands the unique challenges facing Melbourne's major southeastern development hub. From master-planned communities to major shopping centres, our IICRC-certified team delivers comprehensive mould solutions tailored to rapid urban growth.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">New Development Expertise</h4>
                        <p className="text-professional">Master-planned community specialists</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Commercial Scale Solutions</h4>
                        <p className="text-professional">Major shopping centre air quality management</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Industrial Facilities</h4>
                        <p className="text-professional">Large-scale manufacturing and logistics</p>
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
                    <h3 className="font-bold text-lg text-blue-900 mb-2">Why Choose Our Narre Warren Service?</h3>
                    <ul className="space-y-2 text-blue-800">
                      <li>• Growth corridor development expertise</li>
                      <li>• Major retail centre air quality systems</li>
                      <li>• Industrial-scale remediation capabilities</li>
                      <li>• Community-wide prevention strategies</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <OptimizedImage
                    src="/images/narre-warren-service-area.jpg"
                    alt="Mould removal service area covering Narre Warren and surrounding southeastern Melbourne growth corridor"
                    className="rounded-lg shadow-lg"
                  />

                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary">
                    <h3 className="font-bold text-lg text-charcoal mb-3">ABN: 47 683 089 652</h3>
                    <div className="space-y-2 text-gray-700">
                      <p className="flex items-centre">
                        <Phone className="h-4 w-4 mr-2 text-primary" />
                        <strong>Phone:</strong> 1800 954 117
                      </p>
                      <p className="flex items-centre">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <strong>Hours:</strong> 7am - 7pm, 7 days
                      </p>
                      <p className="flex items-centre">
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
              <div className="text-centre mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                  Narre Warren Property Types We Service
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  Our experienced team handles mould challenges across all property types in Narre Warren, from master-planned communities to major commercial and industrial facilities.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {propertyTypes.map((property, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <OptimizedImage
                      src={`/images/narre-warren-${property.type.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                      alt={`${property.type} mould removal services in Narre Warren`}
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
              <div className="text-centre mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                  Narre Warren Environmental Factors
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  Understanding local conditions is crucial for effective mould prevention. Our team addresses the specific environmental challenges facing Narre Warren's growth corridor properties.
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
              <div className="text-centre mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                  Comprehensive Mould Services in Narre Warren
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  From initial inspection to complete remediation, we provide end-to-end mould solutions tailored to Narre Warren's diverse growth corridor needs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {narreWarrenServices.map((service, index) => (
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
                <div className="text-centre">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Need Immediate Assistance?</h3>
                  <p className="text-blue-800 mb-6">
                    Our Narre Warren team is available 24/7 for emergency mould situations. Don't wait - early intervention saves time and money.
                  </p>
                  <a
                    href="tel:1800954117"
                    className="inline-flex items-centre px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-colours"
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
              <div className="text-centre mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                  Specialized Narre Warren Mould Solutions
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  Beyond standard mould removal, we offer specialised services tailored to Narre Warren's unique growth corridor environment and major development projects.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="text-centre mb-6">
                    <div className="bg-columbia w-16 h-16 rounded-full flex items-centre justify-centre mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">Master-Planned Communities</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-professional">
                      Comprehensive mould management for Narre Warren's large-scale residential developments, including community-wide prevention strategies and developer coordination.
                    </p>
                    <ul className="space-y-2 text-sm text-professional">
                      <li>• New construction moisture management</li>
                      <li>• Community-wide prevention systems</li>
                      <li>• Developer coordination protocols</li>
                      <li>• Body corporate compliance support</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="text-centre mb-6">
                    <div className="bg-success/10 w-16 h-16 rounded-full flex items-centre justify-centre mx-auto mb-4">
                      <Award className="h-8 w-8 text-success" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">Major Shopping Centres</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-professional">
                      Large-scale air quality management for major retail centres like Westfield Fountain Gate, ensuring customer safety and business continuity.
                    </p>
                    <ul className="space-y-2 text-sm text-professional">
                      <li>• Commercial-scale air management</li>
                      <li>• Customer safety protocols</li>
                      <li>• Tenant coordination systems</li>
                      <li>• Retail-specific treatment methods</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="text-centre mb-6">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-centre justify-centre mx-auto mb-4">
                      <Wrench className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">Industrial Facilities</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-professional">
                      Industrial-scale mould remediation for manufacturing and logistics facilities, maintaining operations while ensuring workplace safety.
                    </p>
                    <ul className="space-y-2 text-sm text-professional">
                      <li>• Large-scale process humidity control</li>
                      <li>• Minimal operational disruption</li>
                      <li>• Workplace safety compliance</li>
                      <li>• Industrial-grade treatment systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-centre mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                  Our Narre Warren Mould Removal Process
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  A systematic approach ensuring thorough mould elimination and long-term prevention for all Narre Warren property types and development scales.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-centre">
                  <div className="bg-columbia w-16 h-16 rounded-full flex items-centre justify-centre mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Growth Corridor Assessment</h3>
                  <p className="text-professional text-sm">
                    Comprehensive property evaluation considering new development factors, community-scale issues, and growth corridor environmental conditions.
                  </p>
                </div>

                <div className="text-centre">
                  <div className="bg-success/10 w-16 h-16 rounded-full flex items-centre justify-centre mx-auto mb-4">
                    <span className="text-2xl font-bold text-success">2</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Scale-Appropriate Containment</h3>
                  <p className="text-professional text-sm">
                    Professional containment systems designed for property scale, from residential homes to major shopping centres and industrial facilities.
                  </p>
                </div>

                <div className="text-centre">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-centre justify-centre mx-auto mb-4">
                    <span className="text-2xl font-bold text-yellow-600">3</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Advanced Remediation</h3>
                  <p className="text-professional text-sm">
                    IICRC-certified removal using technology and methods appropriate for property type, occupancy, and operational requirements.
                  </p>
                </div>

                <div className="text-centre">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-centre justify-centre mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">4</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Community Prevention</h3>
                  <p className="text-professional text-sm">
                    Long-term prevention strategies addressing growth corridor challenges, development-specific factors, and community-wide monitoring.
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
                <div className="text-centre">
                  <h3 className="text-2xl font-bold text-charcoal mb-4">Growth Corridor Expertise Guarantee</h3>
                  <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                    Every Narre Warren mould removal project benefits from our growth corridor expertise. We understand the unique challenges of rapid development and provide solutions that grow with your community.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="text-centre">
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-sm text-professional">Development Focus</div>
                    </div>
                    <div className="text-centre">
                      <div className="text-2xl font-bold text-success">5+</div>
                      <div className="text-sm text-professional">Years Local Experience</div>
                    </div>
                    <div className="text-centre">
                      <div className="text-2xl font-bold text-purple-600">24/7</div>
                      <div className="text-sm text-professional">Commercial Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-centre mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                  What Narre Warren Clients Say
                </h2>
                <p className="text-lg text-professional">
                  Authentic reviews from satisfied customers across Narre Warren's residential, commercial, and industrial properties.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-centre mb-4">
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

              <div className="text-centre mt-12">
                <div className="bg-white rounded-lg p-6 shadow-lg inline-block">
                  <div className="flex items-centre justify-centre space-x-4">
                    <div className="text-centre">
                      <div className="text-2xl font-bold text-yellow-500">5.0</div>
                      <div className="flex text-yellow-400 text-lg">★★★★★</div>
                      <div className="text-sm text-professional">Average Rating</div>
                    </div>
                    <div className="border-l h-16 mx-4"></div>
                    <div className="text-centre">
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
              <div className="text-centre mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                  Narre Warren Mould Removal FAQ
                </h2>
                <p className="text-lg text-professional">
                  Common questions about mould removal services in Narre Warren and Melbourne's growth corridor.
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

              <div className="mt-12 text-centre">
                <div className="bg-columbia rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Still Have Questions?</h3>
                  <p className="text-blue-800 mb-4">
                    Our Narre Warren growth corridor mould removal experts are here to help with any specific concerns about your property.
                  </p>
                  <a
                    href="tel:1800954117"
                    className="inline-flex items-centre px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-colours"
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
              <div className="text-centre mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Contact Narre Warren's Growth Corridor Mould Experts
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Ready to address your mould concerns? Our certified team provides fast, professional service throughout Narre Warren and Melbourne's growth corridor.
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
                      Proudly serving Narre Warren and surrounding Melbourne growth corridor suburbs
                    </p>
                    <div className="text-sm text-gray-400">
                      <p><strong>ABN:</strong> 47 683 089 652</p>
                      <p><strong>Certifications:</strong> IICRC Standards</p>
                    </div>
                  </div>

                  <div className="bg-blue-900 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-3">Emergency Response</h3>
                    <p className="text-blue-100 mb-4">
                      Growth corridor emergencies can't wait. Our Narre Warren team provides 24/7 emergency response for urgent situations affecting homes and businesses.
                    </p>
                    <a
                      href="tel:1800954117"
                      className="inline-flex items-centre px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colours"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Emergency Line: 1800 954 117
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 text-charcoal">
                  <h3 className="text-2xl font-bold mb-6">Get Your Free Narre Warren Assessment</h3>
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
                        <option value="commercial">Shopping Centre/Retail</option>
                        <option value="industrial">Industrial Facility</option>
                        <option value="masterplanned">Master-Planned Community</option>
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
                        placeholder="Tell us about the mould issue, property scale, and any specific concerns..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-md hover:bg-primary-600 transition-colours"
                    >
                      Request Free Assessment
                    </button>
                  </form>

                  <div className="mt-6 text-sm text-professional text-centre">
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

export default NarreWarren;