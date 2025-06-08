
import React from 'react';
import { Calendar, Mic, Phone, Clock, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BookingSection = () => {
  return (
    <section id="reservation" className="py-24 relative overflow-hidden bg-warm-cream">
      {/* Background with warm gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-cream via-warm-beige to-warm-cream"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-warm-gold/30 rounded-full animate-ping delay-200"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-warm-bronze/40 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-warm-gold/20 rounded-full animate-bounce delay-700"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 warm-gradient rounded-full blur-lg opacity-60 animate-pulse"></div>
              <div className="relative p-6 bg-white/80 backdrop-blur-sm rounded-full shadow-2xl">
                <Calendar className="h-16 w-16 text-warm-bronze" />
              </div>
            </div>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold mb-8 text-warm-brown leading-none">
            Réservation
          </h2>
          <p className="text-2xl text-warm-brown/80 max-w-4xl mx-auto font-light leading-relaxed">
            Planifiez votre rendez-vous dans notre salon moderne
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 items-start">
            
            {/* Calendar Section - Takes 2 columns */}
            <div className="xl:col-span-2">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-warm-beige animate-slide-up delay-200 hover-lift">
                <div className="p-8 border-b border-warm-beige warm-gradient">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                      <Calendar className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">Calendrier de Réservation</h3>
                      <p className="text-white/90 text-lg font-light">Choisissez votre créneau idéal</p>
                    </div>
                  </div>
                </div>
                <div className="h-[600px] bg-white">
                  <div style={{width:'100%',height:'100%',overflow:'scroll'}} id="my-cal-inline"></div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              
              {/* Voice Assistant Button */}
              <div className="warm-gradient rounded-3xl p-8 text-center text-white shadow-2xl animate-scale-in delay-400 hover-lift">
                <div className="mb-8">
                  <div className="mx-auto mb-8 p-8 bg-white/20 rounded-full w-fit animate-bounce backdrop-blur-sm">
                    <Mic className="h-20 w-20" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6">Assistant Vocal</h3>
                  <p className="text-xl opacity-95 leading-relaxed font-light">
                    Réservez facilement avec notre assistant intelligent
                  </p>
                </div>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-xl px-12 py-8 h-auto font-semibold w-full rounded-2xl hover-lift bg-white/90 text-warm-brown border-0 shadow-lg hover:bg-white"
                >
                  <Mic className="mr-4 h-6 w-6" />
                  Réserver par Voix
                </Button>
              </div>

              {/* Contact Options */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-warm-beige animate-fade-in delay-600">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-4 text-warm-brown">
                  <Phone className="h-7 w-7 text-warm-bronze" />
                  Autres Options
                </h3>
                
                <div className="space-y-6">
                  <div className="p-6 bg-warm-cream/50 rounded-2xl border border-warm-beige/50 group hover-lift">
                    <div className="flex items-center gap-4 mb-4">
                      <Phone className="h-6 w-6 text-warm-bronze group-hover:scale-110 transition-transform duration-300" />
                      <h4 className="font-semibold text-xl text-warm-brown">Téléphone</h4>
                    </div>
                    <p className="text-warm-brown/70 mb-4 font-light">
                      Contactez-nous directement
                    </p>
                    <Button variant="outline" className="w-full bg-transparent border-warm-bronze/30 text-warm-bronze hover:bg-warm-bronze/10 rounded-xl font-light">
                      Appeler le Salon
                    </Button>
                  </div>
                  
                  <div className="p-6 bg-warm-cream/50 rounded-2xl border border-warm-beige/50 group hover-lift">
                    <div className="flex items-center gap-4 mb-4">
                      <MapPin className="h-6 w-6 text-warm-bronze group-hover:scale-110 transition-transform duration-300" />
                      <h4 className="font-semibold text-xl text-warm-brown">Sur Place</h4>
                    </div>
                    <p className="text-warm-brown/70 mb-3 font-light">
                      Venez nous rendre visite
                    </p>
                    <p className="text-warm-bronze font-semibold text-lg">
                      103 Rue des Combattants, 1310 La Hulpe
                    </p>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-warm-gold/10 backdrop-blur-sm rounded-3xl p-8 border border-warm-gold/20 animate-fade-in delay-700">
                <div className="flex items-center gap-4 mb-8">
                  <Star className="h-7 w-7 text-warm-bronze" />
                  <h4 className="font-bold text-2xl text-warm-brown">Conseils</h4>
                </div>
                <ul className="space-y-4 text-warm-brown/80">
                  <li className="flex items-center gap-4 font-light">
                    <div className="w-2 h-2 bg-warm-bronze rounded-full animate-pulse"></div>
                    <span>Réservez à l'avance pour garantir votre créneau</span>
                  </li>
                  <li className="flex items-center gap-4 font-light">
                    <div className="w-2 h-2 bg-warm-bronze rounded-full animate-pulse delay-200"></div>
                    <span>Arrivez 5 minutes avant votre rendez-vous</span>
                  </li>
                  <li className="flex items-center gap-4 font-light">
                    <div className="w-2 h-2 bg-warm-bronze rounded-full animate-pulse delay-400"></div>
                    <span>Consultez nos tarifs préférentiels</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
