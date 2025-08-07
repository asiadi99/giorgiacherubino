'use client';

import { Heart, Instagram, Mail, Star, Sparkles, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const testimonials = [
    { text: "Giorgia mi ha cambiato la vita", author: "Maria R." },
    { text: "Un percorso incredibile di crescita", author: "Luca S." },
    { text: "Professionale e molto empatica", author: "Elena M." }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Main Footer with Gradient Background */}
              <div className="bg-gradient-to-br from-slate-800/95 via-azzurro-700/95 to-emerald-700/95">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px), radial-gradient(circle at 40% 40%, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-azzurro-400/20 to-blue-400/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-gradient-to-r from-violet-400/15 to-indigo-400/15 rounded-full blur-2xl animate-float-slow"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Top Section with CTA */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-white/90 text-sm font-medium">Pronto/a per il Cambiamento?</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Inizia il Tuo <span className="text-yellow-300">Viaggio</span> Oggi
            </h2>
            
            <p className="text-2xl text-white-high-contrast max-w-2xl mx-auto mb-10 leading-relaxed font-bold">
              Non aspettare domani per iniziare a vivere la vita che desideri. 
              Prenota una chiamata gratuita e scopri come posso aiutarti.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs.google.com/forms/d/1rCvOWrc85UFEtRNFgWtAzJyM8bQ8a7_z8I5iCRbLl8I/preview"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-5 rounded-full font-bold text-xl hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 inline-flex items-center justify-center space-x-2 hover:scale-105"
              >
                <span>Chiamata Gratuita</span>
                <Star className="h-5 w-5" />
              </a>
              
              <button
                onClick={() => document.getElementById('servizi')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Esplora i Servizi
              </button>
            </div>
          </div>

          {/* Mini Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-300 fill-current" />
                  ))}
                </div>
                <p className="text-white-high-contrast italic mb-4 text-lg leading-relaxed font-semibold">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="text-white-high-contrast text-base font-bold">- {testimonial.author}</p>
              </div>
            ))}
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* Brand Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-4xl font-bold text-white mb-3">
                  ✨ Giorgia
                </h3>
                <h4 className="text-2xl font-bold text-yellow-300 mb-6">
                  Life Coach Certificata
                </h4>
                <p className="text-white/90 leading-relaxed text-lg">
                  Trasformo vite attraverso percorsi di crescita personale autentici e su misura.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/giorgia.cherubino" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a 
                  href="mailto:giorgiacherubinocoach@gmail.com"
                  className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-white mb-8">I Miei Servizi</h4>
              <div className="space-y-4">
                <a href="#servizi" className="block text-white/90 hover:text-yellow-300 transition-colors duration-200 hover:translate-x-1 transform text-lg">
                  → Coaching Individuale
                </a>
                <a href="#servizi" className="block text-white/90 hover:text-yellow-300 transition-colors duration-200 hover:translate-x-1 transform text-lg">
                  → Coaching di Gruppo
                </a>
                <a href="#servizi" className="block text-white/90 hover:text-yellow-300 transition-colors duration-200 hover:translate-x-1 transform text-lg">
                  → Intensivo Obiettivi
                </a>
                <a href="#servizi" className="block text-white/90 hover:text-yellow-300 transition-colors duration-200 hover:translate-x-1 transform text-lg">
                  → Mindfulness Journey
                </a>
              </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
              <h4 className="text-2xl font-bold text-white mb-8">Navigazione</h4>
              <div className="space-y-4">
                <a href="#home" className="block text-white/90 hover:text-yellow-300 transition-colors duration-200 hover:translate-x-1 transform text-lg">
                  → Home
                </a>
                <a href="#about" className="block text-white/90 hover:text-yellow-300 transition-colors duration-200 hover:translate-x-1 transform text-lg">
                  → Chi Sono
                </a>
                <a href="#testimonianze" className="block text-white/90 hover:text-yellow-300 transition-colors duration-200 hover:translate-x-1 transform text-lg">
                  → Testimonianze
                </a>
                <a href="#contatti" className="block text-white/90 hover:text-yellow-300 transition-colors duration-200 hover:translate-x-1 transform text-lg">
                  → Contatti
              </a>
            </div>
          </div>

                    {/* Contact Info */}
          <div className="space-y-4">
              <h4 className="text-2xl font-bold text-white mb-8">Contattami</h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-yellow-300 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/70 text-base">Email</p>
                    <a 
                      href="mailto:giorgiacherubinocoach@gmail.com" 
                      className="text-white/95 hover:text-yellow-300 transition-colors font-semibold text-lg"
                    >
                      giorgiacherubinocoach@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Instagram className="h-6 w-6 text-yellow-300 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/70 text-base">Instagram</p>
              <a 
                href="https://www.instagram.com/giorgia.cherubino" 
                target="_blank" 
                rel="noopener noreferrer"
                      className="text-white/95 hover:text-yellow-300 transition-colors font-semibold text-lg"
                    >
                      @giorgia.cherubino
                    </a>
                  </div>
                </div>

                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <p className="text-white/95 text-lg font-semibold mb-3">🎯 Consultation Call</p>
                  <p className="text-white/80 text-base leading-relaxed">
                    Prima chiamata sempre gratuita per conoscerci meglio
                  </p>
                </div>
              </div>
          </div>
        </div>

        {/* Bottom Bar */}
          <div className="pt-12 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-6 md:mb-0">
                <p className="text-white/80 text-lg font-medium">
              © 2024 Giorgia Cherubino. Tutti i diritti riservati.
            </p>
                <div className="flex items-center space-x-3">
                  <span className="text-white/80 text-lg">Fatto con</span>
                  <Heart className="h-5 w-5 text-red-400 animate-pulse" />
                  <span className="text-white/80 text-lg">per il tuo benessere</span>
                </div>
              </div>
              
              <button
                onClick={scrollToTop}
                className="bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 group border border-white/20"
              >
                <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;