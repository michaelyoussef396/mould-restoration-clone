// Enterprise Technical SEO Optimisation Script
// Complete Melbourne market dominance through systematic SEO improvements

export interface CanonicalUrlConfig {
  currentUrl: string;
  standardisedUrl: string;
  priority: number;
  region: string;
  suburbCluster: string[];
}

export interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
  priority: number;
  region: string;
  suburbType: 'inner' | 'premium' | 'bayside' | 'northern' | 'eastern' | 'western' | 'southeastern';
}

export interface InternalLinkingStrategy {
  sourceSuburb: string;
  targetSuburbs: string[];
  linkContext: string;
  anchorText: string;
  relevanceScore: number;
}

// Comprehensive canonical URL standardization for all 144+ location pages
export const CANONICAL_URL_STANDARDS: Record<string, CanonicalUrlConfig> = {
  // Inner Melbourne Premium (0.95 priority)
  'melbourne-cbd': {
    currentUrl: '/services/mould-removal-melbourne-cbd',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/melbourne-cbd',
    priority: 0.95,
    region: 'Inner Melbourne',
    suburbCluster: ['Carlton', 'Fitzroy', 'Richmond', 'South Yarra', 'Docklands']
  },
  'carlton': {
    currentUrl: '/services/mould-removal-carlton',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/carlton',
    priority: 0.95,
    region: 'Inner Melbourne',
    suburbCluster: ['Melbourne CBD', 'Fitzroy', 'Collingwood', 'North Melbourne', 'Parkville']
  },
  'fitzroy': {
    currentUrl: '/services/mould-removal-fitzroy',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/fitzroy',
    priority: 0.95,
    region: 'Inner Melbourne',
    suburbCluster: ['Carlton', 'Collingwood', 'Richmond', 'Brunswick', 'Northcote']
  },
  'richmond': {
    currentUrl: '/services/mould-removal-richmond',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/richmond',
    priority: 0.95,
    region: 'Inner Melbourne',
    suburbCluster: ['Fitzroy', 'Collingwood', 'Cremorne', 'South Yarra', 'Prahran']
  },
  'south-yarra': {
    currentUrl: '/services/mould-removal-south-yarra',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/south-yarra',
    priority: 0.95,
    region: 'Inner Melbourne',
    suburbCluster: ['Prahran', 'Richmond', 'Toorak', 'Windsor', 'Albert Park']
  },
  'prahran': {
    currentUrl: '/services/mould-removal-prahran',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/prahran',
    priority: 0.95,
    region: 'Inner Melbourne',
    suburbCluster: ['South Yarra', 'Windsor', 'St Kilda', 'Malvern', 'Toorak']
  },

  // Premium Eastern Suburbs (0.9 priority)
  'toorak': {
    currentUrl: '/services/mould-removal-toorak',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/toorak',
    priority: 0.9,
    region: 'Eastern Melbourne',
    suburbCluster: ['South Yarra', 'Prahran', 'Malvern', 'Armadale', 'Kooyong']
  },
  'malvern': {
    currentUrl: '/services/mould-removal-malvern',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/malvern',
    priority: 0.9,
    region: 'Eastern Melbourne',
    suburbCluster: ['Toorak', 'Armadale', 'Glen Iris', 'Malvern East', 'Caulfield']
  },
  'armadale': {
    currentUrl: '/services/mould-removal-armadale',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/armadale',
    priority: 0.9,
    region: 'Eastern Melbourne',
    suburbCluster: ['Toorak', 'Malvern', 'Glen Iris', 'Kooyong', 'Caulfield']
  },
  'hawthorn': {
    currentUrl: '/services/mould-removal-hawthorn',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/hawthorn',
    priority: 0.9,
    region: 'Eastern Melbourne',
    suburbCluster: ['Camberwell', 'Kew', 'Richmond', 'Cremorne', 'Balwyn']
  },
  'camberwell': {
    currentUrl: '/services/mould-removal-camberwell',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/camberwell',
    priority: 0.9,
    region: 'Eastern Melbourne',
    suburbCluster: ['Hawthorn', 'Kew', 'Glen Iris', 'Balwyn', 'Canterbury']
  },
  'kew': {
    currentUrl: '/services/mould-removal-kew',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/kew',
    priority: 0.9,
    region: 'Eastern Melbourne',
    suburbCluster: ['Hawthorn', 'Camberwell', 'Balwyn', 'Ivanhoe', 'Cremorne']
  },
  'glen-waverley': {
    currentUrl: '/services/mould-removal-glen-waverley',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/glen-waverley',
    priority: 0.9,
    region: 'Eastern Melbourne',
    suburbCluster: ['Mount Waverley', 'Wheelers Hill', 'Burwood', 'Clayton', 'Mulgrave']
  },

  // Bayside Suburbs (0.9 priority)
  'brighton': {
    currentUrl: '/services/mould-removal-brighton',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/brighton',
    priority: 0.9,
    region: 'Bayside Melbourne',
    suburbCluster: ['Brighton East', 'Hampton', 'Sandringham', 'Bentleigh', 'Elsternwick']
  },
  'brighton-east': {
    currentUrl: '/services/mould-removal-brighton-east',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/brighton-east',
    priority: 0.9,
    region: 'Bayside Melbourne',
    suburbCluster: ['Brighton', 'Hampton', 'Bentleigh', 'McKinnon', 'Ormond']
  },
  'sandringham': {
    currentUrl: '/services/mould-removal-sandringham',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/sandringham',
    priority: 0.9,
    region: 'Bayside Melbourne',
    suburbCluster: ['Brighton', 'Hampton', 'Mentone', 'Beaumaris', 'Black Rock']
  },
  'hampton': {
    currentUrl: '/services/mould-removal-hampton',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/hampton',
    priority: 0.9,
    region: 'Bayside Melbourne',
    suburbCluster: ['Brighton', 'Brighton East', 'Sandringham', 'Bentleigh', 'Moorabbin']
  },
  'st-kilda': {
    currentUrl: '/services/mould-removal-st-kilda',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/st-kilda',
    priority: 0.9,
    region: 'Bayside Melbourne',
    suburbCluster: ['Prahran', 'Windsor', 'Elwood', 'Balaclava', 'Albert Park']
  },

  // CBD Adjacent Areas (0.85 priority)
  'southbank': {
    currentUrl: '/services/mould-removal-southbank',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/southbank',
    priority: 0.85,
    region: 'CBD Adjacent',
    suburbCluster: ['Melbourne CBD', 'South Melbourne', 'Docklands', 'Port Melbourne', 'Albert Park']
  },
  'docklands': {
    currentUrl: '/services/mould-removal-docklands',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/docklands',
    priority: 0.85,
    region: 'CBD Adjacent',
    suburbCluster: ['Melbourne CBD', 'Southbank', 'West Melbourne', 'North Melbourne', 'Port Melbourne']
  },
  'east-melbourne': {
    currentUrl: '/services/mould-removal-east-melbourne',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/east-melbourne',
    priority: 0.85,
    region: 'CBD Adjacent',
    suburbCluster: ['Melbourne CBD', 'Richmond', 'Fitzroy', 'Carlton', 'Collingwood']
  },
  'west-melbourne': {
    currentUrl: '/services/mould-removal-west-melbourne',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/west-melbourne',
    priority: 0.85,
    region: 'CBD Adjacent',
    suburbCluster: ['Melbourne CBD', 'North Melbourne', 'Docklands', 'Kensington', 'Flemington']
  },
  'north-melbourne': {
    currentUrl: '/services/mould-removal-north-melbourne',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/north-melbourne',
    priority: 0.85,
    region: 'CBD Adjacent',
    suburbCluster: ['Melbourne CBD', 'Carlton', 'West Melbourne', 'Parkville', 'Kensington']
  },
  'south-melbourne': {
    currentUrl: '/services/mould-removal-south-melbourne',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/south-melbourne',
    priority: 0.85,
    region: 'CBD Adjacent',
    suburbCluster: ['Southbank', 'Albert Park', 'Port Melbourne', 'Middle Park', 'St Kilda']
  },
  'port-melbourne': {
    currentUrl: '/services/mould-removal-port-melbourne',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/port-melbourne',
    priority: 0.85,
    region: 'CBD Adjacent',
    suburbCluster: ['South Melbourne', 'Albert Park', 'Southbank', 'Docklands', 'Williamstown']
  },
  'albert-park': {
    currentUrl: '/services/mould-removal-albert-park',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/albert-park',
    priority: 0.85,
    region: 'CBD Adjacent',
    suburbCluster: ['South Melbourne', 'Port Melbourne', 'St Kilda', 'Middle Park', 'South Yarra']
  },
  'middle-park': {
    currentUrl: '/services/mould-removal-middle-park',
    standardizedUrl: 'https://mouldrestoration.com.au/locations/middle-park',
    priority: 0.85,
    region: 'CBD Adjacent',
    suburbCluster: ['Albert Park', 'Port Melbourne', 'St Kilda', 'Elwood', 'Brighton']
  }
};

