import { ArrowRight, Clock, Shield, MapPin, Phone, CheckCircle, AlertTriangle, Droplets, Wind, Home } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { StrategicLocationLinks } from "@/components/seo/InternalLinking";
import { OptimizedImage } from '../../components/OptimizedImage';

export const CaulfieldEast = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Caulfield East Mould Removal", href: "/services/mould-removal-caulfield-east", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Caulfield East"
        title="Professional Mould Inspection Caulfield East | Mould & Restoration Co."
        description="Expert mould inspection services in Caulfield East, Melbourne. Specialising in quality homes, modern developments & heritage properties near Caulfield Racecourse. Call 1800 954 117."
        keywords="mould inspection Caulfield East, mould testing Caulfield East Melbourne, mould assessment Caulfield East, mould remediation Caulfield East, professional mould inspection Caulfield East Victoria"
        canonicalUrl="https://mouldrestoration.com.au/locations/caulfield-east"
      />
      <LocalBusinessSchema
        pageName="Caulfield East Mould Inspection"
        pageUrl="https://mouldrestoration.com.au/locations/caulfield-east"
        serviceType="inspection"
        location="Caulfield East"
      />
      <ServiceSchema
        serviceName="Mould Inspection"
        serviceArea="Caulfield East"
        description="Expert mould inspection services in Caulfield East, Melbourne. Specialising in quality homes, modern developments & heritage properties near Caulfield Racecourse."
      />

      <Navigation />
      <Breadcrumb items={breadcrumbItems} />
        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6" />
              <span className="text-blue-200">Caulfield East, Melbourne</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Mould Inspection Caulfield East
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Expert mould detection and assessment services for Caulfield East's prestigious residential properties. Protecting quality homes, modern developments, and heritage properties with professional expertise.
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
              <span className="text-gray-700">Premium Property Specialists</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">

          {/* Caulfield East Mould Challenges */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Caulfield East Premium Property Mould Inspection</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <AlertTriangle className="h-8 w-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Quality Home Preservation</h3>
                <p className="text-professional leading-relaxed">
                  Caulfield East's premium residential properties require specialised mould inspection approaches to maintain their value and character. From quality family homes to heritage properties near the racecourse, protecting these significant investments demands expert assessment and preservation strategies.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Droplets className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Established Environment Factors</h3>
                <p className="text-professional leading-relaxed">
                  The established nature of Caulfield East, with mature landscaping, quality construction, and varied architectural styles, creates unique microenvironments. Understanding how these factors interact with Melbourne's climate is essential for effective mould management.
                </p>
              </div>
            </div>

            <div className="bg-columbia p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Why Caulfield East Properties Need Expert Mould Inspection</h3>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Premium family homes with quality construction standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Heritage properties requiring careful preservation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Modern developments with contemporary building techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Established gardens creating specific microclimates</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Premium Property Mould Inspection Services</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Home className="h-8 w-8 text-success mb-4" />
                <h3 className="text-lg font-semibold mb-3">Quality Home Assessment</h3>
                <p className="text-professional mb-4">
                  Comprehensive inspection of Caulfield East's premium family homes, understanding quality construction standards, established systems, and how property age affects moisture management.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Quality construction evaluation</li>
                  <li>• Established system performance</li>
                  <li>• Premium material assessment</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Wind className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">Heritage Property Testing</h3>
                <p className="text-professional mb-4">
                  Specialised assessment of heritage and character properties, using preservation-appropriate methods to identify mould issues while maintaining historical integrity and architectural value.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Non-invasive assessment techniques</li>
                  <li>• Heritage-appropriate solutions</li>
                  <li>• Character preservation focus</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Shield className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Investment Property Inspection</h3>
                <p className="text-professional mb-4">
                  Professional assessment for property investors and buyers in Caulfield East's premium market, providing comprehensive documentation for informed decision-making and asset protection.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Investment risk assessment</li>
                  <li>• Value preservation strategies</li>
                  <li>• Professional documentation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Local Expertise */}
          <section className="mb-16">
            <div className="bg-success/10 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-green-800 mb-6">Local Caulfield East Expertise</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-green-700 mb-3">Property Types We Service</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Premium family homes and estates</li>
                    <li>• Heritage and character properties</li>
                    <li>• Quality modern developments</li>
                    <li>• Renovated and extended homes</li>
                    <li>• Luxury apartments and units</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-700 mb-3">Common Caulfield East Issues</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Quality construction moisture management</li>
                    <li>• Heritage property preservation needs</li>
                    <li>• Established landscape drainage</li>
                    <li>• Premium material compatibility</li>
                    <li>• Racecourse proximity environmental effects</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Caulfield East Premium Inspection Process</h2>

            <div className="space-y-6">
              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-columbia p-3 rounded-full flex-shrink-0">
                  <span className="text-blue-800 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Premium Property Consultation</h3>
                  <p className="text-professional">
                    Detailed consultation about your Caulfield East property, including its architectural significance, construction quality, heritage value, and any specific concerns. Understanding your property's unique characteristics guides our approach.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-columbia p-3 rounded-full flex-shrink-0">
                  <span className="text-blue-800 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Comprehensive Heritage-Sensitive Assessment</h3>
                  <p className="text-professional">
                    Thorough inspection using non-invasive techniques appropriate for quality properties. Advanced thermal imaging and moisture detection methods provide accurate assessment while preserving property integrity.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-columbia p-3 rounded-full flex-shrink-0">
                  <span className="text-blue-800 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibel mb-2">Professional Laboratory Testing</h3>
                  <p className="text-professional">
                    Scientific air and surface sampling with comprehensive laboratory analysis to identify mould species and concentration levels. Premium reporting suitable for high-value property documentation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-columbia p-3 rounded-full flex-shrink-0">
                  <span className="text-blue-800 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Premium Property Documentation</h3>
                  <p className="text-professional">
                    Comprehensive professional report with detailed findings, preservation recommendations, and value-protection strategies. Suitable for insurance, heritage authorities, and property management requirements.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Mould & Restoration Co. in Caulfield East</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Premium Property Specialisation</h3>
                    <p className="text-professional">Extensive experience with Caulfield East's quality homes and heritage properties, understanding the specific requirements for maintaining premium property values.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Heritage Preservation Expertise</h3>
                    <p className="text-professional">Specialised knowledge in assessing heritage properties using non-invasive methods that respect architectural integrity while providing comprehensive mould evaluation.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Advanced Technology</h3>
                    <p className="text-professional">Premium equipment including thermal imaging, moisture detection, and scientific sampling methods appropriate for high-value property assessment.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Premium Service Standards</h3>
                    <p className="text-professional">Professional service delivery matching the quality expectations of Caulfield East property owners, with same-day availability for urgent assessments.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Comprehensive Documentation</h3>
                    <p className="text-professional">Professional reporting suitable for insurance claims, heritage applications, property transactions, and premium property management requirements.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Full Professional Credentials</h3>
                    <p className="text-professional">Complete licensing, comprehensive insurance coverage, and compliance with all Australian standards for peace of mind with valuable property assets.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-16">
            <div className="bg-blue-900 text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Protect Your Caulfield East Property Investment</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-blue-100 mb-6">
                    Safeguard your premium Caulfield East property and family's health with professional mould inspection services. Our heritage-sensitive approach ensures your property's value and character are preserved.
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
                      <span>Servicing All Caulfield East Premium Properties</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Premium Service Areas:</h3>
                  <ul className="grid grid-cols-1 gap-2 text-blue-100">
                    <li>• Dandenong Road prestigious corridor</li>
                    <li>• Kambrook Road quality homes</li>
                    <li>• Balaclava Road heritage properties</li>
                    <li>• Caulfield Racecourse vicinity</li>
                    <li>• All Caulfield East premium addresses</li>
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
        currentLocation="Caulfield East"
        serviceType="inspection"
      />
    </div>
  );
};

export default CaulfieldEast;