import React, { useState } from 'react';
import { Send, Building2, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pourriez ajouter la logique d'envoi vers un backend ou un service comme EmailJS
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-petrole-50 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border-t-4 border-sarcelle-500 animate-in fade-in zoom-in duration-300">
          <div className="w-20 h-20 bg-sarcelle-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-sarcelle-600" />
          </div>
          <h2 className="text-2xl font-bold text-petrole-800 mb-2">Message envoyé !</h2>
          <p className="text-petrole-600 mb-8">
            Merci de m'avoir contacté. Je reviendrai vers vous dans les plus brefs délais pour échanger sur vos besoins.
          </p>
          <a href="/" className="inline-block bg-petrole-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-petrole-800 transition-colors">
            Retour à l'accueil
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="bg-petrole-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Parlons de vos besoins</h1>
          <p className="text-xl text-sarcelle-200 max-w-2xl mx-auto">
            Demandez votre devis gratuit ou posez-moi vos questions. Réponse garantie sous 24h.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-petrole-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Informations Personnelles */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-petrole-800 flex items-center border-b pb-2">
                  <User className="w-5 h-5 mr-2 text-corail-500" />
                  Vos Coordonnées
                </h3>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-petrole-700 mb-1">Nom complet *</label>
                  <input required type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-corail-500 focus:border-transparent outline-none transition-all" placeholder="Jean Dupont" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-petrole-700 mb-1">Email professionnel *</label>
                  <input required type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-corail-500 focus:border-transparent outline-none transition-all" placeholder="jean@entreprise.com" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-petrole-700 mb-1">Téléphone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-corail-500 focus:border-transparent outline-none transition-all" placeholder="06 12 34 56 78" />
                </div>
              </div>

              {/* Informations Entreprise */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-petrole-800 flex items-center border-b pb-2">
                  <Building2 className="w-5 h-5 mr-2 text-corail-500" />
                  Votre Entreprise
                </h3>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-petrole-700 mb-1">Nom de l'entreprise</label>
                  <input type="text" id="company" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-corail-500 focus:border-transparent outline-none transition-all" placeholder="Ma Société" />
                </div>

                <div>
                  <label htmlFor="employees" className="block text-sm font-medium text-petrole-700 mb-1">Nombre de collaborateurs à masser (est.)</label>
                  <select id="employees" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-corail-500 focus:border-transparent outline-none transition-all bg-white">
                    <option value="">Sélectionnez une option</option>
                    <option value="1-5">1 à 5 personnes</option>
                    <option value="5-10">5 à 10 personnes</option>
                    <option value="10-20">10 à 20 personnes</option>
                    <option value="20+">Plus de 20 personnes</option>
                    <option value="event">Événementiel / Ponctuel</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-petrole-800 flex items-center border-b pb-2">
                <MessageSquare className="w-5 h-5 mr-2 text-corail-500" />
                Votre Projet
              </h3>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-petrole-700 mb-1">Message ou précisions *</label>
                <textarea required id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-corail-500 focus:border-transparent outline-none transition-all" placeholder="Bonjour, nous souhaiterions organiser une session de bien-être pour nos équipes..."></textarea>
              </div>
            </div>

            <div className="pt-4">
              <button type="submit" className="w-full md:w-auto bg-corail-500 hover:bg-corail-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center md:justify-start gap-3">
                <Send className="w-5 h-5" />
                Envoyer ma demande
              </button>
              <p className="mt-4 text-sm text-gray-500 text-center md:text-left">
                * Champs obligatoires. Vos données restent confidentielles.
              </p>
            </div>

          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;