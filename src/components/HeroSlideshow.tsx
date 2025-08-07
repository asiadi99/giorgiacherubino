'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: "Trasforma la Tua Vita",
    subtitle: "Scopri il Tuo Potenziale Autentico",
    description: "Un viaggio di crescita personale che ti porterà a vivere con maggiore consapevolezza e realizzazione.",
    cta: "Inizia il Tuo Percorso",
    image: "/giorgia-profile.jpg"
  },
  {
    id: 2,
    title: "Consapevolezza",
    subtitle: "Il Primo Passo verso il Cambiamento",
    description: "Impara a conoscere te stesso e a creare la vita che desideri veramente.",
    cta: "Scopri Come",
    image: "/giorgia-profile.jpg"
  },
  {
    id: 3,
    title: "Crescita Personale",
    subtitle: "Un Percorso su Misura per Te",
    description: "Coaching personalizzato per superare i tuoi limiti e raggiungere i tuoi obiettivi più importanti.",
    cta: "Prenota una Consulenza",
    image: "/giorgia-profile.jpg"
  }
];

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };



  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-hero-gradient"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-white/5"></div>
      
      {/* Slides Container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex items-center justify-center h-full">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div className="text-center lg:text-left space-y-8 animate-slide-in">
                    <div className="space-y-4">
                      <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                        {slide.title}
                      </h1>
                      <h2 className="text-2xl lg:text-3xl text-white/90 font-light">
                        {slide.subtitle}
                      </h2>
                    </div>
                    
                    <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                      {slide.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <a
                        href="https://docs.google.com/forms/d/1rCvOWrc85UFEtRNFgWtAzJyM8bQ8a7_z8I5iCRbLl8I/preview"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                      >
                        <span>{slide.cta}</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <button
                        onClick={() => document.getElementById('servizi')?.scrollIntoView({ behavior: 'smooth' })}
                        className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
                      >
                        Scopri i Servizi
                      </button>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl animate-fade-in">
                      <Image
                        src={slide.image}
                        alt="Giorgia Cherubino"
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-10"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-10"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-white/80">
          <span className="text-sm font-medium">Scorri</span>
          <div className="w-px h-8 bg-white/50"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlideshow;