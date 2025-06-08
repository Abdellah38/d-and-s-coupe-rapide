
import React from 'react';
import { Scissors, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="pt-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Scissors className="h-12 w-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            D&S Barber
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Salon de coiffure moderne au cœur de La Hulpe, alliant savoir-faire traditionnel et tendances actuelles
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>103 Rue des Combattants, 1310 La Hulpe</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>Ambiance conviviale et respectueuse</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              onClick={scrollToBooking}
            >
              Prendre Rendez-vous
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
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
