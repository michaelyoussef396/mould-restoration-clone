// Central image asset management for Melbourne mould restoration website
// Optimized for Core Web Vitals and local SEO

export interface ImageAsset {
  src: string;
  webp?: string;
  alt: string;
  width: number;
  height: number;
  category: 'hero' | 'service' | 'equipment' | 'property' | 'process' | 'team' | 'location';
  keywords: string[];
  melbourne_context?: string;
}

// Hero images for different page types
export const HERO_IMAGES: Record<string, ImageAsset> = {
  main: {
    src: '/src/assets/professional-mould-hero.jpg',
    alt: 'Professional mould removal Melbourne IICRC certified technicians',
    width: 1920,
    height: 1080,
    category: 'hero',
    keywords: ['professional', 'mould removal', 'Melbourne', 'IICRC', 'certified'],
    melbourne_context: '5+ years serving Melbourne families with expert mould remediation',
  },
  inspection: {
    src: '/src/assets/mould-inspection.jpg',
    alt: 'Professional mould inspection Melbourne thermal imaging assessment',
    width: 1200,
    height: 800,
    category: 'hero',
    keywords: ['mould inspection', 'Melbourne', 'thermal imaging', 'assessment'],
    melbourne_context: 'Advanced inspection technology for Melbourne properties',
  },
  removal: {
    src: '/src/assets/comprehensive-mould-hero.jpg',
    alt: 'Professional mould removal Melbourne complete remediation service',
    width: 1920,
    height: 1080,
    category: 'hero',
    keywords: ['mould removal', 'Melbourne', 'complete', 'remediation'],
    melbourne_context: 'Complete mould removal for Melbourne homes and businesses',
  },
  fogging: {
    src: '/src/assets/advanced-fogging-hero.jpg',
    alt: 'Advanced fogging sanitisation Melbourne ULV misting technology',
    width: 1920,
    height: 1080,
    category: 'hero',
    keywords: ['fogging', 'sanitisation', 'Melbourne', 'ULV', 'misting'],
    melbourne_context: 'Advanced sanitisation technology for Melbourne properties',
  },
  subfloor: {
    src: '/src/assets/subfloor-remediation-hero.jpg',
    alt: 'Subfloor mould remediation Melbourne foundation treatment specialists',
    width: 1920,
    height: 1080,
    category: 'hero',
    keywords: ['subfloor', 'remediation', 'Melbourne', 'foundation', 'treatment'],
    melbourne_context: 'Specialized subfloor treatment for Melbourne building foundations',
  },
  materials: {
    src: '/src/assets/material-removal-hero.jpg',
    alt: 'Material removal Melbourne safe demolition mould contaminated structures',
    width: 1920,
    height: 1080,
    category: 'hero',
    keywords: ['material removal', 'Melbourne', 'safe demolition', 'contaminated'],
    melbourne_context: 'Safe material removal for Melbourne contaminated structures',
  },
};

