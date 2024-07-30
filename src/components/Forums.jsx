import React from "react";
import SideBarnNavbar from "./SideBarnNavbar";

const Forums = () => {
  
  const categories = [
    "General",
    "Computer S.",
    "Law",
    "Biology",
    "Chemistry",
    "Engineering",
    "Medicine",
    "Computer S.",
    "Law",
    "Biology",
  ];

  return (
    <div className="">
      <SideBarnNavbar />
      <div
        className="xl:flex
    mt-2 xl:ml-[263px] ml-[60px]"
      >
        <div className="xl:w-[75%]">
          <div className="ml-3 mr-3">
            <div className="flex items-center justify-center ml-12">
              <div className="relative flex items-center">
                <i class="fa-solid fa-magnifying-glass absolute ml-5 pointer-events-none text-xl"></i>
                <input
                  className="bg-search  border-none pr-3 pl-14  xl:w-[700px] h-[50px] rounded-[40px] mr-20 placeholder-black text-lg"
                  name="search"
                  placeholder="Search Questions"
                  autocomplete="off"
                  aria-label="Search Study Rooms"
                ></input>
              </div>
            </div>
          </div>
          <div className="ml-20 mr-20 mt-5">
            <div className="xl:flex rounded-[20px] w-[100%] h-[350px]">
              <div className="xl:flex  justify-between items-center bg-questions xl:w-[30%] mt-10 xl:mb-10 xl:ml-5 xl:rounded-l-[30px] rounded-t-[30px]">
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
            
                <div className="flex items-center h-[50%] mt-5">
                  <textarea
                    className="border questions rounded-[20px] h-[140px] w-[550px] p-5 "
                    placeholder="Type your question here"
                  ></textarea>
                </div>
                <div class="flex justify-between items-center h-[25%] p-5">
                  <div className="flex">
                    <div className="flex items-center">
                      <i class="fa-regular fa-file-image text-xl logo1"></i>
                      <p className="ml-2">Photo</p>
                    </div>
                    <div className="flex items-center ml-10">
                      <i class="fa-regular fa-file-video text-xl logo1"></i>
                      <p className="ml-2">Video</p>
                    </div>
                  </div>
                  <div>
                    <button className="bg-questions pt-2 pb-2 pr-10 pl-10 rounded-3xl font-semibold hover:shadow-lg hover:shadow-gray-400 active:shadow-none">
                      Post
                    </button>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="flex w-auto justify-between mt-12 overflow-y-auto scrollbar-thin pl-5 pr-5 h-[100px]">
            {categories.map((category, index) => (
              <div key={index}>
                
                  <button
                    className={`flex catergory ${
                      category === "General" ? "catergoryselect" : ""
                    } w-[115px] h-[40px] rounded-[20px] justify-center items-center text-sm hover:shadow-lg hover:shadow-gray-400  active:shadow-none`}
                  >
                    <p>{category}</p>
                  </button>
                
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center ml-10 mr-10 mb-7">
            <div className="flex items-center ">
              <p className="text-lg font-bold text-xl">All Questions</p>
            </div>
            <div>
              <button className="catergory pr-4 pl-4 rounded-3xl font-semibold mr-5 hover:shadow-lg hover:shadow-gray-400 active:shadow-none">
                Newest
              </button>
              <button className="catergory pr-4 pl-4 rounded-3xl font-semibold hover:shadow-lg hover:shadow-gray-400 active:shadow-none">
                Popular
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center ml-2">
            <div className="xl:w-[90%] h-auto bg-gray-100 rounded-[10px] justify-between m-2 p-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center mt-4">
                  <div>
                    <div className="ml-4 w-2 h-2 bg-green-700 rounded"></div>
                  </div>
                  <div>
                    <div className="ml-3 w-[52px] h-[52px] border-2 border-yellow-400 rounded-full bg-black"></div>
                  </div>
                  <div className="flex flex-col ml-2">
                    <p className="text-lg font-semibold ">Thushanka Shyamal</p>
                    <p className="text-gray-400">Online</p>
                  </div>
                </div>
                <div className="flex ml-20 mr-5">
                  <i class="text-gray-400 fa-solid fa-angle-down text-2xl"></i>
                </div>
              </div>
              <div className="">
                <div className="border-l border-gray-500 h-auto ml-14 mt-4 p-2 mr-10  mb-3">
                  <div className="pl-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Delectus quia consectetur debitis id natus, repellat dicta
                      fuga perferendis, porro aperiam tenetur dolores
                      accusantium enim consequuntur repudiandae quod assumenda
                      commodi nisi.
                    </p>
                  </div>
                  <div className="flex pl-2 mt-5">
                    <div className="flex items-center">
                      <i class="fa-regular fa-message text-gray-400"></i>
                      <p className="text-gray-400 ml-2">4</p>
                    </div>
                    <div className="flex items-center ml-6">
                      <i class="fa-regular fa-eye text-gray-400"></i>
                      <p className="text-gray-400 ml-2">4</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-[90%] h-auto bg-gray-100 rounded-[10px] justify-between m-2 p-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center mt-4">
                  <div>
                    <div className="ml-4 w-2 h-2 bg-green-700 rounded"></div>
                  </div>
                  <div>
                    <div className="ml-3 w-[52px] h-[52px] border-2 border-yellow-400 rounded-full bg-black"></div>
                  </div>
                  <div className="flex flex-col ml-2">
                    <p className="text-lg font-semibold ">Thushanka Shyamal</p>
                    <p className="text-gray-400">Online</p>
                  </div>
                </div>
                <div className="flex ml-20 mr-5">
                  <i class="text-gray-400 fa-solid fa-angle-down text-2xl"></i>
                </div>
              </div>
              <div className="">
                <div className="border-l border-gray-500 h-auto ml-14 mt-4 p-2 mr-10 mb-3">
                  <div className="pl-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Delectus quia consectetur debitis id natus, repellat dicta
                      fuga perferendis, porro aperiam tenetur dolores
                      accusantium enim consequuntur repudiandae quod assumenda
                      commodi nisi.
                    </p>
                  </div>
                  <div className="flex pl-2 mt-5">
                    <div className="flex items-center">
                      <i class="fa-regular fa-message text-gray-400"></i>
                      <p className="text-gray-400 ml-2">4</p>
                    </div>
                    <div className="flex items-center ml-6">
                      <i class="fa-regular fa-eye text-gray-400"></i>
                      <p className="text-gray-400 ml-2">4</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-100 border border-gray-200 hidden xl:block"></div>
        <div className="xl:w-[25%]">
          <div className="">
            <div>
              <p className="m-10 mb-4 font-semibold text-2xl">Notifications</p>
            </div>
            <div className="flex flex-col items-center ml-2">
              <div className="flex items-center xl:w-[90%] w-[350px] h-auto bg-gray-100 rounded-[10px] justify-between m-2 p-2">
                <div className="flex items-center">
                  <div>
                    <div className="ml-4 w-2 h-2 bg-gray-400 rounded"></div>
                  </div>
                  <div>
                    <div className="ml-3 w-[52px] h-[52px] border-2 border-yellow-400 rounded-full bg-black"></div>
                  </div>
                  <div className="flex flex-col ml-2">
                    <p className="text-lg font-semibold ">Pramukha Thenuwara</p>
                    <p className="opacity-40">added a comment to your post.</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center xl:w-[90%] w-[350px] h-auto bg-gray-100 rounded-[10px] justify-between m-2 p-2">
                <div className="flex items-center">
                  <div>
                    <div className="ml-4 w-2 h-2 bg-gray-400 rounded"></div>
                  </div>
                  <div>
                    <div className="ml-3 w-[52px] h-[52px] border-2 border-yellow-400 rounded-full bg-black"></div>
                  </div>
                  <div className="flex flex-col ml-2">
                    <p className="text-lg font-semibold ">
                      Thushanka Pramuditha
                    </p>
                    <p className="opacity-40">added a comment to your post.</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center xl:w-[90%] w-[350px] h-auto bg-gray-100 rounded-[10px] justify-between m-2 p-2">
                <div className="flex items-center">
                  <div>
                    <div className="ml-4 w-2 h-2 bg-gray-400 rounded"></div>
                  </div>
                  <div>
                    <div className="ml-3 w-[52px] h-[52px] border-2 border-yellow-400 rounded-full bg-black"></div>
                  </div>
                  <div className="flex flex-col ml-2">
                    <p className="text-lg font-semibold ">Dinushanka Shyamal</p>
                    <p className="opacity-40">added a comment to your post.</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center xl:w-[90%] w-[350px] h-auto bg-gray-100 rounded-[10px] justify-between m-2 p-2">
                <div className="flex items-center">
                  <div>
                    <div className="ml-4 w-2 h-2 bg-gray-400 rounded"></div>
                  </div>
                  <div>
                    <div className="ml-3 w-[52px] h-[52px] border-2 border-yellow-400 rounded-full bg-black"></div>
                  </div>
                  <div className="flex flex-col ml-2">
                    <p className="text-lg font-semibold ">Kasun Udara</p>
                    <p className="opacity-40">added a comment to your post.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forums;
