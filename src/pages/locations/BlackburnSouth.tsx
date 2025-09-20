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
import {
  ServiceProcessImage,
  OptimizedImageGallery
} from '@/components/seo/EnhancedOptimizedImage';

// Import meta description helper
import { getSuburbMetaDescription } from '@/components/seo/MetaDescriptions';

export const BlackburnSouth = () => {
  const location = "Blackburn South";
  const blackburnSouthMetaDescription = getSuburbMetaDescription('blackburn-south');

  const propertyTypes = [
    {
      type: "Family Oriented Homes",
      description: "Our IICRC-certified technicians specialise in mould management for Blackburn South's diverse family housing stock. These well-maintained properties, ranging from comfortable post-war homes to modern family residences, require comprehensive mould solutions that accommodate busy family lifestyles while ensuring healthy indoor environments for children and adults alike.",
      image: "/images/family-homes-blackburn-south.jpg",
      alt: "Professional mould inspection family home Blackburn South Melbourne residential property assessment IICRC certified"
    },
    {
      type: "Modern Suburban Developments",
      description: "Blackburn South's contemporary housing developments benefit from our advanced mould detection and removal techniques. These newer properties require sophisticated approaches to address modern construction challenges, energy efficiency considerations, and the maintenance of healthy indoor air quality in well-designed family environments.",
      image: "/images/modern-suburban-blackburn-south.jpg",
      alt: "Modern suburban development mould removal Blackburn South Melbourne contemporary residential inspection"
    },
    {
      type: "Established Character Homes",
      description: "The established character properties throughout Blackburn South present unique mould challenges related to their construction era and renovation history. Our certified professionals address the specific needs of these properties while preserving their character features and ensuring comprehensive moisture management across different building materials.",
      image: "/images/character-homes-blackburn-south.jpg",
      alt: "Character home mould inspection Blackburn South Melbourne established residential property assessment"
    },
    {
      type: "Local Commercial Properties",
      description: "Blackburn South's local shopping centres and business properties require professional commercial mould services that maintain operational continuity. Our team understands the importance of preserving business environments while ensuring thorough mould remediation for retail, office, and service businesses in this community-focused commercial precinct.",
      image: "/images/commercial-blackburn-south.jpg",
      alt: "Commercial mould removal Blackburn South Melbourne business property retail shopping centre inspection"
    }
  ];

  const localFactors = [
    {
      factor: "Suburban Family Environment",
      impact: "Blackburn South's family-oriented community requires mould solutions that prioritise child and pet safety while maintaining healthy environments for active households.",
      solution: "Our family-safe treatment protocols ensure comprehensive mould management without disrupting daily family routines."
    },
    {
      factor: "Mixed Construction Ages",
      impact: "The suburb's combination of post-war homes, modern developments, and established properties creates varied mould risk profiles requiring different treatment approaches.",
      solution: "We tailor our assessment and treatment methods to each property's specific construction era and characteristics."
    },
    {
      factor: "Suburban Drainage Patterns",
      impact: "The area's suburban development patterns and local topography can affect drainage and moisture management, particularly during Melbourne's seasonal weather variations.",
      solution: "Our comprehensive assessment includes evaluation of local drainage conditions and their impact on property moisture levels."
    },
    {
      factor: "Community Living Considerations",
      impact: "Dense suburban living with close neighbours requires discrete, professional service that respects privacy while delivering effective mould solutions.",
      solution: "We provide considerate service protocols that maintain neighbourhood relations while ensuring thorough remediation."
    }
  ];

  const blackburnSouthServices = [
    {
      title: "Family Home Mould Solutions",
      description: "Comprehensive mould services designed specifically for Blackburn South's family-oriented community. Our IICRC-certified technicians use child and pet-safe methods while providing flexible scheduling that accommodates busy family lifestyles, school routines, and household activities.",
      features: [
        "Child and pet-safe treatment methods",
        "Family schedule accommodation",
        "Educational prevention programs",
        "Long-term family health focus"
      ]
    },
    {
      title: "Modern Home Moisture Management",
      description: "Specialised mould services for Blackburn South's contemporary housing developments. We address the unique challenges of modern construction including energy-efficient building envelopes, advanced ventilation systems, and the moisture control requirements of well-insulated family homes.",
      features: [
        "Modern construction expertise",
        "Energy efficiency preservation",
        "Advanced ventilation assessment",
        "Contemporary building system integration"
      ]
    },
    {
      title: "Character Property Preservation",
      description: "Professional mould treatment for Blackburn South's established character homes that preserves architectural features while ensuring comprehensive moisture management. Our approach respects the heritage value of older properties while addressing modern health and safety requirements.",
      features: [
        "Character feature protection",
        "Heritage-sensitive methods",
        "Mixed-era construction expertise",
        "Architectural integrity preservation"
      ]
    },
    {
      title: "Community Business Mould Services",
      description: "Reliable commercial mould services for Blackburn South's local businesses and shopping centres. We provide flexible scheduling and rapid response to ensure minimal disruption to operations while maintaining the healthy environments that customers and employees expect.",
      features: [
        "Business operation continuity",
        "Customer safety prioritisation",
        "Flexible commercial scheduling",
        "Community business focus"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      property: "Family Home, Canterbury Road",
      testimonial: "Excellent service for our family home. The team was considerate of our children's schedules and used safe methods throughout. They provided clear explanations and practical prevention advice that's easy to follow.",
      rating: 5
    },
    {
      name: "Michael Williams",
      property: "Modern Home, Blackburn Road",
      testimonial: "Professional approach to our newer home's moisture issues. They understood the modern construction challenges and provided solutions that work with our ventilation system. Very satisfied with the results.",
      rating: 5
    },
    {
      name: "Linda Chen",
      property: "Character Home, Forest Hill Chase",
      testimonial: "Outstanding work on our older home. The team respected the character features while thoroughly addressing the mould problem. Professional service with attention to preserving what makes our home special.",
      rating: 5
    }
  ];

  const faqData = [
    {
      question: "What makes Blackburn South properties particularly suitable for family-focused mould solutions?",
      answer: "Blackburn South is a family-oriented community with many households including children and pets. Our services are specifically designed with family safety as the priority, using child and pet-safe treatment methods, flexible scheduling around family routines, and providing education to help families maintain healthy indoor environments long-term."
    },
    {
      question: "How do you handle mould issues in Blackburn South's modern housing developments?",
      answer: "Modern homes in Blackburn South often feature energy-efficient construction and advanced ventilation systems. Our IICRC-certified technicians understand these contemporary building systems and provide mould solutions that work with, not against, modern construction features while ensuring optimal indoor air quality."
    },
    {
      question: "Can you service both residential and commercial properties in Blackburn South?",
      answer: "Absolutely. We provide comprehensive mould services for both residential family homes and local businesses including shopping centres and commercial properties. Our approach adapts to whether you need discrete residential service or flexible commercial scheduling to maintain business operations."
    },
    {
      question: "What's your response time for Blackburn South mould emergencies?",
      answer: "We provide same-day response for urgent mould situations in Blackburn South. Our local Melbourne team can typically reach Blackburn South properties within 2-3 hours of your call during business hours. We understand that family homes require prompt attention to maintain healthy environments."
    },
    {
      question: "Do you provide ongoing support for Blackburn South families?",
      answer: "Yes, we offer comprehensive ongoing support including prevention education, seasonal maintenance reminders, and follow-up consultations. Our family-focused approach includes teaching household members how to identify early warning signs and maintain optimal indoor environments for long-term health benefits."
    }
  ];

  const serviceAreas = [
    "Canterbury Road", "Blackburn Road", "Whitehorse Road", "Middleborough Road",
    "Forest Hill Chase", "Blackburn South Primary School Area", "Vermont South Border", "Nunawading Border",
    "Blackburn Station Precinct", "Local Shopping Centres", "Residential Streets", "Community Areas"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Components */}
      <LocationPageSEO
        location={location}
        service="Professional Mould Inspection & Removal"
        description={blackburnSouthMetaDescription}
      />

      <EnhancedSchemaMarkup
        businessName="Mould & Restoration Co."
        location={location}
        address="Blackburn South, Melbourne VIC"
        phone="1800 954 117"
        email="admin@mouldandrestoration.com.au"
        services={["Mould Inspection", "Mould Removal", "Moisture Detection", "Air Quality Testing"]}
        serviceArea="Blackburn South Melbourne"
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
                IICRC-certified mould inspection and removal specialists serving Blackburn South's family-oriented community. From modern family homes to established character properties, we provide professional mould solutions that prioritise family health and safety in this thriving Melbourne suburb.
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
                  <div className="text-2xl font-bold text-primary">Family</div>
                  <div className="text-sm text-professional">Safe</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <OptimizedImage
                src="/images/mould-inspection-blackburn-south-hero.jpg"
                alt="Professional mould inspection Blackburn South Melbourne IICRC certified technician family home assessment"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success/100 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available Now in Blackburn South</span>
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
              Local Blackburn South Mould Expertise
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our family-focused approach and understanding of Blackburn South's suburban residential patterns ensures effective mould solutions tailored to your family's needs and property characteristics within this thriving Melbourne community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localFactors.map((factor, index) => (
              <Card key={index} className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
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
              Blackburn South Property Types We Service
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              From family homes to commercial properties, our IICRC-certified team provides specialised mould solutions for every property type in Blackburn South's diverse suburban landscape.
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
              Specialised Mould Services for Blackburn South
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our comprehensive range of family-focused mould services addresses the specific needs of Blackburn South properties and their residents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blackburnSouthServices.map((service, index) => (
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

      {/* Why Choose Us for Blackburn South */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Why Choose Us for Blackburn South Mould Solutions
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our family-safe approach, flexible scheduling, and community focus make us the trusted choice for Blackburn South property owners seeking effective mould solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-columbia rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">IICRC Certified Professionals</h3>
              <p className="text-professional">
                Our technicians hold industry-leading IICRC certifications with additional training in family-safe treatment methods and child-friendly service approaches.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Family-Focused Service</h3>
              <p className="text-professional">
                Specialised approaches designed for families with children and pets, including flexible scheduling and safe treatment methods that protect household members.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Community Understanding</h3>
              <p className="text-professional">
                Deep knowledge of Blackburn South's housing types, suburban living patterns, and community expectations for professional service delivery.
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
              What Blackburn South Customers Say
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Read testimonials from satisfied Blackburn South property owners who have experienced our family-focused mould inspection and remediation services.
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
              Our Blackburn South Mould Inspection Process
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Our family-friendly process ensures thorough assessment and effective treatment while accommodating your household routine.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">1</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Family-Safe Assessment</h3>
              <p className="text-professional">Comprehensive property evaluation using family-safe methods and child-friendly scheduling arrangements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">2</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Detailed Testing</h3>
              <p className="text-professional">Air quality sampling and surface testing with minimal household disruption and clear explanations for families.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">3</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Safe Treatment</h3>
              <p className="text-professional">Child and pet-safe remediation strategy that works around family schedules and daily routines.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">4</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Family Education</h3>
              <p className="text-professional">Comprehensive guidance on maintaining healthy family environments and preventing future mould growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mould Prevention Tips */}
      <section className="py-16 bg-columbia">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Family-Safe Mould Prevention Tips for Blackburn South
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Protect your Blackburn South family home with these expert prevention strategies designed for busy households with children and pets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Wind className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold text-charcoal">Family-Safe Ventilation</h3>
              </div>
              <p className="text-professional">
                Ensure adequate ventilation in family areas while maintaining child safety. Use window locks and safety screens to maintain airflow without compromising security.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Thermometer className="h-8 w-8 text-success" />
                <h3 className="text-lg font-bold text-charcoal">Comfortable Climate</h3>
              </div>
              <p className="text-professional">
                Maintain consistent temperatures that keep families comfortable while preventing condensation. Modern homes benefit from programmable thermostats and efficient heating systems.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="h-8 w-8 text-teal-600" />
                <h3 className="text-lg font-bold text-charcoal">Household Moisture Control</h3>
              </div>
              <p className="text-professional">
                Monitor family activity moisture sources including bathrooms, laundries, and kitchen areas. Use exhaust fans and encourage good ventilation habits among household members.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-8 w-8 text-orange-600" />
                <h3 className="text-lg font-bold text-charcoal">Family Awareness</h3>
              </div>
              <p className="text-professional">
                Teach family members to identify signs of moisture problems early. Regular family inspections of common areas can catch issues before they become significant problems.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Home className="h-8 w-8 text-purple-600" />
                <h3 className="text-lg font-bold text-charcoal">Routine Maintenance</h3>
              </div>
              <p className="text-professional">
                Establish family-friendly maintenance routines that include checking for leaks, cleaning exhaust fans, and ensuring proper drainage around the home.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-red-600" />
                <h3 className="text-lg font-bold text-charcoal">Professional Support</h3>
              </div>
              <p className="text-professional">
                Schedule regular family home inspections to ensure ongoing protection. Professional monitoring provides peace of mind for busy families with health-conscious approaches.
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
              Blackburn South Areas We Service
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              We provide comprehensive family-safe mould inspection and removal services throughout Blackburn South and surrounding suburban areas.
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
              Frequently Asked Questions - Blackburn South Mould Services
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Get answers to common questions about our family-focused mould services for Blackburn South properties.
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
              Get Family-Safe Mould Inspection in Blackburn South
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Contact our IICRC-certified team for family-focused mould assessment and removal services. We're available 7 days a week to help protect your Blackburn South family home.
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
                      <div className="font-semibold">Family Service Line</div>
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
                      <div className="text-professional">Blackburn South & All Melbourne</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button size="lg" className="bg-primary hover:bg-primary-600 text-white px-8 py-4">
                    <a href="tel:1800954117" className="flex items-center">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now for Family-Safe Service
                    </a>
                  </Button>
                </div>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Blackburn South Service?</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-columbia0 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Family-Safe Expertise</h4>
                    <p className="text-blue-100">
                      Child and pet-safe treatment methods with flexible scheduling designed around family routines and household needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-columbia0 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Community Understanding</h4>
                    <p className="text-blue-100">
                      Deep knowledge of Blackburn South's family-oriented community and suburban living requirements for effective mould solutions.
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
                      Fully certified professionals using family-friendly techniques for comprehensive suburban home mould solutions.
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

export default BlackburnSouth;