import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, CheckCircle, Star, AlertTriangle, Shield, Award } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';
import { ServicePageSEO } from '@/components/seo/SEOHead';
import { StrategicServiceLinks } from '@/components/seo/InternalLinking';
import subfloorRemediationHero from '@/assets/subfloor-remediation-hero-optimized.webp';
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
      {/* SEO Optimization for Subfloor Mould Remediation */}
      <ServicePageSEO
        service="remediation"
        title="Subfloor Mould Remediation Melbourne - Under House Specialists"
        description="Expert subfloor mould remediation Melbourne. Under house moisture control, ventilation improvement, foundation protection. Professional Melbourne service. Call 1800 954 117."
        canonicalUrl="https://mouldrestoration.com.au/services/subfloor-mould-remediation"
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
                  className="bg-primary hover:bg-primary-600 text-white text-lg px-8 py-4 h-auto"
                  size="lg"
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
                <h3 className="text-xl font-bold text-charcoal mb-4 text-center">Subfloor Remediation Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                    <Shield className="h-5 w-5 text-orange-600" />
                    <div>
                      <div className="font-semibold text-charcoal">Thorough Inspection</div>
                      <div className="text-orange-600 text-sm">Advanced detection tools</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-columbia rounded-lg">
                    <Award className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold text-charcoal">Moisture Control</div>
                      <div className="text-primary text-sm">Source elimination</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <div>
                      <div className="font-semibold text-charcoal">Ventilation Upgrade</div>
                      <div className="text-success text-sm">Long-term prevention</div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-6 p-4 bg-columbia rounded-lg">
                  <div className="text-2xl font-bold text-primary">Custom Quote</div>
                  <div className="text-sm text-professional">Subfloor assessment included</div>
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
                  <div className="font-semibold text-charcoal">{testimonial.name}</div>
                  <div className="text-professional text-sm">{testimonial.location}</div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Before/After Gallery */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-charcoal mb-8">Subfloor Remediation & Improvement</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <img
                  src={subfloorInspection}
                  alt="Professional subfloor mould inspection Melbourne using thermal imaging and moisture detection equipment under heritage home"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <div className="text-sm font-semibold text-charcoal">Advanced subfloor inspection</div>
                  <div className="text-xs text-professional">Thermal imaging & moisture detection</div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={subfloorVentilation}
                  alt="Improved subfloor ventilation system installation Melbourne preventing future mould growth with professional moisture control"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <div className="text-sm font-semibold text-charcoal">Ventilation improvement</div>
                  <div className="text-xs text-professional">Moisture control & airflow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Melbourne Service Areas - Subfloor Mould Remediation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Subfloor Mould Remediation Across Melbourne
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Under-house mould specialists serving Melbourne's diverse housing types.
              From heritage foundations to modern slabs - comprehensive subfloor moisture control and remediation.
            </p>
          </div>

          {/* Geographic Service Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

            {/* Heritage Foundation Specialists */}
            <Card className="p-6 border-2 border-orange-500">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-orange-600" />
                Heritage Foundation Specialists
              </h3>
              <p className="text-professional mb-4">Historic properties with traditional subfloor construction requiring specialised remediation</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/carlton" className="block text-primary hover:text-primary-600 font-medium">Carlton - Victorian terrace foundations</a>
                <a href="/locations/fitzroy" className="block text-primary hover:text-primary-600 font-medium">Fitzroy - Heritage building subfloors</a>
                <a href="/locations/richmond" className="block text-primary hover:text-primary-600 font-medium">Richmond - Worker's cottage undersides</a>
                <a href="/locations/collingwood" className="block text-primary hover:text-primary-600 font-medium">Collingwood - Warehouse foundation work</a>
                <a href="/locations/abbotsford" className="block text-primary hover:text-primary-600 font-medium">Abbotsford - Industrial heritage subfloors</a>
                <a href="/locations/east-melbourne" className="block text-primary hover:text-primary-600 font-medium">East Melbourne - Grand terrace foundations</a>
                <a href="/locations/south-melbourne" className="block text-primary hover:text-primary-600 font-medium">South Melbourne - Victorian home undersides</a>
                <a href="/locations/north-melbourne" className="block text-primary hover:text-primary-600 font-medium">North Melbourne - Heritage townhouse subfloors</a>
              </div>
            </Card>

            {/* Eastern Suburbs Traditional */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Eastern Suburbs Traditional
              </h3>
              <p className="text-professional mb-4">Established homes with traditional timber subfloor construction and drainage challenges</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/camberwell" className="block text-primary hover:text-primary-600 font-medium">Camberwell - Federation home subfloors</a>
                <a href="/locations/hawthorn" className="block text-primary hover:text-primary-600 font-medium">Hawthorn - Multi-level foundation work</a>
                <a href="/locations/kew" className="block text-primary hover:text-primary-600 font-medium">Kew - Family home undersides</a>
                <a href="/locations/malvern" className="block text-primary hover:text-primary-600 font-medium">Malvern - Period home foundations</a>
                <a href="/locations/armadale" className="block text-primary hover:text-primary-600 font-medium">Armadale - Heritage mansion subfloors</a>
                <a href="/locations/toorak" className="block text-primary hover:text-primary-600 font-medium">Toorak - Luxury home foundation work</a>
                <a href="/locations/glen-iris" className="block text-primary hover:text-primary-600 font-medium">Glen Iris - Traditional home undersides</a>
                <a href="/locations/surrey-hills" className="block text-primary hover:text-primary-600 font-medium">Surrey Hills - Complex layout subfloors</a>
              </div>
            </Card>

            {/* Clay Soil Area Specialists */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                Clay Soil Area Specialists
              </h3>
              <p className="text-professional mb-4">Areas with clay soil challenges requiring specialised moisture and foundation movement expertise</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/box-hill" className="block text-primary hover:text-primary-600 font-medium">Box Hill - Clay soil foundation issues</a>
                <a href="/locations/glen-waverley" className="block text-primary hover:text-primary-600 font-medium">Glen Waverley - Seasonal movement areas</a>
                <a href="/locations/ringwood" className="block text-primary hover:text-primary-600 font-medium">Ringwood - Expansive clay subfloors</a>
                <a href="/locations/clayton" className="block text-primary hover:text-primary-600 font-medium">Clayton - University area clay issues</a>
                <a href="/locations/oakleigh" className="block text-primary hover:text-primary-600 font-medium">Oakleigh - Traditional home clay problems</a>
                <a href="/locations/bentleigh" className="block text-primary hover:text-primary-600 font-medium">Bentleigh - Heritage property soil issues</a>
                <a href="/locations/chadstone" className="block text-primary hover:text-primary-600 font-medium">Chadstone - Modern home clay challenges</a>
                <a href="/locations/dandenong" className="block text-primary hover:text-primary-600 font-medium">Dandenong - Industrial area soil problems</a>
              </div>
            </Card>

            {/* Coastal Moisture Specialists */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-teal-600" />
                Coastal Moisture Specialists
              </h3>
              <p className="text-professional mb-4">Bayside properties with salt air and high humidity requiring specialised ventilation solutions</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/brighton" className="block text-primary hover:text-primary-600 font-medium">Brighton - Coastal property subfloors</a>
                <a href="/locations/sandringham" className="block text-primary hover:text-primary-600 font-medium">Sandringham - Beachside foundation work</a>
                <a href="/locations/hampton" className="block text-primary hover:text-primary-600 font-medium">Hampton - Bay area moisture control</a>
                <a href="/locations/mentone" className="block text-primary hover:text-primary-600 font-medium">Mentone - Coastal heritage subfloors</a>
                <a href="/locations/mordialloc" className="block text-primary hover:text-primary-600 font-medium">Mordialloc - Waterfront foundation issues</a>
                <a href="/locations/frankston" className="block text-primary hover:text-primary-600 font-medium">Frankston - Coastal property undersides</a>
                <a href="/locations/st-kilda" className="block text-primary hover:text-primary-600 font-medium">St Kilda - Salt air subfloor problems</a>
                <a href="/locations/port-melbourne" className="block text-primary hover:text-primary-600 font-medium">Port Melbourne - Industrial coastal subfloors</a>
              </div>
            </Card>

            {/* Western Suburbs Industrial */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-600" />
                Western Suburbs Industrial
              </h3>
              <p className="text-professional mb-4">Industrial and residential properties with complex drainage and ventilation challenges</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/footscray" className="block text-primary hover:text-primary-600 font-medium">Footscray - Industrial subfloor systems</a>
                <a href="/locations/maribyrnong" className="block text-primary hover:text-primary-600 font-medium">Maribyrnong - Commercial foundation work</a>
                <a href="/locations/yarraville" className="block text-primary hover:text-primary-600 font-medium">Yarraville - Heritage cottage subfloors</a>
                <a href="/locations/williamstown" className="block text-primary hover:text-primary-600 font-medium">Williamstown - Coastal industrial undersides</a>
                <a href="/locations/newport" className="block text-primary hover:text-primary-600 font-medium">Newport - Warehouse foundation issues</a>
                <a href="/locations/altona" className="block text-primary hover:text-primary-600 font-medium">Altona - Family home subfloor problems</a>
                <a href="/locations/moonee-ponds" className="block text-primary hover:text-primary-600 font-medium">Moonee Ponds - Established home undersides</a>
                <a href="/locations/essendon" className="block text-primary hover:text-primary-600 font-medium">Essendon - Multi-room foundation work</a>
              </div>
            </Card>

            {/* Northern Growth Areas */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-indigo-600" />
                Northern Growth Areas
              </h3>
              <p className="text-professional mb-4">Modern developments and established suburbs with diverse foundation types and moisture issues</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/preston" className="block text-primary hover:text-primary-600 font-medium">Preston - Modern home subfloor systems</a>
                <a href="/locations/thornbury" className="block text-primary hover:text-primary-600 font-medium">Thornbury - Family property undersides</a>
                <a href="/locations/northcote" className="block text-primary hover:text-primary-600 font-medium">Northcote - Multi-level foundation work</a>
                <a href="/locations/brunswick" className="block text-primary hover:text-primary-600 font-medium">Brunswick - Townhouse subfloor issues</a>
                <a href="/locations/coburg" className="block text-primary hover:text-primary-600 font-medium">Coburg - Residential foundation problems</a>
                <a href="/locations/reservoir" className="block text-primary hover:text-primary-600 font-medium">Reservoir - Family home undersides</a>
                <a href="/locations/heidelberg" className="block text-primary hover:text-primary-600 font-medium">Heidelberg - Established home subfloors</a>
                <a href="/locations/ivanhoe" className="block text-primary hover:text-primary-600 font-medium">Ivanhoe - Premium property foundation work</a>
              </div>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-charcoal mb-4">Ready for Professional Subfloor Remediation?</h3>
            <p className="text-professional mb-6 max-w-2xl mx-auto">
              Our specialised subfloor moisture control and ventilation expertise protects Melbourne foundations.
              ABN: 47 683 089 652 | Professional service 7am-7pm every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-600 text-white" asChild>
                <a href="tel:1800954117">
                  <Phone className="h-5 w-5 mr-2" />
                  Call for Subfloor Assessment
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#booking-form">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Schedule Inspection
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
              Our Subfloor Remediation Process - Comprehensive 6-Step Method
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Melbourne's most thorough subfloor mould remediation process. We address not just the visible mould,
              but the underlying moisture problems and structural conditions that allow mould to thrive under your home.
            </p>
          </div>

          <div className="space-y-12">
            {remediationProcess.map((process, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <Card className="p-8 hover:shadow-lg transition-shadow border-l-4 border-orange-600">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {process.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-charcoal mb-4">{process.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        {process.description}
                      </p>

                      {/* Detailed breakdown for each step */}
                      {index === 0 && (
                        <div className="bg-white p-6 rounded-lg border border-orange-200">
                          <h4 className="font-bold text-charcoal mb-3">Advanced Subfloor Diagnostic Process:</h4>
                          <ul className="space-y-2 text-gray-700 mb-4">
                            <li>• Complete subfloor access assessment including crawl space entry points</li>
                            <li>• FLIR thermal imaging to identify hidden moisture patterns in timber structures</li>
                            <li>• Moisture content readings using pin and pinless meters on all accessible timber</li>
                            <li>• Visual inspection of all bearers, joists, and structural elements</li>
                            <li>• Assessment of existing ventilation systems and airflow patterns</li>
                            <li>• Documentation with digital photography and thermal images</li>
                          </ul>
                          <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-500">
                            <p className="text-sm text-orange-800">
                              <strong>Melbourne Climate Factors:</strong> Our 5+ years local experience identifies common issues
                              like seasonal ground moisture, poor original ventilation design, and thermal bridging specific to Melbourne homes.
                            </p>
                          </div>
                        </div>
                      )}

                      {index === 1 && (
                        <div className="bg-white p-6 rounded-lg border border-blue-200">
                          <h4 className="font-bold text-charcoal mb-3">Source Identification and Control:</h4>
                          <ul className="space-y-2 text-gray-700 mb-4">
                            <li>• Plumbing system inspection for leaks, especially copper pipe corrosion common in Melbourne</li>
                            <li>• Drainage assessment including stormwater, sewer, and groundwater issues</li>
                            <li>• Building envelope inspection for water penetration points</li>
                            <li>• Landscape grading assessment affecting foundation moisture</li>
                            <li>• Identification of rising damp conditions and capillary action</li>
                            <li>• Analysis of seasonal moisture patterns affecting your specific area</li>
                          </ul>
                          <div className="bg-columbia p-4 rounded border-l-4 border-primary">
                            <p className="text-sm text-blue-800">
                              <strong>Critical Step:</strong> Without controlling moisture sources, mould will return regardless of
                              removal efforts. This step prevents the expensive cycle of recurring problems.
                            </p>
                          </div>
                        </div>
                      )}

                      {index === 2 && (
                        <div className="bg-white p-6 rounded-lg border border-green-200">
                          <h4 className="font-bold text-charcoal mb-3">Ventilation System Analysis & Improvement:</h4>
                          <ul className="space-y-2 text-gray-700 mb-4">
                            <li>• Assessment of existing subfloor vents including size, placement, and condition</li>
                            <li>• Calculation of required ventilation area based on Australian Building Code</li>
                            <li>• Airflow measurement using calibrated anemometers and smoke pencils</li>
                            <li>• Installation of additional passive vents where required</li>
                            <li>• Mechanical ventilation options including solar-powered and electric fans</li>
                            <li>• Humidity monitoring system setup for ongoing moisture management</li>
                          </ul>
                          <div className="bg-success/10 p-4 rounded border-l-4 border-success">
                            <p className="text-sm text-green-800">
                              <strong>Long-term Prevention:</strong> Proper subfloor ventilation is the most effective method
                              for preventing mould recurrence. We size systems to handle Melbourne's variable climate conditions.
                            </p>
                          </div>
                        </div>
                      )}

                      {index === 3 && (
                        <div className="bg-white p-6 rounded-lg border border-red-200">
                          <h4 className="font-bold text-charcoal mb-3">Safe Subfloor Mould Removal Process:</h4>
                          <ul className="space-y-2 text-gray-700 mb-4">
                            <li>• Containment setup using negative air pressure systems in subfloor areas</li>
                            <li>• HEPA vacuum cleaning of all loose debris and surface contamination</li>
                            <li>• Wire brush treatment of affected timber surfaces to remove embedded growth</li>
                            <li>• Controlled removal of severely contaminated insulation and non-structural materials</li>
                            <li>• Dry ice blasting for stubborn mould growth on structural timber (when required)</li>
                            <li>• Complete debris removal and proper disposal following EPA guidelines</li>
                          </ul>
                          <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
                            <p className="text-sm text-red-800">
                              <strong>Safety Protocol:</strong> Subfloor work requires specialised safety equipment including
                              respiratory protection, confined space procedures, and hazardous material handling protocols.
                            </p>
                          </div>
                        </div>
                      )}

                      {index === 4 && (
                        <div className="bg-white p-6 rounded-lg border border-purple-200">
                          <h4 className="font-bold text-charcoal mb-3">Professional Sanitization Treatment:</h4>
                          <ul className="space-y-2 text-gray-700 mb-4">
                            <li>• Application of EPA-registered antimicrobial solutions to all timber surfaces</li>
                            <li>• ULV fogging treatment for complete coverage in hard-to-reach areas</li>
                            <li>• Biocide treatment for ongoing protection against future mould growth</li>
                            <li>• Encapsulation of porous surfaces that cannot be fully cleaned</li>
                            <li>• Anti-fungal treatment application to all structural elements</li>
                            <li>• Final HEPA vacuum cleaning of all surfaces and structural components</li>
                          </ul>
                          <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500">
                            <p className="text-sm text-purple-800">
                              <strong>Residual Protection:</strong> Our antimicrobial treatments provide ongoing protection
                              for months after application, creating an hostile environment for mould spores.
                            </p>
                          </div>
                        </div>
                      )}

                      {index === 5 && (
                        <div className="bg-white p-6 rounded-lg border border-indigo-200">
                          <h4 className="font-bold text-charcoal mb-3">Environmental Conditioning & Prevention:</h4>
                          <ul className="space-y-2 text-gray-700 mb-4">
                            <li>• Installation of improved drainage systems and french drains where needed</li>
                            <li>• Ground covering installation using appropriate vapor barrier materials</li>
                            <li>• Moisture control system setup including dehumidification if required</li>
                            <li>• Installation of monitoring systems for early detection of moisture problems</li>
                            <li>• Final air quality testing to verify successful treatment</li>
                            <li>• Comprehensive maintenance plan and schedule for ongoing protection</li>
                          </ul>
                          <div className="bg-indigo-50 p-4 rounded border-l-4 border-indigo-500">
                            <p className="text-sm text-indigo-800">
                              <strong>Ongoing Success:</strong> We provide detailed maintenance instructions and offer
                              annual inspection services to ensure your subfloor remains dry and mould-free.
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

          {/* Specialized Equipment & Techniques */}
          <div className="mt-16 bg-orange-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-charcoal mb-6 text-center">Specialized Subfloor Equipment & Techniques</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-orange-200">
                <h4 className="font-bold text-charcoal mb-3">Access & Safety Equipment</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Professional crawl space access equipment and safety harnesses</li>
                  <li>• High-powered LED lighting systems for complete visibility</li>
                  <li>• Confined space ventilation and air monitoring equipment</li>
                  <li>• Protective clothing and respiratory equipment for hazardous environments</li>
                  <li>• Emergency communication systems for worker safety</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-orange-200">
                <h4 className="font-bold text-charcoal mb-3">Detection & Assessment Tools</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• FLIR thermal imaging cameras for hidden moisture detection</li>
                  <li>• Calibrated moisture meters (pin-type and non-invasive)</li>
                  <li>• Hygrometers for relative humidity measurement</li>
                  <li>• Digital photography equipment with macro and wide-angle lenses</li>
                  <li>• Air quality sampling equipment for spore concentration testing</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-orange-200">
                <h4 className="font-bold text-charcoal mb-3">Removal & Treatment Systems</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Industrial HEPA vacuum systems with long hoses for subfloor access</li>
                  <li>• ULV fogging equipment for comprehensive antimicrobial application</li>
                  <li>• Dry ice blasting systems for stubborn contamination</li>
                  <li>• Negative air pressure machines for containment</li>
                  <li>• Professional dehumidification and air circulation equipment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing and Timeline Transparency */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-charcoal mb-8 text-center">Subfloor Remediation Pricing & Timeline</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-bold text-charcoal mb-3">What Affects Pricing</h4>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Total subfloor area requiring treatment (per square meter)</li>
                  <li>• Extent of contamination and structural damage</li>
                  <li>• Accessibility challenges and confined space complexity</li>
                  <li>• Required ventilation improvements and installation</li>
                  <li>• Moisture control measures needed (drainage, barriers, etc.)</li>
                  <li>• Post-treatment monitoring and verification testing</li>
                </ul>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-gray-400">
                  <p className="text-sm text-gray-700">
                    <strong>Typical Range:</strong> Subfloor remediation projects typically range from $3,500-$12,000
                    depending on scope. Free assessment provides accurate quote based on your specific situation.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-bold text-charcoal mb-3">Project Timeline</h4>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Initial assessment and quote: Professional service</li>
                  <li>• Moisture source control: 1-3 days</li>
                  <li>• Mould removal and sanitisation: 2-4 days</li>
                  <li>• Ventilation installation: 1-2 days</li>
                  <li>• Environmental conditioning: 1-2 days</li>
                  <li>• Final testing and verification: 1 day</li>
                </ul>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-gray-400">
                  <p className="text-sm text-gray-700">
                    <strong>Weather Dependent:</strong> Some phases may require dry conditions. We work around Melbourne
                    weather patterns to ensure optimal results and may adjust timeline accordingly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Melbourne-Specific Challenges & Solutions */}
          <div className="mt-16 bg-columbia rounded-lg p-8">
            <h3 className="text-2xl font-bold text-charcoal mb-6 text-center">Melbourne Subfloor Challenges We Address</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-charcoal mb-3">Common Melbourne Issues</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Clay soil expansion causing foundation movement and cracking</li>
                  <li>• Seasonal flooding in low-lying areas creating persistent dampness</li>
                  <li>• Poor original ventilation design in older Melbourne homes</li>
                  <li>• Rising damp from inadequate damp proof course installation</li>
                  <li>• Thermal bridging creating condensation in subfloor areas</li>
                  <li>• Blocked or inadequate stormwater drainage systems</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-charcoal mb-3">Our Proven Solutions</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Sub-surface drainage installation to manage groundwater</li>
                  <li>• Cross-flow ventilation systems designed for Melbourne climate</li>
                  <li>• Vapor barriers specifically rated for Australian soil conditions</li>
                  <li>• Solar-powered ventilation to handle seasonal humidity changes</li>
                  <li>• Thermal break installation to prevent condensation formation</li>
                  <li>• Integrated moisture monitoring for early problem detection</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Guarantee and Follow-up */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-charcoal mb-8 text-center">Our Subfloor Remediation Guarantee</h3>
            <div className="bg-white p-8 rounded-lg border-2 border-orange-200">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="text-xl font-bold text-charcoal mb-2">18-Month Workmanship Guarantee</h4>
                <p className="text-professional">
                  We guarantee our subfloor remediation work for 18 months when moisture control recommendations are followed.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h5 className="font-bold text-charcoal mb-2">Mould-Free Promise</h5>
                  <p className="text-professional text-sm">
                    If mould returns in treated areas, we return at no charge to address the issue.
                  </p>
                </div>
                <div className="text-center">
                  <h5 className="font-bold text-charcoal mb-2">Moisture Control Warranty</h5>
                  <p className="text-professional text-sm">
                    Installed ventilation and drainage systems guaranteed for materials and workmanship.
                  </p>
                </div>
                <div className="text-center">
                  <h5 className="font-bold text-charcoal mb-2">Annual Inspection Option</h5>
                  <p className="text-professional text-sm">
                    Optional annual subfloor inspection service to maintain optimal conditions.
                  </p>
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
              Benefits of Professional Subfloor Remediation
            </h2>
            <p className="text-xl text-professional">Complete foundation protection for your Melbourne home</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-4">Improved Air Quality</h3>
              <p className="text-professional mb-4">Eliminate subfloor contamination affecting your home's air</p>
              <ul className="space-y-2 text-sm text-professional">
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
            
            <Card className="p-6 text-center border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Important
              </div>
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-4">Structural Protection</h3>
              <p className="text-professional mb-4">Preserve your home's foundation and structural integrity</p>
              <ul className="space-y-2 text-sm text-professional">
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
              <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-4">Long-Term Prevention</h3>
              <p className="text-professional mb-4">Advanced ventilation and moisture control systems</p>
              <ul className="space-y-2 text-sm text-professional">
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
            <Card className="p-6 bg-columbia border border-blue-200">
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

      {/* Areas We Serve Section - Subfloor Mould Remediation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Subfloor Mould Remediation Across Melbourne
            </h2>
            <p className="text-xl text-professional max-w-3xl mx-auto">
              Professional subfloor and foundation mould treatment throughout Melbourne. Our specialised technicians
              address crawl spaces, pier and beam foundations, basement areas, and subfloor ventilation systems
              to protect your property's structural integrity.
            </p>
          </div>

          {/* Specialist Foundation Types */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Heritage Foundation Specialists */}
            <Card className="p-6 border-2 border-amber-500">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-amber-600" />
                Heritage Foundation Systems
              </h3>
              <p className="text-professional mb-4">Specialised treatment for period property foundations and traditional subfloor construction</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/toorak" className="block text-primary hover:text-primary-600 font-medium">Toorak - Heritage mansion foundations</a>
                <a href="/locations/east-melbourne" className="block text-primary hover:text-primary-600 font-medium">East Melbourne - Victorian terrace subfloors</a>
                <a href="/locations/carlton" className="block text-primary hover:text-primary-600 font-medium">Carlton - Period property crawl spaces</a>
                <a href="/locations/fitzroy" className="block text-primary hover:text-primary-600 font-medium">Fitzroy - Character home foundations</a>
                <a href="/locations/richmond" className="block text-primary hover:text-primary-600 font-medium">Richmond - Heritage worker cottage subfloors</a>
                <a href="/locations/albert-park" className="block text-primary hover:text-primary-600 font-medium">Albert Park - Victorian villa foundations</a>
              </div>
            </Card>

            {/* Coastal Foundation Challenges */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Coastal Foundation Protection
              </h3>
              <p className="text-professional mb-4">Salt air and humidity resistance for bayside property foundations and subfloor areas</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/brighton" className="block text-primary hover:text-primary-600 font-medium">Brighton - Beachside foundation protection</a>
                <a href="/locations/sandringham" className="block text-primary hover:text-primary-600 font-medium">Sandringham - Coastal subfloor treatment</a>
                <a href="/locations/mentone" className="block text-primary hover:text-primary-600 font-medium">Mentone - Bayside foundation ventilation</a>
                <a href="/locations/mordialloc" className="block text-primary hover:text-primary-600 font-medium">Mordialloc - Waterfront subfloor systems</a>
                <a href="/locations/frankston" className="block text-primary hover:text-primary-600 font-medium">Frankston - Coastal humidity management</a>
                <a href="/locations/williamstown" className="block text-primary hover:text-primary-600 font-medium">Williamstown - Port area foundation protection</a>
              </div>
            </Card>

            {/* Modern Foundation Systems */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                Modern Foundation Systems
              </h3>
              <p className="text-professional mb-4">Contemporary slab-on-ground and modern subfloor construction treatment</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/box-hill" className="block text-primary hover:text-primary-600 font-medium">Box Hill - Modern development foundations</a>
                <a href="/locations/glen-waverley" className="block text-primary hover:text-primary-600 font-medium">Glen Waverley - Contemporary home subfloors</a>
                <a href="/locations/clayton" className="block text-primary hover:text-primary-600 font-medium">Clayton - New construction foundation protection</a>
                <a href="/locations/berwick" className="block text-primary hover:text-primary-600 font-medium">Berwick - Estate home foundation systems</a>
                <a href="/locations/pakenham" className="block text-primary hover:text-primary-600 font-medium">Pakenham - Growth corridor foundations</a>
                <a href="/locations/craigieburn" className="block text-primary hover:text-primary-600 font-medium">Craigieburn - New estate subfloor treatment</a>
              </div>
            </Card>

            {/* Flood-Prone Area Specialists */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                Flood-Prone Foundation Recovery
              </h3>
              <p className="text-professional mb-4">Emergency subfloor remediation for flood-affected and water-damaged foundations</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/maribyrnong" className="block text-primary hover:text-primary-600 font-medium">Maribyrnong - Riverside foundation recovery</a>
                <a href="/locations/footscray" className="block text-primary hover:text-primary-600 font-medium">Footscray - Flood damage subfloor restoration</a>
                <a href="/locations/yarraville" className="block text-primary hover:text-primary-600 font-medium">Yarraville - River flood foundation treatment</a>
                <a href="/locations/newport" className="block text-primary hover:text-primary-600 font-medium">Newport - Wetlands area subfloor protection</a>
                <a href="/locations/altona" className="block text-primary hover:text-primary-600 font-medium">Altona - Storm surge foundation remediation</a>
                <a href="/locations/laverton" className="block text-primary hover:text-primary-600 font-medium">Laverton - Low-lying area foundation protection</a>
              </div>
            </Card>

            {/* Commercial Foundation Systems */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-600" />
                Commercial Foundation Treatment
              </h3>
              <p className="text-professional mb-4">Large-scale subfloor remediation for commercial buildings, warehouses, and industrial facilities</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/melbourne-cbd" className="block text-primary hover:text-primary-600 font-medium">Melbourne CBD - Commercial basement treatment</a>
                <a href="/locations/docklands" className="block text-primary hover:text-primary-600 font-medium">Docklands - High-rise foundation systems</a>
                <a href="/locations/port-melbourne" className="block text-primary hover:text-primary-600 font-medium">Port Melbourne - Industrial foundation protection</a>
                <a href="/locations/brunswick" className="block text-primary hover:text-primary-600 font-medium">Brunswick - Commercial facility subfloors</a>
                <a href="/locations/preston" className="block text-primary hover:text-primary-600 font-medium">Preston - Manufacturing facility foundations</a>
                <a href="/locations/dandenong" className="block text-primary hover:text-primary-600 font-medium">Dandenong - Industrial precinct subfloor systems</a>
              </div>
            </Card>

            {/* Hillside & Sloping Block Specialists */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-teal-600" />
                Hillside Foundation Specialists
              </h3>
              <p className="text-professional mb-4">Complex foundation treatment for sloping blocks and hillside properties with drainage challenges</p>
              <div className="space-y-2 text-sm">
                <a href="/locations/camberwell" className="block text-primary hover:text-primary-600 font-medium">Camberwell - Hillside federation home foundations</a>
                <a href="/locations/hawthorn" className="block text-primary hover:text-primary-600 font-medium">Hawthorn - Sloping block subfloor systems</a>
                <a href="/locations/kew" className="block text-primary hover:text-primary-600 font-medium">Kew - Elevated property foundation protection</a>
                <a href="/locations/armadale" className="block text-primary hover:text-primary-600 font-medium">Armadale - Undercroft and basement treatment</a>
                <a href="/locations/malvern" className="block text-primary hover:text-primary-600 font-medium">Malvern - Multi-level foundation systems</a>
                <a href="/locations/glen-iris" className="block text-primary hover:text-primary-600 font-medium">Glen Iris - Hillside drainage and foundation protection</a>
              </div>
            </Card>
          </div>

          {/* Foundation Protection Features */}
          <div className="bg-amber-50 rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-amber-600">100%</div>
                <div className="text-professional">Foundation Coverage</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600">25+ Years</div>
                <div className="text-professional">Treatment Longevity</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600">IP65</div>
                <div className="text-professional">Moisture Barrier Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600">24/7</div>
                <div className="text-professional">Foundation Emergency Response</div>
              </div>
            </div>
          </div>

          {/* Professional Foundation Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-charcoal mb-4">Foundation Mould Issues?</h3>
            <p className="text-professional mb-6 max-w-2xl mx-auto">
              Protect your property's foundation with professional subfloor mould remediation. Our specialised
              technicians provide comprehensive treatment and ventilation solutions for all foundation types
              across Melbourne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
                <a href="tel:1800954117">
                  <Phone className="h-5 w-5 mr-2" />
                  Foundation Remediation Service
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Schedule Foundation Assessment
                </a>
              </Button>
            </div>
            <div className="mt-4 text-sm text-professional">
              ABN: 47 683 089 652 | IICRC Certified | Foundation Specialist Technicians
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Internal Linking for Service to Location SEO */}
      <StrategicServiceLinks
        currentService="/services/subfloor-mould-remediation"
      />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};