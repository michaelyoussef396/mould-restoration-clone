import { useState } from 'react';
import { MapPin, Star, ArrowRight, Search, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import SuburbSearch from '@/components/SuburbSearch';
import {
  suburbsData,
  getSuburbsByRegion,
  getHighPrioritySuburbs,
  melbourneRegions,
  type SuburbData
} from '@/data/suburbData';

interface SuburbSelectorProps {
  className?: string;
}

export const SuburbSelector = ({ className = "" }: SuburbSelectorProps) => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const highPrioritySuburbs = getHighPrioritySuburbs();
  const popularSuburbs = highPrioritySuburbs.slice(0, 8);

  const handleRegionSelect = (region: string) => {
    if (selectedRegion === region) {
      setSelectedRegion(null);
    } else {
      setSelectedRegion(region);
    }
  };

  const getRegionColorClasses = (color: string, selected: boolean = false) => {
    const baseClasses = selected ? 'ring-2 ring-offset-2' : '';
    const colorMap = {
      blue: `bg-blue-50 text-blue-800 border-blue-200 hover:bg-blue-100 ${selected ? 'ring-blue-500' : ''} ${baseClasses}`,
      green: `bg-green-50 text-green-800 border-green-200 hover:bg-green-100 ${selected ? 'ring-green-500' : ''} ${baseClasses}`,
      teal: `bg-teal-50 text-teal-800 border-teal-200 hover:bg-teal-100 ${selected ? 'ring-teal-500' : ''} ${baseClasses}`,
      purple: `bg-purple-50 text-purple-800 border-purple-200 hover:bg-purple-100 ${selected ? 'ring-purple-500' : ''} ${baseClasses}`,
      orange: `bg-orange-50 text-orange-800 border-orange-200 hover:bg-orange-100 ${selected ? 'ring-orange-500' : ''} ${baseClasses}`,
      red: `bg-red-50 text-red-800 border-red-200 hover:bg-red-100 ${selected ? 'ring-red-500' : ''} ${baseClasses}`,
      gray: `bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100 ${selected ? 'ring-gray-500' : ''} ${baseClasses}`
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.gray;
  };

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Find Professional Mould Services in Your Area
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving 144+ Melbourne suburbs with professional mould inspection and removal services.
            Select your area to get started with local expertise.
          </p>
          {/* Quick Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span>144+ suburbs covered</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span>5.0 ⭐ professional service</span>
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span>
              <span>Same-day inspections available</span>
            </div>
          </div>
        </div>

        {/* Enhanced Search Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Find Your Melbourne Suburb
              </h3>
              <p className="text-gray-600">
                Search from 144+ suburbs or browse by region below
              </p>
            </div>

            <SuburbSearch
              placeholder="Type your suburb name (e.g. Carlton, Brighton, Richmond)..."
              className="w-full text-lg"
              maxResults={15}
            />

            {/* Quick Search Suggestions */}
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <span className="text-sm text-gray-600">Popular searches:</span>
              {['Carlton', 'Richmond', 'Brighton', 'Fitzroy', 'South Yarra'].map((suburb) => (
                <button
                  key={suburb}
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline font-medium"
                  onClick={() => {
                    // This would integrate with SuburbSearch component
                    window.location.href = `/services/mould-removal-${suburb.toLowerCase().replace(' ', '-')}`;
                  }}
                >
                  {suburb}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Region Selection */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Browse by Melbourne Region
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(melbourneRegions)
              .filter(([region]) => getSuburbsByRegion(region).length > 0)
              .map(([region, data]) => (
                <button
                  key={region}
                  onClick={() => handleRegionSelect(region)}
                  className={`p-4 border rounded-lg text-left transition-all ${getRegionColorClasses(data.color, selectedRegion === region)}`}
                >
                  <div className="font-medium text-sm mb-1">{region}</div>
                  <div className="text-xs opacity-75">{data.description}</div>
                  <div className="text-xs mt-2 font-medium">
                    {getSuburbsByRegion(region).length} suburbs
                  </div>
                </button>
              ))}
          </div>
        </div>

        {/* Region Suburbs Display */}
        {selectedRegion && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Mould Services in {selectedRegion}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {getSuburbsByRegion(selectedRegion).map((suburb) => (
                <Card key={suburb.slug} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{suburb.displayName}</h4>
                      <div className="text-sm text-gray-600">Postcode: {suburb.postcode}</div>
                    </div>
                    <div className={`px-2 py-1 text-xs font-medium rounded ${
                      suburb.priority === 'high' ? 'bg-green-100 text-green-800' :
                      suburb.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {suburb.priority === 'high' ? 'Popular' : suburb.priority === 'medium' ? 'Available' : 'Service Area'}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {suburb.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {suburb.propertyTypes.slice(0, 2).map((type, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {type}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <a href={suburb.href}>
                      View {suburb.displayName} Services
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Popular Suburbs Quick Access */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Popular Service Areas
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularSuburbs.map((suburb) => (
              <Card key={suburb.slug} className="p-4 hover:shadow-md transition-shadow group">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span className="font-semibold text-gray-900 group-hover:text-blue-600">
                    {suburb.displayName}
                  </span>
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  {suburb.region} • {suburb.postcode}
                </div>
                <div className="flex items-center gap-1 text-xs text-yellow-600 mb-3">
                  <Star className="h-3 w-3 fill-current" />
                  <span>High demand area</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-sm"
                  asChild
                >
                  <a href={suburb.href}>
                    Get Service Quote
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced CTA with Conversion Focus */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-50 via-white to-teal-50 border border-blue-100 shadow-lg">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="h-6 w-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Professional Service Across Melbourne
                </h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Can't find your suburb? We service <strong>144+ Melbourne areas</strong> with
                same-day inspections and professional mould removal. Get expert help today.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 justify-center mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="font-semibold text-gray-900">Same Day Service</div>
                  <div className="text-sm text-gray-600">Available 7 days</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Star className="h-6 w-6 text-white fill-current" />
                  </div>
                  <div className="font-semibold text-gray-900">5.0 ⭐ Rating</div>
                  <div className="text-sm text-gray-600">Professional service</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div className="font-semibold text-gray-900">144+ Suburbs</div>
                  <div className="text-sm text-gray-600">Wide coverage</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="tel:1800954117">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Professional Service: 1800 954 117
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-blue-200 hover:bg-blue-50" asChild>
                  <a href="/areas">
                    View All Service Areas
                    <Search className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SuburbSelector;