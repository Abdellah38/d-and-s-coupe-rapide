
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
      title: "Produits Premium",
      description: "Sélection de produits haut de gamme"
    },
    {
      url: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=600&fit=crop&crop=center",
      alt: "Salon de coiffure moderne",
      title: "Ambiance Chaleureuse",
      description: "Un espace pensé pour votre confort"
    },
    {
      url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop&crop=center",
      alt: "Espace d'attente confortable",
      title: "Espace Détente",
      description: "Relaxez-vous avant votre soin"
    },
    {
      url: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop&crop=center",
      alt: "Architecture moderne du salon",
      title: "Design Contemporain",
      description: "Modernité et élégance"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 warm-gradient opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-light mb-8">
            <span className="warm-text-gradient">Notre Univers</span>
          </h2>
          <p className="text-2xl text-warm-brown/80 max-w-4xl mx-auto font-light leading-relaxed">
            Plongez dans l'atmosphère unique de D&S Barber
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-4 md:-ml-6">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2">
                  <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover-lift">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-8 left-8 right-8">
                        <h3 className="text-white font-light text-2xl mb-2">{image.title}</h3>
                        <p className="text-white/90 font-light">{image.description}</p>
                      </div>
                    </div>
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-3 h-3 bg-accent rounded-full animate-ping"></div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-6 glass-effect border-white/30 text-warm-brown hover:bg-primary/20 rounded-2xl" />
            <CarouselNext className="right-6 glass-effect border-white/30 text-warm-brown hover:bg-primary/20 rounded-2xl" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
