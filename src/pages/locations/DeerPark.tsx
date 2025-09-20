import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Phone,
  Clock,
  Shield,
  Award,
  CheckCircle,
  Star,
  MapPin,
  Thermometer,
  Droplets,
  Wind,
  AlertTriangle,
  Home,
  Building2,
  Factory,
  Warehouse,
  ArrowRight,
  FileText,
  Camera,
  Users,
  TrendingUp
} from 'lucide-react';

// Import all SEO and functionality components
import { LocationPageSEO } from '@/components/seo/SEOHead';
import { LocationPageH1 } from '@/components/seo/H1Optimization';
import {
  EnhancedSchemaMarkup,
  LocationSpecificServiceSchema,
  EnhancedBreadcrumbSchema,
  LocationFAQSchema
} from '@/components/seo/EnhancedSchemaMarkup';
import { SuburbClusterLinks, StrategicLocationLinks } from '@/components/seo/InternalLinking';
import { OptimizedImage } from '../../components/OptimizedImage';

// Import meta description helper
import { getSuburbMetaDescription } from '@/components/seo/MetaDescriptions';

export const DeerPark = () => {
  const location = "Deer Park";
  const deerParkMetaDescription = getSuburbMetaDescription('deer-park');

  const propertyTypes = [
    {
      type: "Established Family Homes",
      description: "Our IICRC-certified technicians specialise in mould management for Deer Park's well-established family housing. These solid residential properties, built over several decades, provide comfortable family living but may require modern moisture management approaches to address changing environmental conditions and contemporary lifestyle needs.",
      image: "/images/established-family-homes-deer-park.jpg",
      alt: "Professional mould inspection established family home Deer Park Melbourne residential property assessment IICRC certified"
    },
    {
      type: "Modern Residential Developments",
      description: "Deer Park's newer residential developments benefit from our advanced mould detection and removal techniques. These contemporary properties require sophisticated approaches to address modern construction standards, energy efficiency requirements, and the moisture management needs of well-designed family communities.",
      image: "/images/modern-residential-deer-park.jpg",
      alt: "Modern residential development mould removal Deer Park Melbourne contemporary family home inspection"
    },
    {
      type: "Commercial and Industrial Properties",
      description: "The commercial and light industrial properties throughout Deer Park require specialised business mould services that maintain operational efficiency. Our certified professionals understand the importance of preserving business environments while ensuring thorough mould remediation for warehouses, offices, and retail premises.",
      image: "/images/commercial-industrial-deer-park.jpg",
      alt: "Commercial industrial property mould inspection Deer Park Melbourne business warehouse retail assessment"
    },
    {
      type: "Community Facilities",
      description: "Deer Park's community centres, schools, and public buildings require professional mould services that prioritise public health and safety. Our team provides comprehensive assessment and remediation that meets public facility standards while ensuring healthy environments for community activities and education.",
      image: "/images/community-facilities-deer-park.jpg",
      alt: "Community facility mould removal Deer Park Melbourne public building school centre inspection"
    }
  ];

  const localFactors = [
    {
      factor: "Western Suburbs Climate",
      impact: "Deer Park's western Melbourne location experiences specific weather patterns and seasonal conditions that can influence property moisture levels and indoor air quality.",
      solution: "Our assessment considers local climate factors and seasonal moisture variations for comprehensive prevention strategies."
    },
    {
      factor: "Mixed Development Patterns",
      impact: "The suburb's combination of established residential areas, new developments, and commercial zones creates varied property types with different mould risk profiles.",
      solution: "We adapt our approach to suit each property type and construction era within the diverse suburban landscape."
    },
    {
      factor: "Transport Infrastructure Proximity",
      impact: "Deer Park's proximity to major transport routes and infrastructure can influence air quality and environmental conditions affecting indoor environments.",
      solution: "Our comprehensive assessment includes evaluation of external environmental factors on indoor air quality."
    },
    {
      factor: "Community Focus Requirements",
      impact: "Strong community connections require professional services that respect neighbourhood relationships and provide reliable, trustworthy solutions for local residents.",
      solution: "We provide community-focused service that builds trust through consistent, reliable professional delivery."
    }
  ];

  const deerParkServices = [
    {
      title: "Family Home Mould Solutions",
      description: "Comprehensive mould services designed for Deer Park's diverse family housing. Our IICRC-certified technicians provide reliable assessment and treatment that accommodates family schedules while ensuring healthy indoor environments for households of all sizes and compositions.",
      features: [
        "Family-friendly scheduling",
        "Safe treatment methods",
        "Educational support for families",
        "Long-term prevention planning"
      ]
    },
    {
      title: "Modern Development Services",
      description: "Specialised mould solutions for Deer Park's newer residential communities. We understand contemporary construction challenges and provide services that work with modern building systems while ensuring optimal air quality in energy-efficient homes.",
      features: [
        "Modern construction expertise",
        "Energy efficiency preservation",
        "Contemporary building system integration",
        "New home warranty considerations"
      ]
    },
    {
      title: "Commercial Property Management",
      description: "Professional mould services for Deer Park's business and industrial properties. We provide flexible scheduling and rapid response to maintain business operations while ensuring comprehensive mould assessment and remediation that meets workplace health standards.",
      features: [
        "Business operation continuity",
        "Workplace health compliance",
        "Flexible commercial scheduling",
        "Industrial property expertise"
      ]
    },
    {
      title: "Community Facility Services",
      description: "Specialised mould solutions for Deer Park's community buildings and public facilities. Our approach meets public health requirements while providing discrete, efficient service that maintains community activity schedules and facility availability.",
      features: [
        "Public health standards compliance",
        "Community schedule accommodation",
        "Facility availability optimisation",
        "Educational institution expertise"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Robert Wilson",
      property: "Family Home, Station Road",
      testimonial: "Reliable service for our established family home. The team provided clear explanations and worked around our busy family schedule. Professional approach with practical solutions that have kept our home healthy.",
      rating: 5
    },
    {
      name: "Maria Santos",
      property: "Modern Home, New Development",
      testimonial: "Excellent work on our new home's moisture issue. They understood the modern construction and provided solutions that work with our building systems. Very satisfied with their professional approach.",
      rating: 5
    },
    {
      name: "David Chen",
      property: "Commercial Property, Ballarat Road",
      testimonial: "Outstanding commercial service with minimal disruption to our operations. The team coordinated well with our schedule and provided comprehensive solutions that meet workplace requirements.",
      rating: 5
    }
  ];

  const faqData = [
    {
      question: "What makes Deer Park properties require specific mould treatment approaches?",
      answer: "Deer Park's diverse property mix includes established family homes, modern developments, and commercial properties, each requiring different treatment approaches. Our local knowledge helps us address the specific challenges of western Melbourne's climate conditions and varied construction types effectively."
    },
    {
      question: "How do you handle mould issues in Deer Park's established homes?",
      answer: "Established homes in Deer Park may have construction characteristics that require updated moisture management approaches. Our IICRC-certified technicians assess each property's specific needs and provide solutions that work with existing construction while incorporating modern moisture control strategies."
    },
    {
      question: "Can you service both residential and commercial properties in Deer Park?",
      answer: "Absolutely. We provide comprehensive services for Deer Park's diverse property types including family homes, modern developments, commercial buildings, and community facilities. Our approach adapts to meet the specific requirements of each property type and usage pattern."
    },
    {
      question: "What's your response time for Deer Park mould emergencies?",
      answer: "We provide same-day response for urgent mould situations in Deer Park. Our Melbourne team can typically reach Deer Park properties within 2-3 hours of your call during business hours. We understand the importance of prompt service for maintaining healthy environments in family and business settings."
    },
    {
      question: "Do you provide ongoing support for Deer Park properties?",
      answer: "Yes, we offer comprehensive ongoing support including seasonal maintenance advice, prevention education, and follow-up consultations. Our community-focused approach ensures Deer Park residents have access to continued professional guidance for long-term property protection."
    }
  ];

  const serviceAreas = [
    "Station Road", "Ballarat Road", "Robinsons Road", "Fitzgerald Road",
    "Deer Park Shopping Centre", "Deer Park Station Precinct", "Brimbank Park", "Kororoit Creek",
    "Residential Streets", "Industrial Areas", "Community Centres", "School Zones"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Components */}
      <LocationPageSEO
        location={location}
        service="Professional Mould Inspection & Removal"
        description={deerParkMetaDescription}
      />

      <EnhancedSchemaMarkup
        businessName="Mould & Restoration Co."
        location={location}
        address="Deer Park, Melbourne VIC"
        phone="1800 954 117"
        email="admin@mouldandrestoration.com.au"
        services={["Mould Inspection", "Mould Removal", "Moisture Detection", "Air Quality Testing"]}
        serviceArea="Deer Park Melbourne"
        openingHours="Mo-Su 07:00-19:00"
      />




      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-10"></div>
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <LocationPageH1 location={location} />
              <p className="text-xl text-professional mb-8 leading-relaxed">
                IICRC-certified mould inspection and removal specialists serving Deer Park's diverse residential and commercial community. From established family homes to modern developments and business premises, we provide reliable professional mould solutions for this thriving western Melbourne suburb.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary-600 text-white px-8 py-4">
                  <a href="tel:1800954117" className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 1800 954 117
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-columbia px-8 py-4">
                  <a href="#contact" className="flex items-center">
                    Schedule Inspection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-professional">Years Experience</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <div className="text-2xl font-bold text-primary">100+</div>
                  <div className="text-sm text-professional">Properties Restored</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <div className="text-2xl font-bold text-primary">5.0★</div>
                  <div className="text-sm text-professional">Google Rating</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <div className="text-2xl font-bold text-primary">IICRC</div>
                  <div className="text-sm text-professional">Certified</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <LocationHeroImage
                src="/images/mould-inspection-deer-park-hero.jpg"
                alt="Professional mould inspection Deer Park Melbourne IICRC certified technician residential commercial property assessment"
                location={location}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success/100 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available Now in Deer Park</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Local Deer Park Mould Expertise
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our comprehensive understanding of Deer Park's western Melbourne location, diverse property types, and community needs ensures effective mould solutions tailored to your specific property and circumstances within this growing suburban area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localFactors.map((factor, index) => (
              <Card key={index} className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-charcoal mb-3">{factor.factor}</h3>
                  <p className="text-sm text-professional mb-3">{factor.impact}</p>
                  <p className="text-sm text-primary font-medium">{factor.solution}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types Served */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Deer Park Property Types We Service
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              From family homes to commercial properties, our IICRC-certified team provides specialised mould solutions for every property type in Deer Park's diverse suburban and business landscape.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {propertyTypes.map((property, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <PropertyTypeImage
                      src={property.image}
                      alt={property.alt}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-bold text-charcoal mb-3">{property.type}</h3>
                    <p className="text-professional leading-relaxed">{property.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialised Services */}
      <section className="py-16 bg-columbia">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Specialised Mould Services for Deer Park
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our comprehensive range of professional mould services addresses the specific needs of Deer Park's diverse property types and community requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {deerParkServices.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-charcoal mb-3">{service.title}</h3>
                    <p className="text-professional mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-professional">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Deer Park */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Why Choose Us for Deer Park Mould Solutions
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our reliable service approach, community focus, and diverse property expertise make us the trusted choice for Deer Park property owners seeking effective mould solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">IICRC Certified Professionals</h3>
              <p className="text-professional">
                Our technicians hold industry-leading IICRC certifications with experience across diverse property types and construction eras found in Deer Park.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Diverse Property Specialists</h3>
              <p className="text-professional">
                Comprehensive expertise across residential, commercial, and community properties with understanding of western Melbourne conditions and requirements.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Community-Focused Service</h3>
              <p className="text-professional">
                Reliable, trustworthy service that builds strong community relationships through consistent professional delivery and local understanding.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              What Deer Park Customers Say
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Read testimonials from satisfied Deer Park property owners who have experienced our reliable professional mould inspection and remediation services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-professional mb-4 italic">"{testimonial.testimonial}"</p>
                <div>
                  <div className="font-semibold text-charcoal">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.property}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Our Deer Park Mould Inspection Process
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our systematic approach ensures thorough assessment and effective treatment for all property types in Deer Park.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">1</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Property Assessment</h3>
              <p className="text-professional">Comprehensive evaluation appropriate for your specific property type and usage requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">2</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Detailed Testing</h3>
              <p className="text-professional">Professional air quality sampling and surface testing with minimal disruption to property use.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">3</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Reliable Treatment</h3>
              <p className="text-professional">Effective remediation strategy tailored to your property's specific needs and usage patterns.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">4</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Ongoing Support</h3>
              <p className="text-professional">Comprehensive guidance on maintaining healthy environments with community-focused follow-up.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mould Prevention Tips */}
      <section className="py-16 bg-columbia">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Mould Prevention Tips for Deer Park Properties
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Protect your Deer Park property with these expert prevention strategies tailored to western Melbourne conditions and diverse property types.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Wind className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold text-charcoal">Western Climate Ventilation</h3>
              </div>
              <p className="text-professional">
                Utilise natural airflow patterns in western Melbourne while ensuring adequate ventilation for your property type. Different buildings require different ventilation strategies.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Thermometer className="h-8 w-8 text-success" />
                <h3 className="text-lg font-bold text-charcoal">Climate Control</h3>
              </div>
              <p className="text-professional">
                Maintain appropriate temperature and humidity levels for your property usage, whether residential family living or commercial operations.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="h-8 w-8 text-teal-600" />
                <h3 className="text-lg font-bold text-charcoal">Moisture Management</h3>
              </div>
              <p className="text-professional">
                Monitor property-specific moisture sources and ensure proper drainage and water management appropriate for your building type and usage.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-8 w-8 text-orange-600" />
                <h3 className="text-lg font-bold text-charcoal">Regular Monitoring</h3>
              </div>
              <p className="text-professional">
                Implement appropriate monitoring schedules for your property type, from family home checks to commercial facility inspections.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-8 w-8 text-purple-600" />
                <h3 className="text-lg font-bold text-charcoal">Property Maintenance</h3>
              </div>
              <p className="text-professional">
                Follow maintenance routines appropriate for your property's age, construction type, and usage requirements to prevent moisture problems.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-red-600" />
                <h3 className="text-lg font-bold text-charcoal">Professional Support</h3>
              </div>
              <p className="text-professional">
                Access professional guidance and regular inspections to maintain healthy environments and protect your property investment long-term.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Deer Park Areas We Service
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              We provide comprehensive mould inspection and removal services throughout Deer Park and surrounding western Melbourne areas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
                <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-charcoal">{area}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Internal Links */}

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Frequently Asked Questions - Deer Park Mould Services
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Get answers to common questions about our professional mould services for Deer Park properties.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-charcoal mb-3">{faq.question}</h3>
                  <p className="text-professional leading-relaxed">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Get Professional Mould Inspection in Deer Park
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Contact our IICRC-certified team for reliable mould assessment and removal services. We're available 7 days a week to help protect your Deer Park property.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="p-8 bg-white text-charcoal">
                <h3 className="text-2xl font-bold mb-6 text-center">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-columbia rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <a href="tel:1800954117" className="text-primary hover:underline text-lg">
                        1800 954 117
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-columbia rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Business Hours</div>
                      <div className="text-professional">7:00 AM - 7:00 PM, Every Day</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-columbia rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Service Area</div>
                      <div className="text-professional">Deer Park & All Melbourne</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button size="lg" className="bg-primary hover:bg-primary-600 text-white px-8 py-4">
                    <a href="tel:1800954117" className="flex items-center">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now for Reliable Service
                    </a>
                  </Button>
                </div>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Deer Park Service?</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-columbia0 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Diverse Property Expertise</h4>
                    <p className="text-blue-100">
                      Comprehensive knowledge of residential, commercial, and community properties with western Melbourne climate expertise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-columbia0 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Community-Focused Approach</h4>
                    <p className="text-blue-100">
                      Reliable, trustworthy service that builds strong community relationships through consistent professional delivery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-columbia0 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">IICRC Certified Team</h4>
                    <p className="text-blue-100">
                      Fully certified professionals using proven techniques for comprehensive suburban and commercial mould solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeerPark;