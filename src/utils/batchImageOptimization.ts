// Batch image optimisation utility for Melbourne location pages
// Automatically implements optimized images across all 144+ pages

import { generateLocationImages, getOptimizedImage, HERO_IMAGES, SERVICE_IMAGES } from './imageAssets';

export interface LocationPageOptimization {
  location: string;
  heroImage: string;
  propertyImages: string[];
  processImages: string[];
  galleryImages: Array<{
    src: string;
    service: 'inspection' | 'removal' | 'remediation' | 'fogging' | 'materialRemoval' | 'subfloor';
    context: string;
  }>;
}

// Melbourne suburbs with their optimisation profiles
export const MELBOURNE_LOCATION_PROFILES: Record<string, {
  propertyTypes: string[];
  contexts: string[];
  specialties: string[];
  environmental: string;
}> = {
  Brighton: {
    propertyTypes: ['Federation home', 'coastal property', 'weatherboard house', 'beach house'],
    contexts: ['salt air exposure', 'bayside location', 'heritage construction', 'marine environment'],
    specialties: ['coastal property specialist', 'salt air damage treatment', 'weatherboard preservation'],
    environmental: 'coastal humidity and salt air corrosion challenges'
  },
  Carlton: {
    propertyTypes: ['Victorian terrace', 'heritage building', 'student accommodation', 'university housing'],
    contexts: ['heritage architecture', 'university precinct', 'high occupancy', 'historic construction'],
    specialties: ['heritage preservation', 'student housing specialist', 'Victorian terrace expert'],
    environmental: 'urban density and heritage building moisture challenges'
  },
  Richmond: {
    propertyTypes: ['warehouse conversion', 'modern apartment', 'industrial property', 'contemporary development'],
    contexts: ['industrial heritage', 'modern construction', 'warehouse conversion', 'urban redevelopment'],
    specialties: ['warehouse specialist', 'industrial property expert', 'modern building treatment'],
    environmental: 'industrial heritage and modern mixed-use development challenges'
  },
  Toorak: {
    propertyTypes: ['luxury residence', 'heritage mansion', 'prestigious property', 'high-value home'],
    contexts: ['luxury property', 'heritage features', 'prestigious location', 'high-value construction'],
    specialties: ['luxury property specialist', 'heritage mansion expert', 'high-value property care'],
    environmental: 'prestigious property maintenance and heritage preservation challenges'
  },
  Fitzroy: {
    propertyTypes: ['Victorian terrace', 'warehouse conversion', 'heritage building', 'artistic property'],
    contexts: ['heritage architecture', 'artistic community', 'industrial conversion', 'creative precinct'],
    specialties: ['heritage specialist', 'artistic property expert', 'Victorian architecture preservation'],
    environmental: 'heritage architecture and artistic community property challenges'
  },
  St_Kilda: {
    propertyTypes: ['Art Deco apartment', 'beachside property', 'entertainment precinct', 'period building'],
    contexts: ['coastal location', 'entertainment district', 'Art Deco architecture', 'beachside environment'],
    specialties: ['beachside specialist', 'Art Deco expert', 'entertainment precinct treatment'],
    environmental: 'coastal exposure and entertainment district property challenges'
  },
  South_Yarra: {
    propertyTypes: ['modern apartment', 'terrace house', 'high-density living', 'urban property'],
    contexts: ['urban lifestyle', 'high-density development', 'heritage streetscapes', 'modern construction'],
    specialties: ['apartment specialist', 'high-density expert', 'urban property treatment'],
    environmental: 'high-density urban living and mixed heritage-modern challenges'
  },
  Hawthorn: {
    propertyTypes: ['Edwardian home', 'family residence', 'heritage property', 'established suburb'],
    contexts: ['established suburb', 'heritage features', 'leafy streets', 'family living'],
    specialties: ['family home specialist', 'Edwardian expert', 'established suburb treatment'],
    environmental: 'established suburb heritage and family property challenges'
  },
  // Add more as needed - this covers the major Melbourne suburbs
};

