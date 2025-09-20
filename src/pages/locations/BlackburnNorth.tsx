import { ArrowRight, Clock, Shield, MapPin, Phone, CheckCircle, AlertTriangle, Droplets, Wind, Home } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { StrategicLocationLinks } from "@/components/seo/InternalLinking";
import { OptimizedImage } from '../../components/OptimizedImage';

export const BlackburnNorth = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Blackburn North Mould Removal", href: "/services/mould-removal-blackburn-north", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Blackburn North"
        title="Professional Mould Inspection Blackburn North | Mould & Restoration Co."
        description="Expert mould inspection services in Blackburn North, Melbourne. Specialising in hillside properties, family homes & modern developments in elevated locations. Call 1800 954 117."
        keywords="mould inspection Blackburn North, mould testing Blackburn North Melbourne, mould assessment Blackburn North, mould remediation Blackburn North, professional mould inspection Blackburn North Victoria"
        canonicalUrl="https://mouldrestoration.com.au/locations/blackburn-north"
      />
      <LocalBusinessSchema
        pageName="Blackburn North Mould Inspection"
        pageUrl="https://mouldrestoration.com.au/locations/blackburn-north"
        serviceType="inspection"
        location="Blackburn North"
      />
      <ServiceSchema
        serviceName="Mould Inspection"
        serviceArea="Blackburn North"
        description="Expert mould inspection services in Blackburn North, Melbourne. Specialising in hillside properties, family homes & modern developments in elevated locations."
      />

      <Navigation />
      <Breadcrumb items={breadcrumbItems} />

        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6" />
              <span className="text-blue-200">Blackburn North, Melbourne</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Mould Inspection Blackburn North
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Expert mould detection and assessment services for Blackburn North's elevated hillside properties. Specialising in family homes, modern developments, and properties with unique topographical challenges.
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
              <span className="text-gray-700">Hillside Property Specialists</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">

          {/* Blackburn North Mould Challenges */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Blackburn North Elevated Property Mould Inspection</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <AlertTriangle className="h-8 w-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Hillside Property Challenges</h3>
                <p className="text-professional leading-relaxed">
                  Blackburn North's elevated topography creates unique mould inspection challenges. Properties on slopes face specific water drainage patterns, elevation-related humidity variations, and potential moisture ingress from both ground water and weather exposure that require specialised assessment approaches.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Droplets className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Eastern Foothills Climate</h3>
                <p className="text-professional leading-relaxed">
                  The eastern foothills location brings specific climate considerations, including temperature variations with elevation, morning fog accumulation, and seasonal water runoff patterns. These environmental factors significantly influence moisture management in hillside properties.
                </p>
              </div>
            </div>

            <div className="bg-columbia p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Why Blackburn North Properties Need Specialised Mould Inspection</h3>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Hillside properties with complex drainage requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Multi-level homes with varied moisture exposures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Properties with retaining walls and slope management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Elevated locations with weather exposure variations</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Specialised Hillside Mould Inspection Services</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Home className="h-8 w-8 text-success mb-4" />
                <h3 className="text-lg font-semibold mb-3">Hillside Home Assessment</h3>
                <p className="text-professional mb-4">
                  Comprehensive inspection of properties on slopes, understanding how elevation, drainage patterns, and hillside construction affect moisture management and mould risk.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Slope drainage evaluation</li>
                  <li>• Multi-level moisture assessment</li>
                  <li>• Retaining wall impact analysis</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Wind className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">Family Home Testing</h3>
                <p className="text-professional mb-4">
                  Detailed assessment of established family homes, focusing on how decades of hillside exposure affect building integrity, ventilation performance, and moisture infiltration patterns.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Established property assessment</li>
                  <li>• Long-term exposure effects</li>
                  <li>• Family-focused health considerations</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Shield className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Modern Development Inspection</h3>
                <p className="text-professional mb-4">
                  Professional evaluation of contemporary hillside developments, ensuring modern building techniques effectively address elevation-specific moisture challenges and compliance standards.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Modern construction assessment</li>
                  <li>• Building envelope performance</li>
                  <li>• Compliance verification</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Local Expertise */}
          <section className="mb-16">
            <div className="bg-success/10 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-green-800 mb-6">Local Blackburn North Hillside Expertise</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-green-700 mb-3">Property Types We Service</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Hillside and slope properties</li>
                    <li>• Multi-level family homes</li>
                    <li>• Modern elevated developments</li>
                    <li>• Properties with retaining walls</li>
                    <li>• Split-level and tiered homes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-700 mb-3">Common Blackburn North Issues</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Hillside drainage complications</li>
                    <li>• Elevation-related moisture patterns</li>
                    <li>• Weather exposure variations</li>
                    <li>• Multi-level ventilation challenges</li>
                    <li>• Seasonal runoff management</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Blackburn North Hillside Inspection Process</h2>

            <div className="space-y-6">
              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-columbia p-3 rounded-full flex-shrink-0">
                  <span className="text-blue-800 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Topographical Assessment Consultation</h3>
                  <p className="text-professional">
                    Detailed discussion about your hillside property, including slope characteristics, drainage systems, elevation challenges, and any moisture concerns. Understanding your property's relationship to the terrain is essential.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-columbia p-3 rounded-full flex-shrink-0">
                  <span className="text-blue-800 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Comprehensive Site Evaluation</h3>
                  <p className="text-professional">
                    Thorough inspection considering elevation effects, drainage patterns, multi-level exposures, and weather impact zones. Special attention to areas where hillside conditions create unique moisture challenges.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-columbia p-3 rounded-full flex-shrink-0">
                  <span className="text-blue-800 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Environmental Moisture Testing</h3>
                  <p className="text-professional">
                    Scientific air quality and moisture level testing, understanding how hillside environment affects indoor conditions. Laboratory analysis identifies mould species and concentration levels.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-columbia p-3 rounded-full flex-shrink-0">
                  <span className="text-blue-800 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Hillside-Specific Reporting</h3>
                  <p className="text-professional">
                    Comprehensive report addressing elevation-specific challenges, drainage considerations, and tailored recommendations for hillside moisture management. Includes seasonal and long-term maintenance strategies.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Mould & Restoration Co. in Blackburn North</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Hillside Property Specialisation</h3>
                    <p className="text-professional">Extensive experience with elevated properties and slope-related moisture challenges, understanding how topography affects building performance and mould risk.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Eastern Foothills Knowledge</h3>
                    <p className="text-professional">Deep understanding of Blackburn North's unique climate and topographical conditions, including seasonal patterns and elevation-related moisture variations.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Advanced Assessment Technology</h3>
                    <p className="text-professional">Specialised equipment for evaluating moisture in hillside properties, including thermal imaging for drainage assessment and multi-level humidity monitoring.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Rapid Hillside Service</h3>
                    <p className="text-professional">Same-day inspections available throughout Blackburn North's elevated areas, understanding the urgency of moisture issues in hillside properties.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Topography-Specific Solutions</h3>
                    <p className="text-professional">Customised recommendations considering elevation challenges, drainage patterns, and slope-specific maintenance requirements for long-term moisture management.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Professional Credentials</h3>
                    <p className="text-professional">Complete licensing, comprehensive insurance coverage, and compliance with Australian building standards for peace of mind with hillside property investments.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-16">
            <div className="bg-blue-900 text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Get Your Blackburn North Hillside Property Inspection</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-blue-100 mb-6">
                    Protect your elevated Blackburn North property and family's health with specialised hillside mould inspection services. Our topographical expertise ensures comprehensive assessment and effective solutions.
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
                      <span>Servicing All Blackburn North Hillside Properties</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Elevated Service Areas:</h3>
                  <ul className="grid grid-cols-1 gap-2 text-blue-100">
                    <li>• Canterbury Road elevated section</li>
                    <li>• Whitehorse Road hillside properties</li>
                    <li>• Glen Iris Road slope homes</li>
                    <li>• Springfield Road elevated estates</li>
                    <li>• All Blackburn North hillside developments</li>
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
        currentLocation="Blackburn North"
        serviceType="inspection"
      />
    </div>
  );
};

export default BlackburnNorth;