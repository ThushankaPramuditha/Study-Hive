// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import SideBarnNavbar from "./SideBarnNavbar";

// const UserInquiries = () => {
//   const [inquiries, setInquiries] = useState([]);
//   const [newInquiry, setNewInquiry] = useState({
//     title: "",
//     content: "",
//   });

//   useEffect(() => {
//     // Fetch all user inquiries when the component mounts
//     axios
//       .get("http://localhost:8080/api/inquiries")
//       .then((response) => setInquiries(response.data))
//       .catch((error) => console.error("Error fetching inquiries:", error));
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewInquiry({ ...newInquiry, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:8080/api/inquiries", newInquiry)
//       .then((response) => {
//         setInquiries([...inquiries, response.data]);
//         setNewInquiry({ title: "", content: "" });
//       })
//       .catch((error) => console.error("Error posting inquiry:", error));
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <SideBarnNavbar />
//       <div className="flex flex-col items-center w-full px-4 xl:px-20 mt-10">
//         {/* Search Bar */}
//         <div className="flex items-center justify-center my-8 w-full max-w-3xl">
//           <div className="relative w-full">
//             <i className="fa-solid fa-magnifying-glass absolute left-4 top-4 text-gray-400"></i>
//             <input
//               className="w-full h-[50px] pl-12 pr-4 rounded-full bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
//               placeholder="Search inquiries..."
//             />
//           </div>
//         </div>

//         {/* Form Section */}
//         <div className="bg-white shadow-lg rounded-3xl p-8 w-full max-w-4xl">
//           <div className="mb-6 text-center">
//             <h2 className="text-3xl font-semibold text-gray-800">
//               Submit Your Inquiry
//             </h2>
//           </div>
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="Title"
//                 value={newInquiry.title}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <textarea
//                 name="content"
//                 placeholder="Type your inquiry here..."
//                 value={newInquiry.content}
//                 onChange={handleInputChange}
//                 rows={5}
//                 className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               ></textarea>
//             </div>
//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 className="px-8 py-3 text-white bg-yellow-500 rounded-full hover:bg-yellow-600 transition-all"
//               >
//                 Post
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Inquiry List */}
//         <div className="my-12 w-full max-w-4xl">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-5">
//             All Inquiries
//           </h3>
//           <div className="space-y-4">
//             {inquiries.map((inquiry) => (
//               <div
//                 key={inquiry.id}
//                 className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
//               >
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center space-x-4">
//                     <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
//                     <div>
//                       <h4 className="text-lg font-semibold text-gray-800">
//                         {inquiry.title}
//                       </h4>
//                       <p className="text-sm text-gray-600">
//                         {inquiry.content}
//                       </p>
//                     </div>
//                   </div>
//                   <i className="fa-solid fa-ellipsis text-gray-400"></i>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserInquiries;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import SideBarnNavbar from "./SideBarnNavbar";
// import { decode } from "jwt-decode"; // Named import

// const UserInquiries = () => {
//   const [inquiries, setInquiries] = useState([]);
//   const [newInquiry, setNewInquiry] = useState({
//     title: "",
//     content: "",
//   });

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/api/inquiries")
//       .then((response) => setInquiries(response.data))
//       .catch((error) => console.error("Error fetching inquiries:", error));
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewInquiry({ ...newInquiry, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const userId = localStorage.getItem("userId");  // Assuming userId is stored in localStorage after login
    
//     if (!userId) {
//       console.error("User is not logged in.");
//       return;
//     }
  
//     const inquiryData = {
//       title: newInquiry.title,
//       content: newInquiry.content,
//       user: { id: userId }  // Add user ID to the inquiry
//     };
  
//     axios
//       .post("http://localhost:8080/api/inquiries", inquiryData)
//       .then((response) => {
//         setInquiries([...inquiries, response.data]);
//         setNewInquiry({ title: "", content: "" });
//       })
//       .catch((error) => console.error("Error posting inquiry:", error));
//   };
  

//   return (
//     <div className="flex flex-col min-h-screen">
//       <SideBarnNavbar />
//       <div className="flex flex-col items-center w-full px-4 xl:px-20 mt-10">
//         <div className="bg-white shadow-lg rounded-3xl p-8 w-full max-w-4xl">
//           <div className="mb-6 text-center">
//             <h2 className="text-3xl font-semibold text-gray-800">Submit Your Inquiry</h2>
//           </div>
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="Title"
//                 value={newInquiry.title}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <textarea
//                 name="content"
//                 placeholder="Type your inquiry here..."
//                 value={newInquiry.content}
//                 onChange={handleInputChange}
//                 rows={5}
//                 className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               ></textarea>
//             </div>
//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 className="px-8 py-3 text-white bg-yellow-500 rounded-full hover:bg-yellow-600 transition-all"
//               >
//                 Post
//               </button>
//             </div>
//           </form>
//         </div>
//         <div className="my-12 w-full max-w-4xl">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-5">All Your Inquiries</h3>
//           <div className="space-y-4">
//             {inquiries.map((inquiry) => (
//               <div key={inquiry.id} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center space-x-4">
//                     <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
//                     <div>
//                       <h4 className="text-lg font-semibold text-gray-800">{inquiry.title}</h4>
//                       <p className="text-sm text-gray-600">{inquiry.content}</p>
//                     </div>
//                   </div>
//                   <i className="fa-solid fa-ellipsis text-gray-400"></i>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserInquiries;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import SideBarnNavbar from "./SideBarnNavbar";

// const UserInquiries = () => {
//   const [inquiries, setInquiries] = useState([]);
//   const [newInquiry, setNewInquiry] = useState({
//     title: "",
//     content: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const token = localStorage.getItem("token"); // Get the token from localStorage or context

//     if (!token) {
//       setError("User is not logged in");
//       return;
//     }

//     axios
//       .get("http://localhost:8080/api/inquiries/user", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => setInquiries(response.data))
//       .catch((error) => console.error("Error fetching inquiries:", error));
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewInquiry({ ...newInquiry, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     const token = localStorage.getItem("token"); // Get the token from localStorage or context

//     if (!token) {
//       setError("User is not logged in");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/inquiries", // API endpoint to create an inquiry
//         newInquiry,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setInquiries([...inquiries, response.data]); // Add the new inquiry to the list
//       setNewInquiry({ title: "", content: "" }); // Reset form fields
//     } catch (error) {
//       setError("Error posting inquiry");
//       console.error("Error posting inquiry:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <SideBarnNavbar />
//       <div className="flex flex-col items-center w-full px-4 xl:px-20 mt-10">
//         {/* Search Bar */}
//         <div className="flex items-center justify-center my-8 w-full max-w-3xl">
//           <div className="relative w-full">
//             <i className="fa-solid fa-magnifying-glass absolute left-4 top-4 text-gray-400"></i>
//             <input
//               className="w-full h-[50px] pl-12 pr-4 rounded-full bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
//               placeholder="Search inquiries..."
//             />
//           </div>
//         </div>

//         {/* Form Section */}
//         <div className="bg-white shadow-lg rounded-3xl p-8 w-full max-w-4xl">
//           <div className="mb-6 text-center">
//             <h2 className="text-3xl font-semibold text-gray-800">
//               Submit Your Inquiry
//             </h2>
//           </div>
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="Title"
//                 value={newInquiry.title}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <textarea
//                 name="content"
//                 placeholder="Type your inquiry here..."
//                 value={newInquiry.content}
//                 onChange={handleInputChange}
//                 rows={5}
//                 className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               ></textarea>
//             </div>
//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 className="px-8 py-3 text-white bg-yellow-500 rounded-full hover:bg-yellow-600 transition-all"
//                 disabled={loading}
//               >
//                 {loading ? "Posting..." : "Post"}
//               </button>
//             </div>
//           </form>
//           {error && <p className="text-red-500 mt-4">{error}</p>}
//         </div>

//         {/* Inquiry List */}
//         <div className="my-12 w-full max-w-4xl">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-5">
//             All Inquiries
//           </h3>
//           <div className="space-y-4">
//             {inquiries.map((inquiry) => (
//               <div
//                 key={inquiry.id}
//                 className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
//               >
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center space-x-4">
//                     <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
//                     <div>
//                       <h4 className="text-lg font-semibold text-gray-800">
//                         {inquiry.title}
//                       </h4>
//                       <p className="text-sm text-gray-600">
//                         {inquiry.content}
//                       </p>
//                     </div>
//                   </div>
//                   <i className="fa-solid fa-ellipsis text-gray-400"></i>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserInquiries;


import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBarnNavbar from "./SideBarnNavbar";

// const UserInquiries = () => {
//   const [inquiries, setInquiries] = useState([]);
//   const [newInquiry, setNewInquiry] = useState({
//     title: "",
//     content: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");

//   // Fetch inquiries for the logged-in user when the component mounts
//   useEffect(() => {
//     const token = localStorage.getItem("token"); // Get the token from localStorage or context

//     if (!token) {
//       setError("User is not logged in");
//       return;
//     }

//     axios
//       .get("http://localhost:8080/api/inquiries/user", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         // Ensure the response is an array before setting state
//         setInquiries(Array.isArray(response.data) ? response.data : []);
//       })
//       .catch((error) => {
//         setError("Error fetching inquiries");
//         console.error("Error fetching inquiries:", error);
//       });
//   }, []);

//   // Handle input change for creating a new inquiry
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewInquiry({ ...newInquiry, [name]: value });
//   };

//   // Handle form submission to post a new inquiry
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     const token = localStorage.getItem("token"); // Get the token from localStorage or context

//     if (!token) {
//       setError("User is not logged in");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/inquiries/create", // API endpoint to create an inquiry
//         newInquiry,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setInquiries((prevInquiries) => [...prevInquiries, response.data]); // Add the new inquiry to the list
//       setNewInquiry({ title: "", content: "" }); // Reset form fields
//     } catch (error) {
//       setError("Error posting inquiry");
//       console.error("Error posting inquiry:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle search input change
//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Filter inquiries based on search query
//   const filteredInquiries = inquiries.filter((inquiry) => {
//     return (
//       inquiry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       inquiry.content.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   });

//   return (
//     <div className="flex flex-col min-h-screen">
//       <SideBarnNavbar />
//       <div className="flex flex-col items-center w-full px-4 xl:px-20 mt-10">
//         {/* Search Bar */}
       

//         {/* Form Section */}
//         <div className="bg-white shadow-lg rounded-3xl p-8 w-full max-w-4xl">
//           <div className="mb-6 text-center">
//             <h2 className="text-3xl font-semibold text-gray-800">
//               Submit Your Inquiry
//             </h2>
//           </div>
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="Title"
//                 value={newInquiry.title}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <textarea
//                 name="content"
//                 placeholder="Type your inquiry here..."
//                 value={newInquiry.content}
//                 onChange={handleInputChange}
//                 rows={5}
//                 className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               ></textarea>
//             </div>
//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 className="px-8 py-3 text-white bg-yellow-500 rounded-full hover:bg-yellow-600 transition-all"
//                 disabled={loading}
//               >
//                 {loading ? "Posting..." : "Post"}
//               </button>
//             </div>
//           </form>
//           {error && <p className="text-red-500 mt-4">{error}</p>}
//         </div>

//         {/* Inquiry List */}
//         <div className="my-12 w-full max-w-4xl">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-5">
//             Your Inquiries
//           </h3>
//           <div className="space-y-4">
//             {filteredInquiries.length === 0 ? (
//               <p className="text-gray-500">No inquiries found</p>
//             ) : (
//               filteredInquiries.map((inquiry) => (
//                 <div
//                   key={inquiry.id}
//                   className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
//                 >
//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center space-x-4">
//                       <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
//                       <div>
//                         <h4 className="text-lg font-semibold text-gray-800">
//                           {inquiry.title}
//                         </h4>
//                         <p className="text-sm text-gray-600">
//                           {inquiry.content}
//                         </p>
//                       </div>
//                     </div>
//                     <i className="fa-solid fa-ellipsis text-gray-400"></i>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserInquiries;


const UserInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [newInquiry, setNewInquiry] = useState({
    title: "",
    content: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch inquiries for the logged-in user when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("token"); // Get the token from localStorage or context

    if (!token) {
      setError("User is not logged in");
      return;
    }

    axios
      .get("http://localhost:8080/api/inquiries/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Ensure the response is an array before setting state
        setInquiries(Array.isArray(response.data) ? response.data : []);
      })
      .catch((error) => {
        setError("Error fetching inquiries");
        console.error("Error fetching inquiries:", error);
      });
  }, []);

  // Handle input change for creating a new inquiry
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInquiry({ ...newInquiry, [name]: value });
  };

  // Handle form submission to post a new inquiry
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const token = localStorage.getItem("token"); // Get the token from localStorage or context

    if (!token) {
      setError("User is not logged in");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/inquiries/create", // API endpoint to create an inquiry
        newInquiry,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setInquiries((prevInquiries) => [...prevInquiries, response.data]); // Add the new inquiry to the list
      setNewInquiry({ title: "", content: "" }); // Reset form fields
    } catch (error) {
      setError("Error posting inquiry");
      console.error("Error posting inquiry:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle search input change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter inquiries based on search query
  const filteredInquiries = inquiries.filter((inquiry) => {
    return (
      inquiry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inquiry.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="flex flex-col min-h-screen " >
      <SideBarnNavbar />
      <div className="flex flex-col items-center w-full  mt-10 ml-[156px]">
       
       
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
                disabled={loading}
              >
                {loading ? "Posting..." : "Post"}
              </button>
            </div>
          </form>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>

        {/* Inquiry List */}
        <div className="my-12 w-full max-w-4xl">
          <h3 className="text-2xl font-semibold text-gray-800 mb-5">
            Your Inquiries
          </h3>
          <div className="space-y-4">
            {filteredInquiries.length === 0 ? (
              <p className="text-gray-500">No inquiries found</p>
            ) : (
              filteredInquiries.map((inquiry) => (
                <div
                  key={inquiry.id}
                  className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                    
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

                  {/* Display Admin's Reply */}
                  {inquiry.adminReply && (
                    <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">Admin Reply:</p>
                      <p className="text-gray-700">{inquiry.adminReply}</p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInquiries;