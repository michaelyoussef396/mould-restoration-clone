import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Clock, CheckCircle, Star, AlertTriangle, Shield, Award } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';
import comprehensiveMouldHero from '@/assets/comprehensive-mould-hero.jpg';
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
      title: 'Emergency Assessment',
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
      title: 'Deep Sanitization',
      description: 'Complete sanitization and antimicrobial treatment of all affected surfaces.',
    },
    {
      step: 5,
      title: 'Clearance Testing',
      description: 'Independent air quality testing to confirm complete mold elimination.',
    }
  ];

  const pricingTiers = [
    {
      title: 'Small Area Removal',
      price: 'From $800',
      features: ['Up to 50 sq ft', 'Basic containment', 'Standard sanitization', 'Same-day completion'],
      ideal: 'Bathroom, closet areas',
    },
    {
      title: 'Standard Remediation',
      price: 'From $1,500',
      features: ['Up to 200 sq ft', 'Full containment', 'Advanced equipment', 'Air quality testing'],
      ideal: 'Multiple rooms',
      popular: true,
    },
    {
      title: 'Extensive Removal',
      price: 'Custom Quote',
      features: ['Whole house scope', 'Emergency response', 'Material replacement', 'Insurance coordination'],
      ideal: 'Major infestations',
    },
  ];

  const testimonials = [
    {
      text: "They transformed our mold-infested basement in 3 days. The air quality testing showed complete elimination. Professional team, fair pricing.",
      name: "Michael Robertson",
      location: "Malvern",
      rating: 5,
    },
    {
      text: "Emergency response was incredible - arrived within 2 hours on a weekend. Contained the mold spread and prevented further damage to our home.",
      name: "Lisa Chen",
      location: "Brighton",
      rating: 5,
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Emergency Bar */}
      <div className="bg-emergency-orange text-white py-2 px-4 text-center text-sm font-medium sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <span className="hidden sm:block">🚨 Serious Mold Problem? Emergency response within 2 hours</span>
          <span className="sm:hidden">Emergency Mold Response</span>
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
                  variant="emergency" 
                  size="lg" 
                  className="text-lg px-8 py-4 h-auto"
                  asChild
                >
                  <a href="tel:1800954117">
                    Emergency Removal - Call Now
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
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Complete Removal Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                    <Shield className="h-5 w-5 text-red-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Containment Setup</div>
                      <div className="text-red-600 text-sm">Prevent cross-contamination</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Award className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">IICRC Certified</div>
                      <div className="text-blue-600 text-sm">Industry-leading removal</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Clearance Testing</div>
                      <div className="text-green-600 text-sm">Guaranteed elimination</div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">From $800</div>
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
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.location}</div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Before/After Gallery */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent Mold Removal Results</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <img
                  src={mouldRemovalEquipment}
                  alt="Professional mold removal in progress"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <div className="text-sm font-semibold text-gray-900">Professional containment</div>
                  <div className="text-xs text-gray-600">IICRC-certified process</div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={mouldRemovalTransformation}
                  alt="Complete mold removal transformation"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <div className="text-sm font-semibold text-gray-900">Complete restoration</div>
                  <div className="text-xs text-gray-600">Air quality: Excellent</div>
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
              Our Comprehensive Removal Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Systematic 5-step approach ensuring complete mold elimination and prevention
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {cleaningProcess.map((process, index) => (
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

      {/* Pricing & Booking */}
      <section id="booking-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Investment in Your Property's Health
            </h2>
            <p className="text-xl text-gray-600">Transparent pricing based on affected area size</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`p-6 text-center ${tier.popular ? 'border-2 border-blue-500 relative' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Common
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.title}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">{tier.price}</div>
                <div className="text-gray-600 mb-6">{tier.ideal}</div>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${tier.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`} asChild>
                  <a href="/contact">Get Quote</a>
                </Button>
              </Card>
            ))}
          </div>
          
          {/* Emergency Response Availability */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-6 bg-orange-50 border border-orange-200">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-orange-800">Emergency Team Available</span>
                </div>
                <p className="text-orange-700 mb-4">Responding to 4 emergency calls in Melbourne today</p>
                <div className="flex items-center justify-center gap-2 text-green-700">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium">Next emergency slot: Within 2 hours</span>
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
