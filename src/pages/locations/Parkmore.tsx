import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Clock, CheckCircle, Users, Award, Wrench } from 'lucide-react';
import LocationPageSEO from '@/components/seo/SEOHead';
import { EnhancedSchemaMarkup } from '../../components/seo/EnhancedSchemaMarkup';





import { OptimizedImage } from '../../components/OptimizedImage';

const Parkmore: React.FC = () => {
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
    { name: 'Parkmore Mould Removal', url: '/locations/parkmore' }
  ];

  const parkmoreServices = [
    "Residential mould inspections and testing",
    "Commercial mould assessments",
    "Industrial facility mould remediation",
    "Retail complex mould prevention",
    "Shopping centre air quality management",
    "Office building mould solutions",
    "Pre-purchase mould inspections",
    "Post-renovation mould assessment",
    "Emergency mould response",
    "HVAC system mould cleaning",
    "Warehouse moisture control",
    "Structural drying services"
  ];

  const propertyTypes = [
    {
      type: "Suburban Family Homes",
      description: "Modern residential properties throughout Parkmore's established neighbourhoods",
      risks: "Poor ventilation design, bathroom moisture issues, basement dampness",
      solutions: "Comprehensive ventilation upgrades, moisture barrier installation, family-safe treatment protocols"
    },
    {
      type: "Shopping Complexes",
      description: "Major retail centres and commercial shopping facilities serving southeastern Melbourne",
      risks: "Food court humidity, customer traffic moisture, HVAC contamination",
      solutions: "Commercial air quality systems, retail-safe treatment scheduling, tenant coordination protocols"
    },
    {
      type: "Industrial Parks",
      description: "Manufacturing and logistics facilities within Parkmore's industrial zones",
      risks: "Process-related humidity, storage area condensation, worker exposure concerns",
      solutions: "Industrial-grade remediation, minimal operation disruption, workplace safety compliance"
    },
    {
      type: "Mixed-Use Developments",
      description: "Combined residential, retail, and office developments in Parkmore's growth areas",
      risks: "Cross-contamination between uses, shared ventilation systems, diverse occupancy patterns",
      solutions: "Multi-zone treatment strategies, use-specific prevention plans, comprehensive monitoring systems"
    }
  ];

  const localFactors = [
    {
      factor: "Southeastern Melbourne Location",
      impact: "Parkmore's position in Melbourne's southeast creates specific humidity patterns and seasonal moisture variations",
      solution: "Location-adapted moisture control strategies designed for southeastern Melbourne's climate conditions"
    },
    {
      factor: "Retail and Commercial Hub",
      impact: "High-density commercial activity creates unique air quality challenges and customer safety requirements",
      solution: "Commercial-grade air quality management with customer-safe treatment protocols and minimal business disruption"
    },
    {
      factor: "Transport Corridor Proximity",
      impact: "Major road and rail connections affect air circulation patterns and building ventilation requirements",
      solution: "Transport-corridor specific ventilation optimisation and air quality enhancement strategies"
    },
    {
      factor: "Mixed Development Density",
      impact: "Varied property types from residential to industrial create diverse mould risk profiles and treatment needs",
      solution: "Property-type specific remediation approaches tailored to Parkmore's diverse development landscape"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Adams",
      location: "Parkmore Family Home, VIC",
      rating: 5,
      text: "Outstanding service when we found mould in our family home near the shopping centre. The team understood our concerns about children's health and provided safe, thorough treatment. Professional from start to finish."
    },
    {
      name: "Mark Robertson",
      location: "Parkmore Retail Complex, VIC",
      rating: 5,
      text: "As a shopping centre manager, I needed mould remediation that wouldn't disrupt our tenants or customers. Their team worked seamlessly around our operating hours and provided comprehensive solutions. Excellent commercial experience."
    },
    {
      name: "Lisa Zhang",
      location: "Parkmore Industrial Park, VIC",
      rating: 5,
      text: "When mould threatened our manufacturing facility, their industrial specialists responded immediately. They understood our operational requirements and provided solutions that kept us running while ensuring worker safety. Highly recommended."
    }
  ];

  const faqData = [
    {
      question: "What makes Parkmore properties particularly susceptible to mould issues?",
      answer: "Parkmore's location in southeastern Melbourne, combined with high-density commercial activity and varied development types, creates specific challenges including elevated humidity from retail activities, transport corridor effects on air circulation, and diverse building ventilation systems requiring tailored approaches."
    },
    {
      question: "How do you handle mould remediation in Parkmore's busy shopping centres?",
      answer: "Shopping centres require specialised approaches including after-hours scheduling to minimise customer disruption, food-safe treatment methods for food court areas, tenant communication protocols, and comprehensive air quality management systems designed for high-traffic retail environments."
    },
    {
      question: "Do you provide mould services for Parkmore's industrial facilities?",
      answer: "Yes, we specialise in industrial mould remediation with experience in manufacturing and logistics facilities. Our services include process-specific moisture control, minimal operational disruption scheduling, workplace safety compliance, and industrial-grade treatment systems."
    },
    {
      question: "What should Parkmore homeowners know about mould prevention?",
      answer: "Parkmore homeowners should focus on proper ventilation, especially in bathrooms and basements, regular HVAC maintenance, prompt moisture issue resolution, and seasonal humidity monitoring. Our team provides comprehensive home assessments and prevention planning tailored to local conditions."
    },
    {
      question: "How quickly can you respond to mould emergencies in Parkmore?",
      answer: "We provide rapid emergency response for Parkmore properties, typically within 2-4 hours for commercial and industrial emergencies, and within 24 hours for residential urgent situations. Our team maintains equipment locally to ensure fast response times."
    },
    {
      question: "Do you work with Parkmore property managers and body corporates?",
      answer: "Absolutely. We have extensive experience with property managers, body corporates, and commercial property owners in Parkmore. We provide comprehensive reporting, compliance documentation, and ongoing monitoring services to support property management responsibilities."
    }
  ];

  return (
    <>
      <LocationPageSEO
        pageTitle="Professional Mould Removal Parkmore | Expert Remediation Services"
        pageDescription="Expert mould removal services in Parkmore. Specialising in residential, commercial, and industrial mould remediation. IICRC certified, 5+ years experience. Call 1800 954 117."
        pageKeywords="mould removal Parkmore, mould remediation Parkmore, mould inspection Parkmore, Parkmore mould experts, commercial mould removal Parkmore"
        canonicalUrl="/locations/parkmore"
        suburb="Parkmore"
      />

      <EnhancedSchemaMarkup
        businessName="Mould & Restoration Co."
        suburb="Parkmore"
        phoneNumber="1800 954 117"
        address="Parkmore, VIC"
        businessHours={businessHours}
        services={parkmoreServices}
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
                      <span className="block text-yellow-400">Parkmore</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                      Expert mould remediation services for Parkmore's residential, commercial, and industrial properties. IICRC certified specialists with 5+ years local experience.
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
                    src="/images/parkmore-mould-removal-hero.jpg"
                    alt="Professional mould removal services in Parkmore - expert technicians treating residential, commercial, and industrial properties"
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
                      Parkmore's Trusted Mould Removal Specialists
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Serving Parkmore's diverse property landscape for over 5 years, Mould & Restoration Co. understands the unique challenges facing southeastern Melbourne's commercial and residential hub. From family homes to major shopping complexes, our IICRC-certified team delivers comprehensive mould solutions tailored to local conditions.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Residential Expertise</h4>
                        <p className="text-professional">Family-safe treatments for modern homes</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Commercial Solutions</h4>
                        <p className="text-professional">Shopping centre and retail space specialists</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Industrial Services</h4>
                        <p className="text-professional">Manufacturing facility mould remediation</p>
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
                    <h3 className="font-bold text-lg text-blue-900 mb-2">Why Choose Our Parkmore Service?</h3>
                    <ul className="space-y-2 text-blue-800">
                      <li>• Local expertise in southeastern Melbourne conditions</li>
                      <li>• Specialised commercial and retail experience</li>
                      <li>• Customer-safe treatment protocols for high-traffic areas</li>
                      <li>• Comprehensive property management support</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <OptimizedImage
                    src="/images/parkmore-service-area.jpg"
                    alt="Mould removal service area covering Parkmore and surrounding southeastern Melbourne suburbs"
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
                  Parkmore Property Types We Service
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  Our experienced team handles mould challenges across all property types in Parkmore, from family homes to major commercial complexes.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {propertyTypes.map((property, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <OptimizedImage
                      src={`/images/parkmore-${property.type.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                      alt={`${property.type} mould removal services in Parkmore`}
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
                  Parkmore Environmental Factors
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  Understanding local conditions is crucial for effective mould prevention. Our team addresses the specific environmental challenges facing Parkmore properties.
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
                  Comprehensive Mould Services in Parkmore
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  From initial inspection to complete remediation, we provide end-to-end mould solutions tailored to Parkmore's diverse property needs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {parkmoreServices.map((service, index) => (
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
                    Our Parkmore team is available 24/7 for emergency mould situations. Don't wait - early intervention saves time and money.
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
                  Specialized Parkmore Mould Solutions
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  Beyond standard mould removal, we offer specialised services tailored to Parkmore's unique commercial hub and mixed-use environment.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="text-centre mb-6">
                    <div className="bg-columbia w-16 h-16 rounded-full flex items-centre justify-centre mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">Shopping Centre Solutions</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-professional">
                      Comprehensive mould management for Parkmore's major retail complexes, including food court air quality control and customer-safe treatment protocols.
                    </p>
                    <ul className="space-y-2 text-sm text-professional">
                      <li>• After-hours treatment scheduling</li>
                      <li>• Food-safe remediation methods</li>
                      <li>• Tenant coordination protocols</li>
                      <li>• High-traffic area management</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="text-centre mb-6">
                    <div className="bg-success/10 w-16 h-16 rounded-full flex items-centre justify-centre mx-auto mb-4">
                      <Award className="h-8 w-8 text-success" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">Industrial Facilities</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-professional">
                      Specialised mould remediation for Parkmore's manufacturing and logistics facilities, maintaining operations while ensuring worker safety.
                    </p>
                    <ul className="space-y-2 text-sm text-professional">
                      <li>• Process-specific moisture control</li>
                      <li>• Minimal operational disruption</li>
                      <li>• Worker safety compliance</li>
                      <li>• Industrial-grade treatments</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="text-centre mb-6">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-centre justify-centre mx-auto mb-4">
                      <Wrench className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">Mixed-Use Developments</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-professional">
                      Comprehensive mould solutions for Parkmore's combined residential, retail, and office developments with diverse occupancy patterns.
                    </p>
                    <ul className="space-y-2 text-sm text-professional">
                      <li>• Multi-zone treatment strategies</li>
                      <li>• Use-specific prevention plans</li>
                      <li>• Cross-contamination prevention</li>
                      <li>• Body corporate coordination</li>
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
                  Our Parkmore Mould Removal Process
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  A systematic approach ensuring thorough mould elimination and long-term prevention for all Parkmore property types.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-centre">
                  <div className="bg-columbia w-16 h-16 rounded-full flex items-centre justify-centre mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Comprehensive Assessment</h3>
                  <p className="text-professional text-sm">
                    Detailed property inspection using advanced moisture detection equipment to identify all affected areas and risk factors.
                  </p>
                </div>

                <div className="text-centre">
                  <div className="bg-success/10 w-16 h-16 rounded-full flex items-centre justify-centre mx-auto mb-4">
                    <span className="text-2xl font-bold text-success">2</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Strategic Containment</h3>
                  <p className="text-professional text-sm">
                    Professional containment barriers tailored to property type and occupancy patterns to prevent spore spread during treatment.
                  </p>
                </div>

                <div className="text-centre">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-centre justify-centre mx-auto mb-4">
                    <span className="text-2xl font-bold text-yellow-600">3</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Safe Remediation</h3>
                  <p className="text-professional text-sm">
                    IICRC-certified removal techniques using property-specific protocols and occupant-safe methods for different use types.
                  </p>
                </div>

                <div className="text-centre">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-centre justify-centre mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">4</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Prevention Strategy</h3>
                  <p className="text-professional text-sm">
                    Customised prevention plans addressing specific Parkmore environmental factors and property characteristics.
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
                <div className="text-centre">
                  <h3 className="text-2xl font-bold text-charcoal mb-4">Quality Guarantee</h3>
                  <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                    Every Parkmore mould removal project comes with our comprehensive satisfaction guarantee. We stand behind our work with ongoing support and monitoring to ensure your property remains mould-free.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="text-centre">
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-sm text-professional">Satisfaction Rate</div>
                    </div>
                    <div className="text-centre">
                      <div className="text-2xl font-bold text-success">5+</div>
                      <div className="text-sm text-professional">Years Experience</div>
                    </div>
                    <div className="text-centre">
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
              <div className="text-centre mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                  What Parkmore Clients Say
                </h2>
                <p className="text-lg text-professional">
                  Authentic reviews from satisfied customers across Parkmore's residential, commercial, and industrial properties.
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
              <div className="text-centre mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                  Parkmore Mould Removal FAQ
                </h2>
                <p className="text-lg text-professional">
                  Common questions about mould removal services in Parkmore and southeastern Melbourne.
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
                    Our Parkmore mould removal experts are here to help with any specific concerns about your property.
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
                  Contact Parkmore's Mould Removal Experts
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Ready to address your mould concerns? Our certified team provides fast, professional service throughout Parkmore and southeastern Melbourne.
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
                      Proudly serving Parkmore and surrounding southeastern Melbourne suburbs
                    </p>
                    <div className="text-sm text-gray-400">
                      <p><strong>ABN:</strong> 47 683 089 652</p>
                      <p><strong>Certifications:</strong> IICRC Standards</p>
                    </div>
                  </div>

                  <div className="bg-blue-900 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-3">Emergency Response</h3>
                    <p className="text-blue-100 mb-4">
                      Mould emergencies can't wait. Our Parkmore team provides 24/7 emergency response for urgent situations affecting health and safety.
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
                  <h3 className="text-2xl font-bold mb-6">Get Your Free Parkmore Mould Assessment</h3>
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
                        <option value="retail">Retail/Shopping Centre</option>
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

export default Parkmore;