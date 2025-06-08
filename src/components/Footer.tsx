
import React from 'react';
import { Scissors, MapPin, Phone, Instagram, Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-700 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-amber-500 p-2 rounded-full">
                <Scissors className="h-6 h-6 text-black" />
              </div>
              <span className="text-xl font-bold text-white">D&S BARBER</span>
            </div>
            <p className="text-gray-400 mb-4">
              Salon de coiffure moderne à La Hulpe, alliant tradition et tendances actuelles pour des résultats impeccables.
            </p>
            <div className="flex items-center space-x-4">
              <Instagram className="w-6 h-6 hover:text-amber-400 cursor-pointer transition-colors text-gray-400" />
              <Music className="w-6 h-6 hover:text-amber-400 cursor-pointer transition-colors text-gray-400" />
            </div>
          </div>

          {/* Services rapides */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Nos Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Coupe Homme - 20€</li>
              <li>Coupe Étudiant - 18€</li>
              <li>Coupe Enfant - 15€</li>
              <li>Taille de Barbe - 15€</li>
              <li>Barbe Express - 13€</li>
            </ul>
          </div>

          {/* Contact rapide */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-4 w-4 text-amber-400" />
                <span className="text-sm">103 Rue des Combattants, 1310 La Hulpe</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="h-4 w-4 text-amber-400" />
                <span className="text-sm">+32 (0)2 XXX XX XX</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 D&S Barber. Tous droits réservés. • Salon de coiffure à La Hulpe
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
