import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Clock, Shield, CheckCircle, Star, AlertTriangle, Thermometer, Award } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';
import { ServicePageSEO } from '@/components/seo/SEOHead';
import { LocalBusinessSchema, ServiceSchema } from '@/components/seo/SchemaMarkup';
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
      description: 'Receive a comprehensive written report with prioritized recommendations, action plan, and timeline for complete remediation.'
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
        description="Expert mould inspection Melbourne. Free thermal imaging assessment, air quality testing, same-day detailed reports. IICRC certified technicians. Call 1800 954 117 for professional service."
      />
      <LocalBusinessSchema
        pageName="Professional Mould Inspections"
        pageUrl="https://mouldrestoration.com.au/services/professional-mould-inspections"
        serviceType="inspection"
        location="Melbourne"
      />
      <ServiceSchema
        serviceName="Professional Mould Inspection Melbourne"
        serviceDescription="Comprehensive mould detection and air quality testing using thermal imaging technology. IICRC-certified technicians provide same-day detailed reports for Melbourne properties."
        serviceUrl="https://mouldrestoration.com.au/services/professional-mould-inspections"
        priceRange="$$"
      />
      {/* Emergency Bar */}
      <div className="bg-emergency-orange text-white py-2 px-4 text-center text-sm font-medium fixed top-0 left-0 right-0 z-[60] h-10">
        <div className="container mx-auto flex items-center justify-between">
          <span className="hidden sm:block">🚨 Suspected Mold Emergency? We respond within 2 hours</span>
          <span className="sm:hidden">Emergency Response Available</span>
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
              
              {/* Emergency vs. Scheduled CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  variant="emergency" 
                  size="lg" 
                  className="text-lg px-8 py-4 h-auto"
                  asChild
                >
                  <a href="tel:1800954117">
                    Emergency Inspection - Call Now
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
                      <div className="text-orange-600 text-sm">Same-day delivery</div>
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
                  alt="Thermal imaging revealing hidden moisture"
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
                  alt="Clean interior after following inspection recommendations"
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

      {/* Process Detail */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Inspection Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive 5-step assessment using advanced technology and industry expertise
            </p>
          </div>
          
          <div className="space-y-8">
            {assessmentSteps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                </div>
              </div>
            ))}
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

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};