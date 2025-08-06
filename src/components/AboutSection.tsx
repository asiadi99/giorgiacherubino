'use client';

import { useState } from 'react';
import { Quote, Award, Users, Heart, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('story');
  
  const handleTabChange = (tab: string) => {
    console.log('Changing tab to:', tab); // Debug log
    setActiveTab(tab);
  };

  const stats = [
    { icon: Users, number: '50+', label: 'Clienti Trasformati', color: 'from-rose-500 to-pink-500' },
    { icon: Award, number: '5+', label: 'Anni di Esperienza', color: 'from-emerald-500 to-green-500' },
    { icon: Heart, number: '100%', label: 'Dedizione', color: 'from-blue-500 to-indigo-500' },
  ];

  const values = [
    {
      title: 'Autenticità',
      description: 'Ogni percorso è unico, proprio come ogni persona. Non esistono soluzioni standard.',
      icon: '🌟'
    },
    {
      title: 'Empatia',
      description: 'Ascolto profondo e comprensione sono alla base di ogni trasformazione autentica.',
      icon: '💫'
    },
    {
      title: 'Crescita',
      description: 'Il cambiamento è un processo continuo che abbracciamo insieme con curiosità.',
      icon: '🌱'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50/70 via-white to-rose-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 20%, rgba(236, 72, 153, 0.06) 2px, transparent 2px), radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.06) 2px, transparent 2px)`,
          backgroundSize: '120px 120px'
        }}></div>
      </div>
      
      {/* Subtle Background Shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-rose-100/30 to-pink-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-emerald-100/30 to-green-100/30 rounded-full blur-3xl"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-50 to-emerald-50 border border-rose-200/50 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-rose-500" />
            <span className="text-sm font-medium text-gray-700">Chi Sono</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ciao, sono <span className="bg-gradient-to-r from-rose-600 to-emerald-600 bg-clip-text text-transparent">Giorgia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            La tua guida verso una vita più autentica e consapevole
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Image Side */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <div className="relative w-full aspect-square max-w-sm mx-auto">
                <div className="absolute -inset-3 bg-gradient-to-br from-rose-200/30 to-emerald-200/30 rounded-3xl blur-xl"></div>
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/giorgia-profile.jpg"
                    alt="Giorgia Cherubino"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5"></div>
                </div>
              </div>
              
              {/* Floating Quote */}
              <div className="absolute -bottom-12 -right-6 bg-gradient-to-br from-white via-rose-50/50 to-emerald-50/50 rounded-2xl p-6 shadow-2xl border border-rose-200/30 max-w-sm backdrop-blur-sm">
                <Quote className="h-8 w-8 text-rose-500 mb-3 animate-pulse-soft" />
                <p className="text-lg font-semibold text-gray-800 leading-relaxed italic">
                  "Ogni persona ha dentro di sé tutto quello che serve per fiorire"
                </p>
                <div className="mt-2 text-sm text-rose-600 font-medium">- Giorgia</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 space-y-8">
            
            {/* Tab Navigation */}
            <div className="flex space-x-4 border-b border-gray-200 mb-6">
              <div className="text-xs text-gray-400 absolute -top-6 left-0">
                Tab attivo: {activeTab}
              </div>
              <button
                onClick={() => handleTabChange('story')}
                className={`pb-4 px-4 font-semibold transition-all duration-300 relative text-lg touch-target cursor-pointer ${
                  activeTab === 'story'
                    ? 'text-rose-600 border-b-2 border-rose-600 bg-rose-50/50'
                    : 'text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300 hover:bg-gray-50/50'
                }`}
                type="button"
                aria-pressed={activeTab === 'story'}
                role="tab"
                aria-selected={activeTab === 'story'}
                tabIndex={0}
              >
                La Mia Storia
              </button>
              <button
                onClick={() => handleTabChange('values')}
                className={`pb-4 px-4 font-semibold transition-all duration-300 relative text-lg touch-target cursor-pointer ${
                  activeTab === 'values'
                    ? 'text-emerald-600 border-b-2 border-emerald-600 bg-emerald-50/50'
                    : 'text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300 hover:bg-gray-50/50'
                }`}
                type="button"
                aria-pressed={activeTab === 'values'}
                role="tab"
                aria-selected={activeTab === 'values'}
                tabIndex={0}
              >
                I Miei Valori
              </button>
            </div>

            {/* Tab Content */}
            <div 
              className="min-h-[400px] relative"
              role="tabpanel"
              aria-live="polite"
            >
              {activeTab === 'story' && (
                <div 
                  className="space-y-6 animate-stagger-fade-in opacity-100 transition-opacity duration-500"
                  key="story-tab"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-rose-100/50 shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                        <Heart className="h-4 w-4 text-white" />
                      </span>
                      La Mia Storia
                    </h3>
                    
                    <div className="space-y-4">
                      <p className="text-xl text-gray-700 leading-relaxed">
                        <strong>Il mio percorso verso il coaching è nato da una profonda trasformazione personale.</strong>{' '}
                        Dopo anni nel mondo corporate, ho sentito il bisogno di ricercare un significato più autentico nella mia vita.
                      </p>
                      
                      <p className="text-xl text-gray-700 leading-relaxed">
                        Questa ricerca mi ha portato a scoprire il potere del coaching e della crescita personale. 
                        Ho investito anni nella mia formazione, ottenendo certificazioni riconosciute e soprattutto 
                        <em> vivendo in prima persona il processo di trasformazione</em>.
                      </p>
                      
                      <p className="text-xl text-gray-700 leading-relaxed">
                        Oggi accompagno le persone nel loro viaggio di scoperta, con la stessa passione e dedizione 
                        che hanno caratterizzato il mio percorso. <strong>Perché credo fermamente che ognuno di noi 
                        meriti di vivere una vita autentica e appagante.</strong>
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-4 pt-6 mt-6 border-t border-gray-100">
                      <div className="flex -space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full border-2 border-white flex items-center justify-center">
                          <Award className="h-5 w-5 text-white" />
                        </div>
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-400 rounded-full border-2 border-white flex items-center justify-center">
                          <Heart className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <span className="text-base text-gray-600 font-medium">Certificata ICF • Formazione continua</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'values' && (
                <div 
                  className="space-y-6 animate-stagger-fade-in opacity-100 transition-opacity duration-500"
                  key="values-tab"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-emerald-100/50 shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mr-3">
                        <Sparkles className="h-4 w-4 text-white" />
                      </span>
                      I Miei Valori
                    </h3>
                    
                    <div className="space-y-6">
                      {values.map((value, index) => (
                        <div 
                          key={index} 
                          className={`flex items-start space-x-6 p-6 rounded-xl bg-gradient-to-r from-white/90 to-gray-50/90 backdrop-blur-sm border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300 card-micro animate-stagger-fade-in delay-${(index + 1) * 100}`}
                        >
                          <div className="text-4xl flex-shrink-0 animate-pulse-soft">{value.icon}</div>
                          <div className="flex-1">
                            <h4 className="text-2xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                            <p className="text-lg text-gray-700 leading-relaxed">{value.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/70 backdrop-blur-sm rounded-3xl p-12 border border-rose-200/30 shadow-lg relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-emerald-50/50 rounded-3xl"></div>
          <div className="relative">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Pronta a iniziare il tuo viaggio?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Ogni grande trasformazione inizia con un primo passo. 
              Prenota una chiamata conoscitiva gratuita e scopriamo insieme come posso aiutarti.
            </p>
            <button
              onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-rose-500/25 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Parliamone Insieme</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;