import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Shield, Award, Clock, CheckCircle, Star, MapPin } from 'lucide-react';
import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import servicesHero from '@/assets/services-hero.jpg';
import residentialInspection from '@/assets/residential-inspection.jpg';
import commercialRemoval from '@/assets/commercial-removal.jpg';
import architectureFogging from '@/assets/architecture-fogging.jpg';
import officeDesign from '@/assets/office-design.jpg';
import designConsultation from '@/assets/design-consultation.jpg';

export const Services = () => {
  const services = [
    {
      title: 'Professional Mould Inspections',
      description: 'Same-day inspections and air quality testing to identify problems before they escalate.',
      features: ['Thermal imaging detection', 'Air quality testing', 'Detailed written report'],
      image: residentialInspection,
      link: '/services/professional-mould-inspections',
      emergency: false,
      startingPrice: 'From $299',
      badge: 'Professional Assessment',
    },
    {
      title: 'Comprehensive Mould Removal',
      description: 'Professional mould remediation using advanced techniques for complete elimination.',
      features: ['Safe material removal', 'Professional containment', 'Health-focused approach'],
      image: commercialRemoval,
      link: '/services/comprehensive-mould-removal',
      emergency: false,
      startingPrice: 'Get Quote',
    },
    {
      title: 'Complete Material Removal',
      description: 'For severe mould infestations, complete removal of contaminated materials with safe disposal.',
      features: ['Safe material removal', 'Proper disposal', 'Structural assessment'],
      image: commercialRemoval,
      link: '/services/complete-material-removal',
      emergency: false,
      startingPrice: 'From $800',
    },
    {
      title: 'Advanced Fogging Sanitisation',
      description: 'Penetrate hard-to-reach spaces with ULV fogging technology for comprehensive sanitization.',
      features: ['ULV fogging technology', 'Hard-to-reach areas', 'Long-lasting protection'],
      image: architectureFogging,
      link: '/services/advanced-fogging-sanitisation',
      emergency: false,
      startingPrice: 'From $450',
    },
    {
      title: 'Subfloor Mould Remediation',
      description: 'Protect your property\'s foundation with thorough subfloor remediation and ventilation.',
      features: ['Foundation protection', 'Ventilation improvement', 'Moisture control'],
      image: designConsultation,
      link: '/services/subfloor-mould-remediation',
      emergency: false,
      startingPrice: 'From $650',
    },
  ];

  const processSteps = [
    { number: '1', title: 'Initial Assessment', description: 'Professional property evaluation and quote' },
    { number: '2', title: 'Service Planning', description: 'Customized remediation strategy' },
    { number: '3', title: 'Professional Treatment', description: 'Safe removal and restoration' },
    { number: '4', title: 'Quality Assurance', description: 'Final testing and documentation' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Professional Service Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium fixed top-0 left-0 right-0 z-[60] h-10">
        <div className="container mx-auto flex items-center justify-between">
          <span className="hidden sm:block">📞 Professional Mould Inspections - Same-day Service Available 7am-7pm</span>
          <span className="sm:hidden">Same-day Service Available</span>
          <a href="tel:1800954117" className="font-bold hover:underline flex items-center gap-1">
            <Phone className="h-4 w-4" />
            1800 954 117
          </a>
        </div>
      </div>

      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[106px]"
        style={{
          backgroundImage: `url(${servicesHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left: Main Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-8 lg:mb-4">
                <Breadcrumb 
                  items={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services', current: true },
                  ]} 
                />
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Professional Mould Solutions for 
                <span className="text-blue-300"> Melbourne Properties</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl">
                From same-day inspections to complete remediation, we protect your property and health with professional expertise.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button
                  variant="default"
                  size="lg"
                  className="text-lg px-8 py-4 h-auto bg-blue-600 hover:bg-blue-700"
                  asChild
                >
                  <a href="tel:1800954117">
                    Same-day Service - Call Now
                    <Phone className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="text-lg px-8 py-4 h-auto bg-white/10 text-white border-white/20 hover:bg-white/20"
                  asChild
                >
                  <a href="#services-grid">
                    View All Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-yellow-400">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current" />
                ))}
                <span className="text-white ml-2">5.0/5 ⭐ (50+ reviews)</span>
              </div>
            </div>
            
            {/* Right: Service Overview Card */}
            <div className="w-full lg:w-96">
              <Card className="p-6 bg-white/95 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Why Choose Our Services?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Same-day Available</div>
                      <div className="text-orange-600 text-sm">Professional service</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Award className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Professional Team</div>
                      <div className="text-blue-600 text-sm">Industry standards</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Shield className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Fully Insured</div>
                      <div className="text-green-600 text-sm">Complete protection</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-4" asChild>
                  <a href="/contact">Schedule Professional Assessment</a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Matrix */}
      <section id="services-grid" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Complete Mould Solutions Tailored to Your Needs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional remediation services with quality results and complete satisfaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="relative">
                <Card className="service-card overflow-hidden group cursor-pointer h-full">
                  {service.badge && (
                    <div className="absolute top-4 right-4 z-10 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {service.badge}
                    </div>
                  )}
                  
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-card-foreground">
                        {service.title}
                      </h3>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-600">Get Quote</div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    <ul className="text-sm text-gray-600 space-y-1 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1" asChild>
                        <a href={service.link}>Learn More</a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="/contact">Quote</a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Universal 4-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Consistent, proven methodology across all our services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-8 h-0.5 bg-blue-200 transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Coverage */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Serving All Melbourne Metro
            </h2>
            <p className="text-xl text-gray-600">Professional mold remediation across all Melbourne suburbs</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { area: 'CBD & Inner Melbourne', coverage: 'Full Coverage', popular: true },
              { area: 'Eastern Suburbs', coverage: 'Same Day', popular: true },
              { area: 'Northern Suburbs', coverage: 'Full Coverage', popular: false },
              { area: 'Western Suburbs', coverage: 'Same Day', popular: false },
              { area: 'Southern Suburbs', coverage: 'Full Coverage', popular: true },
              { area: 'Outer Melbourne', coverage: 'Next Day', popular: false },
            ].map((location, index) => (
              <Card key={index} className={`p-4 text-center ${location.popular ? 'border-blue-200 bg-blue-50' : ''}`}>
                <div className="flex items-center justify-center gap-1 mb-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">{location.area}</h3>
                </div>
                <div className="text-lg font-bold text-blue-600">{location.coverage}</div>
                <div className="text-sm text-gray-600">service available</div>
                {location.popular && (
                  <div className="mt-2 text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                    Popular Area
                  </div>
                )}
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <a href="/contact">
                Schedule Service in Your Area
                <MapPin className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};