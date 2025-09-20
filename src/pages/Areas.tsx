import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { ContactSection } from '@/components/ContactSection';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Search, Filter, ArrowRight, Star, Phone } from 'lucide-react';
import SuburbSearch from '@/components/SuburbSearch';
import {
  suburbsData,
  getSuburbsByRegion,
  getSuburbsByPriority,
  melbourneRegions,
  getAllRegions,
  type SuburbData
} from '@/data/suburbData';

const Areas = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedPriority, setSelectedPriority] = useState<'all' | 'high' | 'medium' | 'low'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'priority' | 'region'>('name');

  const allRegions = getAllRegions();

  // Filter and sort suburbs
  const getFilteredSuburbs = (): SuburbData[] => {
    let filtered = suburbsData;

    // Filter by region
    if (selectedRegion) {
      filtered = getSuburbsByRegion(selectedRegion);
    }

    // Filter by priority
    if (selectedPriority !== 'all') {
      filtered = filtered.filter(suburb => suburb.priority === selectedPriority);
    }

    // Sort suburbs
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.displayName.localeCompare(b.displayName);
        case 'priority':
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'region':
          return a.region.localeCompare(b.region);
        default:
          return 0;
      }
    });

    return filtered;
  };

  const filteredSuburbs = getFilteredSuburbs();
  const highPrioritySuburbs = getSuburbsByPriority('high');

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high': return 'Popular';
      case 'medium': return 'Available';
      case 'low': return 'Service Area';
      default: return 'Available';
    }
  };

  const getRegionColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-50 text-blue-800 border-blue-200 hover:bg-blue-100',
      green: 'bg-green-50 text-green-800 border-green-200 hover:bg-green-100',
      teal: 'bg-teal-50 text-teal-800 border-teal-200 hover:bg-teal-100',
      purple: 'bg-purple-50 text-purple-800 border-purple-200 hover:bg-purple-100',
      orange: 'bg-orange-50 text-orange-800 border-orange-200 hover:bg-orange-100',
      red: 'bg-red-50 text-red-800 border-red-200 hover:bg-red-100',
      gray: 'bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.gray;
  };

  return (
    <div className="min-h-screen">
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
      <section className="pt-[106px] pb-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Professional Mould Services
              <span className="text-blue-600"> Across Melbourne</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Serving 144+ Melbourne suburbs with expert mould inspection and removal services.
              Find professional help in your local area with our comprehensive coverage.
            </p>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <a href="tel:1800954117">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Professional Service
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
                <a href="#search">
                  <Search className="mr-2 h-5 w-5" />
                  Find Your Suburb
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span>5.0 ⭐ 51 reviews</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>144+ suburbs served</span>
              </div>
              <div className="flex items-center gap-1">
                <span>✓</span>
                <span>Professional service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section id="search" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Search Melbourne Suburbs
            </h2>

            {/* Search Bar */}
            <div className="mb-12">
              <SuburbSearch
                placeholder="Search for your Melbourne suburb..."
                className="w-full"
                maxResults={15}
              />
            </div>

            {/* Filters */}
            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-gray-600" />
                  <span className="font-medium text-gray-900">Filter & Sort:</span>
                </div>

                {/* Region Filter */}
                <select
                  value={selectedRegion || ''}
                  onChange={(e) => setSelectedRegion(e.target.value || null)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Regions</option>
                  {allRegions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>

                {/* Priority Filter */}
                <select
                  value={selectedPriority}
                  onChange={(e) => setSelectedPriority(e.target.value as any)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">All Areas</option>
                  <option value="high">Popular Areas</option>
                  <option value="medium">Available Areas</option>
                  <option value="low">Service Areas</option>
                </select>

                {/* Sort Options */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="name">Sort by Name</option>
                  <option value="priority">Sort by Popularity</option>
                  <option value="region">Sort by Region</option>
                </select>
              </div>

              <div className="text-sm text-gray-600">
                Showing {filteredSuburbs.length} of {suburbsData.length} Melbourne suburbs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Areas Quick Access */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Service Areas
            </h2>
            <p className="text-xl text-gray-600">
              High-demand suburbs with frequent mould inspection and removal services
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {highPrioritySuburbs.map((suburb) => (
              <Card key={suburb.slug} className="p-6 hover:shadow-lg transition-shadow group">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span className="font-semibold text-gray-900 group-hover:text-blue-600">
                      {suburb.displayName}
                    </span>
                  </div>
                  <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Popular
                  </div>
                </div>

                <div className="text-sm text-gray-600 mb-3">
                  {suburb.region} • {suburb.postcode}
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {suburb.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {suburb.propertyTypes.slice(0, 2).map((type, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {type}
                    </span>
                  ))}
                </div>

                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={suburb.href}>
                    Get Service Quote
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Suburbs Listing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Complete Melbourne Service Areas
          </h2>

          {/* Region Quick Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setSelectedRegion(null)}
              className={`px-4 py-2 text-sm rounded-lg border transition-colors ${
                !selectedRegion
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              All Regions
            </button>
            {Object.entries(melbourneRegions).map(([region, data]) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 text-sm rounded-lg border transition-colors ${
                  selectedRegion === region
                    ? `bg-blue-600 text-white border-blue-600`
                    : `${getRegionColorClasses(data.color)} border transition-colors`
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Suburbs Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredSuburbs.map((suburb) => (
              <Card key={suburb.slug} className="p-4 hover:shadow-md transition-shadow group">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {suburb.displayName}
                    </h3>
                    <div className="text-sm text-gray-600">{suburb.postcode}</div>
                  </div>
                  <div className={`px-2 py-1 text-xs font-medium rounded border ${getPriorityColor(suburb.priority)}`}>
                    {getPriorityLabel(suburb.priority)}
                  </div>
                </div>

                <div className="text-sm text-gray-600 mb-3">
                  {suburb.region}
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {suburb.propertyTypes.slice(0, 2).map((type, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {type}
                    </span>
                  ))}
                </div>

                <Button variant="outline" size="sm" className="w-full text-sm" asChild>
                  <a href={suburb.href}>
                    View Services
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>

          {filteredSuburbs.length === 0 && (
            <div className="text-center py-12">
              <MapPin className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No suburbs found</h3>
              <p className="text-gray-600">Try adjusting your filters or search for a different area.</p>
            </div>
          )}
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default Areas;