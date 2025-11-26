import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onNavigateContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigateContact }) => {
  return (
    <section id="concept" className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-sarcelle-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: The Chair */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px] aspect-[3/4] flex items-center justify-center">
              {/* Decorative Circle Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] bg-petrole-100/50 rounded-full blur-3xl -z-10"></div>
              
              {/* Chair Image - Static & Fully Visible */}
              <img 
                src="https://69233b7bb1e1e30f943817cf--endearing-melba-13c953.netlify.app/chaise_ergonomique.png" 
                alt="Chaise de massage ergonomique Serial Masseur"
                className="w-full h-auto max-h-full object-contain drop-shadow-2xl z-10 relative"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; 
                  // Fallback visual if image is missing
                  target.style.display = 'none';
                  target.parentElement?.classList.add('bg-gray-200', 'rounded-lg', 'text-gray-500', 'flex', 'items-center', 'justify-center');
                  if(target.parentElement) target.parentElement.innerText = 'Image "chaise_ergonomique.png" introuvable';
                }}
              />
              
              {/* Floating Badge */}
              <div className="absolute top-10 right-0 md:-right-10 bg-white p-4 rounded-xl shadow-xl border-l-4 border-corail-500 z-20">
                <p className="text-petrole-800 font-bold text-sm">Chaise d'Allègement Posturale</p>
                <p className="text-xs text-petrole-600">Soulagement immédiat</p>
              </div>
            </div>
          </div>

          {/* Right Column: The Value Prop */}
          <div className="order-1 lg:order-2 space-y-8 text-center lg:text-left">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-corail-100 text-corail-700 text-xs font-bold tracking-wider uppercase mb-4">
                Spécial Entreprise
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-petrole-800 leading-tight mb-4">
                Le <span className="text-corail-500">Serial Massage</span>
                <br />
                L'atout bien-être de votre entreprise.
              </h1>
              <p className="text-lg md:text-xl text-petrole-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Une pause revitalisante sur chaise ergonomique. En seulement 15 minutes, libérez vos équipes du poids du stress et boostez la productivité.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="/contact" 
                onClick={(e) => { e.preventDefault(); onNavigateContact(); }}
                className="bg-petrole-700 hover:bg-petrole-800 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-petrole-200/50 flex items-center justify-center"
              >
                Demander un devis
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#delestage" className="bg-white hover:bg-sable-50 text-petrole-700 border-2 border-petrole-200 px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center">
                Découvrir la méthode
              </a>
            </div>

            <div className="pt-6 border-t border-petrole-100 flex items-center justify-center lg:justify-start space-x-8 text-petrole-500 text-sm font-medium">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-corail-500 mr-2"></div>
                Lille & Métropole
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-corail-500 mr-2"></div>
                Sur site
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-corail-500 mr-2"></div>
                Certifié
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;