import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Clock, CheckCircle, Star, AlertTriangle, Shield, Award } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';
import { ServicePageSEO } from '@/components/seo/SEOHead';
import { StrategicServiceLinks } from '@/components/seo/InternalLinking';
import { HeroOptimizedImage, ServiceOptimizedImage } from '@/components/OptimizedImage';
import materialRemovalHero from '@/assets/material-removal-hero-optimized.webp';
import wallRemovalProgress from '@/assets/wall-removal-progress.jpg';
import commercialRemovalWork from '@/assets/commercial-removal-work.jpg';

export const CompleteMaterialRemoval = () => {
  const otherServices = [
    { title: 'Professional Mould Inspections', link: '/services/professional-mould-inspections' },
    { title: 'Advanced Fogging Sanitisation', link: '/services/advanced-fogging-sanitisation' },
    { title: 'Comprehensive Mould Removal', link: '/services/comprehensive-mould-removal' },
    { title: 'Subfloor Mould Remediation', link: '/services/subfloor-mould-remediation' },
  ];

  const removalProcesses = [
    {
      step: 1,
      title: 'Professional Assessment',
      description: 'Rapid evaluation of material damage and contamination extent to determine removal scope.',
    },
    {
      step: 2,
      title: 'Professional Containment',
      description: 'Complete isolation of work areas to prevent cross-contamination during material removal.',
    },
    {
      step: 3,
      title: 'Safe Material Removal',
      description: 'IICRC-certified removal of plaster walls, insulation, ceilings, and affected materials.',
    },
    {
      step: 4,
      title: 'Structural Sanitisation',
      description: 'Deep sanitisation of exposed structural elements and surrounding areas.',
    },
    {
      step: 5,
      title: 'Quality Assurance',
      description: 'Final inspection and clearance testing to ensure complete contamination elimination.',
    }
  ];

  const testimonials = [
    {
      text: "Complete material removal saved our home. They removed all contaminated plaster and insulation - the difference was immediate. Professional team, no mess left behind.",
      name: "David Thompson",
      location: "Richmond",
      rating: 5,
    },
    {
      text: "Severe water damage led to extensive mould behind our walls. They removed everything safely and efficiently. House feels brand new.",
      name: "Amanda Wilson",
      location: "South Yarra",
      rating: 5,
    }
  ];

  return (
    <div className="min-h-screen bg-background">
            {/* SEO Optimization for CompleteMaterialRemoval */}
      <ServicePageSEO
        service="removal"
        title="Complete Material Removal Melbourne - Total Mould Elimination"
        description="Complete material removal Melbourne. Total mould elimination, structural restoration, comprehensive replacement. Professional Melbourne service. Call 1800 954 117."
        canonicalUrl="https://mouldrestoration.com.au/services/complete-material-removal"
      />

      {/* Professional Service Bar */}
      <div className="bg-primary text-white py-2 px-4 text-center text-sm font-medium sticky top-0 z-50">
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
      
      {/* Hero: Problem Identification */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${materialRemovalHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left: Problem Statement */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-8 lg:mb-4">
                <Breadcrumb 
                  items={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'Complete Material Removal', href: '/services/complete-material-removal', current: true },
                  ]} 
                />
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Extensive Mould Behind 
                <span className="text-red-300"> Walls & Ceilings?</span>
              </h1>
              
              <div className="bg-red-900/50 border border-red-500/50 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-100 font-medium mb-2">Hidden mould compromises structural integrity</p>
                    <p className="text-red-200 text-sm">Complete material removal eliminates contamination at the source.</p>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Our Complete Removal Solution
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                IICRC-certified material removal for severe contamination with full structural restoration.
              </p>
              
              {/* Professional Service CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 h-auto bg-primary hover:bg-primary-600 text-white"
                  asChild
                >
                  <a href="tel:1800954117">
                    Professional Removal - Call Now
                    <Phone className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="text-lg px-8 py-4 h-auto bg-white/10 text-white border-white/20 hover:bg-white/20"
                  asChild
                >
                  <a href="#booking-form">
                    Schedule Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-yellow-400">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current" />
                ))}
                <span className="text-white ml-2">4.9/5 from 280+ removals</span>
              </div>
            </div>
            
            {/* Right: Solution Preview */}
            <div className="w-full lg:w-96">
              <Card className="p-6 bg-white/95 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-charcoal mb-4 text-center">Complete Removal Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                    <Shield className="h-5 w-5 text-red-600" />
                    <div>
                      <div className="font-semibold text-charcoal">Safe Containment</div>
                      <div className="text-red-600 text-sm">Prevent contamination spread</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-columbia rounded-lg">
                    <Award className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold text-charcoal">IICRC Certified</div>
                      <div className="text-primary text-sm">Professional material removal</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <div>
                      <div className="font-semibold text-charcoal">Structural Restoration</div>
                      <div className="text-success text-sm">Complete rebuild preparation</div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-6 p-4 bg-columbia rounded-lg">
                  <div className="text-2xl font-bold text-primary">Custom Quote</div>
                  <div className="text-sm text-professional">Free assessment included</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof: Service-Specific */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              What Melbourne Customers Say About Our Material Removal
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-charcoal">{testimonial.name}</div>
                  <div className="text-professional text-sm">{testimonial.location}</div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Before/After Gallery */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-charcoal mb-8">Recent Material Removal Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <ServiceOptimizedImage
                  src={wallRemovalProgress}
                  service="material removal"
                  stage="safe demolition process"
                  alt="Complete material removal progress Melbourne showing safe mould-affected plasterboard removal with exposed framing preservation"
                  className="w-full h-64 object-cover rounded-lg"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <div className="text-sm font-semibold text-charcoal">Safe material removal</div>
                  <div className="text-xs text-professional">Structural integrity preserved</div>
                </div>
              </div>
              <div className="relative">
                <ServiceOptimizedImage
                  src={commercialRemovalWork}
                  service="commercial material removal"
                  equipment="IICRC certified containment"
                  alt="Commercial material removal project Melbourne with IICRC certified containment and professional demolition equipment"
                  className="w-full h-64 object-cover rounded-lg"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <div className="text-sm font-semibold text-charcoal">Complete restoration</div>
                  <div className="text-xs text-professional">Ready for reconstruction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Detail */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Our Complete Material Removal Process
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Systematic 5-step approach ensuring safe contaminated material removal
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {removalProcesses.map((process, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-3">{process.title}</h3>
                    <p className="text-professional leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Booking */}
      <section id="booking-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Benefits of Complete Material Removal
            </h2>
            <p className="text-xl text-professional">Comprehensive solution for severe contamination</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-4">Complete Elimination</h3>
              <p className="text-professional mb-4">Remove all contaminated materials to eliminate mould at its source</p>
              <ul className="space-y-2 text-sm text-professional">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Plaster walls & ceilings
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Insulation materials
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Flooring & subflooring
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 text-center border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Effective
              </div>
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-4">Structural Safety</h3>
              <p className="text-professional mb-4">Preserve structural integrity while eliminating contamination</p>
              <ul className="space-y-2 text-sm text-professional">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  IICRC certified process
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Structural assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Professional containment
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 text-center">
              <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-4">Restoration Ready</h3>
              <p className="text-professional mb-4">Prepare your property for complete restoration and renovation</p>
              <ul className="space-y-2 text-sm text-professional">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Clean structural elements
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Air quality testing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Clearance certification
                </li>
              </ul>
            </Card>
          </div>
          
          {/* Service Availability */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-6 bg-columbia border border-blue-200">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-blue-800">Professional Team Available</span>
                </div>
                <p className="text-blue-700 mb-4">2 material removal projects scheduled today</p>
                <div className="flex items-center justify-center gap-2 text-green-700">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium">Next available: Same-day service</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Areas We Serve Section - Complete Material Removal */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Complete Material Removal Across Melbourne
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Professional structural material removal for severe mould contamination throughout Melbourne.
              IICRC-certified technicians handle complete wall, ceiling, and insulation replacement with
              full containment and safety protocols.
            </p>
          </div>

          {/* Specialist Service Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Severe Contamination Specialists */}
            <Card className="p-6 border-2 border-red-500">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                Severe Contamination Areas
              </h3>
              <p className="text-professional mb-4">Emergency material removal for extensive mould damage and structural compromise</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/melbourne-cbd" className="block text-primary hover:text-primary-600 font-medium">Melbourne CBD - Commercial building restoration</a>
                <a href="/locations/south-yarra" className="block text-primary hover:text-primary-600 font-medium">South Yarra - Luxury apartment reconstruction</a>
                <a href="/locations/richmond" className="block text-primary hover:text-primary-600 font-medium">Richmond - Heritage terrace restoration</a>
                <a href="/locations/carlton" className="block text-primary hover:text-primary-600 font-medium">Carlton - Victorian property reconstruction</a>
                <a href="/locations/fitzroy" className="block text-primary hover:text-primary-600 font-medium">Fitzroy - Industrial conversion restoration</a>
                <a href="/locations/collingwood" className="block text-primary hover:text-primary-600 font-medium">Collingwood - Warehouse reconstruction</a>
              </div>
            </Card>

            {/* Heritage Property Specialists */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Heritage Property Restoration
              </h3>
              <p className="text-professional mb-4">Careful material removal preserving historical features and architectural integrity</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/toorak" className="block text-primary hover:text-primary-600 font-medium">Toorak - Heritage mansion restoration</a>
                <a href="/locations/armadale" className="block text-primary hover:text-primary-600 font-medium">Armadale - Period home reconstruction</a>
                <a href="/locations/malvern" className="block text-primary hover:text-primary-600 font-medium">Malvern - Victorian property restoration</a>
                <a href="/locations/east-melbourne" className="block text-primary hover:text-primary-600 font-medium">East Melbourne - Grand terrace restoration</a>
                <a href="/locations/albert-park" className="block text-primary hover:text-primary-600 font-medium">Albert Park - Heritage villa reconstruction</a>
                <a href="/locations/st-kilda" className="block text-primary hover:text-primary-600 font-medium">St Kilda - Period apartment restoration</a>
              </div>
            </Card>

            {/* Water Damage Restoration */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-600" />
                Water Damage Reconstruction
              </h3>
              <p className="text-professional mb-4">Complete material replacement following flood damage and water intrusion incidents</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/williamstown" className="block text-primary hover:text-primary-600 font-medium">Williamstown - Flood damage restoration</a>
                <a href="/locations/maribyrnong" className="block text-primary hover:text-primary-600 font-medium">Maribyrnong - Riverside property reconstruction</a>
                <a href="/locations/footscray" className="block text-primary hover:text-primary-600 font-medium">Footscray - Industrial facility restoration</a>
                <a href="/locations/altona" className="block text-primary hover:text-primary-600 font-medium">Altona - Coastal storm damage reconstruction</a>
                <a href="/locations/yarraville" className="block text-primary hover:text-primary-600 font-medium">Yarraville - Heritage cottage restoration</a>
                <a href="/locations/newport" className="block text-primary hover:text-primary-600 font-medium">Newport - Warehouse reconstruction</a>
              </div>
            </Card>

            {/* Commercial & Industrial */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                Commercial Property Restoration
              </h3>
              <p className="text-professional mb-4">Large-scale material removal for office buildings, warehouses, and commercial facilities</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/docklands" className="block text-primary hover:text-primary-600 font-medium">Docklands - High-rise reconstruction</a>
                <a href="/locations/southbank" className="block text-primary hover:text-primary-600 font-medium">Southbank - Commercial tower restoration</a>
                <a href="/locations/port-melbourne" className="block text-primary hover:text-primary-600 font-medium">Port Melbourne - Industrial reconstruction</a>
                <a href="/locations/brunswick" className="block text-primary hover:text-primary-600 font-medium">Brunswick - Commercial facility restoration</a>
                <a href="/locations/preston" className="block text-primary hover:text-primary-600 font-medium">Preston - Manufacturing facility reconstruction</a>
                <a href="/locations/coburg" className="block text-primary hover:text-primary-600 font-medium">Coburg - Warehouse restoration</a>
              </div>
            </Card>

            {/* Luxury Residential */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-gold-600" />
                Luxury Home Restoration
              </h3>
              <p className="text-professional mb-4">Premium material removal and reconstruction for high-end residential properties</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/brighton" className="block text-primary hover:text-primary-600 font-medium">Brighton - Beachside mansion restoration</a>
                <a href="/locations/camberwell" className="block text-primary hover:text-primary-600 font-medium">Camberwell - Federation home reconstruction</a>
                <a href="/locations/hawthorn" className="block text-primary hover:text-primary-600 font-medium">Hawthorn - Multi-level home restoration</a>
                <a href="/locations/kew" className="block text-primary hover:text-primary-600 font-medium">Kew - Premium family home reconstruction</a>
                <a href="/locations/glen-iris" className="block text-primary hover:text-primary-600 font-medium">Glen Iris - Executive home restoration</a>
                <a href="/locations/sandringham" className="block text-primary hover:text-primary-600 font-medium">Sandringham - Coastal property reconstruction</a>
              </div>
            </Card>

            {/* Growth Corridor Properties */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-teal-600" />
                Growth Corridor Areas
              </h3>
              <p className="text-professional mb-4">Modern construction material removal and replacement in Melbourne's expanding suburbs</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/box-hill" className="block text-primary hover:text-primary-600 font-medium">Box Hill - Modern development restoration</a>
                <a href="/locations/glen-waverley" className="block text-primary hover:text-primary-600 font-medium">Glen Waverley - Family home reconstruction</a>
                <a href="/locations/clayton" className="block text-primary hover:text-primary-600 font-medium">Clayton - University area restoration</a>
                <a href="/locations/dandenong" className="block text-primary hover:text-primary-600 font-medium">Dandenong - Industrial zone reconstruction</a>
                <a href="/locations/berwick" className="block text-primary hover:text-primary-600 font-medium">Berwick - New estate restoration</a>
                <a href="/locations/frankston" className="block text-primary hover:text-primary-600 font-medium">Frankston - Coastal development reconstruction</a>
              </div>
            </Card>
          </div>

          {/* Service Capabilities */}
          <div className="bg-red-50 rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600">100%</div>
                <div className="text-professional">Contaminated Material Removal</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">24/7</div>
                <div className="text-professional">Emergency Response Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">IICRC</div>
                <div className="text-professional">Certified Technicians</div>
              </div>
            </div>
          </div>

          {/* Emergency Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-charcoal mb-4">Need Emergency Material Removal?</h3>
            <p className="text-professional mb-6 max-w-2xl mx-auto">
              Severe mould contamination requires immediate professional intervention. Our IICRC-certified team
              provides complete material removal and structural restoration across Melbourne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white" asChild>
                <a href="tel:1800954117">
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency Removal Service
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Schedule Assessment
                </a>
              </Button>
            </div>
            <div className="mt-4 text-sm text-professional">
              ABN: 47 683 089 652 | IICRC Certified | 24/7 Emergency Response Available
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Internal Linking for Service to Location SEO */}
      <StrategicServiceLinks
        currentService="/services/complete-material-removal"
      />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};