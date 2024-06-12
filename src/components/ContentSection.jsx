import React from 'react';

const ContentsSection = () => {
  return (
    <section className="contents py-12 px-5 text-center mt-10">
    <h2 className="text-[40px] text-customBlue mb-5 font-bold">All-in-One <span className="text-[40px] text-customYellow font-bold">Study Platform</span></h2>
      <p className="text-[24px] text-center text-customGray">Your all-in-one platform for collaborative learning. Connect with study partners, access quality resources, <br></br>get expert help, join interactive study rooms, quizes and stay motivated with our gamified leaderboard.</p>

      <div className="container mx-auto flex items-row gap-8 mt-10 justify-center w-[75%]">
      <div className="content-card bg-white p-5 my-5 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 mt-5 ">
        <div className="flex items-center justify-center"> 
          <div className="rounded-full bg-customOlive w-10 h-10 flex items-center justify-center mb-5 mt-5"> 
          <i class="fa-solid fa-users text-customOlive text-3xl"></i>
          </div>
        </div>
          <h3 className="text-xl text-customBlue font-bold mb-5">Collaborative Learning Environments</h3>
          <p className="text-customGray">Learning is more effective with the right partner. Join StudyHive to connect with like-minded students and enhance your study sessions.</p>
        </div>
        <div className="content-card bg-white p-5 my-5 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 mt-5 ">
        <div className="flex items-center justify-center"> 
          <div className="rounded-full bg-customYellow w-10 h-10 flex items-center justify-center mb-5 mt-5"> 
            <i className="fas fa-user-tie text-customYellow text-3xl"></i>
          </div>
        </div>
        <h3 className="text-xl text-customBlue font-bold mb-5">Get Expert Guidance</h3>
        <p className="text-customGray">Overcome academic hurdles with expert assistance. Connect with knowledgeable tutors who provide targeted support tailored to your needs.</p>
      </div>

      <div className="content-card bg-white p-5 my-5 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 mt-5 ">
        <div className="flex items-center justify-center"> 
          <div className="rounded-full bg-customOrange w-10 h-10 flex items-center justify-center mb-5 mt-5"> 
          <i class="fa-solid fa-book text-customOrange text-3xl"></i>
          </div>
        </div>
          <h3 className="text-xl text-customBlue font-bold mb-5">Share Study Materials</h3>
          <p className="text-customGray">Share your notes, gain new insights, and contribute to our growing community. Together, we create a rich repository of knowledge for everyone.</p>
        </div>
      </div>
    </section>
  );
};

export default ContentsSection;