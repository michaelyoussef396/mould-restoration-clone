import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ContactSection } from '@/components/ContactSection';
import { FAQSection } from '@/components/FAQSection';
import { Phone, ArrowRight, Clock, Users, Award, Star, Filter, MapPin, Calendar, CheckCircle } from 'lucide-react';
import mouldRemovalTransformation from '@/assets/mould-removal-transformation.jpg';
import commercialRemoval from '@/assets/commercial-removal.jpg';
import residentialInspection from '@/assets/residential-inspection.jpg';
import cleanResidentialInterior from '@/assets/clean-residential-interior.jpg';
import officeDesign from '@/assets/office-design.jpg';
import visionInterior from '@/assets/vision-interior.jpg';

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'emergency', label: 'Professional Service - Same-day Available 7am-7pm' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'insurance', label: 'Insurance Claims' },
    { id: 'prevention', label: 'Prevention' },
  ];

  const caseStudies = [
    {
      id: 'toorak-emergency',
      title: '24-Hour Black Mold Professional Service - Same-day Available 7am-7pm - Toorak Family Home',
      slug: 'toorak-emergency-black-mold-response',
      excerpt: 'Rapid 2-hour response eliminated extensive basement mold threatening family health. IICRC-certified process restored safety Same-day professional service.',
      image: mouldRemovalTransformation,
      category: 'emergency',
      location: 'Toorak',
      stats: '2,400 sq ft treated | 24-hour completion | 4 family members safe',
      badge: 'Professional Service - Same-day Available 7am-7pm',
      badgeColor: 'bg-blue-600 text-white',
      completionTime: '24 hours',
      date: '2024-01-15'
    },
    {
      id: 'brighton-insurance',
      title: 'Complete Flood Damage & Mold Remediation - Brighton Property',
      slug: 'brighton-flood-mold-insurance-claim',
      excerpt: 'Coordinated with insurance for full restoration after flooding. Comprehensive documentation led to complete claim approval and property restoration.',
      image: commercialRemoval,
      category: 'insurance',
      location: 'Brighton',
      stats: '3,200 sq ft treated | 5-day completion | $45K insurance approval',
      badge: 'Insurance Success',
      badgeColor: 'bg-accent-teal text-white',
      completionTime: '5 days',
      date: '2024-02-03'
    },
    {
      id: 'cbd-commercial',
      title: 'Office Building Mold Remediation - Melbourne CBD',
      slug: 'melbourne-cbd-office-mold-remediation',
      excerpt: 'Weekend-only project minimized business disruption while ensuring 50+ employee safety. Full compliance with workplace health regulations achieved.',
      image: officeDesign,
      category: 'commercial',
      location: 'Melbourne CBD',
      stats: '5,000 sq ft treated | Weekend completion | 50+ employees protected',
      badge: 'Commercial',
      badgeColor: 'bg-accent-blue text-white',
      completionTime: '2 days',
      date: '2024-02-20'
    },
    {
      id: 'south-yarra-prevention',
      title: 'Proactive Mold Prevention - South Yarra Apartment Complex',
      slug: 'south-yarra-mold-prevention-program',
      excerpt: 'Implemented comprehensive prevention system for 24-unit complex. Ongoing monitoring program prevents mold issues and protects property value.',
      image: visionInterior,
      category: 'prevention',
      location: 'South Yarra',
      stats: '24 units protected | Ongoing monitoring | 100% prevention success',
      badge: 'Prevention',
      badgeColor: 'bg-success text-white',
      completionTime: '3 days setup',
      date: '2024-03-10'
    },
    {
      id: 'carlton-heritage',
      title: 'Historic Home Mold Restoration - Carlton Heritage Property',
      slug: 'carlton-heritage-home-mold-restoration',
      excerpt: 'Specialized techniques preserved 1890s architecture while eliminating mold. Heritage-compliant methods maintained property character and value.',
      image: cleanResidentialInterior,
      category: 'residential',
      location: 'Carlton',
      stats: '1,800 sq ft treated | Heritage preserved | 130-year-old home saved',
      badge: 'Heritage Restoration',
      badgeColor: 'bg-accent-dark text-white',
      completionTime: '7 days',
      date: '2024-03-25'
    },
    {
      id: 'richmond-health',
      title: 'Family Health Crisis Resolved - Richmond Mold Removal',
      slug: 'richmond-family-health-mold-crisis',
      excerpt: 'Eliminated severe mold causing respiratory issues in children. Medical documentation confirmed complete health improvement post-remediation.',
      image: residentialInspection,
      category: 'residential',
      location: 'Richmond',
      stats: '1,600 sq ft treated | 3 children healthy | Doctor-verified results',
      badge: 'Health Recovery',
      badgeColor: 'bg-success text-white',
      completionTime: '4 days',
      date: '2024-04-08'
    },
  ];

  const filteredCaseStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  const stats = [
    { number: '500+', label: 'Properties Restored', icon: Users },
    { number: '100%', label: 'Satisfaction Rate', icon: CheckCircle },
    { number: '3', label: 'Days Average', icon: Clock },
  ];

  return (
    <div className="min-h-screen">
      {/* Professional Service Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium fixed top-0 left-0 right-0 z-[60] h-10">
        <div className="container mx-auto flex items-center justify-between">
          <span className="hidden sm:block">🚨 24/7 Same-day Service Available</span>
          <span className="sm:hidden">Same-day Service Available 7am-7pm</span>
          <a href="tel:1800954117" className="font-bold hover:underline flex items-center gap-1">
            <Phone className="h-4 w-4" />
            1800 954 117
          </a>
        </div>
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-primary-dark to-accent-dark py-24 sm:py-32 pt-[106px]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Real Results: Melbourne 
              <span className="text-accent-teal block"> Mold Removal Success Stories</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
              See how we've protected Melbourne families and properties from dangerous mold. IICRC-certified processes delivering proven results since 2015.
            </p>
            
            {/* Trust Elements */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto"
                asChild
              >
                <a href="tel:1800954117">
                  Professional Service - Call Now
                  <Phone className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto bg-white/10 text-white border-white/20 hover:bg-white/20"
                asChild
              >
                <a href="/contact">
                  Get Your Success Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="text-gray-700 font-medium mr-4">Filter by:</span>
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.id)}
                className="mb-2"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <Card key={study.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={study.badgeColor}>
                      {study.badge}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {study.excerpt}
                  </p>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{study.location}, Melbourne</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{study.completionTime}</span>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded-lg mb-4">
                    <p className="text-sm font-medium text-blue-900">{study.stats}</p>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group"
                    asChild
                  >
                    <a href={`/case-studies/${study.slug}`}>
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No case studies found for this category.</p>
              <Button 
                variant="outline" 
                onClick={() => setActiveFilter('all')}
                className="mt-4"
              >
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Why Melbourne Properties Need Professional Mold Removal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
              Why Melbourne Properties Need Professional Mold Removal
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Melbourne's unique climate creates perfect conditions for mold growth. High humidity, temperature fluctuations, and seasonal rainfall contribute to moisture problems in both heritage and modern properties.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-success mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Climate Challenges</h4>
                      <p className="text-gray-600">Melbourne's humidity levels often exceed 60%, creating ideal mold conditions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-success mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Building Vulnerabilities</h4>
                      <p className="text-gray-600">Heritage homes and modern constructions both face unique mold risks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-success mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Health Impact</h4>
                      <p className="text-gray-600">Professional removal ensures complete elimination and prevents health issues</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Your Property Assessment</h3>
                <p className="text-gray-600 mb-4">
                  Don't wait for mold to become a major problem. Our free assessments identify risks before they impact your family's health or property value.
                </p>
                <Button size="lg" className="w-full">
                  <a href="/contact">Schedule Free Assessment</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mold Issues Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Common Mold Issues in Melbourne Suburbs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each Melbourne suburb faces unique mold challenges. Our local expertise addresses specific environmental factors affecting your area.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inner Melbourne</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Heritage building moisture issues</li>
                <li>• Poor ventilation in period homes</li>
                <li>• Basement and cellar mold problems</li>
                <li>• Landlord/tenant responsibility challenges</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Eastern Suburbs</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Luxury home moisture management</li>
                <li>• Pool area humidity problems</li>
                <li>• Bathroom and ensuite mold</li>
                <li>• Property value protection needs</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bayside Areas</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Salt air corrosion issues</li>
                <li>• Coastal humidity challenges</li>
                <li>• Wind-driven rain penetration</li>
                <li>• Marine environment effects</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What to Expect During Professional Remediation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our transparent process ensures you know exactly what happens at every step
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Assessment', description: 'Comprehensive testing and moisture mapping' },
              { step: '2', title: 'Containment', description: 'Professional setup prevents contamination spread' },
              { step: '3', title: 'Removal', description: 'IICRC-certified safe removal techniques' },
              { step: '4', title: 'Verification', description: 'Final testing confirms complete elimination' },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default CaseStudies;