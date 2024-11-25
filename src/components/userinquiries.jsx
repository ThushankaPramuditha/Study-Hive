import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBarnNavbar from "./SideBarnNavbar";

const UserInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [newInquiry, setNewInquiry] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    // Fetch all user inquiries when the component mounts
    axios
      .get("http://localhost:8080/api/inquiries")
      .then((response) => setInquiries(response.data))
      .catch((error) => console.error("Error fetching inquiries:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInquiry({ ...newInquiry, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/inquiries", newInquiry)
      .then((response) => {
        setInquiries([...inquiries, response.data]);
        setNewInquiry({ title: "", content: "" });
      })
      .catch((error) => console.error("Error posting inquiry:", error));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SideBarnNavbar />
      <div className="flex flex-col items-center w-full px-4 xl:px-20 mt-10">
        {/* Search Bar */}
        <div className="flex items-center justify-center my-8 w-full max-w-3xl">
          <div className="relative w-full">
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-4 text-gray-400"></i>
            <input
              className="w-full h-[50px] pl-12 pr-4 rounded-full bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              placeholder="Search inquiries..."
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white shadow-lg rounded-3xl p-8 w-full max-w-4xl">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-semibold text-gray-800">
              Submit Your Inquiry
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={newInquiry.title}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                name="content"
                placeholder="Type your inquiry here..."
                value={newInquiry.content}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 text-white bg-yellow-500 rounded-full hover:bg-yellow-600 transition-all"
              >
                Post
              </button>
            </div>
          </form>
        </div>

        {/* Inquiry List */}
        <div className="my-12 w-full max-w-4xl">
          <h3 className="text-2xl font-semibold text-gray-800 mb-5">
            All Inquiries
          </h3>
          <div className="space-y-4">
            {inquiries.map((inquiry) => (
              <div
                key={inquiry.id}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        {inquiry.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {inquiry.content}
                      </p>
                    </div>
                  </div>
                  <i className="fa-solid fa-ellipsis text-gray-400"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInquiries;

