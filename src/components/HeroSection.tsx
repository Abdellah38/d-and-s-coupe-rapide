
import React from 'react';
import { Scissors, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      </div>
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-2 h-2 bg-amber-400/60 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-1 h-1 bg-amber-300/40 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-amber-500/30 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="bg-amber-500 p-4 rounded-full">
              <Scissors className="h-12 w-12 text-black" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight text-white">
            The Gentleman's
            <br />
            <span className="text-amber-400">Barber</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            L'art du style masculin dans un cadre raffiné et moderne
          </p>
          
          <div className="flex flex-col gap-4 mb-12 text-gray-300 animate-fade-in delay-400">
            <div className="flex items-center justify-center gap-3">
              <MapPin className="h-5 w-5 text-amber-400" />
              <span className="text-lg">103 Rue des Combattants, La Hulpe</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="h-5 w-5 text-amber-400" />
              <span className="text-lg">Excellence • Tradition • Modernité</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
            onClick={scrollToBooking}
          >
            PRENDRE RENDEZ-VOUS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
