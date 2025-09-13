import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';
import servicesHero from '@/assets/services-hero.jpg';
import residentialInspection from '@/assets/residential-inspection.jpg';
import commercialRemoval from '@/assets/commercial-removal.jpg';
import architectureFogging from '@/assets/architecture-fogging.jpg';
import officeDesign from '@/assets/office-design.jpg';
import designConsultation from '@/assets/design-consultation.jpg';

export const Services = () => {
  const services = [
    {
      title: 'Professional Mould Inspections',
      description: 'Early detection for lasting protection – identify and prevent mould issues before they escalate.',
      image: residentialInspection,
      link: '/services/professional-mould-inspections',
    },
    {
      title: 'Complete Material Removal',
      description: 'For severe mould infestations, we offer the removal of plaster walls, insulation, ceilings, skirting, wardrobes, and more to ensure complete eradication and lasting solutions.',
      image: commercialRemoval,
      link: '/services/complete-material-removal',
    },
    {
      title: 'Advanced Fogging Sanitisation',
      description: 'Thoroughly sanitize mould-affected areas with advanced ULV fogging technology. Penetrate hard-to-reach spaces and ensure long-lasting mould prevention.',
      image: architectureFogging,
      link: '/service/advanced-fogging-sanitisation',
    },
    {
      title: 'Comprehensive Mould Removal',
      description: 'Eliminate mould at its source with our deep and thorough removal services. We ensure long-term solutions to protect your health and property.',
      image: officeDesign,
      link: '/service/comprehensive-mould-removal',
    },
    {
      title: 'Subfloor Mould Remediation',
      description: 'Protect your property\'s foundation with thorough subfloor mould remediation. We eliminate mould, improve ventilation, and prevent future growth.',
      image: designConsultation,
      link: '/service/subfloor-mould-remediation',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${servicesHero})`,
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
              Expert Mould Remediation Services Tailored to Your Needs
            </h1>
          </div>
        </div>

        {/* Breadcrumb positioned in top right */}
        <div className="absolute top-32 right-8 z-30 hidden lg:block">
          <div className="text-right">
            <h2 className="text-6xl font-black text-white/20 mb-4">SERVICES</h2>
            <Breadcrumb 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services', current: true },
              ]} 
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <a key={index} href={service.link} className="block">
                <Card className="service-card overflow-hidden group cursor-pointer">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Arrow overlay */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-card font-bold text-card-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Bottom Message */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Mould & Restoration, we bring expertise and care to every project. 
              Trust us to safeguard your environment, ensuring clean, mould-free spaces 
              for you and your loved ones.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};