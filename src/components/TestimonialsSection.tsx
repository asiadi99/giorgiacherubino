'use client';

import { useState } from 'react';
import { Play, Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

// ============================================================================
// DATA
// ============================================================================

const videoTestimonials = [
  {
    id: 1,
    name: "Daniele",
    role: "Percorso Coaching",
    thumbnail: "/giorgia-profile.jpg",
    videoUrl: "/video-daniele.mp4",
    preview: "Testimonianza di Daniele - esperienza di trasformazione personale attraverso il coaching di Giorgia..."
  },
  {
    id: 2,
    name: "Nicholas",
    role: "Crescita Personale",
    thumbnail: "/giorgia-profile.jpg",
    videoUrl: "/video-nicholas.mp4",
    preview: "Testimonianza di Nicholas - percorso di crescita personale e sviluppo dell'autostima con Giorgia..."
  },
  {
    id: 3,
    name: "Thuy",
    role: "Autostima e Direzione",
    thumbnail: "/giorgia-profile.jpg",
    videoUrl: "/video-thuy.mp4",
    preview: "Testimonianza di Thuy - percorso di sviluppo dell'autostima e ricerca della direzione personale..."
  }
];

const writtenTestimonials = [
  {
    id: 1,
    name: "Martina",
    role: "Cliente Coaching",
    rating: 5,
    text: "Il percorso con Giorgia ha completamente trasformato la mia autostima. Grazie al suo metodo unico, ho imparato a valorizzare me stessa senza perdere la mia autenticità. Ora affronto la vita con una sicurezza che non pensavo di poter mai avere.",
    date: "Dicembre 2024"
  },
  {
    id: 2,
    name: "Giulia",
    role: "Professionista",
    rating: 5,
    text: "Giorgia mi ha aiutato a ritrovare la mia direzione in un momento di grande confusione. Il suo approccio pratico e concreto mi ha permesso di smettere di rimuginare sui problemi e iniziare ad agire. La mia comunicazione e le mie relazioni sono migliorate enormemente.",
    date: "Novembre 2024"
  },
  {
    id: 3,
    name: "Eleonora",
    role: "Imprenditrice",
    rating: 5,
    text: "Lavorare con Giorgia è stata una svolta. Mi ha insegnato a rimanere fedele ai miei valori mentre raggiungo obiettivi tangibili. Il suo metodo è davvero unico: niente maschere, niente teoria inutile, solo risultati concreti e autenticità.",
    date: "Ottobre 2024"
  },
  {
    id: 4,
    name: "Sara",
    role: "Manager",
    rating: 5,
    text: "Dopo anni di insicurezza e relazioni tossiche, Giorgia mi ha guidato verso una nuova versione di me stessa. Il suo percorso di 30 giorni gratuiti mi ha convinta immediatamente della sua professionalità e competenza. Ora vivo con autenticità e libertà.",
    date: "Settembre 2024"
  },
  {
    id: 5,
    name: "Francesca",
    role: "Libera Professionista",
    rating: 5,
    text: "Giorgia ha una capacità incredibile di andare dritto al punto. Non perde tempo con chiacchiere inutili ma ti aiuta concretamente a migliorare autostima, comunicazione e relazioni. Il suo metodo funziona davvero e i risultati si vedono subito.",
    date: "Agosto 2024"
  }
];

const benefits = [
  { 
    icon: "💪", 
    title: "Aumentare la tua autostima", 
    desc: "Senza maschere, rimanendo fedele ai tuoi valori" 
  },
  { 
    icon: "🎯", 
    title: "Raggiungere obiettivi tangibili", 
    desc: "Risultati concreti e misurabili nel tempo" 
  },
  { 
    icon: "💬", 
    title: "Migliorare la tua comunicazione", 
    desc: "Esprimerti con sicurezza e autenticità" 
  },
  { 
    icon: "❤️", 
    title: "Migliorare le tue relazioni", 
    desc: "Costruire legami più sani e profondi" 
  }
];

// ============================================================================
// COMPONENT
// ============================================================================

const TestimonialsSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [currentWritten, setCurrentWritten] = useState(0);

  // ============================================================================
  // HANDLERS
  // ============================================================================

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videoTestimonials.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  const nextWritten = () => {
    setCurrentWritten((prev) => (prev + 1) % writtenTestimonials.length);
  };

  const prevWritten = () => {
    setCurrentWritten((prev) => (prev - 1 + writtenTestimonials.length) % writtenTestimonials.length);
  };



  // ============================================================================
  // RENDER HELPERS
  // ============================================================================

  const renderStars = (rating: number) => (
    <div className="flex space-x-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
      ))}
    </div>
  );

  const renderVideoContent = () => {
    const currentTestimonial = videoTestimonials[currentVideo];

    return (
      <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl mb-6 relative overflow-hidden cursor-pointer group animate-float"
           onClick={() => window.open(currentTestimonial.videoUrl, '_blank')}>
        
        {/* Video Content with Enhanced Effects */}
        <video 
          src={currentTestimonial.videoUrl}
          className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
          muted
          loop
          autoPlay
          playsInline
          style={{ 
            filter: 'brightness(0.8) contrast(1.1) saturate(1.2)',
            boxShadow: '0 0 30px rgba(0,0,0,0.3)'
          }}
        />
        
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-500"></div>
        
        {/* Animated Border Glow */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-azzurro-400/50 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:animate-glow"></div>
        
        {/* Enhanced Play Button with Animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-azzurro-400/30 transition-all duration-500 animate-ping"></div>
            
            {/* Main Play Button */}
            <div className="relative bg-white/95 backdrop-blur-md rounded-full p-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
              <Play className="h-8 w-8 text-gray-900 ml-1 group-hover:text-azzurro-600 transition-colors duration-300" />
            </div>
            
            {/* Pulse Animation */}
            <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse group-hover:animate-none"></div>
          </div>
        </div>
        
        {/* Enhanced Preview Text with Better Typography */}
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-xl">
            <p className="text-white text-sm leading-relaxed font-medium">
              {currentTestimonial.preview}
            </p>
            {/* Subtle accent line */}
            <div className="w-12 h-0.5 bg-gradient-to-r from-azzurro-400 to-blue-400 mt-2 rounded-full"></div>
          </div>
        </div>
        
        {/* Floating Particles Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="absolute top-8 right-8 w-1 h-1 bg-azzurro-400/50 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Hover State Enhancement */}
        <div className="absolute inset-0 bg-gradient-to-br from-azzurro-500/0 to-emerald-500/0 group-hover:from-azzurro-500/10 group-hover:to-emerald-500/10 transition-all duration-700 rounded-xl"></div>
      </div>
    );
  };

  // ============================================================================
  // RENDER
  // ============================================================================

  return (
          <section id="testimonianze" className="py-24 bg-gradient-to-b from-white via-azzurro-50/30 to-emerald-50/30 relative overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
                 @keyframes glow {
           0%, 100% { box-shadow: 0 0 20px rgba(59,130,246,0.3); }
           50% { box-shadow: 0 0 30px rgba(59,130,246,0.6); }
         }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
      
             {/* Background Elements */}
       <div className="absolute inset-0">
         <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
         <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-emerald-200/20 to-green-200/20 rounded-full blur-3xl"></div>
       </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================
            HEADER SECTION
        ======================================================================== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-high-contrast">
            Cosa Dicono di <span className="text-azzurro-600 text-shadow-enhanced">Me</span>
          </h2>
          <p className="text-xl text-high-contrast max-w-3xl mx-auto leading-relaxed mb-8">
            Le parole di chi ha trasformato la propria autostima e direzione con il mio metodo unico.
          </p>
          
          {/* Social Proof Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex items-center space-x-3">
              {renderStars(5)}
              <div>
                <span className="text-2xl font-bold text-high-contrast">4.9/5</span>
                <p className="text-high-contrast text-sm font-semibold">valutazione media</p>
              </div>
            </div>
            
            <div className="h-12 w-px bg-gray-400 hidden sm:block"></div>
            
            <div className="text-center">
              <span className="text-2xl font-bold text-high-contrast">10+</span>
              <p className="text-high-contrast text-sm font-semibold">coachee soddisfatti<br/>in tutta Italia</p>
            </div>
          </div>
        </div>

        {/* ========================================================================
            FEATURED TESTIMONIAL QUOTE
        ======================================================================== */}
        <div className="mb-16">
          <div className="bg-azzurro-600 rounded-3xl p-1 max-w-4xl mx-auto shadow-2xl">
            <div className="bg-white rounded-3xl p-8 md:p-12 text-center">
                              <Quote className="h-12 w-12 text-azzurro-500 mx-auto mb-6 icon-enhanced" />
              <blockquote className="text-2xl md:text-3xl font-bold text-high-contrast mb-6 leading-tight text-shadow-light">
                &ldquo;Ti aiuto a ottenere autostima e direzione senza perdere più tempo grazie a un metodo unico e completo.&rdquo;
              </blockquote>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-azzurro-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-high-contrast">Giorgia Cherubino</p>
                  <p className="text-high-contrast text-sm font-semibold">Life Coach Certificata</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================
            BENEFITS SECTION
        ======================================================================== */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Cosa posso fare per te nel pratico
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-enhanced rounded-2xl p-6 shadow-lg border-enhanced hover:shadow-xl transition-all duration-300 text-center hover-enhanced">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="text-lg font-bold text-high-contrast mb-3">{benefit.title}</h4>
                <p className="text-high-contrast text-sm leading-relaxed font-medium">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================
            VIDEO TESTIMONIALS SECTION
        ======================================================================== */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Guarda le testimonianze video
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Current Video */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              {renderVideoContent()}
              
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 text-lg mb-1">
                  {videoTestimonials[currentVideo].name}
                </h4>
                <p className="text-gray-600">
                  {videoTestimonials[currentVideo].role}
                </p>
              </div>
            </div>

            {/* Video Navigation */}
            <button
              onClick={prevVideo}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            
            <button
              onClick={nextVideo}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>

            {/* Video Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {videoTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentVideo
                      ? 'bg-azzurro-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================
            CALL TO ACTION SECTION
        ======================================================================== */}
        <div className="text-center bg-white rounded-3xl p-12 border border-azzurro-200/30 shadow-lg relative overflow-hidden mb-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.06) 2px, transparent 2px), radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.06) 2px, transparent 2px)`,
              backgroundSize: '120px 120px'
            }}></div>
          </div>
          
          <div className="relative">
            <h3 className="text-3xl lg:text-4xl font-bold text-high-contrast mb-6">
              Vuoi avere l&apos;autostima al massimo senza perdere chi sei?
            </h3>
            <p className="text-xl text-high-contrast mb-8 max-w-2xl mx-auto leading-relaxed">
              <strong>Prova GRATIS per 30 giorni, paghi solo se sei soddisfatto del risultato.</strong>
            </p>
            <p className="text-lg text-high-contrast mb-8">
              Non hai nulla da perdere ma solo da guadagnare. Dopo 30 giorni potrai decidere in tutta libertà se continuare la nostra collaborazione.
            </p>
            <a
              href="https://docs.google.com/forms/d/1rCvOWrc85UFEtRNFgWtAzJyM8bQ8a7_z8I5iCRbLl8I/preview"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-azzurro-600 to-blue-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-xl hover:shadow-azzurro-500/25 transition-all duration-300 inline-flex items-center space-x-3 btn-enhanced focus-enhanced"
            >
              <span>Inizia ora gratis</span>
              <div className="text-sm bg-white/30 px-3 py-1 rounded-full font-semibold">
                zero vincoli, zero stress
              </div>
            </a>
          </div>
        </div>

        {/* ========================================================================
            WRITTEN TESTIMONIALS SECTION
        ======================================================================== */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Leggi le parole di chi mi conosce
          </h3>

          <div className="relative">
            {/* Current Testimonial */}
            <div className="bg-enhanced rounded-xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto border-enhanced">
              <div className="flex items-start space-x-4 mb-6">
                                  <Quote className="h-8 w-8 text-azzurro-500 flex-shrink-0 mt-2 icon-enhanced" />
                <div className="flex-1">
                  <p className="text-lg md:text-xl text-high-contrast leading-relaxed mb-6 italic">
                    &ldquo;{writtenTestimonials[currentWritten].text}&rdquo;
                  </p>
                  
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <h4 className="font-bold text-high-contrast text-lg">
                        {writtenTestimonials[currentWritten].name}
                      </h4>
                      <p className="text-high-contrast font-semibold">
                        {writtenTestimonials[currentWritten].role}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      {renderStars(writtenTestimonials[currentWritten].rating)}
                      <span className="text-high-contrast text-sm font-semibold">
                        {writtenTestimonials[currentWritten].date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Written Navigation */}
            <button
              onClick={prevWritten}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-enhanced shadow-xl rounded-full p-3 hover:shadow-2xl transition-all duration-300 focus-enhanced"
            >
              <ChevronLeft className="h-6 w-6 text-high-contrast icon-enhanced" />
            </button>
            
            <button
              onClick={nextWritten}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-enhanced shadow-xl rounded-full p-3 hover:shadow-2xl transition-all duration-300 focus-enhanced"
            >
              <ChevronRight className="h-6 w-6 text-high-contrast icon-enhanced" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {writtenTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentWritten(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentWritten
                      ? 'bg-azzurro-600 scale-125 shadow-md'
                      : 'bg-gray-400 hover:bg-gray-500 shadow-sm'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;