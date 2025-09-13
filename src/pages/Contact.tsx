import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';
import heroBackground from '@/assets/hero-background.jpg';

export const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-hero font-black text-white mb-8 leading-tight">
              Let Us Restore Your Home – Get In Touch!
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Your Dream Space Is Just A Call Away!
            </p>
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

      {/* Contact Information & Form Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <Card className="service-card p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-highlight/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-highlight" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Location</h3>
                      <p className="text-muted-foreground">Melbourne, VIC 📍</p>
                    </div>
                  </div>
                </Card>

                <Card className="service-card p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-highlight/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-highlight" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Phone</h3>
                      <a 
                        href="tel:1800954117" 
                        className="text-highlight hover:text-highlight/80 transition-colors font-semibold"
                      >
                        1800 954 117
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="service-card p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-highlight/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-highlight" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Email</h3>
                      <a 
                        href="mailto:admin@mouldandrestoration.com.au" 
                        className="text-highlight hover:text-highlight/80 transition-colors text-sm"
                      >
                        admin@mouldandrestoration.com.au
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="service-card p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-highlight/10 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-highlight" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Hours</h3>
                      <p className="text-muted-foreground text-sm">Monday - Sunday: 7 AM - 7 PM</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="service-card p-8">
                <div className="mb-8">
                  <h2 className="text-section font-bold text-foreground mb-4">
                    Get Your Free Quote
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours with a detailed quote for your project.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input 
                        id="fullName" 
                        placeholder="Enter your full name" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="Enter your phone number" 
                        required 
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
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Date of Booking</Label>
                      <Input 
                        id="preferredDate" 
                        type="date" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Time of Booking</Label>
                      <Input 
                        id="preferredTime" 
                        type="time" 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="address">Street Name & Number (Optional)</Label>
                      <Input 
                        id="address" 
                        placeholder="Enter your street address" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="suburb">Suburb</Label>
                      <Input 
                        id="suburb" 
                        placeholder="Enter your suburb" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Brief Description of the Issue *</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Please describe your mould issue or restoration needs in detail..." 
                      rows={5}
                      required 
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="cta-button text-lg px-8 py-4 h-auto w-full md:w-auto"
                  >
                    Submit Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};