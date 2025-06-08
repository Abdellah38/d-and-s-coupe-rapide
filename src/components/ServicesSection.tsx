
import React from 'react';
import { Scissors, Users, Baby, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Scissors,
      title: "Coupe Homme",
      duration: "30 min",
      price: "20€",
      description: "Coupe moderne et personnalisée"
    },
    {
      icon: Users,
      title: "Coupe Étudiant",
      duration: "30 min",
      price: "18€",
      description: "Pour les moins de 18 ans"
    },
    {
      icon: Baby,
      title: "Coupe Enfant",
      duration: "30 min",
      price: "15€",
      description: "Pour les moins de 10 ans"
    },
    {
      icon: Sparkles,
      title: "Taille de Barbe",
      duration: "15 min",
      price: "15€",
      description: "Taille précise et soignée"
    },
    {
      icon: Scissors,
      title: "Taille Barbe Tondeuse",
      duration: "15 min",
      price: "13€",
      description: "Taille rapide à la tondeuse"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des services complets pour hommes, femmes et enfants avec une attention particulière aux détails
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">Durée:</span>
                  <span className="font-semibold">{service.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Prix:</span>
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-6">Services Additionnels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-2">Coupes Hommes & Femmes</h4>
              <p className="text-muted-foreground">Styles modernes et classiques</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-2">Brushing</h4>
              <p className="text-muted-foreground">Finition parfaite</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-2">Services Jeunesse</h4>
              <p className="text-muted-foreground">Spécialisés pour les jeunes</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-2">Taille Barbe Tondeuse</h4>
              <p className="text-muted-foreground">Précision et rapidité</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
