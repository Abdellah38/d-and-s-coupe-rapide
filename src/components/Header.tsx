import React, { useState } from 'react';
import { Scissors, Menu, X, Instagram, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };
  return <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-amber-500 p-2 rounded-full">
              <Scissors className="w-6 h-6 text-black" />
            </div>
            <span className="text-xl font-bold text-white">D&S BARBER</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('accueil')} className="px-6 py-2 font-medium transition-all duration-300 hover:text-amber-400 text-white">
              Accueil
            </button>
            <button onClick={() => scrollToSection('services')} className="px-6 py-2 font-medium transition-all duration-300 hover:text-amber-400 text-white">
              Services
            </button>
            <button onClick={() => scrollToSection('equipe')} className="px-6 py-2 font-medium transition-all duration-300 hover:text-amber-400 text-white">
              Équipe
            </button>
            <button onClick={() => scrollToSection('reservation')} className="px-6 py-2 font-medium transition-all duration-300 hover:text-amber-400 text-white">
              Réservation
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-6 py-2 font-medium transition-all duration-300 hover:text-amber-400 text-white">
              Contact
            </button>
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Instagram className="w-6 h-6 hover:text-amber-400 cursor-pointer transition-colors text-white" />
            
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-amber-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 border-t border-gray-700">
              <button onClick={() => scrollToSection('accueil')} className="block w-full text-left px-3 py-2 text-white hover:text-amber-400 transition-colors">
                Accueil
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-white hover:text-amber-400 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('equipe')} className="block w-full text-left px-3 py-2 text-white hover:text-amber-400 transition-colors">
                Équipe
              </button>
              <button onClick={() => scrollToSection('reservation')} className="block w-full text-left px-3 py-2 text-white hover:text-amber-400 transition-colors">
                Réservation
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-white hover:text-amber-400 transition-colors">
                Contact
              </button>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;