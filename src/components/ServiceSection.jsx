import React from 'react';
import experts from '../assets/images/experts.png';
import students from '../assets/images/students.png';


const ServiceSection = () => {
  return (
    <section className="services py-12 px-5 text-center mt-10">
    <h2 className="text-[40px] text-customBlue mb-5 font-bold">What is <span className="text-[40px] text-customYellow font-bold">StudyHive</span></h2>

        <p className="text-[24px] text-center">An all-in-one collaborative learning platform where students connect with study partners,<br></br> access quality resources, get expert help, join interactive study rooms,quizes and<br></br>  stay motivated with a gamified leaderboard.</p>
        <div className="container flex justify-center items-center gap-12 mt-20">

          <div className="card w-[440px] h-[280px] my-5 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 mt-5 overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${experts})` }}>
            <h2 className="text-[30px] text-center mt-20 text-white font-bold">FOR SUBJECT EXPERTS</h2>
            <button className="border-2 border-white text-white hover:bg-white hover:text-customGray py-2 px-4 rounded-[80px] mt-8">Join Us Today</button>
          </div>

          <div className="card w-[440px] h-[280px] my-5 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 mt-5 overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${students})` }}>
          <h2 className="text-[30px] text-center mt-20 text-white font-bold">FOR STUDENTS</h2>
            <button className="bg-custom-color text-white hover:bg-white hover:text-customGray py-2 px-4 rounded-[80px] mt-8">Let's Learn</button>
          </div>
        </div>
    </section>
  );
};

export default ServiceSection;