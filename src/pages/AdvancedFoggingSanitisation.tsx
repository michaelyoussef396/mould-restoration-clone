import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Clock, CheckCircle, Star, AlertTriangle, Shield, Award, MapPin } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';
import { ServicePageSEO } from '@/components/seo/SEOHead';
import { StrategicServiceLinks } from '@/components/seo/InternalLinking';
import advancedFoggingHero from '@/assets/advanced-fogging-hero-optimized.webp';
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
      description: 'Allowing proper contact time for complete spore elimination and sanitisation.',
    },
    {
      step: 5,
      title: 'Post-Treatment Verification',
      description: 'Air quality testing and surface verification to confirm complete sanitisation.',
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
      text: "After water damage, fogging sanitisation was the final step. Every corner was treated - even behind furniture. Professional team, thorough process.",
      name: "Mark Stevens",
      location: "Camberwell",
      rating: 5,
    }
  ];

  return (
    <div className="min-h-screen bg-background">
            {/* SEO Optimization for AdvancedFoggingSanitisation */}
      <ServicePageSEO
        service="fogging"
        title="Advanced Fogging Sanitisation Melbourne - ULV Professional Treatment"
        description="Advanced ULV fogging sanitisation Melbourne. Penetrates hard-to-reach spaces, comprehensive treatment, professional equipment. Expert Melbourne service. Call 1800 954 117."
        canonicalUrl="https://mouldrestoration.com.au/services/advanced-fogging-sanitisation"
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
              
              <div className="bg-blue-900/50 border border-primary/50 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-blue-100 font-medium mb-2">Mould spores hide in impossible-to-reach places</p>
                    <p className="text-blue-200 text-sm">ULV fogging penetrates every surface for complete sanitisation.</p>
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
                  className="bg-primary hover:bg-primary-600 text-white text-lg px-8 py-4 h-auto"
                  size="lg"
                  asChild
                >
                  <a href="tel:1800954117">
                    Professional Fogging - Call Now
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
                <h3 className="text-xl font-bold text-charcoal mb-4 text-center">ULV Fogging Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-columbia rounded-lg">
                    <Shield className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold text-charcoal">Complete Coverage</div>
                      <div className="text-primary text-sm">Reaches every surface</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                    <Award className="h-5 w-5 text-success" />
                    <div>
                      <div className="font-semibold text-charcoal">Eco-Friendly</div>
                      <div className="text-success text-sm">Safe for family & pets</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                    <div>
                      <div className="font-semibold text-charcoal">Air Quality Testing</div>
                      <div className="text-purple-600 text-sm">Verified results</div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-6 p-4 bg-columbia rounded-lg">
                  <div className="text-2xl font-bold text-primary">Custom Quote</div>
                  <div className="text-sm text-professional">Based on area size</div>
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
                  <div className="font-semibold text-charcoal">{testimonial.name}</div>
                  <div className="text-professional text-sm">{testimonial.location}</div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Before/After Gallery */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-charcoal mb-8">Advanced Fogging Equipment & Process</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <img
                  src={ulvFoggingEquipment}
                  alt="Professional ULV fogging equipment setup for advanced mould sanitisation in Melbourne property with hospital-grade technology"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <div className="text-sm font-semibold text-charcoal">Professional ULV equipment</div>
                  <div className="text-xs text-professional">Hospital-grade sanitisation</div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={sanitisationProcess}
                  alt="Advanced fogging sanitisation process in action treating Melbourne home with penetrating antimicrobial mist for complete mould elimination"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <div className="text-sm font-semibold text-charcoal">Complete room treatment</div>
                  <div className="text-xs text-professional">Every surface sanitized</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Melbourne Service Areas - Advanced Fogging Sanitisation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Advanced Fogging Sanitisation Across Melbourne
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Ultra-low volume fogging technology reaches every corner and crevice across Melbourne properties.
              Specialized penetration for complete mould spore elimination and air sanitisation.
            </p>
          </div>

          {/* Geographic Service Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

            {/* Inner Melbourne */}
            <Card className="p-6 border-2 border-primary">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Inner Melbourne Heritage
              </h3>
              <p className="text-professional mb-4">Historic properties with complex layouts requiring specialised fogging penetration</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/carlton" className="block text-primary hover:text-primary-600 font-medium">Carlton - Victorian terrace deep sanitisation</a>
                <a href="/locations/collingwood" className="block text-primary hover:text-primary-600 font-medium">Collingwood - Warehouse conversion fogging</a>
                <a href="/locations/abbotsford" className="block text-primary hover:text-primary-600 font-medium">Abbotsford - Industrial space sanitisation</a>
                <a href="/locations/fitzroy" className="block text-primary hover:text-primary-600 font-medium">Fitzroy - Heritage building treatment</a>
                <a href="/locations/richmond" className="block text-primary hover:text-primary-600 font-medium">Richmond - Worker's cottage fogging</a>
                <a href="/locations/melbourne-cbd" className="block text-primary hover:text-primary-600 font-medium">Melbourne CBD - Apartment sanitisation</a>
                <a href="/locations/south-melbourne" className="block text-primary hover:text-primary-600 font-medium">South Melbourne - Commercial fogging</a>
                <a href="/locations/north-melbourne" className="block text-primary hover:text-primary-600 font-medium">North Melbourne - Townhouse treatment</a>
              </div>
            </Card>

            {/* Eastern Suburbs Professional */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-success" />
                Eastern Suburbs Professional
              </h3>
              <p className="text-professional mb-4">Premium properties requiring comprehensive air quality restoration and sanitisation</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/toorak" className="block text-primary hover:text-primary-600 font-medium">Toorak - Luxury home complete fogging</a>
                <a href="/locations/armadale" className="block text-primary hover:text-primary-600 font-medium">Armadale - Heritage mansion treatment</a>
                <a href="/locations/malvern" className="block text-primary hover:text-primary-600 font-medium">Malvern - Period home sanitisation</a>
                <a href="/locations/camberwell" className="block text-primary hover:text-primary-600 font-medium">Camberwell - Federation home fogging</a>
                <a href="/locations/hawthorn" className="block text-primary hover:text-primary-600 font-medium">Hawthorn - Multi-level penetration</a>
                <a href="/locations/kew" className="block text-primary hover:text-primary-600 font-medium">Kew - Family home sanitisation</a>
                <a href="/locations/surrey-hills" className="block text-primary hover:text-primary-600 font-medium">Surrey Hills - Complex layout fogging</a>
                <a href="/locations/mont-albert" className="block text-primary hover:text-primary-600 font-medium">Mont Albert - Whole house treatment</a>
              </div>
            </Card>

            {/* Western Suburbs Coverage */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600" />
                Western Suburbs Coverage
              </h3>
              <p className="text-professional mb-4">Family homes and commercial spaces with comprehensive fogging coverage</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/moonee-ponds" className="block text-primary hover:text-primary-600 font-medium">Moonee Ponds - Family home fogging</a>
                <a href="/locations/essendon" className="block text-primary hover:text-primary-600 font-medium">Essendon - Multi-room treatment</a>
                <a href="/locations/maribyrnong" className="block text-primary hover:text-primary-600 font-medium">Maribyrnong - Industrial fogging</a>
                <a href="/locations/footscray" className="block text-primary hover:text-primary-600 font-medium">Footscray - Commercial sanitisation</a>
                <a href="/locations/yarraville" className="block text-primary hover:text-primary-600 font-medium">Yarraville - Heritage cottage treatment</a>
                <a href="/locations/williamstown" className="block text-primary hover:text-primary-600 font-medium">Williamstown - Coastal property fogging</a>
                <a href="/locations/newport" className="block text-primary hover:text-primary-600 font-medium">Newport - Warehouse sanitisation</a>
                <a href="/locations/altona" className="block text-primary hover:text-primary-600 font-medium">Altona - Family home treatment</a>
              </div>
            </Card>

            {/* Bayside & Coastal Specialists */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-teal-600" />
                Bayside & Coastal Specialists
              </h3>
              <p className="text-professional mb-4">Salt air environments requiring specialised antimicrobial fogging solutions</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/brighton" className="block text-primary hover:text-primary-600 font-medium">Brighton - Beachside property fogging</a>
                <a href="/locations/sandringham" className="block text-primary hover:text-primary-600 font-medium">Sandringham - Coastal home treatment</a>
                <a href="/locations/hampton" className="block text-primary hover:text-primary-600 font-medium">Hampton - Bay area sanitisation</a>
                <a href="/locations/mentone" className="block text-primary hover:text-primary-600 font-medium">Mentone - Heritage coastal fogging</a>
                <a href="/locations/mordialloc" className="block text-primary hover:text-primary-600 font-medium">Mordialloc - Waterfront treatment</a>
                <a href="/locations/frankston" className="block text-primary hover:text-primary-600 font-medium">Frankston - Coastal property sanitisation</a>
                <a href="/locations/st-kilda" className="block text-primary hover:text-primary-600 font-medium">St Kilda - Apartment complex fogging</a>
                <a href="/locations/elwood" className="block text-primary hover:text-primary-600 font-medium">Elwood - Beachside unit treatment</a>
              </div>
            </Card>

            {/* Northern Growth Corridors */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-orange-600" />
                Northern Growth Corridors
              </h3>
              <p className="text-professional mb-4">Modern developments and established suburbs with comprehensive fogging services</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/preston" className="block text-primary hover:text-primary-600 font-medium">Preston - Modern home fogging</a>
                <a href="/locations/thornbury" className="block text-primary hover:text-primary-600 font-medium">Thornbury - Family property treatment</a>
                <a href="/locations/northcote" className="block text-primary hover:text-primary-600 font-medium">Northcote - Multi-level sanitisation</a>
                <a href="/locations/brunswick" className="block text-primary hover:text-primary-600 font-medium">Brunswick - Townhouse fogging</a>
                <a href="/locations/coburg" className="block text-primary hover:text-primary-600 font-medium">Coburg - Residential treatment</a>
                <a href="/locations/reservoir" className="block text-primary hover:text-primary-600 font-medium">Reservoir - Family home sanitisation</a>
                <a href="/locations/heidelberg" className="block text-primary hover:text-primary-600 font-medium">Heidelberg - Heritage home fogging</a>
                <a href="/locations/ivanhoe" className="block text-primary hover:text-primary-600 font-medium">Ivanhoe - Premium property treatment</a>
              </div>
            </Card>

            {/* Southern & Southeastern Expansion */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-indigo-600" />
                Southern & Southeastern Expansion
              </h3>
              <p className="text-professional mb-4">Growth areas and established suburbs with advanced fogging technology</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/clayton" className="block text-primary hover:text-primary-600 font-medium">Clayton - University area fogging</a>
                <a href="/locations/glen-waverley" className="block text-primary hover:text-primary-600 font-medium">Glen Waverley - Family home treatment</a>
                <a href="/locations/box-hill" className="block text-primary hover:text-primary-600 font-medium">Box Hill - Commercial sanitisation</a>
                <a href="/locations/ringwood" className="block text-primary hover:text-primary-600 font-medium">Ringwood - Residential fogging</a>
                <a href="/locations/dandenong" className="block text-primary hover:text-primary-600 font-medium">Dandenong - Industrial treatment</a>
                <a href="/locations/chadstone" className="block text-primary hover:text-primary-600 font-medium">Chadstone - Modern home fogging</a>
                <a href="/locations/oakleigh" className="block text-primary hover:text-primary-600 font-medium">Oakleigh - Traditional home treatment</a>
                <a href="/locations/bentleigh" className="block text-primary hover:text-primary-600 font-medium">Bentleigh - Heritage property sanitisation</a>
              </div>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-charcoal mb-4">Ready for Advanced Fogging Sanitisation?</h3>
            <p className="text-professional mb-6 max-w-2xl mx-auto">
              Our ULV fogging technology penetrates every corner and crevice across Melbourne.
              ABN: 47 683 089 652 | Professional service 7am-7pm every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-600 text-white" asChild>
                <a href="tel:1800954117">
                  <Phone className="h-5 w-5 mr-2" />
                  Call for Professional Fogging
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#booking-form">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Schedule Treatment
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Detail */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Our Advanced Fogging Process
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              5-step ULV fogging process ensuring complete sanitisation and spore elimination
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {foggingProcess.map((process, index) => (
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
              Why Choose ULV Fogging Sanitisation?
            </h2>
            <p className="text-xl text-professional">Superior sanitisation technology for complete protection</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-4">Deep Penetration</h3>
              <p className="text-professional mb-4">Fine mist reaches impossible-to-access areas</p>
              <ul className="space-y-2 text-sm text-professional">
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
            
            <Card className="p-6 text-center border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-4">Widespread Coverage</h3>
              <p className="text-professional mb-4">Sanitizes large areas quickly and efficiently</p>
              <ul className="space-y-2 text-sm text-professional">
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
                  Professional completion
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 text-center">
              <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-4">Safe & Effective</h3>
              <p className="text-professional mb-4">Eco-friendly solutions safe for families</p>
              <ul className="space-y-2 text-sm text-professional">
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
            <Card className="p-6 bg-success/10 border border-green-200">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-green-800">Fogging Equipment Available</span>
                </div>
                <p className="text-green-700 mb-4">3 ULV fogging treatments scheduled in Melbourne today</p>
                <div className="flex items-center justify-center gap-2 text-blue-700">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="font-medium">Next available slot: Professional booking available</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Areas We Serve Section - Advanced Fogging Sanitisation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Advanced Fogging Sanitisation Across Melbourne
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Professional ULV fogging technology reaching every surface and hidden space throughout Melbourne.
              Our advanced sanitisation systems penetrate areas impossible to reach with traditional cleaning methods,
              ensuring complete mould spore elimination and long-term protection.
            </p>
          </div>

          {/* Specialist Fogging Applications */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Large Commercial Spaces */}
            <Card className="p-6 border-2 border-success">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-success" />
                Large Commercial Facilities
              </h3>
              <p className="text-professional mb-4">ULV fogging for warehouses, offices, and industrial facilities requiring comprehensive sanitisation</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/melbourne-cbd" className="block text-primary hover:text-primary-600 font-medium">Melbourne CBD - Office tower fogging</a>
                <a href="/locations/docklands" className="block text-primary hover:text-primary-600 font-medium">Docklands - High-rise sanitisation</a>
                <a href="/locations/port-melbourne" className="block text-primary hover:text-primary-600 font-medium">Port Melbourne - Warehouse fogging</a>
                <a href="/locations/footscray" className="block text-primary hover:text-primary-600 font-medium">Footscray - Industrial facility sanitisation</a>
                <a href="/locations/brunswick" className="block text-primary hover:text-primary-600 font-medium">Brunswick - Commercial space fogging</a>
                <a href="/locations/preston" className="block text-primary hover:text-primary-600 font-medium">Preston - Manufacturing facility treatment</a>
              </div>
            </Card>

            {/* Heritage Properties */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-600" />
                Heritage & Character Properties
              </h3>
              <p className="text-professional mb-4">Gentle fogging systems safe for delicate surfaces and historical materials</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/toorak" className="block text-primary hover:text-primary-600 font-medium">Toorak - Heritage mansion sanitisation</a>
                <a href="/locations/east-melbourne" className="block text-primary hover:text-primary-600 font-medium">East Melbourne - Victorian terrace fogging</a>
                <a href="/locations/carlton" className="block text-primary hover:text-primary-600 font-medium">Carlton - Period property treatment</a>
                <a href="/locations/fitzroy" className="block text-primary hover:text-primary-600 font-medium">Fitzroy - Heritage conversion sanitisation</a>
                <a href="/locations/richmond" className="block text-primary hover:text-primary-600 font-medium">Richmond - Character home fogging</a>
                <a href="/locations/st-kilda" className="block text-primary hover:text-primary-600 font-medium">St Kilda - Period apartment treatment</a>
              </div>
            </Card>

            {/* Multi-Level Properties */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Multi-Level Properties
              </h3>
              <p className="text-professional mb-4">Comprehensive fogging systems for complex architectural layouts and multiple floors</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/south-yarra" className="block text-primary hover:text-primary-600 font-medium">South Yarra - Luxury apartment fogging</a>
                <a href="/locations/southbank" className="block text-primary hover:text-primary-600 font-medium">Southbank - High-rise sanitisation</a>
                <a href="/locations/hawthorn" className="block text-primary hover:text-primary-600 font-medium">Hawthorn - Multi-level home treatment</a>
                <a href="/locations/camberwell" className="block text-primary hover:text-primary-600 font-medium">Camberwell - Two-storey home fogging</a>
                <a href="/locations/armadale" className="block text-primary hover:text-primary-600 font-medium">Armadale - Period mansion sanitisation</a>
                <a href="/locations/malvern" className="block text-primary hover:text-primary-600 font-medium">Malvern - Multi-floor property treatment</a>
              </div>
            </Card>

            {/* Hard-to-Reach Areas */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-orange-600" />
                Hard-to-Reach Specialists
              </h3>
              <p className="text-professional mb-4">Fogging penetration for ceiling cavities, wall voids, and inaccessible spaces</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/kew" className="block text-primary hover:text-primary-600 font-medium">Kew - Ceiling cavity treatment</a>
                <a href="/locations/glen-iris" className="block text-primary hover:text-primary-600 font-medium">Glen Iris - Wall void sanitisation</a>
                <a href="/locations/brighton" className="block text-primary hover:text-primary-600 font-medium">Brighton - Subfloor fogging</a>
                <a href="/locations/sandringham" className="block text-primary hover:text-primary-600 font-medium">Sandringham - Roof space treatment</a>
                <a href="/locations/mentone" className="block text-primary hover:text-primary-600 font-medium">Mentone - Crawl space sanitisation</a>
                <a href="/locations/mordialloc" className="block text-primary hover:text-primary-600 font-medium">Mordialloc - Cavity wall fogging</a>
              </div>
            </Card>

            {/* HVAC System Treatment */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-teal-600" />
                HVAC System Sanitisation
              </h3>
              <p className="text-professional mb-4">Specialised fogging for air conditioning systems, ductwork, and ventilation networks</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/box-hill" className="block text-primary hover:text-primary-600 font-medium">Box Hill - Commercial HVAC fogging</a>
                <a href="/locations/clayton" className="block text-primary hover:text-primary-600 font-medium">Clayton - University facility treatment</a>
                <a href="/locations/glen-waverley" className="block text-primary hover:text-primary-600 font-medium">Glen Waverley - Residential duct sanitisation</a>
                <a href="/locations/oakleigh" className="block text-primary hover:text-primary-600 font-medium">Oakleigh - Split system fogging</a>
                <a href="/locations/bentleigh" className="block text-primary hover:text-primary-600 font-medium">Bentleigh - Ducted heating treatment</a>
                <a href="/locations/cheltenham" className="block text-primary hover:text-primary-600 font-medium">Cheltenham - Central air system sanitisation</a>
              </div>
            </Card>

            {/* Preventive Treatment Programs */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-indigo-600" />
                Preventive Treatment Programs
              </h3>
              <p className="text-professional mb-4">Regular fogging schedules for ongoing protection and mould prevention</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/williamstown" className="block text-primary hover:text-primary-600 font-medium">Williamstown - Coastal property protection</a>
                <a href="/locations/altona" className="block text-primary hover:text-primary-600 font-medium">Altona - Humidity control fogging</a>
                <a href="/locations/maribyrnong" className="block text-primary hover:text-primary-600 font-medium">Maribyrnong - Riverside preventive treatment</a>
                <a href="/locations/yarraville" className="block text-primary hover:text-primary-600 font-medium">Yarraville - Heritage maintenance fogging</a>
                <a href="/locations/moonee-ponds" className="block text-primary hover:text-primary-600 font-medium">Moonee Ponds - Quarterly treatment programs</a>
                <a href="/locations/essendon" className="block text-primary hover:text-primary-600 font-medium">Essendon - Seasonal protection fogging</a>
              </div>
            </Card>
          </div>

          {/* Advanced Technology Features */}
          <div className="bg-success/10 rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-success">ULV</div>
                <div className="text-professional">Ultra-Low Volume Technology</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-success">360°</div>
                <div className="text-professional">Complete Coverage</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-success">0.5-50μm</div>
                <div className="text-professional">Particle Size Range</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-success">EPA</div>
                <div className="text-professional">Approved Sanitisers</div>
              </div>
            </div>
          </div>

          {/* Professional Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-charcoal mb-4">Need Advanced Fogging Sanitisation?</h3>
            <p className="text-professional mb-6 max-w-2xl mx-auto">
              Our ULV fogging technology reaches every surface and hidden space traditional cleaning misses.
              Professional sanitisation with long-lasting protection across all Melbourne properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                <a href="tel:1800954117">
                  <Phone className="h-5 w-5 mr-2" />
                  Advanced Fogging Service
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Schedule Treatment
                </a>
              </Button>
            </div>
            <div className="mt-4 text-sm text-professional">
              ABN: 47 683 089 652 | IICRC Certified | Professional ULV Fogging Equipment
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Internal Linking for Service to Location SEO */}
      <StrategicServiceLinks
        currentService="/services/advanced-fogging-sanitisation"
      />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};