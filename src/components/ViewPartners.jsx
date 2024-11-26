import React from 'react';
import { Link } from 'react-router-dom';
import SideBarnNavbar from './SideBarnNavbar';



const ViewPartners = () => {
  return (
    <div className="">
      <SideBarnNavbar />
      <div className="ml-[300px] mt-[20px] flex-1">
      <p className="text-black  text-[16px] font-semibold mt-8">Suggested Study Partner Requests  <Link to="/ViewPartners" className="underline font-light ml-3 text-[14px] text-[#929292]">view more </Link></p>
      <div className="bg-[#F1F1F1] h-[310px] mr-20 rounded-lg p-2 mt-6">
        <div className="container mx-auto grid grid-cols-3 gap-6 mt-6 justify-center w-[90%] ">
          <div  className="content-card bg-white p-5 my-5 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 w-full h-50 relative ">
            <h3 className=" text-[#222] font-bold text-[14px] ">Looking for a Study Partner</h3>
            <p className=" text-[#A6B15C] font-light mb-3 text-[12px]">CS/Machine Learning</p>
            <p className="text-[#717171] text-[12px] mb-3">I am passionate about ML & like to get a basic knowledge about it. Inviting someone who’s also passionate about ML to join with me.</p>
            <Link to="/ViewPartners"  className=" text-[#D4944C] font-light  text-[12px]">View more details &gt;</Link >
          </div>

          <div  className="content-card bg-white p-5 my-5 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 w-full h-50 relative ">
            <h3 className=" text-[#222] font-bold text-[14px] ">Looking for a Study Partner</h3>
            <p className=" text-[#A6B15C] font-light mb-3 text-[12px]">CS/SpringBoot</p>
            <p className="text-[#717171] text-[12px] mb-3">I am passionate about learning springboot & like to get a basic knowledge about it. Inviting someone who’s also passionate to join with me.</p>
            <Link to="/ViewPartners"  className=" text-[#D4944C] font-light  text-[12px]">View more details &gt;</Link >
          </div>

          <div  className="content-card bg-white p-5 my-5 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 w-full h-50 relative ">
            <h3 className=" text-[#222] font-bold text-[14px] ">Looking for a Study Partner</h3>
            <p className=" text-[#A6B15C] font-light mb-3 text-[12px]">CS/Python programming</p>
            <p className="text-[#717171] text-[12px] mb-3">I am passionate about python language & like to get a basic knowledge about it. Inviting someone who’s also passionate to join with me</p>
            <Link to="/ViewPartners"  className=" text-[#D4944C] font-light  text-[12px]">View more details &gt;</Link >
          </div>

</div>

<p className="text-black text-[16px] font-semibold mt-20">
          Study Partner Requests
        </p>
        <div className="bg-white rounded-lg p-4 mt-4 ">
          {/* Tabs for categories */}
          <div className="flex border-b mb-4 text-[11px]">
            <button className="flex-1 py-2 text-black  font-semibold border-b-2 border-black">All</button>
            <button className="flex-1 py-2 text-black  font-semibold">CS</button>
            <button className="flex-1 py-2 text-black  font-semibold">Mgt. & Accounting</button>
            <button className="flex-1 py-2 text-black  font-semibold">Economics</button>
            <button className="flex-1 py-2 text-black  font-semibold">Geography</button>
            <button className="flex-1 py-2 text-black  font-semibold">Mathematics</button>
            <button className="flex-1 py-2 text-black  font-semibold">...</button>
          </div>
          {/* Table structure for study partner requests */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-white">
                <tr>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Description</th>
                  <th className="py-2 px-4">Studying</th>
                  <th className="py-2 px-4">Study Time</th>
                  <th className="py-2 px-4">Adaptability</th>
                  <th className="py-2 px-4">Rating</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Rows with study partner data */}
                <tr className="border-t">
                  <td className="py-2 px-4">John Brown</td>
                  <td className="py-2 px-4">I am passionate about ML & like to get a basic knowledge about it. Inviting someone who’s also passionate about ML to join with me</td>
                  <td className="py-2 px-4">ML</td>
                  <td className="py-2 px-4">Night</td>
                  <td className="py-2 px-4">Slow</td>
                  <td className="py-2 px-4">4.2/5</td>
                  <td className="py-2 px-4">
                    <span className="text-green-600 cursor-pointer">Accept</span> | <span className="text-red-600 cursor-pointer">Delete</span>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 px-4">Jim Green</td>
                  <td className="py-2 px-4">I would like to learn about ML & like to get a basic knowledge about it. Inviting someone who’s also passionate about ML to join with me</td>
                  <td className="py-2 px-4">Python</td>
                  <td className="py-2 px-4">Morning</td>
                  <td className="py-2 px-4">Fast</td>
                  <td className="py-2 px-4">4.7/5</td>
                  <td className="py-2 px-4">
                    <span className="text-green-600 cursor-pointer">Accept</span> | <span className="text-red-600 cursor-pointer">Delete</span>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 px-4">Joe Black</td>
                  <td className="py-2 px-4">I am passionate about ML & like to get a basic knowledge about it. Inviting someone who’s also passionate about ML to join with me</td>
                  <td className="py-2 px-4">C++</td>
                  <td className="py-2 px-4">Evening</td>
                  <td className="py-2 px-4">Slow</td>
                  <td className="py-2 px-4">4.9/5</td>
                  <td className="py-2 px-4">
                    <span className="text-green-600 cursor-pointer">Accept</span> | <span className="text-red-600 cursor-pointer">Delete</span>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 px-4">Edward King</td>
                  <td className="py-2 px-4">I am interested in learning about ML & like to get a basic knowledge about it. Inviting someone who’s also passionate about ML to join with me</td>
                  <td className="py-2 px-4">Springboot</td>
                  <td className="py-2 px-4">Night</td>
                  <td className="py-2 px-4">Slow</td>
                  <td className="py-2 px-4">3.9/5</td>
                  <td className="py-2 px-4">
                    <span className="text-green-600 cursor-pointer">Accept</span> | <span className="text-red-600 cursor-pointer">Delete</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

            </div>
      </div>
</div>
  )
}
export default ViewPartners;