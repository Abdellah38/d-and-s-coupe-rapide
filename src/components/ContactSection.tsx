import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
const ContactSection = () => {
  return <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-200">
            Nous Contacter
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-zinc-50">
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
                  <p className="text-zinc-200">
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
                    <p className="text-zinc-50">Lundi - Vendredi: 9h00 - 18h00</p>
                    <p className="text-zinc-50">Samedi: 8h00 - 17h00</p>
                    <p className="text-zinc-50">Dimanche: Sur rendez-vous</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Téléphone</h3>
                  <p className="text-zinc-50">+32 (0)2 328 72 82</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-zinc-50">
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
              <p className="mb-4 text-zinc-50">
                Situé en plein cœur de La Hulpe, notre salon est facilement accessible en voiture et en transports en commun.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="text-zinc-50">• Parking disponible à proximité</p>
                <p className="text-zinc-50">• Arrêt de bus à 2 minutes</p>
                <p className="text-zinc-50">• Centre-ville de La Hulpe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;