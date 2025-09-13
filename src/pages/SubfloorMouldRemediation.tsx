import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, CheckCircle, Star, AlertTriangle, Shield, Award } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';
import subfloorRemediationHero from '@/assets/subfloor-remediation-hero.jpg';
import subfloorInspection from '@/assets/subfloor-inspection.jpg';
import subfloorVentilation from '@/assets/subfloor-ventilation.jpg';

export const SubfloorMouldRemediation = () => {
  const otherServices = [
    { title: 'Professional Mould Inspections', link: '/services/professional-mould-inspections' },
    { title: 'Complete Material Removal', link: '/services/complete-material-removal' },
    { title: 'Advanced Fogging Sanitisation', link: '/services/advanced-fogging-sanitisation' },
    { title: 'Comprehensive Mould Removal', link: '/services/comprehensive-mould-removal' },
  ];

  const remediationProcess = [
    {
      step: 1,
      title: 'Subfloor Inspection',
      description: 'Advanced moisture detection and thermal imaging to locate all contaminated areas.',
    },
    {
      step: 2,
      title: 'Moisture Source Control',
      description: 'Identify and eliminate water sources causing subfloor mould growth.',
    },
    {
      step: 3,
      title: 'Ventilation Assessment',
      description: 'Evaluate and improve subfloor airflow to reduce humidity and prevent recurrence.',
    },
    {
      step: 4,
      title: 'Mould Removal',
      description: 'Safe removal of mould from joists, bearers, and all subfloor structures.',
    },
    {
      step: 5,
      title: 'Sanitization Treatment',
      description: 'Antimicrobial treatment of all surfaces to eliminate remaining spores.',
    },
    {
      step: 6,
      title: 'Subfloor Conditioning',
      description: 'Site preparation and environmental conditioning to prevent future mould growth.',
    }
  ];

  const testimonials = [
    {
      text: "Subfloor mould was affecting our whole house air quality. They crawled under and eliminated everything - installed better ventilation too. No more musty smells.",
      name: "Robert Chen",
      location: "Box Hill",
      rating: 5,
    },
    {
      text: "Professional assessment found extensive subfloor contamination we couldn't see. Complete remediation and moisture control - problem solved permanently.",
      name: "Sarah Mitchell",
      location: "Glen Waverley",
      rating: 5,
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Emergency Bar */}
      <div className="bg-emergency-orange text-white py-2 px-4 text-center text-sm font-medium sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <span className="hidden sm:block">🏗️ Subfloor Mould Issues? Specialized remediation available</span>
          <span className="sm:hidden">Emergency Subfloor Service</span>
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
          backgroundImage: `url(${subfloorRemediationHero})`,
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
                    { label: 'Subfloor Mould Remediation', href: '/services/subfloor-mould-remediation', current: true },
                  ]} 
                />
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Hidden Mould Under Your 
                <span className="text-orange-300"> Melbourne Home?</span>
              </h1>
              
              <div className="bg-orange-900/50 border border-orange-500/50 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-orange-100 font-medium mb-2">Subfloor mould affects your whole home's air quality</p>
                    <p className="text-orange-200 text-sm">Specialized remediation eliminates the source and prevents recurrence.</p>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Our Subfloor Remediation Solution
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Comprehensive subfloor assessment, mould removal, and ventilation improvement for lasting results.
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
                    Urgent Subfloor Help - Call Now
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
                    Schedule Inspection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-yellow-400">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current" />
                ))}
                <span className="text-white ml-2">4.9/5 from 190+ subfloor jobs</span>
              </div>
            </div>
            
            {/* Right: Solution Preview */}
            <div className="w-full lg:w-96">
              <Card className="p-6 bg-white/95 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Subfloor Remediation Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                    <Shield className="h-5 w-5 text-orange-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Thorough Inspection</div>
                      <div className="text-orange-600 text-sm">Advanced detection tools</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Award className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Moisture Control</div>
                      <div className="text-blue-600 text-sm">Source elimination</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Ventilation Upgrade</div>
                      <div className="text-green-600 text-sm">Long-term prevention</div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">Custom Quote</div>
                  <div className="text-sm text-gray-600">Subfloor assessment included</div>
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
              What Melbourne Customers Say About Our Subfloor Remediation
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
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Subfloor Remediation & Improvement</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <img
                  src={subfloorInspection}
                  alt="Professional subfloor inspection with diagnostic equipment"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <div className="text-sm font-semibold text-gray-900">Advanced subfloor inspection</div>
                  <div className="text-xs text-gray-600">Thermal imaging & moisture detection</div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={subfloorVentilation}
                  alt="Improved subfloor ventilation system installation"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <div className="text-sm font-semibold text-gray-900">Ventilation improvement</div>
                  <div className="text-xs text-gray-600">Moisture control & airflow</div>
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
              Our Subfloor Remediation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive 6-step approach for complete subfloor mould elimination and prevention
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {remediationProcess.map((process, index) => (
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
              Benefits of Professional Subfloor Remediation
            </h2>
            <p className="text-xl text-gray-600">Complete foundation protection for your Melbourne home</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Improved Air Quality</h3>
              <p className="text-gray-600 mb-4">Eliminate subfloor contamination affecting your home's air</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Remove musty odors
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Eliminate allergens
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Healthier indoor environment
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 text-center border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Important
              </div>
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Structural Protection</h3>
              <p className="text-gray-600 mb-4">Preserve your home's foundation and structural integrity</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Protect timber joists
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Prevent rot & decay
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Maintain property value
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Long-Term Prevention</h3>
              <p className="text-gray-600 mb-4">Advanced ventilation and moisture control systems</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Improved ventilation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Moisture barriers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Ongoing monitoring
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
                  <span className="font-semibold text-blue-800">Subfloor Specialists Available</span>
                </div>
                <p className="text-blue-700 mb-4">2 subfloor remediation projects starting this week in Melbourne</p>
                <div className="flex items-center justify-center gap-2 text-green-700">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium">Next available inspection: This week</span>
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