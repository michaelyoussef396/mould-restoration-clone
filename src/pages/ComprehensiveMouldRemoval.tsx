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
      title: 'Deep Sanitization',
      description: 'Complete sanitization and antimicrobial treatment of all affected surfaces.',
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
      {/* Professional Service Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium sticky top-0 z-50">
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
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 h-auto"
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

      {/* Process Detail - Complete Transparency */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Removal Process - Every Step Explained
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Melbourne's most thorough mould removal process following strict IICRC guidelines. Here's exactly what we do,
              why we do it, and what you can expect during each phase of your mould remediation.
            </p>
          </div>

          <div className="space-y-12">
            {cleaningProcess.map((process, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <Card className="p-8 hover:shadow-lg transition-shadow border-l-4 border-blue-600">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {process.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{process.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        {process.description}
                      </p>

                      {/* Detailed breakdown for each step */}
                      {index === 0 && (
                        <div className="bg-white p-6 rounded-lg border border-red-200">
                          <h4 className="font-bold text-gray-900 mb-3">Professional Service - 7am-7pm Protocol:</h4>
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
                          <h4 className="font-bold text-gray-900 mb-3">Professional Containment Systems:</h4>
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
                          <h4 className="font-bold text-gray-900 mb-3">IICRC-Certified Removal Techniques:</h4>
                          <ul className="space-y-2 text-gray-700 mb-4">
                            <li>• HEPA vacuum pre-cleaning to capture loose spores and debris</li>
                            <li>• Controlled demolition using hand tools to minimize airborne disturbance</li>
                            <li>• Double-bagging protocol for contaminated materials with proper labeling</li>
                            <li>• Surface cleaning using EPA-registered antimicrobial solutions</li>
                            <li>• HEPA vacuum cleaning of all surfaces including structural elements</li>
                            <li>• Progressive cleaning from most contaminated to least contaminated areas</li>
                          </ul>
                          <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
                            <p className="text-sm text-blue-800">
                              <strong>Safety First:</strong> Our technicians wear full respiratory protection (P100 filters),
                              disposable coveralls, and follow strict decontamination procedures. Your family's safety is our priority.
                            </p>
                          </div>
                        </div>
                      )}

                      {index === 3 && (
                        <div className="bg-white p-6 rounded-lg border border-green-200">
                          <h4 className="font-bold text-gray-900 mb-3">Advanced Sanitization Methods:</h4>
                          <ul className="space-y-2 text-gray-700 mb-4">
                            <li>• EPA-registered antimicrobial treatment application to all surfaces</li>
                            <li>• ULV (Ultra-Low Volume) fogging for complete coverage in hard-to-reach areas</li>
                            <li>• Encapsulant application on porous surfaces that can't be removed</li>
                            <li>• HVAC system cleaning and sanitization including ductwork treatment</li>
                            <li>• Hydroxyl generator treatment for advanced air purification</li>
                            <li>• Surface biocide application with residual antimicrobial protection</li>
                          </ul>
                          <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
                            <p className="text-sm text-green-800">
                              <strong>Long-term Protection:</strong> Our sanitization process includes residual protection that continues
                              working for weeks after application, preventing mould regrowth during the critical recovery period.
                            </p>
                          </div>
                        </div>
                      )}

                      {index === 4 && (
                        <div className="bg-white p-6 rounded-lg border border-purple-200">
                          <h4 className="font-bold text-gray-900 mb-3">Independent Clearance Verification:</h4>
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
          <div className="mt-16 bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Complete Pricing Transparency</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">How We Determine Pricing</h4>
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
                <h4 className="font-bold text-gray-900 mb-3">What's Always Included</h4>
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
              <h4 className="font-bold text-gray-900 mb-3">Our No-Surprise Guarantee</h4>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our 100% Satisfaction Guarantee Details</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">Workmanship Guarantee</h4>
                <p className="text-gray-700 mb-3">
                  All mould removal work guaranteed for 12 months when recommended moisture control measures are implemented.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Free return service for any regrowth in treated areas</li>
                  <li>• Guarantee applies when moisture sources are controlled</li>
                  <li>• Written warranty provided with final documentation</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">Clearance Testing Promise</h4>
                <p className="text-gray-700 mb-3">
                  Independent air quality testing must show successful elimination or we return at no charge.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Testing by independent NATA-accredited laboratory</li>
                  <li>• Results compared to established health guidelines</li>
                  <li>• Free remedial work if testing shows incomplete removal</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">Customer Satisfaction Promise</h4>
                <p className="text-gray-700 mb-3">
                  If you're not completely satisfied with our service, we'll make it right or refund your money.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Comprehensive Mould Removal?
            </h2>
            <p className="text-xl text-gray-600">Professional service guarantees and value for Melbourne homes</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Elimination</h3>
              <p className="text-gray-600 mb-4">IICRC-certified process removes all mould contamination</p>
              <ul className="space-y-2 text-sm text-gray-600">
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
                  Deep sanitization treatment
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 text-center border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Guaranteed Results</h3>
              <p className="text-gray-600 mb-4">Air quality testing confirms complete mould elimination</p>
              <ul className="space-y-2 text-sm text-gray-600">
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
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Service</h3>
              <p className="text-gray-600 mb-4">Complete solution from assessment to final clearance</p>
              <ul className="space-y-2 text-sm text-gray-600">
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

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};
