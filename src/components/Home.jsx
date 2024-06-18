import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeroSection from './HeroSection';
import ContentSection from './ContentSection';
import FeatureSection from './FeatureSection';
import ServiceSection from './ServiceSection';
import TestimonialSection from './testimonialSection';


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
    
      
      {/* Add more sections as needed */}
    </div>
  );
};

export default Home;
