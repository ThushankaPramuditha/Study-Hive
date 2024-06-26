import React from 'react';
import testimonial from '../assets/images/testimonial1.png';

const TestimonialSection = () => {
  return (
    <section className="testimonial py-12 px-5 mt-5 mx-auto max-w-7xl">
      <div className="container flex flex-col md:flex-row items-center md:items-start gap-8 mt-10 justify-center">
        <div className="w-full md:w-[450px] mt-10 md:ml-20 text-center md:text-left">
          <p>________________TESTIMONIAL</p>
          <h2 className="text-3xl md:text-3xl text-customBlue mb-5 font-bold mt-10">What They Say?</h2>
          <p className="text-xl md:text-xl text-customGray leading-[1.5]">
            StudyHive has got more than 10k positive ratings from our users around the world. <br /><br/>
            Some of the students and teachers were greatly helped by the StudyHive. <br /><br/>
            Are you too? Please give your assessment.
          </p>
        </div>

        <div className="testimonial-image w-full md:w-[400px] h-auto md:h-[600px] flex justify-center md:ml-10">
          <img src={testimonial} alt="StudyHive-testimonial" className="mt-10 md:mt-20 w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

