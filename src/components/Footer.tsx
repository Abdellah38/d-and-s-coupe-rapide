
import React from 'react';
import { Scissors, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl text-foreground">D&S Barber</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Salon de coiffure moderne à La Hulpe, alliant tradition et tendances actuelles pour des résultats impeccables.
            </p>
            <p className="text-sm text-muted-foreground">
              Ambiance conviviale • Attention aux détails • Équipe passionnée
            </p>
          </div>

          {/* Services rapides */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Nos Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Coupe Homme - 20€</li>
              <li>Coupe Étudiant - 18€</li>
              <li>Coupe Enfant - 15€</li>
              <li>Taille de Barbe - 15€</li>
              <li>Brushing & Finitions</li>
            </ul>
          </div>

          {/* Contact rapide */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">103 Rue des Combattants, 1310 La Hulpe</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+32 (0)2 XXX XX XX</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">contact@dsbarber.be</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 D&S Barber. Tous droits réservés. • Salon de coiffure à La Hulpe
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
