import { ArrowRight, Clock, Shield, MapPin, Phone, CheckCircle, AlertTriangle, Droplets, Wind, Home } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { StrategicLocationLinks } from "@/components/seo/InternalLinking";
import { OptimizedImage } from '../../components/OptimizedImage';

export const Chatham = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Chatham Mould Removal", href: "/services/mould-removal-chatham", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Chatham"
        title="Professional Mould Inspection Chatham | Mould & Restoration Co."
        description="Expert mould inspection services in Chatham, Melbourne. Specialising in waterfront properties, period homes & canal-side residences. Professional testing & assessment. Call 1800 954 117."
        keywords="mould inspection Chatham, mould testing Chatham Melbourne, mould assessment Chatham, mould remediation Chatham, professional mould inspection Chatham Victoria"
        canonicalUrl="https://mouldrestoration.com.au/locations/chatham"
      />
      <LocalBusinessSchema
        pageName="Chatham Mould Inspection"
        pageUrl="https://mouldrestoration.com.au/locations/chatham"
        serviceType="inspection"
        location="Chatham"
      />
      <ServiceSchema
        serviceName="Mould Inspection"
        serviceArea="Chatham"
        description="Expert mould inspection services in Chatham, Melbourne. Specialising in waterfront properties, period homes & canal-side residences. Professional testing & assessment."
      />

      <Navigation />
      <Breadcrumb items={breadcrumbItems} />
        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6" />
              <span className="text-blue-200">Chatham, Melbourne</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Mould Inspection Chatham
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Expert mould detection and assessment services for Chatham's unique waterfront properties, canal-side residences, and established homes. Specialising in moisture management for riverside living.
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
              <span className="text-gray-700">Waterfront Property Specialists</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">

          {/* Chatham Mould Challenges */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Chatham Waterfront Mould Inspection Specialists</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <AlertTriangle className="h-8 w-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Waterfront Environment Challenges</h3>
                <p className="text-professional leading-relaxed">
                  Chatham's unique position along the Yarra River and canal systems creates specific mould challenges. Properties near waterways experience higher ambient humidity, potential water table fluctuations, and increased moisture ingress risks that require specialised inspection approaches.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Droplets className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Riverside Humidity Factors</h3>
                <p className="text-professional leading-relaxed">
                  The combination of riverside location, mature vegetation, and water proximity creates elevated humidity levels throughout the year. Morning mists, evening dew, and seasonal water level changes all contribute to moisture management challenges in Chatham properties.
                </p>
              </div>
            </div>

            <div className="bg-columbia p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Why Chatham Properties Need Specialised Mould Inspection</h3>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Waterfront properties with unique moisture exposure</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Canal-side residences facing water table influences</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Established homes in high-humidity riverside environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Modern developments near wetland areas</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Specialised Waterfront Mould Inspection Services</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Home className="h-8 w-8 text-success mb-4" />
                <h3 className="text-lg font-semibold mb-3">Waterfront Property Assessment</h3>
                <p className="text-professional mb-4">
                  Comprehensive inspection of properties near water features, understanding unique moisture ingress pathways, ground water influences, and humidity management challenges.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Foundation moisture assessment</li>
                  <li>• Water table influence evaluation</li>
                  <li>• Riverside exposure analysis</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Wind className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">Canal-Side Residence Testing</h3>
                <p className="text-professional mb-4">
                  Specialised assessment for properties adjacent to canal systems, focusing on unique moisture patterns, seasonal water level effects, and specialised ventilation requirements.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Canal proximity impact assessment</li>
                  <li>• Seasonal moisture pattern analysis</li>
                  <li>• Basement and sub-floor evaluation</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Shield className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Established Home Inspection</h3>
                <p className="text-professional mb-4">
                  Detailed assessment of older Chatham properties, understanding how established landscaping, mature trees, and decades of riverside exposure affect moisture management.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Historic moisture damage assessment</li>
                  <li>• Landscape drainage evaluation</li>
                  <li>• Renovation impact analysis</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Local Expertise */}
          <section className="mb-16">
            <div className="bg-success/10 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-green-800 mb-6">Local Chatham Waterfront Expertise</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-green-700 mb-3">Property Types We Service</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Riverside and canal-front homes</li>
                    <li>• Established family residences</li>
                    <li>• Modern waterfront developments</li>
                    <li>• Renovated period properties</li>
                    <li>• Apartments with water views</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-700 mb-3">Common Chatham Issues</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Waterfront humidity retention</li>
                    <li>• Ground water infiltration</li>
                    <li>• Seasonal moisture fluctuations</li>
                    <li>• River mist and dew accumulation</li>
                    <li>• Landscape drainage challenges</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Chatham Waterfront Inspection Process</h2>

            <div className="space-y-6">
              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-columbia p-3 rounded-full flex-shrink-0">
                  <span className="text-blue-800 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Waterfront Property Consultation</h3>
                  <p className="text-professional">
                    Detailed discussion about your Chatham property's relationship to water features, seasonal moisture patterns, and any existing concerns. Understanding water proximity and property elevation is crucial for effective assessment.
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
                    Thorough inspection focusing on water proximity effects, drainage patterns, foundation moisture levels, and areas susceptible to humidity accumulation. Special attention to basement and sub-floor areas.
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
                    Scientific air quality sampling and moisture level testing to identify mould presence and concentration. Understanding how waterfront conditions affect indoor air quality is essential for accurate assessment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-columbia p-3 rounded-full flex-shrink-0">
                  <span className="text-blue-800 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Waterfront-Specific Reporting</h3>
                  <p className="text-professional">
                    Comprehensive report addressing waterfront-specific challenges, seasonal considerations, and tailored recommendations for managing moisture in riverside properties. Includes maintenance strategies for long-term protection.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Mould & Restoration Co. in Chatham</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Waterfront Property Specialisation</h3>
                    <p className="text-professional">Extensive experience with riverside and canal-side properties, understanding unique moisture challenges and effective management strategies for waterfront living.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Environmental Understanding</h3>
                    <p className="text-professional">Deep knowledge of how Chatham's waterfront environment affects different property types throughout the seasons, from winter moisture to summer humidity patterns.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Advanced Moisture Detection</h3>
                    <p className="text-professional">Specialised equipment for detecting moisture in waterfront properties, including thermal imaging for water ingress and humidity monitoring for environmental assessment.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Rapid Waterfront Response</h3>
                    <p className="text-professional">Understanding the urgency of moisture issues in waterfront properties, we provide same-day inspections throughout Chatham and surrounding riverside areas.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Tailored Solutions</h3>
                    <p className="text-professional">Customised recommendations considering waterfront location, property age, renovation history, and specific environmental challenges of your Chatham residence.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Professional Documentation</h3>
                    <p className="text-professional">Comprehensive reports suitable for insurance claims, property management, renovation planning, and waterfront property maintenance strategies.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-16">
            <div className="bg-blue-900 text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Get Your Chatham Waterfront Mould Inspection Today</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-blue-100 mb-6">
                    Protect your Chatham waterfront property and family's health with specialised mould inspection services. Our expertise in riverside moisture management ensures effective assessment and practical solutions.
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
                      <span>Servicing All Chatham Waterfront Properties</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Waterfront Service Areas:</h3>
                  <ul className="grid grid-cols-1 gap-2 text-blue-100">
                    <li>• Yarra River frontage properties</li>
                    <li>• Canal-side residences</li>
                    <li>• Wetland adjacent homes</li>
                    <li>• Riverside apartment complexes</li>
                    <li>• All Chatham waterfront developments</li>
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
        currentLocation="Chatham"
        serviceType="inspection"
      />
    </div>
  );
};

export default Chatham;