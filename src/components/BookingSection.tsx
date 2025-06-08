
import React from 'react';
import { Calendar, Mic, Phone, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BookingSection = () => {
  return (
    <section id="reservation" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-20 w-2 h-2 bg-primary/40 rounded-full animate-ping"></div>
        <div className="absolute top-32 right-32 w-1 h-1 bg-secondary/50 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-accent/30 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 right-20 w-1 h-1 bg-primary/60 rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/20 rounded-full animate-pulse">
              <Calendar className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prendre Rendez-vous
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Réservez votre créneau en ligne ou contactez-nous directement
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Calendrier de réservation */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10 animate-fade-in delay-200 hover-scale">
              <div className="p-8 border-b border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/20 rounded-full">
                    <Calendar className="h-8 w-8 text-primary animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Calendrier de Réservation</h3>
                    <p className="text-gray-300">Sélectionnez votre date et heure préférées</p>
                  </div>
                </div>
              </div>
              <div className="h-96 bg-white rounded-b-2xl">
                <div style={{width:'100%',height:'100%',overflow:'scroll'}} id="my-cal-inline"></div>
              </div>
            </div>

            {/* Options de contact */}
            <div className="space-y-8">
              {/* Bouton assistant vocal */}
              <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-2xl p-8 text-center text-primary-foreground shadow-2xl animate-fade-in delay-300 transform hover:scale-105 transition-all duration-500">
                <div className="mb-8">
                  <div className="mx-auto mb-6 p-8 bg-white/20 rounded-full w-fit animate-bounce">
                    <Mic className="h-16 w-16" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Réservation Vocale</h3>
                  <p className="text-xl opacity-90 leading-relaxed">
                    Utilisez notre assistant vocal pour prendre rendez-vous rapidement et facilement
                  </p>
                </div>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-xl px-12 py-8 h-auto font-semibold w-full sm:w-auto transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  <Mic className="mr-3 h-6 w-6" />
                  Réserver par Voix
                </Button>
              </div>

              {/* Informations de contact */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10 animate-fade-in delay-400">
                <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-white">
                  <Phone className="h-6 w-6 text-primary" />
                  Autres Moyens de Contact
                </h3>
                
                <div className="space-y-6">
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10 group hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <Phone className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <h4 className="font-semibold text-xl text-white">Téléphone</h4>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Appelez-nous pour prendre rendez-vous directement
                    </p>
                    <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all duration-300">
                      Appeler le Salon
                    </Button>
                  </div>
                  
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10 group hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <MapPin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <h4 className="font-semibold text-xl text-white">Sur Place</h4>
                    </div>
                    <p className="text-gray-300 mb-2">
                      Venez directement au salon pour prendre rendez-vous
                    </p>
                    <p className="text-primary font-medium text-lg">
                      103 Rue des Combattants, 1310 La Hulpe
                    </p>
                  </div>
                </div>
              </div>

              {/* Conseils de réservation */}
              <div className="bg-accent/10 backdrop-blur-sm rounded-2xl p-8 border border-accent/20 animate-fade-in delay-500">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="h-6 w-6 text-accent" />
                  <h4 className="font-semibold text-xl text-white">Conseils de Réservation</h4>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span>Réservez à l'avance pour garantir votre créneau</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-200"></div>
                    <span>Arrivez 5 minutes avant votre rendez-vous</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-400"></div>
                    <span>Prévenez-nous en cas d'annulation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-600"></div>
                    <span>Consultez nos tarifs selon votre âge</span>
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
