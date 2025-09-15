import React, { useState } from 'react';
import { LocationOptimizedImage } from '@/components/OptimizedImage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

interface LocationImage {
  src: string;
  serviceType: string;
  propertyType: string;
  context?: string;
  stage?: string;
  equipment?: string;
  caption?: string;
}

interface LocationImageGalleryProps {
  location: string;
  images: LocationImage[];
  title?: string;
  className?: string;
}

export const LocationImageGallery: React.FC<LocationImageGalleryProps> = ({
  location,
  images,
  title,
  className = '',
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;

    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
    } else {
      setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <>
      <section className={`py-16 bg-background ${className}`}>
        <div className="container mx-auto px-4">
          {title && (
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              {title}
            </h2>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden cursor-pointer group hover:shadow-lg transition-shadow"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-video overflow-hidden">
                  <LocationOptimizedImage
                    src={image.src}
                    location={location}
                    propertyType={image.propertyType}
                    serviceType={image.serviceType}
                    context={image.context}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                {image.caption && (
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">{image.caption}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            {/* Close button */}
            <Button
              variant="outline"
              size="sm"
              className="absolute top-4 right-4 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="w-4 h-4" />
            </Button>

            {/* Navigation buttons */}
            {images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={() => navigateLightbox('prev')}
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={() => navigateLightbox('next')}
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </>
            )}

            {/* Main image */}
            <div className="w-full h-full flex items-center justify-center">
              <LocationOptimizedImage
                src={images[selectedImage].src}
                location={location}
                propertyType={images[selectedImage].propertyType}
                serviceType={images[selectedImage].serviceType}
                context={images[selectedImage].context}
                className="max-w-full max-h-full object-contain"
                loading="eager"
                priority={true}
              />
            </div>

            {/* Caption */}
            {images[selectedImage].caption && (
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <div className="bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                  <p className="text-sm">{images[selectedImage].caption}</p>
                  <p className="text-xs text-white/70 mt-1">
                    {selectedImage + 1} of {images.length}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

// Predefined image galleries for common Melbourne locations
export const BrightonImageGallery: React.FC<{ className?: string }> = ({ className }) => {
  const brightonImages: LocationImage[] = [
    {
      src: '/assets/brighton-federation-before.jpg',
      serviceType: 'mould removal',
      propertyType: 'Federation home',
      context: 'coastal salt air damage',
      caption: 'Brighton Federation home before mould treatment - typical coastal weatherboard deterioration',
    },
    {
      src: '/assets/brighton-federation-after.jpg',
      serviceType: 'mould removal',
      propertyType: 'Federation home',
      context: 'restored coastal property',
      caption: 'Completed restoration showing preserved heritage features and weatherboard protection',
    },
    {
      src: '/assets/brighton-beach-house-inspection.jpg',
      serviceType: 'mould inspection',
      propertyType: 'beach house',
      context: 'thermal imaging assessment',
      equipment: 'thermal imaging technology',
      caption: 'Professional thermal imaging inspection revealing moisture patterns in beachside property',
    },
  ];

  return (
    <LocationImageGallery
      location="Brighton"
      images={brightonImages}
      title="Brighton Coastal Property Transformations"
      className={className}
    />
  );
};

export const CarltonImageGallery: React.FC<{ className?: string }> = ({ className }) => {
  const carltonImages: LocationImage[] = [
    {
      src: '/assets/carlton-victorian-terrace-before.jpg',
      serviceType: 'mould remediation',
      propertyType: 'Victorian terrace',
      context: 'heritage building preservation',
      caption: 'Carlton Victorian terrace requiring heritage-sensitive mould treatment',
    },
    {
      src: '/assets/carlton-student-housing-treatment.jpg',
      serviceType: 'mould removal',
      propertyType: 'student accommodation',
      context: 'university precinct high-occupancy',
      caption: 'Professional treatment of student housing near University of Melbourne',
    },
    {
      src: '/assets/carlton-basement-remediation.jpg',
      serviceType: 'subfloor remediation',
      propertyType: 'heritage terrace',
      context: 'bluestone foundation treatment',
      caption: 'Specialized basement remediation preserving original bluestone foundations',
    },
  ];

  return (
    <LocationImageGallery
      location="Carlton"
      images={carltonImages}
      title="Carlton Heritage Property Restorations"
      className={className}
    />
  );
};

export const RichmondImageGallery: React.FC<{ className?: string }> = ({ className }) => {
  const richmondImages: LocationImage[] = [
    {
      src: '/assets/richmond-warehouse-conversion-before.jpg',
      serviceType: 'comprehensive removal',
      propertyType: 'warehouse conversion',
      context: 'industrial property transformation',
      caption: 'Richmond warehouse conversion with extensive mould contamination',
    },
    {
      src: '/assets/richmond-modern-apartment-fogging.jpg',
      serviceType: 'fogging sanitisation',
      propertyType: 'modern apartment',
      context: 'ULV misting treatment',
      equipment: 'ULV fogging technology',
      caption: 'Advanced fogging sanitisation in Richmond apartment complex',
    },
    {
      src: '/assets/richmond-material-removal-progress.jpg',
      serviceType: 'material removal',
      propertyType: 'industrial conversion',
      context: 'safe demolition process',
      caption: 'Complete material removal revealing structural elements ready for restoration',
    },
  ];

  return (
    <LocationImageGallery
      location="Richmond"
      images={richmondImages}
      title="Richmond Industrial Property Transformations"
      className={className}
    />
  );
};