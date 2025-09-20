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

export const CaulfieldNorth = () => {
  const location = "Caulfield North";
  const caulfieldNorthMetaDescription = getSuburbMetaDescription('caulfield-north');

  const propertyTypes = [
    {
      type: "Prestige Period Homes",
      description: "Our IICRC-certified technicians specialise in mould management for Caulfield North's prestigious period homes. These distinctive properties, ranging from grand Edwardian mansions to elegant interwar residences, feature unique architectural elements and premium construction materials that require specialised mould treatment approaches. We preserve heritage value while ensuring comprehensive mould remediation.",
      image: "/images/prestige-period-homes-caulfield-north.jpg",
      alt: "Professional mould inspection prestige period home Caulfield North Melbourne heritage mansion assessment IICRC certified"
    },
    {
      type: "Luxury Modern Homes",
      description: "Caulfield North's contemporary luxury homes benefit from our advanced mould detection and removal techniques. These premium properties require sophisticated approaches to address high-end finishes, advanced building systems, and the expectations of discerning homeowners who demand excellence in property maintenance and indoor air quality.",
      image: "/images/luxury-modern-homes-caulfield-north.jpg",
      alt: "Luxury modern home mould removal Caulfield North Melbourne contemporary residential property inspection"
    },
    {
      type: "Executive Apartments",
      description: "The premium apartment buildings and luxury unit complexes throughout Caulfield North present unique mould challenges requiring discrete, professional service. Our certified professionals address the specific needs of high-end residential buildings while maintaining the privacy and lifestyle standards expected in this prestigious suburb.",
      image: "/images/executive-apartments-caulfield-north.jpg",
      alt: "Executive apartment mould inspection Caulfield North Melbourne luxury residential building assessment"
    },
    {
      type: "Commercial Properties",
      description: "Caulfield North's professional services and commercial properties require immediate, expert mould management to maintain business standards. Our team understands the importance of preserving professional environments and provides comprehensive mould solutions for offices, medical facilities, and service businesses in this prestigious business precinct.",
      image: "/images/commercial-properties-caulfield-north.jpg",
      alt: "Commercial mould removal Caulfield North Melbourne professional business property inspection"
    }
  ];

  const localFactors = [
    {
      factor: "Premium Property Standards",
      impact: "Caulfield North's high property values and prestigious reputation require mould solutions that meet the elevated maintenance standards expected in this premium Melbourne suburb.",
      solution: "We provide white-glove service standards that match the expectations of premium property ownership."
    },
    {
      factor: "Heritage Architecture Complexity",
      impact: "The suburb's collection of significant period homes features complex architectural elements, premium materials, and heritage significance that require specialised preservation approaches.",
      solution: "Our heritage-trained technicians use conservation-appropriate methods that protect architectural integrity."
    },
    {
      factor: "Advanced Building Systems",
      impact: "Modern luxury properties often feature sophisticated HVAC, smart home systems, and premium finishes that require careful consideration during mould remediation processes.",
      solution: "We coordinate with building systems to ensure comprehensive treatment without compromising advanced installations."
    },
    {
      factor: "Professional Privacy Requirements",
      impact: "High-profile residents and business owners require discrete, professional service that respects privacy while delivering excellent results.",
      solution: "We provide confidential service protocols and flexible scheduling to accommodate privacy requirements."
    }
  ];

  const caulfieldNorthServices = [
    {
      title: "Heritage Property Mould Conservation",
      description: "Specialised mould treatment for Caulfield North's significant heritage properties. Our IICRC-certified technicians use conservation-grade methods that preserve architectural heritage while providing comprehensive mould remediation. We work with heritage consultants when required to ensure compliance with conservation requirements.",
      features: [
        "Conservation-appropriate treatment methods",
        "Heritage significance preservation",
        "Architectural integrity protection",
        "Conservation consultant coordination"
      ]
    },
    {
      title: "Premium Property Mould Solutions",
      description: "White-glove mould services designed for Caulfield North's luxury homes and executive properties. We provide discrete, professional service that meets the elevated standards expected in this prestigious suburb, with premium materials and finishes protection protocols.",
      features: [
        "White-glove service standards",
        "Premium finishes protection",
        "Discrete professional approach",
        "Luxury property specialisation"
      ]
    },
    {
      title: "Executive Building Mould Management",
      description: "Comprehensive mould services for Caulfield North's premium apartment buildings and commercial properties. We coordinate with building management and provide executive-level reporting while ensuring minimal disruption to residents and business operations.",
      features: [
        "Executive-level communication",
        "Building management coordination",
        "Minimal disruption protocols",
        "Premium building specialisation"
      ]
    },
    {
      title: "Advanced System Integration",
      description: "Sophisticated mould solutions that integrate with modern building systems including smart home technology, advanced HVAC, and premium automation systems. We ensure mould treatment doesn't compromise the advanced systems found in Caulfield North's luxury properties.",
      features: [
        "Smart system compatibility",
        "Advanced HVAC integration",
        "Premium technology protection",
        "Modern building expertise"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Elizabeth Morrison",
      property: "Heritage Home, Kambrook Road",
      testimonial: "Exceptional service for our Edwardian home. The team demonstrated deep understanding of heritage construction and provided solutions that preserved our property's historical significance. Truly professional throughout.",
      rating: 5
    },
    {
      name: "Dr. James Chen",
      property: "Luxury Modern Home, Glen Eira Road",
      testimonial: "Outstanding attention to detail for our contemporary home. They protected our high-end finishes and coordinated perfectly with our smart home systems. The white-glove service exceeded expectations.",
      rating: 5
    },
    {
      name: "Margaret Thompson",
      property: "Executive Apartment, Caulfield Park",
      testimonial: "Discrete and professional service for our luxury apartment. The team worked seamlessly with building management and maintained the privacy standards we expect. Excellent results with no disruption.",
      rating: 5
    }
  ];

  const faqData = [
    {
      question: "What makes Caulfield North properties require specialised mould treatment?",
      answer: "Caulfield North's combination of significant heritage properties and luxury modern homes requires specialised approaches that respect architectural heritage, preserve premium finishes, and meet the elevated service standards expected in this prestigious suburb. Our team understands the unique requirements of both conservation-grade heritage treatment and luxury property maintenance."
    },
    {
      question: "How do you handle mould removal in Caulfield North's heritage properties?",
      answer: "We use conservation-appropriate treatment methods that preserve architectural heritage while ensuring thorough mould remediation. Our heritage-trained technicians understand period construction materials and employ techniques that protect decorative elements, original features, and heritage significance while addressing moisture issues effectively."
    },
    {
      question: "Can you provide discrete service for high-profile properties?",
      answer: "Absolutely. We understand the privacy requirements of Caulfield North residents and provide confidential service protocols including flexible scheduling, discrete vehicle branding options, and confidentiality agreements when required. Our white-glove approach ensures professional service that respects privacy expectations."
    },
    {
      question: "Do you work with luxury building management companies?",
      answer: "Yes, we have extensive experience working with premium building management companies and strata managers in Caulfield North. We provide executive-level communication, comprehensive reporting, and coordinate with building systems to ensure minimal disruption to residents while maintaining the service standards expected in luxury developments."
    },
    {
      question: "How do you protect premium finishes and advanced building systems?",
      answer: "We use specialised protection protocols for premium finishes including marble, hardwood, custom cabinetry, and high-end fixtures. Our team coordinates with smart home systems, advanced HVAC, and building automation to ensure mould treatment doesn't compromise these sophisticated installations while delivering comprehensive results."
    }
  ];

  const serviceAreas = [
    "Kambrook Road", "Glen Eira Road", "Booran Road", "Hawthorn Road",
    "Caulfield Park", "Caulfield Racecourse", "Monash University Precinct", "Glenhuntly Road",
    "Kooyong Road", "North Road", "Burke Road", "Carnegie Border"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Components */}
      <LocationPageSEO
        location={location}
        service="Professional Mould Inspection & Removal"
        description={caulfieldNorthMetaDescription}
      />

      <EnhancedSchemaMarkup
        businessName="Mould & Restoration Co."
        location={location}
        address="Caulfield North, Melbourne VIC"
        phone="1800 954 117"
        email="admin@mouldandrestoration.com.au"
        services={["Mould Inspection", "Mould Removal", "Moisture Detection", "Air Quality Testing"]}
        serviceArea="Caulfield North Melbourne"
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
                IICRC-certified mould inspection and removal specialists serving Caulfield North's prestigious residential community. From significant heritage properties to luxury modern homes, we provide white-glove mould solutions that meet the elevated standards expected in this distinguished Melbourne suburb.
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
                  <div className="text-2xl font-bold text-primary">Premium</div>
                  <div className="text-sm text-professional">Service</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <OptimizedImage
                src="/images/mould-inspection-caulfield-north-hero.jpg"
                alt="Professional mould inspection Caulfield North Melbourne IICRC certified technician heritage luxury property assessment"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success/100 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available Now in Caulfield North</span>
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
              Local Caulfield North Mould Expertise
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our premium service approach and deep understanding of Caulfield North's prestigious property landscape ensures mould solutions that meet the elevated standards expected in this distinguished Melbourne suburb.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localFactors.map((factor, index) => (
              <Card key={index} className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
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
              Caulfield North Property Types We Service
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              From prestigious heritage homes to luxury modern residences, our IICRC-certified team provides white-glove mould solutions for every property type in Caulfield North's distinguished residential landscape.
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
              Specialised Mould Services for Caulfield North
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our comprehensive range of premium mould services addresses the specific requirements of Caulfield North properties, from heritage conservation to luxury finishes protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caulfieldNorthServices.map((service, index) => (
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

      {/* Why Choose Us for Caulfield North */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Why Choose Us for Caulfield North Mould Solutions
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our heritage expertise, luxury property specialisation, and white-glove service approach make us the preferred choice for Caulfield North's discerning property owners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">IICRC Certified Professionals</h3>
              <p className="text-professional">
                Our technicians hold industry-leading IICRC certifications with additional heritage conservation training for prestigious property treatment.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Heritage Conservation Specialists</h3>
              <p className="text-professional">
                Deep expertise in heritage property preservation with conservation-appropriate methods that protect architectural significance and investment value.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">White-Glove Service Standards</h3>
              <p className="text-professional">
                Premium service approach with discrete protocols, flexible scheduling, and the attention to detail expected in Caulfield North's prestigious community.
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
              What Caulfield North Customers Say
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Read testimonials from satisfied Caulfield North property owners who have experienced our premium mould inspection and remediation services.
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
              Our Caulfield North Mould Inspection Process
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our premium inspection process ensures comprehensive assessment and elite treatment standards for your distinguished Caulfield North property.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">1</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Premium Assessment</h3>
              <p className="text-professional">Comprehensive property evaluation with white-glove service protocols and heritage consideration assessment.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">2</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Advanced Testing</h3>
              <p className="text-professional">Sophisticated air quality sampling and surface testing with premium finishes protection protocols.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">3</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Elite Solutions</h3>
              <p className="text-professional">Customised treatment strategy appropriate for heritage significance and luxury property requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">4</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Ongoing Excellence</h3>
              <p className="text-professional">Comprehensive prevention strategies and premium maintenance guidance for long-term protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mould Prevention Tips */}
      <section className="py-16 bg-columbia">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Mould Prevention Tips for Caulfield North Properties
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Protect your prestigious Caulfield North property with these expert prevention strategies tailored to heritage homes and luxury residences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Wind className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold text-charcoal">Heritage Ventilation</h3>
              </div>
              <p className="text-professional">
                Preserve original ventilation systems while ensuring adequate air circulation. Heritage properties benefit from sympathetic ventilation improvements that maintain architectural integrity.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Thermometer className="h-8 w-8 text-success" />
                <h3 className="text-lg font-bold text-charcoal">Climate Control</h3>
              </div>
              <p className="text-professional">
                Maintain consistent temperature and humidity levels using premium climate control systems that protect both comfort and valuable property finishes.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="h-8 w-8 text-teal-600" />
                <h3 className="text-lg font-bold text-charcoal">Premium Protection</h3>
              </div>
              <p className="text-professional">
                Monitor and protect premium finishes including marble, hardwood, and custom elements from moisture damage with professional-grade detection systems.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-8 w-8 text-orange-600" />
                <h3 className="text-lg font-bold text-charcoal">Early Detection</h3>
              </div>
              <p className="text-professional">
                Implement proactive monitoring systems in heritage homes and luxury properties to detect moisture issues before they affect valuable architectural elements.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-8 w-8 text-purple-600" />
                <h3 className="text-lg font-bold text-charcoal">Heritage Conservation</h3>
              </div>
              <p className="text-professional">
                Use conservation-appropriate maintenance techniques that preserve heritage value while providing modern moisture protection and prevention systems.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-red-600" />
                <h3 className="text-lg font-bold text-charcoal">Professional Maintenance</h3>
              </div>
              <p className="text-professional">
                Schedule regular professional inspections with heritage-qualified technicians to maintain investment value and prevent costly restoration requirements.
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
              Caulfield North Areas We Service
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              We provide comprehensive premium mould inspection and removal services throughout Caulfield North and surrounding prestigious areas.
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
              Frequently Asked Questions - Caulfield North Mould Services
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Get answers to common questions about our premium mould services for Caulfield North properties.
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
              Get Premium Mould Inspection in Caulfield North
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Contact our IICRC-certified team for white-glove mould assessment and removal services. We're available 7 days a week to protect your prestigious Caulfield North property.
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
                      <div className="font-semibold">Premium Service Line</div>
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
                      <div className="text-professional">Caulfield North & All Melbourne</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button size="lg" className="bg-primary hover:bg-primary-600 text-white px-8 py-4">
                    <a href="tel:1800954117" className="flex items-center">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now for Premium Service
                    </a>
                  </Button>
                </div>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Caulfield North Service?</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-columbia0 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Heritage & Luxury Expertise</h4>
                    <p className="text-blue-100">
                      Specialised knowledge of conservation-grade heritage treatment and luxury property protection with white-glove service standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-columbia0 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Discrete Professional Service</h4>
                    <p className="text-blue-100">
                      Confidential protocols, flexible scheduling, and privacy standards that respect the expectations of prestigious property ownership.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-columbia0 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">IICRC Certified Excellence</h4>
                    <p className="text-blue-100">
                      Premium certified professionals using conservation-appropriate techniques for comprehensive heritage and luxury property mould solutions.
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

export default CaulfieldNorth;