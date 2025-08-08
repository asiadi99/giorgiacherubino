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
    { icon: Users, number: '50+', label: 'Clienti Trasformati', color: 'from-azzurro-500 to-blue-500' },
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
          <section id="about" className="py-24 bg-gradient-to-b from-gray-50/70 via-white to-azzurro-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 20%, rgba(236, 72, 153, 0.06) 2px, transparent 2px), radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.06) 2px, transparent 2px)`,
          backgroundSize: '120px 120px'
        }}></div>
      </div>
      
      {/* Subtle Background Shapes */}
              <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-azzurro-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-emerald-100/30 to-green-100/30 rounded-full blur-3xl"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
                      <div className="inline-flex items-center space-x-2 bg-enhanced border-enhanced rounded-full px-4 py-2 mb-6">
                          <Sparkles className="h-4 w-4 text-azzurro-500 icon-enhanced" />
            <span className="text-sm font-bold text-high-contrast">Chi Sono</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-high-contrast">
            Ciao, sono <span className="text-azzurro-600">Giorgia</span>
          </h2>
          <p className="text-xl text-high-contrast max-w-2xl mx-auto leading-relaxed">
            La tua guida verso una vita più autentica e consapevole
          </p>
        </div>

                 {/* Main Content */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          
                     {/* Image Side */}
           <div className="order-2 lg:order-1 lg:sticky lg:top-8">
             <div className="relative">
               {/* Main Image */}
               <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute -inset-3 bg-gradient-to-br from-azzurro-200/30 to-emerald-200/30 rounded-3xl blur-xl"></div>
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
              <div className="absolute -bottom-12 -right-6 bg-gradient-to-br from-white via-azzurro-50/50 to-emerald-50/50 rounded-2xl p-6 shadow-2xl border border-azzurro-200/30 max-w-sm backdrop-blur-sm">
                                  <Quote className="h-8 w-8 text-azzurro-400 mb-3 animate-pulse-soft" />
                <p className="text-lg font-semibold text-gray-800 leading-relaxed italic">
                  &ldquo;Ogni persona ha dentro di sé tutto quello che serve per fiorire&rdquo;
                </p>
                                  <div className="mt-2 text-sm text-azzurro-500 font-medium">- Giorgia</div>
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
                    ? 'text-azzurro-600 border-b-2 border-azzurro-600 bg-azzurro-50/50'
                    : 'text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300 hover:bg-gray-50/50'
                }`}
                type="button"
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
                role="tab"
                aria-selected={activeTab === 'values'}
                tabIndex={0}
              >
                I Miei Valori
              </button>
            </div>

            {/* Tab Content */}
                         <div 
               className="min-h-[500px] relative"
               role="tabpanel"
               aria-live="polite"
             >
              {activeTab === 'story' && (
                <div 
                  className="space-y-6 animate-stagger-fade-in opacity-100 transition-opacity duration-500"
                  key="story-tab"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-azzurro-100/50 shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                              <span className="w-8 h-8 bg-gradient-to-r from-azzurro-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
                        <Heart className="h-4 w-4 text-white" />
                      </span>
                      La Mia Storia
                    </h3>
                    
                                                              <div className="space-y-5">
                        {/* Introduzione */}
                        <div className="bg-gradient-to-r from-azzurro-50/50 to-emerald-50/50 rounded-xl p-5 border-l-4 border-azzurro-400">
                          <p className="text-lg text-gray-700 leading-relaxed">
                            <strong className="text-azzurro-600">Avevo 8 anni.</strong><br/>
                            Era una domenica qualsiasi...
                          </p>
                        </div>
                       
                       {/* Il momento tragico */}
                       <div className="space-y-4">
                         <p className="text-lg text-gray-700 leading-relaxed">
                           Papà era uscito in moto. Io ero a casa tranquilla, con la mia famiglia.<br/>
                           Finché non ho sentito mia madre urlare al telefono:<br/>
                           <em className="text-red-600 font-semibold">&ldquo;Perché non risponde NESSUNO di loro?&rdquo;</em>...
                         </p>
                         
                         <p className="text-lg text-gray-700 leading-relaxed">
                           Non ho capito subito.<br/>
                           Ma da lì in poi, non è tornato più niente.<br/>
                           <strong className="text-red-600">Papà non c&apos;era più.</strong>
                         </p>
                       </div>
                       
                                               {/* Le conseguenze */}
                        <div className="bg-gradient-to-r from-gray-50 to-red-50/30 rounded-xl p-5 border-l-4 border-red-300">
                          <p className="text-lg text-gray-700 leading-relaxed mb-3">
                            Fine della gioia. Inizio del vuoto.<br/>
                            Tutto ciò che conoscevo si è sgretolato in un secondo.
                          </p>
                          
                          <p className="text-lg text-gray-700 leading-relaxed">
                            A scuola vedevo enormi differenze.<br/>
                            Gli altri crescevano sereni, io affondavo nel silenzio.<br/>
                            Autostima sotto i piedi, relazioni tossiche, e un vuoto nel petto che non mi lasciava mai.
                          </p>
                        </div>
                        
                        {/* La maschera */}
                        <div className="bg-gradient-to-r from-yellow-50/50 to-orange-50/50 rounded-xl p-5 border-l-4 border-yellow-400">
                          <p className="text-lg text-gray-700 leading-relaxed">
                            Sì, sorridevo. Mi mostravo forte. Ma dentro vivevo confusione, insicurezza, e quella sensazione costante di non valere nulla.
                          </p>
                        </div>
                       
                       {/* La ricerca */}
                       <div className="space-y-4">
                         <p className="text-lg text-gray-700 leading-relaxed">
                           Per anni ho cercato di aggiustarmi da fuori...<br/>
                           Ma la verità? Stavo solo cercando nel posto sbagliato.
                         </p>
                       </div>
                       
                                               {/* La trasformazione */}
                        <div className="bg-gradient-to-r from-emerald-50/50 to-green-50/50 rounded-xl p-5 border-l-4 border-emerald-400">
                          <p className="text-lg text-gray-700 leading-relaxed mb-3">
                            <strong className="text-emerald-600">5 anni di duro lavoro su me stessa</strong>, errori e verità scomode. 
                            Ho investito oltre <strong className="text-emerald-600">60.000 euro</strong> tra corsi, terapeuti, coach e formazione costante.
                          </p>
                          
                          <p className="text-lg text-gray-700 leading-relaxed">
                            Tutto questo non per diventare &ldquo;perfetta&rdquo;, ma per diventare <strong className="text-emerald-600">libera e vera</strong>.
                          </p>
                        </div>
                        
                        {/* La conclusione */}
                        <div className="bg-gradient-to-r from-azzurro-50/50 to-blue-50/50 rounded-xl p-5 border-l-4 border-azzurro-400">
                          <p className="text-lg text-gray-700 leading-relaxed">
                            E oggi tutto questo è diventato un <strong className="text-azzurro-600">metodo unico e consolidato</strong> 
                            che puoi applicare anche tu <strong className="text-azzurro-600">fin da subito</strong>.
                          </p>
                        </div>
                     </div>
                    
                    <div className="flex items-center space-x-4 pt-6 mt-6 border-t border-gray-100">
                      <div className="flex -space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-azzurro-400 to-blue-400 rounded-full border-2 border-white flex items-center justify-center">
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
                    <div className="text-center bg-white/70 backdrop-blur-sm rounded-3xl p-12 border border-azzurro-200/30 shadow-lg relative overflow-hidden">
          {/* Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-azzurro-50/50 to-emerald-50/50 rounded-3xl"></div>
          <div className="relative">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Pronto/a a iniziare il tuo viaggio?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Ogni grande trasformazione inizia con un primo passo. 
              Prenota una chiamata conoscitiva gratuita e scopriamo insieme come posso aiutarti.
            </p>
            <a
              href="https://docs.google.com/forms/d/1rCvOWrc85UFEtRNFgWtAzJyM8bQ8a7_z8I5iCRbLl8I/preview"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-azzurro-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-azzurro-500/25 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Parliamone Insieme</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;