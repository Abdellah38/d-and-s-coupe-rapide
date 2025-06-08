
import React from 'react';
import { Scissors, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="relative pt-16 min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/e5c4e1f9-424c-487d-9151-c35d04b89a9d.png')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/60"></div>
      </div>
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-primary/20 rounded-full animate-bounce"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-accent/50 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="p-6 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 hover-scale transition-all duration-500">
              <Scissors className="h-16 w-16 text-primary animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-fade-in delay-200 tracking-tight">
            D&S Barber
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto animate-fade-in delay-300 leading-relaxed">
            Salon de coiffure moderne au cœur de La Hulpe, alliant savoir-faire traditionnel et tendances actuelles
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-16 text-gray-300 animate-fade-in delay-400">
            <div className="flex items-center gap-3 group hover:text-primary transition-colors duration-300">
              <MapPin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg">103 Rue des Combattants, 1310 La Hulpe</span>
            </div>
            <div className="flex items-center gap-3 group hover:text-primary transition-colors duration-300">
              <Clock className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg">Ambiance conviviale et respectueuse</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in delay-500">
            <Button 
              size="lg" 
              className="text-xl px-10 py-8 h-auto bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary/25"
              onClick={scrollToBooking}
            >
              Prendre Rendez-vous
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-xl px-10 py-8 h-auto border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Découvrir nos Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
