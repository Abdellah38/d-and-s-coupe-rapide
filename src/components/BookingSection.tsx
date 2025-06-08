
import React from 'react';
import { Calendar, Mic, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BookingSection = () => {
  return (
    <section id="reservation" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prendre Rendez-vous
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Réservez votre créneau en ligne ou contactez-nous directement
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Calendrier de réservation */}
            <div className="bg-card rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Calendrier de Réservation</h3>
                </div>
                <p className="text-muted-foreground">
                  Sélectionnez votre date et heure préférées
                </p>
              </div>
              <div className="h-96">
                <div style={{width:'100%',height:'100%',overflow:'scroll'}} id="my-cal-inline"></div>
              </div>
            </div>

            {/* Options de contact */}
            <div className="space-y-8">
              {/* Bouton assistant vocal */}
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-lg p-8 text-center text-primary-foreground shadow-lg">
                <div className="mb-6">
                  <div className="mx-auto mb-4 p-6 bg-white/20 rounded-full w-fit">
                    <Mic className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Réservation Vocale</h3>
                  <p className="text-lg opacity-90">
                    Utilisez notre assistant vocal pour prendre rendez-vous rapidement
                  </p>
                </div>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-8 py-6 h-auto font-semibold w-full sm:w-auto"
                >
                  <Mic className="mr-2 h-5 w-5" />
                  Réserver par Voix
                </Button>
              </div>

              {/* Informations de contact */}
              <div className="bg-card rounded-lg p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Autres Moyens de Contact
                </h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-secondary/20 rounded-lg">
                    <h4 className="font-semibold mb-2">Téléphone</h4>
                    <p className="text-muted-foreground">
                      Appelez-nous pour prendre rendez-vous
                    </p>
                    <Button variant="outline" className="mt-2 w-full">
                      Appeler le Salon
                    </Button>
                  </div>
                  
                  <div className="p-4 bg-secondary/20 rounded-lg">
                    <h4 className="font-semibold mb-2">Sur Place</h4>
                    <p className="text-muted-foreground">
                      Venez directement au salon pour prendre rendez-vous
                    </p>
                    <p className="text-sm text-primary font-medium mt-1">
                      103 Rue des Combattants, 1310 La Hulpe
                    </p>
                  </div>
                </div>
              </div>

              {/* Conseils de réservation */}
              <div className="bg-accent/50 rounded-lg p-6">
                <h4 className="font-semibold mb-3">Conseils de Réservation</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Réservez à l'avance pour garantir votre créneau</li>
                  <li>• Arrivez 5 minutes avant votre rendez-vous</li>
                  <li>• Prévenez-nous en cas d'annulation</li>
                  <li>• Consultez nos tarifs selon votre âge</li>
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
