import React, { Suspense } from 'react';
import { ArrowDown, CheckCircle2, Loader2 } from 'lucide-react';
import { BodyPart } from '../types';
import ChairModel from './ChairModel';

const AnatomySection: React.FC = () => {
  const bodyParts = [
    { name: BodyPart.NECK, desc: "Relâchement des tensions cervicales" },
    { name: BodyPart.ARMS, desc: "Repos total des épaules jusqu'aux mains" },
    { name: BodyPart.BACK, desc: "Décompression de la colonne vertébrale" },
    { name: BodyPart.GLUTES, desc: "Assise confortable, sans pression" },
    { name: BodyPart.KNEES, desc: "Position ergonomique idéale" }
  ];

  return (
    <section id="chair" className="py-20 bg-petrole-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">L'Ergonomie au service de la Détente</h2>
          <p className="text-sarcelle-200 text-lg max-w-2xl mx-auto">
            Ma chaise ergonomique est conçue pour une mission précise : soulager 100% du poids de votre corps. C'est le premier pas vers le bien-être.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Explanation */}
          <div className="space-y-8 order-2 md:order-1" id="delestage">
            <div className="bg-petrole-800/50 p-8 rounded-2xl border border-petrole-700 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-corail-400 mb-4 flex items-center">
                <ArrowDown className="mr-3" />
                Délestage complet
              </h3>
              <p className="text-sable-100 leading-relaxed">
                Elle élimine les tensions gravitationnelles. Votre corps ne porte plus rien, il se laisse porter.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">Zones soulagées instantanément :</h4>
              {bodyParts.map((part, index) => (
                <div key={index} className="flex items-center p-4 bg-petrole-800 rounded-lg hover:bg-petrole-700 transition-colors border-l-4 border-sarcelle-500">
                  <CheckCircle2 className="text-sarcelle-400 mr-4 w-6 h-6 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-white block">{part.name}</span>
                    <span className="text-sm text-sable-200">{part.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual representation - 3D Model */}
          <div className="relative h-full min-h-[500px] flex items-center justify-center order-1 md:order-2">
             <div className="relative w-full h-full">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-corail-500/10 to-sarcelle-500/10 rounded-full blur-3xl transform scale-75 pointer-events-none"></div>
                
                {/* 3D Component with Fallback */}
                <Suspense fallback={
                  <div className="flex flex-col items-center justify-center h-full text-sarcelle-200">
                    <Loader2 className="w-10 h-10 animate-spin mb-4" />
                    <p>Chargement du modèle 3D...</p>
                  </div>
                }>
                  <ChairModel />
                </Suspense>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnatomySection;