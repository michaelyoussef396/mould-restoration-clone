import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Clock, Shield, CheckCircle, Star, AlertTriangle, Thermometer, Award, MapPin } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';
import { ServicePageSEO } from '@/components/seo/SEOHead';
import { LocalBusinessSchema, ServiceSchema } from '@/components/seo/SchemaMarkup';
import { StrategicServiceLinks } from '@/components/seo/InternalLinking';
import professionalMouldHero from '@/assets/professional-mould-hero-optimized.webp';
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
      <div className="bg-primary text-white py-2 px-4 text-center text-sm font-medium fixed top-0 left-0 right-0 z-[60] h-10">
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
                  className="text-lg px-8 py-4 h-auto bg-primary hover:bg-primary-600 text-white"
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
                <h3 className="text-xl font-bold text-charcoal mb-4 text-center">What's Included</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-columbia rounded-lg">
                    <Thermometer className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold text-charcoal">Thermal Imaging</div>
                      <div className="text-primary text-sm">Hidden moisture detection</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                    <Shield className="h-5 w-5 text-success" />
                    <div>
                      <div className="font-semibold text-charcoal">Air Quality Testing</div>
                      <div className="text-success text-sm">Spore count analysis</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <div>
                      <div className="font-semibold text-charcoal">Written Report</div>
                      <div className="text-orange-600 text-sm">Professional delivery</div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-6 p-4 bg-success/10 rounded-lg">
                  <div className="text-2xl font-bold text-success">FREE</div>
                  <div className="text-sm text-professional">Basic inspection with quote</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Melbourne Service Areas - Professional Mould Inspections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Professional Mould Inspections Across Melbourne
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Premium thermal imaging inspections for Melbourne's most prestigious properties.
              Specializing in heritage homes, luxury residences, and detailed assessments.
            </p>
          </div>

          {/* Geographic Service Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

            {/* Premium Eastern Suburbs */}
            <Card className="p-6 border-2 border-primary">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Premium Eastern Suburbs
              </h3>
              <p className="text-professional mb-4">Heritage homes & luxury properties requiring detailed thermal imaging assessments</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/toorak" className="block text-primary hover:text-primary-600 font-medium">Toorak - Heritage mansion inspections</a>
                <a href="/locations/brighton" className="block text-primary hover:text-primary-600 font-medium">Brighton - Coastal property specialists</a>
                <a href="/locations/camberwell" className="block text-primary hover:text-primary-600 font-medium">Camberwell - Federation home experts</a>
                <a href="/locations/hawthorn" className="block text-primary hover:text-primary-600 font-medium">Hawthorn - Victorian terrace inspections</a>
                <a href="/locations/armadale" className="block text-primary hover:text-primary-600 font-medium">Armadale - Period home assessments</a>
                <a href="/locations/malvern" className="block text-primary hover:text-primary-600 font-medium">Malvern - Heritage property inspections</a>
                <a href="/locations/kew" className="block text-primary hover:text-primary-600 font-medium">Kew - Premium residence assessments</a>
                <a href="/locations/south-yarra" className="block text-primary hover:text-primary-600 font-medium">South Yarra - Luxury apartment inspections</a>
              </div>
            </Card>

            {/* Inner Melbourne Heritage */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-success" />
                Inner Melbourne Heritage
              </h3>
              <p className="text-professional mb-4">Historic properties requiring specialised thermal imaging for preservation</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/carlton" className="block text-primary hover:text-primary-600 font-medium">Carlton - Victorian terraces</a>
                <a href="/locations/fitzroy" className="block text-primary hover:text-primary-600 font-medium">Fitzroy - Heritage warehouse conversions</a>
                <a href="/locations/richmond" className="block text-primary hover:text-primary-600 font-medium">Richmond - Worker's cottages</a>
                <a href="/locations/melbourne-cbd" className="block text-primary hover:text-primary-600 font-medium">Melbourne CBD - Heritage apartments</a>
                <a href="/locations/east-melbourne" className="block text-primary hover:text-primary-600 font-medium">East Melbourne - Grand terraces</a>
                <a href="/locations/south-melbourne" className="block text-primary hover:text-primary-600 font-medium">South Melbourne - Victorian homes</a>
                <a href="/locations/north-melbourne" className="block text-primary hover:text-primary-600 font-medium">North Melbourne - Heritage properties</a>
                <a href="/locations/west-melbourne" className="block text-primary hover:text-primary-600 font-medium">West Melbourne - Historic buildings</a>
              </div>
            </Card>

            {/* Bayside & Coastal Premium */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600" />
                Bayside & Coastal Premium
              </h3>
              <p className="text-professional mb-4">Salt air exposure requiring specialised moisture detection expertise</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/brighton-east" className="block text-primary hover:text-primary-600 font-medium">Brighton East - Coastal inspections</a>
                <a href="/locations/sandringham" className="block text-primary hover:text-primary-600 font-medium">Sandringham - Beachside properties</a>
                <a href="/locations/hampton" className="block text-primary hover:text-primary-600 font-medium">Hampton - Bay area homes</a>
                <a href="/locations/mentone" className="block text-primary hover:text-primary-600 font-medium">Mentone - Coastal heritage homes</a>
                <a href="/locations/mordialloc" className="block text-primary hover:text-primary-600 font-medium">Mordialloc - Waterfront properties</a>
                <a href="/locations/edithvale" className="block text-primary hover:text-primary-600 font-medium">Edithvale - Salt air specialists</a>
                <a href="/locations/aspendale" className="block text-primary hover:text-primary-600 font-medium">Aspendale - Coastal moisture experts</a>
                <a href="/locations/williamstown" className="block text-primary hover:text-primary-600 font-medium">Williamstown - Historic port properties</a>
              </div>
            </Card>

            {/* Complete Melbourne Coverage */}
            <Card className="p-6 bg-columbia border-2 border-primary lg:col-span-3">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2 justify-center">
                <MapPin className="h-5 w-5 text-primary" />
                Complete Melbourne Coverage - All 144 Suburbs
              </h3>
              <p className="text-professional mb-4 text-center">Professional thermal imaging inspections available across all Melbourne suburbs</p>
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1 text-xs mb-4">
                <span className="text-professional">Albert Park</span>
                <span className="text-professional">Altona</span>
                <span className="text-professional">Ascot Vale</span>
                <span className="text-professional">Ashwood</span>
                <span className="text-professional">Balaclava</span>
                <span className="text-professional">Balwyn</span>
                <span className="text-professional">Bentleigh</span>
                <span className="text-professional">Blackburn</span>
                <span className="text-professional">Bonbeach</span>
                <span className="text-professional">Box Hill</span>
                <span className="text-professional">Broadmeadows</span>
                <span className="text-professional">Brunswick</span>
                <span className="text-professional">Bundoora</span>
                <span className="text-professional">Burwood</span>
                <span className="text-professional">Carnegie</span>
                <span className="text-professional">Carrum</span>
                <span className="text-professional">Caulfield</span>
                <span className="text-professional">Chadstone</span>
                <span className="text-professional">Clayton</span>
                <span className="text-professional">Coburg</span>
                <span className="text-professional">Croydon</span>
                <span className="text-professional">Dandenong</span>
                <span className="text-professional">Docklands</span>
                <span className="text-professional">Doncaster</span>
                <span className="text-professional">Elsternwick</span>
                <span className="text-professional">Elwood</span>
                <span className="text-professional">Epping</span>
                <span className="text-professional">Essendon</span>
                <span className="text-professional">Fairfield</span>
                <span className="text-professional">Flemington</span>
                <span className="text-professional">Footscray</span>
                <span className="text-professional">Forest Hill</span>
                <span className="text-professional">Glen Iris</span>
                <span className="text-professional">Glen Waverley</span>
                <span className="text-professional">Heidelberg</span>
                <span className="text-professional">Hoppers Crossing</span>
                <span className="text-professional">Hughesdale</span>
                <span className="text-professional">Huntingdale</span>
                <span className="text-professional">Ivanhoe</span>
                <span className="text-professional">Kensington</span>
                <span className="text-professional">Kooyong</span>
                <span className="text-professional">Lalor</span>
                <span className="text-professional">Laverton</span>
                <span className="text-professional">Lilydale</span>
                <span className="text-professional">McKinnon</span>
                <span className="text-professional">Malvern East</span>
                <span className="text-professional">Manor Lakes</span>
                <span className="text-professional">Maribyrnong</span>
                <span className="text-professional">Middle Park</span>
                <span className="text-professional">Mill Park</span>
                <span className="text-professional">Mitcham</span>
                <span className="text-professional">Moonee Ponds</span>
                <span className="text-professional">Mount Waverley</span>
                <span className="text-professional">Mulgrave</span>
                <span className="text-professional">Murrumbeena</span>
                <span className="text-professional">Newport</span>
                <span className="text-professional">Noble Park</span>
                <span className="text-professional">Northcote</span>
                <span className="text-professional">Notting Hill</span>
                <span className="text-professional">Nunawading</span>
                <span className="text-professional">Oakleigh</span>
                <span className="text-professional">Ormond</span>
                <span className="text-professional">Parkdale</span>
                <span className="text-professional">Parkville</span>
                <span className="text-professional">Point Cook</span>
                <span className="text-professional">Port Melbourne</span>
                <span className="text-professional">Prahran</span>
                <span className="text-professional">Preston</span>
                <span className="text-professional">Reservoir</span>
                <span className="text-professional">Ringwood</span>
                <span className="text-professional">Seddon</span>
                <span className="text-professional">Southbank</span>
                <span className="text-professional">Spotswood</span>
                <span className="text-professional">Springvale</span>
                <span className="text-professional">St Kilda</span>
                <span className="text-professional">Sunshine</span>
                <span className="text-professional">Tarneit</span>
                <span className="text-professional">Templestowe</span>
                <span className="text-professional">Thomastown</span>
                <span className="text-professional">Thornbury</span>
                <span className="text-professional">Truganina</span>
                <span className="text-professional">Vermont</span>
                <span className="text-professional">Werribee</span>
                <span className="text-professional">Wheelers Hill</span>
                <span className="text-professional">Williams Landing</span>
                <span className="text-professional">Windsor</span>
                <span className="text-professional">Wyndham Vale</span>
                <span className="text-professional">Yarraville</span>
              </div>
              <div className="text-center">
                <Button size="sm" className="bg-primary hover:bg-primary-600 text-white">
                  <Phone className="h-4 w-4 mr-2" />
                  Professional Service: 1800 954 117
                </Button>
              </div>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-charcoal mb-4">Ready for Professional Thermal Imaging Inspection?</h3>
            <p className="text-professional mb-6 max-w-2xl mx-auto">
              Our IICRC-certified technicians provide comprehensive thermal imaging inspections across Melbourne.
              ABN: 47 683 089 652 | Professional service 7am-7pm every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-600 text-white" asChild>
                <a href="tel:1800954117">
                  <Phone className="h-5 w-5 mr-2" />
                  Call for Professional Inspection
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

      {/* Service-Specific Social Proof */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
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
                  <div className="font-semibold text-charcoal">{testimonial.name}</div>
                  <div className="text-professional text-sm">{testimonial.location}</div>
                </div>
              </Card>
            ))}
          </div>

          {/* Before/After Gallery */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-charcoal mb-8">Recent Inspection Results</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <img
                  src={thermalImagingDevice}
                  alt="Professional thermal imaging equipment revealing hidden moisture behind Melbourne home walls during IICRC certified mould inspection"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <div className="text-sm font-semibold text-charcoal">Hidden moisture detected</div>
                  <div className="text-xs text-professional">Prevented $8,000 in damage</div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={cleanResidentialInterior}
                  alt="Clean healthy Melbourne home interior after following professional mould inspection recommendations and remediation treatment"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <div className="text-sm font-semibold text-charcoal">After remediation</div>
                  <div className="text-xs text-professional">Air quality: Excellent</div>
                </div>
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
              Why Choose Our Professional Inspections?
            </h2>
            <p className="text-xl text-professional">Comprehensive assessment services for Melbourne properties</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-4">Free Visual Assessment</h3>
              <p className="text-professional mb-4">Initial inspection at no cost to identify potential issues</p>
              <ul className="space-y-2 text-sm text-professional">
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

            <Card className="p-6 text-center border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Comprehensive
              </div>
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-4">Advanced Inspection</h3>
              <p className="text-professional mb-4">Thermal imaging and air quality testing for complete assessment</p>
              <ul className="space-y-2 text-sm text-professional">
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
              <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-4">Commercial Assessment</h3>
              <p className="text-professional mb-4">Specialized inspections for commercial and large properties</p>
              <ul className="space-y-2 text-sm text-professional">
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
        currentService="/services/professional-mould-inspections"
      />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};