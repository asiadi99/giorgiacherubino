'use client';

import { useState } from 'react';
import { Heart, Users, Target, Lightbulb, ArrowRight, Check, Sparkles, Clock, Star } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Heart,
    title: "Coaching Individuale",
    subtitle: "Il percorso più personalizzato",
    description: "Un viaggio su misura per te, dove ogni sessione è pensata per le tue esigenze specifiche. Scopriamo insieme il tuo potenziale autentico.",
    features: [
      { text: "Sessioni 1:1 personalizzate", highlight: true },
      { text: "Programma completamente su misura", highlight: false },
      { text: "Supporto continuo via WhatsApp", highlight: false },
      { text: "Tecniche di consapevolezza avanzate", highlight: false },
      { text: "Monitoraggio progressi settimanale", highlight: false }
    ],
    duration: "3-6 mesi",
    price: "€120",
    priceDetail: "a sessione",
    color: "from-rose-500 to-pink-500",
    bgColor: "from-rose-50 to-pink-50",
    popular: true
  },
  {
    id: 2,
    icon: Users,
    title: "Coaching di Gruppo",
    subtitle: "La forza della condivisione",
    description: "Cresci insieme ad altre persone con obiettivi simili. L'energia del gruppo amplifica la trasformazione personale.",
    features: [
      { text: "Gruppi piccoli (max 6 persone)", highlight: true },
      { text: "Dinamiche di gruppo potenti", highlight: false },
      { text: "Supporto reciproco continuo", highlight: false },
      { text: "Sessioni settimanali di 90 min", highlight: false },
      { text: "Community privata dedicata", highlight: false }
    ],
    duration: "2-4 mesi",
    price: "€60",
    priceDetail: "a sessione",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    popular: false
  },
  {
    id: 3,
    icon: Target,
    title: "Intensivo Obiettivi",
    subtitle: "Risultati in tempi rapidi",
    description: "Hai un obiettivo specifico da raggiungere? Questo percorso intensivo ti guida step by step verso il successo.",
    features: [
      { text: "Definizione obiettivi SMART", highlight: true },
      { text: "Piano d'azione dettagliato", highlight: false },
      { text: "Check-in bisettimanali", highlight: false },
      { text: "Accountability strutturata", highlight: false },
      { text: "Strumenti di monitoraggio", highlight: false }
    ],
    duration: "1-3 mesi",
    price: "€90",
    priceDetail: "a sessione",
    color: "from-emerald-500 to-green-500",
    bgColor: "from-emerald-50 to-green-50",
    popular: false
  },
  {
    id: 4,
    icon: Lightbulb,
    title: "Mindfulness Journey",
    subtitle: "La via della consapevolezza",
    description: "Sviluppa una relazione più profonda con te stesso attraverso pratiche di mindfulness e meditazione guidata.",
    features: [
      { text: "Tecniche mindfulness certificate", highlight: true },
      { text: "Meditazioni guidate personali", highlight: false },
      { text: "Esercizi pratici quotidiani", highlight: false },
      { text: "Gestione stress e ansia", highlight: false },
      { text: "Audio e materiali esclusivi", highlight: false }
    ],
    duration: "Percorso continuo",
    price: "€80",
    priceDetail: "al mese",
    color: "from-purple-500 to-indigo-500",
    bgColor: "from-purple-50 to-indigo-50",
    popular: false
  }
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(1);

  const scrollToContacts = () => {
    const element = document.getElementById('contatti');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servizi" className="py-24 bg-gradient-to-b from-slate-50/50 via-white to-violet-50/40 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-rose-200/15 to-pink-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-violet-200/15 to-indigo-200/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-200/10 to-green-200/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-50 to-emerald-50 border border-rose-200/50 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-rose-500" />
            <span className="text-sm font-medium text-gray-700">I Miei Servizi</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Percorsi di <span className="bg-gradient-to-r from-rose-600 to-emerald-600 bg-clip-text text-transparent">Trasformazione</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ogni viaggio è unico, proprio come te. Scegli il percorso che risuona di più con i tuoi obiettivi e il tuo stile.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  selectedService === service.id 
                    ? 'scale-105 shadow-2xl' 
                    : 'hover:scale-102 hover:shadow-xl'
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>Più Richiesto</span>
                    </div>
                  </div>
                )}

                <div className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-300 shadow-lg ${
                  selectedService === service.id 
                    ? 'border-rose-300 shadow-2xl shadow-rose-500/10' 
                    : 'border-gray-200/50 hover:border-rose-200 hover:shadow-xl'
                }`}>
                  {/* Subtle Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-20 rounded-2xl`}></div>
                  
                  {/* Header */}
                  <div className="relative flex items-start justify-between mb-5">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-900">{service.price}</div>
                      <div className="text-sm text-gray-600">{service.priceDetail}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-rose-600 font-medium text-base">{service.subtitle}</p>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed text-base">
                      {service.description}
                    </p>

                    {/* Duration */}
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 pt-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                            feature.highlight ? 'bg-rose-500' : 'bg-gray-300'
                          }`}>
                            <Check className={`h-3 w-3 ${feature.highlight ? 'text-white' : 'text-gray-600'}`} />
                          </div>
                          <span className={`text-base ${feature.highlight ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToContacts();
                      }}
                      className={`w-full mt-6 py-4 px-6 rounded-xl font-semibold text-base transition-all duration-300 flex items-center justify-center space-x-2 ${
                        selectedService === service.id
                          ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-lg hover:shadow-xl'
                          : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-rose-300 hover:text-rose-700'
                      }`}
                    >
                      <span>Prenota una Chiamata</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-rose-600 to-emerald-600 rounded-3xl p-12 text-center text-white">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, white 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Non Sai Quale Percorso Scegliere?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Prenota una chiamata conoscitiva gratuita di 30 minuti. 
              Parliamo dei tuoi obiettivi e troviamo insieme il percorso perfetto per te.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToContacts}
                className="bg-white text-rose-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Chiamata Gratuita</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <div className="flex items-center space-x-3 text-white/80">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm">100% senza impegno</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;