import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnatomySection from './components/AnatomySection';
import Methodology from './components/Methodology';
import IndividualSection from './components/IndividualSection';
import Footer from './components/Footer';
import { ViewMode } from './types';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('enterprise');

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Navbar currentMode={viewMode} onSwitchMode={setViewMode} />
      
      <main>
        {viewMode === 'enterprise' ? (
          <>
            <Hero />
            <AnatomySection />
            <Methodology />
          </>
        ) : (
          <IndividualSection />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;