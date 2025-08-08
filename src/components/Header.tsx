'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
          <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-azzurro-600/98 via-blue-600/98 to-emerald-600/98 backdrop-blur-xl shadow-xl border-b-2 border-white/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white-high-contrast text-shadow-enhanced">
              ✨ Giorgia Cherubino
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white-high-contrast hover:text-white font-semibold transition-colors duration-200 relative group focus-enhanced"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white-high-contrast hover:text-white font-semibold transition-colors duration-200 relative group focus-enhanced"
            >
              Chi Sono
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('servizi')}
              className="text-white-high-contrast hover:text-white font-semibold transition-colors duration-200 relative group focus-enhanced"
            >
              Servizi
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('testimonianze')}
              className="text-white-high-contrast hover:text-white font-semibold transition-colors duration-200 relative group focus-enhanced"
            >
              Testimonianze
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('contatti')}
              className="btn-white-enhanced px-6 py-3 rounded-full font-bold hover:scale-105 transition-all duration-300 focus-enhanced"
            >
              Contatti
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white-high-contrast hover:text-white focus-enhanced rounded-lg p-2 transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 icon-white-enhanced" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6 icon-white-enhanced" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu" role="navigation" aria-label="Menu mobile">
            <div className="px-2 pt-2 pb-3 space-y-2 bg-dark-enhanced border-t-2 border-white/30 animate-fade-in">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-4 text-white-high-contrast hover:text-white hover:bg-white/20 rounded-xl font-semibold transition-all duration-200 focus-enhanced touch-target"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-4 text-white-high-contrast hover:text-white hover:bg-white/20 rounded-xl font-semibold transition-all duration-200 focus-enhanced touch-target"
              >
                Chi Sono
              </button>
              <button
                onClick={() => scrollToSection('servizi')}
                className="block w-full text-left px-4 py-4 text-white-high-contrast hover:text-white hover:bg-white/20 rounded-xl font-semibold transition-all duration-200 focus-enhanced touch-target"
              >
                Servizi
              </button>
              <button
                onClick={() => scrollToSection('testimonianze')}
                className="block w-full text-left px-4 py-4 text-white-high-contrast hover:text-white hover:bg-white/20 rounded-xl font-semibold transition-all duration-200 focus-enhanced touch-target"
              >
                Testimonianze
              </button>
              <button
                onClick={() => scrollToSection('contatti')}
                className="block w-full mt-4 btn-white-enhanced px-6 py-4 rounded-full font-bold text-center hover:scale-105 transition-all duration-300 focus-enhanced touch-target"
              >
                Contatti
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;