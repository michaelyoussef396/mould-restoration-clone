import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import mouldInspection from '@/assets/mould-inspection.jpg';
import materialRemoval from '@/assets/material-removal.jpg';
import foggingSanitisation from '@/assets/fogging-sanitisation.jpg';
import mouldRemoval from '@/assets/mould-removal.jpg';
import subfloorRemediation from '@/assets/subfloor-remediation.jpg';

export const ServicesSection = () => {
  const services = [
    {
      title: 'Professional Mould Inspections',
      description: 'Early detection for lasting protection – identify and prevent mould issues before they escalate.',
      image: mouldInspection,
    },
    {
      title: 'Complete Material Removal',
      description: 'For severe mould infestations, we offer the removal of plaster walls, insulation, ceilings, skirting, wardrobes, and more to ensure complete eradication and lasting solutions.',
      image: materialRemoval,
    },
    {
      title: 'Advanced Fogging Sanitisation',
      description: 'Thoroughly sanitize mould-affected areas with advanced ULV fogging technology. Penetrate hard-to-reach spaces and ensure long-lasting mould prevention.',
      image: foggingSanitisation,
    },
    {
      title: 'Comprehensive Mould Removal',
      description: 'Eliminate mould at its source with our deep and thorough removal services. We ensure long-term solutions to protect your health and property.',
      image: mouldRemoval,
    },
    {
      title: 'Subfloor Mould Remediation',
      description: 'Protect your property\'s foundation with thorough subfloor mould remediation. We eliminate mould, improve ventilation, and prevent future growth.',
      image: subfloorRemediation,
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-highlight font-semibold tracking-wider uppercase text-sm">
            SERVICES
          </span>
          <h2 className="text-section font-bold text-foreground mt-4 mb-8">
            Our Expert Restoration Services in Melbourne
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="service-card overflow-hidden group cursor-pointer">
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} Melbourne - IICRC certified mould restoration process`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-card font-bold text-card-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-highlight font-medium group-hover:text-highlight/80 transition-colors">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Mould & Restoration, we bring expertise and care to every project. 
            Trust us to safeguard your environment, ensuring clean, mould-free spaces 
            for you and your loved ones.
          </p>
        </div>
      </div>
    </section>
  );
};