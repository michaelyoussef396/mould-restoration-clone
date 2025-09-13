import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowRight, Phone, Mail, MapPin, Clock, Star, CheckCircle, AlertCircle, Users, Shield, Award } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

export const ContactOptimized = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Emergency Bar */}
      <div className="emergency-bar">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <span className="text-sm font-medium">24/7 Emergency Mould Response</span>
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
              IICRC-certified technicians respond within 2 hours. Protecting Melbourne families from dangerous mould since 2015.
            </p>

            {/* Trust Indicators */}
            <div className="reviews-stars mb-6">
              ★★★★★ 4.9/5 (247 reviews)
            </div>

            {/* Dual CTA Strategy */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:1800954117" 
                className="emergency-cta text-lg px-8 py-4 rounded-lg inline-flex items-center justify-center gap-2 font-semibold"
              >
                <Phone className="w-5 h-5" />
                Emergency Response - Call Now
              </a>
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-4 h-auto"
              >
                Schedule Free Inspection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Service Highlights */}
            <div className="service-highlights justify-center">
              <span>✓ Same-day service</span>
              <span>✓ Insurance approved</span>
              <span>✓ 100% satisfaction guarantee</span>
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
                  EMERGENCY 24/7
                </div>
              </div>
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">Emergency Response</h3>
              <p className="text-muted-foreground mb-4">Available 24/7 for immediate assistance</p>
              <a 
                href="tel:1800954117" 
                className="text-2xl font-bold text-orange-500 hover:text-orange-600 block mb-2"
              >
                1800 954 117
              </a>
              <div className="text-sm text-success-green font-medium">
                <div className="flex items-center justify-center gap-2">
                  <div className="status-dot"></div>
                  Average response: 15 minutes
                </div>
              </div>
            </Card>
            
            {/* Standard Contact */}
            <Card className="service-card p-8 text-center">
              <div className="w-16 h-16 bg-accent-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-accent-teal" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">Schedule Inspection</h3>
              <p className="text-muted-foreground mb-4">Book your free mould inspection online</p>
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
                <h2 className="text-3xl font-bold text-foreground mb-6">Melbourne Office</h2>
                
                <Card className="service-card p-6 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-highlight/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-highlight" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">Location</h3>
                      <address className="text-muted-foreground not-italic">
                        Melbourne, VIC 📍<br />
                        Servicing all Melbourne Metro
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
                      <h3 className="font-semibold text-card-foreground mb-2">Operating Hours</h3>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        <li className="font-semibold text-orange-500">Emergency Service: 24/7/365</li>
                        <li>Office Hours: Mon-Fri 7AM-7PM</li>
                        <li>Weekend: Sat-Sun 8AM-6PM</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* Trust Credentials */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground">Why Choose Us?</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="trust-signals p-4">
                      <div className="text-2xl font-bold text-accent-teal">2,500+</div>
                      <div className="text-xs text-muted-foreground">Properties Restored</div>
                    </div>
                    <div className="trust-signals p-4">
                      <div className="text-2xl font-bold text-accent-teal">15+</div>
                      <div className="text-xs text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="trust-signals p-4">
                      <div className="text-2xl font-bold text-accent-teal">2hr</div>
                      <div className="text-xs text-muted-foreground">Average Response</div>
                    </div>
                  </div>
                </div>

                {/* Service Area */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Popular Service Areas:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <div>• Toorak</div>
                    <div>• Brighton</div>
                    <div>• Malvern</div>
                    <div>• Carlton</div>
                    <div>• Richmond</div>
                    <div>• South Yarra</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progressive Contact Form */}
            <div className="lg:col-span-3">
              <Card className="service-card p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Get Your Free Quote
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours with a detailed quote for your project.
                  </p>
                </div>

                {/* Urgency Indicator */}
                <div className="urgency-indicators mb-6">
                  <div className="booking-pressure">
                    <div className="indicator-dot"></div>
                    <span>3 inspections booked in Carlton today</span>
                  </div>
                </div>

                <form className="space-y-6">
                  {/* Step 1: Service Type */}
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">What service do you need? *</Label>
                    <div className="grid md:grid-cols-2 gap-3">
                      <label className="flex items-center space-x-3 cursor-pointer p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                        <input type="radio" name="service" value="emergency" className="text-orange-500" />
                        <div>
                          <div className="font-medium text-orange-500">Emergency Response</div>
                          <div className="text-sm text-muted-foreground">Immediate health hazard</div>
                        </div>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                        <input type="radio" name="service" value="inspection" className="text-accent-teal" />
                        <div>
                          <div className="font-medium">Free Inspection</div>
                          <div className="text-sm text-muted-foreground">Comprehensive assessment</div>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input 
                        id="fullName" 
                        placeholder="Enter your full name" 
                        required 
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="Enter your phone number" 
                        required 
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email address" 
                      required 
                      className="h-12"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="suburb">Suburb *</Label>
                      <Input 
                        id="suburb" 
                        placeholder="Enter your suburb" 
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="propertyType">Property Type</Label>
                      <select 
                        id="propertyType"
                        className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        <option value="">Select property type</option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="commercial">Commercial</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Brief Description of the Issue *</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Please describe your mould issue or restoration needs in detail..." 
                      rows={4}
                      required 
                    />
                  </div>

                  {/* Photo Upload Section */}
                  <div className="space-y-2">
                    <Label htmlFor="photos">Upload Photos (Optional)</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <div className="text-muted-foreground">
                        <div className="mb-2">📷 Upload photos of the affected area</div>
                        <div className="text-sm">Helps us provide a more accurate quote</div>
                      </div>
                      <input type="file" id="photos" multiple accept="image/*" className="hidden" />
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="mt-4"
                        onClick={() => document.getElementById('photos')?.click()}
                      >
                        Choose Files
                      </Button>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    variant="emergency"
                    size="lg" 
                    className="w-full text-lg px-8 py-4 h-auto"
                  >
                    Get My Free Quote Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <div className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our terms and privacy policy. 
                    We'll never share your information.
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Trust Signals - Mobile Optimized */}
      <div className="floating-trust-signals">
        <div className="trust-item">
          <Award className="w-4 h-4 text-accent-teal" />
          <span>4.9/5 Rating</span>
        </div>
        <div className="trust-item">
          <Shield className="w-4 h-4 text-success-green" />
          <span>Fully Insured</span>
        </div>
        <div className="trust-item">
          <Clock className="w-4 h-4 text-orange-500" />
          <span>2hr Response</span>
        </div>
      </div>
    </div>
  );
};