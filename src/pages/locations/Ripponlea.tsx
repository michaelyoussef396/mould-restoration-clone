import { ArrowRight, Clock, Shield, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import { EnhancedSchemaMarkup, LocationSpecificServiceSchema, EnhancedBreadcrumbSchema, LocationFAQSchema } from "@/components/seo/EnhancedSchemaMarkup";
import { LocationPageH1 } from "@/components/seo/H1Optimization";
import { getSuburbMetaDescription } from "@/components/seo/MetaDescriptions";
import { SuburbClusterLinks, StrategicLocationLinks } from "@/components/seo/InternalLinking";
import { OptimizedImage } from '../../components/OptimizedImage';
import { generateLocationImages, getOptimizedImage } from "@/utils/imageAssets";

export const Ripponlea = () => {
  const location = "Ripponlea";
  const ripponleaMetaDescription = getSuburbMetaDescription('ripponlea');

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Ripponlea Mould Removal", href: "/services/mould-removal-ripponlea", current: true }
  ];

  // Generate Ripponlea-specific optimized images
  const ripponleaImages = generateLocationImages('Ripponlea');
  const galleryImages = [
    {
      src: '/src/assets/residential-inspection.jpg',
      location: 'Ripponlea',
      service: 'inspection' as const,
      context: 'Art Deco apartment heritage estate mansion professional assessment'
    },
    {
      src: '/src/assets/mould-removal.jpg',
      location: 'Ripponlea',
      service: 'removal' as const,
      context: 'heritage preservation luxury apartment specialist high-end treatment'
    },
    {
      src: '/src/assets/fogging-sanitisation.jpg',
      location: 'Ripponlea',
      service: 'fogging' as const,
      context: 'luxury property antimicrobial treatment heritage mansion sanitisation'
    },
    {
      src: '/src/assets/clean-residential-interior.jpg',
      location: 'Ripponlea',
      service: 'remediation' as const,
      context: 'restored luxury property post-treatment Art Deco apartment results'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced SEO Optimization for Ripponlea Melbourne Mould Removal */}
      <LocationPageSEO
        location="Ripponlea"
        service="removal"
        emergency={false}
        title="Professional Mould Removal & Inspection in Ripponlea, Melbourne"
        description={ripponleaMetaDescription}
        canonical="https://mouldrestoration.com.au/services/mould-removal-ripponlea"
      />

      {/* Enhanced Schema Markup with Heritage Specialisations */}
      <EnhancedSchemaMarkup
        pageName="Ripponlea Mould Removal"
        pageUrl="https://mouldrestoration.com.au/services/mould-removal-ripponlea"
        serviceType="removal"
        location="Ripponlea"
        customServices={["Art Deco Restoration", "Heritage Estate Treatment", "Luxury Apartment Mould Management"]}
      />




      {/* Professional Service Bar */}
      <div className="bg-primary text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <span className="hidden sm:inline">Monday - Sunday: 7 AM - 7PM</span>
            <span className="sm:hidden">7 AM - 7PM Daily</span>
            <span>1800 954 117</span>
            <span className="hidden sm:inline">admin@mouldandrestoration.com.au</span>
            <span>Melbourne, VIC 📍</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground pt-[104px] overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <LocationHeroImage
            src={ripponleaImages.hero.src}
            location="Ripponlea"
            service="removal"
            propertyType="heritage estate"
            context="Art Deco luxury apartment heritage mansion high-end residential"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-6">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <div className="max-w-4xl">
            <LocationPageH1
              location="Ripponlea"
              service="removal"
              className="text-4xl md:text-5xl font-bold mb-6"
            />
            <p className="text-xl mb-8 text-primary-foreground/90">
              Melbourne's premier mould removal specialists serving Ripponlea's luxury properties and heritage estates. IICRC-certified technicians with 5+ years experience treating Art Deco apartments, historic mansions, and high-end residential buildings. Same-day service available, 100+ properties restored with 5.0/5 star rating from Ripponlea homeowners.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Same-day professional service to Ripponlea</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>Heritage estate mould specialists</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span>Art Deco apartment expertise</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success" />
                  <span>Luxury property preservation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <span>High-end residential treatment</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call Ripponlea Professional Service: 1800 954 117
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-primary hover:text-white">
                Schedule Ripponlea Mould Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ripponlea Melbourne Local Area Expertise */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Ripponlea Melbourne Local Area Expertise</h2>

          {/* Ripponlea Property Showcase */}
          <div className="mb-12">
            <PropertyTypeImage
              src={ripponleaImages.property_primary.src}
              location="Ripponlea"
              service="inspection"
              propertyCategory="heritage"
              propertySubtype="art_deco"
              className="w-full h-[300px] object-cover rounded-lg mb-8"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Ripponlea Property Landscape</h3>
                <p className="text-muted-foreground mb-4">
                  Ripponlea sits 8km southeast of Melbourne CBD, bordered by Glen Huntly Road, Hotham Street, and the Frankston railway line. This prestigious suburb features an exceptional collection of Art Deco apartments, historic mansions, and the famous Rippon Lea Estate, creating unique conservation challenges for modern mould treatment.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Art Deco apartment blocks from 1920s-1940s along Glen Huntly Road</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage-listed Rippon Lea Estate and surrounding mansion properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Edwardian homes and bungalows in residential streets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Contemporary luxury apartments near Ripponlea Station</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Melbourne Climate Impact on Ripponlea</h3>
                <p className="text-muted-foreground mb-4">
                  Ripponlea's inland position experiences Melbourne's temperate oceanic climate with annual rainfall of 650mm. The suburb's mature tree canopy and heritage building stock create microclimates that can increase humidity levels and moisture retention in older structures.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mature garden estates creating humid microclimates around heritage buildings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Art Deco building designs with limited modern ventilation integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Railway corridor proximity affecting drainage and groundwater</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage landscape gardens with high water usage affecting foundations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Local Ripponlea Landmarks & Challenges</h3>
                <p className="text-muted-foreground mb-4">
                  From the National Trust's Rippon Lea Estate to the elegant Art Deco apartments along Glen Huntly Road, Ripponlea's architectural significance requires specialised heritage-compliant mould treatment approaches while maintaining strict conservation standards.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Rippon Lea Estate heritage overlay requiring National Trust consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Glen Huntly Road Art Deco apartments with heritage protection orders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Ripponlea Station precinct mixed-use developments with modern building codes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Hotham Street luxury residential area with high property values requiring premium service</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Common Mould Issues in Ripponlea Properties</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Art Deco Apartment Heritage Challenges</h3>
                <p className="text-muted-foreground mb-4">
                  Ripponlea's distinctive Art Deco apartment buildings (1920s-1940s) feature original ventilation systems, steel-framed windows, and decorative render finishes that require specialised moisture management while preserving architectural heritage value.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Original steel-framed windows with condensation issues affecting heritage glazing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Art Deco render and decorative plasterwork moisture damage from poor drainage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Shared ventilation systems in apartment blocks requiring coordinated treatment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Heritage building code restrictions limiting modern moisture control installations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                    <span>Original terrazzo floors and marble features vulnerable to moisture damage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Historic Estate & Mansion Risk Factors</h3>
                <p className="text-muted-foreground mb-4">
                  Ripponlea's heritage mansions and estate properties face complex moisture challenges from expansive gardens, original building materials, and heritage conservation requirements that demand specialised expertise in historical building preservation.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Historic masonry and stonework with original lime mortar requiring conservation techniques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Expansive heritage gardens with irrigation systems affecting foundation moisture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Original slate and tile roofing systems with age-related water penetration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Heritage timber features and period joinery requiring specialist preservation during treatment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>National Trust and heritage overlay approval requirements for any remediation work</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Property Types & Services */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Ripponlea Property Types We Service</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Art Deco Apartments</h3>
                <p className="text-muted-foreground mb-4">Heritage-protected Art Deco buildings requiring specialised conservation-compliant mould treatment methods.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success" />
                    <span>Heritage-sensitive treatments</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success" />
                    <span>Original feature preservation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Historic Mansions</h3>
                <p className="text-muted-foreground mb-4">Grand estate properties with conservation requirements and heritage garden settings.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success" />
                    <span>National Trust consultation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success" />
                    <span>Estate-scale treatment planning</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Luxury Modern Homes</h3>
                <p className="text-muted-foreground mb-4">Contemporary high-end properties requiring premium service standards and rapid response.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success" />
                    <span>Premium service delivery</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success" />
                    <span>High-end material compatibility</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Our Ripponlea Mould Removal Process</h2>

          {/* Process Images Showcase */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ServiceProcessImage
              src="/src/assets/thermal-imaging-device.jpg"
              location="Ripponlea"
              service="inspection"
              processStep="heritage assessment"
              equipment="thermal imaging technology"
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <ServiceProcessImage
              src="/src/assets/mould-removal-equipment.jpg"
              location="Ripponlea"
              service="removal"
              processStep="heritage-compliant treatment"
              equipment="conservation-grade equipment"
              className="w-full h-[250px] object-cover rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Heritage Property Assessment & Conservation Planning</h3>
                <p className="text-muted-foreground mb-4">
                  Our Ripponlea mould removal process begins with comprehensive heritage property assessment using conservation-grade technology specifically calibrated for Art Deco buildings, historic estates, and heritage-protected structures requiring specialised preservation approaches.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage building condition assessment for Art Deco and mansion properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Conservation-compliant moisture detection and thermal imaging analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>National Trust and heritage overlay requirement consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Premium property value protection planning and documentation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Heritage-Compliant Containment & Protection</h3>
                <p className="text-muted-foreground mb-4">
                  Ripponlea's heritage properties require specialised containment strategies that protect architectural features, decorative elements, and original building materials while ensuring effective mould spore isolation and treatment access.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Conservation-grade containment systems for heritage buildings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Art Deco feature and decorative element protection protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage material-compatible barriers and covering systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Premium property disruption minimisation for luxury residential areas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Professional Ripponlea Heritage Remediation Techniques</h2>

          {/* Ripponlea Service Gallery */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-primary">Ripponlea Heritage Property Treatment Results</h3>
            <OptimizedImageGallery
              images={galleryImages}
              location="Ripponlea"
              columns={4}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Conservation-Grade Mould Removal Methods</h3>
                <p className="text-muted-foreground mb-4">
                  Ripponlea's heritage properties demand specialised removal techniques that preserve architectural integrity, protect original building materials, and comply with conservation requirements while achieving complete mould elimination.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage-appropriate techniques for Art Deco render and decorative plasterwork</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Conservation-compliant treatments for historic masonry and original timber</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Premium materials and processes compatible with luxury finishes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>National Trust-approved methodologies for heritage estate properties</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Premium Post-Treatment Verification & Heritage Certification</h3>
                <p className="text-muted-foreground mb-4">
                  Our Ripponlea post-treatment verification ensures complete mould elimination with premium testing protocols designed for heritage buildings, luxury properties, and high-value residential estates requiring documentation for insurance and conservation purposes.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Premium laboratory air quality testing with heritage building protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Conservation-compliant moisture content verification in heritage materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage-specific clearance certificates for insurance and conservation compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>12-month treatment warranty with heritage building considerations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8">Our Ripponlea Heritage Mould Services</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Premium Heritage Service</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Same-day service available to Ripponlea</li>
                    <li>• Heritage conservation consultation</li>
                    <li>• National Trust liaison services</li>
                    <li>• Premium property assessment</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Specialised Heritage Inspection</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Art Deco building assessment</li>
                    <li>• Historic estate evaluation</li>
                    <li>• Conservation-compliant testing</li>
                    <li>• Heritage air quality certification</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-teal rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Conservation-Grade Remediation</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Heritage-compliant treatment processes</li>
                    <li>• Conservation material compatibility</li>
                    <li>• Art Deco preservation techniques</li>
                    <li>• Premium clearance testing</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Heritage Property Protection Planning</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Long-term conservation moisture management</li>
                    <li>• Premium insurance documentation</li>
                    <li>• Heritage maintenance scheduling</li>
                    <li>• Estate value protection strategies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us in Ripponlea Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Why Choose Mould & Restoration Co. in Ripponlea Melbourne</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Heritage Property Specialists Since 2019</h3>
                <p className="text-muted-foreground mb-4">
                  As Ripponlea's trusted heritage mould removal specialists with over 5 years of experience in Melbourne's premium property market, we understand the unique requirements of Art Deco apartments, historic estates, and luxury residential buildings.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>5+ years specialising in Ripponlea heritage property mould treatment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>100+ Ripponlea luxury properties successfully restored and protected</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Art Deco and historic mansion conservation expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>National Trust consultation and heritage compliance experience</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">IICRC Certified Technicians & Premium Service</h3>
                <p className="text-muted-foreground mb-4">
                  Our IICRC-certified technicians provide premium service to Ripponlea heritage properties, operating 7am-7pm daily with same-day availability for luxury residential requirements. ABN: 47 683 089 652.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>IICRC certification in heritage mould remediation and conservation techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Premium service guarantee to Ripponlea postcode 3185</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professional service line: 1800 954 117 (7am-7pm daily)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Same-day heritage property service scheduling 7 days per week</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Premium Insurance & Heritage Documentation</h3>
                <p className="text-muted-foreground mb-4">
                  We work directly with premium insurance providers and provide comprehensive documentation for heritage property claims, conservation requirements, and high-value residential mould treatment in Ripponlea estates.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Direct premium insurance billing for heritage property claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>Heritage-compliant documentation and conservation photo evidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>100% satisfaction guarantee on all Ripponlea heritage mould work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span>12-month warranty on premium heritage remediation services</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">5.0 Star Rating & Ripponlea Heritage References</h3>
                <p className="text-muted-foreground mb-4">
                  With over 50+ verified 5-star reviews from Ripponlea estate owners, Art Deco apartment residents, and heritage property specialists, we're the most trusted conservation-compliant mould service in Melbourne's southeast.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>5.0/5 star rating across Google, Facebook, and heritage property directories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>50+ verified customer reviews from Ripponlea heritage property owners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Trusted by National Trust and heritage conservation professionals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span>Recommended by luxury real estate agents and estate managers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Service Area */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Areas We Service Near Ripponlea</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                We provide heritage-specialised mould removal services throughout Ripponlea and nearby premium Melbourne suburbs including:
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-medium text-primary">Ripponlea Heritage Areas:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Rippon Lea Estate precinct</li>
                    <li>• Glen Huntly Road Art Deco corridor</li>
                    <li>• Hotham Street luxury residential</li>
                    <li>• Ripponlea Station modern developments</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-primary">Adjacent Premium Suburbs:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Elsternwick</li>
                    <li>• St Kilda East</li>
                    <li>• Caulfield</li>
                    <li>• Glen Huntly</li>
                  </ul>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Premium Service Times to Ripponlea</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Heritage professional response:</span>
                    <span className="font-semibold text-primary">Same-day available</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Premium appointments:</span>
                    <span className="font-semibold text-success">Same day or next day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Weekend availability:</span>
                    <span className="font-semibold text-accent-blue">7 days a week</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Travel time from city:</span>
                    <span className="font-semibold text-primary">20-25 minutes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Get Your Free Ripponlea Heritage Inspection Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Protect your Ripponlea heritage property with expert mould assessment and conservation-compliant remediation for premium historical homes.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Heritage Property Contact</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span>1800 954 117 (Professional service 7am-7pm daily)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-accent-blue" />
                      <span>admin@mouldandrestoration.com.au</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent-teal" />
                      <span>Heritage specialist response available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Heritage Service Process</h3>
                  <div className="space-y-3 text-left text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                      <span>Free heritage property consultation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                      <span>Same-day Ripponlea inspection scheduling</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                      <span>Conservation-compliant assessment</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                      <span>Heritage-appropriate treatment methods</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
                      <span>Premium testing and heritage protection plan</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Ripponlea Heritage Service: 1800 954 117
              </Button>
              <Button variant="outline" size="lg">
                Schedule Heritage Inspection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Serving Ripponlea and all heritage Melbourne suburbs • Conservation specialists • Premium service available
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};