import React from 'react';
import { Feather, HandMetal, Zap } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <section id="method" className="py-24 bg-sable-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-petrole-800 mb-6">Le concept <span className="text-corail-500">Serial Massage</span></h2>
          <p className="text-lg text-petrole-600">
            Bien plus qu'un simple massage assis, c'est un protocole complet conçu pour l'entreprise.
            Il allie le confort de l'équipement à une technique manuelle experte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border-b-4 border-sarcelle-400 hover:shadow-xl transition-all hover:-translate-y-1 group">
            <div className="w-16 h-16 bg-sarcelle-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sarcelle-500 transition-colors">
              <Feather className="w-8 h-8 text-sarcelle-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-petrole-800 mb-3">1. Lâcher-prise</h3>
            <p className="text-petrole-600 leading-relaxed">
              Tout commence par l'installation. La chaise prend en charge votre corps. Le soulagement articulaire et musculaire est instantané. L'esprit se calme, prêt à recevoir le soin.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border-b-4 border-corail-500 hover:shadow-xl transition-all hover:-translate-y-1 group relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-corail-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Cœur du soin</div>
            <div className="w-16 h-16 bg-corail-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-corail-500 transition-colors">
              <HandMetal className="w-8 h-8 text-corail-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-petrole-800 mb-3">2. Détente Profonde</h3>
            <p className="text-petrole-600 leading-relaxed">
              J'applique les techniques du "Serial Massage" sur les zones de tension accumulée : <span className="font-semibold text-corail-600">Dos, Nuque, Bras, Mains et Tête</span>. Un enchaînement précis de pressions et d'étirements.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border-b-4 border-petrole-600 hover:shadow-xl transition-all hover:-translate-y-1 group">
            <div className="w-16 h-16 bg-petrole-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-petrole-600 transition-colors">
              <Zap className="w-8 h-8 text-petrole-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-petrole-800 mb-3">3. Revitalisation</h3>
            <p className="text-petrole-600 leading-relaxed">
              On va vous réveiller. Le but : finir sur un réveil dynamique pour passer le reste de la journée à pleine productivité.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Methodology;