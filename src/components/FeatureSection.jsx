import React from 'react';
import feature1 from '../assets/images/features1.png';
import quizes from '../assets/images/quizes.png';
import girl from '../assets/images/girlstudent.png';
import studypartner from '../assets/images/studypartner.png';


const FeaturesSection = () => {
  return (
    
    <section className="features py-12 px-5 text-center ml-10">
    <h2 className="text-[40px] text-customBlue mb-5 font-bold">Our<span className="text-[40px] text-customYellow font-bold">Features</span></h2>
      <p className="text-[26px] text-center text-customGray">These very extraordinary features, can make learning activities more efficient.</p>

      <div className="container flex items-row gap-5 mt-5 justify-center">
            <div className="feature-image ml-10 w-[700px] h-[600px] ">
             <img src={feature1} alt="StudyHive-feature" className="mt-20 w-full h-auto" />
            </div>
           
             <div className="mt-20 w-[460px] mr-10">
             <h3 className="text-3xl text-customBlue font-bold mb-5 text-left mt-20">Create or Join <span className="text-3xl text-customYellow font-bold mb-5">interactive</span> <br></br> Study Sessions</h3>
              <p className="text-left text-customGray text-2xl mt-10">Join interactive study sessions anytime, anywhere. Our virtual study rooms offer real-time collaboration with peers, complete with tools like whiteboards and video conferencing.</p>
             </div>
      </div>

      <div className="container flex items-row gap-8 mt-2 justify-center mb-5">
            <div className="mt-20 w-[460px] mr-10">
             <h3 className="text-3xl text-customBlue font-bold mb-5 text-left mt-20">Get Help Whenever You Need From The Large <span className="text-3xl text-customYellow font-bold mb-5">Community</span></h3>
              <p className="text-left text-customGray text-2xl mt-10">Class has a dynamic set of teaching tools built to be deployed and used during class.Teachers can handout assignments in real-time for students to complete and submit.</p>
             </div>

            <div className="feature-girl-image ml-10 w-[400px] h-[500px] ">
             <img src={girl} alt="StudyHive-feature-girl" className="mt-20 w-full h-auto" />
            </div>
           
           
      </div>

      <div className="container flex items-row gap-10 mt-10 justify-center">
            <div className="feature-quizes-image ml-10 w-[400px] h-[400px] ">
             <img src={quizes} alt="StudyHive-feature-quizes" className="mt-20 w-full h-auto" />
            </div>
           
             <div className="mt-20 w-[460px] ml-10">
             <h3 className="text-3xl text-customBlue font-bold mb-5 text-left mt-20 ">Assessments,<span className="text-3xl text-customYellow font-bold mb-5"> Quizzes</span>,Tests</h3>
              <p className="text-left text-customGray text-2xl mt-10">Easily launch live assignments, quizzes, and tests.Student results are automatically entered in the online gradebook.</p>
             </div>
      </div>

      <div className="container flex items-row gap-10 mt-20 justify-center">
             <div className="mt-20 w-[460px] ml-10">
             <h3 className="text-3xl text-customBlue font-bold mb-5 text-left mt-20 ">Find the perfect<span className="text-3xl text-customYellow font-bold mb-5"> Study Partner</span></h3>
              <p className="text-left text-customGray text-2xl mt-10">Easily launch live assignments, quizzes, and tests.Student results are automatically entered in the online gradebook.</p>
             </div>

             <div className="feature-quizes-image ml-10 w-[400px] h-[400px] ">
             <img src={studypartner} alt="StudyHive-studypartner" className="mt-20 w-full h-auto" />
            </div>
      </div>

    </section>
  );
};

export default FeaturesSection;
