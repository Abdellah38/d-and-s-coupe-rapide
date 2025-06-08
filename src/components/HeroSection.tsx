
import React from 'react';
import { Scissors, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-brown via-warm-bronze to-warm-brown">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/e5c4e1f9-424c-487d-9151-c35d04b89a9d.png')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-warm-brown/95 via-warm-brown/80 to-transparent"></div>
      </div>
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-2 h-2 bg-warm-gold/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-1 h-1 bg-warm-cream/30 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-warm-gold/20 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          
          {/* Left side - Brand and text */}
          <div className="text-left">
            <div className="flex items-center mb-8 animate-fade-in">
              <div className="p-4 bg-warm-gold/20 backdrop-blur-sm rounded-full border border-warm-gold/30">
                <Scissors className="h-12 w-12 text-warm-gold" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-warm-cream mb-6 animate-fade-in delay-200 leading-none tracking-tight">
              D&S<br />
              <span className="text-warm-gold">Barber</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-warm-cream/90 mb-8 max-w-2xl animate-fade-in delay-300 font-light leading-relaxed">
              L'art de la coiffure masculine dans un cadre raffiné et moderne
            </p>
            
            <div className="flex flex-col gap-4 mb-12 text-warm-cream/80 animate-fade-in delay-400">
              <div className="flex items-center gap-3 group">
                <MapPin className="h-5 w-5 text-warm-gold" />
                <span className="text-lg">103 Rue des Combattants, La Hulpe</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Clock className="h-5 w-5 text-warm-gold" />
                <span className="text-lg">Excellence • Tradition • Modernité</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in delay-500">
              <Button 
                size="lg" 
                className="text-xl px-10 py-8 h-auto bg-warm-gold hover:bg-warm-gold/90 text-warm-brown font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl rounded-xl"
                onClick={scrollToBooking}
              >
                Réserver Maintenant
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-xl px-10 py-8 h-auto border-2 border-warm-cream/30 text-warm-cream hover:bg-warm-cream hover:text-warm-brown transform hover:scale-105 transition-all duration-300 backdrop-blur-sm rounded-xl"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nos Services
              </Button>
            </div>
          </div>

          {/* Right side - Services preview */}
          <div className="hidden lg:block animate-fade-in delay-600">
            <div className="glass-effect rounded-3xl p-8 border border-warm-cream/20">
              <h3 className="text-3xl font-bold text-warm-cream mb-8">Nos Services</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 glass-effect rounded-xl border border-warm-cream/10">
                  <span className="text-warm-cream text-xl font-light">Coupe Homme</span>
                  <span className="text-warm-gold text-2xl font-bold">20€</span>
                </div>
                <div className="flex justify-between items-center p-4 glass-effect rounded-xl border border-warm-cream/10">
                  <span className="text-warm-cream text-xl font-light">Taille de Barbe</span>
                  <span className="text-warm-gold text-2xl font-bold">15€</span>
                </div>
                <div className="flex justify-between items-center p-4 glass-effect rounded-xl border border-warm-cream/10">
                  <span className="text-warm-cream text-xl font-light">Coupe Étudiant</span>
                  <span className="text-warm-gold text-2xl font-bold">18€</span>
                </div>
                <div className="flex justify-between items-center p-4 glass-effect rounded-xl border border-warm-cream/10">
                  <span className="text-warm-cream text-xl font-light">Coupe Enfant</span>
                  <span className="text-warm-gold text-2xl font-bold">15€</span>
                </div>
                <div className="pt-4">
                  <Button 
                    className="w-full bg-warm-gold/20 hover:bg-warm-gold/30 text-warm-cream border border-warm-gold/50 rounded-xl py-6 text-lg font-light"
                    onClick={scrollToBooking}
                  >
                    Réserver →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
