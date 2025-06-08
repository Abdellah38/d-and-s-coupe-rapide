
import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nous Contacter
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Retrouvez-nous au cœur de La Hulpe
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Informations de contact */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Adresse</h3>
                  <p className="text-muted-foreground">
                    103 Rue des Combattants<br />
                    1310 La Hulpe, Belgique
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Horaires</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Lundi - Vendredi: 9h00 - 18h00</p>
                    <p>Samedi: 8h00 - 17h00</p>
                    <p>Dimanche: Sur rendez-vous</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Téléphone</h3>
                  <p className="text-muted-foreground">
                    +32 (0)2 XXX XX XX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    contact@dsbarber.be
                  </p>
                </div>
              </div>
            </div>

            {/* Carte ou image */}
            <div className="bg-secondary/10 rounded-lg p-8 text-center">
              <div className="mb-4">
                <MapPin className="h-12 w-12 text-primary mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Nous Trouver</h3>
              <p className="text-muted-foreground mb-4">
                Situé en plein cœur de La Hulpe, notre salon est facilement accessible en voiture et en transports en commun.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Parking disponible à proximité</p>
                <p>• Arrêt de bus à 2 minutes</p>
                <p>• Centre-ville de La Hulpe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
