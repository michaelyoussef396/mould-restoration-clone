import { useState, useRef, useEffect } from 'react';
import { Search, MapPin, ChevronRight, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { suburbsData, searchSuburbs, melbourneRegions, getSuburbsByPriority, type SuburbData } from '@/data/suburbData';

interface SuburbSearchProps {
  placeholder?: string;
  showRegions?: boolean;
  maxResults?: number;
  onSelect?: (suburb: SuburbData) => void;
  className?: string;
}

export const SuburbSearch = ({
  placeholder = "Search for your suburb...",
  showRegions = true,
  maxResults = 8,
  onSelect,
  className = ""
}: SuburbSearchProps) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredSuburbs, setFilteredSuburbs] = useState<SuburbData[]>([]);
  const [showQuickAccess, setShowQuickAccess] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Get popular suburbs for quick access
  const popularSuburbs = getSuburbsByPriority('high').slice(0, 6);

  useEffect(() => {
    if (query.length > 0) {
      const results = searchSuburbs(query).slice(0, maxResults);
      setFilteredSuburbs(results);
      setIsOpen(true);
    } else {
      setFilteredSuburbs([]);
      setIsOpen(false);
    }
  }, [query, maxResults]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setShowQuickAccess(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSuburbSelect = (suburb: SuburbData) => {
    setQuery(suburb.displayName);
    setIsOpen(false);
    setShowQuickAccess(false);
    onSelect?.(suburb);

    // Navigate to suburb page
    window.location.href = suburb.href;
  };

  const handleInputFocus = () => {
    if (query.length > 0) {
      setIsOpen(true);
    } else {
      setShowQuickAccess(true);
      setIsOpen(true);
    }
  };

  const getRegionColor = (region: string) => {
    const regionData = melbourneRegions[region as keyof typeof melbourneRegions];
    return regionData?.color || 'gray';
  };

  const getRegionColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-800 border-blue-200',
      green: 'bg-green-100 text-green-800 border-green-200',
      teal: 'bg-teal-100 text-teal-800 border-teal-200',
      purple: 'bg-purple-100 text-purple-800 border-purple-200',
      orange: 'bg-orange-100 text-orange-800 border-orange-200',
      red: 'bg-red-100 text-red-800 border-red-200',
      gray: 'bg-gray-100 text-gray-800 border-gray-200'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.gray;
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleInputFocus}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base bg-white"
        />
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (
        <Card className="absolute top-full left-0 right-0 mt-1 z-50 max-h-96 overflow-y-auto bg-white shadow-xl border border-gray-200">
          {filteredSuburbs.length > 0 ? (
            <div className="py-2">
              {/* Results Header */}
              <div className="px-4 py-2 text-xs text-gray-500 font-medium uppercase tracking-wide border-b border-gray-100">
                {filteredSuburbs.length} Result{filteredSuburbs.length !== 1 ? 's' : ''} Found
              </div>

              {/* Suburb Results */}
              {filteredSuburbs.map((suburb, index) => (
                <button
                  key={`${suburb.slug}-${index}`}
                  onClick={() => handleSuburbSelect(suburb)}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none border-b border-gray-50 last:border-b-0 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="font-medium text-gray-900 group-hover:text-blue-600">
                          {suburb.displayName}
                        </span>
                        {showRegions && (
                          <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${getRegionColorClasses(getRegionColor(suburb.region))}`}>
                            {suburb.region}
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-600 line-clamp-1">
                        {suburb.description}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Postcode: {suburb.postcode} • {suburb.propertyTypes.slice(0, 2).join(', ')}
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                  </div>
                </button>
              ))}
            </div>
          ) : showQuickAccess && query.length === 0 ? (
            <div className="py-2">
              {/* Popular Areas Header */}
              <div className="px-4 py-2 text-xs text-gray-500 font-medium uppercase tracking-wide border-b border-gray-100">
                Popular Service Areas
              </div>

              {/* Popular Suburbs */}
              {popularSuburbs.map((suburb, index) => (
                <button
                  key={`popular-${suburb.slug}-${index}`}
                  onClick={() => handleSuburbSelect(suburb)}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none border-b border-gray-50 last:border-b-0 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="font-medium text-gray-900 group-hover:text-blue-600">
                          {suburb.displayName}
                        </span>
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                          Popular
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 line-clamp-1">
                        {suburb.description}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {suburb.region} • {suburb.postcode}
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                  </div>
                </button>
              ))}

              {/* Quick Access Footer */}
              <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
                <div className="text-xs text-gray-600 text-center">
                  <Clock className="h-3 w-3 inline mr-1" />
                  Same-day inspections available in these areas
                </div>
              </div>
            </div>
          ) : (
            <div className="px-4 py-8 text-center text-gray-500">
              <MapPin className="h-8 w-8 text-gray-300 mx-auto mb-2" />
              <div className="font-medium">No suburbs found</div>
              <div className="text-sm">Try searching for a different area</div>
            </div>
          )}
        </Card>
      )}
    </div>
  );
};

export default SuburbSearch;