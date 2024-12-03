// import React, { useState } from 'react';
// import AdminSidebar from './AdminSidebar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash, faLock } from '@fortawesome/free-solid-svg-icons';

// const CommunityList = () => {
//   const communities = [
//     { name: 'UCSC 19', description: 'Official StudyHive Community of UCSC 19 batch.', created: '6 April 2023' },
//     { name: 'UCSC IEEE', description: 'Official StudyHive Community of UCSC IEEE.', created: '5 April 2023' },
//     { name: 'ROTARACT UCSC', description: 'Official StudyHive Community of Rotaract UCSC.', created: '4 April 2023' },
//     { name: 'UOC Science', description: 'Official StudyHive Community of UOC FMF.', created: '3 April 2023' },
//     { name: 'UOC UCSC', description: 'Official StudyHive Community of UCSC.', created: '2 April 2023' },
//   ];

//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const communitiesPerPage = 10;

//   // Filter communities based on search term
//   const filteredCommunities = communities.filter((community) =>
//     community.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Pagination logic
//   const indexOfLastCommunity = currentPage * communitiesPerPage;
//   const indexOfFirstCommunity = indexOfLastCommunity - communitiesPerPage;
//   const currentCommunities = filteredCommunities.slice(indexOfFirstCommunity, indexOfLastCommunity);

//   // Change page
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="flex">
//       <AdminSidebar />
//       <div className="container ml-[300px] mt-10 mr-12">
//         <h1 className="text-2xl font-bold mb-4">Communities</h1>
//         <div className="flex mb-10">
//           <input
//             type="text"
//             placeholder="Search by name..."
//             className="w-[240px] p-2 border border-gray-300 rounded-md mr-8"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//         <table className="min-w-full bg-white">
//           <thead className="text-[#8B909A] border-b border-gray-300 text-center">
//             <tr>
//               <th className="py-2 font-medium">COMMUNITY NAME</th>
//               <th className="py-2 font-medium">DESCRIPTION</th>
//               <th className="py-2 font-medium">CREATED</th>
//               <th className="py-2 font-medium">ACTION</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentCommunities.map((community, index) => (
//               <tr key={index} className="border-b">
//                 <td className="py-2 font-regular align-middle">{community.name}</td>
//                 <td className="py-2 w-1/3 px-4 align-middle">{community.description}</td>
//                 <td className="py-2 text-center align-middle">{community.created}</td>
//                 <td className="py-2 flex justify-center space-x-2 text-[#8B909A] gap-1 align-middle">
//                   <button>
//                     <FontAwesomeIcon icon={faEdit} className="w-4 h-4" />
//                   </button>
//                   <button>
//                     <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
//                   </button>
//                   <button>
//                     <FontAwesomeIcon icon={faLock} className="w-4 h-4" />
//                   </button>
//                   <button className="text-[#D4944C] text-[13px]">
//                     <span>View more...</span>
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="flex justify-between mt-4">
//           <div>Showing {currentCommunities.length} of {filteredCommunities.length}</div>
//           <div className="flex space-x-1">
//             {Array.from({ length: Math.ceil(filteredCommunities.length / communitiesPerPage) }, (_, index) => (
//               <button
//                 key={index}
//                 className={`px-2 py-1 rounded-md ${currentPage === index + 1 ? 'bg-[#D4944C]' : 'bg-gray-200'}`}
//                 onClick={() => handlePageChange(index + 1)}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommunityList;


import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const CommunityList = () => {
  const [communities, setCommunities] = useState([]); // Initialize as an empty array
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const communitiesPerPage = 10;

  // Fetch communities from backend API when the component mounts
  useEffect(() => {
    axios.get('http://localhost:8080/api/communities')  // Replace with the correct backend API URL
      .then((response) => {
        setCommunities(response.data); // Set the fetched data to 'communities' state
      })
      .catch((error) => {
        console.error("There was an error fetching the communities!", error);
      });
  }, []);

  // Function to delete a community
  const deleteCommunity = (id) => {
    axios.delete(`http://localhost:8080/api/communities/${id}`) // Replace with the correct backend API URL
      .then(() => {
        // Remove the community from the list after deletion
        setCommunities(communities.filter((community) => community.id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the community!", error);
      });
  };

  // Filter communities based on search term
  const filteredCommunities = communities.filter((community) =>
    community.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastCommunity = currentPage * communitiesPerPage;
  const indexOfFirstCommunity = indexOfLastCommunity - communitiesPerPage;
  const currentCommunities = filteredCommunities.slice(indexOfFirstCommunity, indexOfLastCommunity);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="container ml-[300px] mt-10 mr-12">
        <h1 className="text-2xl font-bold mb-4">Communities</h1>
        <div className="flex mb-10">
          <input
            type="text"
            placeholder="Search by name..."
            className="w-[240px] p-2 border border-gray-300 rounded-md mr-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <table className="min-w-full bg-white">
          <thead className="text-[#8B909A] border-b border-gray-300 text-center">
            <tr>
              <th className="py-2 font-medium">COMMUNITY NAME</th>
              <th className="py-2 font-medium">DESCRIPTION</th>
              <th className="py-2 font-medium">CREATED</th>
              <th className="py-2 font-medium">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {currentCommunities.map((community, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 font-regular align-middle">{community.name}</td>
                <td className="py-2 w-1/3 px-4 align-middle">{community.description}</td>
                <td className="py-2 text-center align-middle">{community.created}</td>
                <td className="py-2 flex justify-center space-x-2 text-[#8B909A] gap-1 align-middle">
                  <button onClick={() => deleteCommunity(community.id)}>
                    <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faLock} className="w-4 h-4" />
                  </button>
                  <button className="text-[#D4944C] text-[13px]">
                    <span>View more...</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-4">
          <div>Showing {currentCommunities.length} of {filteredCommunities.length}</div>
          <div className="flex space-x-1">
            {Array.from({ length: Math.ceil(filteredCommunities.length / communitiesPerPage) }, (_, index) => (
              <button
                key={index}
                className={`px-2 py-1 rounded-md ${currentPage === index + 1 ? 'bg-[#D4944C]' : 'bg-gray-200'}`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityList;