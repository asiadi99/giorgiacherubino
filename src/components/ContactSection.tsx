'use client';

import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, Instagram } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contatti" className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-azzurro-300/10 to-blue-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-emerald-300/10 to-green-300/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.03)_2px,transparent_2px),radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.03)_2px,transparent_2px)] bg-[length:100px_100px]"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            Inizia il Tuo <span className="bg-gradient-to-r from-azzurro-400 to-emerald-400 bg-clip-text text-transparent">Percorso</span>
          </h2>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
            Pronto a trasformare la tua vita? Scrivimi per una consulenza gratuita e scopriamo insieme 
            quale percorso è più adatto a te.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">Scrivimi un Messaggio</h3>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Compila il modulo e ti risponderò entro 24 ore. La prima consulenza è sempre gratuita.
              </p>
            </div>

            {isSubmitted && (
              <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-green-400 font-semibold">Messaggio inviato con successo!</p>
                  <p className="text-green-300 text-sm">Ti risponderò al più presto.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-white mb-3">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-azzurro-400 focus:border-transparent transition-all duration-300 text-lg"
                  placeholder="Il tuo nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-white mb-3">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-azzurro-400 focus:border-transparent transition-all duration-300 text-lg"
                  placeholder="la.tua@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-semibold text-white mb-3">
                  Messaggio *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-azzurro-400 focus:border-transparent transition-all duration-300 resize-none text-lg"
                  placeholder="Raccontami di te e dei tuoi obiettivi. Cosa ti ha portato qui? Quali sfide stai affrontando? Come posso aiutarti?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-azzurro-600 to-blue-600 text-white py-5 px-8 rounded-xl font-bold text-xl hover:shadow-lg hover:shadow-azzurro-500/25 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Invio in corso...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Invia Messaggio</span>
                  </>
                )}
              </button>
            </form>

            <p className="text-lg text-white/70">
              * Campi obbligatori. I tuoi dati saranno trattati nel rispetto della privacy.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">Altri Modi per Contattarmi</h3>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Scegli il canale che preferisci per iniziare la nostra conversazione.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <a
                href="mailto:giorgiacherubinocoach@gmail.com"
                className="flex items-center space-x-6 p-8 bg-white/15 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 group border border-white/20"
              >
                <div className="bg-gradient-to-r from-azzurro-600 to-blue-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white">Email</h4>
                  <p className="text-white/90 text-lg">giorgiacherubinocoach@gmail.com</p>
                  <p className="text-white/70 text-base">Risposta entro 24 ore</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/giorgia.cherubino"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-6 p-8 bg-white/15 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 group border border-white/20"
              >
                <div className="bg-gradient-to-r from-azzurro-600 to-purple-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white">Instagram</h4>
                  <p className="text-white/90 text-lg">@giorgia.cherubino</p>
                  <p className="text-white/70 text-base">Seguimi per contenuti quotidiani</p>
                </div>
              </a>

              <div className="flex items-center space-x-6 p-8 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 rounded-xl">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white">Sessioni</h4>
                  <p className="text-white/90 text-lg">Online e in presenza</p>
                  <p className="text-white/70 text-base">Flessibilità massima per te</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-azzurro-600/20 to-emerald-600/20 rounded-2xl p-8 border border-white/30 backdrop-blur-sm">
              <h4 className="text-2xl font-bold mb-4 text-white">Consulenza Gratuita</h4>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Prenota una chiamata di 30 minuti per capire se possiamo lavorare insieme e quale percorso 
                è più adatto ai tuoi obiettivi.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-azzurro-500/20 text-azzurro-300 px-4 py-2 rounded-full text-base font-medium">
                  ✓ Nessun impegno
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-base font-medium">
                  ✓ Consigli personalizzati
                </span>
                <span className="bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full text-base font-medium">
                  ✓ Totalmente gratuita
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;