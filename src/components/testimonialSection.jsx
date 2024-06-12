import React from 'react';
import testimonial from '../assets/images/testimonial.png';

const TestimonialSection = () => {
  return (
    <section className="testimonial py-12 px-5  mt-10 ml-20">
    <div className="container flex items-row gap-8 mt-10 justify-center">
        <div className="w-[450px] mt-10 ml-20">
        <p>________________TESTIMONIAL</p>
        <h2 className="text-[40px] text-customBlue mb-5 font-bold  mt-10">What They Say?</h2>
        <p className="text-[24px] text-customGray text-left leading-[1.5]">
          StudyHive has got more than 10k positive ratings from our users around the world. <br /><br/>
          Some of the students and teachers were greatly helped by the StudyHive. <br /><br/>
          Are you too? Please give your assessment.
        </p>
        </div>

        <div className="testimonial-image ml-10 w-[400px] h-[600px] ">
           <img src={testimonial} alt="StudyHive-testimonial" className="mt-20 w-full h-auto" />
        </div>
    </div>
    </section>
  );
};

export default TestimonialSection;