
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
      description: "Coupe moderne et personnalisée",
      features: ["Consultation style", "Shampooing inclus", "Finition soignée"]
    },
    {
      icon: Users,
      title: "Coupe Étudiant",
      duration: "30 min",
      price: "18€",
      description: "Pour les moins de 18 ans",
      features: ["Tarif préférentiel", "Styles tendance", "Conseil personnalisé"]
    },
    {
      icon: Baby,
      title: "Coupe Enfant",
      duration: "30 min",
      price: "15€",
      description: "Pour les moins de 10 ans",
      features: ["Approche adaptée", "Ambiance rassurante", "Parents bienvenus"]
    },
    {
      icon: Sparkles,
      title: "Taille de Barbe",
      duration: "15 min",
      price: "15€",
      description: "Taille précise et soignée",
      features: ["Techniques professionnelles", "Produits de qualité", "Résultat impeccable"]
    },
    {
      icon: Scissors,
      title: "Taille Barbe Tondeuse",
      duration: "15 min",
      price: "13€",
      description: "Taille rapide à la tondeuse",
      features: ["Service express", "Précision garantie", "Excellent rapport qualité-prix"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/5 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/5 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full animate-bounce">
              <Star className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des services complets pour hommes, femmes et enfants avec une attention particulière aux détails
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in hover-scale"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-10 w-10 text-primary group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                <CardDescription className="text-lg">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex justify-between items-center mb-4 p-3 bg-slate-50 rounded-lg">
                  <span className="text-muted-foreground font-medium">Durée:</span>
                  <span className="font-semibold text-lg">{service.duration}</span>
                </div>
                <div className="flex justify-between items-center mb-6 p-3 bg-primary/5 rounded-lg">
                  <span className="text-muted-foreground font-medium">Prix:</span>
                  <span className="text-3xl font-bold text-primary">{service.price}</span>
                </div>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-12 shadow-2xl text-white animate-fade-in">
          <h3 className="text-3xl font-bold text-center mb-8">Services Additionnels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center group">
              <div className="mb-4 p-3 bg-white/10 rounded-full w-fit mx-auto group-hover:bg-white/20 transition-colors duration-300">
                <Scissors className="h-8 w-8 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h4 className="font-semibold text-xl mb-3">Coupes Hommes & Femmes</h4>
              <p className="text-gray-300">Styles modernes et classiques adaptés à votre personnalité</p>
            </div>
            <div className="text-center group">
              <div className="mb-4 p-3 bg-white/10 rounded-full w-fit mx-auto group-hover:bg-white/20 transition-colors duration-300">
                <Sparkles className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="font-semibold text-xl mb-3">Brushing & Finitions</h4>
              <p className="text-gray-300">Finition parfaite pour un look impeccable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
