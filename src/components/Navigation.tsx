import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import mouldLogo from '@/assets/mould-restoration-logo.png';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    { title: 'Professional Mould Inspections', href: '/services/professional-mould-inspections' },
    { title: 'Comprehensive Mould Removal', href: '/services/comprehensive-mould-removal' },
    { title: 'Complete Material Removal', href: '/services/complete-material-removal' },
    { title: 'Advanced Fogging Sanitisation', href: '/services/advanced-fogging-sanitisation' },
    { title: 'Subfloor Mould Remediation', href: '/services/subfloor-mould-remediation' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary backdrop-blur-md border-b border-primary-dark shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img 
                src={mouldLogo} 
                alt="Mould & Restoration Co" 
                className="h-10 w-auto"
              />
              <span className="text-primary-foreground font-semibold text-lg hidden sm:block">
                Mould & Restoration Co
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-primary-foreground hover:text-accent-teal transition-colors px-3 py-2 text-sm font-medium">
                Home
              </a>
              <a href="/about" className="text-primary-foreground/80 hover:text-accent-teal transition-colors px-3 py-2 text-sm font-medium">
                About Us
              </a>
              
              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className="text-primary-foreground/80 hover:text-accent-teal transition-colors px-3 py-2 text-sm font-medium flex items-center gap-1"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="py-2">
                      <a
                        href="/services"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 font-medium border-b border-gray-100"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        View All Services
                      </a>
                      {services.map((service, index) => (
                        <a
                          key={index}
                          href={service.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent-blue transition-colors"
                          onClick={() => setIsServicesDropdownOpen(false)}
                        >
                          {service.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <a href="#contact" className="text-primary-foreground/80 hover:text-accent-teal transition-colors px-3 py-2 text-sm font-medium">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-primary-foreground/80">
            <div>
              <span className="font-medium">1800 954 117</span>
            </div>
            <div className="w-px h-4 bg-primary-foreground/20"></div>
            <div>
              <span>Melbourne, VIC</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-foreground hover:bg-primary-dark"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-primary/95 backdrop-blur-md border-t border-primary-dark">
              <a
                href="/"
                className="text-primary-foreground hover:text-accent-teal block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className="text-primary-foreground/80 hover:text-accent-teal block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </a>
              
              {/* Mobile Services Section */}
              <div>
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className="text-primary-foreground/80 hover:text-accent-teal block px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesDropdownOpen && (
                  <div className="bg-primary-dark/50 rounded-lg mx-3 mt-2 mb-2">
                    <a
                      href="/services"
                      className="block px-4 py-2 text-sm text-primary-foreground/90 hover:text-accent-teal font-medium border-b border-primary-foreground/10"
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
                        className="block px-4 py-2 text-sm text-primary-foreground/80 hover:text-accent-teal"
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
              
              <a
                href="#contact"
                className="text-primary-foreground/80 hover:text-accent-teal block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <div className="px-3 py-2 border-t border-primary-dark mt-2">
                <div className="text-sm text-primary-foreground/80">
                  <div className="font-medium">1800 954 117</div>
                  <div>Melbourne, VIC</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};