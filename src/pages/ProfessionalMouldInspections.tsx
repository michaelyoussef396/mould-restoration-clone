import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Clock } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';
import professionalMouldHero from '@/assets/professional-mould-hero.jpg';
import thermalImagingDevice from '@/assets/thermal-imaging-device.jpg';
import cleanResidentialInterior from '@/assets/clean-residential-interior.jpg';

export const ProfessionalMouldInspections = () => {
  const otherServices = [
    { title: 'Complete Material Removal', href: '/services/complete-material-removal' },
    { title: 'Advanced Fogging Sanitisation', href: '/services/advanced-fogging-sanitisation' },
    { title: 'Comprehensive Mould Removal', href: '/services/comprehensive-mould-removal' },
    { title: 'Subfloor Mould Remediation', href: '/services/subfloor-mould-remediation' },
  ];

  const assessmentSteps = [
    {
      title: 'Precision Inspection',
      description: 'Our expert team combines visual inspections with advanced diagnostic tools to uncover even hidden mould growth. From subtle discolouration to moisture pockets, no detail goes unnoticed.'
    },
    {
      title: 'Cause Identification',
      description: 'Understanding why mould appears is key. Whether it\'s poor ventilation, leaks, or moisture build-up, we identify the root causes to ensure lasting solutions.'
    },
    {
      title: 'Recommendation Report',
      description: 'Receive a comprehensive report outlining findings, causes, and tailored steps to prevent mould recurrence.'
    },
    {
      title: 'Preventative Measures',
      description: 'We advise on ventilation, moisture control, and repairs to stop mould before it spreads.'
    },
    {
      title: 'Client Consultation',
      description: 'Open communication is our priority. We walk you through our findings, answer your questions, and equip you with actionable insights for long-term prevention.'
    }
  ];

  const benefits = [
    'Comprehensive Detection: Uncover even the smallest mould problems to prevent larger, costly issues.',
    'Informed Decisions: Understand the causes of mould and address the root problems effectively.',
    'Actionable Recommendations: Receive clear, practical steps to protect your property.',
    'Long-Term Prevention: Stop mould growth with targeted advice on moisture and ventilation management.',
    'Peace of Mind: Transparent reporting and consultations ensure confidence in your next steps.'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${professionalMouldHero})`,
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
              Professional Mould Inspections
            </h1>
            <p className="text-xl text-white/90 font-medium max-w-2xl mx-auto">
              Early detection for lasting protection – identify and prevent mould issues before they escalate.
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
                  src={cleanResidentialInterior} 
                  alt="Clean residential interior" 
                  className="w-full h-64 object-cover rounded-lg mb-8"
                />
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Prevention is better than cure. At <strong>Mould & Restoration</strong>, our professional mould inspections identify potential problem areas early, safeguarding your property from costly damage and health risks. With our detailed assessments, you gain peace of mind and a clear path to a mould-free environment.
                </p>
              </div>

              {/* Detailed Assessments */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-8">Detailed Assessments</h2>
                <div className="space-y-8">
                  {assessmentSteps.map((step, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Thermal Imaging */}
              <div className="mb-12">
                <img 
                  src={thermalImagingDevice} 
                  alt="Thermal imaging device showing heat patterns" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-8">Benefits of Professional Mould Inspections</h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Free Consultation CTA */}
              <Card className="p-8 bg-primary/5 border-primary/20">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Book Your Free Consultation</h3>
                  <p className="text-muted-foreground mb-6">
                    Get expert advice on mould inspections today! No cost, no commitments.
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