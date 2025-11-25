import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, User, Building2 } from 'lucide-react';
import { ViewMode } from '../types';

interface NavbarProps {
  currentMode: ViewMode;
  onSwitchMode: (mode: ViewMode) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentMode, onSwitchMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMode = () => {
    onSwitchMode(currentMode === 'enterprise' ? 'individual' : 'enterprise');
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo - Click to reset to home/enterprise usually, but here just keeps current state or refreshes */}
          <button onClick={() => onSwitchMode('enterprise')} className="flex items-center space-x-2 group">
            <div className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-petrole-700' : 'text-petrole-800'}`}>
              SERIAL <span className="text-corail-500">MASSEUR</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            
            {/* The Switcher Button */}
            <button 
              onClick={toggleMode}
              className="text-sm font-semibold transition-colors text-petrole-600 hover:text-corail-500 flex items-center gap-2 border border-transparent hover:border-petrole-100 px-4 py-2 rounded-lg"
            >
              {currentMode === 'enterprise' ? (
                <>
                  <User size={18} />
                  Je suis un particulier
                </>
              ) : (
                <>
                  <Building2 size={18} />
                  Massage en Entreprise
                </>
              )}
            </button>

            {/* CTA Button */}
            <a href="#contact" className="px-5 py-2.5 rounded-full bg-corail-500 text-white font-semibold text-sm hover:bg-corail-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2">
              <Phone size={16} />
              {currentMode === 'enterprise' ? 'Devis Entreprise' : 'Réserver (SMS/WhatsApp)'}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-petrole-700">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-petrole-100 shadow-lg p-4 flex flex-col space-y-4 animate-in slide-in-from-top-2">
          <button 
            onClick={toggleMode}
            className="flex items-center gap-3 text-petrole-700 font-medium w-full p-2 hover:bg-petrole-50 rounded-lg"
          >
             {currentMode === 'enterprise' ? (
                <>
                  <div className="bg-petrole-100 p-2 rounded-full"><User size={20} className="text-petrole-600"/></div>
                  Je suis un particulier
                </>
              ) : (
                <>
                  <div className="bg-petrole-100 p-2 rounded-full"><Building2 size={20} className="text-petrole-600"/></div>
                  Massage en Entreprise
                </>
              )}
          </button>
          
          <div className="h-px bg-petrole-100 my-2"></div>

          <a href="#contact" className="text-corail-500 font-bold p-2 text-center border border-corail-200 rounded-lg" onClick={() => setIsOpen(false)}>
            {currentMode === 'enterprise' ? 'Demander un devis' : 'Me contacter'}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;