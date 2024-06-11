import React from 'react';
import heroImage from '../assets/images/hero-image.png'; 

const Home = () => {
  return (
    <div className="home">
      <section className="hero bg-yellow-200 py-12 text-left text-white w-full h-[700px] rounded-b-[70%]">
        <div className="hero-text mt-[10%] ml-[5%]">
          <h1 className="text-[42px] mb-2 text-orange-500">Collaborate, Learn & Achieve</h1>
          <p className="text-lg">Join StudyHive today to achieve your academic goals.</p>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="StudyHive" className="w-[60%] h-[65%] ml-[50%]" />
        </div>
      </section>

      <section className="features py-12 px-5">
        <h2 className="text-[28px] mb-5">All-in-One Platform</h2>
        <p>Collaborate with peers, get expert guidance, and track your progress.</p>
      </section>
      <section className="testimonials py-12 px-5">
        <h2 className="text-[28px] mb-5">What They Say?</h2>
        <div className="testimonial-item bg-white p-5 my-5 rounded-lg shadow">
          <p className="text-base">"StudyHive transformed my learning experience!"</p>
          <span className="mt-2 italic text-gray-600 block">- Student A</span>
        </div>
      </section>
      <section className="news py-12 px-5">
        <h2 className="text-[28px] mb-5">Latest from StudyHive</h2>
        <div className="news-item bg-white p-5 my-5 rounded-lg shadow">
          <h3 className="text-xl">New Feature: Virtual Study Rooms</h3>
          <p>Join virtual study sessions with your classmates.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
