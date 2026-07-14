import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.jpg';
import { Menu as MenuIcon, X } from 'lucide-react';

const Instagram = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Our Story', href: '#story' },
    { name: 'Reels', href: '#reels' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-brand-soft-white/95 backdrop-blur-md py-3 shadow-md border-b border-brand-sand' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Badge */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-yellow shadow-md transition-transform duration-300 group-hover:scale-105">
              <img 
                src={logoImg} 
                alt="Sowaka Café Logo Badge" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-script text-3xl font-bold text-brand-brown hover:text-brand-brown-light transition-colors duration-200">
              Sowaka
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-brown font-medium hover:text-brand-yellow transition-colors duration-200 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://instagram.com/sowakacafe" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow Rohan and Sowaka Café on Instagram"
              className="p-2 text-brand-brown hover:text-brand-yellow hover:scale-110 transition-all duration-200 bg-brand-cream rounded-full border border-brand-sand shadow-sm"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="bg-brand-brown text-brand-yellow px-5 py-2.5 rounded-full font-semibold hover:bg-brand-yellow hover:text-brand-brown transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Visit Café
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <a 
              href="https://instagram.com/sowakacafe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-brand-brown hover:text-brand-yellow bg-brand-cream rounded-full border border-brand-sand shadow-sm"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full text-brand-brown hover:text-brand-yellow bg-brand-cream border border-brand-sand shadow-sm focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-brand-soft-white border-b border-brand-sand shadow-xl transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-brand-cream/80 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-brand-brown font-medium hover:bg-brand-yellow/20 hover:text-brand-brown-light transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-brand-sand px-4">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-brand-brown text-brand-yellow py-3 rounded-full font-semibold hover:bg-brand-yellow hover:text-brand-brown transition-all duration-300 shadow-md"
            >
              Visit Café
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
