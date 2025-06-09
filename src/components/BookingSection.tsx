
import React, { useEffect } from 'react';
import { Calendar, Phone, MapPin } from 'lucide-react';

const BookingSection = () => {
  useEffect(() => {
    // Charger le script Cal.com
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.Cal) {
        window.Cal("init", "25min", {origin:"https://cal.com"});
        if (window.Cal.ns && window.Cal.ns["25min"]) {
          window.Cal.ns["25min"]("inline", {
            elementOrSelector:"#my-cal-inline",
            config: {"layout":"month_view"},
            calLink: "comptetest/25min",
          });
          window.Cal.ns["25min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        }
      }
    };

    return () => {
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="reservation" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-white">
            Prendre <span className="text-amber-400">Rendez-vous</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Planifiez votre rendez-vous dans notre salon moderne
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          
          {/* Calendar Section - Takes 3 columns */}
          <div className="xl:col-span-3">
            <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden">
              <div className="p-6 border-b border-gray-700 bg-black/60">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-amber-500 rounded-lg">
                    <Calendar className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Calendrier de Réservation</h3>
                    <p className="text-gray-300">Choisissez votre créneau idéal</p>
                  </div>
                </div>
              </div>
              <div 
                style={{width:'100%', height:'600px', overflow:'scroll'}} 
                id="my-cal-inline"
                className="rounded-b-lg"
              ></div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Contact Options */}
            <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-400" />
                Autres Options
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="h-5 w-5 text-amber-400" />
                    <h4 className="font-semibold text-white">Téléphone</h4>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    Contactez-nous directement
                  </p>
                  <button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-4 rounded transition-colors duration-300">
                    Appeler
                  </button>
                </div>
                
                <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-amber-400" />
                    <h4 className="font-semibold text-white">Sur Place</h4>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">
                    Venez nous rendre visite
                  </p>
                  <p className="text-amber-400 font-semibold text-sm">
                    103 Rue des Combattants, 1310 La Hulpe
                  </p>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6">
              <h4 className="font-bold text-lg text-amber-400 mb-4">Conseils</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Réservez à l'avance pour garantir votre créneau</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Arrivez 5 minutes avant votre rendez-vous</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Consultez nos tarifs préférentiels</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
