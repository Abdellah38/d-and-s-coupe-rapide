
import React, { useEffect, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Gallery = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = parallaxRef.current;
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const galleryImages = [
    {
      url: "https://www.karben-barber.fr/wp-content/uploads/2022/03/aqua-wax-8-150-ml-1.png",
      alt: "Produits de barbier professionnels",
      title: "Produits Premium",
      description: "Sélection de produits haut de gamme"
    },
    {
      url: "/lovable-uploads/e5c4e1f9-424c-487d-9151-c35d04b89a9d.png",
      alt: "Salon de coiffure moderne",
      title: "Ambiance Chaleureuse",
      description: "Un espace pensé pour votre confort"
    },
    {
      url: "https://images.unsplash.com/photo-1519500528352-2d1460418d41?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Espace d'attente confortable",
      title: "Espace Détente",
      description: "Relaxez-vous avant votre soin"
    },
    {
      url: "https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Architecture moderne du salon",
      title: "Design Contemporain",
      description: "Modernité et élégance"
    },
    {
      url: "https://images.unsplash.com/photo-1577467014696-4e9de06ee188?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Détails et finitions du salon",
      title: "Attention aux Détails",
      description: "Chaque élément compte"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div ref={parallaxRef} className="absolute inset-0 warm-gradient opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-light mb-8">
            <span className="warm-text-gradient">Notre Univers</span>
          </h2>
          <p className="text-2xl text-warm-brown/80 max-w-4xl mx-auto font-light leading-relaxed text-zinc-200">
            Plongez dans l'atmosphère unique de D&S Barber
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full" opts={{
            align: "start",
            loop: true
          }}>
            <CarouselContent className="-ml-4 md:-ml-6">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2">
                  <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover-lift">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <div 
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${image.url})`,
                          transform: index % 2 === 0 ? 'translateY(-10px)' : 'translateY(10px)'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="absolute bottom-8 left-8 right-8">
                          <h3 className="text-white font-light text-2xl mb-2">{image.title}</h3>
                          <p className="text-white/90 font-light">{image.description}</p>
                        </div>
                      </div>
                      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="w-3 h-3 bg-amber-400 rounded-full animate-ping"></div>
                      </div>
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