// Service process images
export const SERVICE_IMAGES: Record<string, ImageAsset> = {
  inspection_process: {
    src: '/src/assets/residential-inspection.jpg',
    alt: 'Professional mould inspection Melbourne residential property assessment',
    width: 800,
    height: 600,
    category: 'service',
    keywords: ['inspection', 'residential', 'Melbourne', 'assessment'],
    melbourne_context: 'Thorough inspection process for Melbourne residential properties',
  },
  thermal_imaging: {
    src: '/src/assets/thermal-imaging-device.jpg',
    alt: 'Professional mould detection Melbourne thermal imaging technology IICRC standards',
    width: 600,
    height: 400,
    category: 'equipment',
    keywords: ['thermal imaging', 'mould detection', 'Melbourne', 'IICRC'],
    melbourne_context: 'Advanced detection technology for accurate Melbourne assessments',
  },
  removal_process: {
    src: '/src/assets/mould-removal.jpg',
    alt: 'Professional mould removal Melbourne safe remediation process IICRC certified',
    width: 800,
    height: 600,
    category: 'process',
    keywords: ['mould removal', 'Melbourne', 'safe remediation', 'IICRC'],
    melbourne_context: 'Safe and effective mould removal for Melbourne properties',
  },
  removal_equipment: {
    src: '/src/assets/mould-removal-equipment.jpg',
    alt: 'Professional mould removal equipment Melbourne IICRC certified tools',
    width: 800,
    height: 600,
    category: 'equipment',
    keywords: ['removal equipment', 'Melbourne', 'IICRC', 'professional tools'],
    melbourne_context: 'Professional-grade equipment for Melbourne mould removal',
  },
  fogging_process: {
    src: '/src/assets/fogging-sanitisation.jpg',
    alt: 'Advanced fogging sanitisation Melbourne ULV misting antimicrobial treatment',
    width: 800,
    height: 600,
    category: 'process',
    keywords: ['fogging', 'sanitisation', 'Melbourne', 'ULV', 'antimicrobial'],
    melbourne_context: 'Advanced fogging technology for Melbourne property sanitisation',
  },
  ulv_equipment: {
    src: '/src/assets/ulv-fogging-equipment.jpg',
    alt: 'ULV fogging equipment Melbourne professional antimicrobial misting technology',
    width: 600,
    height: 400,
    category: 'equipment',
    keywords: ['ULV fogging', 'Melbourne', 'antimicrobial', 'misting technology'],
    melbourne_context: 'Professional ULV equipment for Melbourne sanitisation services',
  },
  wall_removal: {
    src: '/src/assets/wall-removal-progress.jpg',
    alt: 'Wall removal progress Melbourne safe demolition mould contaminated drywall',
    width: 800,
    height: 600,
    category: 'process',
    keywords: ['wall removal', 'Melbourne', 'safe demolition', 'contaminated drywall'],
    melbourne_context: 'Safe wall removal for Melbourne mould-contaminated structures',
  },
  material_removal: {
    src: '/src/assets/material-removal.jpg',
    alt: 'Material removal Melbourne contaminated building materials safe disposal',
    width: 800,
    height: 600,
    category: 'process',
    keywords: ['material removal', 'Melbourne', 'contaminated materials', 'safe disposal'],
    melbourne_context: 'Professional material removal for Melbourne contaminated buildings',
  },
  subfloor_inspection: {
    src: '/src/assets/subfloor-inspection.jpg',
    alt: 'Subfloor inspection Melbourne foundation moisture assessment professional analysis',
    width: 800,
    height: 600,
    category: 'service',
    keywords: ['subfloor inspection', 'Melbourne', 'foundation', 'moisture assessment'],
    melbourne_context: 'Comprehensive subfloor analysis for Melbourne properties',
  },
  subfloor_remediation: {
    src: '/src/assets/subfloor-remediation.jpg',
    alt: 'Subfloor remediation Melbourne foundation treatment moisture control',
    width: 800,
    height: 600,
    category: 'process',
    keywords: ['subfloor remediation', 'Melbourne', 'foundation treatment', 'moisture control'],
    melbourne_context: 'Professional subfloor treatment for Melbourne foundations',
  },
  subfloor_ventilation: {
    src: '/src/assets/subfloor-ventilation.jpg',
    alt: 'Subfloor ventilation Melbourne foundation airflow moisture prevention system',
    width: 800,
    height: 600,
    category: 'process',
    keywords: ['subfloor ventilation', 'Melbourne', 'foundation airflow', 'moisture prevention'],
    melbourne_context: 'Advanced ventilation systems for Melbourne subfloor areas',
  },
  sanitisation_process: {
    src: '/src/assets/sanitisation-process.jpg',
    alt: 'Sanitisation process Melbourne antimicrobial treatment post-remediation',
    width: 800,
    height: 600,
    category: 'process',
    keywords: ['sanitisation', 'Melbourne', 'antimicrobial treatment', 'post-remediation'],
    melbourne_context: 'Thorough sanitisation for Melbourne post-remediation properties',
  },
};

// Commercial and residential property images
export const PROPERTY_IMAGES: Record<string, ImageAsset> = {
  residential_clean: {
    src: '/src/assets/clean-residential-interior.jpg',
    alt: 'Clean residential interior Melbourne post-mould removal restoration',
    width: 800,
    height: 600,
    category: 'property',
    keywords: ['residential', 'clean interior', 'Melbourne', 'post-mould removal'],
    melbourne_context: 'Restored Melbourne residential property after professional treatment',
  },
  commercial_work: {
    src: '/src/assets/commercial-removal-work.jpg',
    alt: 'Commercial mould removal Melbourne office building professional remediation',
    width: 800,
    height: 600,
    category: 'property',
    keywords: ['commercial', 'mould removal', 'Melbourne', 'office building'],
    melbourne_context: 'Professional commercial mould removal for Melbourne businesses',
  },
  commercial_removal: {
    src: '/src/assets/commercial-removal.jpg',
    alt: 'Commercial property Melbourne mould remediation business premises treatment',
    width: 800,
    height: 600,
    category: 'property',
    keywords: ['commercial property', 'Melbourne', 'business premises', 'treatment'],
    melbourne_context: 'Melbourne commercial property mould treatment specialists',
  },
  transformation: {
    src: '/src/assets/mould-removal-transformation.jpg',
    alt: 'Mould removal transformation Melbourne before after results',
    width: 800,
    height: 600,
    category: 'property',
    keywords: ['mould removal', 'transformation', 'Melbourne', 'before after'],
    melbourne_context: 'Dramatic transformation results for Melbourne properties',
  },
};

