import { ArrowRight, Clock, Shield, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationPageSEO } from "@/components/seo/SEOHead";
import { LocalBusinessSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";
import { StrategicLocationLinks } from "@/components/seo/InternalLinking";

export const Burnley = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Burnley Mould Removal", href: "/services/mould-removal-burnley", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LocationPageSEO
        suburb="Burnley"
        title="Professional Mould Removal Burnley VIC 3121 | Expert Inspection & Remediation"
        description="Expert mould removal services in Burnley, Melbourne. Professional inspection, safe remediation, and prevention. Sports precinct specialists. Call 1800 954 117 today."
        keywords="mould removal Burnley, mould inspection Burnley VIC, sports precinct mould specialist, MCG proximity mould service"
        canonical="https://mouldandrestoration.com.au/locations/burnley"
      />

      <LocalBusinessSchema
        name="Mould & Restoration Co. - Burnley"
        address="Burnley VIC 3121, Australia"
        phone="1800 954 117"
        email="admin@mouldandrestoration.com.au"
        abn="47 683 089 652"
        services={["mould inspection", "mould removal", "sports precinct specialist", "remediation"]}
        serviceArea="Burnley and surrounding Melbourne suburbs"
        description="Professional mould removal and remediation services in Burnley, specialising in sports precinct properties and heritage buildings"
      />

      <ServiceSchema
        name="Mould Removal Burnley"
        provider="Mould & Restoration Co."
        areaServed="Burnley VIC 3121"
        description="Comprehensive mould inspection and removal services for Burnley properties, specialising in sports precinct and heritage buildings"
      />

      <Navigation />

      <main>
        <div className="pt-16">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Professional Mould Removal Services in Burnley, VIC 3121
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Expert mould inspection and remediation services for Burnley properties. Sports precinct specialists with 5+ years experience serving Melbourne families. Same-day service available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 1800 954 117
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Inspection
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">
                Comprehensive Mould Services for Burnley Properties
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Professional Inspection</h3>
                    <p className="text-muted-foreground">
                      Comprehensive mould assessments using advanced detection technology for Burnley homes and businesses.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-green-100 hover:border-green-200 transition-colors">
                  <CardContent className="p-6 text-center">
                    <MapPin className="w-12 h-12 text-success mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Safe Removal</h3>
                    <p className="text-muted-foreground">
                      Professional mould remediation following Australian standards, protecting your Burnley property value.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-teal-100 hover:border-teal-200 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Clock className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Sports Precinct Specialist</h3>
                    <p className="text-muted-foreground">
                      Specialised services for properties near MCG and sports venues, understanding unique environmental factors.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Internal Linking */}
        <StrategicLocationLinks
          currentLocation="Burnley"
          businessType="mould removal"
          serviceTypes={["inspection", "removal", "remediation"]}
        />

        {/* Call to Action */}
        <section className="py-16 bg-columbia">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-primary">
                Ready to Restore Your Burnley Property?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Professional mould removal with 5+ years experience. Sports precinct specialists serving Burnley and surrounding Melbourne suburbs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Burnley Professional Service: 1800 954 117
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Sports Precinct Inspection
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Serving Burnley and all inner Melbourne suburbs • Sports precinct specialists • Professional consultation available
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Burnley;