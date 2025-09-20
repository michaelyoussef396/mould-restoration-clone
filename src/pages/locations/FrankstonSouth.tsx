import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Clock, CheckCircle, Users, Award, Wrench } from 'lucide-react';
import LocationPageSEO from '@/components/seo/SEOHead';
import { EnhancedSchemaMarkup } from '../../components/seo/EnhancedSchemaMarkup';





import { OptimizedImage } from '../../components/OptimizedImage';

const FrankstonSouth: React.FC = () => {
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
    { name: 'Frankston South Mould Removal', url: '/locations/frankston-south' }
  ];

  const frankstonSouthServices = [
    "Residential mould inspections and testing",
    "Premium coastal property mould solutions",
    "Luxury beachfront home treatments",
    "High-end holiday accommodation services",
    "Waterfront apartment mould management",
    "Coastal commercial property solutions",
    "Pre-purchase premium property inspections",
    "Post-storm damage assessment",
    "Emergency coastal mould response",
    "Marine-grade HVAC system cleaning",
    "Luxury property humidity control",
    "Prestige property maintenance programs"
  ];

  const propertyTypes = [
    {
      type: "Luxury Beachfront Homes",
      description: "Premium waterfront residences and luxury coastal properties throughout Frankston South's prestigious areas",
      risks: "High-value property protection, salt air damage, premium material preservation, investment property concerns",
      solutions: "Luxury-grade treatments, premium material protection, high-value property preservation, marine-resistant systems"
    },
    {
      type: "Waterfront Apartments",
      description: "Modern coastal apartment complexes and unit developments with bay views and beach access",
      risks: "Shared ventilation systems, body corporate issues, unit cross-contamination, coastal exposure damage",
      solutions: "Multi-unit coordination, body corporate compliance, shared system treatments, coastal apartment expertise"
    },
    {
      type: "Premium Holiday Properties",
      description: "High-end short-term accommodations and luxury holiday rentals near beaches and waterfront",
      risks: "Guest expectations, luxury standard maintenance, seasonal occupancy challenges, premium facility requirements",
      solutions: "Luxury accommodation standards, guest safety protocols, premium maintenance programs, high-end property care"
    },
    {
      type: "Coastal Commercial Properties",
      description: "Upmarket retail, dining, and commercial facilities serving Frankston South's affluent coastal community",
      risks: "Customer experience impact, business reputation, premium service standards, coastal business continuity",
      solutions: "Premium commercial treatments, customer experience protection, business continuity planning, upmarket facility care"
    }
  ];

  const localFactors = [
    {
      factor: "Premium Coastal Location",
      impact: "Frankston South's position as Melbourne's premium bayside suburb creates unique challenges for high-value properties requiring luxury-grade solutions",
      solution: "Premium coastal treatments specifically designed for luxury properties with marine-resistant systems and high-end material protection"
    },
    {
      factor: "Affluent Community Standards",
      impact: "High community expectations for property maintenance and environmental quality require premium service standards and luxury treatment approaches",
      solution: "Luxury-grade service delivery with premium materials, high-end customer service, and affluent community expertise"
    },
    {
      factor: "Investment Property Concentration",
      impact: "High concentration of investment and holiday properties requires specialised approaches for property value protection and rental income preservation",
      solution: "Investment property expertise with value protection focus, rental income preservation, and property manager coordination"
    },
    {
      factor: "Marine Environment Exposure",
      impact: "Direct coastal exposure creates intensified salt air corrosion and marine weather challenges requiring advanced protection systems",
      solution: "Advanced marine-grade treatments with salt air resistant systems and coastal weather protection designed for waterfront exposure"
    }
  ];

  const testimonials = [
    {
      name: "Margaret Harrison",
      location: "Frankston South Beachfront, VIC",
      rating: 5,
      text: "Exceptional service for our luxury beachfront home. The team understood the premium requirements and provided solutions that protect our significant investment while maintaining the property's prestige standards. Outstanding coastal expertise."
    },
    {
      name: "James Sullivan",
      location: "Waterfront Apartments Frankston South, VIC",
      rating: 5,
      text: "As a body corporate manager for premium waterfront apartments, I needed mould specialists who understood luxury property requirements. Their team delivered premium solutions with excellent resident communication and minimal disruption."
    },
    {
      name: "Catherine Lewis",
      location: "Premium Holiday Rental Frankston South, VIC",
      rating: 5,
      text: "When mould threatened our luxury holiday rental business, they provided immediate solutions that maintained our premium standards and guest expectations. Professional, discreet, and effective premium service."
    }
  ];

  const faqData = [
    {
      question: "What makes Frankston South properties require premium mould removal services?",
      answer: "Frankston South's status as Melbourne's premium bayside suburb creates unique requirements including luxury property value protection, affluent community standards, high-end material preservation, investment property considerations, and premium service expectations requiring specialised luxury-grade treatments."
    },
    {
      question: "How do you handle mould in luxury beachfront properties?",
      answer: "Luxury beachfront properties require premium approaches including high-value property protection protocols, luxury material preservation, marine-resistant treatments designed for waterfront exposure, discretion for prestigious properties, and premium service delivery meeting affluent homeowner expectations."
    },
    {
      question: "Do you provide specialised services for waterfront apartment complexes?",
      answer: "Yes, we specialise in waterfront apartment complexes with multi-unit coordination, body corporate compliance, shared ventilation system treatments, unit cross-contamination prevention, and resident communication protocols designed for premium coastal apartment living."
    },
    {
      question: "What coastal challenges do Frankston South premium properties face?",
      answer: "Premium coastal properties face intensified salt air corrosion, marine weather exposure, luxury material damage risks, high-value property protection needs, and the requirement for marine-grade treatments that maintain premium property standards while providing long-term coastal protection."
    },
    {
      question: "How quickly can you respond to emergencies in premium Frankston South properties?",
      answer: "We provide priority emergency response for premium properties in Frankston South, typically within 1-2 hours for luxury homes and high-value properties, recognising the significant investment protection requirements and premium service expectations of the area."
    },
    {
      question: "Do you work with property managers for luxury holiday rentals?",
      answer: "Absolutely. We work extensively with property managers, luxury rental operators, and investment property owners in Frankston South, providing premium maintenance programs, guest safety protocols, property value protection, and discretion required for high-end rental businesses."
    }
  ];

  return (
    <>
      <LocationPageSEO
        pageTitle="Professional Mould Removal Frankston South | Premium Coastal Property Services"
        pageDescription="Premium mould removal services in Frankston South. Specialising in luxury beachfront homes, waterfront apartments, and high-end coastal properties. IICRC certified, 5+ years experience. Call 1800 954 117."
        pageKeywords="mould removal Frankston South, premium mould remediation Frankston South, luxury coastal property mould, Frankston South waterfront mould experts"
        canonicalUrl="/locations/frankston-south"
        suburb="Frankston South"
      />

      <EnhancedSchemaMarkup
        businessName="Mould & Restoration Co."
        suburb="Frankston South"
        phoneNumber="1800 954 117"
        address="Frankston South, VIC"
        businessHours={businessHours}
        services={frankstonSouthServices}
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
                      Premium Mould Removal
                      <span className="block text-yellow-400">Frankston South</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                      Premium coastal mould remediation services for Frankston South's luxury beachfront homes, waterfront apartments, and high-end properties. IICRC certified specialists with 5+ years premium coastal expertise.
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
                      Get Premium Assessment
                    </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400">5+</div>
                      <div className="text-blue-100">Years Premium Service</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400">100+</div>
                      <div className="text-blue-100">Luxury Properties</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400">24/7</div>
                      <div className="text-blue-100">Priority Response</div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <OptimizedImage
                    src="/images/frankston-south-mould-removal-hero.jpg"
                    alt="Premium mould removal services in Frankston South - luxury coastal property specialists treating beachfront homes, waterfront apartments, and high-end facilities"
                    className="rounded-lg shadow-2xl w-full h-96 object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-4 rounded-lg font-bold text-lg shadow-lg">
                    Premium Certified
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
                  <span className="font-semibold text-lg">24/7 Premium Emergency Mould Response</span>
                </div>
                <a
                  href="tel:1800954117"
                  className="bg-white text-red-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors"
                >
                  Priority Line: 1800 954 117
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
                      Frankston South's Premium Coastal Mould Specialists
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Serving Frankston South's prestigious coastal community for over 5 years, Mould & Restoration Co. understands the unique requirements of Melbourne's premier bayside suburb. From luxury beachfront homes to premium waterfront apartments, our IICRC-certified team delivers luxury-grade mould solutions designed for high-value coastal properties.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Luxury Property Expertise</h4>
                        <p className="text-professional">Premium beachfront and waterfront specialists</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Investment Protection</h4>
                        <p className="text-professional">High-value property preservation focus</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Premium Service Standards</h4>
                        <p className="text-professional">Luxury-grade treatments and materials</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Priority Response</h4>
                        <p className="text-professional">24/7 premium emergency services</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-columbia p-6 rounded-lg">
                    <h3 className="font-bold text-lg text-blue-900 mb-2">Why Choose Our Frankston South Premium Service?</h3>
                    <ul className="space-y-2 text-blue-800">
                      <li>• Luxury coastal property expertise and discretion</li>
                      <li>• Premium marine-resistant treatment systems</li>
                      <li>• High-value investment property protection</li>
                      <li>• Affluent community service standards</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <OptimizedImage
                    src="/images/frankston-south-service-area.jpg"
                    alt="Premium mould removal service area covering Frankston South and surrounding exclusive bayside Melbourne suburbs"
                    className="rounded-lg shadow-lg w-full h-64 object-cover"
                  />

                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary">
                    <h3 className="font-bold text-lg text-charcoal mb-3">ABN: 47 683 089 652</h3>
                    <div className="space-y-2 text-gray-700">
                      <p className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-primary" />
                        <strong>Priority Line:</strong> 1800 954 117
                      </p>
                      <p className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <strong>Hours:</strong> 7am - 7pm, 7 days
                      </p>
                      <p className="flex items-center">
                        <Award className="h-4 w-4 mr-2 text-primary" />
                        <strong>Premium Certified:</strong> IICRC Standards
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
                  Premium Frankston South Properties We Service
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  Our premium service team specialises in luxury coastal properties throughout Frankston South, from beachfront homes to waterfront apartments and high-end commercial facilities.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {propertyTypes.map((property, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <OptimizedImage
                      src={`/images/frankston-south-${property.type.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                      alt={`${property.type} premium mould removal services in Frankston South`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-charcoal mb-2">{property.type}</h3>
                      <p className="text-professional text-sm mb-3">{property.description}</p>

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-sm text-red-700 mb-1">Premium Considerations:</h4>
                          <p className="text-xs text-professional">{property.risks}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-sm text-green-700 mb-1">Our Premium Solutions:</h4>
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
                  Frankston South Premium Property Considerations
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  Understanding luxury coastal property requirements is crucial for premium mould prevention. Our team addresses the specific high-end environmental challenges facing Frankston South properties.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {localFactors.map((factor, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="font-bold text-lg text-charcoal mb-3">{factor.factor}</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm text-orange-700 mb-1">Premium Impact:</h4>
                        <p className="text-professional text-sm">{factor.impact}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-blue-700 mb-1">Our Premium Approach:</h4>
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
                  Premium Mould Services in Frankston South
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  From luxury property inspections to premium remediation, we provide comprehensive high-end mould solutions tailored to Frankston South's prestigious coastal properties.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {frankstonSouthServices.map((service, index) => (
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
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Premium Property Emergency?</h3>
                  <p className="text-blue-800 mb-6">
                    Our Frankston South premium team provides priority response for luxury properties. Protect your investment - early intervention preserves property value.
                  </p>
                  <a
                    href="tel:1800954117"
                    className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Priority Line 1800 954 117
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
                  Specialized Premium Frankston South Solutions
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  Beyond standard mould removal, we offer luxury-grade services tailored to Frankston South's premium coastal environment and high-value property market.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="bg-columbia w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">Luxury Beachfront Homes</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-professional">
                      Premium mould management for Frankston South's luxury beachfront properties, including high-value material protection and marine-resistant treatments designed for waterfront exposure.
                    </p>
                    <ul className="space-y-2 text-sm text-professional">
                      <li>• Luxury material preservation systems</li>
                      <li>• High-value property protection protocols</li>
                      <li>• Marine-grade treatment applications</li>
                      <li>• Discretion for prestigious properties</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-success" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">Waterfront Apartment Complexes</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-professional">
                      Comprehensive mould solutions for premium waterfront apartments, including body corporate coordination and multi-unit treatment systems for luxury coastal living.
                    </p>
                    <ul className="space-y-2 text-sm text-professional">
                      <li>• Multi-unit coordination systems</li>
                      <li>• Body corporate compliance protocols</li>
                      <li>• Luxury apartment resident services</li>
                      <li>• Shared system treatment expertise</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wrench className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">Premium Holiday Properties</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-professional">
                      Luxury-grade mould solutions for high-end holiday accommodations, ensuring premium guest experiences while protecting significant property investments.
                    </p>
                    <ul className="space-y-2 text-sm text-professional">
                      <li>• Luxury accommodation standards</li>
                      <li>• Premium guest safety protocols</li>
                      <li>• Investment property value protection</li>
                      <li>• High-end maintenance programs</li>
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
                  Our Premium Frankston South Process
                </h2>
                <p className="text-lg text-professional max-w-3xl mx-auto">
                  A luxury-focused systematic approach ensuring thorough mould elimination and long-term protection for all Frankston South premium properties with coastal expertise.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-columbia w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Premium Property Assessment</h3>
                  <p className="text-professional text-sm">
                    Comprehensive luxury property evaluation considering high-value materials, investment protection, and coastal exposure using premium detection equipment.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-success">2</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Luxury-Grade Containment</h3>
                  <p className="text-professional text-sm">
                    Premium containment systems designed to protect high-value furnishings and luxury finishes while preventing contamination spread.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-yellow-600">3</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Premium Treatment Application</h3>
                  <p className="text-professional text-sm">
                    IICRC-certified luxury-grade treatments using premium materials designed for high-value coastal properties and marine environments.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">4</span>
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">Investment Protection Plan</h3>
                  <p className="text-professional text-sm">
                    Comprehensive prevention strategies focused on property value protection, luxury standard maintenance, and long-term coastal defence.
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-charcoal mb-4">Premium Property Protection Guarantee</h3>
                  <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                    Every Frankston South premium property mould removal project comes with our luxury service guarantee. We protect your significant investment with ongoing premium support and monitoring.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-sm text-professional">Premium Service</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success">5+</div>
                      <div className="text-sm text-professional">Years Luxury Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">Priority</div>
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
                  What Premium Frankston South Clients Say
                </h2>
                <p className="text-lg text-professional">
                  Authentic reviews from satisfied luxury property owners and managers across Frankston South's prestigious coastal community.
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
                      <div className="text-sm text-professional">Premium Rating</div>
                    </div>
                    <div className="border-l h-16 mx-4"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-professional">Luxury Properties</div>
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
                  Frankston South Premium Property FAQ
                </h2>
                <p className="text-lg text-professional">
                  Common questions about premium mould removal services for luxury coastal properties in Frankston South.
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
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Premium Property Questions?</h3>
                  <p className="text-blue-800 mb-4">
                    Our Frankston South premium property specialists are here to help with any luxury coastal property concerns.
                  </p>
                  <a
                    href="tel:1800954117"
                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Premium Consultation - 1800 954 117
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
                  Contact Frankston South's Premium Property Experts
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Ready to protect your luxury coastal investment? Our premium certified team provides priority service throughout Frankston South's exclusive waterfront community.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800 p-6 rounded-lg">
                      <Phone className="h-8 w-8 text-yellow-400 mb-3" />
                      <h3 className="font-bold text-lg mb-2">Priority Line</h3>
                      <p className="text-gray-300">24/7 premium property support</p>
                      <a href="tel:1800954117" className="text-yellow-400 font-semibold text-xl">
                        1800 954 117
                      </a>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg">
                      <Clock className="h-8 w-8 text-yellow-400 mb-3" />
                      <h3 className="font-bold text-lg mb-2">Premium Hours</h3>
                      <p className="text-gray-300">Available every day</p>
                      <p className="text-yellow-400 font-semibold">7:00 AM - 7:00 PM</p>
                    </div>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg">
                    <Award className="h-8 w-8 text-yellow-400 mb-3" />
                    <h3 className="font-bold text-lg mb-2">Exclusive Service Area</h3>
                    <p className="text-gray-300 mb-3">
                      Specialising in Frankston South and exclusive bayside Melbourne premium properties
                    </p>
                    <div className="text-sm text-gray-400">
                      <p><strong>ABN:</strong> 47 683 089 652</p>
                      <p><strong>Premium Certified:</strong> IICRC Standards</p>
                    </div>
                  </div>

                  <div className="bg-blue-900 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-3">Premium Property Emergency</h3>
                    <p className="text-blue-100 mb-4">
                      Luxury property emergencies require immediate attention. Our Frankston South premium team provides priority response for high-value coastal properties.
                    </p>
                    <a
                      href="tel:1800954117"
                      className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Premium Emergency: 1800 954 117
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 text-charcoal">
                  <h3 className="text-2xl font-bold mb-6">Premium Property Assessment Request</h3>
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
                        Premium Property Type
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select Premium Property Type</option>
                        <option value="luxury-beachfront">Luxury Beachfront Home</option>
                        <option value="waterfront-apartment">Waterfront Apartment</option>
                        <option value="premium-holiday">Premium Holiday Property</option>
                        <option value="coastal-commercial">Coastal Commercial</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Describe Your Premium Property Concerns
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tell us about your luxury property, investment protection needs, and any specific concerns..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-md hover:bg-primary-600 transition-colors"
                    >
                      Request Premium Assessment
                    </button>
                  </form>

                  <div className="mt-6 text-sm text-professional text-center">
                    <p>Or call our priority line for immediate premium service:</p>
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

export default FrankstonSouth;