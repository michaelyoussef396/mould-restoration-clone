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

export const Highett = () => {
  const location = "Highett";
  const righettMetaDescription = getSuburbMetaDescription('highett');

  const propertyTypes = [
    {
      type: "Post-War Family Homes",
      description: "Our IICRC-certified technicians specialise in mould management for Highett's distinctive post-war housing stock. These 1940s-1960s properties often feature unique construction characteristics including brick veneer, weatherboard, and fibro materials that require specialised mould treatment approaches. We understand the heritage significance and provide solutions that preserve period features while ensuring thorough mould remediation.",
      image: "/images/postwar-family-homes-highett.jpg",
      alt: "Professional mould inspection post-war family home Highett Melbourne heritage property assessment IICRC certified"
    },
    {
      type: "Modern Renovated Homes",
      description: "Highett's renovated and extended post-war properties present unique mould challenges where original construction meets contemporary additions. Our certified professionals address the complex interactions between heritage building materials and modern renovations, ensuring comprehensive mould management across different construction eras within single properties.",
      image: "/images/renovated-homes-highett.jpg",
      alt: "Modern renovated home mould removal Highett Melbourne contemporary extension heritage building assessment"
    },
    {
      type: "Contemporary Townhouses",
      description: "The newer townhouse developments throughout Highett benefit from our advanced mould detection and removal techniques. These modern properties require sophisticated approaches to address contemporary building standards, shared wall systems, and the challenges of medium-density living environments.",
      image: "/images/contemporary-townhouses-highett.jpg",
      alt: "Contemporary townhouse mould inspection Highett Melbourne modern development residential complex assessment"
    },
    {
      type: "Commercial Properties",
      description: "Highett's Highett Road commercial strip and local business properties require specialised commercial mould services. Our team understands the importance of maintaining business operations while ensuring thorough mould remediation for shops, cafes, offices, and service businesses in this community-focused commercial precinct.",
      image: "/images/commercial-properties-highett.jpg",
      alt: "Commercial mould removal Highett Melbourne retail property Highett Road business district inspection"
    }
  ];

  const localFactors = [
    {
      factor: "Bayside Proximity Effects",
      impact: "Highett's location between Cheltenham and Moorabbin, near Port Phillip Bay, creates elevated humidity levels that can promote mould growth in properties with inadequate ventilation.",
      solution: "Our moisture management strategies specifically address these coastal proximity challenges."
    },
    {
      factor: "Post-War Construction Characteristics",
      impact: "The suburb's predominant post-war housing stock features construction materials and methods that can be vulnerable to moisture penetration and mould development over time.",
      solution: "We use period-appropriate treatment methods that preserve architectural integrity while ensuring effective remediation."
    },
    {
      factor: "Mixed Building Ages",
      impact: "The combination of original post-war homes, renovated properties, and new developments creates varied mould risk profiles across different property types.",
      solution: "Our tailored approach addresses the specific challenges of each construction era and building type."
    },
    {
      factor: "Suburban Drainage Patterns",
      impact: "The area's topography and suburban development patterns can affect drainage and moisture management, particularly during Melbourne's wet seasons.",
      solution: "We assess and address how local drainage conditions influence indoor moisture risks."
    }
  ];

  const righettServices = [
    {
      title: "Post-War Home Mould Assessment",
      description: "Specialised mould inspection services for Highett's characteristic post-war properties. Our IICRC-certified technicians understand the unique challenges of 1940s-1960s construction and employ heritage-appropriate assessment techniques that preserve period features while identifying moisture and mould risks effectively.",
      features: [
        "Heritage-sensitive inspection methods",
        "Post-war construction analysis",
        "Period material moisture assessment",
        "Architectural preservation protocols"
      ]
    },
    {
      title: "Renovation Integration Mould Solutions",
      description: "Comprehensive mould services for Highett's many renovated and extended properties. We address the complex challenges where original post-war construction meets contemporary additions, ensuring effective mould management across different building materials and construction eras within single properties.",
      features: [
        "Multi-era construction assessment",
        "Renovation junction analysis",
        "Mixed material compatibility",
        "Integrated moisture management"
      ]
    },
    {
      title: "Family Home Mould Prevention",
      description: "Family-focused mould solutions designed for Highett's community-oriented residential environment. Our services accommodate busy family schedules while providing comprehensive mould assessment and prevention strategies that protect children and pets in this established suburban setting.",
      features: [
        "Child and pet-safe methods",
        "Family schedule accommodation",
        "Educational prevention programs",
        "Long-term monitoring support"
      ]
    },
    {
      title: "Local Business Mould Management",
      description: "Professional mould services for Highett's local business community along Highett Road and surrounding commercial areas. We provide flexible scheduling and rapid response to ensure business continuity while delivering thorough mould assessment and remediation services.",
      features: [
        "Business hours flexibility",
        "Rapid response protocols",
        "Customer safety prioritisation",
        "Minimal operational disruption"
      ]
    }
  ];

  const testimonials = [
    {
      name: "David Wilson",
      property: "Post-War Home, Graham Street",
      testimonial: "Excellent service for our 1950s family home. The team understood the heritage construction and provided effective solutions that preserved the character of our property. Professional and thorough throughout the process.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      property: "Renovated Home, Bay Road",
      testimonial: "Outstanding work on our extended post-war home. They addressed the complex junction between original and new sections expertly. No mould issues since their comprehensive treatment.",
      rating: 5
    },
    {
      name: "Mark Chen",
      property: "Modern Townhouse, Centre Road",
      testimonial: "Professional and efficient service for our townhouse development. The team coordinated well with other residents and provided clear explanations throughout. Highly recommended for Highett properties.",
      rating: 5
    }
  ];

  const faqData = [
    {
      question: "What makes Highett properties particularly susceptible to mould?",
      answer: "Highett's proximity to Port Phillip Bay creates elevated humidity levels, while the suburb's predominant post-war housing stock features construction materials and methods that can be vulnerable to moisture penetration over time. The mix of original homes, renovations, and new developments also creates varied mould risk profiles requiring specialised assessment approaches."
    },
    {
      question: "How do you handle mould removal in Highett's post-war homes?",
      answer: "We use heritage-appropriate treatment methods that preserve the character and integrity of post-war construction while ensuring thorough mould remediation. Our IICRC-certified technicians understand period building materials including brick veneer, weatherboard, and fibro, employing techniques that protect these materials while addressing moisture issues effectively."
    },
    {
      question: "Can you service renovated homes with mixed construction eras?",
      answer: "Absolutely. We specialise in properties where original post-war construction meets contemporary additions. Our team understands the complex interactions between different building materials and construction methods, ensuring comprehensive mould management across all areas of mixed-era properties."
    },
    {
      question: "What's your response time for Highett mould emergencies?",
      answer: "We provide same-day response for urgent mould situations in Highett. Our local Melbourne team can typically reach Highett properties within 2-3 hours of your call during business hours. We understand that post-war construction can be particularly vulnerable to rapid mould development when moisture issues occur."
    },
    {
      question: "Do you provide ongoing mould prevention advice for Highett properties?",
      answer: "Yes, we provide comprehensive prevention strategies tailored to Highett's specific conditions. This includes advice for post-war construction maintenance, renovation integration considerations, and management of bayside humidity effects. We offer ongoing support to help maintain healthy indoor environments long-term."
    }
  ];

  const serviceAreas = [
    "Highett Road", "Graham Street", "Bay Road", "Centre Road",
    "Bluff Road", "Warrigal Road", "Spring Road", "Chesterville Road",
    "Highett Reserve", "Highett Station Precinct", "Moorabbin Border", "Cheltenham Border"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Components */}
      <LocationPageSEO
        location={location}
        service="Professional Mould Inspection & Removal"
        description={righettMetaDescription}
      />

      <EnhancedSchemaMarkup
        businessName="Mould & Restoration Co."
        location={location}
        address="Highett, Melbourne VIC"
        phone="1800 954 117"
        email="admin@mouldandrestoration.com.au"
        services={["Mould Inspection", "Mould Removal", "Moisture Detection", "Air Quality Testing"]}
        serviceArea="Highett Melbourne"
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
                IICRC-certified mould inspection and removal specialists serving Highett's established residential community. From characteristic post-war family homes to modern renovations, we provide professional mould solutions tailored to this peaceful bayside suburb's diverse housing landscape.
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
                src="/images/mould-inspection-highett-hero.jpg"
                alt="Professional mould inspection Highett Melbourne IICRC certified technician post-war family home assessment"
                location={location}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success/100 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available Now in Highett</span>
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
              Local Highett Mould Expertise
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our specialised understanding of Highett's post-war architecture, bayside climate influences, and suburban residential patterns ensures effective mould solutions tailored to your specific property and location within this established Melbourne suburb.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localFactors.map((factor, index) => (
              <Card key={index} className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="h-8 w-8 text-primary" />
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
              Highett Property Types We Service
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              From post-war family homes to contemporary townhouses, our IICRC-certified team provides specialised mould solutions for every property type in Highett's diverse residential landscape.
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
              Specialised Mould Services for Highett
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our comprehensive range of professional mould services addresses the specific challenges faced by Highett properties, from post-war construction characteristics to modern renovation integration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {righettServices.map((service, index) => (
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

      {/* Why Choose Us for Highett */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Why Choose Us for Highett Mould Solutions
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our post-war construction expertise, family-focused approach, and understanding of bayside environmental factors make us the trusted choice for Highett property owners seeking effective mould solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">IICRC Certified Professionals</h3>
              <p className="text-professional">
                Our technicians hold industry-leading IICRC certifications, ensuring the highest standards of mould inspection and remediation for your Highett property.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Post-War Construction Specialists</h3>
              <p className="text-professional">
                Deep understanding of 1940s-1960s building materials and construction methods, with heritage-appropriate treatment approaches.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Community-Focused Service</h3>
              <p className="text-professional">
                Family-friendly service approaches that respect busy household schedules and provide educational support for long-term mould prevention.
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
              What Highett Customers Say
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Read testimonials from satisfied Highett property owners who have experienced our professional mould inspection and remediation services.
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
              Our Highett Mould Inspection Process
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our systematic approach ensures thorough assessment and effective treatment of mould issues in your Highett property.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">1</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Heritage Assessment</h3>
              <p className="text-professional">Comprehensive evaluation of post-war construction characteristics and moisture detection using appropriate equipment.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">2</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Multi-Era Analysis</h3>
              <p className="text-professional">Detailed testing across different construction zones including original areas and any renovations or additions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">3</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Tailored Treatment</h3>
              <p className="text-professional">Customised remediation strategy appropriate for your property's specific construction era and renovation status.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">4</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Prevention Education</h3>
              <p className="text-professional">Comprehensive guidance on maintaining healthy indoor environments in post-war and mixed-era properties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mould Prevention Tips */}
      <section className="py-16 bg-columbia">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Mould Prevention Tips for Highett Properties
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Protect your Highett property from mould with these expert prevention strategies tailored to post-war construction and bayside suburban conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Wind className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold text-charcoal">Post-War Ventilation</h3>
              </div>
              <p className="text-professional">
                Ensure adequate ventilation in post-war homes by maintaining original windows and adding modern exhaust fans where needed. Many post-war homes benefit from cross-ventilation improvements.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Thermometer className="h-8 w-8 text-success" />
                <h3 className="text-lg font-bold text-charcoal">Climate Management</h3>
              </div>
              <p className="text-professional">
                Maintain consistent indoor temperatures to prevent condensation, especially in post-war homes that may lack modern insulation standards.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="h-8 w-8 text-teal-600" />
                <h3 className="text-lg font-bold text-charcoal">Moisture Monitoring</h3>
              </div>
              <p className="text-professional">
                Pay special attention to period building elements that may be vulnerable to moisture including window seals, roof areas, and foundation zones common in post-war construction.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-8 w-8 text-orange-600" />
                <h3 className="text-lg font-bold text-charcoal">Early Detection</h3>
              </div>
              <p className="text-professional">
                Regular inspection of common problem areas including bathrooms, laundries, and areas where original construction meets renovations or additions.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-8 w-8 text-purple-600" />
                <h3 className="text-lg font-bold text-charcoal">Heritage Maintenance</h3>
              </div>
              <p className="text-professional">
                Use appropriate maintenance techniques for post-war properties that preserve character features while improving moisture resistance and ventilation.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-red-600" />
                <h3 className="text-lg font-bold text-charcoal">Professional Guidance</h3>
              </div>
              <p className="text-professional">
                Schedule regular professional inspections, especially for properties with mixed construction eras or those showing signs of age-related maintenance needs.
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
              Highett Areas We Service
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              We provide comprehensive mould inspection and removal services throughout Highett and surrounding areas.
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
              Frequently Asked Questions - Highett Mould Services
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Get answers to common questions about our professional mould services for Highett properties.
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
              Get Professional Mould Inspection in Highett
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Contact our IICRC-certified team for expert mould assessment and removal services. We're available 7 days a week to help protect your Highett property.
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
                      <div className="text-professional">Highett & All Melbourne</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button size="lg" className="bg-primary hover:bg-primary-600 text-white px-8 py-4">
                    <a href="tel:1800954117" className="flex items-center">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now for Immediate Service
                    </a>
                  </Button>
                </div>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Highett Service?</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-columbia0 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Post-War Expertise</h4>
                    <p className="text-blue-100">
                      Specialised knowledge of 1940s-1960s construction materials and heritage-appropriate treatment methods for character preservation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-columbia0 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Family-Safe Approach</h4>
                    <p className="text-blue-100">
                      Child and pet-safe treatment methods with flexible scheduling that accommodates busy family lifestyles.
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
                      Fully certified professionals using industry-leading techniques for comprehensive suburban mould solutions.
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

export default Righett;