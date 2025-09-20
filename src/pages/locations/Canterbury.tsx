import { ArrowRight, Clock, Shield, MapPin, Phone, CheckCircle, AlertTriangle, Droplets, Wind, Home } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { StrategicLocationLinks } from "@/components/seo/InternalLinking";
import { OptimizedImage } from '../../components/OptimizedImage';

export const Canterbury = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Canterbury Mould Removal", href: "/services/mould-removal-canterbury", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Canterbury"
        title="Professional Mould Inspection Canterbury | Mould & Restoration Co."
        description="Expert mould inspection services in Canterbury, Melbourne. Specialising in period homes, Victorian cottages & modern units. Professional assessment & testing. Call 1800 954 117."
        keywords="mould inspection Canterbury, mould testing Canterbury Melbourne, mould assessment Canterbury, mould remediation Canterbury, professional mould inspection Canterbury Victoria"
        canonicalUrl="https://mouldrestoration.com.au/locations/canterbury"
      />
      <LocalBusinessSchema
        pageName="Canterbury Mould Inspection"
        pageUrl="https://mouldrestoration.com.au/locations/canterbury"
        serviceType="inspection"
        location="Canterbury"
      />
      <ServiceSchema
        serviceName="Mould Inspection"
        serviceArea="Canterbury"
        description="Expert mould inspection services in Canterbury, Melbourne. Specialising in period homes, Victorian cottages & modern units. Professional assessment & testing."
      />

      <Navigation />
      <Breadcrumb items={breadcrumbItems} />
        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6" />
              <span className="text-blue-200">Canterbury, Melbourne</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Mould Inspection Canterbury
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Expert mould detection and assessment services for Canterbury's prestigious period homes, Victorian cottages, and contemporary developments. Protecting your investment and family's health.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:1800954117"
                className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call 1800 954 117
              </a>
              <a
                href="#contact"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>

        {/* Quick Info Bar */}
        <div className="bg-white shadow-sm py-4 px-4">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-gray-700">Same Day Service Available</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="text-gray-700">Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-purple-600" />
              <span className="text-gray-700">Canterbury Heritage Specialists</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">

          {/* Canterbury Mould Challenges */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Canterbury Mould Inspection Experts</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <AlertTriangle className="h-8 w-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Period Property Preservation</h3>
                <p className="text-professional leading-relaxed">
                  Canterbury's prestigious Victorian and Edwardian homes require specialised mould inspection approaches. These heritage properties often feature original timber construction, lime mortar pointing, and period ventilation systems that need careful assessment to maintain their character while addressing moisture concerns.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Droplets className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Established Garden Environment</h3>
                <p className="text-professional leading-relaxed">
                  Canterbury's mature tree-lined streets and established gardens create beautiful surroundings but can contribute to localised humidity. The combination of leaf litter, garden irrigation, and canopy coverage requires specific consideration during mould assessments.
                </p>
              </div>
            </div>

            <div className="bg-columbia p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Why Canterbury Properties Need Expert Mould Inspection</h3>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Victorian cottages and grand period homes with original features</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Heritage properties with period ventilation challenges</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Modern units and townhouses in established settings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Mature landscape creating unique microclimates</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Comprehensive Mould Inspection Services</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Home className="h-8 w-8 text-success mb-4" />
                <h3 className="text-lg font-semibold mb-3">Heritage Home Assessment</h3>
                <p className="text-professional mb-4">
                  Specialised inspection of Victorian and Edwardian properties, understanding period construction methods, original materials, and heritage conservation requirements.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Original timber and stonework assessment</li>
                  <li>• Period mortar and render evaluation</li>
                  <li>• Heritage ventilation system analysis</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Wind className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">Modern Property Testing</h3>
                <p className="text-professional mb-4">
                  Comprehensive assessment of contemporary units, apartments, and townhouses, focusing on building envelope performance and mechanical ventilation effectiveness.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Building envelope integrity testing</li>
                  <li>• HVAC system performance check</li>
                  <li>• Moisture ingress identification</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Shield className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Investment Property Inspection</h3>
                <p className="text-professional mb-4">
                  Detailed mould assessment for property investors and buyers, providing comprehensive documentation for informed decision-making in Canterbury's premium market.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Pre-purchase mould screening</li>
                  <li>• Investment risk evaluation</li>
                  <li>• Insurance and legal documentation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Local Expertise */}
          <section className="mb-16">
            <div className="bg-success/10 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-green-800 mb-6">Local Canterbury Expertise</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-green-700 mb-3">Property Types We Service</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Victorian cottages and grand homes</li>
                    <li>• Edwardian properties and period renovations</li>
                    <li>• Contemporary apartments and units</li>
                    <li>• Heritage-listed properties</li>
                    <li>• Mixed-use developments and townhouses</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-700 mb-3">Common Canterbury Issues</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Period home moisture retention</li>
                    <li>• Original material degradation</li>
                    <li>• Garden irrigation proximity effects</li>
                    <li>• Mature tree canopy humidity</li>
                    <li>• Heritage conservation constraints</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Canterbury Inspection Process</h2>

            <div className="space-y-6">
              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-columbia p-3 rounded-full flex-shrink-0">
                  <span className="text-blue-800 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Property Consultation</h3>
                  <p className="text-professional">
                    Detailed discussion about your Canterbury property, including its age, construction type, recent renovations, and any observed mould concerns. Understanding your property's heritage value is crucial for our approach.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-columbia p-3 rounded-full flex-shrink-0">
                  <span className="text-blue-800 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Heritage-Sensitive Assessment</h3>
                  <p className="text-professional">
                    Careful visual inspection respecting the character of your Canterbury property. We use non-invasive thermal imaging and moisture detection methods to identify problem areas without damaging heritage features.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-columbia p-3 rounded-full flex-shrink-0">
                  <span className="text-blue-800 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Professional Air & Surface Sampling</h3>
                  <p className="text-professional">
                    Scientific sampling and laboratory analysis to identify mould species and concentration levels. This data is essential for developing appropriate remediation strategies for your property type.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-columbia p-3 rounded-full flex-shrink-0">
                  <span className="text-blue-800 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Comprehensive Documentation</h3>
                  <p className="text-professional">
                    Detailed report with findings, heritage considerations, and specific recommendations tailored to Canterbury properties. Includes photographic evidence, test results, and preservation-appropriate solutions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Mould & Restoration Co. in Canterbury</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Heritage Property Specialisation</h3>
                    <p className="text-professional">Extensive experience with Canterbury's Victorian and Edwardian properties, understanding heritage conservation requirements and appropriate treatment methods.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Local Environmental Knowledge</h3>
                    <p className="text-professional">Understanding of Canterbury's unique microclimate, mature landscaping effects, and seasonal moisture patterns affecting different property types.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Non-Invasive Technology</h3>
                    <p className="text-professional">Advanced thermal imaging and moisture detection equipment that preserves heritage features while providing accurate assessment data.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Rapid Response Service</h3>
                    <p className="text-professional">Same-day inspections available throughout Canterbury, understanding the urgency of mould issues in valuable heritage and investment properties.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Professional Documentation</h3>
                    <p className="text-professional">Comprehensive reports suitable for heritage conservation, insurance claims, property transactions, and remediation planning with clear recommendations.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Fully Licensed & Insured</h3>
                    <p className="text-professional">Complete peace of mind with full professional licensing, comprehensive insurance coverage, and compliance with Australian building standards.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-16">
            <div className="bg-blue-900 text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Get Your Canterbury Mould Inspection Today</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-blue-100 mb-6">
                    Protect your Canterbury property investment and your family's health with professional mould inspection services. Our heritage-sensitive approach ensures your property's character is preserved while addressing any mould concerns.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-columbia" />
                      <span className="text-lg">Call: <strong>1800 954 117</strong></span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-columbia" />
                      <span>Available 7 Days: 7am - 7pm</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-columbia" />
                      <span>Servicing All Canterbury Properties</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Service Areas Include:</h3>
                  <ul className="grid grid-cols-1 gap-2 text-blue-100">
                    <li>• Canterbury Road district</li>
                    <li>• Balwyn Road corridor</li>
                    <li>• Maling Road neighbourhood</li>
                    <li>• Riversdale Road area</li>
                    <li>• All Canterbury streets & heritage precincts</li>
                  </ul>

                  <div className="mt-6 p-4 bg-primary-600 rounded-lg">
                    <p className="text-sm text-blue-200">
                      <strong>ABN:</strong> 47 683 089 652<br/>
                      Fully licensed and insured for your protection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      <StrategicLocationLinks
        currentLocation="Canterbury"
        serviceType="inspection"
      />
    </div>
  );
};

export default Canterbury;