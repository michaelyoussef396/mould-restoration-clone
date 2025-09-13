import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { Check, Phone, Award, Users, Clock, Shield, MapPin, Star, ArrowRight } from 'lucide-react';
import aboutHero from '@/assets/about-hero.jpg';
import visionInterior from '@/assets/vision-interior.jpg';
import experienceFurniture from '@/assets/experience-furniture.jpg';
import storySpace from '@/assets/story-space.jpg';

const About = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '/about', current: true },
  ];

  const credentials = [
    { number: '100+', label: 'Properties Restored', icon: Users },
    { number: '5+', label: 'Years Experience', icon: Award },  
    { number: 'Same Day', label: 'Inspection Available', icon: Clock },
    { number: '5.0/5', label: 'Customer Rating', icon: Star },
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Professional Assessment',
      description: 'Comprehensive moisture mapping and air quality testing using thermal imaging technology',
    },
    {
      number: '2', 
      title: 'Containment Protocol',
      description: 'Professional containment setup to prevent cross-contamination during remediation',
    },
    {
      number: '3',
      title: 'Safe Removal',
      description: 'Professional removal techniques with proper disposal of contaminated materials',
    },
    {
      number: '4',
      title: 'Restoration & Testing',
      description: 'Complete restoration with final clearance testing to ensure safe environment',
    },
  ];

  const testimonials = [
    {
      text: "A fantastic experience with Mould & Restoration Co. Their team were professional, knowledgeable, and truly cared about getting rid of mould the right way. Everything was handled efficiently and they explained the process clearly from start to finish. Would recommend!",
      name: "Michael Youssef",
      location: "Melbourne",
      rating: 5,
    },
    {
      text: "Clayton attended our home for mould treatment and clean. He did a fantastic job! He was very informative and made sure we understood exactly what it was that he would be doing. He ensured our safety and completed the job with attention to detail.",
      name: "Mummaofmany", 
      location: "Melbourne",
      rating: 5,
    },
    {
      text: "A very professional company run by energetic entrepreneurial young people. Website is very easy to understand. 1st visit (free quote) was an assessment of the mould issue and recommendations. Next a report with photos - excellent service!",
      name: "Roz Dalton",
      location: "Melbourne",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Emergency Bar */}
      <div className="bg-emergency-orange text-white py-2 px-4 text-center text-sm font-medium fixed top-0 left-0 right-0 z-[60] h-10">
        <div className="container mx-auto flex items-center justify-between">
          <span className="hidden sm:block">📞 Professional Mould Inspections - 7am-7pm Everyday</span>
          <span className="sm:hidden">7am-7pm Everyday</span>
          <a href="tel:1800954117" className="font-bold hover:underline flex items-center gap-1">
            <Phone className="h-4 w-4" />
            1800 954 117
          </a>
        </div>
      </div>

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[106px]">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutHero})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left: Main Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-8">
                <Breadcrumb items={breadcrumbItems} />
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Melbourne's Trusted 
                <span className="text-blue-300"> Mould Restoration Experts</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl">
                Professional mould restoration company with 5+ years protecting Melbourne homes. Our skilled team has restored over 100 properties across Victoria.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  variant="emergency" 
                  size="lg" 
                  className="text-lg px-8 py-4 h-auto"
                  asChild
                >
                  <a href="tel:1800954117">
                    Same-day Inspections - Call Now
                    <Phone className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="text-lg px-8 py-4 h-auto bg-white/10 text-white border-white/20 hover:bg-white/20"
                  asChild
                >
                  <a href="#contact">
                    Schedule Professional Inspection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-yellow-400">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current" />
                ))}
                <span className="text-white ml-2">5.0/5 ⭐ (50+ reviews)</span>
              </div>
            </div>
            
            {/* Right: Stats Card */}
            <div className="w-full lg:w-96">
              <Card className="p-6 bg-white/95 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Why Melbourne Trusts Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {credentials.map((stat, index) => (
                    <div key={index} className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="flex justify-center mb-2">
                        <stat.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6" asChild>
                  <a href="/contact">Get Free Assessment</a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Credentials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Professional Excellence Since 2019
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our professional technicians combine industry training with local Melbourne expertise to deliver safe, effective mould remediation solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((credential, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <credential.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{credential.number}</div>
                <div className="text-gray-600 font-medium">{credential.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Transparency Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Proven 4-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparent, systematic approach ensuring complete mold removal and prevention
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by 100+ Melbourne Property Owners
            </h2>
            <p className="text-xl text-gray-600">Real results from real customers across Melbourne</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {testimonial.location}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Commitment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Proudly Serving Melbourne for Over 5 Years
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                As a Melbourne-based business, we understand the unique challenges of our local climate and building styles. From heritage homes in Toorak to modern apartments in Southbank, we've protected over 100 properties across all Melbourne suburbs.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Fully insured in Victoria</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">7am-7pm professional service across Melbourne metro</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Local team with deep knowledge of Melbourne properties</span>
                </div>
              </div>
              
              <Button size="lg" asChild>
                <a href="/contact">
                  Schedule Your Professional Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            
            <div className="relative">
              <img
                src={storySpace}
                alt="Melbourne property restoration"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-gray-600 text-sm">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;