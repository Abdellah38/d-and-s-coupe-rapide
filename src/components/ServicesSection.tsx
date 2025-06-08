
import React from 'react';
import { Scissors, User, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Scissors,
      title: "Coupe Homme",
      price: "20€",
      description: "Coupe moderne et personnalisée selon votre style"
    },
    {
      icon: User,
      title: "Coupe Étudiant",
      price: "18€",
      description: "Tarif spécial pour les étudiants et jeunes"
    },
    {
      icon: User,
      title: "Coupe Enfant",
      price: "15€",
      description: "Coupe adaptée pour les plus jeunes (-10 ans)"
    },
    {
      icon: Scissors,
      title: "Taille de Barbe",
      price: "15€",
      description: "Taille professionnelle et modelage de barbe"
    },
    {
      icon: Scissors,
      title: "Barbe Express",
      price: "13€",
      description: "Taille rapide à la tondeuse"
    },
    {
      icon: Scissors,
      title: "Forfait Complet",
      price: "35€",
      description: "Coupe + Barbe pour un look impeccable"
    }
  ];

  const scrollToBooking = () => {
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-white">
            Nos <span className="text-amber-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Excellence et savoir-faire pour tous les âges dans un cadre moderne
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:bg-black/60 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="mx-auto mb-4 p-4 bg-amber-500 rounded-full w-fit">
                  <service.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-amber-400">{service.price}</span>
              </div>
              
              <button 
                onClick={scrollToBooking}
                className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                RÉSERVER →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Pourquoi Choisir D&S Barber ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 p-4 bg-amber-500/20 rounded-full w-fit mx-auto">
                <Scissors className="h-8 w-8 text-amber-400" />
              </div>
              <h4 className="font-bold text-xl mb-2 text-white">Expertise Professionnelle</h4>
              <p className="text-gray-300">Des coiffeurs expérimentés maîtrisant les techniques modernes</p>
            </div>
            <div className="text-center">
              <div className="mb-4 p-4 bg-amber-500/20 rounded-full w-fit mx-auto">
                <User className="h-8 w-8 text-amber-400" />
              </div>
              <h4 className="font-bold text-xl mb-2 text-white">Service Personnalisé</h4>
              <p className="text-gray-300">Conseil expert adapté à votre style et morphologie</p>
            </div>
            <div className="text-center">
              <div className="mb-4 p-4 bg-amber-500/20 rounded-full w-fit mx-auto">
                <MapPin className="h-8 w-8 text-amber-400" />
              </div>
              <h4 className="font-bold text-xl mb-2 text-white">Ambiance Unique</h4>
              <p className="text-gray-300">Cadre moderne et chaleureux au cœur de La Hulpe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
