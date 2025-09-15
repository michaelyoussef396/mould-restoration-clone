import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Clock, CheckCircle, Star, AlertTriangle, Shield, Award } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';
import advancedFoggingHero from '@/assets/advanced-fogging-hero.jpg';
import ulvFoggingEquipment from '@/assets/ulv-fogging-equipment.jpg';
import sanitisationProcess from '@/assets/sanitisation-process.jpg';

export const AdvancedFoggingSanitisation = () => {
  const otherServices = [
    { title: 'Professional Mould Inspections', link: '/services/professional-mould-inspections' },
    { title: 'Complete Material Removal', link: '/services/complete-material-removal' },
    { title: 'Comprehensive Mould Removal', link: '/services/comprehensive-mould-removal' },
    { title: 'Subfloor Mould Remediation', link: '/services/subfloor-mould-remediation' },
  ];

  const foggingProcess = [
    {
      step: 1,
      title: 'Pre-Treatment Assessment',
      description: 'Comprehensive evaluation of contaminated areas to determine optimal fogging strategy.',
    },
    {
      step: 2,
      title: 'Area Preparation',
      description: 'Professional setup and containment to ensure maximum treatment effectiveness.',
    },
    {
      step: 3,
      title: 'ULV Fogging Treatment',
      description: 'Advanced Ultra Low Volume fogging penetrates every surface and hard-to-reach area.',
    },
    {
      step: 4,
      title: 'Contact Time Monitoring',
      description: 'Allowing proper contact time for complete spore elimination and sanitization.',
    },
    {
      step: 5,
      title: 'Post-Treatment Verification',
      description: 'Air quality testing and surface verification to confirm complete sanitization.',
    }
  ];

  const testimonials = [
    {
      text: "ULV fogging treatment was amazing - reached areas we couldn't even see. The musty smell disappeared completely and air quality testing showed excellent results.",
      name: "Jennifer Morris",
      location: "Hawthorn",
      rating: 5,
    },
    {
      text: "After water damage, fogging sanitization was the final step. Every corner was treated - even behind furniture. Professional team, thorough process.",
      name: "Mark Stevens",
      location: "Camberwell",
      rating: 5,
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Professional Service Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <span className="hidden sm:block">🌪️ Need Complete Sanitization? ULV fogging available today</span>
          <span className="sm:hidden">Professional Fogging Service</span>
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
          backgroundImage: `url(${advancedFoggingHero})`,
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
                    { label: 'Advanced Fogging Sanitisation', href: '/services/advanced-fogging-sanitisation', current: true },
                  ]} 
                />
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Mould Spores in Every 
                <span className="text-blue-300"> Corner & Crevice?</span>
              </h1>
              
              <div className="bg-blue-900/50 border border-blue-500/50 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-blue-100 font-medium mb-2">Mould spores hide in impossible-to-reach places</p>
                    <p className="text-blue-200 text-sm">ULV fogging penetrates every surface for complete sanitization.</p>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Our Advanced Fogging Solution
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Ultra Low Volume fogging technology sanitizes every surface and air space for complete spore elimination.
              </p>
              
              {/* Emergency vs. Scheduled CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white" 
                  size="lg" 
                  className="text-lg px-8 py-4 h-auto"
                  asChild
                >
                  <a href="tel:1800954117">
                    Same-Day Fogging - Call Now
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
                    Schedule Treatment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-yellow-400">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current" />
                ))}
                <span className="text-white ml-2">4.9/5 from 320+ treatments</span>
              </div>
            </div>
            
            {/* Right: Solution Preview */}
            <div className="w-full lg:w-96">
              <Card className="p-6 bg-white/95 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">ULV Fogging Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Complete Coverage</div>
                      <div className="text-blue-600 text-sm">Reaches every surface</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Award className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Eco-Friendly</div>
                      <div className="text-green-600 text-sm">Safe for family & pets</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Air Quality Testing</div>
                      <div className="text-purple-600 text-sm">Verified results</div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">Custom Quote</div>
                  <div className="text-sm text-gray-600">Based on area size</div>
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
              What Melbourne Customers Say About Our Fogging Treatment
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
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Advanced Fogging Equipment & Process</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <img
                  src={ulvFoggingEquipment}
                  alt="Professional ULV fogging equipment setup"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <div className="text-sm font-semibold text-gray-900">Professional ULV equipment</div>
                  <div className="text-xs text-gray-600">Hospital-grade sanitization</div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={sanitisationProcess}
                  alt="Fogging sanitization process in action"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <div className="text-sm font-semibold text-gray-900">Complete room treatment</div>
                  <div className="text-xs text-gray-600">Every surface sanitized</div>
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
              Our Advanced Fogging Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              5-step ULV fogging process ensuring complete sanitization and spore elimination
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {foggingProcess.map((process, index) => (
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
              Why Choose ULV Fogging Sanitisation?
            </h2>
            <p className="text-xl text-gray-600">Superior sanitization technology for complete protection</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Deep Penetration</h3>
              <p className="text-gray-600 mb-4">Fine mist reaches impossible-to-access areas</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Behind fixtures & furniture
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Inside wall cavities
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  HVAC systems & ducts
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 text-center border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Widespread Coverage</h3>
              <p className="text-gray-600 mb-4">Sanitizes large areas quickly and efficiently</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Whole house treatment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Commercial spaces
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Same-day completion
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Safe & Effective</h3>
              <p className="text-gray-600 mb-4">Eco-friendly solutions safe for families</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Non-toxic formulations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Pet-safe solutions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Minimal disruption
                </li>
              </ul>
            </Card>
          </div>
          
          {/* Availability Indicator */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-6 bg-green-50 border border-green-200">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-green-800">Fogging Equipment Available</span>
                </div>
                <p className="text-green-700 mb-4">3 ULV fogging treatments scheduled in Melbourne today</p>
                <div className="flex items-center justify-center gap-2 text-blue-700">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="font-medium">Next available slot: Same day booking available</span>
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