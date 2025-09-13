import { Card } from '@/components/ui/card';

export const ProcessSection = () => {
  const processes = [
    {
      number: '01',
      title: 'Discovery & Consultation',
      description: 'We begin with an in-depth consultation to understand your needs, goals, and property concerns.',
    },
    {
      number: '02',
      title: 'Comprehensive Inspection',
      description: 'Our experts conduct a thorough assessment to identify mould issues and root causes.',
    },
    {
      number: '03',
      title: 'Customized Plan Development',
      description: 'We design a tailored remediation plan, incorporating the best solutions for your unique space.',
    },
    {
      number: '04',
      title: 'Treatment & Remediation',
      description: 'Using cutting-edge techniques, we eliminate mould, repair affected areas, and prevent future issues.',
    },
    {
      number: '05',
      title: 'Final Assessment & Handover',
      description: 'We ensure your property is completely restored and mould-free, providing guidance to maintain a healthy environment.',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-highlight font-semibold tracking-wider uppercase text-sm">
            PROCESS
          </span>
          <h2 className="text-section font-bold text-foreground mt-4">
            Our Working Process
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <Card key={index} className="service-card p-8 relative">
              {/* Step Number */}
              <div className="process-step w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-xl font-bold">#{process.number}</span>
              </div>

              {/* Content */}
              <h3 className="text-card font-bold text-card-foreground mb-4">
                {process.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {process.description}
              </p>

              {/* Connector Line for larger screens */}
              {index < processes.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-border"></div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};