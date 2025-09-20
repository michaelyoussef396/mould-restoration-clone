import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Clock, CheckCircle, Star, AlertTriangle, Shield, Award, MapPin } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';
import { ServicePageSEO } from '@/components/seo/SEOHead';
import { StrategicServiceLinks } from '@/components/seo/InternalLinking';
import comprehensiveMouldHero from '@/assets/comprehensive-mould-hero-optimized.webp';
import mouldRemovalEquipment from '@/assets/mould-removal-equipment.jpg';
import mouldRemovalTransformation from '@/assets/mould-removal-transformation.jpg';

export const ComprehensiveMouldRemoval = () => {
  const otherServices = [
    { title: 'Professional Mould Inspections', link: '/services/professional-mould-inspections' },
    { title: 'Complete Material Removal', link: '/services/complete-material-removal' },
    { title: 'Advanced Fogging Sanitisation', link: '/services/advanced-fogging-sanitisation' },
    { title: 'Subfloor Mould Remediation', link: '/services/subfloor-mould-remediation' },
  ];

  const cleaningProcess = [
    {
      step: 1,
      title: 'Professional Assessment',
      description: 'Rapid on-site evaluation to assess mold extent, health risks, and immediate containment needs.',
    },
    {
      step: 2,
      title: 'Professional Containment',
      description: 'Advanced containment barriers and negative air pressure to prevent cross-contamination.',
    },
    {
      step: 3,
      title: 'IICRC-Certified Removal',
      description: 'Safe, systematic mold removal using industry-leading techniques and equipment.',
    },
    {
      step: 4,
      title: 'Deep Sanitisation',
      description: 'Complete sanitisation and antimicrobial treatment of all affected surfaces.',
    },
    {
      step: 5,
      title: 'Clearance Testing',
      description: 'Independent air quality testing to confirm complete mold elimination.',
    }
  ];

  const testimonials = [
    {
      text: "They transformed our mold-infested basement in 3 days. The air quality testing showed complete elimination. Professional team, excellent service.",
      name: "Michael Robertson",
      location: "Malvern",
      rating: 5,
    },
    {
      text: "Professional response was incredible - arrived promptly on a weekend. Contained the mold spread and prevented further damage to our home.",
      name: "Lisa Chen",
      location: "Brighton",
      rating: 5,
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Optimization for Comprehensive Mould Removal */}
      <ServicePageSEO
        service="removal"
        title="Comprehensive Mould Removal Melbourne - IICRC Certified Service"
        description="Professional comprehensive mould removal Melbourne. IICRC certified technicians, safe elimination processes, complete restoration. Same-day service available. Call 1800 954 117."
        canonicalUrl="https://mouldrestoration.com.au/services/comprehensive-mould-removal"
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
          backgroundImage: `url(${comprehensiveMouldHero})`,
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
                    { label: 'Comprehensive Mould Removal', href: '/services/comprehensive-mould-removal', current: true },
                  ]} 
                />
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Extensive Mold Growth in Your 
                <span className="text-red-300"> Melbourne Property?</span>
              </h1>
              
              <div className="bg-red-900/50 border border-red-500/50 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-100 font-medium mb-2">Mold spreads rapidly and affects your family's health</p>
                    <p className="text-red-200 text-sm">Professional removal prevents structural damage and eliminates health risks permanently.</p>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Our Comprehensive Removal Solution
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                IICRC-certified process removes mold safely and permanently with complete air quality restoration.
              </p>
              
              {/* Emergency vs. Scheduled CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button
                  className="bg-primary hover:bg-primary-600 text-white text-lg px-8 py-4 h-auto"
                  size="lg"
                  asChild
                >
                  <a href="tel:1800954117">
                    Professional Service - Call Now
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
                <span className="text-white ml-2">4.9/5 from 340+ removals</span>
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
                      <div className="font-semibold text-charcoal">Containment Setup</div>
                      <div className="text-red-600 text-sm">Prevent cross-contamination</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-columbia rounded-lg">
                    <Award className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold text-charcoal">IICRC Certified</div>
                      <div className="text-primary text-sm">Industry-leading removal</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <div>
                      <div className="font-semibold text-charcoal">Clearance Testing</div>
                      <div className="text-success text-sm">Guaranteed elimination</div>
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
              What Melbourne Customers Say About Our Mold Removal
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
            <h3 className="text-2xl font-bold text-charcoal mb-8">Recent Mold Removal Results</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <img
                  src={mouldRemovalEquipment}
                  alt="IICRC certified technician using professional mould removal equipment and containment systems in Melbourne home"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <div className="text-sm font-semibold text-charcoal">Professional containment</div>
                  <div className="text-xs text-professional">IICRC-certified process</div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={mouldRemovalTransformation}
                  alt="Complete Melbourne property mould removal transformation showing restored clean walls after professional remediation"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <div className="text-sm font-semibold text-charcoal">Complete restoration</div>
                  <div className="text-xs text-professional">Air quality: Excellent</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Melbourne Service Areas - Comprehensive Mould Removal */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Comprehensive Mould Removal Across Melbourne
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              IICRC-certified complete mould elimination for Melbourne's most challenging contamination cases.
              From heritage properties to modern homes - comprehensive removal and restoration.
            </p>
          </div>

          {/* Geographic Service Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

            {/* Emergency Response Areas */}
            <Card className="p-6 border-2 border-red-500">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                Emergency Response Priority Areas
              </h3>
              <p className="text-professional mb-4">Immediate comprehensive removal for severe contamination and health risks</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/melbourne-cbd" className="block text-primary hover:text-primary-600 font-medium">Melbourne CBD - Commercial emergency removal</a>
                <a href="/locations/southbank" className="block text-primary hover:text-primary-600 font-medium">Southbank - High-rise mould elimination</a>
                <a href="/locations/docklands" className="block text-primary hover:text-primary-600 font-medium">Docklands - Waterfront property restoration</a>
                <a href="/locations/south-yarra" className="block text-primary hover:text-primary-600 font-medium">South Yarra - Luxury apartment removal</a>
                <a href="/locations/richmond" className="block text-primary hover:text-primary-600 font-medium">Richmond - Heritage building restoration</a>
                <a href="/locations/collingwood" className="block text-primary hover:text-primary-600 font-medium">Collingwood - Industrial conversion removal</a>
                <a href="/locations/fitzroy" className="block text-primary hover:text-primary-600 font-medium">Fitzroy - Heritage terrace elimination</a>
                <a href="/locations/carlton" className="block text-primary hover:text-primary-600 font-medium">Carlton - Victorian mansion restoration</a>
              </div>
            </Card>

            {/* Eastern Suburbs Premium */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Eastern Suburbs Premium Service
              </h3>
              <p className="text-professional mb-4">Luxury properties requiring comprehensive mould elimination with premium restoration</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/toorak" className="block text-primary hover:text-primary-600 font-medium">Toorak - Luxury home complete removal</a>
                <a href="/locations/armadale" className="block text-primary hover:text-primary-600 font-medium">Armadale - Heritage mansion elimination</a>
                <a href="/locations/malvern" className="block text-primary hover:text-primary-600 font-medium">Malvern - Period home restoration</a>
                <a href="/locations/camberwell" className="block text-primary hover:text-primary-600 font-medium">Camberwell - Federation home removal</a>
                <a href="/locations/hawthorn" className="block text-primary hover:text-primary-600 font-medium">Hawthorn - Multi-level elimination</a>
                <a href="/locations/kew" className="block text-primary hover:text-primary-600 font-medium">Kew - Family home restoration</a>
                <a href="/locations/brighton" className="block text-primary hover:text-primary-600 font-medium">Brighton - Coastal property removal</a>
                <a href="/locations/glen-iris" className="block text-primary hover:text-primary-600 font-medium">Glen Iris - Established home elimination</a>
              </div>
            </Card>

            {/* Heritage Building Specialists */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-success" />
                Heritage Building Specialists
              </h3>
              <p className="text-professional mb-4">Specialized removal for heritage properties requiring careful restoration preservation</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/east-melbourne" className="block text-primary hover:text-primary-600 font-medium">East Melbourne - Grand terrace restoration</a>
                <a href="/locations/north-melbourne" className="block text-primary hover:text-primary-600 font-medium">North Melbourne - Heritage townhouse removal</a>
                <a href="/locations/parkville" className="block text-primary hover:text-primary-600 font-medium">Parkville - University area elimination</a>
                <a href="/locations/albert-park" className="block text-primary hover:text-primary-600 font-medium">Albert Park - Victorian villa restoration</a>
                <a href="/locations/middle-park" className="block text-primary hover:text-primary-600 font-medium">Middle Park - Heritage cottage removal</a>
                <a href="/locations/st-kilda" className="block text-primary hover:text-primary-600 font-medium">St Kilda - Period apartment elimination</a>
                <a href="/locations/elwood" className="block text-primary hover:text-primary-600 font-medium">Elwood - Beachside heritage restoration</a>
                <a href="/locations/port-melbourne" className="block text-primary hover:text-primary-600 font-medium">Port Melbourne - Warehouse conversion removal</a>
              </div>
            </Card>

            {/* Northern Suburbs Comprehensive */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600" />
                Northern Suburbs Comprehensive
              </h3>
              <p className="text-professional mb-4">Complete mould removal for established and growth corridor properties</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/preston" className="block text-primary hover:text-primary-600 font-medium">Preston - Modern family home removal</a>
                <a href="/locations/thornbury" className="block text-primary hover:text-primary-600 font-medium">Thornbury - Townhouse elimination</a>
                <a href="/locations/northcote" className="block text-primary hover:text-primary-600 font-medium">Northcote - Multi-level restoration</a>
                <a href="/locations/brunswick" className="block text-primary hover:text-primary-600 font-medium">Brunswick - Commercial property removal</a>
                <a href="/locations/coburg" className="block text-primary hover:text-primary-600 font-medium">Coburg - Residential elimination</a>
                <a href="/locations/reservoir" className="block text-primary hover:text-primary-600 font-medium">Reservoir - Family home restoration</a>
                <a href="/locations/heidelberg" className="block text-primary hover:text-primary-600 font-medium">Heidelberg - Established home removal</a>
                <a href="/locations/ivanhoe" className="block text-primary hover:text-primary-600 font-medium">Ivanhoe - Premium property elimination</a>
              </div>
            </Card>

            {/* Western Suburbs Industrial */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-orange-600" />
                Western Suburbs Industrial
              </h3>
              <p className="text-professional mb-4">Comprehensive removal for industrial, commercial and residential properties</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/footscray" className="block text-primary hover:text-primary-600 font-medium">Footscray - Industrial facility removal</a>
                <a href="/locations/maribyrnong" className="block text-primary hover:text-primary-600 font-medium">Maribyrnong - Commercial elimination</a>
                <a href="/locations/yarraville" className="block text-primary hover:text-primary-600 font-medium">Yarraville - Heritage cottage restoration</a>
                <a href="/locations/williamstown" className="block text-primary hover:text-primary-600 font-medium">Williamstown - Coastal property removal</a>
                <a href="/locations/newport" className="block text-primary hover:text-primary-600 font-medium">Newport - Warehouse elimination</a>
                <a href="/locations/altona" className="block text-primary hover:text-primary-600 font-medium">Altona - Family home restoration</a>
                <a href="/locations/moonee-ponds" className="block text-primary hover:text-primary-600 font-medium">Moonee Ponds - Established home removal</a>
                <a href="/locations/essendon" className="block text-primary hover:text-primary-600 font-medium">Essendon - Multi-room elimination</a>
              </div>
            </Card>

            {/* Southeastern Growth Corridor */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-teal-600" />
                Southeastern Growth Corridor
              </h3>
              <p className="text-professional mb-4">Modern developments and established suburbs with comprehensive removal services</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/clayton" className="block text-primary hover:text-primary-600 font-medium">Clayton - University area removal</a>
                <a href="/locations/glen-waverley" className="block text-primary hover:text-primary-600 font-medium">Glen Waverley - Family home elimination</a>
                <a href="/locations/box-hill" className="block text-primary hover:text-primary-600 font-medium">Box Hill - Commercial restoration</a>
                <a href="/locations/ringwood" className="block text-primary hover:text-primary-600 font-medium">Ringwood - Residential removal</a>
                <a href="/locations/dandenong" className="block text-primary hover:text-primary-600 font-medium">Dandenong - Industrial elimination</a>
                <a href="/locations/oakleigh" className="block text-primary hover:text-primary-600 font-medium">Oakleigh - Traditional home restoration</a>
                <a href="/locations/bentleigh" className="block text-primary hover:text-primary-600 font-medium">Bentleigh - Heritage property removal</a>
                <a href="/locations/chadstone" className="block text-primary hover:text-primary-600 font-medium">Chadstone - Modern home elimination</a>
              </div>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-charcoal mb-4">Ready for Comprehensive Mould Removal?</h3>
            <p className="text-professional mb-6 max-w-2xl mx-auto">
              Our IICRC-certified process eliminates mould contamination completely across Melbourne.
              ABN: 47 683 089 652 | Professional service 7am-7pm every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-600 text-white" asChild>
                <a href="tel:1800954117">
                  <Phone className="h-5 w-5 mr-2" />
                  Call for Emergency Removal
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#booking-form">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Schedule Assessment
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Detail - Complete Transparency */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Our Comprehensive Removal Process - Every Step Explained
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Melbourne's most thorough mould removal process following strict IICRC guidelines. Here's exactly what we do,
              why we do it, and what you can expect during each phase of your mould remediation.
            </p>
          </div>

          <div className="space-y-12">
            {cleaningProcess.map((process, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <Card className="p-8 hover:shadow-lg transition-shadow border-l-4 border-primary">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {process.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-charcoal mb-4">{process.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        {process.description}
                      </p>

                      {/* Detailed breakdown for each step */}
                      {index === 0 && (
                        <div className="bg-white p-6 rounded-lg border border-red-200">
                          <h4 className="font-bold text-charcoal mb-3">Professional Service - 7am-7pm Protocol:</h4>
                          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• Professional response for Melbourne service requests</li>
                            <li>• Initial containment setup to prevent further contamination spread</li>
                            <li>• Comprehensive visual assessment and documentation with digital photography</li>
                            <li>• Moisture content readings using calibrated equipment at all affected areas</li>
                            <li>• Air quality sampling to establish baseline contamination levels</li>
                            <li>• Immediate health and safety assessment for occupants</li>
                          </ul>
                          <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
                            <p className="text-sm text-red-800">
                              <strong>Critical Health Considerations:</strong> Areas with extensive mould growth pose immediate health risks.
                              We establish temporary barriers and recommend occupant relocation if spore concentrations exceed safe levels.
                            </p>
                          </div>
                        </div>
                      )}

                      {index === 1 && (
                        <div className="bg-white p-6 rounded-lg border border-orange-200">
                          <h4 className="font-bold text-charcoal mb-3">Professional Containment Systems:</h4>
                          <ul className="space-y-2 text-gray-700 mb-4">
                            <li>• 6-mil polyethylene barriers sealed with professional tapes and caulking</li>
                            <li>• HEPA-filtered negative air machines creating -5 to -10 Pascal pressure differential</li>
                            <li>• Airlock entry systems with sticky mat decontamination stations</li>
                            <li>• Complete HVAC system isolation to prevent contamination spread</li>
                            <li>• Critical barrier integrity testing using smoke pencils</li>
                            <li>• Secondary containment for high-risk areas or extensive contamination</li>
                          </ul>
                          <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-500">
                            <p className="text-sm text-orange-800">
                              <strong>Why This Matters:</strong> Without proper containment, mould spores spread to clean areas during removal,
                              often making the problem worse. Our systems meet or exceed IICRC S520 containment standards.
                            </p>
                          </div>
                        </div>
                      )}

                      {index === 2 && (
                        <div className="bg-white p-6 rounded-lg border border-blue-200">
                          <h4 className="font-bold text-charcoal mb-3">IICRC-Certified Removal Techniques:</h4>
                          <ul className="space-y-2 text-gray-700 mb-4">
                            <li>• HEPA vacuum pre-cleaning to capture loose spores and debris</li>
                            <li>• Controlled demolition using hand tools to minimize airborne disturbance</li>
                            <li>• Double-bagging protocol for contaminated materials with proper labeling</li>
                            <li>• Surface cleaning using EPA-registered antimicrobial solutions</li>
                            <li>• HEPA vacuum cleaning of all surfaces including structural elements</li>
                            <li>• Progressive cleaning from most contaminated to least contaminated areas</li>
                          </ul>
                          <div className="bg-columbia p-4 rounded border-l-4 border-primary">
                            <p className="text-sm text-blue-800">
                              <strong>Safety First:</strong> Our technicians wear full respiratory protection (P100 filters),
                              disposable coveralls, and follow strict decontamination procedures. Your family's safety is our priority.
                            </p>
                          </div>
                        </div>
                      )}

                      {index === 3 && (
                        <div className="bg-white p-6 rounded-lg border border-green-200">
                          <h4 className="font-bold text-charcoal mb-3">Advanced Sanitization Methods:</h4>
                          <ul className="space-y-2 text-gray-700 mb-4">
                            <li>• EPA-registered antimicrobial treatment application to all surfaces</li>
                            <li>• ULV (Ultra-Low Volume) fogging for complete coverage in hard-to-reach areas</li>
                            <li>• Encapsulant application on porous surfaces that can't be removed</li>
                            <li>• HVAC system cleaning and sanitisation including ductwork treatment</li>
                            <li>• Hydroxyl generator treatment for advanced air purification</li>
                            <li>• Surface biocide application with residual antimicrobial protection</li>
                          </ul>
                          <div className="bg-success/10 p-4 rounded border-l-4 border-success">
                            <p className="text-sm text-green-800">
                              <strong>Long-term Protection:</strong> Our sanitisation process includes residual protection that continues
                              working for weeks after application, preventing mould regrowth during the critical recovery period.
                            </p>
                          </div>
                        </div>
                      )}

                      {index === 4 && (
                        <div className="bg-white p-6 rounded-lg border border-purple-200">
                          <h4 className="font-bold text-charcoal mb-3">Independent Clearance Verification:</h4>
                          <ul className="space-y-2 text-gray-700 mb-4">
                            <li>• Third-party air quality testing by NATA-accredited laboratories</li>
                            <li>• Multiple sampling locations throughout treated and adjacent areas</li>
                            <li>• Comparison against Australian air quality guidelines and baseline readings</li>
                            <li>• Visual inspection using UV lights and magnification equipment</li>
                            <li>• Moisture content verification to ensure dry conditions maintained</li>
                            <li>• Comprehensive clearance documentation for insurance and health records</li>
                          </ul>
                          <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500">
                            <p className="text-sm text-purple-800">
                              <strong>Your Guarantee:</strong> We don't consider the job complete until independent testing confirms
                              successful elimination. If clearance testing fails, we return at no charge to address any issues.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Pricing Transparency Section */}
          <div className="mt-16 bg-columbia rounded-lg p-8">
            <h3 className="text-2xl font-bold text-charcoal mb-6 text-center">Complete Pricing Transparency</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-charcoal mb-3">How We Determine Pricing</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Square footage of affected areas requiring treatment</li>
                  <li>• Extent of contamination based on visual assessment and testing</li>
                  <li>• Type of materials affected (porous vs. non-porous surfaces)</li>
                  <li>• Complexity of containment setup and access challenges</li>
                  <li>• Required post-treatment verification and testing</li>
                  <li>• Time estimate based on IICRC productivity standards</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-charcoal mb-3">What's Always Included</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Complete containment setup and breakdown</li>
                  <li>• All required safety equipment and protective gear</li>
                  <li>• Proper disposal of contaminated materials</li>
                  <li>• Post-treatment cleanup and HEPA vacuuming</li>
                  <li>• Basic antimicrobial treatment of all surfaces</li>
                  <li>• Written documentation and progress photographs</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-white p-6 rounded-lg border border-blue-200">
              <h4 className="font-bold text-charcoal mb-3">Our No-Surprise Guarantee</h4>
              <p className="text-gray-700 mb-3">
                Once work begins, the price won't change unless we discover significant additional contamination
                beyond what was visible during the initial assessment. If this happens:
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>• Work stops immediately while we discuss the new findings with you</li>
                <li>• We provide a detailed explanation and additional cost estimate</li>
                <li>• You choose whether to proceed with additional work or modify the scope</li>
                <li>• All pricing changes require your written approval before continuing</li>
              </ul>
            </div>
          </div>

          {/* Quality Assurance and Guarantee Details */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-charcoal mb-8 text-center">Our 100% Satisfaction Guarantee Details</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-bold text-charcoal mb-3">Workmanship Guarantee</h4>
                <p className="text-gray-700 mb-3">
                  All mould removal work guaranteed for 12 months when recommended moisture control measures are implemented.
                </p>
                <ul className="space-y-1 text-sm text-professional">
                  <li>• Free return service for any regrowth in treated areas</li>
                  <li>• Guarantee applies when moisture sources are controlled</li>
                  <li>• Written warranty provided with final documentation</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-bold text-charcoal mb-3">Clearance Testing Promise</h4>
                <p className="text-gray-700 mb-3">
                  Independent air quality testing must show successful elimination or we return at no charge.
                </p>
                <ul className="space-y-1 text-sm text-professional">
                  <li>• Testing by independent NATA-accredited laboratory</li>
                  <li>• Results compared to established health guidelines</li>
                  <li>• Free remedial work if testing shows incomplete removal</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-bold text-charcoal mb-3">Customer Satisfaction Promise</h4>
                <p className="text-gray-700 mb-3">
                  If you're not completely satisfied with our service, we'll make it right or refund your money.
                </p>
                <ul className="space-y-1 text-sm text-professional">
                  <li>• Professional service meeting IICRC standards</li>
                  <li>• Complete cleanup and site restoration</li>
                  <li>• Respectful treatment of your property and family</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Booking */}
      <section id="booking-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Why Choose Our Comprehensive Mould Removal?
            </h2>
            <p className="text-xl text-professional">Professional service guarantees and value for Melbourne homes</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-4">Complete Elimination</h3>
              <p className="text-professional mb-4">IICRC-certified process removes all mould contamination</p>
              <ul className="space-y-2 text-sm text-professional">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Professional containment setup
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Safe mould removal process
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Deep sanitisation treatment
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 text-center border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-4">Guaranteed Results</h3>
              <p className="text-professional mb-4">Air quality testing confirms complete mould elimination</p>
              <ul className="space-y-2 text-sm text-professional">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Independent air quality testing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Clearance certification provided
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  100% satisfaction guarantee
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 text-center">
              <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-4">Comprehensive Service</h3>
              <p className="text-professional mb-4">Complete solution from assessment to final clearance</p>
              <ul className="space-y-2 text-sm text-professional">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Free initial assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Insurance documentation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Post-service support
                </li>
              </ul>
            </Card>
          </div>
          
          {/* Professional Service - 7am-7pm Availability */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-6 bg-orange-50 border border-orange-200">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-orange-800">Professional Service Available</span>
                </div>
                <p className="text-orange-700 mb-4">Responding to 4 service calls in Melbourne today</p>
                <div className="flex items-center justify-center gap-2 text-green-700">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium">Next professional service slot: Professional booking available</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Internal Linking for Service to Location SEO */}
      <StrategicServiceLinks
        currentService="/services/comprehensive-mould-removal"
      />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};
