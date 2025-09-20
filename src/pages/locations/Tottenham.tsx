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

export const Tottenham = () => {
  const location = "Tottenham";
  const tottenhamMetaDescription = getSuburbMetaDescription('tottenham');

  const propertyTypes = [
    {
      type: "Industrial Facilities",
      description: "Our IICRC-certified technicians specialise in mould management for Tottenham's extensive industrial and manufacturing facilities. These commercial properties require robust moisture management solutions that maintain workplace safety standards while ensuring operational continuity and compliance with occupational health and safety regulations.",
      image: "/images/industrial-facilities-tottenham.jpg",
      alt: "Professional mould inspection industrial facility Tottenham Melbourne manufacturing workplace safety assessment IICRC certified"
    },
    {
      type: "Warehouse and Storage Properties",
      description: "Tottenham's warehouse and storage facilities benefit from our specialised commercial mould services. These properties require comprehensive moisture control to protect stored goods, maintain air quality for workers, and prevent costly inventory damage from humidity and mould-related deterioration.",
      image: "/images/warehouse-storage-tottenham.jpg",
      alt: "Warehouse storage facility mould removal Tottenham Melbourne commercial property goods protection inspection"
    },
    {
      type: "Transport and Logistics Buildings",
      description: "The transport and logistics properties throughout Tottenham require professional mould services that understand the unique challenges of these operational environments. Our certified professionals provide solutions that maintain cargo handling efficiency while ensuring healthy work environments for transport workers.",
      image: "/images/transport-logistics-tottenham.jpg",
      alt: "Transport logistics building mould inspection Tottenham Melbourne cargo facility commercial property assessment"
    },
    {
      type: "Residential Properties",
      description: "Tottenham's residential areas require professional mould services that address the challenges of living in close proximity to industrial zones. Our team understands how industrial activities can affect residential air quality and provides comprehensive solutions for homes in mixed-use urban environments.",
      image: "/images/residential-properties-tottenham.jpg",
      alt: "Residential property mould removal Tottenham Melbourne family home industrial area assessment"
    }
  ];

  const localFactors = [
    {
      factor: "Heavy Industrial Environment",
      impact: "Tottenham's concentration of heavy industry creates unique air quality challenges and moisture management requirements for both commercial and residential properties.",
      solution: "Our assessment considers industrial environmental impacts and develops solutions that address these complex urban conditions."
    },
    {
      factor: "Transport Infrastructure Density",
      impact: "The suburb's extensive rail and road transport networks can influence building vibration, air circulation, and environmental conditions affecting indoor air quality.",
      solution: "We evaluate transport infrastructure impacts on building performance and moisture management requirements."
    },
    {
      factor: "Mixed-Use Urban Challenges",
      impact: "The combination of industrial, commercial, and residential land uses creates varied environmental conditions and different property maintenance needs within close proximity.",
      solution: "Our services adapt to address the specific challenges of each property type within the mixed-use urban environment."
    },
    {
      factor: "Worker Health and Safety Focus",
      impact: "Industrial and commercial properties require compliance with stringent workplace health and safety standards while maintaining operational efficiency and productivity.",
      solution: "We provide workplace-compliant solutions that meet occupational health requirements while minimising operational disruption."
    }
  ];

  const tottenhamServices = [
    {
      title: "Industrial Mould Management",
      description: "Comprehensive mould services for Tottenham's manufacturing and industrial facilities. Our IICRC-certified technicians provide workplace-compliant solutions that maintain employee health and safety while ensuring operational continuity and meeting occupational health and safety regulatory requirements.",
      features: [
        "Workplace safety compliance",
        "Industrial moisture management",
        "Operational continuity planning",
        "Regulatory requirement adherence"
      ]
    },
    {
      title: "Commercial Property Solutions",
      description: "Professional mould services for Tottenham's warehouses, logistics facilities, and commercial properties. We understand the critical importance of protecting stored goods and maintaining efficient operations while ensuring healthy work environments for employees.",
      features: [
        "Goods protection protocols",
        "Warehouse moisture control",
        "Commercial air quality management",
        "Business operation coordination"
      ]
    },
    {
      title: "Transport Facility Services",
      description: "Specialised mould solutions for Tottenham's transport and logistics infrastructure. Our approach addresses the unique environmental challenges of cargo handling facilities while maintaining the rapid operational pace required in transport and distribution centres.",
      features: [
        "Cargo facility expertise",
        "Rapid response protocols",
        "Transport operation coordination",
        "Distribution centre compliance"
      ]
    },
    {
      title: "Residential Environmental Protection",
      description: "Professional mould services for Tottenham's residential properties that address the specific challenges of living in an industrial urban environment. We provide comprehensive solutions that protect family homes from industrial environmental impacts.",
      features: [
        "Industrial impact assessment",
        "Residential air quality protection",
        "Family health prioritisation",
        "Urban environment adaptation"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Peter Kowalski",
      property: "Manufacturing Facility, Geelong Road",
      testimonial: "Professional industrial service that met all our workplace safety requirements. The team coordinated perfectly with our operations schedule and delivered comprehensive solutions without disrupting production. Excellent commercial service.",
      rating: 5
    },
    {
      name: "Sarah Ahmed",
      property: "Warehouse, Ashley Street",
      testimonial: "Outstanding warehouse mould management that protected our stored inventory. They understood the importance of maintaining our storage environment and provided solutions that work with our logistics operations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      property: "Residential Property, Anderson Road",
      testimonial: "Excellent residential service that addressed the unique challenges of living near industrial areas. The team provided effective solutions that improved our home's air quality significantly.",
      rating: 5
    }
  ];

  const faqData = [
    {
      question: "What makes Tottenham's industrial properties require specialised mould treatment?",
      answer: "Tottenham's heavy industrial environment creates unique moisture and air quality challenges. Industrial processes, heavy machinery, and concentrated commercial activities can generate elevated humidity levels and complex environmental conditions requiring specialised assessment and workplace-compliant treatment approaches."
    },
    {
      question: "How do you handle mould issues in active manufacturing facilities?",
      answer: "We coordinate closely with facility managers to provide mould solutions that maintain operational continuity while meeting workplace health and safety requirements. Our industrial expertise ensures comprehensive treatment that complies with occupational health standards without disrupting critical manufacturing processes."
    },
    {
      question: "Can you service warehouses and storage facilities with inventory?",
      answer: "Yes, we specialise in warehouse mould management that protects stored goods while addressing building moisture issues. Our approach includes inventory protection protocols and climate-controlled solutions that maintain optimal storage conditions throughout the remediation process."
    },
    {
      question: "Do you provide emergency services for commercial properties?",
      answer: "Absolutely. We understand that industrial and commercial properties often require rapid response to maintain operations. Our team provides 24/7 emergency mould services for Tottenham's commercial facilities with same-day response for urgent situations affecting workplace safety or business operations."
    },
    {
      question: "How do you address residential properties in Tottenham's industrial environment?",
      answer: "Residential properties in Tottenham face unique challenges from industrial proximity. Our assessment considers external environmental factors affecting indoor air quality and provides comprehensive solutions that protect family homes from industrial environmental impacts while maintaining healthy living conditions."
    }
  ];

  const serviceAreas = [
    "Geelong Road", "Ashley Street", "Anderson Road", "Francis Street",
    "Industrial Estate", "Transport Hub", "Rail Corridor", "Tottenham Station",
    "Manufacturing District", "Warehouse Precinct", "Residential Streets", "Commercial Zone"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Components */}
      <LocationPageSEO
        location={location}
        service="Professional Mould Inspection & Removal"
        description={tottenhamMetaDescription}
      />

      <EnhancedSchemaMarkup
        businessName="Mould & Restoration Co."
        location={location}
        address="Tottenham, Melbourne VIC"
        phone="1800 954 117"
        email="admin@mouldandrestoration.com.au"
        services={["Mould Inspection", "Mould Removal", "Moisture Detection", "Air Quality Testing"]}
        serviceArea="Tottenham Melbourne"
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
                IICRC-certified mould inspection and removal specialists serving Tottenham's industrial and commercial community. From manufacturing facilities to transport hubs, we provide workplace-compliant professional mould solutions for Melbourne's premier industrial suburb.
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
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-professional">Emergency</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <LocationHeroImage
                src="/images/mould-inspection-tottenham-hero.jpg"
                alt="Professional mould inspection Tottenham Melbourne IICRC certified technician industrial commercial property assessment"
                location={location}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success/100 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available Now in Tottenham</span>
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
              Local Tottenham Industrial Mould Expertise
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our industrial-grade approach and understanding of Tottenham's heavy manufacturing environment ensures effective mould solutions that meet workplace safety standards while maintaining operational efficiency in this critical Melbourne industrial hub.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localFactors.map((factor, index) => (
              <Card key={index} className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <Factory className="h-8 w-8 text-primary" />
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
              Tottenham Property Types We Service
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              From heavy industrial facilities to residential properties, our IICRC-certified team provides workplace-compliant mould solutions for every property type in Tottenham's industrial urban landscape.
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
              Specialised Mould Services for Tottenham
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our comprehensive range of industrial-grade mould services addresses the specific requirements of Tottenham's heavy industrial and commercial environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tottenhamServices.map((service, index) => (
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

      {/* Why Choose Us for Tottenham */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Why Choose Us for Tottenham Industrial Mould Solutions
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our industrial expertise, workplace safety compliance, and 24/7 availability make us the trusted choice for Tottenham's commercial and industrial property owners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">IICRC Certified Professionals</h3>
              <p className="text-professional">
                Our technicians hold industry-leading IICRC certifications with additional workplace safety training for industrial environments and heavy commercial properties.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Factory className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Industrial Specialists</h3>
              <p className="text-professional">
                Deep expertise in heavy industrial environments with understanding of manufacturing, warehouse, and transport facility mould challenges and compliance requirements.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">24/7 Emergency Response</h3>
              <p className="text-professional">
                Round-the-clock availability for urgent industrial mould situations with rapid response protocols that maintain business operations and workplace safety.
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
              What Tottenham Customers Say
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Read testimonials from satisfied Tottenham property owners who have experienced our industrial-grade mould inspection and remediation services.
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
              Our Tottenham Industrial Mould Inspection Process
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our industrial-compliant process ensures thorough assessment and effective treatment while maintaining workplace safety and operational continuity.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">1</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Industrial Assessment</h3>
              <p className="text-professional">Comprehensive workplace-compliant evaluation with safety protocols and operational coordination.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">2</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Heavy-Duty Testing</h3>
              <p className="text-professional">Advanced air quality and environmental testing appropriate for industrial environments and workplace standards.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">3</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Industrial Solutions</h3>
              <p className="text-professional">Robust remediation strategies designed for heavy industrial applications and commercial operational requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">4</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Ongoing Compliance</h3>
              <p className="text-professional">Comprehensive workplace safety monitoring and prevention strategies for long-term industrial protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mould Prevention Tips */}
      <section className="py-16 bg-columbia">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Industrial Mould Prevention Tips for Tottenham
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Protect your Tottenham industrial property with these expert prevention strategies designed for heavy manufacturing and commercial environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Wind className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold text-charcoal">Industrial Ventilation</h3>
              </div>
              <p className="text-professional">
                Maintain robust mechanical ventilation systems appropriate for industrial processes. Heavy manufacturing requires engineered airflow solutions to manage moisture and contaminants.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Thermometer className="h-8 w-8 text-success" />
                <h3 className="text-lg font-bold text-charcoal">Process Climate Control</h3>
              </div>
              <p className="text-professional">
                Monitor temperature and humidity levels during industrial processes that generate heat or moisture. Consistent environmental control prevents condensation in manufacturing environments.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="h-8 w-8 text-teal-600" />
                <h3 className="text-lg font-bold text-charcoal">Industrial Moisture Management</h3>
              </div>
              <p className="text-professional">
                Address industrial moisture sources including process water, steam systems, and equipment condensation. Regular monitoring prevents moisture accumulation in critical areas.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-8 w-8 text-orange-600" />
                <h3 className="text-lg font-bold text-charcoal">Workplace Safety Monitoring</h3>
              </div>
              <p className="text-professional">
                Implement systematic workplace air quality monitoring to identify mould risks early. Industrial environments require proactive monitoring to maintain worker health and safety compliance.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Warehouse className="h-8 w-8 text-purple-600" />
                <h3 className="text-lg font-bold text-charcoal">Storage Environment Control</h3>
              </div>
              <p className="text-professional">
                Maintain optimal storage conditions in warehouses and logistics facilities. Climate control protects inventory while preventing building moisture problems.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-red-600" />
                <h3 className="text-lg font-bold text-charcoal">Professional Industrial Maintenance</h3>
              </div>
              <p className="text-professional">
                Schedule regular professional inspections appropriate for industrial facilities. Workplace compliance requires systematic environmental monitoring and preventive maintenance programs.
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
              Tottenham Areas We Service
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              We provide comprehensive industrial-grade mould inspection and removal services throughout Tottenham and surrounding industrial areas.
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
              Frequently Asked Questions - Tottenham Industrial Mould Services
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Get answers to common questions about our industrial-grade mould services for Tottenham properties.
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
              Get Industrial Mould Inspection in Tottenham
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Contact our IICRC-certified team for workplace-compliant mould assessment and removal services. Available 24/7 for emergency industrial mould situations.
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
                      <div className="font-semibold">24/7 Industrial Service</div>
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
                      <div className="text-professional">Tottenham & All Melbourne</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button size="lg" className="bg-primary hover:bg-primary-600 text-white px-8 py-4">
                    <a href="tel:1800954117" className="flex items-center">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now for Industrial Service
                    </a>
                  </Button>
                </div>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Tottenham Service?</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-columbia0 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Industrial Expertise</h4>
                    <p className="text-blue-100">
                      Specialised knowledge of heavy manufacturing environments with workplace safety compliance and industrial moisture management expertise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-columbia0 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">24/7 Emergency Response</h4>
                    <p className="text-blue-100">
                      Round-the-clock availability for urgent industrial situations with rapid response protocols that maintain operations and workplace safety.
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
                      Fully certified professionals using industrial-grade techniques for comprehensive commercial and manufacturing mould solutions.
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

export default Tottenham;