import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faLock } from '@fortawesome/free-solid-svg-icons';

const StudyRoomList = () => {
  const rooms = [
    { name: 'Study Room A', participants: 5, created: '6 April 2023' },
    { name: 'Study Room B', participants: 3, created: '5 April 2023' },
    { name: 'Study Room C', participants: 4, created: '4 April 2023' },
    { name: 'Study Room D', participants: 6, created: '3 April 2023' },
    { name: 'Study Room E', participants: 2, created: '2 April 2023' },
    { name: 'Study Room F', participants: 7, created: '1 April 2023' },
    { name: 'Study Room G', participants: 8, created: '31 March 2023' },
    { name: 'Study Room H', participants: 5, created: '30 March 2023' },
    { name: 'Study Room I', participants: 4, created: '29 March 2023' },
    { name: 'Study Room J', participants: 6, created: '28 March 2023' },
    // Add more rooms as needed
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 10;

  // Filter rooms based on search term
  const filteredRooms = rooms.filter((room) =>
    room.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="container ml-[300px] mt-10 mr-12">
        <h1 className="text-2xl font-bold mb-4">Study Rooms</h1>
        <div className="flex mb-10">
          <input
            type="text"
            placeholder="Search by room name..."
            className="w-[240px] p-2 border border-gray-300 rounded-md mr-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <table className="min-w-full bg-white">
          <thead className="text-[#8B909A] border-b border-gray-300 text-center">
            <tr>
              <th className="py-2 font-medium">ROOM NAME</th>
              <th className="py-2 font-medium">NO OF PARTICIPANTS</th>
              <th className="py-2 font-medium">CREATED</th>
              <th className="py-2 font-medium">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {currentRooms.map((room, index) => (
              <tr key={index} className="border-b text-center">
                <td className="py-2 font-regular">{room.name}</td>
                <td className="py-2">{room.participants}</td>
                <td className="py-2">{room.created}</td>
                <td className="py-2 flex justify-center space-x-2 text-[#8B909A] gap-1">
                  <button className="">
                    <FontAwesomeIcon icon={faEdit} className="w-4 h-4" />
                  </button>
                  <button className="">
                    <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
                  </button>
                  <button className="">
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
          <div>Showing {currentRooms.length} of {filteredRooms.length}</div>
          <div className="flex space-x-1">
            {Array.from({ length: Math.ceil(filteredRooms.length / roomsPerPage) }, (_, index) => (
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

export default StudyRoomList;