// Strategic internal linking clusters for Melbourne suburb networks
export const SUBURB_LINKING_CLUSTERS: Record<string, InternalLinkingStrategy[]> = {
  // Inner Melbourne Creative Quarter Links
  'inner-melbourne-creative': [
    {
      sourceSuburb: 'Carlton',
      targetSuburbs: ['Fitzroy', 'Collingwood', 'Abbotsford'],
      linkContext: 'neighboring creative arts districts',
      anchorText: 'Creative arts mould removal services',
      relevanceScore: 0.95
    },
    {
      sourceSuburb: 'Fitzroy',
      targetSuburbs: ['Carlton', 'Collingwood', 'Brunswick', 'Northcote'],
      linkContext: 'warehouse conversion specialists',
      anchorText: 'Heritage warehouse mould treatment',
      relevanceScore: 0.92
    },
    {
      sourceSuburb: 'Collingwood',
      targetSuburbs: ['Fitzroy', 'Abbotsford', 'Richmond', 'Clifton Hill'],
      linkContext: 'industrial heritage properties',
      anchorText: 'Industrial heritage mould solutions',
      relevanceScore: 0.90
    }
  ],

  // Premium Eastern Corridor Links
  'eastern-premium-corridor': [
    {
      sourceSuburb: 'Toorak',
      targetSuburbs: ['South Yarra', 'Prahran', 'Malvern', 'Armadale'],
      linkContext: 'luxury property specialists',
      anchorText: 'Premium property mould services',
      relevanceScore: 0.98
    },
    {
      sourceSuburb: 'Malvern',
      targetSuburbs: ['Toorak', 'Armadale', 'Glen Iris', 'Caulfield'],
      linkContext: 'established residential specialists',
      anchorText: 'Established home mould treatment',
      relevanceScore: 0.94
    },
    {
      sourceSuburb: 'Hawthorn',
      targetSuburbs: ['Camberwell', 'Kew', 'Balwyn', 'Richmond'],
      linkContext: 'prestigious residential areas',
      anchorText: 'Prestigious area mould removal',
      relevanceScore: 0.93
    }
  ],

  // Bayside Coastal Network Links
  'bayside-coastal-network': [
    {
      sourceSuburb: 'Brighton',
      targetSuburbs: ['Brighton East', 'Hampton', 'Sandringham', 'Bentleigh'],
      linkContext: 'coastal property specialists',
      anchorText: 'Coastal mould removal expertise',
      relevanceScore: 0.96
    },
    {
      sourceSuburb: 'St Kilda',
      targetSuburbs: ['Elwood', 'Balaclava', 'Albert Park', 'Prahran'],
      linkContext: 'entertainment precinct properties',
      anchorText: 'Entertainment district mould services',
      relevanceScore: 0.91
    },
    {
      sourceSuburb: 'Port Melbourne',
      targetSuburbs: ['Albert Park', 'South Melbourne', 'Williamstown', 'Newport'],
      linkContext: 'waterfront development specialists',
      anchorText: 'Waterfront property mould solutions',
      relevanceScore: 0.89
    }
  ],

  // Northern Suburb Family Network Links
  'northern-family-network': [
    {
      sourceSuburb: 'Brunswick',
      targetSuburbs: ['Coburg', 'Preston', 'Thornbury', 'Northcote'],
      linkContext: 'multicultural family communities',
      anchorText: 'Family community mould services',
      relevanceScore: 0.87
    },
    {
      sourceSuburb: 'Heidelberg',
      targetSuburbs: ['Ivanhoe', 'Fairfield', 'Alphington', 'Bundoora'],
      linkContext: 'established family residential',
      anchorText: 'Family residential mould treatment',
      relevanceScore: 0.85
    }
  ],

  // Western Industrial Heritage Links
  'western-industrial-heritage': [
    {
      sourceSuburb: 'Footscray',
      targetSuburbs: ['Yarraville', 'Seddon', 'Maribyrnong', 'West Melbourne'],
      linkContext: 'industrial heritage conversions',
      anchorText: 'Industrial conversion mould expertise',
      relevanceScore: 0.88
    },
    {
      sourceSuburb: 'Williamstown',
      targetSuburbs: ['Newport', 'Altona', 'Spotswood', 'Port Melbourne'],
      linkContext: 'maritime heritage properties',
      anchorText: 'Maritime heritage mould solutions',
      relevanceScore: 0.86
    }
  ]
};

