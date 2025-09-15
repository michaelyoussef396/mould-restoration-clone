import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Clock, CheckCircle, Star, AlertTriangle, Shield, Award } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';
import materialRemovalHero from '@/assets/material-removal-hero.jpg';
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
      title: 'Structural Sanitization',
      description: 'Deep sanitization of exposed structural elements and surrounding areas.',
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
      {/* Professional Service Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <span className="hidden sm:block">Professional Material Removal - Same-day Service Available 7am-7pm</span>
          <span className="sm:hidden">Same-day Material Removal</span>
          <a href="tel:1800954117" className="font-bold hover:underline flex items-center gap-1">
            <Phone className="h-4 w-4" />
            1800 954 117
          </a>
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
                  className="text-lg px-8 py-4 h-auto bg-blue-600 hover:bg-blue-700 text-white"
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
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Complete Removal Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                    <Shield className="h-5 w-5 text-red-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Safe Containment</div>
                      <div className="text-red-600 text-sm">Prevent contamination spread</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Award className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">IICRC Certified</div>
                      <div className="text-blue-600 text-sm">Professional material removal</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Structural Restoration</div>
                      <div className="text-green-600 text-sm">Complete rebuild preparation</div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">Custom Quote</div>
                  <div className="text-sm text-gray-600">Free assessment included</div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
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
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.location}</div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Before/After Gallery */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent Material Removal Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <img
                  src={wallRemovalProgress}
                  alt="Wall removal progress showing exposed framing"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <div className="text-sm font-semibold text-gray-900">Safe material removal</div>
                  <div className="text-xs text-gray-600">Structural integrity preserved</div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={commercialRemovalWork}
                  alt="Commercial material removal project"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <div className="text-sm font-semibold text-gray-900">Complete restoration</div>
                  <div className="text-xs text-gray-600">Ready for reconstruction</div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Complete Material Removal Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Systematic 5-step approach ensuring safe contaminated material removal
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {removalProcesses.map((process, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Complete Material Removal
            </h2>
            <p className="text-xl text-gray-600">Comprehensive solution for severe contamination</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Elimination</h3>
              <p className="text-gray-600 mb-4">Remove all contaminated materials to eliminate mould at its source</p>
              <ul className="space-y-2 text-sm text-gray-600">
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
            
            <Card className="p-6 text-center border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Effective
              </div>
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Structural Safety</h3>
              <p className="text-gray-600 mb-4">Preserve structural integrity while eliminating contamination</p>
              <ul className="space-y-2 text-sm text-gray-600">
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
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Restoration Ready</h3>
              <p className="text-gray-600 mb-4">Prepare your property for complete restoration and renovation</p>
              <ul className="space-y-2 text-sm text-gray-600">
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
            <Card className="p-6 bg-blue-50 border border-blue-200">
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

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};