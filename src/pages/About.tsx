import { Navigation } from '@/components/Navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';
import { Check } from 'lucide-react';
import aboutHero from '@/assets/about-hero.jpg';
import visionInterior from '@/assets/vision-interior.jpg';
import experienceFurniture from '@/assets/experience-furniture.jpg';
import storySpace from '@/assets/story-space.jpg';

const About = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '/about', current: true },
  ];

  const visionPoints = [
    'Bright, Restored Spaces',
    'Safe and Healthy Homes',
    '100% Customer Satisfaction',
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutHero})` }}
        >
          <div className="absolute inset-0 hero-bg"></div>
          <div className="absolute inset-0 texture-overlay"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Large ABOUT US text in background */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 opacity-10">
              <span className="text-9xl font-black text-foreground select-none">ABOUT US</span>
            </div>
            
            {/* Breadcrumb */}
            <div className="mb-8">
              <Breadcrumb items={breadcrumbItems} />
            </div>
            
            <h1 className="text-hero font-bold text-foreground mb-8 leading-tight max-w-3xl">
              Restoring Health, Safety, and Trust – One Space at a Time
            </h1>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <span className="text-highlight font-semibold tracking-wider uppercase text-sm">
                Our Vision
              </span>
              <h2 className="text-section font-bold text-foreground mt-4 mb-8">
                Creating Healthier, Safer Environments for All
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At Mould & Restoration Co, we envision a world where every home and business is free from mould and harmful contaminants. Through innovation, expertise, and dedication, we restore spaces and bring peace of mind to our clients.
              </p>

              {/* Vision Points */}
              <div className="space-y-4">
                {visionPoints.map((point, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-highlight/10 rounded-full flex items-center justify-center mr-4">
                      <Check className="w-4 h-4 text-highlight" />
                    </div>
                    <span className="text-foreground font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src={visionInterior}
                alt="Clean restored interior space"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <img
                src={experienceFurniture}
                alt="Elegant restored furniture"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            {/* Experience Badge */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <Card className="inline-block p-12 bg-card border border-border">
                <div className="text-8xl font-bold text-highlight mb-4">5+</div>
                <p className="text-muted-foreground text-xl">Years Of Experience</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <span className="text-highlight font-semibold tracking-wider uppercase text-sm">
                Our Story
              </span>
              <h2 className="text-section font-bold text-foreground mt-4 mb-8">
                Building Healthier Spaces, One Restoration at a Time
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Mould & Restoration Co our story is one of dedication, expertise, and care. 
                We started with a mission: to provide homes and businesses with mould-free, 
                safe environments where families and teams can thrive. With years of experience, 
                advanced techniques, and a passion for excellence, we've helped countless clients 
                transform their spaces. From minor repairs to large-scale restorations, we're 
                committed to delivering long-term solutions and peace of mind for every project.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src={storySpace}
                alt="Modern clean office space"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Bottom Message */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            At Mould & Restoration, we bring expertise and care to every project. 
            Trust us to safeguard your environment, ensuring clean, mould-free spaces 
            for you and your loved ones.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default About;