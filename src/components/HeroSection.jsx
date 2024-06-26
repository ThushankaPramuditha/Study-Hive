import React from 'react';
import heroImage from '../assets/images/hero-image1.png';

const HeroSection = () => {
  return (
    <section className="hero bg-yellow-200 py-12 text-left text-black w-full h-auto md:h-[600px] mb-10 rounded-b-[75%] overflow-hidden flex flex-col md:flex-row items-center md:items-start">
      <div className="hero-text ml-8 md:ml-16 pr-4 md:pr-20 flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl mb-2 text-orange-500 mt-10 md:mt-20 font-bold">
          Collaborate, Learn & Achieve
        </h1>
        <p className="text-lg text-customGray mt-4">
          StudyHive is an interesting platform that will help you to study collaboratively & in a more interactive way.
        </p>
        <div className="flex justify-center md:justify-start mt-5">
          <button className="bg-custom-color hover:bg-custom-color-800 text-white text-2xl font-bold py-4 px-6 rounded-3xl">
            Join For Free
          </button>
        </div>
      </div>
      <div className="hero-image flex-1 mt-10 md:mt-0 flex justify-center">
        <img src={heroImage} alt="StudyHive" className="w-4/5 md:w-3/4 h-auto object-cover" />
      </div>
    </section>
  );
};

export default HeroSection;
