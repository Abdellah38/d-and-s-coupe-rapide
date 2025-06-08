
import React from 'react';
import { Scissors, Users, Baby, Sparkles, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Scissors,
      title: "Coupe Homme",
      duration: "30 min",
      price: "20€",
      description: "Coupe moderne et personnalisée selon votre style",
      features: ["Consultation personnalisée", "Shampooing premium", "Finition au rasoir"]
    },
    {
      icon: Users,
      title: "Coupe Étudiant",
      duration: "30 min",
      price: "18€",
      description: "Tarif spécial pour les étudiants et jeunes",
      features: ["Styles tendance", "Conseil expert", "Carte étudiante requise"]
    },
    {
      icon: Baby,
      title: "Coupe Enfant",
      duration: "25 min",
      price: "15€",
      description: "Coupe adaptée pour les plus jeunes (-10 ans)",
      features: ["Approche douce", "Ambiance rassurante", "Parents bienvenus"]
    },
    {
      icon: Sparkles,
      title: "Taille de Barbe",
      duration: "20 min",
      price: "15€",
      description: "Taille professionnelle et modelage de barbe",
      features: ["Techniques artisanales", "Produits haut de gamme", "Résultat impeccable"]
    },
    {
      icon: Scissors,
      title: "Barbe Express",
      duration: "15 min",
      price: "13€",
      description: "Taille rapide à la tondeuse",
      features: ["Service rapide", "Précision garantie", "Excellent rapport qualité-prix"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-warm-cream relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-warm-gold/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-warm-bronze/5 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-warm-beige/10 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-full shadow-2xl animate-bounce">
              <Star className="h-16 w-16 text-warm-bronze" />
            </div>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold text-warm-brown mb-8 leading-none">
            Nos Services
          </h2>
          <p className="text-2xl text-warm-brown/80 max-w-4xl mx-auto font-light leading-relaxed">
            Excellence et savoir-faire pour tous les âges dans un cadre moderne
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white/90 backdrop-blur-sm animate-fade-in hover-lift rounded-3xl"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-6 p-6 warm-gradient rounded-full w-fit group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="h-12 w-12 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <CardTitle className="text-3xl group-hover:text-warm-bronze transition-colors duration-300 font-bold">{service.title}</CardTitle>
                <CardDescription className="text-lg text-warm-brown/70 font-light">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex justify-between items-center mb-4 p-4 bg-warm-beige/30 rounded-xl">
                  <span className="text-warm-brown/70 font-semibold">Durée:</span>
                  <span className="font-bold text-xl text-warm-bronze">{service.duration}</span>
                </div>
                <div className="flex justify-between items-center mb-6 p-4 warm-gradient rounded-xl text-white">
                  <span className="font-semibold">Prix:</span>
                  <span className="text-4xl font-bold">{service.price}</span>
                </div>
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 text-warm-brown/80">
                      <div className="w-2 h-2 bg-warm-bronze rounded-full animate-pulse"></div>
                      <span className="font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="warm-gradient rounded-3xl p-12 shadow-2xl text-white animate-fade-in">
          <h3 className="text-4xl font-bold text-center mb-12">Pourquoi Choisir D&S Barber ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="mb-6 p-4 bg-white/20 rounded-full w-fit mx-auto group-hover:bg-white/30 transition-colors duration-300">
                <Scissors className="h-10 w-10 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h4 className="font-bold text-2xl mb-4">Expertise Professionnelle</h4>
              <p className="text-white/90 font-light leading-relaxed">Des coiffeurs expérimentés maîtrisant les techniques modernes et classiques</p>
            </div>
            <div className="text-center group">
              <div className="mb-6 p-4 bg-white/20 rounded-full w-fit mx-auto group-hover:bg-white/30 transition-colors duration-300">
                <Sparkles className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="font-bold text-2xl mb-4">Produits Premium</h4>
              <p className="text-white/90 font-light leading-relaxed">Utilisation exclusive de produits haut de gamme pour des résultats exceptionnels</p>
            </div>
            <div className="text-center group">
              <div className="mb-6 p-4 bg-white/20 rounded-full w-fit mx-auto group-hover:bg-white/30 transition-colors duration-300">
                <Star className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="font-bold text-2xl mb-4">Ambiance Unique</h4>
              <p className="text-white/90 font-light leading-relaxed">Cadre moderne et chaleureux pour une expérience relaxante et conviviale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
