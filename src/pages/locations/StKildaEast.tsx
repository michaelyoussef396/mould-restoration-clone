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

export const StKildaEast = () => {
  const location = "St Kilda East";
  const stKildaEastMetaDescription = getSuburbMetaDescription('st-kilda-east');

  const propertyTypes = [
    {
      type: "Federation and Victorian Homes",
      description: "Our IICRC-certified technicians understand the unique challenges of St Kilda East's historic Federation and Victorian properties. These heritage homes often feature original timber construction, decorative plasterwork, and period features that require specialised mould treatment approaches. We protect architectural heritage while ensuring thorough mould remediation.",
      image: "/images/federation-victorian-homes-st-kilda-east.jpg",
      alt: "IICRC certified mould inspection Federation Victorian home St Kilda East Melbourne heritage property restoration"
    },
    {
      type: "Art Deco and Interwar Apartments",
      description: "St Kilda East's collection of Art Deco and interwar apartment buildings presents unique mould challenges. Our certified professionals address common issues in these properties including ventilation problems in original layouts, moisture penetration through period windows, and mould growth in shared wall cavities between units.",
      image: "/images/art-deco-apartments-st-kilda-east.jpg",
      alt: "Professional mould removal Art Deco apartment St Kilda East Melbourne interwar building inspection"
    },
    {
      type: "Modern Townhouses and Units",
      description: "Contemporary developments in St Kilda East benefit from our advanced mould detection and removal techniques. We specialise in addressing modern construction challenges including inadequate ventilation in energy-efficient buildings, moisture issues around windows and sliding doors, and preventing mould in shared wall systems.",
      image: "/images/modern-townhouses-st-kilda-east.jpg",
      alt: "Contemporary townhouse mould inspection St Kilda East Melbourne modern unit building assessment"
    },
    {
      type: "Commercial and Retail Properties",
      description: "St Kilda East's Balaclava Road and Glen Eira Road commercial precinct properties require specialised commercial mould services. Our team understands the importance of minimal business disruption while ensuring thorough mould remediation for shops, cafes, offices, and mixed-use developments in this vibrant commercial area.",
      image: "/images/commercial-retail-st-kilda-east.jpg",
      alt: "Commercial mould removal St Kilda East Melbourne retail property Balaclava Road Glen Eira Road inspection"
    }
  ];

  const localFactors = [
    {
      factor: "Bayside Coastal Proximity",
      impact: "St Kilda East's location near Port Phillip Bay creates elevated humidity levels that can promote mould growth, particularly in properties with poor ventilation.",
      solution: "Our moisture control strategies specifically address coastal humidity challenges."
    },
    {
      factor: "Heritage Building Characteristics",
      impact: "Many Federation and Victorian homes feature original construction materials and methods that can be vulnerable to moisture penetration and mould development.",
      solution: "We use heritage-appropriate treatment methods that preserve architectural integrity."
    },
    {
      factor: "Mixed Development Density",
      impact: "The combination of period homes, apartment buildings, and modern developments creates varied mould risk profiles across different property types.",
      solution: "Our tailored approach addresses the specific challenges of each property style."
    },
    {
      factor: "Transport Corridor Effects",
      impact: "Proximity to major roads and public transport can contribute to air quality variations that may affect indoor environmental conditions.",
      solution: "We assess and address how external factors influence internal mould risks."
    }
  ];

  const stKildaEastServices = [
    {
      title: "Heritage Property Mould Assessment",
      description: "Specialised mould inspection services for St Kilda East's Federation, Victorian, and Art Deco properties. Our IICRC-certified technicians use advanced detection methods that protect heritage features while identifying mould risks in period construction.",
      features: [
        "Non-invasive heritage-safe inspection techniques",
        "Period construction mould risk assessment",
        "Architectural feature protection protocols",
        "Historical building moisture analysis"
      ]
    },
    {
      title: "Coastal Climate Mould Prevention",
      description: "Comprehensive mould prevention strategies designed for St Kilda East's bayside location. We address the specific challenges of coastal humidity and salt air exposure that can contribute to mould development in residential and commercial properties.",
      features: [
        "Humidity management system design",
        "Coastal air circulation optimisation",
        "Salt air corrosion prevention",
        "Moisture barrier enhancement"
      ]
    },
    {
      title: "Multi-Unit Building Mould Solutions",
      description: "Specialised services for St Kilda East's apartment buildings and unit complexes. Our team manages mould issues that can affect multiple units, common areas, and building infrastructure with minimal disruption to residents.",
      features: [
        "Multi-unit coordination protocols",
        "Common area mould assessment",
        "Shared ventilation system evaluation",
        "Strata-compliant remediation processes"
      ]
    },
    {
      title: "Commercial Property Mould Management",
      description: "Professional mould services for St Kilda East's Balaclava Road and Glen Eira Road commercial properties. We provide rapid response and flexible scheduling to minimise business disruption while ensuring thorough mould remediation.",
      features: [
        "After-hours service availability",
        "Business continuity planning",
        "Retail space rapid remediation",
        "Commercial air quality restoration"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      property: "Federation Home, Alma Road",
      testimonial: "Mould & Restoration Co provided exceptional service for our 1920s Federation home. They understood the heritage significance and used methods that preserved our original features while completely eliminating the mould problem.",
      rating: 5
    },
    {
      name: "David Martinez",
      property: "Art Deco Apartment, Balaclava Road",
      testimonial: "Professional and efficient service in our Art Deco building. The team coordinated perfectly with building management and other residents. No disruption to our daily routine.",
      rating: 5
    },
    {
      name: "Rebecca Thompson",
      property: "Modern Townhouse, Inkerman Street",
      testimonial: "Quick response and thorough work on our new townhouse. They identified ventilation issues we didn't know existed and provided solutions that prevent future problems.",
      rating: 5
    }
  ];

  const faqData = [
    {
      question: "What makes St Kilda East properties particularly susceptible to mould?",
      answer: "St Kilda East's proximity to Port Phillip Bay creates elevated humidity levels, especially during certain weather conditions. The suburb's mix of heritage properties with period construction materials and modern developments with different ventilation systems creates varied mould risk profiles. Our local expertise helps us address these specific environmental challenges."
    },
    {
      question: "How do you handle mould removal in St Kilda East's heritage properties?",
      answer: "We use heritage-appropriate treatment methods that preserve architectural integrity while ensuring thorough mould remediation. Our IICRC-certified technicians understand period construction materials and employ non-invasive techniques that protect decorative features, original timber work, and historical elements."
    },
    {
      question: "Can you service apartment buildings and units in St Kilda East?",
      answer: "Yes, we specialise in multi-unit building mould solutions. We coordinate with building management, strata committees, and residents to provide comprehensive mould assessment and remediation services with minimal disruption. Our team understands the complexities of shared building systems and common area responsibilities."
    },
    {
      question: "What's your response time for St Kilda East mould emergencies?",
      answer: "We provide same-day response for urgent mould situations in St Kilda East. Our local Melbourne team can typically reach St Kilda East properties within 2-3 hours of your call. We understand that mould problems require prompt attention, especially in the area's humid coastal environment."
    },
    {
      question: "Do you provide ongoing mould prevention advice for St Kilda East properties?",
      answer: "Absolutely. We provide comprehensive mould prevention strategies tailored to St Kilda East's coastal climate and property types. This includes humidity management recommendations, ventilation improvements, and seasonal maintenance advice to prevent mould recurrence in the bayside environment."
    }
  ];

  const serviceAreas = [
    "Alma Road", "Balaclava Road", "Chapel Street", "Inkerman Street",
    "Glen Eira Road", "Carlisle Street", "Orrong Road", "Dandenong Road",
    "St Kilda Junction", "Caulfield Junction", "Prahran East", "Windsor East"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Components */}
      <LocationPageSEO
        location={location}
        service="Professional Mould Inspection & Removal"
        description={stKildaEastMetaDescription}
      />

      <EnhancedSchemaMarkup
        businessName="Mould & Restoration Co."
        location={location}
        address="St Kilda East, Melbourne VIC"
        phone="1800 954 117"
        email="admin@mouldandrestoration.com.au"
        services={["Mould Inspection", "Mould Removal", "Moisture Detection", "Air Quality Testing"]}
        serviceArea="St Kilda East Melbourne"
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
                IICRC-certified mould inspection and removal specialists serving St Kilda East's diverse property landscape. From heritage Federation homes to modern apartments, we provide professional mould solutions tailored to your property's unique needs in this vibrant bayside suburb.
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
                src="/images/mould-inspection-st-kilda-east-hero.jpg"
                alt="Professional mould inspection St Kilda East Melbourne IICRC certified technician heritage property assessment"
                location={location}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success/100 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available Now in St Kilda East</span>
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
              Local St Kilda East Mould Expertise
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our deep understanding of St Kilda East's unique environmental factors, property types, and architectural heritage ensures effective mould solutions tailored to your specific location and building characteristics.
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
              St Kilda East Property Types We Service
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              From heritage Federation homes to contemporary apartments, our IICRC-certified team provides specialised mould solutions for every property type in St Kilda East's diverse architectural landscape.
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
              Specialised Mould Services for St Kilda East
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our comprehensive range of professional mould services addresses the specific challenges faced by St Kilda East properties, from coastal humidity effects to heritage building preservation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {stKildaEastServices.map((service, index) => (
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

      {/* Why Choose Us for St Kilda East */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Why Choose Us for St Kilda East Mould Solutions
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our local expertise, professional certifications, and commitment to heritage preservation make us the trusted choice for St Kilda East property owners seeking effective mould solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">IICRC Certified Professionals</h3>
              <p className="text-professional">
                Our technicians hold industry-leading IICRC certifications, ensuring the highest standards of mould inspection and remediation for your St Kilda East property.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Heritage Property Specialists</h3>
              <p className="text-professional">
                We understand the unique requirements of St Kilda East's Federation, Victorian, and Art Deco properties, providing heritage-appropriate mould solutions.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Coastal Climate Expertise</h3>
              <p className="text-professional">
                Our deep understanding of bayside environmental factors ensures effective long-term mould prevention strategies for coastal St Kilda East properties.
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
              What St Kilda East Customers Say
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Read testimonials from satisfied St Kilda East property owners who have experienced our professional mould inspection and remediation services.
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
              Our St Kilda East Mould Inspection Process
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our systematic approach ensures thorough assessment and effective treatment of mould issues in your St Kilda East property.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">1</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Initial Assessment</h3>
              <p className="text-professional">Comprehensive property evaluation and moisture detection using advanced equipment.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">2</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Detailed Testing</h3>
              <p className="text-professional">Air quality sampling and surface testing to identify mould types and concentrations.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">3</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Treatment Plan</h3>
              <p className="text-professional">Customised remediation strategy appropriate for your property type and heritage requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">4</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Prevention Advice</h3>
              <p className="text-professional">Comprehensive guidance on preventing future mould growth in the coastal environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mould Prevention Tips */}
      <section className="py-16 bg-columbia">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Mould Prevention Tips for St Kilda East Properties
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Protect your St Kilda East property from mould with these expert prevention strategies tailored to the local bayside climate and building characteristics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Wind className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold text-charcoal">Coastal Ventilation</h3>
              </div>
              <p className="text-professional">
                Ensure adequate cross-ventilation to manage the elevated humidity levels common near Port Phillip Bay. Open windows during dry periods and use exhaust fans in wet areas.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Thermometer className="h-8 w-8 text-success" />
                <h3 className="text-lg font-bold text-charcoal">Temperature Control</h3>
              </div>
              <p className="text-professional">
                Maintain consistent indoor temperatures to prevent condensation. Heritage properties may require specialised heating and cooling strategies to protect original features.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="h-8 w-8 text-teal-600" />
                <h3 className="text-lg font-bold text-charcoal">Moisture Management</h3>
              </div>
              <p className="text-professional">
                Monitor and control moisture sources including plumbing leaks, roof issues, and basement dampness. Pay special attention to period window seals and weatherproofing.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-8 w-8 text-orange-600" />
                <h3 className="text-lg font-bold text-charcoal">Early Detection</h3>
              </div>
              <p className="text-professional">
                Regular inspection of common problem areas including bathrooms, laundries, and basement areas. Look for signs of water damage, discolouration, or musty odours.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Home className="h-8 w-8 text-purple-600" />
                <h3 className="text-lg font-bold text-charcoal">Heritage Preservation</h3>
              </div>
              <p className="text-professional">
                Use appropriate maintenance techniques for Federation and Victorian properties that preserve architectural integrity while preventing moisture penetration.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-8 w-8 text-red-600" />
                <h3 className="text-lg font-bold text-charcoal">Professional Maintenance</h3>
              </div>
              <p className="text-professional">
                Schedule regular professional inspections, especially for older properties or those with previous mould issues. Prevention is more cost-effective than remediation.
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
              St Kilda East Areas We Service
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              We provide comprehensive mould inspection and removal services throughout St Kilda East and surrounding areas.
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
              Frequently Asked Questions - St Kilda East Mould Services
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Get answers to common questions about our professional mould services for St Kilda East properties.
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
              Get Professional Mould Inspection in St Kilda East
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Contact our IICRC-certified team for expert mould assessment and removal services. We're available 7 days a week to help protect your St Kilda East property.
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
                      <div className="text-professional">St Kilda East & All Melbourne</div>
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
              <h3 className="text-2xl font-bold mb-6">Why Choose Our St Kilda East Service?</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-columbia0 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Local Heritage Expertise</h4>
                    <p className="text-blue-100">
                      Specialised knowledge of St Kilda East's Federation, Victorian, and Art Deco properties with heritage-appropriate treatment methods.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-columbia0 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Coastal Climate Solutions</h4>
                    <p className="text-blue-100">
                      Expert understanding of bayside humidity challenges and effective long-term prevention strategies for coastal properties.
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
                      Fully certified professionals using industry-leading techniques and equipment for comprehensive mould solutions.
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

export default StKildaEast;