// Generate comprehensive image optimisation for any Melbourne location
export const generateLocationOptimization = (location: string): LocationPageOptimization => {
  const profile = MELBOURNE_LOCATION_PROFILES[location] || {
    propertyTypes: ['residential property', 'local building'],
    contexts: ['Melbourne suburb', 'local property'],
    specialties: ['residential specialist', 'local property expert'],
    environmental: 'Melbourne suburban property challenges'
  };

  const images = generateLocationImages(location);

  // Generate gallery images with location-specific contexts
  const galleryImages = [
    {
      src: '/src/assets/residential-inspection.jpg',
      service: 'inspection' as const,
      context: `${profile.propertyTypes[0]} ${profile.contexts[0]} professional assessment`
    },
    {
      src: '/src/assets/mould-removal.jpg',
      service: 'removal' as const,
      context: `${profile.specialties[0]} ${profile.contexts[1]} treatment process`
    },
    {
      src: '/src/assets/fogging-sanitisation.jpg',
      service: 'fogging' as const,
      context: `${profile.propertyTypes[1]} antimicrobial treatment ${profile.contexts[2]}`
    },
    {
      src: '/src/assets/clean-residential-interior.jpg',
      service: 'remediation' as const,
      context: `restored ${profile.propertyTypes[0]} post-treatment results ${profile.contexts[0]}`
    }
  ];

  return {
    location,
    heroImage: images.hero.src,
    propertyImages: [images.property_primary.src, images.property_secondary.src],
    processImages: [
      '/src/assets/thermal-imaging-device.jpg',
      '/src/assets/mould-removal-equipment.jpg',
      '/src/assets/fogging-sanitisation.jpg',
      '/src/assets/subfloor-inspection.jpg'
    ],
    galleryImages
  };
};

// Generate import statements for enhanced image components
export const generateImageImports = (): string => {
  return `import { LocationHeroImage, ServiceProcessImage, PropertyTypeImage, OptimizedImageGallery } from "@/components/seo/EnhancedOptimizedImage";
import { generateLocationImages, getOptimizedImage } from "@/utils/imageAssets";`;
};

// Generate hero section with optimized image
export const generateHeroSection = (location: string): string => {
  const profile = MELBOURNE_LOCATION_PROFILES[location];
  const primaryProperty = profile?.propertyTypes[0] || 'residential property';
  const primaryContext = profile?.contexts[0] || 'Melbourne property';

  return `      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground pt-[104px] overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <LocationHeroImage
            src={${location.toLowerCase()}Images.hero.src}
            location="${location}"
            service="removal"
            propertyType="${primaryProperty}"
            context="${primaryContext} ${profile?.environmental || 'Melbourne property challenges'}"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">`;
};

// Generate property showcase section
export const generatePropertyShowcase = (location: string): string => {
  const profile = MELBOURNE_LOCATION_PROFILES[location];
  const primaryProperty = profile?.propertyTypes[0] || 'residential property';

  return `          {/* ${location} Property Showcase */}
          <div className="mb-12">
            <PropertyTypeImage
              src={${location.toLowerCase()}Images.property_primary.src}
              location="${location}"
              service="inspection"
              propertyCategory="heritage"
              propertySubtype="${primaryProperty.toLowerCase().replace(' ', '_')}"
              className="w-full h-[300px] object-cover rounded-lg mb-8"
            />
          </div>`;
};

// Generate process images section
export const generateProcessImages = (location: string): string => {
  return `          {/* Process Images Showcase */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ServiceProcessImage
              src="/src/assets/thermal-imaging-device.jpg"
              location="${location}"
              service="inspection"
              processStep="initial assessment"
              equipment="thermal imaging technology"
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <ServiceProcessImage
              src="/src/assets/mould-removal-equipment.jpg"
              location="${location}"
              service="removal"
              processStep="containment and treatment"
              equipment="professional IICRC certified tools"
              className="w-full h-[250px] object-cover rounded-lg"
            />
          </div>`;
};