// Team and company images
export const COMPANY_IMAGES: Record<string, ImageAsset> = {
  about_hero: {
    src: '/src/assets/about-hero.jpg',
    alt: 'Mould & Restoration Co Melbourne team IICRC certified professionals',
    width: 1200,
    height: 800,
    category: 'team',
    keywords: ['team', 'Melbourne', 'IICRC certified', 'professionals'],
    melbourne_context: 'Melbourne mould removal experts with 5+ years experience',
  },
  services_hero: {
    src: '/src/assets/services-hero.jpg',
    alt: 'Professional mould services Melbourne comprehensive remediation solutions',
    width: 1920,
    height: 1080,
    category: 'hero',
    keywords: ['professional services', 'Melbourne', 'comprehensive', 'solutions'],
    melbourne_context: 'Complete mould solutions for Melbourne properties',
  },
};

// Location-specific images for Melbourne suburbs
export const LOCATION_IMAGES: Record<string, Record<string, ImageAsset>> = {
  Brighton: {
    coastal_property: {
      src: '/src/assets/clean-residential-interior.jpg', // Placeholder - would be coastal property
      alt: 'Professional mould removal Brighton Melbourne coastal property Federation home',
      width: 800,
      height: 600,
      category: 'location',
      keywords: ['Brighton', 'Melbourne', 'coastal property', 'Federation home'],
      melbourne_context: 'Brighton coastal property specialist treating salt air exposure',
    },
    federation_weatherboard: {
      src: '/src/assets/residential-inspection.jpg',
      alt: 'Professional mould inspection Brighton Melbourne weatherboard Federation house heritage property',
      width: 800,
      height: 600,
      category: 'location',
      keywords: ['Brighton', 'weatherboard', 'Federation house', 'heritage'],
      melbourne_context: 'Heritage Federation home treatment in Brighton bayside location',
    },
  },
  Carlton: {
    heritage_terrace: {
      src: '/src/assets/residential-inspection.jpg',
      alt: 'Professional mould inspection Carlton Melbourne Victorian terrace heritage building university precinct',
      width: 800,
      height: 600,
      category: 'location',
      keywords: ['Carlton', 'Victorian terrace', 'heritage building', 'university'],
      melbourne_context: 'Carlton heritage terrace house treatment near Melbourne University',
    },
    student_accommodation: {
      src: '/src/assets/commercial-removal.jpg',
      alt: 'Professional mould removal Carlton Melbourne student accommodation university housing rental property',
      width: 800,
      height: 600,
      category: 'location',
      keywords: ['Carlton', 'student accommodation', 'university housing', 'rental'],
      melbourne_context: 'Carlton student accommodation mould treatment university precinct',
    },
  },
  Richmond: {
    warehouse_conversion: {
      src: '/src/assets/commercial-work.jpg',
      alt: 'Professional mould removal Richmond Melbourne warehouse conversion industrial property modern apartment',
      width: 800,
      height: 600,
      category: 'location',
      keywords: ['Richmond', 'warehouse conversion', 'industrial property', 'apartment'],
      melbourne_context: 'Richmond warehouse conversion treatment industrial heritage area',
    },
    modern_apartment: {
      src: '/src/assets/clean-residential-interior.jpg',
      alt: 'Professional mould remediation Richmond Melbourne modern apartment contemporary development',
      width: 800,
      height: 600,
      category: 'location',
      keywords: ['Richmond', 'modern apartment', 'contemporary development'],
      melbourne_context: 'Richmond modern apartment mould treatment inner Melbourne location',
    },
  },
};

// Generate location-specific images for all Melbourne suburbs
const MELBOURNE_SUBURBS = [
  'Abbotsford', 'Alphington', 'Altona', 'Armadale', 'Ashburton', 'Ashwood',
  'Balwyn', 'Bentleigh', 'Blackburn', 'Brighton', 'Brunswick', 'Bulleen',
  'Camberwell', 'Canterbury', 'Carlton', 'Carnegie', 'Caulfield', 'Chelsea',
  'Collingwood', 'Coburg', 'Cremorne', 'Doncaster', 'Elsternwick', 'Essendon',
  'Fitzroy', 'Footscray', 'Glen Iris', 'Hawthorn', 'Kew', 'Malvern',
  'Middle Park', 'Mont Albert', 'Moonee Ponds', 'Northcote', 'Oakleigh',
  'Pascoe Vale', 'Port Melbourne', 'Prahran', 'Preston', 'Richmond',
  'South Melbourne', 'South Yarra', 'St Kilda', 'Surrey Hills', 'Thornbury',
  'Toorak', 'Windsor', 'Yarraville'
];

