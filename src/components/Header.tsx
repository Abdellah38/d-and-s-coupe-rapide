
import React, { useState } from 'react';
import { Scissors, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Scissors className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-foreground">D&S Barber</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('equipe')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Équipe
            </button>
            <button 
              onClick={() => scrollToSection('reservation')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Réservation
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('equipe')}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                Équipe
              </button>
              <button 
                onClick={() => scrollToSection('reservation')}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                Réservation
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
