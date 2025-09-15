import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Home, Phone, Search, MapPin, Award, Clock } from 'lucide-react';
import { Footer } from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const popularPages = [
    { title: 'Professional Mould Inspections', href: '/services/professional-mould-inspections', description: 'Same-day professional inspections available' },
    { title: 'Comprehensive Mould Removal', href: '/services/comprehensive-mould-removal', description: 'Complete remediation services' },
    { title: 'Melbourne Service Areas', href: '/locations', description: 'Find mould services in your suburb' },
    { title: 'Free Quote Request', href: '/contact', description: 'Get professional assessment and pricing' },
  ];

  const melbourneLocations = [
    { name: 'Toorak', href: '/locations/toorak' },
    { name: 'Brighton', href: '/locations/brighton' },
    { name: 'Carlton', href: '/locations/carlton' },
    { name: 'Richmond', href: '/locations/richmond' },
    { name: 'South Yarra', href: '/locations/south-yarra' },
    { name: 'Malvern', href: '/locations/malvern' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Professional Service Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium fixed top-0 left-0 right-0 z-[60] h-10">
        <div className="container mx-auto flex items-center justify-between">
          <span className="hidden sm:block text-xs sm:text-sm">Monday - Sunday: 7 AM - 7PM</span>
          <div className="flex items-center gap-1 sm:gap-2">
            <a href="tel:1800954117" className="font-bold hover:underline">1800 954 117</a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:admin@mouldandrestoration.com.au" className="hidden sm:inline hover:underline">admin@mouldandrestoration.com.au</a>
          </div>
          <span className="text-xs sm:text-sm">Melbourne, VIC 📍</span>
        </div>
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="py-24 pt-[106px] bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-8xl font-black text-blue-100 mb-4">404</div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              The page you're looking for doesn't exist, but don't worry - we're here to help you find what you need for your mould inspection or remediation requirements in Melbourne.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 h-auto"
                size="lg"
                asChild
              >
                <a href="tel:1800954117">
                  Professional Help - Call Now
                  <Phone className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 h-auto"
                asChild
              >
                <a href="/">
                  Return to Homepage
                  <Home className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Service Availability */}
            <div className="bg-blue-50 p-6 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Need Professional Mould Services?</h3>
              <p className="text-gray-600 mb-4">
                Even though this page doesn't exist, our professional mould inspection and remediation services are available across Melbourne. We provide same-day inspections and professional service 7 days a week.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-blue-600" />
                  <span>IICRC Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span>Same-day Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span>All Melbourne</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Pages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Popular Melbourne Mould Services
            </h2>
            <p className="text-xl text-gray-600">
              Were you looking for one of these popular services? Melbourne families trust our professional expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {popularPages.map((page, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{page.title}</h3>
                <p className="text-gray-600 mb-4">{page.description}</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href={page.href}>
                    Visit Page
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Melbourne Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Professional Mould Services Across Melbourne
            </h2>
            <p className="text-xl text-gray-600">
              Looking for mould services in a specific Melbourne suburb? We provide professional inspections and remediation across all areas.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {melbourneLocations.map((location, index) => (
                <a
                  key={index}
                  href={location.href}
                  className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-center"
                >
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span className="font-medium text-gray-900">{location.name}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Plus many more Melbourne suburbs! Our mobile service units cover the entire metropolitan area, providing rapid response times for professional mould inspection and remediation services.
              </p>
              <Button size="lg" asChild>
                <a href="/locations">
                  View All Service Areas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Still Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our Melbourne-based customer service team is here to help. Whether you need professional mould inspection, complete remediation, or have questions about our services, we're available 7 days a week to assist you.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center">
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Call Professional Service</h3>
                <p className="text-gray-600 mb-3">Available 7am-7pm everyday</p>
                <a href="tel:1800954117" className="text-blue-600 font-bold text-lg">1800 954 117</a>
              </Card>

              <Card className="p-6 text-center">
                <Search className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Search Our Services</h3>
                <p className="text-gray-600 mb-3">Find the exact service you need</p>
                <Button variant="outline" size="sm" asChild>
                  <a href="/services">Browse Services</a>
                </Button>
              </Card>

              <Card className="p-6 text-center">
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Find Your Area</h3>
                <p className="text-gray-600 mb-3">Locate services in your suburb</p>
                <Button variant="outline" size="sm" asChild>
                  <a href="/locations">View Locations</a>
                </Button>
              </Card>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">About Mould & Restoration Co.</h3>
              <p className="text-gray-600">
                We've been serving Melbourne families and businesses for over 5 years, with more than 100 properties successfully restored. Our IICRC-certified technicians combine local expertise with industry-leading techniques to provide safe, effective mould solutions. From same-day inspections to complete remediation, we're Melbourne's trusted choice for professional mould services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