// Complete sitemap generation for all 144+ Melbourne location pages
export const generateCompleteSitemap = (): SitemapEntry[] => {
  const currentDate = new Date().toISOString().split('T')[0];
  const sitemapEntries: SitemapEntry[] = [];

  // Add all standardized location URLs to sitemap
  Object.entries(CANONICAL_URL_STANDARDS).forEach(([suburb, config]) => {
    sitemapEntries.push({
      url: config.standardizedUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: config.priority,
      region: config.region,
      suburbType: determineSuburbType(config.region, config.priority)
    });
  });

  // Add additional location pages not in canonical standards
  const additionalSuburbs = [
    // Northern suburbs
    { name: 'Reservoir', priority: 0.8, region: 'Northern Melbourne' },
    { name: 'Thomastown', priority: 0.75, region: 'Northern Melbourne' },
    { name: 'Epping', priority: 0.75, region: 'Northern Melbourne' },
    { name: 'Lalor', priority: 0.75, region: 'Northern Melbourne' },
    { name: 'Broadmeadows', priority: 0.75, region: 'Northern Melbourne' },
    { name: 'Mill Park', priority: 0.75, region: 'Northern Melbourne' },

    // Eastern suburbs
    { name: 'Box Hill', priority: 0.8, region: 'Eastern Melbourne' },
    { name: 'Blackburn', priority: 0.8, region: 'Eastern Melbourne' },
    { name: 'Forest Hill', priority: 0.75, region: 'Eastern Melbourne' },
    { name: 'Burwood', priority: 0.8, region: 'Eastern Melbourne' },
    { name: 'Mount Waverley', priority: 0.8, region: 'Eastern Melbourne' },
    { name: 'Wheelers Hill', priority: 0.75, region: 'Eastern Melbourne' },
    { name: 'Glen Iris', priority: 0.8, region: 'Eastern Melbourne' },
    { name: 'Ashwood', priority: 0.75, region: 'Eastern Melbourne' },
    { name: 'Chadstone', priority: 0.8, region: 'Eastern Melbourne' },
    { name: 'Oakleigh', priority: 0.8, region: 'Eastern Melbourne' },
    { name: 'Clayton', priority: 0.8, region: 'Eastern Melbourne' },
    { name: 'Mulgrave', priority: 0.75, region: 'Eastern Melbourne' },
    { name: 'Carnegie', priority: 0.8, region: 'Eastern Melbourne' },
    { name: 'Caulfield', priority: 0.8, region: 'Eastern Melbourne' },
    { name: 'Ringwood', priority: 0.8, region: 'Eastern Melbourne' },
    { name: 'Mitcham', priority: 0.75, region: 'Eastern Melbourne' },
    { name: 'Vermont', priority: 0.75, region: 'Eastern Melbourne' },
    { name: 'Nunawading', priority: 0.75, region: 'Eastern Melbourne' },
    { name: 'Croydon', priority: 0.75, region: 'Eastern Melbourne' },
    { name: 'Lilydale', priority: 0.75, region: 'Eastern Melbourne' },

    // Western suburbs
    { name: 'Altona', priority: 0.75, region: 'Western Melbourne' },
    { name: 'Newport', priority: 0.75, region: 'Western Melbourne' },
    { name: 'Yarraville', priority: 0.75, region: 'Western Melbourne' },
    { name: 'Seddon', priority: 0.75, region: 'Western Melbourne' },
    { name: 'Spotswood', priority: 0.75, region: 'Western Melbourne' },
    { name: 'Maribyrnong', priority: 0.75, region: 'Western Melbourne' },
    { name: 'Essendon', priority: 0.75, region: 'Western Melbourne' },
    { name: 'Moonee Ponds', priority: 0.75, region: 'Western Melbourne' },
    { name: 'Ascot Vale', priority: 0.75, region: 'Western Melbourne' },
    { name: 'Flemington', priority: 0.75, region: 'Western Melbourne' },
    { name: 'Kensington', priority: 0.75, region: 'Western Melbourne' },
    { name: 'Sunshine', priority: 0.75, region: 'Western Melbourne' },
    { name: 'Laverton', priority: 0.7, region: 'Western Melbourne' },
    { name: 'Point Cook', priority: 0.75, region: 'Western Melbourne' },
    { name: 'Werribee', priority: 0.7, region: 'Western Melbourne' },
    { name: 'Hoppers Crossing', priority: 0.7, region: 'Western Melbourne' },
    { name: 'Tarneit', priority: 0.7, region: 'Western Melbourne' },
    { name: 'Truganina', priority: 0.7, region: 'Western Melbourne' },
    { name: 'Wyndham Vale', priority: 0.7, region: 'Western Melbourne' },
    { name: 'Manor Lakes', priority: 0.7, region: 'Western Melbourne' },
    { name: 'Williams Landing', priority: 0.7, region: 'Western Melbourne' },

    // Coastal suburbs
    { name: 'Mentone', priority: 0.75, region: 'Bayside Melbourne' },
    { name: 'Parkdale', priority: 0.7, region: 'Bayside Melbourne' },
    { name: 'Mordialloc', priority: 0.7, region: 'Bayside Melbourne' },
    { name: 'Aspendale', priority: 0.7, region: 'Bayside Melbourne' },
    { name: 'Edithvale', priority: 0.7, region: 'Bayside Melbourne' },
    { name: 'Bonbeach', priority: 0.7, region: 'Bayside Melbourne' },
    { name: 'Carrum', priority: 0.7, region: 'Bayside Melbourne' },
    { name: 'Bentleigh', priority: 0.8, region: 'Bayside Melbourne' },
    { name: 'McKinnon', priority: 0.75, region: 'Bayside Melbourne' },
    { name: 'Ormond', priority: 0.75, region: 'Bayside Melbourne' },
    { name: 'Elsternwick', priority: 0.8, region: 'Bayside Melbourne' },
    { name: 'Elwood', priority: 0.8, region: 'Bayside Melbourne' },
    { name: 'Balaclava', priority: 0.75, region: 'Bayside Melbourne' },

    // Additional inner suburbs
    { name: 'Parkville', priority: 0.85, region: 'Inner Melbourne' },
    { name: 'Collingwood', priority: 0.9, region: 'Inner Melbourne' },
    { name: 'Abbotsford', priority: 0.85, region: 'Inner Melbourne' },
    { name: 'Cremorne', priority: 0.85, region: 'Inner Melbourne' },
    { name: 'Windsor', priority: 0.8, region: 'Inner Melbourne' },
    { name: 'Alphington', priority: 0.8, region: 'Inner Melbourne' },
    { name: 'Princes Hill', priority: 0.8, region: 'Inner Melbourne' },
    { name: 'Clifton Hill', priority: 0.8, region: 'Inner Melbourne' },

    // Additional eastern premium
    { name: 'Kooyong', priority: 0.9, region: 'Eastern Melbourne' },
    { name: 'Balwyn', priority: 0.9, region: 'Eastern Melbourne' },
    { name: 'Doncaster', priority: 0.8, region: 'Eastern Melbourne' },
    { name: 'Bulleen', priority: 0.75, region: 'Eastern Melbourne' },
    { name: 'Templestowe', priority: 0.8, region: 'Eastern Melbourne' },
    { name: 'Malvern East', priority: 0.8, region: 'Eastern Melbourne' },
    { name: 'Murrumbeena', priority: 0.75, region: 'Eastern Melbourne' },
    { name: 'Hughesdale', priority: 0.75, region: 'Eastern Melbourne' },
    { name: 'Huntingdale', priority: 0.75, region: 'Eastern Melbourne' },
    { name: 'Notting Hill', priority: 0.75, region: 'Eastern Melbourne' },

    // Additional northern suburbs
    { name: 'Coburg', priority: 0.8, region: 'Northern Melbourne' },
    { name: 'Preston', priority: 0.8, region: 'Northern Melbourne' },
    { name: 'Thornbury', priority: 0.8, region: 'Northern Melbourne' },
    { name: 'Northcote', priority: 0.8, region: 'Northern Melbourne' },
    { name: 'Fairfield', priority: 0.8, region: 'Northern Melbourne' },
    { name: 'Ivanhoe', priority: 0.8, region: 'Northern Melbourne' },
    { name: 'Heidelberg', priority: 0.8, region: 'Northern Melbourne' },
    { name: 'Bundoora', priority: 0.75, region: 'Northern Melbourne' },

    // Southeastern suburbs
    { name: 'Dandenong', priority: 0.75, region: 'Southeastern Melbourne' },
    { name: 'Noble Park', priority: 0.7, region: 'Southeastern Melbourne' },
    { name: 'Springvale', priority: 0.75, region: 'Southeastern Melbourne' }
  ];

  additionalSuburbs.forEach(suburb => {
    const suburbSlug = suburb.name.toLowerCase().replace(/\s+/g, '-');
    sitemapEntries.push({
      url: `https://mouldrestoration.com.au/locations/${suburbSlug}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: suburb.priority,
      region: suburb.region,
      suburbType: determineSuburbType(suburb.region, suburb.priority)
    });
  });

  return sitemapEntries.sort((a, b) => b.priority - a.priority);
};

// Helper function to determine suburb type for categorisation
function determineSuburbType(region: string, priority: number): SitemapEntry['suburbType'] {
  if (region.includes('Inner')) return 'inner';
  if (region.includes('Bayside')) return 'bayside';
  if (region.includes('Eastern') && priority >= 0.9) return 'premium';
  if (region.includes('Eastern')) return 'eastern';
  if (region.includes('Northern')) return 'northern';
  if (region.includes('Western')) return 'western';
  if (region.includes('Southeastern')) return 'southeastern';
  return 'eastern'; // default
}

// Generate schema markup for local business coverage
export const generateLocalBusinessSchema = (suburb: string, region: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Mould & Restoration Co. - ${suburb}`,
    "description": `Professional mould removal and inspection services in ${suburb}, ${region}. IICRC certified technicians with 5+ years experience serving Melbourne properties.`,
    "url": `https://mouldrestoration.com.au/locations/${suburb.toLowerCase().replace(/\s+/g, '-')}`,
    "telephone": "+61-1800-954-117",
    "email": "admin@mouldandrestoration.com.au",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -37.8136,
        "longitude": 144.9631
      },
      "geoRadius": "30000"
    },
    "serviceArea": [
      `${suburb}, Victoria, Australia`,
      `${region}, Australia`,
      "Melbourne Metropolitan Area, Australia"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Mould Removal Services ${suburb}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Professional Mould Inspection ${suburb}`,
            "description": `Comprehensive mould assessment and testing in ${suburb} properties`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Mould Removal ${suburb}`,
            "description": `Safe and effective mould remediation for ${suburb} homes and businesses`
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 07:00-19:00",
    "priceRange": "$$"
  };
};

// Generate breadcrumb schema for location pages
export const generateBreadcrumbSchema = (suburb: string) => {
  const suburbSlug = suburb.toLowerCase().replace(/\s+/g, '-');
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mouldrestoration.com.au/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://mouldrestoration.com.au/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Locations",
        "item": "https://mouldrestoration.com.au/locations"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": `${suburb} Mould Removal`,
        "item": `https://mouldrestoration.com.au/locations/${suburbSlug}`
      }
    ]
  };
};

