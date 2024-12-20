import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBarnNavbar from "./SideBarnNavbar";

const StudyRooms = () => {
  const subjects = ['Data Structures', 'Algorithms', 'Web Development', 'Machine Learning'];
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({
    title: '',
    content: '',
    category: ''
  });

  useEffect(() => {
    // Fetch all questions when the component mounts
    axios.get('http://localhost:8080/api/questions')
      .then(response => setQuestions(response.data))
      .catch(error => console.error('Error fetching questions:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewQuestion({ ...newQuestion, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/questions', newQuestion)
      .then(response => {
        setQuestions([...questions, response.data]);
        setNewQuestion({ title: '', content: '', category: '' });
      })
      .catch(error => console.error('Error posting question:', error));
  };

  return (
    <div className="">
      <SideBarnNavbar />
      <div className="xl:flex mt-2 xl:ml-[263px] ml-[60px]">
        <div className="xl:w-[75%]">
          <div className="ml-3 mr-3">
            <div className="flex w-auto justify-between mt-5 overflow-y-auto scrollbar-thin">
              <div className="flex catergoryselect w-[115px] h-[40px] rounded-[20px] justify-center items-center text-sm">
                <p>General</p>
              </div>
              <div className="flex catergory w-[115px] h-[40px] rounded-[20px] justify-center items-center text-sm">
                Computer S.
              </div>
              <div className="flex catergory w-[115px] h-[40px] rounded-[20px] justify-center items-center text-sm">
                Law
              </div>
              <div className="flex catergory w-[115px] h-[40px] rounded-[20px] justify-center items-center text-sm">
                Biology
              </div>
              <div className="flex catergory w-[115px] h-[40px] rounded-[20px] justify-center items-center text-sm">
                Chemistry
              </div>
              <div className="flex catergory w-[115px] h-[40px] rounded-[20px] justify-center items-center text-sm">
                Engineering
              </div>
              <div className="flex catergory w-[115px] h-[40px] rounded-[20px] justify-center items-center text-sm">
                Medicine
              </div>
              <div className="flex catergory w-[115px] h-[40px] rounded-[20px] justify-center items-center text-sm">
                Computer S.
              </div>
              <div className="flex catergory w-[115px] h-[40px] rounded-[20px] justify-center items-center text-sm">
                Law
              </div>
              <div className="flex catergory w-[115px] h-[40px] rounded-[20px] justify-center items-center text-sm">
                Biology
              </div>
            </div>
            <div className="flex items-center justify-center mt-12 ml-12">
              <div className="relative flex items-center">
                <i className="fa-solid fa-magnifying-glass absolute ml-5 pointer-events-none text-xl"></i>
                <input
                  className="bg-search border-none pr-3 pl-14 xl:w-[700px] h-[50px] rounded-[40px] mr-20 placeholder-black text-lg"
                  name="search"
                  placeholder="Search Questions"
                  autoComplete="off"
                  aria-label="Search Study Rooms"
                ></input>
              </div>
            </div>
          </div>
          <div className="ml-20 mr-20 mt-12">
            <div className="xl:flex rounded-[20px] w-[100%] h-[350px]">
              <div className="xl:flex justify-between items-center bg-questions xl:w-[30%] mt-10 xl:mb-10 xl:ml-5 xl:rounded-l-[30px] rounded-t-[30px]">
                <div></div>
                <div className="">
                  <div className="flex xl:justify-end justify-center mb-[-15px]">
                    <p className="text-5xl font-semibold mr-2">Throw</p>
                  </div>
                  <div className="flex xl:justify-end justify-center">
                    <p className="text-5xl font-semibold mr-2 text-white">
                      Your
                    </p>
                  </div>
                  <div className="flex xl:justify-end justify-center mt-[-15px]">
                    <p className="text-5xl font-semibold mr-2">Questions</p>
                  </div>
                </div>
              </div>
              <div className="shadow-lg p-5 rounded-3xl">
                <form onSubmit={handleSubmit}>
                  <div className="flex items-center h-[25%] ">
                    <select
                      className="border questions rounded-2xl p-2"
                      name="category"
                      value={newQuestion.category}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a category</option>
                      {subjects.map(subject => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center h-[25%] mt-5">
                    <input
                      type="text"
                      className="border questions rounded-[20px] w-[550px] p-5"
                      placeholder="Title"
                      name="title"
                      value={newQuestion.title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex items-center h-[50%] mt-5">
                    <textarea
                      className="border questions rounded-[20px] h-[140px] w-[550px] p-5"
                      placeholder="Type your question here"
                      name="content"
                      value={newQuestion.content}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="flex justify-between items-center h-[25%] p-5">
                    <div className="flex">
                      <div className="flex items-center">
                        <i className="fa-regular fa-file-image text-xl logo1"></i>
                        <p className="ml-2">Photo</p>
                      </div>
                      <div className="flex items-center ml-10">
                        <i className="fa-regular fa-file-video text-xl logo1"></i>
                        <p className="ml-2">Video</p>
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="bg-questions pt-2 pb-2 pr-10 pl-10 rounded-3xl font-semibold"
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center ml-10 mr-10 xl:mt-[8%] mb-7 mt-[170px]">
            <div className="flex items-center">
              <p className="text-lg font-bold text-xl">All Questions</p>
            </div>
            <div>
              <button className="catergory pr-4 pl-4 rounded-3xl font-semibold mr-5">
                Newest
              </button>
              <button className="catergory pr-4 pl-4 rounded-3xl font-semibold">
                Popular
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center ml-2">
            {questions.map(question => (
              <div key={question.id} className="xl:w-[90%] h-auto bg-gray-100 rounded-[10px] justify-between m-2 p-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center mt-4">
                    <div className="ml-4 w-2 h-2 bg-green-700 rounded"></div>
                    <div className="ml-3 w-[52px] h-[52px] border-2 border-yellow-400 rounded-full bg-black"></div>
                    <div className="flex flex-col ml-2">
                      <p className="text-lg font-semibold ">{question.title}</p>
                      <p className="text-gray-400">{question.category}</p>
                    </div>
                  </div>
                  <div>
                    <i className="fa-solid fa-ellipsis text-2xl"></i>
                  </div>
                </div>
                <div className="ml-16 mt-3 mb-3">
                  <p className="text-gray-600">{question.content}</p>
                </div>
                <div className="flex justify-around items-center text-gray-400 m-3 text-xl border-b border-gray-400">
                  <div className="flex items-center">
                    <i className="fa-regular fa-comment mr-2 text-2xl"></i>
                    <p>7</p>
                  </div>
                  <div className="flex items-center">
                    <i className="fa-solid fa-thumbs-up mr-2 text-2xl"></i>
                    <p>7</p>
                  </div>
                  <div className="flex items-center">
                    <i className="fa-solid fa-thumbs-down mr-2 text-2xl"></i>
                    <p>7</p>
                  </div>
                  <div className="flex items-center">
                    <i className="fa-regular fa-share-from-square mr-2 text-2xl"></i>
                    <p>7</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="xl:w-[25%]"></div>
      </div>
    </div>
  );
};

export default StudyRooms;
