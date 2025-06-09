import React from 'react';
import { Users, Heart, Award } from 'lucide-react';
const TeamSection = () => {
  return <section id="equipe" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-200">
            Notre Équipe
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-zinc-50">
            Deux passionnés dédiés à votre satisfaction
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-zinc-50">Équipe Expérimentée</h3>
              <p className="text-zinc-200">
                Deux coiffeurs passionnés avec une grande expertise
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Passion du Métier</h3>
              <p className="text-zinc-200">
                Chaque coupe est réalisée avec amour et attention
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Résultats Impeccables</h3>
              <p className="text-zinc-200">
                Garantie de satisfaction avec une grande attention aux détails
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Notre Philosophie</h3>
            <p className="text-lg leading-relaxed text-zinc-300">
              Chez D&S Barber, nous combinons les techniques traditionnelles du barbier avec les tendances modernes. 
              Notre ambiance conviviale et respectueuse garantit une expérience unique à chaque visite. 
              Nous nous engageons à vous offrir des résultats impeccables grâce à notre grande attention aux détails.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default TeamSection;