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

export const Cheltenham = () => {
  const location = "Cheltenham";
  const cheltenhamMetaDescription = getSuburbMetaDescription('cheltenham');

  const propertyTypes = [
    {
      type: "Bayside Character Homes",
      description: "Our IICRC-certified technicians specialise in mould management for Cheltenham's distinctive bayside character homes. These properties, ranging from 1920s to 1960s architecture, often feature unique construction materials and design elements that require specialised mould treatment approaches. We understand the heritage value and provide solutions that preserve architectural integrity while ensuring thorough mould remediation.",
      image: "/images/bayside-character-homes-cheltenham.jpg",
      alt: "Professional mould inspection bayside character home Cheltenham Melbourne heritage property assessment IICRC certified"
    },
    {
      type: "Modern Family Homes",
      description: "Cheltenham's contemporary family homes benefit from our advanced mould detection and removal techniques. These modern properties require sophisticated approaches to address current building standards, energy-efficient construction challenges, and contemporary lifestyle moisture sources including multiple bathrooms, laundries, and entertainment areas.",
      image: "/images/modern-family-homes-cheltenham.jpg",
      alt: "Modern family home mould removal Cheltenham Melbourne contemporary residential property inspection"
    },
    {
      type: "Coastal Apartments and Units",
      description: "The apartment buildings and unit complexes throughout Cheltenham present unique mould challenges related to their proximity to Port Phillip Bay. Our certified professionals address common issues including shared ventilation systems, moisture penetration through building envelopes, and the effects of coastal humidity on multi-unit residential buildings.",
      image: "/images/coastal-apartments-cheltenham.jpg",
      alt: "Coastal apartment mould inspection Cheltenham Melbourne unit complex bayside residential building assessment"
    },
    {
      type: "Commercial and Retail Properties",
      description: "Cheltenham's Charman Road commercial precinct and local business properties require specialised commercial mould services. Our team understands the importance of maintaining business operations while ensuring thorough mould remediation for shops, offices, medical facilities, and service businesses throughout the suburb.",
      image: "/images/commercial-retail-cheltenham.jpg",
      alt: "Commercial mould removal Cheltenham Melbourne retail property Charman Road business district inspection"
    }
  ];

  const localFactors = [
    {
      factor: "Coastal Bayside Location",
      impact: "Cheltenham's proximity to Port Phillip Bay creates elevated humidity levels and salt air exposure that can contribute to accelerated moisture-related building issues.",
      solution: "Our coastal-specific moisture management strategies address these unique environmental challenges."
    },
    {
      factor: "Heritage Building Mix",
      impact: "The suburb's combination of character homes from different eras creates varied construction types with different mould risk profiles and treatment requirements.",
      solution: "We tailor our approach to each property's specific age, construction materials, and architectural style."
    },
    {
      factor: "Sandy Soil Conditions",
      impact: "Cheltenham's sandy soil can affect drainage patterns and foundation moisture levels, particularly during heavy rainfall periods common to the bayside area.",
      solution: "Our assessment includes soil-specific moisture analysis and foundation area evaluation."
    },
    {
      factor: "Bayside Weather Patterns",
      impact: "The area's exposure to bay breezes, seasonal humidity variations, and storm weather from Port Phillip Bay can create variable moisture conditions.",
      solution: "We develop weather-responsive mould prevention strategies tailored to local climate patterns."
    }
  ];

  const cheltenhamServices = [
    {
      title: "Coastal Character Home Assessment",
      description: "Specialised mould inspection services for Cheltenham's heritage and character properties. Our IICRC-certified technicians understand the unique challenges of bayside character homes and employ heritage-appropriate assessment techniques that preserve architectural features while identifying moisture and mould risks.",
      features: [
        "Heritage-sensitive inspection methods",
        "Character building moisture analysis",
        "Coastal environment impact assessment",
        "Architectural preservation protocols"
      ]
    },
    {
      title: "Bayside Humidity Management",
      description: "Comprehensive moisture and humidity control strategies designed specifically for Cheltenham's coastal location. We address the specific challenges of salt air exposure, elevated humidity levels, and seasonal weather variations that affect properties near Port Phillip Bay.",
      features: [
        "Coastal air quality management",
        "Salt air corrosion prevention",
        "Humidity level optimisation",
        "Seasonal moisture planning"
      ]
    },
    {
      title: "Family Home Mould Solutions",
      description: "Comprehensive mould services for Cheltenham's family homes, addressing the specific challenges of modern living including multiple bathrooms, laundries, and high-occupancy moisture sources. Our family-focused approach ensures safe, thorough remediation with minimal household disruption.",
      features: [
        "Child and pet-safe treatment methods",
        "Family lifestyle accommodation",
        "Multiple moisture source management",
        "Prevention education for families"
      ]
    },
    {
      title: "Commercial Property Services",
      description: "Professional mould management for Cheltenham's business district and commercial properties. We provide rapid response and flexible scheduling to ensure business continuity while delivering comprehensive mould assessment and remediation services.",
      features: [
        "Business hours accommodation",
        "Rapid commercial response",
        "Customer safety protocols",
        "Minimal operational disruption"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      property: "Character Home, Bay Road",
      testimonial: "Outstanding service for our 1940s character home. The team respected the heritage features and provided effective mould solutions that preserved the charm of our bayside property. Highly professional throughout.",
      rating: 5
    },
    {
      name: "Michael Thompson",
      property: "Modern Family Home, Centre Road",
      testimonial: "Excellent response and thorough work on our family home. They worked around our schedule with kids and provided clear explanations throughout the process. No mould issues since their treatment.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      property: "Coastal Apartment, Charman Road",
      testimonial: "Professional coordination with our building management for our unit. They understood the coastal environment challenges and provided long-term prevention strategies that have been very effective.",
      rating: 5
    }
  ];

  const faqData = [
    {
      question: "What makes Cheltenham properties particularly susceptible to mould?",
      answer: "Cheltenham's bayside location creates elevated humidity levels and salt air exposure that can accelerate moisture-related issues. The suburb's mix of character homes with varying construction materials and ages also creates different mould risk profiles. Our local expertise helps us address these specific coastal environmental challenges effectively."
    },
    {
      question: "How do you handle mould removal in Cheltenham's character homes?",
      answer: "We use heritage-appropriate treatment methods that preserve architectural integrity while ensuring thorough mould remediation. Our IICRC-certified technicians understand period construction materials and employ techniques that protect decorative features, original timber work, and character elements while addressing moisture issues."
    },
    {
      question: "Can you service apartment buildings and units in Cheltenham?",
      answer: "Yes, we specialise in multi-unit building mould solutions throughout Cheltenham. We coordinate with building management and residents to provide comprehensive assessment and remediation services. Our team understands the complexities of coastal apartment buildings and shared ventilation systems."
    },
    {
      question: "What's your response time for Cheltenham mould emergencies?",
      answer: "We provide same-day response for urgent mould situations in Cheltenham. Our local Melbourne team can typically reach Cheltenham properties within 2-3 hours of your call during business hours. We understand that coastal humidity can accelerate mould problems, requiring prompt professional attention."
    },
    {
      question: "Do you provide ongoing mould prevention advice for Cheltenham properties?",
      answer: "Absolutely. We provide comprehensive prevention strategies tailored to Cheltenham's coastal environment. This includes humidity management recommendations, seasonal maintenance advice, and strategies to address the specific challenges of bayside living including salt air exposure and humidity variations."
    }
  ];

  const serviceAreas = [
    "Bay Road", "Charman Road", "Centre Road", "Southland Drive",
    "Kingston Road", "Warrigal Road", "Park Road", "Nepean Highway",
    "Cheltenham Station Precinct", "Southland Shopping Centre", "Cheltenham Park", "Mentone Border"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Components */}
      <LocationPageSEO
        location={location}
        service="Professional Mould Inspection & Removal"
        description={cheltenhamMetaDescription}
      />

      <EnhancedSchemaMarkup
        businessName="Mould & Restoration Co."
        location={location}
        address="Cheltenham, Melbourne VIC"
        phone="1800 954 117"
        email="admin@mouldandrestoration.com.au"
        services={["Mould Inspection", "Mould Removal", "Moisture Detection", "Air Quality Testing"]}
        serviceArea="Cheltenham Melbourne"
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
                IICRC-certified mould inspection and removal specialists serving Cheltenham's diverse bayside community. From heritage character homes to modern family residences, we provide professional mould solutions tailored to the unique coastal environment of this established Melbourne suburb.
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
              <OptimizedImage
                src="/images/mould-inspection-cheltenham-hero.jpg"
                alt="Professional mould inspection Cheltenham Melbourne IICRC certified technician bayside property assessment"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success/100 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available Now in Cheltenham</span>
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
              Local Cheltenham Mould Expertise
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our comprehensive understanding of Cheltenham's coastal environment, heritage architecture, and bayside weather patterns ensures effective mould solutions tailored to your specific property and location within this established Melbourne suburb.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localFactors.map((factor, index) => (
              <Card key={index} className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplets className="h-8 w-8 text-primary" />
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
              Cheltenham Property Types We Service
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              From bayside character homes to modern family residences, our IICRC-certified team provides specialised mould solutions for every property type in Cheltenham's diverse coastal residential landscape.
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
              Specialised Mould Services for Cheltenham
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our comprehensive range of professional mould services addresses the specific challenges faced by Cheltenham properties, from coastal humidity effects to heritage building preservation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cheltenhamServices.map((service, index) => (
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

      {/* Why Choose Us for Cheltenham */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Why Choose Us for Cheltenham Mould Solutions
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our coastal expertise, heritage sensitivity, and family-focused approach make us the trusted choice for Cheltenham property owners seeking effective mould solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">IICRC Certified Professionals</h3>
              <p className="text-professional">
                Our technicians hold industry-leading IICRC certifications, ensuring the highest standards of mould inspection and remediation for your Cheltenham property.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Coastal Property Specialists</h3>
              <p className="text-professional">
                Deep understanding of bayside environmental factors and their impact on property maintenance and mould prevention in coastal suburbs.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Family-Focused Service</h3>
              <p className="text-professional">
                Family-safe treatment methods and flexible scheduling that accommodates busy household routines in Cheltenham's family-oriented community.
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
              What Cheltenham Customers Say
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Read testimonials from satisfied Cheltenham property owners who have experienced our professional mould inspection and remediation services.
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
              Our Cheltenham Mould Inspection Process
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our systematic approach ensures thorough assessment and effective treatment of mould issues in your Cheltenham property.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">1</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Coastal Assessment</h3>
              <p className="text-professional">Comprehensive property evaluation including coastal environment factors and moisture detection using advanced equipment.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">2</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Heritage Considerations</h3>
              <p className="text-professional">Air quality sampling and surface testing with special attention to character building preservation requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">3</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Tailored Solutions</h3>
              <p className="text-professional">Customised remediation strategy appropriate for your property type and coastal environment requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">4</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Prevention Planning</h3>
              <p className="text-professional">Comprehensive guidance on preventing future mould growth in the bayside environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mould Prevention Tips */}
      <section className="py-16 bg-columbia">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Mould Prevention Tips for Cheltenham Properties
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Protect your Cheltenham property from mould with these expert prevention strategies tailored to the bayside climate and local property characteristics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Wind className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold text-charcoal">Coastal Ventilation</h3>
              </div>
              <p className="text-professional">
                Utilise natural bay breezes for ventilation while managing salt air exposure. Ensure adequate cross-ventilation during dry periods and use exhaust fans in wet areas.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Thermometer className="h-8 w-8 text-success" />
                <h3 className="text-lg font-bold text-charcoal">Climate Management</h3>
              </div>
              <p className="text-professional">
                Maintain consistent indoor temperatures to prevent condensation, especially during humid bayside weather conditions and seasonal changes.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="h-8 w-8 text-teal-600" />
                <h3 className="text-lg font-bold text-charcoal">Moisture Control</h3>
              </div>
              <p className="text-professional">
                Monitor coastal humidity effects and control moisture sources including plumbing leaks, roof issues, and basement dampness common in bayside locations.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-8 w-8 text-orange-600" />
                <h3 className="text-lg font-bold text-charcoal">Early Detection</h3>
              </div>
              <p className="text-professional">
                Regular inspection of common problem areas including bathrooms, laundries, and areas exposed to bay weather conditions. Monitor for signs of salt air damage.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Home className="h-8 w-8 text-purple-600" />
                <h3 className="text-lg font-bold text-charcoal">Heritage Care</h3>
              </div>
              <p className="text-professional">
                Use appropriate maintenance techniques for character properties that preserve architectural features while protecting against coastal moisture penetration.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-red-600" />
                <h3 className="text-lg font-bold text-charcoal">Professional Maintenance</h3>
              </div>
              <p className="text-professional">
                Schedule regular professional inspections, especially for coastal properties or those with previous moisture issues. Prevention is more cost-effective than remediation.
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
              Cheltenham Areas We Service
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              We provide comprehensive mould inspection and removal services throughout Cheltenham and surrounding bayside areas.
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
              Frequently Asked Questions - Cheltenham Mould Services
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Get answers to common questions about our professional mould services for Cheltenham properties.
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
              Get Professional Mould Inspection in Cheltenham
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Contact our IICRC-certified team for expert mould assessment and removal services. We're available 7 days a week to help protect your Cheltenham property.
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
                      <div className="text-professional">Cheltenham & All Melbourne</div>
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
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Cheltenham Service?</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-columbia0 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Bayside Expertise</h4>
                    <p className="text-blue-100">
                      Specialised knowledge of coastal property challenges, heritage building preservation, and salt air effects on building materials.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-columbia0 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Family-Safe Methods</h4>
                    <p className="text-blue-100">
                      Child and pet-safe treatment approaches that protect your family while effectively eliminating mould problems.
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
                      Fully certified professionals using industry-leading techniques for comprehensive coastal mould solutions.
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

export default Cheltenham;