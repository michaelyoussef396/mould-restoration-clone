import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowRight, Phone, Mail, MapPin, Clock, Star, CheckCircle, AlertCircle, Users, Shield, Award } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { ServicePageSEO } from '@/components/seo/SEOHead';
import { ContactForm } from '@/components/ContactForm';
import heroBackground from '@/assets/hero-background-optimized.webp';

export const ContactOptimized = () => {
  return (
    <div className="min-h-screen bg-background">
            {/* SEO Optimization for ContactOptimized */}
      <ServicePageSEO
        service=""
        title="Contact Mould & Restoration Co Melbourne - Professional Service"
        description="Contact Melbourne's trusted mould restoration experts. Professional service 7am-7pm every day. Call 1800 954 117 for immediate assistance."
        canonicalUrl="https://mouldrestoration.com.au/contact"
      />

      {/* {/* Professional Service Bar */}
      <div className="bg-primary text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <span className="text-sm font-medium">Professional Mould Inspections - 7am-7pm Everyday</span>
          <a 
            href="tel:1800954117" 
            className="text-sm font-bold hover:underline"
          >
            Call Now: 1800 954 117
          </a>
        </div>
      </div>

      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-[104px]"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/40 z-10"></div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Get Expert Mould Help Today
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Professional technicians provide same-day inspections. Protecting Melbourne families from mould with 5+ years experience.
            </p>

            {/* Trust Indicators */}
            <div className="reviews-stars mb-6">
              ★★★★★ 5.0/5 ⭐ (50+ reviews)
            </div>

            {/* Dual CTA Strategy */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:1800954117" 
                className="bg-primary hover:bg-primary-600 text-white text-lg px-8 py-4 rounded-lg inline-flex items-center justify-center gap-2 font-semibold"
              >
                <Phone className="w-5 h-5" />
                Same-day Service - Call Now
              </a>
                <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-4 h-auto"
              >
                Schedule Professional Inspection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Service Highlights */}
            <div className="service-highlights justify-center">
              <span>✓ Same-day service available</span>
              <span>✓ Professional assessment</span>
              <span>✓ Quality guarantee</span>
            </div>
          </div>
        </div>

        {/* Breadcrumb positioned in top right */}
        <div className="absolute top-32 right-8 z-30 hidden lg:block">
          <div className="text-right">
            <h2 className="text-6xl font-black text-white/20 mb-4">CONTACT</h2>
            <Breadcrumb 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Contact', href: '/contact', current: true },
              ]} 
            />
          </div>
        </div>
      </section>

      {/* Multi-Channel Contact Strategy */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Emergency Contact (Featured) */}
            <Card className="service-card p-8 text-center relative border-2 border-orange-500/20">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                  SAME-DAY AVAILABLE
                </div>
              </div>
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">Professional Service</h3>
              <p className="text-muted-foreground mb-4">Available 7am-7pm everyday for professional assistance</p>
              <a 
                href="tel:1800954117" 
                className="text-2xl font-bold text-orange-500 hover:text-orange-600 block mb-2"
              >
                1800 954 117
              </a>
              <div className="text-sm text-success-green font-medium">
                <div className="flex items-center justify-center gap-2">
                  <div className="status-dot"></div>
                  Same-day inspections available
                </div>
              </div>
            </Card>
            
            {/* Standard Contact */}
            <Card className="service-card p-8 text-center">
              <div className="w-16 h-16 bg-accent-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-accent-teal" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">Schedule Inspection</h3>
              <p className="text-muted-foreground mb-4">Book your professional mould inspection online</p>
              <Button variant="secondary" size="lg" className="w-full">
                Choose Your Time
              </Button>
            </Card>
            
            {/* Quote Request */}
            <Card className="service-card p-8 text-center">
              <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-accent-blue" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">Get Quick Quote</h3>
              <p className="text-muted-foreground mb-4">Send photos for preliminary assessment</p>
              <Button variant="default" size="lg" className="w-full">
                Upload Photos
              </Button>
            </Card>
          </div>

          {/* Contact Information & Form Section */}
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Melbourne's Premier Mould Restoration Experts</h2>

                {/* Business Overview */}
                <div className="mb-8">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    As Melbourne's leading mould inspection and remediation specialists, Mould & Restoration Co. has been protecting Victorian families and businesses for over 5 years. Our professional team combines industry-leading technology with local expertise to deliver safe, effective solutions for mould problems across all Melbourne suburbs.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you're dealing with visible mould growth, musty odours, or potential moisture issues, our IICRC-certified technicians provide comprehensive assessments and customised treatment plans. From heritage homes in Toorak to modern apartments in Southbank, we've successfully restored over 100 properties throughout Melbourne.
                  </p>
                </div>

                <Card className="service-card p-6 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-highlight/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-highlight" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">Service Location</h3>
                      <address className="text-muted-foreground not-italic">
                        Melbourne, VIC 📍<br />
                        Servicing all Melbourne Metro<br />
                        ABN: 47 683 089 652
                      </address>
                    </div>
                  </div>
                </Card>

                <Card className="service-card p-6 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-highlight/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-highlight" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">Professional Service Hours</h3>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        <li className="font-semibold text-orange-500">Professional Service: 7am-7pm Every Day</li>
                        <li>Monday - Friday: 7AM-7PM (Full Service)</li>
                        <li>Saturday - Sunday: 7AM-7PM (Full Service)</li>
                        <li>Same-day inspections available</li>
                        <li>Professional response within 1 hour</li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-3">
                        Unlike many competitors who offer limited weekend service, we provide full professional assistance seven days a week. Our technicians are available for same-day inspections and consultations throughout Melbourne.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Trust Credentials */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground">Why Melbourne Trusts Mould & Restoration Co.</h3>
                  <div className="grid grid-cols-3 gap-4 text-center mb-4">
                    <div className="trust-signals p-4">
                      <div className="text-2xl font-bold text-accent-teal">100+</div>
                      <div className="text-xs text-muted-foreground">Properties Restored</div>
                    </div>
                    <div className="trust-signals p-4">
                      <div className="text-2xl font-bold text-accent-teal">5+</div>
                      <div className="text-xs text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="trust-signals p-4">
                      <div className="text-2xl font-bold text-accent-teal">Same Day</div>
                      <div className="text-xs text-muted-foreground">Inspection Available</div>
                    </div>
                  </div>

                  {/* Additional Trust Content */}
                  <div className="bg-columbia p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Professional Credentials & Standards</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• IICRC-certified mould remediation specialists</li>
                      <li>• Fully insured for commercial and residential work</li>
                      <li>• Professional-grade equipment and safety protocols</li>
                      <li>• Comprehensive warranty on all remediation work</li>
                      <li>• Transparent pricing with detailed written quotes</li>
                    </ul>
                  </div>

                  <div className="bg-success/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Melbourne Market Expertise</h4>
                    <p className="text-sm text-muted-foreground">
                      Our team understands Melbourne's unique climate challenges, from the humid summers that promote mould growth to the seasonal variations that affect different property types. We've worked extensively across all Melbourne suburbs, from historic terraces in Fitzroy to luxury apartments in Docklands, developing specialised approaches for each type of building and environmental condition.
                    </p>
                  </div>
                </div>

                {/* Service Area */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Comprehensive Melbourne Service Coverage</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    We provide professional mould inspection and remediation services across all Melbourne metropolitan areas. Our mobile service units are strategically positioned to ensure rapid response times throughout the city.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-3">
                    <div>• Toorak & Malvern</div>
                    <div>• Brighton & Sandringham</div>
                    <div>• Carlton & Fitzroy</div>
                    <div>• Richmond & South Yarra</div>
                    <div>• Docklands & Southbank</div>
                    <div>• Kew & Hawthorn</div>
                    <div>• Camberwell & Glen Iris</div>
                    <div>• Essendon & Airport West</div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Plus all surrounding Melbourne metro areas. Contact us to confirm service availability in your specific location - we regularly expand our service zones based on customer demand.
                  </p>
                </div>
              </div>
            </div>

            {/* Progressive Contact Form */}
            <div className="lg:col-span-3">
              <Card className="service-card p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Get Your Free Professional Assessment & Quote
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Complete the form below to receive a comprehensive assessment and detailed quote for your mould inspection or remediation needs. Our experienced team reviews every submission personally and responds within 1 hour during business hours.
                  </p>
                  <div className="bg-columbia p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">What You'll Receive:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Detailed assessment of your specific mould concerns</li>
                      <li>• Professional recommendation for inspection or remediation</li>
                      <li>• Transparent pricing with no hidden costs</li>
                      <li>• Available appointment times within 24-48 hours</li>
                      <li>• Educational information about mould prevention</li>
                    </ul>
                  </div>
                </div>

                {/* Urgency Indicator */}
                <div className="urgency-indicators mb-6">
                  <div className="booking-pressure">
                    <div className="indicator-dot"></div>
                    <span>Professional inspections available today</span>
                  </div>
                </div>

                <ContactForm />
              </Card>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                What Makes Our Melbourne Mould Service Different
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Professional Standards</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Every member of our team holds industry certifications and follows strict safety protocols. We use only professional-grade equipment and proven methodologies, ensuring consistent results across all projects regardless of size or complexity.
                  </p>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Local Melbourne Expertise</h3>
                  <p className="text-muted-foreground text-sm">
                    Our deep understanding of Melbourne's climate patterns, building types, and local regulations ensures we provide solutions specifically tailored to Victorian conditions. From seaside properties in Brighton dealing with salt air to inner-city apartments with ventilation challenges, we've encountered and solved them all.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Customer-First Approach</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    We believe in educating our clients throughout the process. You'll receive detailed explanations of our findings, clear treatment recommendations, and practical advice for preventing future issues. Our goal is not just to solve the immediate problem but to help you maintain a healthy environment long-term.
                  </p>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Guaranteed Results</h3>
                  <p className="text-muted-foreground text-sm">
                    We stand behind our work with comprehensive warranties. Our systematic approach, quality materials, and experienced technicians mean you can trust that the job will be done right the first time. If issues arise, we'll return to make it right at no additional cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Trust Signals - Mobile Optimized */}
      <div className="floating-trust-signals">
        <div className="trust-item">
          <Award className="w-4 h-4 text-accent-teal" />
          <span>5.0/5 Rating</span>
        </div>
        <div className="trust-item">
          <Shield className="w-4 h-4 text-success-green" />
          <span>Fully Insured</span>
        </div>
        <div className="trust-item">
          <Clock className="w-4 h-4 text-orange-500" />
          <span>Same-day Available</span>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};