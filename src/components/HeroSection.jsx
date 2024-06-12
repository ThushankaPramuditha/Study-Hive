import React from 'react';
import heroImage from '../assets/images/hero-image.png';

const HeroSection = () => {
  return (
    <section className="hero bg-yellow-200 py-12 text-left text-black w-full h-[75vh] mb-10 rounded-b-[70%] overflow-hidden flex items-row">
      <div className="hero-text ml-8 pr-20">
        <h1 className="text-5xl mb-2 text-orange-500 ml-10 mt-20 font-bold">Collaborate, Learn & Achieve</h1>
        <p className="text-lg text-customGray ml-10 ">StudyHive is an interesting platform that will help you to study collaboratively & more an interactive way.</p>
        <button className="bg-custom-color hover:bg-custom-color-800 text-white py-2 px-4 rounded-lg mt-5 ml-10">Join for free</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="StudyHive" className="mt-20 w-full h-[95%] " />
      </div>
    </section>
  );
};

export default HeroSection;
