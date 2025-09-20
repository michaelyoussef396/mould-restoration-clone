import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Clock, Shield, CheckCircle, Star, AlertTriangle, Thermometer, Award, MapPin } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';
import { ServicePageSEO } from '@/components/seo/SEOHead';
import { LocalBusinessSchema, ServiceSchema } from '@/components/seo/SchemaMarkup';
import { StrategicServiceLinks } from '@/components/seo/InternalLinking';
import professionalMouldHero from '@/assets/professional-mould-hero.jpg';
import thermalImagingDevice from '@/assets/thermal-imaging-device.jpg';
import cleanResidentialInterior from '@/assets/clean-residential-interior.jpg';

export const ProfessionalMouldInspections = () => {
  const otherServices = [
    { title: 'Complete Material Removal', href: '/services/complete-material-removal' },
    { title: 'Advanced Fogging Sanitisation', href: '/services/advanced-fogging-sanitisation' },
    { title: 'Comprehensive Mould Removal', href: '/services/comprehensive-mould-removal' },
    { title: 'Subfloor Mould Remediation', href: '/services/subfloor-mould-remediation' },
  ];

  const assessmentSteps = [
    {
      title: 'Comprehensive Visual Inspection',
      description: 'Our IICRC-certified technicians examine all areas for visible mold growth, water damage, and moisture issues using professional-grade equipment.'
    },
    {
      title: 'Thermal Imaging Detection',
      description: 'Advanced thermal cameras reveal hidden moisture pockets and temperature variations that indicate potential mold growth behind walls and surfaces.'
    },
    {
      title: 'Air Quality Testing',
      description: 'Scientifically measure airborne mold spore concentrations to assess health risks and contamination levels throughout your property.'
    },
    {
      title: 'Source Identification',
      description: 'Identify root causes like leaks, poor ventilation, or humidity issues to prevent future mold problems and ensure lasting solutions.'
    },
    {
      title: 'Detailed Action Plan',
      description: 'Receive a comprehensive written report with prioritised recommendations, action plan, and timeline for complete remediation.'
    }
  ];

  const testimonials = [
    {
      text: "The thermal imaging revealed mold behind our kitchen wall that we never would have found. Saved us thousands in potential damage!",
      name: "Jennifer Walsh",
      location: "Toorak",
      rating: 5,
    },
    {
      text: "Free inspection identified the exact source of our musty smell. Professional team and detailed report helped us make informed decisions.",
      name: "David Chen",
      location: "Brighton",
      rating: 5,
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Optimization for Melbourne Professional Mould Inspections */}
      <ServicePageSEO
        service="inspection"
        title="Professional Mould Inspection Melbourne - Free Thermal Imaging Assessment"
        description="Expert mould inspection Melbourne. Free thermal imaging assessment, air quality testing, professional detailed reports. IICRC certified technicians. Call 1800 954 117 for professional service."
        canonicalUrl="https://mouldrestoration.com.au/services/professional-mould-inspections"
      />
      <LocalBusinessSchema
        pageName="Professional Mould Inspections"
        pageUrl="https://mouldrestoration.com.au/services/professional-mould-inspections"
        serviceType="inspection"
        location="Melbourne"
      />
      <ServiceSchema
        serviceName="Professional Mould Inspection Melbourne"
        serviceDescription="Comprehensive mould detection and air quality testing using thermal imaging technology. IICRC-certified technicians provide professional detailed reports for Melbourne properties."
        serviceUrl="https://mouldrestoration.com.au/services/professional-mould-inspections"
        priceRange="$$"
      />
      {/* Professional Service Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium fixed top-0 left-0 right-0 z-[60] h-10">
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
          backgroundImage: `url(${professionalMouldHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left: Problem Identification */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-8 lg:mb-4">
                <Breadcrumb 
                  items={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'Professional Inspections', href: '', current: true },
                  ]} 
                />
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Suspected Mold in Your 
                <span className="text-yellow-300"> Melbourne Property?</span>
              </h1>
              
              <div className="bg-yellow-900/50 border border-yellow-500/50 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-yellow-100 font-medium mb-2">Mold can spread within 24-72 hours</p>
                    <p className="text-yellow-200 text-sm">Early detection prevents expensive damage and health risks. Get professional assessment before it's too late.</p>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Our Professional Inspection Solution
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                IICRC-certified thermal imaging and air quality testing identifies hidden mold before it becomes a major problem.
              </p>
              
              {/* Professional Service CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 h-auto bg-blue-600 hover:bg-blue-700 text-white"
                  asChild
                >
                  <a href="tel:1800954117">
                    Professional Inspection - Call Now
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
                    Schedule Free Inspection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-yellow-400">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current" />
                ))}
                <span className="text-white ml-2">4.9/5 from 180+ inspections</span>
              </div>
            </div>
            
            {/* Right: Inspection Details Card */}
            <div className="w-full lg:w-96">
              <Card className="p-6 bg-white/95 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">What's Included</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Thermometer className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Thermal Imaging</div>
                      <div className="text-blue-600 text-sm">Hidden moisture detection</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Shield className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Air Quality Testing</div>
                      <div className="text-green-600 text-sm">Spore count analysis</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Written Report</div>
                      <div className="text-orange-600 text-sm">Professional delivery</div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">FREE</div>
                  <div className="text-sm text-gray-600">Basic inspection with quote</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service-Specific Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Melbourne Customers Say About Our Inspections
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
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent Inspection Results</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <img
                  src={thermalImagingDevice}
                  alt="Professional thermal imaging equipment revealing hidden moisture behind Melbourne home walls during IICRC certified mould inspection"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <div className="text-sm font-semibold text-gray-900">Hidden moisture detected</div>
                  <div className="text-xs text-gray-600">Prevented $8,000 in damage</div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={cleanResidentialInterior}
                  alt="Clean healthy Melbourne home interior after following professional mould inspection recommendations and remediation treatment"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <div className="text-sm font-semibold text-gray-900">After remediation</div>
                  <div className="text-xs text-gray-600">Air quality: Excellent</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Detail - Comprehensive Explanation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Inspection Process - Complete Transparency
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every Melbourne mould inspection follows our IICRC-certified 5-step process using state-of-the-art equipment.
              Here's exactly what happens during your assessment and why each step matters for accurate results.
            </p>
          </div>

          <div className="space-y-12">
            {assessmentSteps.map((step, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">{step.description}</p>

                    {/* Detailed breakdown for each step */}
                    {index === 0 && (
                      <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                        <h4 className="font-bold text-gray-900 mb-3">What This Includes:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Visual examination of all accessible areas including walls, ceilings, floors, and concealed spaces</li>
                          <li>• Photography documentation of all findings with detailed captions</li>
                          <li>• Moisture meter readings at multiple points to identify water activity levels</li>
                          <li>• Assessment of HVAC systems, plumbing areas, and potential moisture sources</li>
                          <li>• Initial mould species identification based on visual characteristics and growth patterns</li>
                        </ul>
                        <p className="mt-4 text-sm text-gray-600 italic">
                          Equipment Used: Professional moisture meters (pin-type and pinless), digital cameras with macro lenses,
                          flashlights, and inspection mirrors for hard-to-reach areas.
                        </p>
                      </div>
                    )}

                    {index === 1 && (
                      <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                        <h4 className="font-bold text-gray-900 mb-3">Our Advanced Technology:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• FLIR thermal imaging cameras detect temperature variations as small as 0.1°C</li>
                          <li>• Identify moisture behind walls, under floors, and in ceiling cavities without damage</li>
                          <li>• Thermal signatures reveal patterns invisible to visual inspection</li>
                          <li>• Digital thermal images included in your comprehensive report</li>
                          <li>• Cross-reference thermal findings with moisture readings for accuracy</li>
                        </ul>
                        <p className="mt-4 text-sm text-gray-600 italic">
                          Why This Matters: 40% of mould growth occurs in hidden areas. Thermal imaging prevents costly surprises
                          by finding problems before they become visible to the naked eye.
                        </p>
                      </div>
                    )}

                    {index === 2 && (
                      <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                        <h4 className="font-bold text-gray-900 mb-3">Scientific Air Quality Assessment:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Air samples collected using calibrated sampling pumps at 15 litres per minute</li>
                          <li>• Multiple sampling locations including affected areas and clean reference points</li>
                          <li>• Laboratory analysis identifies specific mould species and spore concentrations</li>
                          <li>• Results compared against Australian indoor air quality guidelines</li>
                          <li>• Assessment of health risks based on spore types and concentrations found</li>
                        </ul>
                        <p className="mt-4 text-sm text-gray-600 italic">
                          Laboratory Partner: All samples processed by NATA-accredited laboratories using industry-standard
                          protocols for accurate, reliable results you can trust.
                        </p>
                      </div>
                    )}

                    {index === 3 && (
                      <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                        <h4 className="font-bold text-gray-900 mb-3">Root Cause Investigation:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Detailed investigation of plumbing systems, roof integrity, and drainage issues</li>
                          <li>• Ventilation assessment including exhaust fans, natural airflow, and humidity control</li>
                          <li>• Building envelope inspection for air leaks and thermal bridging</li>
                          <li>• Occupant behaviour factors that may contribute to moisture problems</li>
                          <li>• Seasonal and weather-related moisture patterns specific to Melbourne climate</li>
                        </ul>
                        <p className="mt-4 text-sm text-gray-600 italic">
                          Prevention Focus: Identifying the source prevents recurrence. Our 5+ years Melbourne experience
                          helps us spot common local issues like poor subfloor ventilation and seasonal condensation problems.
                        </p>
                      </div>
                    )}

                    {index === 4 && (
                      <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                        <h4 className="font-bold text-gray-900 mb-3">Your Comprehensive Action Plan:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Detailed written report with photographs, thermal images, and laboratory results</li>
                          <li>• Priority ranking of issues from immediate health risks to preventative measures</li>
                          <li>• Specific remediation recommendations with IICRC-compliant methods</li>
                          <li>• Timeline for addressing each issue based on severity and practical considerations</li>
                          <li>• Cost estimates for recommended work with transparent pricing breakdowns</li>
                        </ul>
                        <p className="mt-4 text-sm text-gray-600 italic">
                          Complete Transparency: Every recommendation includes the reason why it's needed, what happens if
                          delayed, and alternative approaches when applicable. No surprise costs or hidden fees.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Transparency Section */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Commitment to Complete Transparency</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Honest Pricing Approach</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Free basic visual inspection with any quote request</li>
                  <li>• Advanced thermal imaging and air quality testing from $299</li>
                  <li>• All costs explained upfront - no hidden fees or surprise charges</li>
                  <li>• Detailed quote provided professionally for any recommended work</li>
                  <li>• Payment options available including insurance claim assistance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Quality Guarantees</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 100% satisfaction guarantee on all inspection services</li>
                  <li>• IICRC-certified technicians with ongoing training requirements</li>
                  <li>• Professional liability insurance covering all assessment work</li>
                  <li>• Professional report delivery with detailed findings and recommendations</li>
                  <li>• Follow-up consultation included to discuss results and next steps</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQs for Process Transparency */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions About Our Inspection Process</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">How long does a typical inspection take?</h4>
                <p className="text-gray-700">
                  Basic visual inspections take 60-90 minutes. Comprehensive inspections with thermal imaging
                  and air quality testing take 2-3 hours depending on property size. We never rush - thoroughness is key.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">What should I do to prepare for the inspection?</h4>
                <p className="text-gray-700">
                  Ensure access to all areas including subfloors, roof spaces, and storage areas. Remove furniture
                  from suspected problem areas if possible. Have any relevant history available (leaks, repairs, etc.).
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">Do you find additional issues during inspections?</h4>
                <p className="text-gray-700">
                  Sometimes yes. If we discover significant issues beyond the original scope, we'll discuss them
                  immediately and get your approval before any additional testing. Complete transparency means no surprises.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">What happens after the inspection is complete?</h4>
                <p className="text-gray-700">
                  You'll receive a comprehensive written report promptly, followed by a detailed discussion of
                  findings. We'll explain all options, from immediate DIY steps to professional remediation services.
                </p>
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
              Why Choose Our Professional Inspections?
            </h2>
            <p className="text-xl text-gray-600">Comprehensive assessment services for Melbourne properties</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Free Visual Assessment</h3>
              <p className="text-gray-600 mb-4">Initial inspection at no cost to identify potential issues</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Visual mould assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Moisture level detection
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Basic recommendations
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 text-center border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Comprehensive
              </div>
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Inspection</h3>
              <p className="text-gray-600 mb-4">Thermal imaging and air quality testing for complete assessment</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Thermal imaging technology
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Air quality sampling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Detailed written report
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Commercial Assessment</h3>
              <p className="text-gray-600 mb-4">Specialized inspections for commercial and large properties</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Multi-zone testing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Laboratory analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Insurance documentation
                </li>
              </ul>
            </Card>
          </div>
          
          {/* Urgency Indicators */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-6 bg-yellow-50 border border-yellow-200">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-yellow-800">High demand in your area</span>
                </div>
                <p className="text-yellow-700 mb-4">7 inspections booked in Melbourne today</p>
                <div className="flex items-center justify-center gap-2 text-green-700">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium">Next available: Today at 3:30 PM</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Internal Linking for Service to Location SEO */}
      <StrategicServiceLinks
        currentService="professional-mould-inspections"
        maxLocationLinks={12}
        maxServiceLinks={4}
      />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};