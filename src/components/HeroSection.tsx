'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Heart, Target } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Sezione principale con presentazione di Giorgia Cherubino"
      role="banner"
    >
             {/* Simple Background */}
       <div className="absolute inset-0 bg-white"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            

            {/* Main Heading */}
                          <div className="space-y-6" role="region" aria-label="Titolo principale e descrizione">
              <h1 
                className="text-5xl lg:text-7xl font-bold leading-tight animate-stagger-fade-in delay-200 gpu-accelerated"
                aria-live="polite"
                role="heading"
                aria-level={1}
              >
                <span className="block text-gray-900 animate-slide-in-left">Trasforma</span>
                <span className="block text-emerald-600 animate-slide-in-right delay-300">
                  la tua Vita
                </span>
              </h1>
              <p 
                className="text-xl lg:text-2xl text-high-contrast leading-relaxed max-w-lg animate-stagger-fade-in delay-400"
                aria-describedby="hero-description"
                id="hero-description"
              >
                Scopri il tuo potenziale autentico attraverso un percorso di 
                <span className="font-bold text-emerald-700 text-shadow-light"> crescita personale</span> su misura per te.
              </p>
            </div>

            {/* Value Propositions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div 
                className="flex items-center space-x-4 card-micro animate-stagger-fade-in delay-500 p-4 rounded-xl transition-all-smooth bg-enhanced border-enhanced"
                role="group"
                aria-labelledby="approach-title"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white icon-white-enhanced" aria-hidden="true" />
                </div>
                <div>
                  <h3 id="approach-title" className="font-bold text-high-contrast text-base">Approccio Empatico</h3>
                  <p className="text-sm text-high-contrast">Con ascolto e comprensione</p>
                </div>
              </div>
              
              <div 
                className="flex items-center space-x-4 card-micro animate-stagger-fade-in delay-500 p-4 rounded-xl transition-all-smooth bg-enhanced border-enhanced"
                role="group"
                aria-labelledby="results-title"
              >
                                 <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                   <Target className="h-6 w-6 text-white icon-white-enhanced" aria-hidden="true" />
                 </div>
                <div>
                  <h3 id="results-title" className="font-bold text-high-contrast text-base">Risultati Concreti</h3>
                  <p className="text-sm text-high-contrast">Obiettivi chiari e misurabili</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://docs.google.com/forms/d/1rCvOWrc85UFEtRNFgWtAzJyM8bQ8a7_z8I5iCRbLl8I/preview"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center space-x-2 btn-enhanced animate-stagger-fade-in delay-500 focus-enhanced gpu-accelerated hover-enhanced"
                aria-label="Inizia il tuo percorso di crescita personale con Giorgia"
              >
                <span>Inizia il Tuo Percorso</span>
                <ArrowRight className="h-5 w-5 icon-enhanced group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
              
              <button
                onClick={() => scrollToSection('servizi')}
                className="border-2 border-gray-400 text-high-contrast px-8 py-4 rounded-full font-bold text-lg hover:border-azzurro-400 hover:text-azzurro-700 transition-all duration-300 btn-enhanced animate-stagger-fade-in delay-600 focus-enhanced gpu-accelerated hover-enhanced"
                aria-label="Scopri tutti i servizi di coaching disponibili"
                type="button"
              >
                Scopri i Servizi
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t-2 border-gray-200 animate-stagger-fade-in delay-700">
              <div 
                className="flex items-center space-x-4 text-sm text-high-contrast"
                role="group"
                aria-label="Testimonianza sociale"
              >
                <div className="flex -space-x-2" aria-label="Avatar delle persone che hanno trasformato la loro vita">
                  <div className="w-10 h-10 bg-rose-500 rounded-full border-2 border-white shadow-lg" aria-hidden="true"></div>
                  <div className="w-10 h-10 bg-emerald-500 rounded-full border-2 border-white shadow-lg" aria-hidden="true"></div>
                  <div className="w-10 h-10 bg-blue-500 rounded-full border-2 border-white shadow-lg" aria-hidden="true"></div>
                  <div 
                    className="w-10 h-10 bg-purple-600 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-bold shadow-lg"
                    aria-label="Più di 20 persone aggiuntive"
                  >
                    +20
                  </div>
                </div>
                <span className="font-semibold text-base"><strong>50+</strong> persone hanno già trasformato la loro vita</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative animate-zoom-in delay-800">
                             {/* Main Image */}
               <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                 <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg border-2 border-gray-200 gpu-accelerated">
                   <Image
                     src="/giorgia-profile.jpg"
                     alt="Giorgia Cherubino, Life Coach specializzata in crescita personale e autostima"
                     fill
                     className="object-cover"
                     priority
                     sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                   />
                 </div>
               </div>
              
              
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300"
        onClick={() => scrollToSection('about')}
        role="button"
        aria-label="Scorri alla sezione successiva"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollToSection('about');
          }
        }}
      >
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse-soft"></div>
        </div>
        <span className="sr-only">Scorri per scoprire di più</span>
      </div>
    </section>
  );
};

export default HeroSection;