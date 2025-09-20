import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Zap, Users, ArrowRight } from 'lucide-react';

export const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Expertise You Can Trust',
      description: 'With years of experience, our team identifies root causes and delivers effective, lasting solutions for your property.',
    },
    {
      icon: Zap,
      title: 'Advanced Technology',
      description: 'We use the latest tools and eco-friendly techniques to ensure your space remains healthy, safe, and mould-free.',
    },
    {
      icon: Users,
      title: 'Client-Centric Service',
      description: 'From consultation to completion, we prioritise your needs, providing clear communication and tailored results.',
    },
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground">
            We Deliver Expertise & Client Care
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="service-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-highlight/10 rounded-full flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-highlight" />
              </div>
              <h3 className="text-card font-bold text-card-foreground mb-4">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
            Learn More
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};