import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';
import subfloorRemediationHero from '@/assets/subfloor-remediation-hero.jpg';
import subfloorInspection from '@/assets/subfloor-inspection.jpg';
import subfloorVentilation from '@/assets/subfloor-ventilation.jpg';
import residentialInspection from '@/assets/residential-inspection.jpg';
import commercialRemoval from '@/assets/commercial-removal.jpg';
import architectureFogging from '@/assets/architecture-fogging.jpg';
import officeDesign from '@/assets/office-design.jpg';

export const SubfloorMouldRemediation = () => {
  const otherServices = [
    {
      title: 'Professional Mould Inspections',
      image: residentialInspection,
      link: '/services/professional-mould-inspections',
    },
    {
      title: 'Complete Material Removal',
      image: commercialRemoval,
      link: '/services/complete-material-removal',
    },
    {
      title: 'Advanced Fogging Sanitisation',
      image: architectureFogging,
      link: '/services/advanced-fogging-sanitisation',
    },
    {
      title: 'Comprehensive Mould Removal',
      image: officeDesign,
      link: '/services/comprehensive-mould-removal',
    },
  ];

  const processSteps = [
    {
      title: 'Insightful Inspection',
      description: 'Using advanced tools, we conduct a thorough examination to locate and assess all mould-affected areas.',
    },
    {
      title: 'Moisture Mastery',
      description: 'Identify and rectify any sources of moisture to create a dry and stable subfloor environment.',
    },
    {
      title: 'Ventilation Optimisation',
      description: 'Assess and improve airflow to reduce humidity and deter mould growth.',
    },
    {
      title: 'Mould Detection & Removal',
      description: 'From joists to flooring, we eliminate all traces of mould at its root.',
    },
    {
      title: 'Effective Treatment',
      description: 'We apply treatments to destroy mould spores and prevent recurrence.',
    },
    {
      title: 'Subfloor Conditioning',
      description: 'Raking and conditioning the area to create an environment resistant to future mould invasions.',
    },
  ];

  const benefits = [
    'Accurate Diagnostics: Identify and address hidden mould infestations effectively.',
    'Improved Air Quality: Eliminate mould at the source, ensuring cleaner, healthier indoor air.',
    'Future-Proof Protection: Prevent future mould issues with enhanced ventilation and moisture control.',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${subfloorRemediationHero})`,
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
              Subfloor Mould Remediation
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ensure a Strong, Mould-Free Foundation for Your Home
            </p>
          </div>
        </div>

        {/* Breadcrumb positioned in top right */}
        <div className="absolute top-32 right-8 z-30 hidden lg:block">
          <div className="text-right">
            <h2 className="text-6xl font-black text-white/20 mb-4">SERVICE DETAILS</h2>
            <Breadcrumb 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Subfloor Mould Remediation', href: '/services/subfloor-mould-remediation', current: true },
              ]} 
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The subfloor is the unseen shield of your property, supporting structural integrity and indoor air quality. 
                Mould infestation in this area can cause severe damage if left untreated. At Mould & Restoration, our 
                Subfloor Mould Remediation service eliminates mould, fixes underlying causes, and ensures long-term protection.
              </p>
            </div>

            {/* Image */}
            <div className="mb-12">
              <img
                src={subfloorInspection}
                alt="Subfloor inspection with advanced diagnostic equipment"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            {/* Our Process */}
            <div className="mb-12">
              <h2 className="text-section font-bold text-foreground mb-8">Our Process</h2>
              <p className="text-muted-foreground mb-8">
                We provide a meticulous, step-by-step remediation approach:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {processSteps.map((step, index) => (
                  <Card key={index} className="service-card p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="mb-12">
              <img
                src={subfloorVentilation}
                alt="Subfloor ventilation system and moisture control"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h2 className="text-section font-bold text-foreground mb-8">Benefits of Subfloor Mould Remediation</h2>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-highlight flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-muted/20 rounded-lg p-8 text-center">
              <h3 className="text-card font-bold text-foreground mb-4">
                Book Your Subfloor Mould Remediation Today!
              </h3>
              <p className="text-muted-foreground mb-6">
                Ensure a safe and stable foundation for your property with Subfloor Mould Remediation. 
                Fast, thorough, and lasting results tailored for your home.
              </p>
              <Button size="lg" className="cta-button text-lg px-8 py-4 h-auto">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Contact Info */}
              <Card className="service-card p-6 mb-8">
                <div className="text-center mb-6">
                  <h3 className="font-bold text-card-foreground mb-4">Need Immediate Help?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4 text-highlight" />
                      <span className="text-sm text-muted-foreground">Mon - Sun 7.00-7.00</span>
                    </div>
                    <a 
                      href="tel:1800954117" 
                      className="block text-lg font-bold text-highlight hover:text-highlight/80 transition-colors"
                    >
                      1800 954 117
                    </a>
                  </div>
                </div>
              </Card>

              {/* Other Services */}
              <Card className="service-card p-6">
                <h3 className="font-bold text-card-foreground mb-6">Explore All Services</h3>
                <div className="space-y-4">
                  {otherServices.map((service, index) => (
                    <a
                      key={index}
                      href={service.link}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-card-foreground group-hover:text-highlight transition-colors">
                          {service.title}
                        </h4>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-highlight transition-colors" />
                    </a>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};
