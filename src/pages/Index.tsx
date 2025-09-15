import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone, Clock, Shield, Award, ArrowRight, CheckCircle, Star, MapPin } from 'lucide-react';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ProcessSection } from '@/components/ProcessSection';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';
import { ContactSection } from '@/components/ContactSection';
import { HomePageSEO } from '@/components/seo/SEOHead';
import { LocalBusinessSchema, OrganizationSchema, ReviewSchema } from '@/components/seo/SchemaMarkup';
import heroBackground from '@/assets/hero-background.jpg';

const Index = () => {
  // Sample review data from your Google reviews
  const customerReviews = [
    {
      author: "Michael Youssef",
      rating: 5,
      reviewBody: "A fantastic experience with Mould & Restoration Co. Their team were professional, knowledgeable, and truly cared about getting rid of mould the right way. Everything was handled efficiently and they explained the process clearly from start to finish. Would recommend!",
      datePublished: "2024-01-10"
    },
    {
      author: "Mummaofmany",
      rating: 5,
      reviewBody: "Clayton attended our home for mold treatment and clean. He did a fantastic job! He was very informative and made sure we understood exactly what it was that he would be doing. He ensured our safety and completed the job with attention to detail.",
      datePublished: "2024-01-08"
    },
    {
      author: "Roz Dalton",
      rating: 5,
      reviewBody: "A very professional company run by energetic entrepreneurial young people. Website is very easy to understand. 1st visit (free quote) was an assessment of the mould issue and recommendations for a dehumidifier. Next a report with photos - excellent service!",
      datePublished: "2024-01-05"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* SEO Optimization for Melbourne Professional Mould Services */}
      <HomePageSEO />
      <LocalBusinessSchema
        pageName="Home"
        pageUrl="https://mouldrestoration.com.au"
        serviceType="professional"
        location="Melbourne"
      />
      <OrganizationSchema />
      <ReviewSchema reviews={customerReviews} />
      {/* Professional Service Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium fixed top-0 left-0 right-0 z-[60] h-10">
        <div className="container mx-auto flex items-center justify-center sm:justify-between">
          <span className="hidden sm:block">📞 Professional Mould Inspections - Same-day Service Available 7am-7pm</span>
          <span className="sm:hidden text-xs">Same-day Service Available</span>
          <a href="tel:1800954117" className="font-bold hover:underline flex items-center gap-1 ml-2 sm:ml-0">
            <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-xs sm:text-sm">1800 954 117</span>
          </a>
        </div>
      </div>

      <Navigation />
      
      {/* Optimized Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[106px]">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left: Value Proposition */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Professional Mould Removal & Inspection
                <span className="text-blue-300"> Melbourne</span>
              </h1>

              <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl">
                IICRC-certified technicians providing same-day service. Protecting Melbourne families from dangerous mould for over 5 years.
              </p>
              
              {/* Professional CTA Strategy */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button
                  variant="default"
                  size="lg"
                  className="text-lg px-8 py-4 h-auto w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
                  asChild
                >
                  <a href="tel:1800954117">
                    Same-day Service - Call Now
                    <Phone className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="text-lg px-8 py-4 h-auto w-full sm:w-auto bg-white/10 text-white border-white/20 hover:bg-white/20"
                  asChild
                >
                  <a href="#contact">
                    Schedule Free Inspection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-yellow-400">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-current" />
                  ))}
                  <span className="text-white ml-2">4.9/5 (247 reviews)</span>
                </div>
                
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-white/90 text-sm">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Same-day service
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Insurance approved
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    100% satisfaction guarantee
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: Trust Signals Card */}
            <div className="w-full lg:w-96">
              <Card className="p-6 bg-white/95 backdrop-blur-sm">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Technicians available now
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Get Professional Help</h3>
                  <p className="text-gray-600">Same-day service available 7am-7pm</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Professional Service</div>
                      <div className="text-blue-600 font-bold">1800 954 117</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Clock className="h-5 w-5 text-gray-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Business Hours</div>
                      <div className="text-gray-600">7am-7pm Every Day</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <MapPin className="h-5 w-5 text-gray-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Service Area</div>
                      <div className="text-gray-600">All Melbourne Metro</div>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mt-4" variant="default" asChild>
                  <a href="#contact">Schedule Professional Inspection</a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Complete Mould Solutions for Melbourne
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From professional inspections to complete remediation, we protect your property and health with certified expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Same-day Professional Service */}
            <Card className="p-6 border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Same-day Service</h3>
                  <div className="text-blue-600 font-semibold text-sm">Available 7am-7pm</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Professional response for mould concerns and property protection. Our certified team provides prompt service during business hours.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Same-day availability</li>
                <li>• Professional assessment</li>
                <li>• Quality service guarantee</li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                <a href="tel:1800954117">Call Professional Service</a>
              </Button>
            </Card>
            
            {/* Professional Inspection */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Professional Inspection</h3>
                  <div className="text-green-600 font-semibold text-sm">Comprehensive Assessment</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive mold detection and air quality testing to identify problems before they escalate.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Thermal imaging detection</li>
                <li>• Air quality testing</li>
                <li>• Detailed written report</li>
              </ul>
              <Button className="w-full" asChild>
                <a href="/services/professional-mould-inspections">Learn More</a>
              </Button>
            </Card>
            
            {/* Complete Remediation */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-accent-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Complete Remediation</h3>
                  <div className="text-accent-teal font-semibold text-sm">IICRC Certified</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Full mold removal and restoration using industry-leading techniques and equipment.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Safe mold removal</li>
                <li>• Material replacement</li>
                <li>• Clearance testing</li>
              </ul>
              <Button className="w-full" asChild>
                <a href="/services/comprehensive-mould-removal">Learn More</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Floating Trust Signals */}
      <div className="fixed bottom-4 right-4 z-40 hidden lg:block">
        <Card className="p-3 bg-white shadow-lg border">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium">3 inspections booked in Carlton today</span>
          </div>
        </Card>
      </div>

      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <ContactSection />
    </div>
  );
};

export default Index;