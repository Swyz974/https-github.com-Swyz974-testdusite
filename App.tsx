import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnatomySection from './components/AnatomySection';
import Methodology from './components/Methodology';
import IndividualSection from './components/IndividualSection';
import ContactForm from './components/ContactForm';
import EnterpriseQuoteForm from './components/EnterpriseQuoteForm';
import LegalMentions from './components/LegalMentions';
import Footer from './components/Footer';
import { ViewMode } from './types';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('enterprise');

  // Gestion de l'URL au chargement et lors de la navigation
  useEffect(() => {
    const handleUrlChange = () => {
      const path = window.location.pathname;
      const params = new URLSearchParams(window.location.search);
      
      if (path === '/contact') {
        setViewMode('contact');
      } else if (path === '/mentions-legales') {
        setViewMode('legal');
      } else if (params.get('view') === 'particulier') {
        setViewMode('individual');
      } else {
        setViewMode('enterprise');
      }
    };

    // Vérification initiale
    handleUrlChange();

    // Écoute des changements d'historique (boutons précédent/suivant du navigateur)
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  // Fonction helper pour changer de mode et mettre à jour l'URL sans rechargement
  const handleSwitchMode = (mode: ViewMode) => {
    setViewMode(mode);
    
    let newUrl = '/';
    if (mode === 'individual') {
      newUrl = '/?view=particulier';
    } else if (mode === 'contact') {
      newUrl = '/contact';
    } else if (mode === 'legal') {
      newUrl = '/mentions-legales';
    }

    window.history.pushState({}, '', newUrl);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Navbar currentMode={viewMode} onSwitchMode={handleSwitchMode} />
      
      <main>
        {viewMode === 'contact' ? (
          <ContactForm />
        ) : viewMode === 'quote' ? (
          <EnterpriseQuoteForm />
        ) : viewMode === 'legal' ? (
          <LegalMentions />
        ) : viewMode === 'enterprise' ? (
          <>
            <Hero onNavigateContact={() => handleSwitchMode('contact')} />
            <AnatomySection />
            <Methodology />
          </>
        ) : (
          <IndividualSection />
        )}
      </main>
      
      <Footer 
        onNavigateContact={() => handleSwitchMode('contact')} 
        onNavigateLegal={() => handleSwitchMode('legal')}
      />
    </div>
  );
};

export default App;