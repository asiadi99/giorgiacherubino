'use client';

import Image from 'next/image';
import { Heart, Lightbulb, Target, Users } from 'lucide-react';

const milestones = [
  {
    icon: Heart,
    title: "La Scoperta",
    description: "Il mio percorso è iniziato con una profonda ricerca interiore che mi ha portato a comprendere l'importanza della consapevolezza."
  },
  {
    icon: Lightbulb,
    title: "La Formazione",
    description: "Ho studiato e mi sono formata nelle migliori tecniche di coaching e crescita personale per aiutare gli altri."
  },
  {
    icon: Users,
    title: "La Missione",
    description: "Oggi accompagno le persone nel loro viaggio di trasformazione, aiutandole a vivere con autenticità."
  },
  {
    icon: Target,
    title: "Il Futuro",
    description: "Continuo a crescere e imparare, perché ogni persona che incontro mi insegna qualcosa di nuovo."
  }
];

const StorySection = () => {
  return (
    <section id="storia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            La Mia <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Storia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            In poche righe, il percorso che mi ha portato a diventare la persona e la professionista che sono oggi.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/giorgia-profile.jpg"
                  alt="Giorgia Cherubino"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-accent-400 to-secondary-400 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Story Text */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-primary-600">La mia storia voglio che sia:</strong><br/>
                <strong className="text-primary-600">Avevo 8 anni.</strong><br/>
                Era una domenica qualsiasi...
              </p>
              
              <p>
                Papà era uscito in moto. Io ero a casa tranquilla, con la mia famiglia.<br/>
                Finché non ho sentito mia madre urlare al telefono:<br/>
                <em>&ldquo;Perché non risponde NESSUNO di loro?&rdquo;</em>...
              </p>
              
              <p>
                Non ho capito subito.<br/>
                Ma da lì in poi, non è tornato più niente.<br/>
                <strong className="text-primary-600">Papà non c&apos;era più.</strong>
              </p>
              
              <p>
                Fine della gioia. Inizio del vuoto.<br/>
                Tutto ciò che conoscevo si è sgretolato in un secondo.
              </p>
              
              <p>
                A scuola vedevo enormi differenze.<br/>
                Gli altri crescevano sereni, io affondavo nel silenzio.<br/>
                Autostima sotto i piedi, relazioni tossiche, e un vuoto nel petto che non mi lasciava mai.
              </p>
              
              <p>
                Sì, sorridevo. Mi mostravo forte. Ma dentro vivevo confusione, insicurezza, e quella sensazione costante di non valere nulla.
              </p>
              
              <p>
                Per anni ho cercato di aggiustarmi da fuori...<br/>
                Ma la verità? Stavo solo cercando nel posto sbagliato.
              </p>
              
              <p>
                <strong className="text-accent-600">5 anni di duro lavoro su me stessa</strong>, errori e verità scomode. 
                Ho investito oltre <strong className="text-primary-600">60.000 euro</strong> tra corsi, terapeuti, coach e formazione costante.
              </p>
              
              <p>
                Tutto questo non per diventare &ldquo;perfetta&rdquo;, ma per diventare <strong className="text-accent-600">libera e vera</strong>.
              </p>
              
              <p>
                E oggi tutto questo è diventato un <strong className="text-primary-600">metodo unico e consolidato</strong> 
                che puoi applicare anche tu <strong className="text-accent-600">fin da subito</strong>.
              </p>
            </div>

            {/* Quote */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary-500">
              <p className="text-lg italic text-gray-700 mb-4">
                &ldquo;La vera trasformazione inizia quando smetti di cercare di essere qualcun altro e inizi a essere 
                completamente te stesso.&rdquo;
              </p>
              <p className="text-primary-600 font-semibold">- Giorgia Cherubino</p>
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => {
            const IconComponent = milestone.icon;
            return (
              <div
                key={index}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <IconComponent className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
              </div>
            );
          })}
        </div>

        {/* Values Section */}
        <div className="mt-16 bg-subtle-blue rounded-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">I Miei Valori</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg bg-white border border-gray-100 hover:shadow-sm transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-primary-600 mb-2">Autenticità</h4>
              <p className="text-gray-600">Essere genuini e veri in ogni momento del nostro percorso insieme.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white border border-gray-100 hover:shadow-sm transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-accent-600 mb-2">Crescita</h4>
              <p className="text-gray-600">Ogni giorno è un&apos;opportunità per imparare e migliorare se stessi.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white border border-gray-100 hover:shadow-sm transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-secondary-600 mb-2">Compassione</h4>
              <p className="text-gray-600">Accogliere ogni persona con gentilezza e comprensione profonda.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;