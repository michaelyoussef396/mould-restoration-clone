import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';
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
    { number: '2,500+', label: 'Properties Restored', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Award },  
    { number: '2hr', label: 'Average Response', icon: Clock },
    { number: '4.9/5', label: 'Customer Rating', icon: Star },
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Immediate Assessment',
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
      description: 'IICRC-certified removal techniques with proper disposal of contaminated materials',
    },
    {
      number: '4',
      title: 'Restoration & Testing',
      description: 'Complete restoration with final clearance testing to ensure safe environment',
    },
  ];

  const testimonials = [
    {
      text: "Removed extensive mold from our Toorak basement in just 2 days. Professional, thorough, and my daughter's asthma symptoms disappeared within a week.",
      name: "Sarah Johnson",
      location: "Toorak",
      rating: 5,
    },
    {
      text: "Emergency response was incredible - they arrived within 90 minutes on a Sunday night. The team was professional and the work quality exceeded expectations.",
      name: "Michael Chen", 
      location: "Brighton",
      rating: 5,
    },
    {
      text: "After trying 3 other companies without success, Mould & Restoration finally solved our recurring mold problem. It's been 18 months with no issues.",
      name: "Emma Wilson",
      location: "Malvern",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Emergency Bar */}
      <div className="bg-emergency-orange text-white py-2 px-4 text-center text-sm font-medium sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <span className="hidden sm:block">🚨 24/7 Emergency Mold Response Available</span>
          <span className="sm:hidden">Emergency Available 24/7</span>
          <a href="tel:1800954117" className="font-bold hover:underline flex items-center gap-1">
            <Phone className="h-4 w-4" />
            1800 954 117
          </a>
        </div>
      </div>

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
                Melbourne's Most Trusted 
                <span className="text-blue-300"> Mold Removal Experts</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl">
                Family-owned business with 15+ years protecting Melbourne homes. Our IICRC-certified team has remediated over 2,500 properties across Victoria.
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
                    Emergency Response - Call Now
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
                <span className="text-white ml-2">4.9/5 (247 reviews)</span>
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
              IICRC-Certified Excellence Since 2008
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified technicians combine industry-leading training with local Melbourne expertise to deliver safe, effective mold remediation solutions.
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
              Trusted by 2,500+ Melbourne Property Owners
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
                Proudly Serving Melbourne for Over 15 Years
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                As a family-owned Melbourne business, we understand the unique challenges of our local climate and building styles. From heritage homes in Toorak to modern apartments in Southbank, we've protected thousands of properties across all Melbourne suburbs.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Fully licensed and insured in Victoria</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Average 2-hour emergency response across Melbourne metro</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Local team with deep knowledge of Melbourne properties</span>
                </div>
              </div>
              
              <Button size="lg" asChild>
                <a href="/contact">
                  Schedule Your Free Assessment
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
    </div>
  );
};

export default About;