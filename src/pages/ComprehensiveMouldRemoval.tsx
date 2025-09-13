import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Clock, CheckCircle } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';
import comprehensiveMouldHero from '@/assets/comprehensive-mould-hero.jpg';
import mouldRemovalEquipment from '@/assets/mould-removal-equipment.jpg';
import mouldRemovalTransformation from '@/assets/mould-removal-transformation.jpg';

export const ComprehensiveMouldRemoval = () => {
  const otherServices = [
    { title: 'Professional Mould Inspections', link: '/services/professional-mould-inspections' },
    { title: 'Complete Material Removal', link: '/services/complete-material-removal' },
    { title: 'Advanced Fogging Sanitisation', link: '/services/advanced-fogging-sanitisation' },
    { title: 'Subfloor Mould Remediation', link: '/service/subfloor-mould-remediation' },
  ];

  const cleaningProcess = [
    {
      step: 1,
      title: 'Detailed Assessment',
      description: 'Identify the type, extent, and cause of mould infestations.'
    },
    {
      step: 2,
      title: 'Containment Setup',
      description: 'Isolate affected areas to prevent cross-contamination during removal.'
    },
    {
      step: 3,
      title: 'Safe Removal',
      description: 'Use specialized equipment and techniques to eliminate mould completely.'
    },
    {
      step: 4,
      title: 'Deep Cleaning',
      description: 'Sanitize and treat all surfaces to prevent future mould growth.'
    },
    {
      step: 5,
      title: 'Final Verification',
      description: 'Conduct thorough inspections to ensure complete mould elimination.'
    }
  ];

  const benefits = [
    'Complete mould elimination at the source',
    'Advanced containment to prevent spread',
    'Health-focused removal techniques',
    'Long-term mould prevention strategies',
    'Professional-grade equipment and products',
    'Detailed documentation and reporting'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${comprehensiveMouldHero})`,
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
              Comprehensive Mould Removal
            </h1>
            <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Thorough Mould Eradication for Healthier, Safer Spaces
            </p>
          </div>
        </div>

        {/* Breadcrumb positioned in top right */}
        <div className="absolute top-32 right-8 z-30 hidden lg:block">
          <div className="text-right">
            <h2 className="text-6xl font-black text-white/20 mb-4">DETAILS</h2>
            <Breadcrumb 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Comprehensive Mould Removal', href: '/services/comprehensive-mould-removal', current: true },
              ]} 
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Other Services */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Explore All Services</h3>
                <div className="space-y-2">
                  {otherServices.map((service, index) => (
                    <a 
                      key={index}
                      href={service.link}
                      className="block text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border/20 last:border-b-0"
                    >
                      {service.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <Card className="service-card p-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center justify-center text-muted-foreground mb-2">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">Mon - Sun 7:00-7:00</span>
                    </div>
                    <a 
                      href="tel:+61481299159" 
                      className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      +61 481 299 159
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Introduction */}
              <div className="mb-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img
                      src={mouldRemovalEquipment}
                      alt="Professional mould removal equipment"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Mould can harm your health, property, and comfort. At <strong>Mould & Restoration</strong>, 
                      our <strong>Comprehensive Mould Removal</strong> service goes beyond surface cleaning to deliver 
                      lasting solutions. By targeting the root causes and applying advanced techniques, we create{' '}
                      <strong>mould-free, healthy environments</strong> you can trust.
                    </p>
                  </div>
                </div>
              </div>

              {/* Deep Cleaning Process */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-8">Our Deep Cleaning Process</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We ensure thorough elimination of mould and its causes:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {cleaningProcess.map((process, index) => (
                    <Card key={index} className="service-card p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                          {process.step}
                        </div>
                        <div>
                          <h3 className="font-semibold text-card-foreground mb-2">{process.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {process.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Transformation Image */}
              <div className="mb-16">
                <img
                  src={mouldRemovalTransformation}
                  alt="Before and after mould removal transformation"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>

              {/* Benefits */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-8">Why Choose Our Comprehensive Approach?</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <Card className="service-card p-8 text-center">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  Ready for Complete Mould Elimination?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Don't let mould compromise your health and property. Contact us today for a comprehensive 
                  assessment and professional removal service.
                </p>
                <Button size="lg" className="cta-button text-lg px-8 py-4 h-auto">
                  Book Your Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
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
