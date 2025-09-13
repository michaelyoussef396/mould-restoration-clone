import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Clock, CheckCircle } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';
import materialRemovalHero from '@/assets/material-removal-hero.jpg';
import wallRemovalProgress from '@/assets/wall-removal-progress.jpg';
import commercialRemovalWork from '@/assets/commercial-removal-work.jpg';

export const CompleteMaterialRemoval = () => {
  const otherServices = [
    { title: 'Professional Mould Inspections', href: '/services/professional-mould-inspections' },
    { title: 'Advanced Fogging Sanitisation', href: '/services/advanced-fogging-sanitisation' },
    { title: 'Comprehensive Mould Removal', href: '/services/comprehensive-mould-removal' },
    { title: 'Subfloor Mould Remediation', href: '/services/subfloor-mould-remediation' },
  ];

  const removalProcesses = [
    {
      title: 'Plaster Walls',
      description: 'Compromised sections are removed to prevent mould spread and structural weakening.'
    },
    {
      title: 'Insulation',
      description: 'We replace mould-affected insulation to restore safety and thermal efficiency.'
    },
    {
      title: 'Ceilings',
      description: 'We eliminate mould caused by leaks, preserving the structure above.'
    },
    {
      title: 'Skirting',
      description: 'Moisture-prone boards are replaced for a clean, mould-free finish.'
    },
    {
      title: 'Architraves',
      description: 'Damaged door and window trims are carefully replaced to maintain function and appearance.'
    },
    {
      title: 'Wardrobes',
      description: 'Mould inside confined wardrobe spaces is removed to protect your belongings.'
    },
    {
      title: 'Flooring',
      description: 'We address mould beneath carpets, wood, or tiles, ensuring a solid foundation.'
    },
    {
      title: 'Cornice',
      description: 'Mould-affected decorative trims are replaced for a pristine finish.'
    }
  ];

  const benefits = [
    'Lasting Solutions: Address mould at its root to prevent recurrence.',
    'Protect Structural Integrity: Safeguard your property against long-term damage.',
    'Save Future Costs: Eliminate mould-related repairs and health risks early.'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${materialRemovalHero})`,
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
              Complete Material Removal
            </h1>
            <p className="text-xl text-white/90 font-medium max-w-2xl mx-auto">
              For severe mould infestations, we offer the removal of plaster walls, insulation, ceilings, skirting, wardrobes, and more to ensure complete eradication and lasting solutions.
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
                { label: 'Service Details', href: '', current: true },
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
              <Card className="p-6 mb-8">
                <h3 className="text-xl font-bold text-primary mb-6">Explore All Services</h3>
                <div className="space-y-3">
                  {otherServices.map((service, index) => (
                    <a
                      key={index}
                      href={service.href}
                      className="block p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors group"
                    >
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </span>
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">Mon - Sun 7.00-7.00</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:+61481299159" className="text-lg font-bold text-primary hover:text-primary/80">
                      +61 481 299 159
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Introduction */}
              <div className="mb-12">
                <img 
                  src={commercialRemovalWork} 
                  alt="Commercial interior showing material removal work" 
                  className="w-full h-64 object-cover rounded-lg mb-8"
                />
                
                <h2 className="text-3xl font-bold text-foreground mb-6">Safeguard Your Property with Thorough Mould Eradication</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Superficial treatments won't suffice for severe mould infestations. At <strong>Mould & Restoration</strong>, our <strong>Complete Material Removal</strong> service ensures the <strong>root cause of mould</strong> is addressed. We go beyond surface-level cleaning, eliminating mould and restoring safety to your property.
                </p>
              </div>

              {/* Our Process */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-8">Our Process</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We meticulously assess and remove mould-affected materials to guarantee long-term results:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {removalProcesses.map((process, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <CheckCircle className="h-6 w-6 text-primary mt-1" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground mb-2">{process.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{process.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Progress Image */}
              <div className="mb-12">
                <img 
                  src={wallRemovalProgress} 
                  alt="Wall removal progress showing exposed framing" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-8">Benefits</h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Appointment CTA */}
              <Card className="p-8 bg-primary/5 border-primary/20">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Book Your Appointment Now!</h3>
                  <p className="text-muted-foreground mb-6">
                    Transform your space with expert <strong>Complete Material Removal</strong> services. Fast, safe, and effective.
                  </p>
                  <Button size="lg" className="group">
                    Contact Us Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
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