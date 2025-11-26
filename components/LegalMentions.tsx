import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const LegalMentions: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <a href="/" className="inline-flex items-center text-petrole-600 hover:text-corail-500 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </a>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-petrole-800 mb-10">Mentions Légales</h1>

        <div className="space-y-10 text-petrole-700 leading-relaxed">
          
          <section className="bg-petrole-50 p-6 rounded-xl border border-petrole-100">
            <h2 className="text-xl font-bold text-petrole-800 mb-4">1. Éditeur du site</h2>
            <p>
              Le site <strong>Serial Masseur</strong> est édité par :<br /><br />
              <strong>Nom commercial :</strong> Serial Masseur<br />
              <strong>Statut juridique :</strong> Micro-entreprise (Auto-entrepreneur)<br />
              <strong>Adresse :</strong> Lille & Métropole<br />
              <strong>Email :</strong> contact@serialmasseur.fr<br />
              <strong>Téléphone :</strong> 06 03 26 78 35<br />
              {/* Vous devrez compléter ces infos plus tard */}
              <strong>SIRET :</strong> [Numéro SIRET à compléter]<br />
              <strong>Directeur de la publication :</strong> [Votre Nom]
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-petrole-800 mb-4">2. Hébergement</h2>
            <p>
              Le site est hébergé par la société <strong>Vercel Inc.</strong><br />
              Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA<br />
              Site web : https://vercel.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-petrole-800 mb-4">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
              Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-petrole-800 mb-4">4. Données personnelles</h2>
            <p className="mb-4">
              Dans le cadre de l'utilisation du formulaire de contact, Serial Masseur peut être amené à collecter certaines données personnelles (nom, email, téléphone).
              Ces données sont utilisées uniquement pour répondre à votre demande commerciale ou de renseignements.
            </p>
            <p>
              Conformément à la loi « Informatique et Libertés » et au RGPD, vous disposez d'un droit d'accès, de modification et de suppression des données vous concernant.
              Pour exercer ce droit, vous pouvez nous contacter par email à : contact@serialmasseur.fr.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-petrole-800 mb-4">5. Cookies</h2>
            <p>
              Ce site utilise peu ou pas de cookies. D'éventuels cookies techniques peuvent être utilisés pour le bon fonctionnement de la navigation (notamment pour retenir votre choix entre la vue "Entreprise" et "Particulier").
              Aucune donnée n'est revendue à des tiers.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default LegalMentions;