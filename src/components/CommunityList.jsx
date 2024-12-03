import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faLock, faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const CommunityList = () => {
  const [communities, setCommunities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const communitiesPerPage = 10;

  useEffect(() => {
    axios
      .get('http://localhost:8090/api/communities') // Backend endpoint
      .then((response) => {
        setCommunities(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the communities!', error);
      });
  }, []);

  const deleteCommunity = (id) => {
    axios
      .delete(`http://localhost:8090/api/communities/${id}`) // Fixed template literal
      .then(() => {
        setCommunities(communities.filter((community) => community.id !== id));
      })
      .catch((error) => {
        console.error('There was an error deleting the community!', error);
      });
  };

  const handleViewMore = (community) => {
    setSelectedCommunity(community);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setSelectedCommunity(null);
    setIsPopupOpen(false);
  };

  // Case-insensitive search
  const filteredCommunities = communities.filter((community) =>
    community.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastCommunity = currentPage * communitiesPerPage;
  const indexOfFirstCommunity = indexOfLastCommunity - communitiesPerPage;
  const currentCommunities = filteredCommunities.slice(indexOfFirstCommunity, indexOfLastCommunity);

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
              <th className="py-2 font-medium">CREATED</th>
              <th className="py-2 font-medium">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {currentCommunities.map((community, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 font-regular align-middle">{community.name}</td>
                <td className="py-2 text-center align-middle">{community.created}</td>
                <td className="py-2 flex justify-center space-x-2 text-[#8B909A] gap-1 align-middle">
                  <button onClick={() => deleteCommunity(community.id)}>
                    <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faLock} className="w-4 h-4" />
                  </button>
                  <button
                    className="text-[#D4944C] text-[13px]"
                    onClick={() => handleViewMore(community)}
                  >
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
                className={`px-2 py-1 rounded-md ${currentPage === index + 1 ? 'bg-[#D4944C]' : 'bg-gray-200'}`} // Fixed template literal
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
        {isPopupOpen && selectedCommunity && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={closePopup}
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{selectedCommunity.name}</h2>
                <button onClick={closePopup}>
                  <FontAwesomeIcon icon={faTimes} className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              <p className="mb-4"><strong>Community ID:</strong> {selectedCommunity.id}</p>
              <p className="mb-4"><strong>Description:</strong> {selectedCommunity.description}</p>
              <p className="mb-4"><strong>Created:</strong> {selectedCommunity.created}</p>
              <p className="mb-4"><strong>Member Count: </strong>{selectedCommunity.memberCount}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityList;
