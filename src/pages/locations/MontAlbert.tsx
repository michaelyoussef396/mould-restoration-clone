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

export const MontAlbert = () => {
  const location = "Mont Albert";
  const montAlbertMetaDescription = getSuburbMetaDescription('mont-albert');

  const propertyTypes = [
    {
      type: "Elevated Heritage Homes",
      description: "Our IICRC-certified technicians specialise in mould management for Mont Albert's distinctive elevated heritage properties. These prominent homes, ranging from grand Edwardian residences to refined interwar properties, benefit from the suburb's elevated topography but require specialised mould treatment approaches that preserve their architectural significance and commanding positions.",
      image: "/images/elevated-heritage-homes-mont-albert.jpg",
      alt: "Professional mould inspection elevated heritage home Mont Albert Melbourne elevated residential property assessment IICRC certified"
    },
    {
      type: "Modern Family Residences",
      description: "Mont Albert's contemporary family homes benefit from our advanced mould detection and removal techniques. These well-positioned properties require sophisticated approaches to address modern construction challenges, family living moisture sources, and the maintenance of healthy indoor environments in this sought-after residential area.",
      image: "/images/modern-family-residences-mont-albert.jpg",
      alt: "Modern family residence mould removal Mont Albert Melbourne contemporary home elevated suburb inspection"
    },
    {
      type: "Renovated Character Properties",
      description: "The many beautifully renovated character properties throughout Mont Albert present unique mould challenges where historical architecture meets contemporary living. Our certified professionals address the complex interactions between original construction and modern additions, ensuring comprehensive mould management across different building eras.",
      image: "/images/renovated-character-mont-albert.jpg",
      alt: "Renovated character property mould inspection Mont Albert Melbourne heritage renovation modern extension assessment"
    },
    {
      type: "Commercial Properties",
      description: "Mont Albert's Hamilton Street commercial precinct and local business properties require specialised commercial mould services. Our team understands the importance of maintaining professional environments while ensuring thorough mould remediation for shops, offices, and service businesses in this established commercial area.",
      image: "/images/commercial-properties-mont-albert.jpg",
      alt: "Commercial mould removal Mont Albert Melbourne Hamilton Street business district retail property inspection"
    }
  ];

  const localFactors = [
    {
      factor: "Elevated Topography Benefits",
      impact: "Mont Albert's elevated position provides natural drainage advantages, but properties on slopes may experience unique moisture patterns requiring specialised assessment approaches.",
      solution: "Our topographical assessment considers elevation benefits and potential slope-related moisture challenges."
    },
    {
      factor: "Heritage Architecture Diversity",
      impact: "The suburb's collection of significant heritage homes from different eras creates varied construction types with different mould risk profiles and preservation requirements.",
      solution: "We tailor our approach to each property's specific architectural period and heritage significance."
    },
    {
      factor: "Established Garden Settings",
      impact: "Mont Albert's mature established gardens and tree-lined streets can affect property drainage, shade patterns, and moisture levels around buildings.",
      solution: "Our assessment includes landscape factors and their impact on building moisture management."
    },
    {
      factor: "Transport Proximity Effects",
      impact: "The suburb's proximity to major transport routes and the Box Hill corridor can influence air quality and environmental conditions affecting indoor environments.",
      solution: "We consider external environmental factors when developing comprehensive mould prevention strategies."
    }
  ];

  const montAlbertServices = [
    {
      title: "Elevated Property Mould Assessment",
      description: "Specialised mould inspection services for Mont Albert's elevated properties. Our IICRC-certified technicians understand how topographical advantages and slope conditions affect moisture patterns in elevated homes, providing comprehensive assessment that considers both benefits and challenges of hillside positioning.",
      features: [
        "Topographical moisture analysis",
        "Elevated property drainage assessment",
        "Slope-specific moisture evaluation",
        "Elevated position optimisation"
      ]
    },
    {
      title: "Heritage Character Preservation",
      description: "Comprehensive mould services for Mont Albert's significant heritage properties. We provide specialised treatment that preserves architectural heritage while addressing moisture issues, understanding the unique requirements of Edwardian, interwar, and other period properties in this established suburb.",
      features: [
        "Heritage-appropriate treatment methods",
        "Architectural preservation protocols",
        "Period construction expertise",
        "Character feature protection"
      ]
    },
    {
      title: "Family Home Mould Solutions",
      description: "Family-focused mould services designed for Mont Albert's residential community. Our comprehensive approach addresses the specific challenges of family living including multiple moisture sources, busy household schedules, and the need for safe, effective treatment in family environments.",
      features: [
        "Family-safe treatment protocols",
        "Child and pet-friendly methods",
        "Flexible family scheduling",
        "Educational prevention support"
      ]
    },
    {
      title: "Commercial Mould Management",
      description: "Professional mould services for Mont Albert's Hamilton Street business precinct and commercial properties. We provide business-friendly scheduling and rapid response to ensure minimal operational disruption while delivering comprehensive mould assessment and remediation services.",
      features: [
        "Business continuity focus",
        "Flexible commercial scheduling",
        "Professional environment standards",
        "Rapid response protocols"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Patricia Williams",
      property: "Heritage Home, Hamilton Street",
      testimonial: "Exceptional service for our Edwardian home. The team demonstrated excellent understanding of heritage construction and provided solutions that preserved our property's character. Professional and thorough throughout the entire process.",
      rating: 5
    },
    {
      name: "Michael Chen",
      property: "Modern Family Home, Elgar Road",
      testimonial: "Outstanding work on our family home. They accommodated our busy schedule with three young children and provided clear explanations throughout. No mould issues since their comprehensive treatment.",
      rating: 5
    },
    {
      name: "Jennifer Thompson",
      property: "Renovated Character Home, Mont Albert Road",
      testimonial: "Professional approach to our heritage renovation with modern extension. They understood the complexity of mixed construction eras and provided excellent solutions for the entire property.",
      rating: 5
    }
  ];

  const faqData = [
    {
      question: "What advantages does Mont Albert's elevated position provide for mould prevention?",
      answer: "Mont Albert's elevated topography provides natural drainage advantages that can help reduce moisture accumulation around properties. However, properties on slopes may experience unique moisture patterns. Our assessment considers both the benefits of elevation and any slope-related challenges to provide comprehensive mould management strategies."
    },
    {
      question: "How do you handle mould removal in Mont Albert's heritage properties?",
      answer: "We use heritage-appropriate treatment methods that preserve architectural significance while ensuring thorough mould remediation. Our IICRC-certified technicians understand period construction materials and employ techniques that protect character features, original elements, and heritage value while addressing moisture issues effectively."
    },
    {
      question: "Can you service renovated properties with mixed construction eras?",
      answer: "Absolutely. Mont Albert has many beautifully renovated character properties where historical architecture meets contemporary additions. Our team specialises in addressing the complex interactions between different construction eras, ensuring comprehensive mould management across all areas of mixed-period properties."
    },
    {
      question: "What's your response time for Mont Albert mould emergencies?",
      answer: "We provide same-day response for urgent mould situations in Mont Albert. Our local Melbourne team can typically reach Mont Albert properties within 2-3 hours of your call during business hours. We understand that elevated properties may have unique drainage challenges requiring prompt professional attention."
    },
    {
      question: "Do you provide ongoing mould prevention advice for Mont Albert properties?",
      answer: "Yes, we provide comprehensive prevention strategies tailored to Mont Albert's specific conditions including elevated positioning, heritage construction considerations, and established garden settings. We offer ongoing support to help maintain healthy indoor environments and protect property investments long-term."
    }
  ];

  const serviceAreas = [
    "Hamilton Street", "Mont Albert Road", "Elgar Road", "Whitehorse Road",
    "Surrey Hills Border", "Box Hill Border", "Camberwell Border", "Burke Road",
    "Mont Albert Station Precinct", "Mont Albert Primary School Area", "Surrey Gardens", "Whitehorse Shopping"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Components */}
      <LocationPageSEO
        location={location}
        service="Professional Mould Inspection & Removal"
        description={montAlbertMetaDescription}
      />

      <EnhancedSchemaMarkup
        businessName="Mould & Restoration Co."
        location={location}
        address="Mont Albert, Melbourne VIC"
        phone="1800 954 117"
        email="admin@mouldandrestoration.com.au"
        services={["Mould Inspection", "Mould Removal", "Moisture Detection", "Air Quality Testing"]}
        serviceArea="Mont Albert Melbourne"
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
                IICRC-certified mould inspection and removal specialists serving Mont Albert's elevated residential community. From distinguished heritage homes to modern family residences, we provide professional mould solutions tailored to this prestigious Melbourne suburb's unique topographical advantages and architectural heritage.
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
                src="/images/mould-inspection-mont-albert-hero.jpg"
                alt="Professional mould inspection Mont Albert Melbourne IICRC certified technician elevated heritage property assessment"
                location={location}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success/100 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available Now in Mont Albert</span>
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
              Local Mont Albert Mould Expertise
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our specialised understanding of Mont Albert's elevated topography, heritage architecture, and established residential patterns ensures effective mould solutions tailored to your specific property and unique position within this distinguished Melbourne suburb.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localFactors.map((factor, index) => (
              <Card key={index} className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
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
              Mont Albert Property Types We Service
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              From elevated heritage homes to modern family residences, our IICRC-certified team provides specialised mould solutions for every property type in Mont Albert's distinguished residential landscape.
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
              Specialised Mould Services for Mont Albert
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our comprehensive range of professional mould services addresses the specific opportunities and challenges of Mont Albert properties, from elevated positioning advantages to heritage preservation requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {montAlbertServices.map((service, index) => (
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

      {/* Why Choose Us for Mont Albert */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Why Choose Us for Mont Albert Mould Solutions
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our heritage expertise, elevated property specialisation, and family-focused approach make us the trusted choice for Mont Albert property owners seeking effective mould solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">IICRC Certified Professionals</h3>
              <p className="text-professional">
                Our technicians hold industry-leading IICRC certifications with specialised training in heritage construction and elevated property assessment techniques.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Heritage & Elevation Specialists</h3>
              <p className="text-professional">
                Deep understanding of heritage property preservation and elevated positioning benefits with topographical assessment expertise for comprehensive moisture management.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Community-Focused Service</h3>
              <p className="text-professional">
                Local expertise with family-friendly service approaches that respect busy household schedules and provide educational support for long-term property protection.
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
              What Mont Albert Customers Say
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Read testimonials from satisfied Mont Albert property owners who have experienced our professional mould inspection and remediation services.
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
              Our Mont Albert Mould Inspection Process
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our systematic approach ensures thorough assessment and effective treatment of mould issues in your Mont Albert property.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">1</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Elevation Assessment</h3>
              <p className="text-professional">Comprehensive evaluation considering elevated positioning benefits and topographical moisture patterns using advanced detection equipment.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">2</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Heritage Analysis</h3>
              <p className="text-professional">Detailed testing with special consideration for heritage construction materials and architectural preservation requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">3</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Customised Solutions</h3>
              <p className="text-professional">Tailored remediation strategy appropriate for your property's elevation advantages and heritage characteristics.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">4</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Prevention Excellence</h3>
              <p className="text-professional">Comprehensive guidance on maintaining healthy environments while leveraging elevation benefits for long-term protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mould Prevention Tips */}
      <section className="py-16 bg-columbia">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Mould Prevention Tips for Mont Albert Properties
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Protect your Mont Albert property from mould with these expert prevention strategies tailored to elevated positioning, heritage construction, and established garden settings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Wind className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold text-charcoal">Elevation Advantages</h3>
              </div>
              <p className="text-professional">
                Utilise Mont Albert's elevated positioning for natural ventilation benefits. Elevated properties often have excellent cross-ventilation opportunities that should be maximised for moisture control.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Thermometer className="h-8 w-8 text-success" />
                <h3 className="text-lg font-bold text-charcoal">Climate Management</h3>
              </div>
              <p className="text-professional">
                Maintain consistent indoor temperatures to prevent condensation, particularly in heritage properties that may have variable insulation standards across different construction periods.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="h-8 w-8 text-teal-600" />
                <h3 className="text-lg font-bold text-charcoal">Drainage Optimisation</h3>
              </div>
              <p className="text-professional">
                Leverage elevated positioning for effective drainage while monitoring slope-related moisture patterns around foundations and landscaped areas.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-8 w-8 text-orange-600" />
                <h3 className="text-lg font-bold text-charcoal">Garden Integration</h3>
              </div>
              <p className="text-professional">
                Monitor how established gardens and mature trees affect property drainage and moisture levels. Ensure landscape irrigation doesn't compromise building moisture management.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-8 w-8 text-purple-600" />
                <h3 className="text-lg font-bold text-charcoal">Heritage Maintenance</h3>
              </div>
              <p className="text-professional">
                Use heritage-appropriate maintenance techniques for character properties that preserve architectural features while improving moisture resistance and ventilation efficiency.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-red-600" />
                <h3 className="text-lg font-bold text-charcoal">Professional Monitoring</h3>
              </div>
              <p className="text-professional">
                Schedule regular professional inspections to maintain the advantages of elevated positioning and ensure heritage elements remain protected from moisture damage.
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
              Mont Albert Areas We Service
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              We provide comprehensive mould inspection and removal services throughout Mont Albert and surrounding elevated areas.
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
              Frequently Asked Questions - Mont Albert Mould Services
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Get answers to common questions about our professional mould services for Mont Albert properties.
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
              Get Professional Mould Inspection in Mont Albert
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Contact our IICRC-certified team for expert mould assessment and removal services. We're available 7 days a week to help protect your Mont Albert property.
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
                      <div className="text-professional">Mont Albert & All Melbourne</div>
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
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Mont Albert Service?</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-columbia0 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Elevation & Heritage Expertise</h4>
                    <p className="text-blue-100">
                      Specialised knowledge of elevated property advantages, heritage construction preservation, and topographical moisture management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-columbia0 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Family-Focused Approach</h4>
                    <p className="text-blue-100">
                      Flexible scheduling and family-safe treatment methods that accommodate busy household routines in this established community.
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
                      Fully certified professionals using advanced techniques for comprehensive elevated property mould solutions.
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

export default MontAlbert;