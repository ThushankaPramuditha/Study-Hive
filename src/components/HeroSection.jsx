import React from 'react';
import heroImage from '../assets/images/hero-image.png';

const HeroSection = () => {
  return (
    <section className="hero bg-yellow-200 py-12 text-left text-black w-full h-auto mb-10 rounded-b-[70%] overflow-hidden flex flex-col md:flex-row items-center md:items-start">
      <div className="hero-text ml-8 md:ml-16 pr-20 flex-1">
        <h1 className="text-4xl ml-5 md:text-5xl mb-2 text-orange-500 mt-10 md:mt-20 font-bold text-center md:text-left">Collaborate, Learn & Achieve</h1>
        <p className="text-lg ml-[-5] text-customGray mt-4 text-center md:text-left md:ml-10">StudyHive is an interesting platform that will help you to study collaboratively & more an interactive way.</p>
        <div className="flex justify-center ml-10 md:justify-start">
          <button className="bg-custom-color hover:bg-custom-color-800 text-white py-2 px-4 rounded-lg mt-5">Join for free</button>
        </div>
      </div>
      <div className="hero-image flex-1 mt-15 md:mt-0">
        <p></p>
        <img src={heroImage} alt="StudyHive" className="w-full h-auto object-cover ml-3 " />
      </div>
    </section>
  );
};

export default HeroSection;