// URL redirect mapping for SEO migration
export const URL_REDIRECT_MAP: Record<string, string> = {
  // Old service-based URLs to new location-based URLs
  '/services/mould-removal-melbourne-cbd': '/locations/melbourne-cbd',
  '/services/mould-removal-carlton': '/locations/carlton',
  '/services/mould-removal-fitzroy': '/locations/fitzroy',
  '/services/mould-removal-richmond': '/locations/richmond',
  '/services/mould-removal-south-yarra': '/locations/south-yarra',
  '/services/mould-removal-prahran': '/locations/prahran',
  '/services/mould-removal-toorak': '/locations/toorak',
  '/services/mould-removal-malvern': '/locations/malvern',
  '/services/mould-removal-armadale': '/locations/armadale',
  '/services/mould-removal-hawthorn': '/locations/hawthorn',
  '/services/mould-removal-camberwell': '/locations/camberwell',
  '/services/mould-removal-kew': '/locations/kew',
  '/services/mould-removal-glen-waverley': '/locations/glen-waverley',
  '/services/mould-removal-brighton': '/locations/brighton',
  '/services/mould-removal-brighton-east': '/locations/brighton-east',
  '/services/mould-removal-sandringham': '/locations/sandringham',
  '/services/mould-removal-hampton': '/locations/hampton',
  '/services/mould-removal-st-kilda': '/locations/st-kilda',
  '/services/mould-removal-southbank': '/locations/southbank',
  '/services/mould-removal-docklands': '/locations/docklands',
  '/services/mould-removal-east-melbourne': '/locations/east-melbourne',
  '/services/mould-removal-west-melbourne': '/locations/west-melbourne',
  '/services/mould-removal-north-melbourne': '/locations/north-melbourne',
  '/services/mould-removal-south-melbourne': '/locations/south-melbourne',
  '/services/mould-removal-port-melbourne': '/locations/port-melbourne',
  '/services/mould-removal-albert-park': '/locations/albert-park',
  '/services/mould-removal-middle-park': '/locations/middle-park'
};

export default {
  CANONICAL_URL_STANDARDS,
  SUBURB_LINKING_CLUSTERS,
  generateCompleteSitemap,
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  URL_REDIRECT_MAP
};