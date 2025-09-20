import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Shield, Award, Clock, CheckCircle, Star, MapPin } from 'lucide-react';
import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import servicesHero from '@/assets/services-hero-optimized.webp';
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
      image: officeDesign,
      link: '/services/complete-material-removal',
      emergency: false,
      startingPrice: 'From $800',
    },
    {
      title: 'Advanced Fogging Sanitisation',
      description: 'Penetrate hard-to-reach spaces with ULV fogging technology for comprehensive sanitisation.',
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
      {/* SEO Optimization for Services Page */}
      <SEOHead
        title="Professional Mould Removal Services Melbourne - IICRC Certified"
        description="Complete mould removal services Melbourne. Professional inspections, comprehensive removal, subfloor remediation & advanced fogging. Same-day service available. Call 1800 954 117."
        keywords="mould removal services melbourne, professional mould inspection melbourne, comprehensive mould removal, subfloor mould remediation, mould fogging services"
        canonicalUrl="https://mouldrestoration.com.au/services"
        ogType="website"
      />

      {/* Professional Service Bar */}
      <div className="bg-primary text-white py-2 px-4 text-center text-sm font-medium fixed top-0 left-0 right-0 z-[60] h-10">
        <div className="container mx-auto flex items-center justify-between">
          <span className="hidden sm:block text-xs sm:text-sm">Monday - Sunday: 7 AM - 7PM</span>
          <div className="flex items-center gap-1 sm:gap-2">
            <a href="tel:1800954117" className="font-bold hover:underline">1800 954 117</a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:admin@mouldandrestoration.com.au" className="hidden sm:inline hover:underline">admin@mouldandrestoration.com.au</a>
          </div>
          <span className="text-xs sm:text-sm">Melbourne, VIC 📍</span>
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
                <span className="text-columbia"> Melbourne Properties</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl">
                From same-day inspections to complete remediation, we protect your property and health with professional expertise.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button
                  variant="default"
                  size="lg"
                  className="text-lg px-8 py-4 h-auto bg-primary hover:bg-primary-600"
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
                <h3 className="text-xl font-bold text-charcoal mb-4 text-center">Why Choose Our Services?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <div>
                      <div className="font-semibold text-charcoal">Same-day Available</div>
                      <div className="text-orange-600 text-sm">Professional service</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-columbia rounded-lg">
                    <Award className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold text-charcoal">Professional Team</div>
                      <div className="text-primary text-sm">Industry standards</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                    <Shield className="h-5 w-5 text-success" />
                    <div>
                      <div className="font-semibold text-charcoal">Fully Insured</div>
                      <div className="text-success text-sm">Complete protection</div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Complete Mould Solutions Tailored to Your Needs
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Professional remediation services with quality results and complete satisfaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="relative">
                <Card className="service-card overflow-hidden group cursor-pointer h-full">
                  {service.badge && (
                    <div className="absolute top-4 right-4 z-10 bg-success text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {service.badge}
                    </div>
                  )}
                  
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={`${service.title} Melbourne - Professional IICRC certified mould restoration service`}
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
                        <div className="text-lg font-bold text-primary">Get Quote</div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    <ul className="text-sm text-professional space-y-1 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
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
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Our Universal 4-Step Process
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Consistent, proven methodology across all our services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">{step.title}</h3>
                <p className="text-professional">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-8 h-0.5 bg-columbia transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Professional Mould Services Across Melbourne
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving 144+ Melbourne suburbs with comprehensive mould solutions. Our IICRC-certified technicians
              provide professional inspection, removal, and remediation services throughout metropolitan Melbourne.
            </p>
          </div>

          {/* Service Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Inner Melbourne */}
            <Card className="p-6 border-2 border-primary">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Inner Melbourne
              </h3>
              <p className="text-professional mb-4">Premium services for heritage properties and luxury residences</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/melbourne-cbd" className="block text-primary hover:text-primary-600 font-medium">Melbourne CBD - Commercial & residential</a>
                <a href="/locations/south-yarra" className="block text-primary hover:text-primary-600 font-medium">South Yarra - Luxury apartments</a>
                <a href="/locations/richmond" className="block text-primary hover:text-primary-600 font-medium">Richmond - Heritage terraces</a>
                <a href="/locations/carlton" className="block text-primary hover:text-primary-600 font-medium">Carlton - Victorian properties</a>
                <a href="/locations/fitzroy" className="block text-primary hover:text-primary-600 font-medium">Fitzroy - Heritage conversions</a>
                <a href="/locations/collingwood" className="block text-primary hover:text-primary-600 font-medium">Collingwood - Industrial conversions</a>
              </div>
            </Card>

            {/* Eastern Suburbs */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-success" />
                Eastern Suburbs
              </h3>
              <p className="text-gray-600 mb-4">Specialised services for premium family homes and established properties</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/toorak" className="block text-primary hover:text-primary-600 font-medium">Toorak - Luxury mansions</a>
                <a href="/locations/armadale" className="block text-primary hover:text-primary-600 font-medium">Armadale - Heritage homes</a>
                <a href="/locations/malvern" className="block text-primary hover:text-primary-600 font-medium">Malvern - Period properties</a>
                <a href="/locations/camberwell" className="block text-primary hover:text-primary-600 font-medium">Camberwell - Federation homes</a>
                <a href="/locations/hawthorn" className="block text-primary hover:text-primary-600 font-medium">Hawthorn - Victorian terraces</a>
                <a href="/locations/kew" className="block text-primary hover:text-primary-600 font-medium">Kew - Family residences</a>
              </div>
            </Card>

            {/* Bayside Areas */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-600" />
                Bayside Melbourne
              </h3>
              <p className="text-gray-600 mb-4">Coastal property specialists handling salt air and humidity challenges</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/brighton" className="block text-primary hover:text-primary-600 font-medium">Brighton - Beachside homes</a>
                <a href="/locations/sandringham" className="block text-primary hover:text-primary-600 font-medium">Sandringham - Coastal properties</a>
                <a href="/locations/mentone" className="block text-primary hover:text-primary-600 font-medium">Mentone - Heritage beachside</a>
                <a href="/locations/mordialloc" className="block text-primary hover:text-primary-600 font-medium">Mordialloc - Waterfront homes</a>
                <a href="/locations/frankston" className="block text-primary hover:text-primary-600 font-medium">Frankston - Coastal developments</a>
                <a href="/locations/williamstown" className="block text-primary hover:text-primary-600 font-medium">Williamstown - Historic port</a>
              </div>
            </Card>

            {/* Northern Suburbs */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-teal-600" />
                Northern Melbourne
              </h3>
              <p className="text-gray-600 mb-4">Comprehensive services for diverse residential and commercial properties</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/preston" className="block text-primary hover:text-primary-600 font-medium">Preston - Modern developments</a>
                <a href="/locations/thornbury" className="block text-primary hover:text-primary-600 font-medium">Thornbury - Contemporary homes</a>
                <a href="/locations/northcote" className="block text-primary hover:text-primary-600 font-medium">Northcote - Mixed residential</a>
                <a href="/locations/brunswick" className="block text-primary hover:text-primary-600 font-medium">Brunswick - Commercial properties</a>
                <a href="/locations/coburg" className="block text-primary hover:text-primary-600 font-medium">Coburg - Family homes</a>
                <a href="/locations/heidelberg" className="block text-primary hover:text-primary-600 font-medium">Heidelberg - Established suburbs</a>
              </div>
            </Card>

            {/* Western Suburbs */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-orange-600" />
                Western Melbourne
              </h3>
              <p className="text-gray-600 mb-4">Industrial and residential expertise for diverse property types</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/footscray" className="block text-primary hover:text-primary-600 font-medium">Footscray - Industrial properties</a>
                <a href="/locations/yarraville" className="block text-primary hover:text-primary-600 font-medium">Yarraville - Heritage cottages</a>
                <a href="/locations/maribyrnong" className="block text-primary hover:text-primary-600 font-medium">Maribyrnong - Riverside homes</a>
                <a href="/locations/altona" className="block text-primary hover:text-primary-600 font-medium">Altona - Family residences</a>
                <a href="/locations/moonee-ponds" className="block text-primary hover:text-primary-600 font-medium">Moonee Ponds - Established areas</a>
                <a href="/locations/essendon" className="block text-primary hover:text-primary-600 font-medium">Essendon - Premium homes</a>
              </div>
            </Card>

            {/* South-East Corridor */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-indigo-600" />
                South-East Melbourne
              </h3>
              <p className="text-gray-600 mb-4">Growing corridors with modern estates and established communities</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/glen-waverley" className="block text-primary hover:text-primary-600 font-medium">Glen Waverley - Family estates</a>
                <a href="/locations/box-hill" className="block text-primary hover:text-primary-600 font-medium">Box Hill - Mixed development</a>
                <a href="/locations/clayton" className="block text-primary hover:text-primary-600 font-medium">Clayton - University precinct</a>
                <a href="/locations/dandenong" className="block text-primary hover:text-primary-600 font-medium">Dandenong - Industrial corridor</a>
                <a href="/locations/berwick" className="block text-primary hover:text-primary-600 font-medium">Berwick - New developments</a>
                <a href="/locations/oakleigh" className="block text-primary hover:text-primary-600 font-medium">Oakleigh - Traditional homes</a>
              </div>
            </Card>
          </div>

          {/* Service Coverage Stats */}
          <div className="bg-columbia rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">144+</div>
                <div className="text-professional">Melbourne Suburbs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5</div>
                <div className="text-gray-600">Service Specialties</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">7am-7pm</div>
                <div className="text-gray-600">Daily Availability</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-gray-600">Emergency Response</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-charcoal mb-4">Don't See Your Melbourne Suburb Listed?</h3>
            <p className="text-professional mb-6 max-w-2xl mx-auto">
              We service all Melbourne metropolitan areas. Contact us for immediate assistance
              and professional mould solutions in your local area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-600 text-white" asChild>
                <a href="tel:1800954117">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Professional Service
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/areas">
                  <MapPin className="h-5 w-5 mr-2" />
                  View All Service Areas
                </a>
              </Button>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              ABN: 47 683 089 652 | IICRC Certified | Professional Service 7am-7pm Every Day
            </div>
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