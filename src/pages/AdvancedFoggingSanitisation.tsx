import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Clock, CheckCircle } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';
import advancedFoggingHero from '@/assets/advanced-fogging-hero.jpg';
import ulvFoggingEquipment from '@/assets/ulv-fogging-equipment.jpg';
import sanitisationProcess from '@/assets/sanitisation-process.jpg';

export const AdvancedFoggingSanitisation = () => {
  const sidebarServices = [
    { 
      title: 'Professional Mould Inspections', 
      href: '/services/professional-mould-inspections' 
    },
    { 
      title: 'Complete Material Removal', 
      href: '/services/complete-material-removal' 
    },
    { 
      title: 'Comprehensive Mould Removal', 
      href: '/services/comprehensive-mould-removal' 
    },
    { 
      title: 'Subfloor Mould Remediation', 
      href: '/services/subfloor-mould-remediation' 
    },
  ];

  const benefits = [
    { text: 'Deep Penetration: Fine mist targets hard-to-reach areas like crevices, corners, and behind fixtures.' },
    { text: 'Widespread Coverage: Efficiently sanitises large areas quickly without missing a spot.' },
    { text: 'Eco-Friendly Solutions: Safe for you, your property, and the environment while being tough on mould.' },
    { text: 'Prevents Cross-Contamination: Settling mist neutralises spores on contact to stop further spread.' },
    { text: 'Safe and Effective: Ideal for homes, offices, and commercial spaces with minimal disruption.' },
  ];

  const processSteps = [
    {
      title: 'Inspection',
      description: 'We assess the affected areas to determine the extent of the mould problem.'
    },
    {
      title: 'ULV Fogging Treatment',
      description: 'Using advanced machines, we thoroughly sanitize the space.'
    },
    {
      title: 'Post-Fogging Assessment',
      description: 'We ensure all mould spores are eliminated and the environment is safe for occupancy.'
    },
    {
      title: 'Client Education',
      description: 'Tips and recommendations to maintain a mould-free environment.'
    }
  ];

  const mainBenefits = [
    { text: 'Complete Sanitisation: Targets every mould spore, even in hidden areas.' },
    { text: 'Prevents Recurrence: Eliminates spores, minimising the risk of future growth.' },
    { text: 'Restores Comfort: Enjoy a fresh, clean space free from mould and odors.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${advancedFoggingHero})`,
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
              Advanced Fogging Sanitisation
            </h1>
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
                { label: 'Service Details', href: '/services/advanced-fogging-sanitisation', current: true },
              ]} 
            />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Card className="p-8 mb-8 bg-primary text-primary-foreground">
                  <h3 className="text-section font-bold mb-6">Explore All Services</h3>
                  <div className="space-y-4">
                    {sidebarServices.map((service, index) => (
                      <a
                        key={index}
                        href={service.href}
                        className="block p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                      >
                        <span className="text-sm font-medium">{service.title}</span>
                      </a>
                    ))}
                  </div>
                </Card>

                {/* Contact Info Card */}
                <Card className="p-6 bg-muted/50">
                  <img
                    src={ulvFoggingEquipment}
                    alt="ULV Fogging Equipment"
                    className="w-full aspect-square object-cover rounded-lg mb-4"
                  />
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-highlight" />
                      <span className="text-sm font-medium">Mon - Sun 7.00-7.00</span>
                    </div>
                    <a 
                      href="tel:+61481299159" 
                      className="flex items-center space-x-2 text-highlight hover:text-highlight/80 transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      <span className="font-semibold">+61 481 299 159</span>
                    </a>
                  </div>
                </Card>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-16">
              
              {/* Hero Image */}
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src={sanitisationProcess}
                  alt="Advanced Fogging Sanitisation Process"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Main Description */}
              <div>
                <h2 className="text-section font-bold text-foreground mb-8">
                  Comprehensive Mould Eradication for a Healthier Space
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Using state-of-the-art <strong>ULV fogging technology</strong>, we sanitise and clean mould-affected areas, 
                  leaving your space <strong>fresh, clean, and mould-free</strong>. Our advanced fogging process penetrates 
                  every corner, targeting mould spores and preventing future growth.
                </p>
              </div>

              {/* Why Choose ULV Fogging */}
              <div>
                <h3 className="text-card font-bold text-foreground mb-6">
                  Why Choose ULV Fogging?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our <strong>Ultra Low Volume (ULV)</strong> fogging delivers unparalleled sanitisation benefits:
                </p>
                <div className="grid gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Process */}
              <div>
                <h3 className="text-card font-bold text-foreground mb-8">
                  Our Process
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {processSteps.map((step, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <h4 className="font-bold text-card-foreground">{step.title}</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-card font-bold text-foreground mb-6">
                  Benefits
                </h3>
                <div className="grid gap-4">
                  {mainBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-highlight mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <Card className="p-8 bg-primary text-primary-foreground text-center">
                <h3 className="text-card font-bold mb-4">
                  Book Your Fogging Appointment Now!
                </h3>
                <p className="mb-6 opacity-90">
                  Transform your home or business with <strong>Advanced Fogging Sanitization</strong>. 
                  Fast, safe, and effective solutions for a mould-free environment.
                </p>
                <Button variant="secondary" size="lg" className="group">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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