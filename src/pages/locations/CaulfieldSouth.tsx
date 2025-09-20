import { ArrowRight, Clock, Shield, MapPin, Phone, CheckCircle, AlertTriangle, Droplets, Wind, Home } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { StrategicLocationLinks } from "@/components/seo/InternalLinking";
import { OptimizedImage } from '../../components/OptimizedImage';

export const CaulfieldSouth = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Caulfield South Mould Removal", href: "/services/mould-removal-caulfield-south", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Caulfield South"
        title="Professional Mould Inspection Caulfield South | Mould & Restoration Co."
        description="Expert mould inspection services in Caulfield South, Melbourne. Specialising in family homes, period properties & unit complexes. Professional testing & assessment. Call 1800 954 117."
        keywords="mould inspection Caulfield South, mould testing Caulfield South Melbourne, mould assessment Caulfield South, mould remediation Caulfield South, professional mould inspection Caulfield South Victoria"
        canonicalUrl="https://mouldrestoration.com.au/locations/caulfield-south"
      />
      <LocalBusinessSchema
        pageName="Caulfield South Mould Inspection"
        pageUrl="https://mouldrestoration.com.au/locations/caulfield-south"
        serviceType="inspection"
        location="Caulfield South"
      />
      <ServiceSchema
        serviceName="Mould Inspection"
        serviceArea="Caulfield South"
        description="Expert mould inspection services in Caulfield South, Melbourne. Specialising in family homes, period properties & unit complexes. Professional testing & assessment."
      />

      <Navigation />
      <Breadcrumb items={breadcrumbItems} />
        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6" />
              <span className="text-blue-200">Caulfield South, Melbourne</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Mould Inspection Caulfield South
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Expert mould detection and assessment services for Caulfield South's diverse residential properties. From established family homes to modern unit complexes, protecting your property and health.
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
              <span className="text-gray-700">Local Caulfield South Specialists</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">

          {/* Caulfield South Mould Challenges */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Caulfield South Mould Inspection Experts</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <AlertTriangle className="h-8 w-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Diverse Property Challenges</h3>
                <p className="text-professional leading-relaxed">
                  Caulfield South's mixed residential landscape presents varied mould inspection challenges. From post-war family homes with original construction materials to contemporary unit developments, each property type requires specialised assessment approaches to ensure thorough evaluation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Droplets className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Southern Suburbs Climate</h3>
                <p className="text-professional leading-relaxed">
                  The southern suburbs' climate patterns, including sea breezes from Port Phillip Bay and seasonal temperature variations, create specific humidity conditions. Combined with varying property ages and construction types, this environment requires expert moisture management assessment.
                </p>
              </div>
            </div>

            <div className="bg-columbia p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Why Caulfield South Properties Need Professional Mould Inspection</h3>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Post-war homes with original ventilation systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Modern unit complexes with building envelope variations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Renovated properties with mixed construction methods</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Southern suburbs climate exposure effects</span>
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
                <h3 className="text-lg font-semibold mb-3">Family Home Assessment</h3>
                <p className="text-professional mb-4">
                  Comprehensive inspection of established family homes, understanding post-war construction methods, original materials, and how decades of Melbourne weather affect moisture patterns.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Original construction assessment</li>
                  <li>• Established landscape drainage</li>
                  <li>• Period ventilation evaluation</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Wind className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">Unit Complex Testing</h3>
                <p className="text-professional mb-4">
                  Specialised assessment of apartments and unit developments, focusing on building envelope performance, shared ventilation systems, and common moisture issues in multi-unit buildings.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Building envelope integrity</li>
                  <li>• Common area moisture sources</li>
                  <li>• Bathroom and kitchen ventilation</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Shield className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Renovation Assessment</h3>
                <p className="text-professional mb-4">
                  Expert evaluation of renovated properties, understanding how modifications affect moisture management and identifying potential issues from construction updates or extensions.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Extension moisture integration</li>
                  <li>• Renovation material compatibility</li>
                  <li>• Updated system performance</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Local Expertise */}
          <section className="mb-16">
            <div className="bg-success/10 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-green-800 mb-6">Local Caulfield South Knowledge</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-green-700 mb-3">Property Types We Service</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Post-war family homes and bungalows</li>
                    <li>• Modern unit complexes and apartments</li>
                    <li>• Renovated and extended properties</li>
                    <li>• Original and restored period homes</li>
                    <li>• Contemporary townhouse developments</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-700 mb-3">Common Caulfield South Issues</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Post-war construction moisture retention</li>
                    <li>• Original ventilation inadequacy</li>
                    <li>• Unit complex drainage challenges</li>
                    <li>• Renovation integration problems</li>
                    <li>• Southern exposure weather effects</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Caulfield South Inspection Process</h2>

            <div className="space-y-6">
              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-columbia p-3 rounded-full flex-shrink-0">
                  <span className="text-blue-800 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Property-Specific Consultation</h3>
                  <p className="text-professional">
                    Detailed discussion about your Caulfield South property, including construction era, recent renovations, and any moisture concerns. Understanding your property's history helps us tailor our inspection approach effectively.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-columbia p-3 rounded-full flex-shrink-0">
                  <span className="text-blue-800 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Comprehensive Visual Assessment</h3>
                  <p className="text-professional">
                    Thorough inspection of your property including all moisture-prone areas, ventilation systems, and potential water ingress points. We use thermal imaging and moisture metres for accurate detection.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-columbia p-3 rounded-full flex-shrink-0">
                  <span className="text-blue-800 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Scientific Air Quality Testing</h3>
                  <p className="text-professional">
                    Professional air and surface sampling to identify mould types and concentration levels. Laboratory analysis provides accurate data for understanding your property's mould situation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-columbia p-3 rounded-full flex-shrink-0">
                  <span className="text-blue-800 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Detailed Property Report</h3>
                  <p className="text-professional">
                    Comprehensive report with findings, photographs, test results, and specific recommendations for your Caulfield South property. Includes practical next steps and prevention strategies.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Mould & Restoration Co. in Caulfield South</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Local Area Expertise</h3>
                    <p className="text-professional">Extensive experience with Caulfield South's diverse property types, understanding how different construction eras and methods affect moisture management requirements.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Climate Understanding</h3>
                    <p className="text-professional">Knowledge of southern suburbs climate patterns and how they affect different property types throughout the seasons, from winter moisture to summer humidity variations.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Advanced Detection Technology</h3>
                    <p className="text-professional">Latest thermal imaging and moisture detection equipment providing accurate assessment data for informed decision-making about your property.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Rapid Local Service</h3>
                    <p className="text-professional">Same-day inspections available throughout Caulfield South, understanding the importance of quick response for urgent mould concerns in family homes and investment properties.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Comprehensive Reporting</h3>
                    <p className="text-professional">Detailed documentation suitable for insurance claims, property transactions, strata management, and remediation planning with clear, actionable recommendations.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Fully Licensed & Insured</h3>
                    <p className="text-professional">Complete peace of mind with full licensing, comprehensive insurance coverage, and compliance with Australian building standards and health regulations.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-16">
            <div className="bg-blue-900 text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Get Your Caulfield South Mould Inspection Today</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-blue-100 mb-6">
                    Don't let mould compromise your Caulfield South property or your family's health. Our expert team provides comprehensive mould inspection services tailored to your property's specific characteristics and needs.
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
                      <span>Servicing All Caulfield South Properties</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Service Areas Include:</h3>
                  <ul className="grid grid-cols-1 gap-2 text-blue-100">
                    <li>• North Road corridor</li>
                    <li>• Neerim Road district</li>
                    <li>• Kambrook Road neighbourhood</li>
                    <li>• Glen Eira Road area</li>
                    <li>• All Caulfield South residential areas</li>
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
        currentLocation="Caulfield South"
        serviceType="inspection"
      />
    </div>
  );
};

export default CaulfieldSouth;