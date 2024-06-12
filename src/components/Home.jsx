import React from 'react';
import HeroSection from './HeroSection';
import ContentSection from './ContentSection';
import FeatureSection from './FeatureSection';
import ServiceSection from './ServiceSection';
import TestimonialSection from './testimonialSection';

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <ContentSection />
      <ServiceSection />
      <FeatureSection />
      <TestimonialSection />
      {/* Add more sections as needed */}
    </div>
  );
};

export default Home;