'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Heart, Target } from 'lucide-react';
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
      role="main"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-rose-50/50"></div>
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-rose-400/5 via-pink-400/5 to-emerald-400/5 animate-gradient-shift"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-rose-200/15 to-pink-200/15 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-emerald-200/15 to-green-200/15 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-28 h-28 bg-gradient-to-br from-violet-200/10 to-indigo-200/10 rounded-full blur-2xl animate-float-slow"></div>
        
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #ec4899 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Badge */}
            <div 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-50 to-emerald-50 border border-rose-200/50 rounded-full px-4 py-2 animate-stagger-fade-in btn-micro gpu-accelerated"
              role="banner"
              aria-label="Badge certificazione"
            >
              <Sparkles className="h-4 w-4 text-rose-500" />
              <span className="text-sm font-medium text-gray-700">Life Coach Certificata</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 
                className="text-5xl lg:text-7xl font-bold leading-tight animate-stagger-fade-in delay-200 gpu-accelerated"
                aria-live="polite"
                role="heading"
                aria-level={1}
              >
                <span className="block text-gray-900 animate-slide-in-left">Trasforma</span>
                <span className="block bg-gradient-to-r from-rose-600 via-pink-600 to-emerald-600 bg-clip-text text-transparent animate-slide-in-right delay-300 animate-text-shine">
                  la tua Vita
                </span>
              </h1>
              <p 
                className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-lg animate-stagger-fade-in delay-400"
                aria-describedby="hero-description"
                id="hero-description"
              >
                Scopri il tuo potenziale autentico attraverso un percorso di 
                <span className="font-semibold text-emerald-700"> crescita personale</span> su misura per te.
              </p>
            </div>

            {/* Value Propositions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div 
                className="flex items-center space-x-4 card-micro animate-stagger-fade-in delay-500 p-4 rounded-xl transition-all-smooth"
                role="group"
                aria-labelledby="approach-title"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center animate-breathe">
                  <Heart className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 id="approach-title" className="font-semibold text-gray-900 text-base">Approccio Empatico</h3>
                  <p className="text-sm text-gray-600">Con ascolto e comprensione</p>
                </div>
              </div>
              
              <div 
                className="flex items-center space-x-4 card-micro animate-stagger-fade-in delay-500 p-4 rounded-xl transition-all-smooth"
                role="group"
                aria-labelledby="results-title"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center animate-breathe">
                  <Target className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 id="results-title" className="font-semibold text-gray-900 text-base">Risultati Concreti</h3>
                  <p className="text-sm text-gray-600">Obiettivi chiari e misurabili</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contatti')}
                className="group bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-rose-500/25 transition-all duration-300 flex items-center justify-center space-x-2 btn-micro animate-stagger-fade-in delay-500 animate-glow focus-ring gpu-accelerated"
                aria-label="Inizia il tuo percorso di crescita personale con Giorgia"
                type="button"
              >
                <span>Inizia il Tuo Percorso</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
              
              <button
                onClick={() => scrollToSection('servizi')}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-rose-300 hover:text-rose-700 transition-all duration-300 btn-micro animate-stagger-fade-in delay-600 focus-ring gpu-accelerated"
                aria-label="Scopri tutti i servizi di coaching disponibili"
                type="button"
              >
                Scopri i Servizi
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-gray-100 animate-stagger-fade-in delay-700">
              <div 
                className="flex items-center space-x-4 text-sm text-gray-600"
                role="group"
                aria-label="Testimonianza sociale"
              >
                <div className="flex -space-x-2" aria-label="Avatar delle persone che hanno trasformato la loro vita">
                  <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full border-2 border-white" aria-hidden="true"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-400 rounded-full border-2 border-white" aria-hidden="true"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full border-2 border-white" aria-hidden="true"></div>
                  <div 
                    className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold"
                    aria-label="Più di 20 persone aggiuntive"
                  >
                    +20
                  </div>
                </div>
                <span><strong>50+</strong> persone hanno già trasformato la loro vita</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative animate-zoom-in delay-800">
              {/* Main Image */}
              <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-emerald-500/20 rounded-full blur-2xl animate-breathe"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-3 border-white card-micro gpu-accelerated">
                  <Image
                    src="/giorgia-profile.jpg"
                    alt="Giorgia Cherubino, Life Coach certificata specializzata in crescita personale e autostima"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 288px, 320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5"></div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div 
                className="absolute -top-3 -left-3 w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce-slow btn-micro"
                aria-label="Icona decorativa stelle"
                role="img"
              >
                <Sparkles className="h-7 w-7 text-white" aria-hidden="true" />
              </div>
              
              <div 
                className="absolute -bottom-3 -right-3 bg-white rounded-xl p-3 shadow-xl border border-gray-100 card-micro"
                role="img"
                aria-label="Badge esperienza: 5 anni di coaching"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg flex items-center justify-center animate-pulse-soft">
                    <Heart className="h-4 w-4 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">5+ anni</p>
                    <p className="text-xs text-gray-600">esperienza</p>
                  </div>
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