// Generate image gallery section
export const generateImageGallery = (location: string): string => {
  return `          {/* ${location} Service Gallery */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-primary">${location} Property Treatment Results</h3>
            <OptimizedImageGallery
              images={galleryImages}
              location="${location}"
              columns={4}
            />
          </div>`;
};

// Generate complete image variables for location component
export const generateImageVariables = (location: string): string => {
  const profile = MELBOURNE_LOCATION_PROFILES[location];
  const contexts = profile?.contexts || ['Melbourne property'];

  return `  // Generate ${location}-specific optimized images
  const ${location.toLowerCase()}Images = generateLocationImages('${location}');
  const galleryImages = [
    {
      src: '/src/assets/residential-inspection.jpg',
      location: '${location}',
      service: 'inspection' as const,
      context: '${profile?.propertyTypes[0] || 'residential property'} ${contexts[0]} professional assessment'
    },
    {
      src: '/src/assets/mould-removal.jpg',
      location: '${location}',
      service: 'removal' as const,
      context: '${profile?.specialties[0] || 'property specialist'} ${contexts[1] || 'Melbourne'} treatment process'
    },
    {
      src: '/src/assets/fogging-sanitisation.jpg',
      location: '${location}',
      service: 'fogging' as const,
      context: '${profile?.propertyTypes[1] || 'local property'} antimicrobial treatment ${contexts[2] || 'professional service'}'
    },
    {
      src: '/src/assets/clean-residential-interior.jpg',
      location: '${location}',
      service: 'remediation' as const,
      context: 'restored ${profile?.propertyTypes[0] || 'property'} post-treatment results ${contexts[0]}'
    }
  ];`;
};

// Batch optimisation for all Melbourne suburbs
export const MELBOURNE_SUBURBS = [
  'Abbotsford', 'Alphington', 'Altona', 'Armadale', 'Ashburton', 'Ashwood',
  'Balwyn', 'Bentleigh', 'Blackburn', 'Brighton', 'Brunswick', 'Bulleen',
  'Camberwell', 'Canterbury', 'Carlton', 'Carnegie', 'Caulfield', 'Chelsea',
  'Collingwood', 'Coburg', 'Cremorne', 'Doncaster', 'Elsternwick', 'Essendon',
  'Fitzroy', 'Footscray', 'Glen_Iris', 'Hawthorn', 'Kew', 'Malvern',
  'Middle_Park', 'Mont_Albert', 'Moonee_Ponds', 'Northcote', 'Oakleigh',
  'Pascoe_Vale', 'Port_Melbourne', 'Prahran', 'Preston', 'Richmond',
  'South_Melbourne', 'South_Yarra', 'St_Kilda', 'Surrey_Hills', 'Thornbury',
  'Toorak', 'Windsor', 'Yarraville'
];

// Generate optimisation data for all locations
export const generateAllLocationOptimizations = (): Record<string, LocationPageOptimization> => {
  const optimisations: Record<string, LocationPageOptimization> = {};

  MELBOURNE_SUBURBS.forEach(suburb => {
    optimisations[suburb] = generateLocationOptimization(suburb);
  });

  return optimisations;
};

// Performance monitoring for image optimisation
export const trackImageOptimization = (location: string, imageCount: number, loadTime: number): void => {

  // In production, send to analytics
  // analytics.track('image_optimisation', {
  //   location,
  //   imageCount,
  //   loadTime,
  //   optimisation_version: '1.0'
  // });
};

export default {
  generateLocationOptimization,
  generateImageImports,
  generateHeroSection,
  generatePropertyShowcase,
  generateProcessImages,
  generateImageGallery,
  generateImageVariables,
  generateAllLocationOptimizations,
  MELBOURNE_SUBURBS,
  MELBOURNE_LOCATION_PROFILES
};