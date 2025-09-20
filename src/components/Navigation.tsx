import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Search, MapPin, Phone, ArrowRight } from 'lucide-react';
import mouldLogo from '@/assets/mould-restoration-logo.png';
import { suburbsData, getSuburbsByRegion, melbourneRegions, searchSuburbs, type SuburbData } from '@/data/suburbData';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isLocationsDropdownOpen, setIsLocationsDropdownOpen] = useState(false);
  const [suburbSearchQuery, setSuburbSearchQuery] = useState('');
  const [filteredSuburbs, setFilteredSuburbs] = useState<SuburbData[]>([]);
  const [showSuburbSearch, setShowSuburbSearch] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const locationsDropdownRef = useRef<HTMLDivElement>(null);
  const suburbSearchRef = useRef<HTMLDivElement>(null);

  const services = [
    { title: 'Professional Mould Inspections', href: '/services/professional-mould-inspections' },
    { title: 'Comprehensive Mould Removal', href: '/services/comprehensive-mould-removal' },
    { title: 'Complete Material Removal', href: '/services/complete-material-removal' },
    { title: 'Advanced Fogging Sanitisation', href: '/services/advanced-fogging-sanitisation' },
    { title: 'Subfloor Mould Remediation', href: '/services/subfloor-mould-remediation' },
  ];

  // Get high priority suburbs for quick navigation
  const popularSuburbs = suburbsData.filter(suburb => suburb.priority === 'high').slice(0, 12);

  // Update search results when query changes
  useEffect(() => {
    if (suburbSearchQuery.length > 0) {
      const results = searchSuburbs(suburbSearchQuery).slice(0, 8);
      setFilteredSuburbs(results);
    } else {
      setFilteredSuburbs([]);
    }
  }, [suburbSearchQuery]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
      if (locationsDropdownRef.current && !locationsDropdownRef.current.contains(event.target as Node)) {
        setIsLocationsDropdownOpen(false);
        setShowSuburbSearch(false);
        setSuburbSearchQuery('');
      }
      if (suburbSearchRef.current && !suburbSearchRef.current.contains(event.target as Node)) {
        setShowSuburbSearch(false);
        setSuburbSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-10 left-0 right-0 z-50 bg-primary backdrop-blur-md border-b border-primary-600 shadow-lg h-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img
                src={mouldLogo}
                alt="Mould & Restoration Co Melbourne professional mould removal specialists logo"
                className="h-10 w-auto"
                width="120"
                height="40"
              />
              <span className="text-primary-foreground font-semibold text-lg hidden sm:block">
                Mould & Restoration Co
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/about" className="text-white/90 hover:text-success transition-colors px-3 py-2 text-sm font-medium">
                About Us
              </a>
              
              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className="text-white/90 hover:text-success transition-colors px-3 py-2 text-sm font-medium flex items-center gap-1"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-[60]">
                    <div className="py-2">
                      <a
                        href="/services"
                        className="block px-4 py-3 text-sm text-charcoal hover:bg-columbia font-medium border-b border-gray-100"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        View All Services
                      </a>
                      {services.map((service, index) => (
                        <a
                          key={index}
                          href={service.href}
                          className="block px-4 py-3 text-sm text-charcoal hover:bg-columbia hover:text-primary transition-colors"
                          onClick={() => setIsServicesDropdownOpen(false)}
                        >
                          {service.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Service Areas Dropdown */}
              <div className="relative" ref={locationsDropdownRef}>
                <button
                  onClick={() => setIsLocationsDropdownOpen(!isLocationsDropdownOpen)}
                  className="text-white/90 hover:text-success transition-colors px-3 py-2 text-sm font-medium flex items-center gap-1"
                >
                  Service Areas
                  <ChevronDown className={`h-4 w-4 transition-transform ${isLocationsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isLocationsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-[60] max-h-[32rem] overflow-y-auto">
                    <div className="py-2">
                      {/* Search Header */}
                      <div className="px-4 py-3 border-b border-gray-100">
                        <div className="relative" ref={suburbSearchRef}>
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <input
                            type="text"
                            value={suburbSearchQuery}
                            onChange={(e) => {
                              setSuburbSearchQuery(e.target.value);
                              setShowSuburbSearch(e.target.value.length > 0);
                            }}
                            placeholder="Search suburbs..."
                            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                          />
                        </div>
                      </div>

                      {/* Search Results */}
                      {showSuburbSearch && filteredSuburbs.length > 0 && (
                        <div className="border-b border-gray-100">
                          <div className="px-4 py-2 text-xs text-gray-500 font-medium uppercase tracking-wide">
                            Search Results ({filteredSuburbs.length})
                          </div>
                          {filteredSuburbs.map((suburb, index) => (
                            <a
                              key={`search-${suburb.slug}-${index}`}
                              href={suburb.href}
                              className="block px-4 py-3 text-sm text-charcoal hover:bg-columbia hover:text-primary transition-colors"
                              onClick={() => {
                                setIsLocationsDropdownOpen(false);
                                setShowSuburbSearch(false);
                                setSuburbSearchQuery('');
                              }}
                            >
                              <div className="flex items-center gap-2">
                                <MapPin className="h-3 w-3 text-gray-400" />
                                <span className="font-medium">{suburb.displayName}</span>
                                <span className="text-xs text-gray-500">({suburb.region})</span>
                              </div>
                              <div className="text-xs text-gray-500 mt-1">{suburb.postcode}</div>
                            </a>
                          ))}
                        </div>
                      )}

                      {/* Popular Areas */}
                      {!showSuburbSearch && (
                        <>
                          <div className="px-4 py-2 text-xs text-gray-500 font-medium uppercase tracking-wide border-b border-gray-100">
                            Popular Service Areas
                          </div>
                          {popularSuburbs.slice(0, 8).map((suburb, index) => (
                            <a
                              key={`popular-${suburb.slug}-${index}`}
                              href={suburb.href}
                              className="block px-4 py-3 text-sm text-charcoal hover:bg-columbia hover:text-primary transition-colors group"
                              onClick={() => setIsLocationsDropdownOpen(false)}
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="font-medium group-hover:text-primary">{suburb.displayName}</div>
                                  <div className="text-xs text-gray-500">{suburb.region} • {suburb.postcode}</div>
                                </div>
                                <div className="text-xs bg-columbia text-primary px-2 py-1 rounded-full">
                                  High Demand
                                </div>
                              </div>
                            </a>
                          ))}

                          {/* Regions Quick Access */}
                          <div className="border-t border-gray-100 mt-2">
                            <div className="px-4 py-2 text-xs text-gray-500 font-medium uppercase tracking-wide">
                              Browse by Region
                            </div>
                            <div className="grid grid-cols-2 gap-1 px-4 pb-3">
                              {Object.entries(melbourneRegions).slice(0, 6).map(([region, data]) => (
                                <a
                                  key={region}
                                  href={`/areas/${region.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="text-xs text-professional hover:text-primary py-1 px-2 hover:bg-columbia rounded transition-colors"
                                  onClick={() => setIsLocationsDropdownOpen(false)}
                                >
                                  {region}
                                </a>
                              ))}
                            </div>
                          </div>

                          {/* View All CTA */}
                          <div className="border-t border-gray-100 px-4 py-3">
                            <a
                              href="/areas"
                              className="block text-center text-sm font-medium text-primary hover:text-primary-600 transition-colors"
                              onClick={() => setIsLocationsDropdownOpen(false)}
                            >
                              View All 144+ Service Areas →
                            </a>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              <a href="/case-studies" className="text-white/90 hover:text-success transition-colors px-3 py-2 text-sm font-medium">
                Case Studies
              </a>
              
            </div>
          </div>

          {/* Contact CTA */}
          <div className="hidden lg:flex items-center">
            <Button
              size="sm"
              className="bg-success text-white hover:bg-success/90 px-4 py-2"
              asChild
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-primary-600"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-primary/95 backdrop-blur-md border-t border-primary-600">
              <a
                href="/about"
                className="text-white/90 hover:text-success block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </a>
              
              {/* Mobile Services Section */}
              <div>
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className="text-white/90 hover:text-success block px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesDropdownOpen && (
                  <div className="bg-primary-600/90 backdrop-blur-sm rounded-lg mx-3 mt-2 mb-2">
                    <a
                      href="/services"
                      className="block px-4 py-2 text-sm text-white/90 hover:text-success font-medium border-b border-white/10"
                      onClick={() => {
                        setIsOpen(false);
                        setIsServicesDropdownOpen(false);
                      }}
                    >
                      View All Services
                    </a>
                    {services.map((service, index) => (
                      <a
                        key={index}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-white/80 hover:text-success"
                        onClick={() => {
                          setIsOpen(false);
                          setIsServicesDropdownOpen(false);
                        }}
                      >
                        {service.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Mobile Service Areas Section */}
              <div>
                <button
                  onClick={() => setIsLocationsDropdownOpen(!isLocationsDropdownOpen)}
                  className="text-white/90 hover:text-success block px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between"
                >
                  Service Areas
                  <ChevronDown className={`h-4 w-4 transition-transform ${isLocationsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isLocationsDropdownOpen && (
                  <div className="bg-primary-600/90 backdrop-blur-sm rounded-lg mx-3 mt-2 mb-2 max-h-64 overflow-y-auto">
                    {/* Mobile Search */}
                    <div className="px-4 py-3 border-b border-white/10">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40" />
                        <input
                          type="text"
                          value={suburbSearchQuery}
                          onChange={(e) => {
                            setSuburbSearchQuery(e.target.value);
                            setShowSuburbSearch(e.target.value.length > 0);
                          }}
                          placeholder="Search suburbs..."
                          className="w-full pl-9 pr-4 py-2 text-sm bg-white/10 border border-white/20 rounded-md text-white placeholder-white/60 focus:bg-white/20 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Mobile Search Results */}
                    {showSuburbSearch && filteredSuburbs.length > 0 ? (
                      <div>
                        <div className="px-4 py-2 text-xs text-white/60 font-medium uppercase tracking-wide">
                          Found {filteredSuburbs.length} suburb{filteredSuburbs.length !== 1 ? 's' : ''}
                        </div>
                        {filteredSuburbs.map((suburb, index) => (
                          <a
                            key={`mobile-search-${suburb.slug}-${index}`}
                            href={suburb.href}
                            className="block px-4 py-3 text-sm text-white/80 hover:text-success border-b border-white/5 last:border-b-0"
                            onClick={() => {
                              setIsOpen(false);
                              setIsLocationsDropdownOpen(false);
                              setShowSuburbSearch(false);
                              setSuburbSearchQuery('');
                            }}
                          >
                            <div className="flex items-center gap-2">
                              <MapPin className="h-3 w-3 text-white/40" />
                              <span className="font-medium">{suburb.displayName}</span>
                            </div>
                            <div className="text-xs text-white/60 mt-1">
                              {suburb.region} • {suburb.postcode}
                            </div>
                          </a>
                        ))}
                      </div>
                    ) : !showSuburbSearch ? (
                      <div>
                        {/* Popular Areas */}
                        <div className="px-4 py-2 text-xs text-white/60 font-medium uppercase tracking-wide border-b border-white/10">
                          Popular Areas
                        </div>
                        {popularSuburbs.slice(0, 6).map((suburb, index) => (
                          <a
                            key={`mobile-popular-${suburb.slug}-${index}`}
                            href={suburb.href}
                            className="block px-4 py-3 text-sm text-white/80 hover:text-success border-b border-white/5"
                            onClick={() => {
                              setIsOpen(false);
                              setIsLocationsDropdownOpen(false);
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium">{suburb.displayName}</div>
                                <div className="text-xs text-white/60">{suburb.region}</div>
                              </div>
                              <div className="text-xs bg-success/20 text-success px-2 py-1 rounded">
                                Popular
                              </div>
                            </div>
                          </a>
                        ))}

                        {/* View All Link */}
                        <a
                          href="/areas"
                          className="block px-4 py-3 text-sm text-success font-medium text-center border-t border-white/10"
                          onClick={() => {
                            setIsOpen(false);
                            setIsLocationsDropdownOpen(false);
                          }}
                        >
                          View All 144+ Areas →
                        </a>
                      </div>
                    ) : (
                      <div className="px-4 py-8 text-center text-white/60">
                        <MapPin className="h-6 w-6 mx-auto mb-2 opacity-50" />
                        <div className="text-sm">No suburbs found</div>
                        <div className="text-xs">Try a different search</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              <a
                href="/case-studies"
                className="text-white/90 hover:text-success block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </a>
              
              {/* Mobile Quick Actions */}
              <div className="px-3 py-4 border-t border-primary-600 mt-4">
                <div className="space-y-3">
                  <Button
                    className="w-full bg-success hover:bg-success/90 text-white font-medium"
                    asChild
                  >
                    <a href="/contact" onClick={() => setIsOpen(false)}>
                      Contact Us
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10"
                    asChild
                  >
                    <a href="tel:1800954117" onClick={() => setIsOpen(false)}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now: 1800 954 117
                    </a>
                  </Button>
                </div>
                <div className="text-center text-xs text-white/60 mt-3">
                  Professional service • 7 days a week • Melbourne-wide
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};