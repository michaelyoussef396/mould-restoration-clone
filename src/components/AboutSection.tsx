import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Home, Building, Factory, Briefcase } from 'lucide-react';

export const AboutSection = () => {
  const services = [
    { icon: Home, label: 'Residential' },
    { icon: Building, label: 'Commercial' },
    { icon: Factory, label: 'Industrial' },
    { icon: Briefcase, label: 'Corporate' },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Experience Badge */}
        <div className="text-center mb-16">
          <Card className="inline-block p-8 bg-card border border-border">
            <div className="text-6xl font-bold text-highlight mb-2">5+</div>
            <p className="text-muted-foreground text-lg">Years Of Experience</p>
          </Card>
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="mb-6">
            <span className="text-highlight font-semibold tracking-wider uppercase text-sm">
              ABOUT US
            </span>
          </div>
          
          <h2 className="text-section font-bold text-foreground mb-8">
            Melbourne's Trusted Mould Restoration Experts
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Mould & Restoration Co is Melbourne's trusted expert in mould removal and property restoration. 
            We deliver fast, reliable solutions to restore homes and businesses to safe, clean, and healthy spaces. 
            Serving all of Melbourne and surrounding suburbs, our skilled team understands the local challenges 
            and provides tailored services for residential, commercial, and industrial properties. 
            Contact us today for a free evaluation and let us help you reclaim your space.
          </p>
        </div>

        {/* Service Types */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="service-card p-6 text-center">
              <service.icon className="w-12 h-12 mx-auto mb-4 text-highlight" />
              <h3 className="text-card font-semibold text-card-foreground">
                {service.label}
              </h3>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="/about">
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
              More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};