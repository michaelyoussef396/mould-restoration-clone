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
import OptimizedImage from '../../components/OptimizedImage';
import {
  ServiceProcessImage,
  OptimizedImageGallery
} from '@/components/seo/EnhancedOptimizedImage';

// Import meta description helper
import { getSuburbMetaDescription } from '@/components/seo/MetaDescriptions';

export const Braybrook = () => {
  const location = "Braybrook";
  const braybrookMetaDescription = getSuburbMetaDescription('braybrook');

  const propertyTypes = [
    {
      type: "Working-Class Family Homes",
      description: "Our IICRC-certified technicians specialise in mould management for Braybrook's diverse working-class family housing. These practical, well-maintained properties provide essential family accommodation but may require affordable moisture management solutions that fit family budgets while ensuring healthy living environments.",
      image: "/images/family-homes-braybrook.jpg",
      alt: "Professional mould inspection working-class family home Braybrook Melbourne residential property assessment IICRC certified"
    },
    {
      type: "Multi-Unit Developments",
      description: "Braybrook's multi-unit developments and apartment complexes require specialised mould solutions that address shared building systems and multiple tenancy considerations. Our certified professionals provide comprehensive services that coordinate with property managers while minimising disruption to residents.",
      image: "/images/multi-unit-braybrook.jpg",
      alt: "Multi-unit development mould removal Braybrook Melbourne apartment complex unit inspection"
    },
    {
      type: "Industrial and Warehouse Properties",
      description: "The industrial and warehouse facilities throughout Braybrook require robust commercial mould services that maintain operational efficiency and workplace safety. Our team understands the unique challenges of industrial moisture management and provides solutions that meet workplace health and safety standards.",
      image: "/images/industrial-warehouse-braybrook.jpg",
      alt: "Industrial warehouse mould inspection Braybrook Melbourne commercial property workplace safety assessment"
    },
    {
      type: "Community Housing",
      description: "Braybrook's community and public housing requires professional mould services that prioritise resident health while meeting social housing maintenance standards. Our approach respects tenant privacy and provides effective solutions that work within community housing frameworks and budget constraints.",
      image: "/images/community-housing-braybrook.jpg",
      alt: "Community housing mould removal Braybrook Melbourne public housing social property inspection"
    }
  ];

  const localFactors = [
    {
      factor: "Maribyrnong River Proximity",
      impact: "Braybrook's proximity to the Maribyrnong River creates elevated humidity levels and potential flood risk zones that can significantly impact property moisture management requirements.",
      solution: "Our assessment considers river proximity effects and flood-prone area considerations for comprehensive moisture control."
    },
    {
      factor: "Industrial Area Influences",
      impact: "The suburb's mix of residential and industrial zones creates varied environmental conditions that can affect indoor air quality and moisture patterns in different property types.",
      solution: "We evaluate industrial proximity impacts and develop solutions that address mixed-zone environmental challenges."
    },
    {
      factor: "Diverse Housing Stock",
      impact: "Braybrook's varied housing from older working-class homes to modern developments creates different moisture risk profiles requiring adaptable treatment approaches.",
      solution: "Our services adapt to each property's specific construction era, maintenance history, and budget requirements."
    },
    {
      factor: "Multicultural Community Needs",
      impact: "The diverse multicultural community requires culturally sensitive service delivery that respects different household practices and communication preferences.",
      solution: "We provide inclusive, respectful service with clear communication that meets diverse community needs."
    }
  ];

  const braybrookServices = [
    {
      title: "Affordable Family Solutions",
      description: "Budget-conscious mould services designed for Braybrook's working families. Our IICRC-certified technicians provide effective assessment and treatment options that deliver results while respecting family budget constraints, with flexible payment arrangements available.",
      features: [
        "Budget-friendly treatment options",
        "Flexible payment arrangements",
        "Cost-effective prevention strategies",
        "Family-safe affordable methods"
      ]
    },
    {
      title: "Multi-Tenancy Coordination",
      description: "Specialised mould services for Braybrook's multi-unit buildings and rental properties. We coordinate with property managers, landlords, and tenants to provide comprehensive solutions that address shared building issues while respecting individual tenant rights and privacy.",
      features: [
        "Property manager coordination",
        "Multi-tenant communication protocols",
        "Shared system assessment",
        "Tenant rights compliance"
      ]
    },
    {
      title: "Industrial Property Management",
      description: "Robust commercial mould services for Braybrook's industrial and warehouse facilities. We provide workplace-compliant solutions that maintain operational continuity while ensuring employee health and safety standards are met throughout the remediation process.",
      features: [
        "Workplace safety compliance",
        "Industrial moisture management",
        "Operational continuity focus",
        "Heavy-duty treatment methods"
      ]
    },
    {
      title: "Community Housing Support",
      description: "Respectful mould services for Braybrook's community and public housing residents. Our approach prioritises resident health and dignity while working within social housing maintenance frameworks to deliver effective, sustainable mould solutions.",
      features: [
        "Social housing compliance",
        "Resident dignity focus",
        "Community liaison coordination",
        "Sustainable prevention education"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Maria Nguyen",
      property: "Family Home, Ashley Street",
      testimonial: "Affordable and effective service for our family home. The team understood our budget constraints and provided solutions that work. They treated us with respect and delivered excellent results without breaking the bank.",
      rating: 5
    },
    {
      name: "John Stavros",
      property: "Multi-Unit Building, Ballarat Road",
      testimonial: "Professional coordination with all our tenants. They managed the complex logistics perfectly and kept everyone informed throughout the process. Excellent service for multi-unit properties.",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      property: "Industrial Property, South Road",
      testimonial: "Outstanding commercial service that kept our operations running. They understood workplace requirements and delivered solutions that met all safety standards. Highly recommend for industrial properties.",
      rating: 5
    }
  ];

  const faqData = [
    {
      question: "What affordable mould solutions do you offer for Braybrook families?",
      answer: "We understand Braybrook's diverse community needs and offer budget-conscious solutions including flexible payment options, cost-effective treatment methods, and practical prevention strategies that deliver results without financial stress. Our goal is to make professional mould services accessible to all families."
    },
    {
      question: "How do you handle mould issues in Braybrook's multi-unit buildings?",
      answer: "We coordinate closely with property managers and tenants to address mould issues in multi-unit buildings. Our approach respects tenant privacy while comprehensively addressing shared building systems, ensuring effective solutions that work for all residents while meeting landlord obligations."
    },
    {
      question: "Can you service industrial properties near the Maribyrnong River?",
      answer: "Yes, we specialise in industrial and warehouse properties including those in flood-prone areas near the Maribyrnong River. Our services address elevated humidity, potential water damage, and workplace safety requirements while maintaining operational continuity for businesses."
    },
    {
      question: "Do you work with community housing providers in Braybrook?",
      answer: "Absolutely. We have experience working with community housing providers and understand the specific requirements of social housing maintenance. Our respectful approach prioritises resident health and dignity while meeting housing provider standards and budget constraints."
    },
    {
      question: "What languages can you provide service information in?",
      answer: "We recognise Braybrook's multicultural community and can arrange interpreters or translated materials when needed. Our team is committed to clear communication that ensures all residents understand the mould assessment and treatment process regardless of language background."
    }
  ];

  const serviceAreas = [
    "Ashley Street", "Ballarat Road", "South Road", "Churchill Avenue",
    "Braybrook Shopping Centre", "Maribyrnong River Precinct", "Industrial Estate", "Sunshine Border",
    "Tottenham Station Area", "Community Housing Estates", "Braybrook Park", "Local Schools Area"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Components */}
      <LocationPageSEO
        location={location}
        service="Professional Mould Inspection & Removal"
        description={braybrookMetaDescription}
      />

      <EnhancedSchemaMarkup
        businessName="Mould & Restoration Co."
        location={location}
        address="Braybrook, Melbourne VIC"
        phone="1800 954 117"
        email="admin@mouldandrestoration.com.au"
        services={["Mould Inspection", "Mould Removal", "Moisture Detection", "Air Quality Testing"]}
        serviceArea="Braybrook Melbourne"
        openingHours="Mo-Su 07:00-19:00"
      />




      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/braybrook-hero-bg.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <LocationPageH1 location={location} />
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                IICRC-certified mould inspection and removal specialists serving Braybrook's diverse multicultural community. From family homes to industrial properties, we provide affordable, professional mould solutions that respect cultural diversity and budget requirements in this vibrant western Melbourne suburb.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  <a href="tel:1800954117" className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 1800 954 117
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4">
                  <a href="#contact" className="flex items-center">
                    Schedule Inspection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <div className="text-2xl font-bold text-blue-600">100+</div>
                  <div className="text-sm text-gray-600">Properties Restored</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <div className="text-2xl font-bold text-blue-600">5.0★</div>
                  <div className="text-sm text-gray-600">Google Rating</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <div className="text-2xl font-bold text-blue-600">Affordable</div>
                  <div className="text-sm text-gray-600">Solutions</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <OptimizedImage
                src="/images/mould-inspection-braybrook-hero.jpg"
                alt="Professional mould inspection Braybrook Melbourne IICRC certified technician multicultural community assessment"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available Now in Braybrook</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Local Braybrook Mould Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our inclusive approach and understanding of Braybrook's diverse community needs, industrial landscape, and river proximity ensures effective mould solutions tailored to your specific circumstances within this dynamic western Melbourne suburb.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localFactors.map((factor, index) => (
              <Card key={index} className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">{factor.factor}</h3>
                  <p className="text-sm text-gray-600 mb-3">{factor.impact}</p>
                  <p className="text-sm text-blue-600 font-medium">{factor.solution}</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Braybrook Property Types We Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From family homes to industrial facilities, our IICRC-certified team provides affordable, professional mould solutions for every property type in Braybrook's diverse urban landscape.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {propertyTypes.map((property, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <OptimizedImage
                      src={property.image}
                      alt={property.alt}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{property.type}</h3>
                    <p className="text-gray-600 leading-relaxed">{property.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialised Services */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Specialised Mould Services for Braybrook
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive range of affordable, culturally sensitive mould services addresses the specific needs of Braybrook's diverse community and property types.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {braybrookServices.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
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

      {/* Why Choose Us for Braybrook */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us for Braybrook Mould Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our affordable pricing, inclusive service approach, and understanding of diverse community needs make us the trusted choice for Braybrook property owners seeking effective mould solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">IICRC Certified Professionals</h3>
              <p className="text-gray-600">
                Our technicians hold industry-leading IICRC certifications with commitment to providing professional service accessible to all community members.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community-Inclusive Service</h3>
              <p className="text-gray-600">
                Culturally sensitive approach with affordable options that respect diverse household needs and provide solutions accessible to all residents.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mixed-Zone Expertise</h3>
              <p className="text-gray-600">
                Comprehensive understanding of residential, industrial, and riverside property challenges with solutions for Braybrook's diverse urban landscape.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Braybrook Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read testimonials from satisfied Braybrook property owners who have experienced our affordable, professional mould inspection and remediation services.
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
                <p className="text-gray-600 mb-4 italic">"{testimonial.testimonial}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Braybrook Mould Inspection Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our inclusive approach ensures thorough assessment and effective treatment while respecting diverse community needs and budget requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">1</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Inclusive Assessment</h3>
              <p className="text-gray-600">Respectful property evaluation with clear communication and budget-conscious options presented upfront.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">2</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Affordable Testing</h3>
              <p className="text-gray-600">Cost-effective air quality and surface testing with transparent pricing and no hidden costs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">3</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible Solutions</h3>
              <p className="text-gray-600">Treatment options that fit your budget with payment arrangements available for families in need.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">4</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Community Support</h3>
              <p className="text-gray-600">Ongoing prevention education and support that helps protect your investment long-term.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mould Prevention Tips */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Affordable Mould Prevention Tips for Braybrook
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect your Braybrook property with these practical, budget-friendly prevention strategies suitable for all property types and household situations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Wind className="h-8 w-8 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900">Free Ventilation</h3>
              </div>
              <p className="text-gray-600">
                Utilise natural ventilation by opening windows during dry periods. Cross-ventilation costs nothing and effectively reduces indoor humidity levels.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Thermometer className="h-8 w-8 text-green-600" />
                <h3 className="text-lg font-bold text-gray-900">Smart Temperature Control</h3>
              </div>
              <p className="text-gray-600">
                Use heating and cooling efficiently to prevent condensation. Even basic temperature management can significantly reduce mould risk without high costs.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="h-8 w-8 text-teal-600" />
                <h3 className="text-lg font-bold text-gray-900">DIY Moisture Checks</h3>
              </div>
              <p className="text-gray-600">
                Regular visual checks for leaks, condensation, and damp spots cost nothing but can catch problems early before expensive damage occurs.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-8 w-8 text-orange-600" />
                <h3 className="text-lg font-bold text-gray-900">River Area Awareness</h3>
              </div>
              <p className="text-gray-600">
                Properties near the Maribyrnong River need extra vigilance during wet seasons. Simple precautions can prevent major moisture problems.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Home className="h-8 w-8 text-purple-600" />
                <h3 className="text-lg font-bold text-gray-900">Simple Maintenance</h3>
              </div>
              <p className="text-gray-600">
                Basic maintenance like cleaning gutters and fixing small leaks promptly prevents bigger, more expensive mould problems developing.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-red-600" />
                <h3 className="text-lg font-bold text-gray-900">Community Resources</h3>
              </div>
              <p className="text-gray-600">
                Access community support programs and professional advice to maintain healthy homes. Prevention education helps avoid costly remediation needs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Braybrook Areas We Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive, affordable mould inspection and removal services throughout Braybrook and surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
                <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">{area}</h3>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions - Braybrook Mould Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our affordable, inclusive mould services for Braybrook properties.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Get Affordable Mould Inspection in Braybrook
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Contact our IICRC-certified team for affordable, professional mould assessment and removal services. We're available 7 days a week to help protect your Braybrook property.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="p-8 bg-white text-gray-900">
                <h3 className="text-2xl font-bold mb-6 text-center">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <a href="tel:1800954117" className="text-blue-600 hover:underline text-lg">
                        1800 954 117
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Business Hours</div>
                      <div className="text-gray-600">7:00 AM - 7:00 PM, Every Day</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Service Area</div>
                      <div className="text-gray-600">Braybrook & All Melbourne</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                    <a href="tel:1800954117" className="flex items-center">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now for Affordable Service
                    </a>
                  </Button>
                </div>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Braybrook Service?</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Affordable Solutions</h4>
                    <p className="text-blue-100">
                      Budget-conscious options with flexible payment arrangements making professional mould services accessible to all families.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Inclusive Service</h4>
                    <p className="text-blue-100">
                      Culturally sensitive approach respecting diverse community needs with clear communication for all residents.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">IICRC Certified Team</h4>
                    <p className="text-blue-100">
                      Fully certified professionals providing quality service regardless of property type or budget constraints.
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

export default Braybrook;