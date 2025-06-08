
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TeamSection from '../components/TeamSection';
import BookingSection from '../components/BookingSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
