
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery = () => {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=600&fit=crop&crop=center",
      alt: "Produits de barbier professionnels",
      title: "Produits Premium"
    },
    {
      url: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=600&fit=crop&crop=center",
      alt: "Salon de coiffure moderne",
      title: "Ambiance Chaleureuse"
    },
    {
      url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop&crop=center",
      alt: "Espace d'attente confortable",
      title: "Espace Détente"
    },
    {
      url: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop&crop=center",
      alt: "Architecture moderne du salon",
      title: "Design Contemporain"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Notre Univers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez l'atmosphère unique de D&S Barber à travers notre galerie
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" />
            <CarouselNext className="right-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
