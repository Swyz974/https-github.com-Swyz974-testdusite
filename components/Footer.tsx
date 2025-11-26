import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigateContact?: () => void;
  onNavigateLegal?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateContact, onNavigateLegal }) => {
  return (
    <footer id="contact" className="bg-petrole-900 text-sable-100 border-t border-petrole-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold tracking-tight mb-4 text-white">
              SERIAL <span className="text-corail-500">MASSEUR</span>
            </h3>
            <p className="text-petrole-200 mb-6 max-w-sm">
              Spécialiste du massage assis en entreprise sur la métropole Lilloise.
              Reposez en paix, au travail.
            </p>
            <a 
              href="/contact"
              onClick={(e) => {
                if(onNavigateContact) {
                   e.preventDefault();
                   onNavigateContact();
                }
              }}
              className="inline-block bg-corail-500 hover:bg-corail-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Contacter maintenant
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://wa.me/33603267835" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center group hover:bg-petrole-800 p-2 -ml-2 rounded-lg transition-all"
                  title="Envoyer un message sur WhatsApp"
                >
                  <Phone className="w-5 h-5 text-corail-500 mr-3 flex-shrink-0 group-hover:text-corail-400" />
                  <div className="flex flex-col">
                    <span className="font-semibold group-hover:text-white transition-colors">06 03 26 78 35</span>
                    <span className="text-xs text-sarcelle-300 group-hover:text-sarcelle-200 transition-colors">Joignable sur WhatsApp</span>
                  </div>
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-corail-500 mr-3 flex-shrink-0" />
                <a href="mailto:contact@serialmasseur.fr" className="hover:text-corail-400 transition-colors">contact@serialmasseur.fr</a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 text-corail-500 mr-3 flex-shrink-0" />
                <span>Lille & Métropole</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-petrole-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-petrole-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Serial Masseur. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0 space-x-4">
             <button 
               onClick={() => onNavigateLegal && onNavigateLegal()} 
               className="hover:text-corail-500 transition-colors"
             >
               Mentions légales
             </button>
             <a href="#" className="hover:text-corail-500 transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;