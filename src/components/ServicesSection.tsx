'use client';

import { useState } from 'react';
import { Heart, Users, Target, Lightbulb, ArrowRight, Check, Sparkles, Clock, Star } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Target,
    title: "Pacchetto Completo",
    subtitle: "Il percorso definitivo",
    description: "Un programma completo che include 12 sessioni individuali, video corso esclusivo e bonus speciali che scoprirai durante la chiamata.",
    features: [
      { text: "12 sessioni individuali personalizzate", highlight: true },
      { text: "Video corso esclusivo", highlight: false },
      { text: "Bonus speciali (scopri in call)", highlight: false },
      { text: "Supporto continuo completo", highlight: false },
      { text: "Percorso completo di trasformazione", highlight: false }
    ],
    duration: "6-8 mesi",
    price: "Su richiesta",
    priceDetail: "prezzo personalizzato",
    color: "from-rose-500 to-pink-500",
    bgColor: "from-rose-50 to-pink-50",
    popular: true
  },
  {
    id: 2,
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
    color: "from-azzurro-500 to-blue-500",
    bgColor: "from-azzurro-50 to-blue-50",
    popular: false
  },
  {
    id: 3,
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
    price: "€90",
    priceDetail: "a sessione",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    popular: false
  },
  {
    id: 4,
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
    id: 5,
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

  return (
    <section id="servizi" className="py-24 bg-gradient-to-b from-slate-50/50 via-white to-violet-50/40 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-azzurro-200/15 to-blue-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-violet-200/15 to-indigo-200/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-200/10 to-green-200/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
                      <div className="inline-flex items-center space-x-2 bg-enhanced border-enhanced rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-azzurro-500 icon-enhanced" />
            <span className="text-sm font-bold text-high-contrast">I Miei Servizi</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-high-contrast">
            Percorsi di <span className="text-azzurro-600">Trasformazione</span>
          </h2>
                     <p className="text-xl text-high-contrast max-w-2xl mx-auto leading-relaxed">
             Ogni viaggio è unico, indipendentemente dal genere o dall&apos;età. Scegli il percorso che risuona di più con i tuoi obiettivi e il tuo stile.
           </p>
        </div>

        {/* Featured Service - Pacchetto Completo */}
        <div className="mb-16">
          <div className="relative group cursor-pointer transition-all duration-500 scale-105 shadow-2xl">
            {/* Popular Badge */}
                         <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
               <div className="bg-rose-600 text-white px-6 py-3 rounded-full text-lg font-bold flex items-center space-x-2 shadow-lg">
                 <Star className="h-5 w-5 icon-white-enhanced" />
                 <span>Pacchetto Principale</span>
               </div>
             </div>

            <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 border-2 border-rose-300 shadow-2xl shadow-rose-500/20">
              {/* Subtle Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-pink-50 opacity-30 rounded-3xl"></div>
              
              {/* Header */}
              <div className="relative flex items-start justify-between mb-6">
                                 <div className="w-16 h-16 rounded-2xl bg-rose-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                   <Target className="h-8 w-8 text-white icon-white-enhanced" />
                 </div>
                 <div className="text-right">
                   <div className="text-2xl font-bold text-high-contrast">Su richiesta</div>
                   <div className="text-base text-high-contrast">prezzo personalizzato</div>
                 </div>
              </div>

              {/* Content */}
              <div className="relative space-y-5">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Pacchetto Completo</h3>
                  <p className="text-rose-600 font-semibold text-lg">Il percorso definitivo</p>
                </div>
                
                                 <p className="text-high-contrast leading-relaxed text-lg">
                   Un programma completo che include 12 sessioni individuali, video corso esclusivo e bonus speciali che scoprirai durante la chiamata.
                 </p>

                 {/* Duration */}
                 <div className="flex items-center space-x-2 text-base text-high-contrast">
                   <Clock className="h-5 w-5 icon-enhanced" />
                   <span>6-8 mesi</span>
                 </div>

                {/* Features */}
                <div className="space-y-4 pt-4">
                                     <div className="flex items-center space-x-3">
                     <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-rose-600 shadow-md">
                       <Check className="h-4 w-4 text-white icon-white-enhanced" />
                     </div>
                     <span className="text-lg font-bold text-high-contrast">12 sessioni individuali personalizzate</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-gray-400 shadow-md">
                       <Check className="h-4 w-4 text-white icon-white-enhanced" />
                     </div>
                     <span className="text-lg text-high-contrast">Video corso esclusivo</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-gray-400 shadow-md">
                       <Check className="h-4 w-4 text-white icon-white-enhanced" />
                     </div>
                     <span className="text-lg text-high-contrast">Bonus speciali (scopri in call)</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-gray-400 shadow-md">
                       <Check className="h-4 w-4 text-white icon-white-enhanced" />
                     </div>
                     <span className="text-lg text-high-contrast">Supporto continuo completo</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-gray-400 shadow-md">
                       <Check className="h-4 w-4 text-white icon-white-enhanced" />
                     </div>
                     <span className="text-lg text-high-contrast">Percorso completo di trasformazione</span>
                   </div>
                </div>

                {/* CTA */}
                                 <a
                   href="https://docs.google.com/forms/d/1rCvOWrc85UFEtRNFgWtAzJyM8bQ8a7_z8I5iCRbLl8I/preview"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full mt-8 py-5 px-8 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 bg-rose-600 text-white shadow-xl hover:shadow-2xl hover:scale-105 btn-enhanced focus-enhanced"
                 >
                   <span>Scopri il Prezzo Personalizzato</span>
                   <ArrowRight className="h-6 w-6 icon-white-enhanced" />
                 </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {services.slice(1).map((service) => {
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
                    <div className="bg-azzurro-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>Più Richiesto</span>
                    </div>
                  </div>
                )}

                <div className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-300 shadow-lg ${
                  selectedService === service.id 
                                    ? 'border-azzurro-300 shadow-2xl shadow-azzurro-500/10'
                : 'border-gray-200/50 hover:border-azzurro-200 hover:shadow-xl'
                }`}>
                  {/* Subtle Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-20 rounded-2xl`}></div>
                  
                  {/* Header */}
                  <div className="relative flex items-start justify-between mb-5">
                    <div className={`w-14 h-14 rounded-xl bg-${service.color.split(' ')[1]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                                     <div className="text-right">
                   <div className="text-xl font-bold text-high-contrast">{service.price}</div>
                   <div className="text-sm text-high-contrast font-semibold">{service.priceDetail}</div>
                 </div>
                  </div>

                  {/* Content */}
                  <div className="relative space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-azzurro-600 font-medium text-base">{service.subtitle}</p>
                    </div>
                    
                                         <p className="text-high-contrast leading-relaxed text-base">
                       {service.description}
                     </p>

                     {/* Duration */}
                     <div className="flex items-center space-x-2 text-sm text-high-contrast">
                       <Clock className="h-4 w-4 icon-enhanced" />
                       <span>{service.duration}</span>
                     </div>

                    {/* Features */}
                    <div className="space-y-3 pt-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                            feature.highlight ? 'bg-azzurro-500' : 'bg-gray-300'
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
                    <a
                      href="https://docs.google.com/forms/d/1rCvOWrc85UFEtRNFgWtAzJyM8bQ8a7_z8I5iCRbLl8I/preview"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full mt-6 py-4 px-6 rounded-xl font-semibold text-base transition-all duration-300 flex items-center justify-center space-x-2 ${
                        selectedService === service.id
                                          ? 'bg-azzurro-600 text-white shadow-lg hover:shadow-xl'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <span>Prenota una Chiamata</span>
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative overflow-hidden bg-azzurro-600 rounded-3xl p-12 text-center text-white">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, white 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white-high-contrast">
              Non Sai Quale Percorso Scegliere?
            </h3>
            <p className="text-black mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              Prenota una <strong className="text-black">chiamata conoscitiva gratuita di 30 minuti</strong>.
              <br />
              <span className="text-black">Parliamo dei tuoi obiettivi e troviamo insieme il percorso perfetto per te.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://docs.google.com/forms/d/1rCvOWrc85UFEtRNFgWtAzJyM8bQ8a7_z8I5iCRbLl8I/preview"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-azzurro-600 to-blue-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-xl hover:shadow-azzurro-500/25 transition-all duration-300 inline-flex items-center space-x-2 btn-enhanced focus-enhanced"
              >
                <span>Inizia ora gratis</span>
                <div className="text-sm bg-white/30 px-3 py-1 rounded-full font-semibold">
                  zero vincoli, zero stress
                </div>
              </a>
              
              <div className="flex items-center space-x-4 text-white">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-white/40 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                    <span className="text-black font-bold text-lg">✓</span>
                  </div>
                  <div className="w-10 h-10 bg-white/40 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                    <span className="text-black font-bold text-lg">✓</span>
                  </div>
                  <div className="w-10 h-10 bg-white/40 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                    <span className="text-black font-bold text-lg">✓</span>
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold">100% senza impegno</div>
                  <div className="text-sm opacity-90">Libero di decidere dopo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;