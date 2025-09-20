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

export const SouthWharf = () => {
  const location = "South Wharf";
  const southWharfMetaDescription = getSuburbMetaDescription('south-wharf');

  const propertyTypes = [
    {
      type: "Luxury High-Rise Apartments",
      description: "Our IICRC-certified technicians specialise in mould management for South Wharf's premium high-rise residential towers. These luxury developments require sophisticated approaches to moisture control, given their height, modern construction methods, and proximity to the Yarra River. We address unique challenges including pressure differentials, advanced HVAC systems, and waterfront humidity exposure.",
      image: "/images/luxury-highrise-apartments-south-wharf.jpg",
      alt: "Professional mould inspection luxury high-rise apartment South Wharf Melbourne premium residential tower assessment"
    },
    {
      type: "Waterfront Commercial Buildings",
      description: "South Wharf's prestigious commercial precinct demands immediate, professional mould services to maintain business operations. Our team understands the critical nature of maintaining air quality standards in office environments, conference facilities, and corporate headquarters located in this premier business district.",
      image: "/images/waterfront-commercial-south-wharf.jpg",
      alt: "Commercial mould removal South Wharf Melbourne waterfront office building business district inspection"
    },
    {
      type: "Hotel and Hospitality Venues",
      description: "The hospitality sector in South Wharf requires rapid response and discrete mould solutions to protect guest experiences and business reputation. Our certified professionals provide comprehensive mould assessment and remediation for hotels, conference centres, and event venues with minimal operational disruption.",
      image: "/images/hotel-hospitality-south-wharf.jpg",
      alt: "Hotel mould inspection South Wharf Melbourne hospitality venue conference centre professional assessment"
    },
    {
      type: "Mixed-Use Developments",
      description: "South Wharf's innovative mixed-use buildings combining residential, commercial, and retail spaces present complex mould management challenges. Our team coordinates multi-tenant solutions that address different usage patterns, shared ventilation systems, and varying moisture loads across different building zones.",
      image: "/images/mixed-use-developments-south-wharf.jpg",
      alt: "Mixed-use building mould removal South Wharf Melbourne residential commercial retail integrated development"
    }
  ];

  const localFactors = [
    {
      factor: "Yarra River Proximity",
      impact: "Direct waterfront location creates elevated humidity levels and moisture exposure that can significantly impact indoor air quality in high-rise buildings.",
      solution: "Our advanced moisture detection systems specifically address waterfront environmental challenges."
    },
    {
      factor: "High-Rise Wind Patterns",
      impact: "Tall buildings experience unique air pressure and moisture dynamics that can drive humidity into building envelopes and create condensation issues.",
      solution: "We employ specialised high-rise assessment techniques and pressure management strategies."
    },
    {
      factor: "Modern Construction Complexity",
      impact: "Contemporary building systems including advanced HVAC, curtain walls, and sealed environments require sophisticated mould prevention approaches.",
      solution: "Our team understands modern building science and mechanical system interactions."
    },
    {
      factor: "Mixed-Use Environment",
      impact: "Combination of residential, commercial, and hospitality uses creates varied moisture loads and air quality requirements within single developments.",
      solution: "We develop customised solutions for each building zone and usage type."
    }
  ];

  const southWharfServices = [
    {
      title: "High-Rise Mould Assessment",
      description: "Specialised mould inspection services for South Wharf's luxury tower developments. Our IICRC-certified technicians use advanced equipment designed for high-rise environments, including pressure-differential testing and vertical moisture mapping specific to waterfront tower buildings.",
      features: [
        "Pressure-differential moisture analysis",
        "Vertical building envelope assessment",
        "Advanced HVAC system evaluation",
        "Waterfront humidity impact studies"
      ]
    },
    {
      title: "Commercial Rapid Response",
      description: "Immediate mould response services for South Wharf's premium business district. We understand the critical importance of maintaining professional environments and provide 24/7 emergency response to protect business operations and corporate reputations.",
      features: [
        "24/7 emergency response availability",
        "Business continuity planning",
        "Executive briefing reports",
        "Minimal operational disruption protocols"
      ]
    },
    {
      title: "Hospitality Mould Solutions",
      description: "Discrete and efficient mould management for South Wharf's hotels and event venues. Our team provides specialised services that protect guest experiences while ensuring comprehensive mould remediation meets hospitality industry standards.",
      features: [
        "Guest experience protection protocols",
        "After-hours service scheduling",
        "Hospitality industry compliance",
        "Reputation management support"
      ]
    },
    {
      title: "Waterfront Environmental Management",
      description: "Comprehensive moisture and mould prevention strategies designed specifically for South Wharf's unique waterfront location. We address the complex environmental factors affecting buildings adjacent to the Yarra River and Melbourne's harbour precinct.",
      features: [
        "Waterfront climate analysis",
        "River humidity management",
        "Tidal influence assessment",
        "Coastal weather impact planning"
      ]
    }
  ];

  const testimonials = [
    {
      name: "James Wilson",
      property: "Residential Tower, Southbank Boulevard",
      testimonial: "Outstanding professional service for our luxury apartment. The team understood the unique challenges of waterfront living and provided solutions that have kept our home mould-free. Highly recommended for South Wharf residents.",
      rating: 5
    },
    {
      name: "Maria Santos",
      property: "Corporate Office, South Wharf",
      testimonial: "Excellent response time and minimal disruption to our business operations. The team worked around our schedule and delivered comprehensive mould solutions for our waterfront office building.",
      rating: 5
    },
    {
      name: "Robert Chen",
      property: "Mixed-Use Development, Convention Centre Place",
      testimonial: "Professional coordination across our building's residential and commercial areas. The team managed the complexity of different building zones expertly and kept all tenants informed throughout the process.",
      rating: 5
    }
  ];

  const faqData = [
    {
      question: "What makes South Wharf properties particularly susceptible to mould?",
      answer: "South Wharf's direct proximity to the Yarra River creates elevated humidity levels, especially during certain weather conditions. The combination of waterfront location, high-rise construction, and modern sealed building environments can create unique moisture management challenges that require specialised professional assessment."
    },
    {
      question: "How do you handle mould issues in South Wharf's high-rise buildings?",
      answer: "We use specialised high-rise assessment techniques including pressure-differential testing, vertical moisture mapping, and advanced HVAC system evaluation. Our IICRC-certified technicians understand the unique air dynamics and moisture patterns in tall waterfront buildings."
    },
    {
      question: "Can you provide emergency mould services for South Wharf businesses?",
      answer: "Yes, we offer 24/7 emergency response for South Wharf's commercial and hospitality sector. We understand the critical importance of maintaining business operations and provide rapid response services designed to minimise disruption to your business activities."
    },
    {
      question: "What's your approach to mould prevention in South Wharf's luxury developments?",
      answer: "We develop comprehensive prevention strategies that address South Wharf's unique waterfront environment. This includes humidity management systems, building envelope optimisation, and ongoing monitoring programs designed for luxury residential and commercial properties."
    },
    {
      question: "Do you work with building management and strata companies in South Wharf?",
      answer: "Absolutely. We have extensive experience working with building management, strata committees, and facility managers in South Wharf's complex high-rise developments. We provide comprehensive reporting and coordinate with all stakeholders to ensure effective mould management across entire buildings."
    }
  ];

  const serviceAreas = [
    "Southbank Boulevard", "Convention Centre Place", "South Wharf Promenade", "Clarendon Street",
    "City Road", "Queensbridge Street", "Kavanagh Street", "Whiteman Street",
    "DFO South Wharf", "Melbourne Convention Centre", "Crown Entertainment Complex", "Yarra River Precinct"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Components */}
      <LocationPageSEO
        location={location}
        service="Professional Mould Inspection & Removal"
        description={southWharfMetaDescription}
      />

      <EnhancedSchemaMarkup
        businessName="Mould & Restoration Co."
        location={location}
        address="South Wharf, Melbourne VIC"
        phone="1800 954 117"
        email="admin@mouldandrestoration.com.au"
        services={["Mould Inspection", "Mould Removal", "Moisture Detection", "Air Quality Testing"]}
        serviceArea="South Wharf Melbourne"
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
                IICRC-certified mould inspection and removal specialists serving South Wharf's premium waterfront developments. From luxury high-rise apartments to prestigious commercial buildings, we provide professional mould solutions for Melbourne's premier business and residential district.
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
                  <div className="text-sm text-professional">Emergency Response</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <LocationHeroImage
                src="/images/mould-inspection-south-wharf-hero.jpg"
                alt="Professional mould inspection South Wharf Melbourne IICRC certified technician luxury waterfront property assessment"
                location={location}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success/100 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available Now in South Wharf</span>
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
              Local South Wharf Mould Expertise
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our specialised understanding of South Wharf's unique waterfront environment, high-rise architecture, and premium development standards ensures effective mould solutions tailored to this prestigious Melbourne precinct.
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
              South Wharf Property Types We Service
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              From luxury high-rise apartments to prestigious commercial buildings, our IICRC-certified team provides specialised mould solutions for every property type in South Wharf's premium waterfront development landscape.
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
              Specialised Mould Services for South Wharf
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our comprehensive range of professional mould services addresses the specific challenges faced by South Wharf properties, from waterfront humidity effects to high-rise building dynamics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {southWharfServices.map((service, index) => (
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

      {/* Why Choose Us for South Wharf */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Why Choose Us for South Wharf Mould Solutions
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our expertise in luxury developments, commercial buildings, and waterfront environments makes us the trusted choice for South Wharf property owners seeking premium mould solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">IICRC Certified Professionals</h3>
              <p className="text-professional">
                Our technicians hold industry-leading IICRC certifications, ensuring the highest standards of mould inspection and remediation for your premium South Wharf property.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">High-Rise Specialists</h3>
              <p className="text-professional">
                Specialised expertise in luxury high-rise and waterfront developments, understanding the unique challenges of premium vertical living environments.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">24/7 Emergency Response</h3>
              <p className="text-professional">
                Round-the-clock availability for urgent mould situations, protecting your business operations and luxury lifestyle investments.
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
              What South Wharf Customers Say
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Read testimonials from satisfied South Wharf property owners who have experienced our professional mould inspection and remediation services.
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
              Our South Wharf Mould Inspection Process
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our systematic approach ensures thorough assessment and effective treatment of mould issues in your South Wharf property.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">1</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Waterfront Assessment</h3>
              <p className="text-professional">Comprehensive evaluation of waterfront-specific moisture challenges and building envelope performance.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">2</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">High-Rise Analysis</h3>
              <p className="text-professional">Specialised testing for vertical building dynamics, pressure differentials, and HVAC system interactions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">3</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Premium Solutions</h3>
              <p className="text-professional">Customised remediation strategies appropriate for luxury properties and commercial environments.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">4</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Ongoing Protection</h3>
              <p className="text-professional">Comprehensive prevention strategies and monitoring for waterfront property protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mould Prevention Tips */}
      <section className="py-16 bg-columbia">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Mould Prevention Tips for South Wharf Properties
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Protect your South Wharf property from mould with these expert prevention strategies tailored to waterfront high-rise and commercial building environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Wind className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold text-charcoal">HVAC Optimisation</h3>
              </div>
              <p className="text-professional">
                Ensure your high-rise HVAC system effectively manages humidity and air circulation. Regular maintenance and filter replacement are crucial for waterfront properties.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Thermometer className="h-8 w-8 text-success" />
                <h3 className="text-lg font-bold text-charcoal">Climate Control</h3>
              </div>
              <p className="text-professional">
                Maintain consistent temperature and humidity levels in luxury apartments and commercial spaces to prevent condensation and mould growth.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="h-8 w-8 text-teal-600" />
                <h3 className="text-lg font-bold text-charcoal">Waterfront Moisture</h3>
              </div>
              <p className="text-professional">
                Monitor and control moisture sources specific to waterfront locations including river humidity, weather seal integrity, and building envelope performance.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-8 w-8 text-orange-600" />
                <h3 className="text-lg font-bold text-charcoal">Early Detection</h3>
              </div>
              <p className="text-professional">
                Regular inspection of common problem areas in high-rise buildings including bathrooms, laundries, and areas near mechanical systems.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-8 w-8 text-purple-600" />
                <h3 className="text-lg font-bold text-charcoal">Building Management</h3>
              </div>
              <p className="text-professional">
                Work with building management to address shared systems, common areas, and building-wide moisture management strategies.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-red-600" />
                <h3 className="text-lg font-bold text-charcoal">Professional Monitoring</h3>
              </div>
              <p className="text-professional">
                Schedule regular professional inspections, especially for luxury properties and commercial spaces where air quality is critical.
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
              South Wharf Areas We Service
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              We provide comprehensive mould inspection and removal services throughout South Wharf and surrounding waterfront areas.
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
              Frequently Asked Questions - South Wharf Mould Services
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Get answers to common questions about our professional mould services for South Wharf properties.
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
              Get Professional Mould Inspection in South Wharf
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Contact our IICRC-certified team for expert mould assessment and removal services. We're available 24/7 to help protect your premium South Wharf property.
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
                      <div className="font-semibold">24/7 Emergency Service</div>
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
                      <div className="text-professional">South Wharf & All Melbourne</div>
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
              <h3 className="text-2xl font-bold mb-6">Why Choose Our South Wharf Service?</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-columbia0 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Luxury Property Expertise</h4>
                    <p className="text-blue-100">
                      Specialised knowledge of high-rise buildings, waterfront environments, and premium development mould challenges.
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
                      Round-the-clock availability for urgent mould situations in commercial and residential properties.
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
                      Fully certified professionals using advanced techniques for comprehensive waterfront mould solutions.
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

export default SouthWharf;