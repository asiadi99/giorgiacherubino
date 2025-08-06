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
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-rose-500/95 via-pink-500/95 to-emerald-500/95 backdrop-blur-xl shadow-lg border-b border-white/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white drop-shadow-sm">
              ✨ Giorgia Cherubino
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white/90 hover:text-white font-medium transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white/90 hover:text-white font-medium transition-colors duration-200 relative group"
            >
              Chi Sono
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('servizi')}
              className="text-white/90 hover:text-white font-medium transition-colors duration-200 relative group"
            >
              Servizi
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('testimonianze')}
              className="text-white/90 hover:text-white font-medium transition-colors duration-200 relative group"
            >
              Testimonianze
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('contatti')}
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-2.5 rounded-full font-semibold hover:bg-white/30 border border-white/20 transition-all duration-300 hover:scale-105"
            >
              Contatti
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-inset rounded-lg p-2 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2 bg-black/20 backdrop-blur-lg border-t border-white/20">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl font-medium transition-all duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl font-medium transition-all duration-200"
              >
                Chi Sono
              </button>
              <button
                onClick={() => scrollToSection('servizi')}
                className="block w-full text-left px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl font-medium transition-all duration-200"
              >
                Servizi
              </button>
              <button
                onClick={() => scrollToSection('testimonianze')}
                className="block w-full text-left px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl font-medium transition-all duration-200"
              >
                Testimonianze
              </button>
              <button
                onClick={() => scrollToSection('contatti')}
                className="block w-full mt-4 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-white/30 border border-white/20 transition-all duration-300"
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