// Property type mapping for Melbourne suburbs
const SUBURB_PROPERTY_TYPES: Record<string, { primary: string; secondary: string; context: string }> = {
  Brighton: {
    primary: 'Federation home',
    secondary: 'coastal property',
    context: 'bayside location salt air exposure weatherboard construction'
  },
  Carlton: {
    primary: 'Victorian terrace',
    secondary: 'university area',
    context: 'heritage building university precinct student accommodation'
  },
  Richmond: {
    primary: 'warehouse conversion',
    secondary: 'modern apartment',
    context: 'industrial heritage contemporary development inner Melbourne'
  },
  Toorak: {
    primary: 'luxury residence',
    secondary: 'heritage mansion',
    context: 'prestigious location high-value property heritage features'
  },
  Fitzroy: {
    primary: 'Victorian terrace',
    secondary: 'warehouse conversion',
    context: 'heritage architecture artistic community industrial conversion'
  },
  'St Kilda': {
    primary: 'Art Deco apartment',
    secondary: 'beachside property',
    context: 'coastal location entertainment precinct period architecture'
  },
  'South Yarra': {
    primary: 'modern apartment',
    secondary: 'terrace house',
    context: 'urban lifestyle high-density living heritage streetscapes'
  },
  Hawthorn: {
    primary: 'Edwardian home',
    secondary: 'family residence',
    context: 'established suburb heritage features leafy streets'
  },
  // Add more suburbs as needed...
};

// Generate comprehensive image assets for all locations
export const generateLocationImages = (suburb: string): Record<string, ImageAsset> => {
  const propertyInfo = SUBURB_PROPERTY_TYPES[suburb] || {
    primary: 'residential property',
    secondary: 'local building',
    context: 'Melbourne suburb property'
  };

  return {
    hero: {
      src: '/src/assets/professional-mould-hero.jpg',
      alt: `Professional mould removal ${suburb} Melbourne ${propertyInfo.primary} specialists`,
      width: 1920,
      height: 1080,
      category: 'hero',
      keywords: [suburb, 'Melbourne', 'mould removal', propertyInfo.primary],
      melbourne_context: `${suburb} ${propertyInfo.context} professional treatment`,
    },
    inspection: {
      src: '/src/assets/residential-inspection.jpg',
      alt: `Professional mould inspection ${suburb} Melbourne ${propertyInfo.primary} assessment`,
      width: 800,
      height: 600,
      category: 'service',
      keywords: [suburb, 'Melbourne', 'mould inspection', propertyInfo.primary],
      melbourne_context: `${suburb} property inspection ${propertyInfo.context}`,
    },
    property_primary: {
      src: '/src/assets/clean-residential-interior.jpg',
      alt: `Professional mould remediation ${suburb} Melbourne ${propertyInfo.primary} ${propertyInfo.context}`,
      width: 800,
      height: 600,
      category: 'property',
      keywords: [suburb, 'Melbourne', propertyInfo.primary, 'remediation'],
      melbourne_context: `${suburb} ${propertyInfo.primary} specialist treatment`,
    },
    property_secondary: {
      src: '/src/assets/commercial-removal.jpg',
      alt: `Professional mould removal ${suburb} Melbourne ${propertyInfo.secondary} ${propertyInfo.context}`,
      width: 800,
      height: 600,
      category: 'property',
      keywords: [suburb, 'Melbourne', propertyInfo.secondary, 'mould removal'],
      melbourne_context: `${suburb} ${propertyInfo.secondary} professional service`,
    },
  };
};

// Export all image collections
export const ALL_IMAGES = {
  ...HERO_IMAGES,
  ...SERVICE_IMAGES,
  ...PROPERTY_IMAGES,
  ...COMPANY_IMAGES,
};

// Image optimisation helpers
export const getOptimizedImage = (
  key: string,
  location?: string,
  service?: string,
  customAlt?: string
): ImageAsset | null => {
  // First try location-specific images
  if (location && LOCATION_IMAGES[location]) {
    const locationImage = LOCATION_IMAGES[location][key];
    if (locationImage) return locationImage;
  }

  // Try service-specific images
  const serviceImage = SERVICE_IMAGES[key];
  if (serviceImage) return serviceImage;

  // Try general images
  const generalImage = ALL_IMAGES[key];
  if (generalImage) return generalImage;

  // Generate location image if suburb provided
  if (location && MELBOURNE_SUBURBS.includes(location)) {
    const locationImages = generateLocationImages(location);
    return locationImages[key] || null;
  }

  return null;
};

// WebP conversion helpers
export const generateWebPAssets = (): Record<string, string> => {
  const webpMap: Record<string, string> = {};

  Object.entries(ALL_IMAGES).forEach(([key, asset]) => {
    webpMap[key] = asset.src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  });

  return webpMap;
};

export default {
  HERO_IMAGES,
  SERVICE_IMAGES,
  PROPERTY_IMAGES,
  COMPANY_IMAGES,
  LOCATION_IMAGES,
  generateLocationImages,
  getOptimizedImage,
  generateWebPAssets,
};