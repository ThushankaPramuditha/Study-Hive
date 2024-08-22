
import React from 'react';
import feature1 from '../assets/images/features1.png';
import quizes from '../assets/images/quizes.png';
import girl from '../assets/images/girlstudent.png';
import studypartner from '../assets/images/studypartner.png';

const FeaturesSection = () => {
  return (
    <section className="features py-12 px-5 text-center mt-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-customBlue mb-5 font-bold">
        Our <span className="text-2xl sm:text-3xl md:text-4xl text-customYellow font-bold">Features</span>
      </h2>
      <p className="text-base sm:text-lg md:text-2xl text-center text-customGray">
        These very extraordinary features can make learning activities more efficient.
      </p>

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-5 mt-5 justify-center">
        <div className="feature-image w-full md:w-[700px] h-auto md:h-[600px]">
          <img src={feature1} alt="StudyHive-feature" className="mt-10 md:mt-20 w-full h-auto" />
        </div>
        <div className="mt-10 md:mt-20 w-full md:w-[460px] px-5">
          <h3 className="text-2xl sm:text-3xl text-customBlue font-bold mb-5 text-left">
            Create or Join <span className="text-2xl sm:text-3xl text-customYellow font-bold">interactive</span> Study Sessions
          </h3>
          <p className="text-left text-customGray text-base sm:text-lg md:text-xl mt-5">
            Join interactive study sessions anytime, anywhere. Our virtual study rooms offer real-time collaboration with peers, complete with tools like whiteboards and video conferencing.
          </p>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-5 mt-1 justify-center">
        <div className="mt-10 md:mt-20 w-full md:w-[460px] px-5">
          <h3 className="text-2xl sm:text-3xl text-customBlue font-bold mb-5 text-left">
            Get Help Whenever You Need From The Large <span className="text-2xl sm:text-3xl text-customYellow font-bold">Community</span>
          </h3>
          <p className="text-left text-customGray text-base sm:text-lg md:text-xl mt-5">
            Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can hand out assignments in real-time for students to complete and submit.
          </p>
        </div>
        <div className="feature-image w-full md:w-[400px] h-auto md:h-[500px]">
          <img src={girl} alt="StudyHive-feature-girl" className="mt-10 md:mt-20 w-full h-auto" />
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-5 mt-2 justify-center">
        <div className="feature-image w-full md:w-[400px] h-auto md:h-[400px]">
          <img src={quizes} alt="StudyHive-feature-quizes" className="mt-10 md:mt-20 w-full h-auto" />
        </div>
        <div className="mt-10 md:mt-20 w-full md:w-[460px] px-5">
          <h3 className="text-2xl sm:text-3xl text-customBlue font-bold mb-5 text-left">
            Assessments, <span className="text-2xl sm:text-3xl text-customYellow font-bold">Quizzes</span>, Tests
          </h3>
          <p className="text-left text-customGray text-base sm:text-lg md:text-xl mt-5">
            Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.
          </p>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-5 mt-10 justify-center">
        <div className="mt-10 md:mt-20 w-full md:w-[460px] px-5">
          <h3 className="text-2xl sm:text-3xl text-customBlue font-bold mb-5 text-left">
            Find the perfect <span className="text-2xl sm:text-3xl text-customYellow font-bold">Study Partner</span>
          </h3>
          <p className="text-left text-customGray text-base sm:text-lg md:text-xl mt-5">
            Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.
          </p>
        </div>
        <div className="feature-image w-full md:w-[400px] h-auto md:h-[400px]">
          <img src={studypartner} alt="StudyHive-studypartner" className="mt-10 md:mt-20 w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

