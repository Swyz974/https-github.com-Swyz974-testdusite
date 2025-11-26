import React from 'react';

const LegalMentions: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-petrole-800 mb-8 border-b border-petrole-200 pb-4">
          Mentions Légales
        </h1>

        <div className="space-y-8 text-petrole-700 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-petrole-800 mb-3">1. Identification de l'Éditeur du Site</h2>
            <p>
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site <strong>serialmasseur.fr</strong> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Propriétaire et Éditeur :</strong> Monsieur Samuel SADON</li>
              <li><strong>Statut Juridique :</strong> Micro-entreprise / Entrepreneur Individuel (EI)</li>
              <li><strong>Adresse du Siège Social :</strong> 34 rue Montaigne, 59000 Lille, France</li>
              <li><strong>Numéro SIREN :</strong> 910 130 749</li>
              <li><strong>Numéro SIRET :</strong> 910 130 749 00013</li>
              <li><strong>Immatriculation au RCS :</strong> LILLE MÉTROPOLE</li>
              <li><strong>Téléphone :</strong> 06 03 26 78 35</li>
              <li><strong>Email :</strong> contact@serialmasseur.fr</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-petrole-800 mb-3">2. Activité</h2>
            <p>
              L'entreprise individuelle <strong>Serial Masseur</strong> a pour objet social la prestation de massage Amma assis, principalement à destination des entreprises (B2B) et des particuliers, dans un but de bien-être et de relaxation (code APE correspondant aux activités de santé humaine non classées ailleurs ou services personnels). Ces prestations ne s'apparentent à aucune pratique médicale ou paramédicale occidentale.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-petrole-800 mb-3">3. Directeur de la Publication</h2>
            <p>
              Le Directeur de la publication est <strong>Monsieur Samuel SADON</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-petrole-800 mb-3">4. Identification de l'Hébergeur du Site</h2>
            <p>
              Le site est hébergé par la société <strong>Vercel Inc.</strong>
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
              <li><strong>Site Web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-corail-500 hover:underline">https://vercel.com/</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-petrole-800 mb-3">5. Propriété Intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p className="mt-2">
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Monsieur Samuel SADON. Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-petrole-800 mb-3">6. Données Personnelles (RGPD)</h2>
            <p>
              En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995 (RGPD).
            </p>
            <p className="mt-2">
              À l'occasion de l'utilisation du site <strong>serialmasseur.fr</strong>, et notamment via le formulaire de contact, des données personnelles peuvent être recueillies (Nom, Email, Téléphone, Entreprise). Ces données sont collectées uniquement dans le but de traiter la demande de devis ou de contact de l'utilisateur. Le responsable du traitement est Monsieur Samuel SADON.
            </p>
            <p className="mt-2">
              Aucune information personnelle de l'utilisateur du site n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers.
            </p>
            <p className="mt-2">
              Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, tout utilisateur dispose d'un droit d'accès, de rectification et d'opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée à l'adresse email : <strong>contact@serialmasseur.fr</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-petrole-800 mb-3">7. Cookies</h2>
            <p>
              La navigation sur le site <strong>serialmasseur.fr</strong> est susceptible de provoquer l'installation de cookie(s) sur l'ordinateur de l'utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l'identification de l'utilisateur, mais qui enregistre des informations relatives à la navigation d'un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.
            </p>
            <p className="mt-2">
              Le refus d'installation d'un cookie peut entraîner l'impossibilité d'accéder à certains services. L'utilisateur peut toutefois configurer son navigateur pour refuser l'installation des cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-petrole-800 mb-3">8. Droit Applicable et Juridiction Compétente</h2>
            <p>
              Tout litige en relation avec l'utilisation du site <strong>serialmasseur.fr</strong> est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de <strong>Lille Métropole</strong>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default LegalMentions;