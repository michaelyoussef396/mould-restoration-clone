import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-highlight font-semibold tracking-wider uppercase text-sm">
            CONTACT US
          </span>
          <h2 className="text-section font-bold text-foreground mt-4 mb-4">
            Have a project in mind?
          </h2>
          <p className="text-4xl font-bold text-foreground">
            Let's Talk.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="service-card p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-highlight/10 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-highlight" />
            </div>
            <h3 className="font-semibold text-card-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground">1800 954 117</p>
          </Card>

          <Card className="service-card p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-highlight/10 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-highlight" />
            </div>
            <h3 className="font-semibold text-card-foreground mb-2">Email</h3>
            <p className="text-muted-foreground text-sm">admin@mouldandrestoration.com.au</p>
          </Card>

          <Card className="service-card p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-highlight/10 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-highlight" />
            </div>
            <h3 className="font-semibold text-card-foreground mb-2">Location</h3>
            <p className="text-muted-foreground">Melbourne, VIC</p>
          </Card>

          <Card className="service-card p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-highlight/10 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-highlight" />
            </div>
            <h3 className="font-semibold text-card-foreground mb-2">Hours</h3>
            <p className="text-muted-foreground text-sm">Everyday: 7am - 7pm</p>
          </Card>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button size="lg" className="cta-button text-lg px-12 py-4 h-auto">
            Contact Us Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Ready to restore your space? Contact Mould & Restoration Co today for a professional inspection 
            and let our experienced team help you create a healthier, safer environment.
          </p>
        </div>
      </div>
    </section>
  );
};