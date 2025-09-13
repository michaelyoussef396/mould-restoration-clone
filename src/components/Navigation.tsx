import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import mouldLogo from '@/assets/mould-restoration-logo.png';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              <a href="/services" className="text-primary-foreground/80 hover:text-accent-teal transition-colors px-3 py-2 text-sm font-medium">
                Services
              </a>
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
              <a
                href="/services"
                className="text-primary-foreground/80 hover:text-accent-teal block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
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