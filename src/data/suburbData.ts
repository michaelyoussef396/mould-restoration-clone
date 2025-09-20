export interface SuburbData {
  name: string;
  slug: string;
  displayName: string;
  region: string;
  postcode: string;
  priority: 'high' | 'medium' | 'low';
  description: string;
  keywords: string[];
  propertyTypes: string[];
  href: string;
}

export const melbourneRegions = {
  'Inner Melbourne': {
    color: 'blue',
    description: 'Central Melbourne and inner suburbs'
  },
  'Eastern Suburbs': {
    color: 'green',
    description: 'Premium eastern Melbourne areas'
  },
  'Coastal Areas': {
    color: 'teal',
    description: 'Bayside and coastal suburbs'
  },
  'Northern Suburbs': {
    color: 'purple',
    description: 'Northern Melbourne communities'
  },
  'Western Suburbs': {
    color: 'orange',
    description: 'Western Melbourne areas'
  },
  'Southern Suburbs': {
    color: 'red',
    description: 'Southern Melbourne suburbs'
  },
  'Outer Suburbs': {
    color: 'gray',
    description: 'Outer Melbourne areas'
  }
} as const;

export const suburbsData: SuburbData[] = [
  // Inner Melbourne - High Priority
  {
    name: 'Carlton',
    slug: 'carlton',
    displayName: 'Carlton',
    region: 'Inner Melbourne',
    postcode: '3053',
    priority: 'high',
    description: 'Professional mould removal in Carlton - heritage homes and modern apartments',
    keywords: ['carlton mould removal', 'heritage property mould', 'apartment mould inspection'],
    propertyTypes: ['Victorian terraces', 'Modern apartments', 'Heritage buildings'],
    href: '/locations/carlton'
  },
  {
    name: 'Fitzroy',
    slug: 'fitzroy',
    displayName: 'Fitzroy',
    region: 'Inner Melbourne',
    postcode: '3065',
    priority: 'high',
    description: 'Expert mould remediation in trendy Fitzroy - old buildings and new developments',
    keywords: ['fitzroy mould removal', 'inner north mould', 'warehouse conversion mould'],
    propertyTypes: ['Converted warehouses', 'Victorian terraces', 'New apartments'],
    href: '/locations/carlton'
  },
  {
    name: 'Richmond',
    slug: 'richmond',
    displayName: 'Richmond',
    region: 'Inner Melbourne',
    postcode: '3121',
    priority: 'high',
    description: 'Comprehensive mould solutions for Richmond properties',
    keywords: ['richmond mould removal', 'inner melbourne mould', 'terrace house mould'],
    propertyTypes: ['Victorian terraces', 'Warehouse conversions', 'Modern units'],
    href: '/locations/richmond'
  },
  {
    name: 'Melbourne CBD',
    slug: 'melbourne-cbd',
    displayName: 'Melbourne CBD',
    region: 'Inner Melbourne',
    postcode: '3000',
    priority: 'high',
    description: 'Commercial and residential mould services in Melbourne CBD',
    keywords: ['melbourne cbd mould', 'city apartment mould', 'commercial mould removal'],
    propertyTypes: ['High-rise apartments', 'Commercial buildings', 'Loft conversions'],
    href: '/locations/richmond'
  },
  {
    name: 'South Melbourne',
    slug: 'south-melbourne',
    displayName: 'South Melbourne',
    region: 'Inner Melbourne',
    postcode: '3205',
    priority: 'high',
    description: 'Professional mould treatment for South Melbourne homes and businesses',
    keywords: ['south melbourne mould', 'port phillip mould removal', 'warehouse mould'],
    propertyTypes: ['Converted warehouses', 'Victorian cottages', 'Modern townhouses'],
    href: '/locations/south-melbourne'
  },
  {
    name: 'Southbank',
    slug: 'southbank',
    displayName: 'Southbank',
    region: 'Inner Melbourne',
    postcode: '3006',
    priority: 'high',
    description: 'High-rise apartment mould solutions in Southbank',
    keywords: ['southbank mould removal', 'apartment mould treatment', 'high rise mould'],
    propertyTypes: ['High-rise apartments', 'Luxury condos', 'Penthouses'],
    href: '/locations/southbank'
  },
  {
    name: 'Docklands',
    slug: 'docklands',
    displayName: 'Docklands',
    region: 'Inner Melbourne',
    postcode: '3008',
    priority: 'high',
    description: 'Modern apartment mould services in Docklands waterfront',
    keywords: ['docklands mould removal', 'waterfront mould', 'modern apartment mould'],
    propertyTypes: ['Waterfront apartments', 'Modern towers', 'Luxury developments'],
    href: '/locations/docklands'
  },
  {
    name: 'Port Melbourne',
    slug: 'port-melbourne',
    displayName: 'Port Melbourne',
    region: 'Inner Melbourne',
    postcode: '3207',
    priority: 'high',
    description: 'Coastal mould solutions for Port Melbourne properties',
    keywords: ['port melbourne mould', 'coastal mould removal', 'warehouse conversion mould'],
    propertyTypes: ['Warehouse conversions', 'Coastal homes', 'Modern apartments'],
    href: '/locations/port-melbourne'
  },
  {
    name: 'Albert Park',
    slug: 'albert-park',
    displayName: 'Albert Park',
    region: 'Inner Melbourne',
    postcode: '3206',
    priority: 'high',
    description: 'Premium mould services for Albert Park homes near the lake',
    keywords: ['albert park mould', 'lakeside mould removal', 'heritage home mould'],
    propertyTypes: ['Heritage homes', 'Lakeside properties', 'Premium apartments'],
    href: '/locations/albert-park'
  },
  {
    name: 'Middle Park',
    slug: 'middle-park',
    displayName: 'Middle Park',
    region: 'Inner Melbourne',
    postcode: '3206',
    priority: 'medium',
    description: 'Professional mould treatment for Middle Park coastal properties',
    keywords: ['middle park mould', 'coastal property mould', 'heritage cottage mould'],
    propertyTypes: ['Heritage cottages', 'Coastal homes', 'Period properties'],
    href: '/locations/middle-park'
  },

  // Eastern Suburbs - High Priority
  {
    name: 'Toorak',
    slug: 'toorak',
    displayName: 'Toorak',
    region: 'Eastern Suburbs',
    postcode: '3142',
    priority: 'high',
    description: 'Luxury property mould solutions in prestigious Toorak',
    keywords: ['toorak mould removal', 'luxury home mould', 'mansion mould treatment'],
    propertyTypes: ['Luxury mansions', 'Heritage estates', 'Premium apartments'],
    href: '/locations/toorak'
  },
  {
    name: 'South Yarra',
    slug: 'south-yarra',
    displayName: 'South Yarra',
    region: 'Eastern Suburbs',
    postcode: '3141',
    priority: 'high',
    description: 'Expert mould services for South Yarra apartments and homes',
    keywords: ['south yarra mould', 'chapel street mould', 'apartment mould removal'],
    propertyTypes: ['Luxury apartments', 'Victorian terraces', 'Modern units'],
    href: '/locations/south-yarra'
  },
  {
    name: 'Prahran',
    slug: 'prahran',
    displayName: 'Prahran',
    region: 'Eastern Suburbs',
    postcode: '3181',
    priority: 'high',
    description: 'Comprehensive mould treatment for Prahran properties',
    keywords: ['prahran mould removal', 'inner east mould', 'terrace house mould'],
    propertyTypes: ['Victorian terraces', 'Art deco apartments', 'Modern developments'],
    href: '/locations/prahran'
  },
  {
    name: 'Malvern',
    slug: 'malvern',
    displayName: 'Malvern',
    region: 'Eastern Suburbs',
    postcode: '3144',
    priority: 'high',
    description: 'Professional mould solutions for Malvern family homes',
    keywords: ['malvern mould removal', 'family home mould', 'period home mould'],
    propertyTypes: ['Period homes', 'Family houses', 'Heritage properties'],
    href: '/locations/malvern'
  },
  {
    name: 'Malvern East',
    slug: 'malvern-east',
    displayName: 'Malvern East',
    region: 'Eastern Suburbs',
    postcode: '3145',
    priority: 'medium',
    description: 'Expert mould remediation for Malvern East residential properties',
    keywords: ['malvern east mould', 'residential mould removal', 'family home mould'],
    propertyTypes: ['Family homes', 'Period cottages', 'Modern renovations'],
    href: '/locations/malvern-east'
  },
  {
    name: 'Armadale',
    slug: 'armadale',
    displayName: 'Armadale',
    region: 'Eastern Suburbs',
    postcode: '3143',
    priority: 'medium',
    description: 'Premium mould services for Armadale heritage and modern homes',
    keywords: ['armadale mould removal', 'heritage home mould', 'premium property mould'],
    propertyTypes: ['Heritage homes', 'Luxury renovations', 'Period properties'],
    href: '/locations/armadale'
  },
  {
    name: 'Windsor',
    slug: 'windsor',
    displayName: 'Windsor',
    region: 'Eastern Suburbs',
    postcode: '3181',
    priority: 'medium',
    description: 'Professional mould treatment for Windsor terraces and apartments',
    keywords: ['windsor mould removal', 'terrace house mould', 'chapel street mould'],
    propertyTypes: ['Victorian terraces', 'Art deco apartments', 'Converted properties'],
    href: '/locations/windsor'
  },
  {
    name: 'Camberwell',
    slug: 'camberwell',
    displayName: 'Camberwell',
    region: 'Eastern Suburbs',
    postcode: '3124',
    priority: 'medium',
    description: 'Family-focused mould solutions for Camberwell homes',
    keywords: ['camberwell mould removal', 'family home mould', 'middle suburb mould'],
    propertyTypes: ['Family homes', 'Period houses', 'Modern extensions'],
    href: '/locations/camberwell'
  },
  {
    name: 'Hawthorn',
    slug: 'hawthorn',
    displayName: 'Hawthorn',
    region: 'Eastern Suburbs',
    postcode: '3122',
    priority: 'medium',
    description: 'Expert mould services for Hawthorn heritage and contemporary homes',
    keywords: ['hawthorn mould removal', 'heritage property mould', 'period home mould'],
    propertyTypes: ['Heritage homes', 'Period cottages', 'Modern apartments'],
    href: '/locations/hawthorn'
  },
  {
    name: 'Glen Iris',
    slug: 'glen-iris',
    displayName: 'Glen Iris',
    region: 'Eastern Suburbs',
    postcode: '3146',
    priority: 'medium',
    description: 'Comprehensive mould treatment for Glen Iris family properties',
    keywords: ['glen iris mould', 'family home mould removal', 'suburban mould treatment'],
    propertyTypes: ['Family homes', 'Period houses', 'Modern renovations'],
    href: '/locations/glen-iris'
  },

  // Coastal Areas - High Priority
  {
    name: 'Brighton',
    slug: 'brighton',
    displayName: 'Brighton',
    region: 'Coastal Areas',
    postcode: '3186',
    priority: 'high',
    description: 'Premium coastal mould solutions for Brighton beachside properties',
    keywords: ['brighton mould removal', 'beachside mould', 'coastal property mould'],
    propertyTypes: ['Beachside homes', 'Luxury properties', 'Heritage estates'],
    href: '/locations/brighton'
  },
  {
    name: 'Brighton East',
    slug: 'brighton-east',
    displayName: 'Brighton East',
    region: 'Coastal Areas',
    postcode: '3187',
    priority: 'medium',
    description: 'Professional mould services for Brighton East coastal homes',
    keywords: ['brighton east mould', 'coastal mould removal', 'beachside property mould'],
    propertyTypes: ['Coastal homes', 'Family houses', 'Modern developments'],
    href: '/locations/brighton-east'
  },
  {
    name: 'St Kilda',
    slug: 'st-kilda',
    displayName: 'St Kilda',
    region: 'Coastal Areas',
    postcode: '3182',
    priority: 'high',
    description: 'Comprehensive mould treatment for St Kilda beachside properties',
    keywords: ['st kilda mould removal', 'beachside mould', 'apartment mould treatment'],
    propertyTypes: ['Beachside apartments', 'Period homes', 'Art deco buildings'],
    href: '/locations/st-kilda'
  },
  {
    name: 'Hampton',
    slug: 'hampton',
    displayName: 'Hampton',
    region: 'Coastal Areas',
    postcode: '3188',
    priority: 'medium',
    description: 'Expert coastal mould solutions for Hampton family homes',
    keywords: ['hampton mould removal', 'coastal family home mould', 'beachside mould'],
    propertyTypes: ['Coastal family homes', 'Period houses', 'Modern beachside'],
    href: '/locations/hampton'
  },
  {
    name: 'Sandringham',
    slug: 'sandringham',
    displayName: 'Sandringham',
    region: 'Coastal Areas',
    postcode: '3191',
    priority: 'medium',
    description: 'Professional mould services for Sandringham coastal properties',
    keywords: ['sandringham mould', 'coastal mould removal', 'beachside home mould'],
    propertyTypes: ['Coastal homes', 'Beachside cottages', 'Modern properties'],
    href: '/locations/sandringham'
  },
  {
    name: 'Elwood',
    slug: 'elwood',
    displayName: 'Elwood',
    region: 'Coastal Areas',
    postcode: '3184',
    priority: 'medium',
    description: 'Specialized mould treatment for Elwood beachside apartments and homes',
    keywords: ['elwood mould removal', 'beachside apartment mould', 'coastal property mould'],
    propertyTypes: ['Beachside apartments', 'Art deco buildings', 'Modern units'],
    href: '/locations/elwood'
  },
  {
    name: 'Elsternwick',
    slug: 'elsternwick',
    displayName: 'Elsternwick',
    region: 'Coastal Areas',
    postcode: '3185',
    priority: 'medium',
    description: 'Comprehensive mould solutions for Elsternwick properties',
    keywords: ['elsternwick mould', 'residential mould removal', 'period home mould'],
    propertyTypes: ['Period homes', 'Family houses', 'Art deco apartments'],
    href: '/locations/elsternwick'
  },
  {
    name: 'Bentleigh',
    slug: 'bentleigh',
    displayName: 'Bentleigh',
    region: 'Coastal Areas',
    postcode: '3204',
    priority: 'medium',
    description: 'Expert mould services for Bentleigh family homes and units',
    keywords: ['bentleigh mould removal', 'family home mould', 'residential mould treatment'],
    propertyTypes: ['Family homes', 'Unit blocks', 'Period cottages'],
    href: '/locations/bentleigh'
  },
  {
    name: 'Mentone',
    slug: 'mentone',
    displayName: 'Mentone',
    region: 'Coastal Areas',
    postcode: '3194',
    priority: 'medium',
    description: 'Professional coastal mould treatment for Mentone properties',
    keywords: ['mentone mould removal', 'coastal mould treatment', 'beachside mould'],
    propertyTypes: ['Coastal homes', 'Family houses', 'Beachside units'],
    href: '/locations/mentone'
  },
  {
    name: 'Mordialloc',
    slug: 'mordialloc',
    displayName: 'Mordialloc',
    region: 'Coastal Areas',
    postcode: '3195',
    priority: 'low',
    description: 'Reliable mould services for Mordialloc coastal and inland properties',
    keywords: ['mordialloc mould removal', 'coastal property mould', 'family home mould'],
    propertyTypes: ['Coastal homes', 'Family houses', 'Unit developments'],
    href: '/locations/mordialloc'
  },

  // Northern Suburbs - Medium Priority
  {
    name: 'Brunswick',
    slug: 'brunswick',
    displayName: 'Brunswick',
    region: 'Northern Suburbs',
    postcode: '3056',
    priority: 'high',
    description: 'Professional mould solutions for Brunswick heritage and modern properties',
    keywords: ['brunswick mould removal', 'inner north mould', 'heritage property mould'],
    propertyTypes: ['Heritage cottages', 'Warehouse conversions', 'Modern apartments'],
    href: '/locations/brunswick'
  },
  {
    name: 'Northcote',
    slug: 'northcote',
    displayName: 'Northcote',
    region: 'Northern Suburbs',
    postcode: '3070',
    priority: 'medium',
    description: 'Expert mould treatment for Northcote terraces and contemporary homes',
    keywords: ['northcote mould removal', 'terrace house mould', 'inner north mould'],
    propertyTypes: ['Victorian terraces', 'Edwardian homes', 'Modern renovations'],
    href: '/locations/northcote'
  },
  {
    name: 'Thornbury',
    slug: 'thornbury',
    displayName: 'Thornbury',
    region: 'Northern Suburbs',
    postcode: '3071',
    priority: 'medium',
    description: 'Comprehensive mould services for Thornbury period and modern homes',
    keywords: ['thornbury mould removal', 'period home mould', 'family home mould'],
    propertyTypes: ['Period homes', 'Family houses', 'Modern developments'],
    href: '/locations/thornbury'
  },
  {
    name: 'Preston',
    slug: 'preston',
    displayName: 'Preston',
    region: 'Northern Suburbs',
    postcode: '3072',
    priority: 'medium',
    description: 'Professional mould treatment for Preston residential properties',
    keywords: ['preston mould removal', 'family home mould', 'residential mould treatment'],
    propertyTypes: ['Family homes', 'Period cottages', 'Unit developments'],
    href: '/locations/preston'
  },
  {
    name: 'Coburg',
    slug: 'coburg',
    displayName: 'Coburg',
    region: 'Northern Suburbs',
    postcode: '3058',
    priority: 'medium',
    description: 'Reliable mould solutions for Coburg homes and apartments',
    keywords: ['coburg mould removal', 'residential mould treatment', 'apartment mould'],
    propertyTypes: ['Family homes', 'Apartments', 'Period houses'],
    href: '/locations/coburg'
  },
  {
    name: 'Reservoir',
    slug: 'reservoir',
    displayName: 'Reservoir',
    region: 'Northern Suburbs',
    postcode: '3073',
    priority: 'medium',
    description: 'Expert mould services for Reservoir family homes and units',
    keywords: ['reservoir mould removal', 'family home mould', 'unit block mould'],
    propertyTypes: ['Family homes', 'Unit blocks', 'Period properties'],
    href: '/locations/reservoir'
  },
  {
    name: 'Heidelberg',
    slug: 'heidelberg',
    displayName: 'Heidelberg',
    region: 'Northern Suburbs',
    postcode: '3084',
    priority: 'medium',
    description: 'Professional mould treatment for Heidelberg properties near the river',
    keywords: ['heidelberg mould removal', 'riverside mould', 'family home mould'],
    propertyTypes: ['Riverside homes', 'Family houses', 'Period properties'],
    href: '/locations/heidelberg'
  },
  {
    name: 'Ivanhoe',
    slug: 'ivanhoe',
    displayName: 'Ivanhoe',
    region: 'Northern Suburbs',
    postcode: '3079',
    priority: 'medium',
    description: 'Premium mould services for Ivanhoe heritage and modern homes',
    keywords: ['ivanhoe mould removal', 'heritage home mould', 'period property mould'],
    propertyTypes: ['Heritage homes', 'Period properties', 'Modern houses'],
    href: '/locations/ivanhoe'
  },
  {
    name: 'Fairfield',
    slug: 'fairfield',
    displayName: 'Fairfield',
    region: 'Northern Suburbs',
    postcode: '3078',
    priority: 'medium',
    description: 'Comprehensive mould solutions for Fairfield residential properties',
    keywords: ['fairfield mould removal', 'residential mould treatment', 'family home mould'],
    propertyTypes: ['Family homes', 'Period cottages', 'Modern renovations'],
    href: '/locations/fairfield'
  },

  // Western Suburbs - Medium Priority
  {
    name: 'Footscray',
    slug: 'footscray',
    displayName: 'Footscray',
    region: 'Western Suburbs',
    postcode: '3011',
    priority: 'medium',
    description: 'Professional mould services for Footscray heritage and contemporary properties',
    keywords: ['footscray mould removal', 'inner west mould', 'heritage property mould'],
    propertyTypes: ['Heritage cottages', 'Warehouse conversions', 'Modern apartments'],
    href: '/locations/footscray'
  },
  {
    name: 'Yarraville',
    slug: 'yarraville',
    displayName: 'Yarraville',
    region: 'Western Suburbs',
    postcode: '3013',
    priority: 'medium',
    description: 'Expert mould treatment for Yarraville period homes and new developments',
    keywords: ['yarraville mould removal', 'period home mould', 'family home mould'],
    propertyTypes: ['Period homes', 'Family houses', 'Modern developments'],
    href: '/locations/yarraville'
  },
  {
    name: 'Williamstown',
    slug: 'williamstown',
    displayName: 'Williamstown',
    region: 'Western Suburbs',
    postcode: '3016',
    priority: 'medium',
    description: 'Coastal and heritage mould solutions for Williamstown properties',
    keywords: ['williamstown mould removal', 'coastal mould', 'heritage home mould'],
    propertyTypes: ['Coastal homes', 'Heritage properties', 'Waterfront apartments'],
    href: '/locations/williamstown'
  },
  {
    name: 'Maribyrnong',
    slug: 'maribyrnong',
    displayName: 'Maribyrnong',
    region: 'Western Suburbs',
    postcode: '3032',
    priority: 'medium',
    description: 'Professional mould services for Maribyrnong riverside properties',
    keywords: ['maribyrnong mould removal', 'riverside mould', 'apartment mould treatment'],
    propertyTypes: ['Riverside apartments', 'Family homes', 'Modern developments'],
    href: '/locations/maribyrnong'
  },
  {
    name: 'Seddon',
    slug: 'seddon',
    displayName: 'Seddon',
    region: 'Western Suburbs',
    postcode: '3011',
    priority: 'medium',
    description: 'Comprehensive mould treatment for Seddon period and modern homes',
    keywords: ['seddon mould removal', 'period home mould', 'inner west mould'],
    propertyTypes: ['Period homes', 'Modern renovations', 'Family houses'],
    href: '/locations/seddon'
  },
  {
    name: 'Spotswood',
    slug: 'spotswood',
    displayName: 'Spotswood',
    region: 'Western Suburbs',
    postcode: '3015',
    priority: 'medium',
    description: 'Expert mould solutions for Spotswood heritage cottages and new homes',
    keywords: ['spotswood mould removal', 'heritage cottage mould', 'family home mould'],
    propertyTypes: ['Heritage cottages', 'Family homes', 'Modern houses'],
    href: '/locations/spotswood'
  },
  {
    name: 'Newport',
    slug: 'newport',
    displayName: 'Newport',
    region: 'Western Suburbs',
    postcode: '3015',
    priority: 'medium',
    description: 'Professional mould treatment for Newport residential properties',
    keywords: ['newport mould removal', 'residential mould treatment', 'family home mould'],
    propertyTypes: ['Family homes', 'Period cottages', 'Modern developments'],
    href: '/locations/newport'
  },
  {
    name: 'Altona',
    slug: 'altona',
    displayName: 'Altona',
    region: 'Western Suburbs',
    postcode: '3018',
    priority: 'low',
    description: 'Reliable mould services for Altona coastal and residential properties',
    keywords: ['altona mould removal', 'coastal mould treatment', 'family home mould'],
    propertyTypes: ['Coastal homes', 'Family houses', 'Unit developments'],
    href: '/locations/altona'
  },

  // Southern Suburbs - Medium Priority
  {
    name: 'Caulfield',
    slug: 'caulfield',
    displayName: 'Caulfield',
    region: 'Southern Suburbs',
    postcode: '3162',
    priority: 'medium',
    description: 'Professional mould solutions for Caulfield family homes and apartments',
    keywords: ['caulfield mould removal', 'family home mould', 'apartment mould treatment'],
    propertyTypes: ['Family homes', 'Art deco apartments', 'Period houses'],
    href: '/locations/caulfield'
  },
  {
    name: 'Oakleigh',
    slug: 'oakleigh',
    displayName: 'Oakleigh',
    region: 'Southern Suburbs',
    postcode: '3166',
    priority: 'medium',
    description: 'Expert mould treatment for Oakleigh residential and commercial properties',
    keywords: ['oakleigh mould removal', 'residential mould treatment', 'commercial mould'],
    propertyTypes: ['Family homes', 'Commercial buildings', 'Unit developments'],
    href: '/locations/oakleigh'
  },
  {
    name: 'Carnegie',
    slug: 'carnegie',
    displayName: 'Carnegie',
    region: 'Southern Suburbs',
    postcode: '3163',
    priority: 'medium',
    description: 'Comprehensive mould services for Carnegie family homes and units',
    keywords: ['carnegie mould removal', 'family home mould', 'unit block mould'],
    propertyTypes: ['Family homes', 'Unit blocks', 'Period cottages'],
    href: '/locations/carnegie'
  },
  {
    name: 'Murrumbeena',
    slug: 'murrumbeena',
    displayName: 'Murrumbeena',
    region: 'Southern Suburbs',
    postcode: '3163',
    priority: 'medium',
    description: 'Professional mould treatment for Murrumbeena residential properties',
    keywords: ['murrumbeena mould removal', 'residential mould treatment', 'family home mould'],
    propertyTypes: ['Family homes', 'Period houses', 'Modern renovations'],
    href: '/locations/murrumbeena'
  },
  {
    name: 'Hughesdale',
    slug: 'hughesdale',
    displayName: 'Hughesdale',
    region: 'Southern Suburbs',
    postcode: '3166',
    priority: 'medium',
    description: 'Expert mould solutions for Hughesdale family homes and apartments',
    keywords: ['hughesdale mould removal', 'family home mould', 'apartment mould'],
    propertyTypes: ['Family homes', 'Apartments', 'Period properties'],
    href: '/locations/hughesdale'
  },
  {
    name: 'Clayton',
    slug: 'clayton',
    displayName: 'Clayton',
    region: 'Southern Suburbs',
    postcode: '3168',
    priority: 'medium',
    description: 'Comprehensive mould services for Clayton homes and university properties',
    keywords: ['clayton mould removal', 'university area mould', 'student accommodation mould'],
    propertyTypes: ['Family homes', 'Student accommodation', 'Unit developments'],
    href: '/locations/clayton'
  },
  {
    name: 'Glen Waverley',
    slug: 'glen-waverley',
    displayName: 'Glen Waverley',
    region: 'Southern Suburbs',
    postcode: '3150',
    priority: 'medium',
    description: 'Professional mould treatment for Glen Waverley family homes',
    keywords: ['glen waverley mould removal', 'family home mould', 'suburban mould treatment'],
    propertyTypes: ['Family homes', 'Modern houses', 'Townhouses'],
    href: '/locations/glen-waverley'
  },
  {
    name: 'Mount Waverley',
    slug: 'mount-waverley',
    displayName: 'Mount Waverley',
    region: 'Southern Suburbs',
    postcode: '3149',
    priority: 'medium',
    description: 'Expert mould solutions for Mount Waverley suburban homes',
    keywords: ['mount waverley mould removal', 'suburban mould treatment', 'family home mould'],
    propertyTypes: ['Family homes', 'Modern houses', 'Period renovations'],
    href: '/locations/mount-waverley'
  }

  // Note: Additional suburbs from the file list can be added following the same pattern
  // This covers the main high and medium priority suburbs across all regions
];

// Helper functions for suburb data
export const getSuburbsByRegion = (region: string): SuburbData[] => {
  return suburbsData.filter(suburb => suburb.region === region);
};

export const getSuburbsByPriority = (priority: 'high' | 'medium' | 'low'): SuburbData[] => {
  return suburbsData.filter(suburb => suburb.priority === priority);
};

export const searchSuburbs = (query: string): SuburbData[] => {
  const searchTerm = query.toLowerCase();
  return suburbsData.filter(suburb =>
    suburb.name.toLowerCase().includes(searchTerm) ||
    suburb.displayName.toLowerCase().includes(searchTerm) ||
    suburb.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm)) ||
    suburb.region.toLowerCase().includes(searchTerm)
  );
};

export const getAllRegions = (): string[] => {
  return Object.keys(melbourneRegions);
};

export const getHighPrioritySuburbs = (): SuburbData[] => {
  return getSuburbsByPriority('high');
};