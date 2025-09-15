import React from 'react';
import { ServiceOptimizedImage } from '@/components/OptimizedImage';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ServiceImage {
  src: string;
  service: string;
  stage?: string;
  equipment?: string;
  alt?: string;
  title: string;
  description: string;
  badges?: string[];
}

interface ServiceImageShowcaseProps {
  images: ServiceImage[];
  title?: string;
  layout?: 'grid' | 'hero-gallery' | 'before-after';
  className?: string;
}

export const ServiceImageShowcase: React.FC<ServiceImageShowcaseProps> = ({
  images,
  title,
  layout = 'grid',
  className = '',
}) => {
  if (layout === 'hero-gallery') {
    return (
      <section className={`py-16 bg-muted/50 ${className}`}>
        <div className="container mx-auto px-4">
          {title && (
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              {title}
            </h2>
          )}

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Main hero image */}
            <div className="order-2 lg:order-1">
              <ServiceOptimizedImage
                src={images[0].src}
                service={images[0].service}
                stage={images[0].stage}
                equipment={images[0].equipment}
                alt={images[0].alt}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
                priority={true}
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Supporting images grid */}
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              {images.slice(1, 5).map((image, index) => (
                <div key={index} className="aspect-square">
                  <ServiceOptimizedImage
                    src={image.src}
                    service={image.service}
                    stage={image.stage}
                    equipment={image.equipment}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                    loading="lazy"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (layout === 'before-after') {
    return (
      <section className={`py-16 bg-background ${className}`}>
        <div className="container mx-auto px-4">
          {title && (
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              {title}
            </h2>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            {images.map((image, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative">
                  <ServiceOptimizedImage
                    src={image.src}
                    service={image.service}
                    stage={image.stage}
                    equipment={image.equipment}
                    alt={image.alt}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Overlay badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {image.badges?.map((badge, badgeIndex) => (
                      <Badge
                        key={badgeIndex}
                        variant="secondary"
                        className="bg-white/90 text-gray-800"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {image.title}
                  </h3>
                  <p className="text-muted-foreground">{image.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Default grid layout
  return (
    <section className={`py-16 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            {title}
          </h2>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <ServiceOptimizedImage
                  src={image.src}
                  service={image.service}
                  stage={image.stage}
                  equipment={image.equipment}
                  alt={image.alt}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Overlay for badges */}
                {image.badges && image.badges.length > 0 && (
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {image.badges.map((badge, badgeIndex) => (
                      <Badge
                        key={badgeIndex}
                        variant="secondary"
                        className="bg-white/90 text-gray-800 text-xs"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {image.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {image.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Predefined showcases for different services
export const InspectionServiceShowcase: React.FC<{ className?: string }> = ({ className }) => {
  const inspectionImages: ServiceImage[] = [
    {
      src: '/assets/thermal-imaging-device.jpg',
      service: 'mould inspection',
      equipment: 'thermal imaging technology',
      title: 'Advanced Thermal Imaging',
      description: 'Professional thermal imaging reveals hidden moisture patterns behind walls and in structural elements.',
      badges: ['IICRC Certified', 'Non-Invasive'],
    },
    {
      src: '/assets/moisture-meter-testing.jpg',
      service: 'mould inspection',
      stage: 'moisture content analysis',
      title: 'Precision Moisture Testing',
      description: 'Accurate moisture content readings determine extent of water damage and mould risk.',
      badges: ['Laboratory Accurate', 'Real-time Results'],
    },
    {
      src: '/assets/air-quality-sampling.jpg',
      service: 'mould inspection',
      stage: 'air quality assessment',
      title: 'Comprehensive Air Sampling',
      description: 'Professional air quality testing identifies mould spores and assesses indoor air safety.',
      badges: ['Lab Analysis', 'Health Assessment'],
    },
  ];

  return (
    <ServiceImageShowcase
      images={inspectionImages}
      title="Professional Mould Inspection Process"
      layout="grid"
      className={className}
    />
  );
};

export const RemovalServiceShowcase: React.FC<{ className?: string }> = ({ className }) => {
  const removalImages: ServiceImage[] = [
    {
      src: '/assets/mould-removal-equipment.jpg',
      service: 'mould removal',
      equipment: 'HEPA filtration systems',
      title: 'Professional Equipment Setup',
      description: 'Industrial-grade HEPA filtration and negative air pressure systems ensure safe removal.',
      badges: ['HEPA Filtration', 'Negative Pressure'],
    },
    {
      src: '/assets/containment-barriers.jpg',
      service: 'mould removal',
      stage: 'containment protocol',
      title: 'Complete Area Containment',
      description: 'Professional containment prevents cross-contamination during removal process.',
      badges: ['Full Containment', 'Cross-Contamination Prevention'],
    },
    {
      src: '/assets/mould-removal-transformation.jpg',
      service: 'mould removal',
      stage: 'complete remediation',
      title: 'Complete Transformation',
      description: 'Before and after showing complete mould elimination and surface restoration.',
      badges: ['Complete Removal', 'Surface Restoration'],
    },
  ];

  return (
    <ServiceImageShowcase
      images={removalImages}
      title="Complete Mould Removal Process"
      layout="before-after"
      className={className}
    />
  );
};

export const FoggingServiceShowcase: React.FC<{ className?: string }> = ({ className }) => {
  const foggingImages: ServiceImage[] = [
    {
      src: '/assets/ulv-fogging-equipment.jpg',
      service: 'fogging sanitisation',
      equipment: 'ULV fogging technology',
      title: 'ULV Fogging Technology',
      description: 'Ultra-low volume fogging penetrates all surfaces and hard-to-reach areas.',
      badges: ['ULV Technology', 'Complete Coverage'],
    },
    {
      src: '/assets/fogging-sanitisation.jpg',
      service: 'fogging sanitisation',
      stage: 'antimicrobial treatment',
      title: 'Antimicrobial Sanitisation',
      description: 'Hospital-grade antimicrobials eliminate mould and prevent future growth.',
      badges: ['Hospital Grade', 'Long-term Protection'],
    },
  ];

  return (
    <ServiceImageShowcase
      images={foggingImages}
      title="Advanced Fogging Sanitisation"
      layout="hero-gallery"
      className={className}
    />
  );
};