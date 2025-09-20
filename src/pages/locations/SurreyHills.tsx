import { ArrowRight, Clock, Shield, MapPin, Phone, CheckCircle, AlertTriangle, Droplets, Wind, Home } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { StrategicLocationLinks } from "@/components/seo/InternalLinking";
import { OptimizedImage } from '../../components/OptimizedImage';

export const SurreyHills = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Surrey Hills Mould Removal", href: "/services/mould-removal-surrey-hills", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Surrey Hills"
        title="Professional Mould Inspection Surrey Hills | Mould & Restoration Co."
        description="Expert mould inspection services in Surrey Hills, Melbourne. Qualified specialists covering Federation homes, Victorian terraces & modern apartments. Call 1800 954 117 for same-day service."
        keywords="mould inspection Surrey Hills, mould testing Surrey Hills Melbourne, mould assessment Surrey Hills, mould remediation Surrey Hills, professional mould inspection Surrey Hills Victoria"
        canonicalUrl="https://mouldrestoration.com.au/locations/surrey-hills"
      />
      <LocalBusinessSchema
        pageName="Surrey Hills Mould Inspection"
        pageUrl="https://mouldrestoration.com.au/locations/surrey-hills"
        serviceType="inspection"
        location="Surrey Hills"
      />
      <ServiceSchema
        serviceName="Mould Inspection"
        serviceArea="Surrey Hills"
        description="Expert mould inspection services in Surrey Hills, Melbourne. Qualified specialists covering Federation homes, Victorian terraces & modern apartments."
      />

      <Navigation />
      <Breadcrumb items={breadcrumbItems} />
        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6" />
              <span className="text-blue-200">Surrey Hills, Melbourne</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Mould Inspection Surrey Hills
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Expert mould detection and testing services for Surrey Hills' distinctive Federation homes, Victorian terraces, and contemporary apartments. Protecting your property and family's health with comprehensive assessments.
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
              <span className="text-gray-700">100% Local Surrey Hills Service</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">

          {/* Surrey Hills Mould Challenges */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Surrey Hills Mould Inspection Specialists</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <AlertTriangle className="h-8 w-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Heritage Property Challenges</h3>
                <p className="text-professional leading-relaxed">
                  Surrey Hills' beautiful Federation and Edwardian homes present unique mould challenges. These heritage properties often feature solid brick construction, decorative timber work, and original ventilation systems that can create moisture retention issues if not properly maintained.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Droplets className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Eastern Suburbs Climate</h3>
                <p className="text-professional leading-relaxed">
                  The eastern suburbs' elevated position and tree-lined streets create a unique microclimate. While pleasant, the combination of mature vegetation, morning dew retention, and varying seasonal humidity levels can contribute to mould growth in susceptible areas.
                </p>
              </div>
            </div>

            <div className="bg-columbia p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Why Surrey Hills Properties Need Professional Mould Inspection</h3>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Federation homes with original timber features and plaster walls</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Victorian terraces with period ventilation systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Modern apartments with potential building envelope issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Tree-lined streets creating localised humidity variations</span>
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
                <h3 className="text-lg font-semibold mb-3">Heritage Property Assessment</h3>
                <p className="text-professional mb-4">
                  Specialised inspection techniques for Federation and Victorian-era properties, understanding period construction methods and potential vulnerabilities.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Original timber frame inspection</li>
                  <li>• Period plasterwork assessment</li>
                  <li>• Heritage ventilation evaluation</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Wind className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">Modern Apartment Testing</h3>
                <p className="text-professional mb-4">
                  Comprehensive assessment of contemporary apartments and townhouses, focusing on modern building envelope performance and ventilation systems.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Building envelope integrity</li>
                  <li>• Mechanical ventilation check</li>
                  <li>• Bathroom and kitchen assessment</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Shield className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Pre-Purchase Inspections</h3>
                <p className="text-professional mb-4">
                  Detailed mould assessment for property buyers, providing comprehensive reports to inform your investment decision in Surrey Hills' competitive market.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Comprehensive property screening</li>
                  <li>• Investment risk assessment</li>
                  <li>• Detailed reporting for peace of mind</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Local Expertise */}
          <section className="mb-16">
            <div className="bg-success/10 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-green-800 mb-6">Local Surrey Hills Knowledge</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-green-700 mb-3">Property Types We Service</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Federation cottages and bungalows</li>
                    <li>• Edwardian and Victorian terraces</li>
                    <li>• Contemporary apartments and units</li>
                    <li>• Renovated heritage properties</li>
                    <li>• Modern townhouses and developments</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-700 mb-3">Common Surrey Hills Issues</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Period home moisture retention</li>
                    <li>• Original ventilation inadequacy</li>
                    <li>• Tree canopy humidity effects</li>
                    <li>• Renovation-related condensation</li>
                    <li>• Seasonal mould emergence</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Surrey Hills Inspection Process</h2>

            <div className="space-y-6">
              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-columbia p-3 rounded-full flex-shrink-0">
                  <span className="text-blue-800 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Initial Consultation</h3>
                  <p className="text-professional">
                    We discuss your specific concerns, property type, and any visible signs of mould. Understanding Surrey Hills' unique property characteristics helps us prepare the most effective inspection approach.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-columbia p-3 rounded-full flex-shrink-0">
                  <span className="text-blue-800 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Comprehensive Site Assessment</h3>
                  <p className="text-professional">
                    Visual inspection of your Surrey Hills property, including heritage features, ventilation systems, moisture-prone areas, and any visible mould growth. We use thermal imaging and moisture metres for accurate assessment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-columbia p-3 rounded-full flex-shrink-0">
                  <span className="text-blue-800 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Air Quality and Surface Testing</h3>
                  <p className="text-professional">
                    Professional sampling and laboratory analysis to identify mould types and concentration levels. Essential for understanding the full scope of any mould issues in your property.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-columbia p-3 rounded-full flex-shrink-0">
                  <span className="text-blue-800 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Detailed Reporting</h3>
                  <p className="text-professional">
                    Comprehensive report with findings, risk assessment, and specific recommendations for your Surrey Hills property. Includes photographs, test results, and practical next steps.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Mould & Restoration Co. in Surrey Hills</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Heritage Property Expertise</h3>
                    <p className="text-professional">Extensive experience with Surrey Hills' Federation and Victorian properties, understanding their unique construction and maintenance requirements.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Local Area Knowledge</h3>
                    <p className="text-professional">Deep understanding of Surrey Hills' microclimate, vegetation patterns, and how they affect different property types throughout the seasons.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Advanced Testing Methods</h3>
                    <p className="text-professional">Latest technology including thermal imaging, moisture detection, and laboratory-grade air sampling for accurate assessment.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Same Day Service</h3>
                    <p className="text-professional">Rapid response for urgent mould concerns, with same-day inspections available throughout Surrey Hills and surrounding eastern suburbs.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Comprehensive Reports</h3>
                    <p className="text-professional">Detailed documentation suitable for insurance claims, real estate transactions, and remediation planning with clear recommendations.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Fully Licensed & Insured</h3>
                    <p className="text-professional">Complete peace of mind with full licensing, insurance coverage, and compliance with Australian building standards.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-16">
            <div className="bg-blue-900 text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Get Your Surrey Hills Mould Inspection Today</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-blue-100 mb-6">
                    Don't let mould compromise your Surrey Hills property or your family's health. Our expert team is ready to provide comprehensive mould inspection services tailored to your property's unique characteristics.
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
                      <span>Servicing All Surrey Hills Properties</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Service Areas Include:</h3>
                  <ul className="grid grid-cols-1 gap-2 text-blue-100">
                    <li>• Mont Albert Road corridor</li>
                    <li>• Canterbury Road district</li>
                    <li>• Union Road neighbourhood</li>
                    <li>• Chatham Street area</li>
                    <li>• All Surrey Hills streets & estates</li>
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
        currentLocation="Surrey Hills"
        serviceType="inspection"
      />
    </div>
  );
};

export default SurreyHills;