import React from 'react';
import HeroSection from './HeroSection';
import ContentSection from './ContentSection';
import FeatureSection from './FeatureSection';
import ServiceSection from './ServiceSection';
import TestimonialSection from './testimonialSection';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <ContentSection />
      <ServiceSection />
      <FeatureSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Home;
