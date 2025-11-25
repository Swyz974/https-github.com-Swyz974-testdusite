import React from 'react';
import { Home, Calendar, Star, Phone, Armchair, BedDouble } from 'lucide-react';

const IndividualSection: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section Individual */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-corail-50 via-white to-sarcelle-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text */}
            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-sarcelle-100 text-sarcelle-700 text-xs font-bold tracking-wider uppercase mb-4">
                  Pour les Particuliers
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-petrole-800 leading-tight mb-4">
                  Le Bien-être <br />
                  <span className="text-corail-500">à Domicile</span>
                </h1>
                <p className="text-lg md:text-xl text-petrole-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Profitez d'un moment de détente sur-mesure sans bouger de chez vous. J'apporte tout le matériel nécessaire pour une séance adaptée à vos envies.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="https://wa.me/33603267835" target="_blank" rel="noopener noreferrer" className="bg-corail-500 hover:bg-corail-600 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-corail-200/50 flex items-center justify-center">
                  <Phone className="mr-2 w-5 h-5" />
                  Réserver ma séance
                </a>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-left">
                <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm border border-petrole-100">
                    <Home className="text-corail-500 w-5 h-5" />
                    <span className="text-sm font-medium text-petrole-700">À Domicile</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm border border-petrole-100">
                    <Calendar className="text-corail-500 w-5 h-5" />
                    <span className="text-sm font-medium text-petrole-700">Sur RDV</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm border border-petrole-100">
                    <Star className="text-corail-500 w-5 h-5" />
                    <span className="text-sm font-medium text-petrole-700">Matériel Pro</span>
                </div>
              </div>
            </div>

            {/* Right: Service Selection Cards */}
            <div className="order-1 lg:order-2 flex flex-col gap-6">
               <div className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-corail-500 hover:transform hover:scale-105 transition-all cursor-default">
                  <div className="flex items-start justify-between mb-2">
                    <div className="bg-corail-100 p-3 rounded-xl">
                      <BedDouble className="w-8 h-8 text-corail-600" />
                    </div>
                    <span className="bg-petrole-50 text-petrole-700 text-xs font-bold px-3 py-1 rounded-full">Relaxation Profonde</span>
                  </div>
                  <h3 className="text-xl font-bold text-petrole-800 mb-2">Massage sur Table</h3>
                  <p className="text-petrole-600 text-sm">
                    Une détente absolue de la tête aux pieds. J'installe ma table de massage professionnelle directement chez vous pour une évasion totale.
                  </p>
               </div>

               <div className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-sarcelle-500 hover:transform hover:scale-105 transition-all cursor-default">
                  <div className="flex items-start justify-between mb-2">
                    <div className="bg-sarcelle-100 p-3 rounded-xl">
                      <Armchair className="w-8 h-8 text-sarcelle-600" />
                    </div>
                    <span className="bg-petrole-50 text-petrole-700 text-xs font-bold px-3 py-1 rounded-full">Revitalisation</span>
                  </div>
                  <h3 className="text-xl font-bold text-petrole-800 mb-2">Massage Assis</h3>
                  <p className="text-petrole-600 text-sm">
                    Idéal pour une pause énergisante. Pratiqué sur ma chaise ergonomique, il soulage le dos et la nuque sans huile et en restant habillé.
                  </p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-petrole-800 mb-4">Pourquoi choisir le massage à domicile ?</h2>
                <div className="w-20 h-1 bg-corail-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-petrole-50 p-8 rounded-2xl border border-petrole-100 hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-corail-500 font-bold text-xl">1</div>
                    <h3 className="text-xl font-bold text-petrole-800 mb-3">Zéro contrainte</h3>
                    <p className="text-petrole-600">Pas de trajet, pas de stress, pas de garde d'enfants à organiser. Je viens avec tout le matériel nécessaire.</p>
                </div>
                <div className="bg-petrole-50 p-8 rounded-2xl border border-petrole-100 hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-corail-500 font-bold text-xl">2</div>
                    <h3 className="text-xl font-bold text-petrole-800 mb-3">Confort absolu</h3>
                    <p className="text-petrole-600">Prolongez les bienfaits du massage en restant tranquillement chez vous après la séance. </p>
                </div>
                <div className="bg-petrole-50 p-8 rounded-2xl border border-petrole-100 hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-corail-500 font-bold text-xl">3</div>
                    <h3 className="text-xl font-bold text-petrole-800 mb-3">Matériel Complet</h3>
                    <p className="text-petrole-600">Que vous choisissiez la table ou la chaise, j'apporte l'équipement professionnel adapté à votre besoin.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default IndividualSection;