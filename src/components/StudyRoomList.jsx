import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons';

const StudyRoomList = () => {
  const [rooms, setRooms] = useState([]); // State to hold study rooms
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(null); // State to hold selected room details for "View More"
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const roomsPerPage = 10;

  // Fetch study rooms from the backend
  const fetchRooms = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/studyrooms'); // Adjust endpoint as necessary
      const data = await response.json();
      console.log('Fetched study rooms:', data); // Log the response to check alignment

      // Map data to match UI format
      const formattedData = data.map((room) => ({
        ...room,
        created: new Date(room.createdDate).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }),
      }));

      setRooms(formattedData); // Update state with the new data
    } catch (error) {
      console.error('Error fetching study rooms:', error);
    }
  };

  useEffect(() => {
    fetchRooms(); // Initial fetch when component mounts
  }, []); // Run only once when component is mounted

  const filteredRooms = rooms.filter((room) =>
    room.roomName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle "View More" button click
  const handleViewMore = (room) => {
    setSelectedRoom(room); // Set selected room details
    setShowModal(true); // Show modal
  };

  // Handle delete room
  const handleDelete = async (roomId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this room?');
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:8080/api/studyrooms/${roomId}`, {
          method: 'DELETE', // Make DELETE request to the server
        });

        if (response.ok) {
          alert('Room deleted successfully!');
          fetchRooms(); // Refetch the rooms after deletion to get the updated list
        } else {
          alert('Failed to delete the room.');
        }
      } catch (error) {
        console.error('Error deleting room:', error);
        alert('Error deleting room.');
      }
    }
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
                <td className="py-2 font-regular">{room.roomName}</td>
                <td className="py-2">{room.participantCount}</td>
                <td className="py-2">{room.created}</td>
                <td className="py-2 flex justify-center space-x-3 text-[#8B909A] gap-1">
                  <button onClick={() => handleViewMore(room)}>
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                  <button onClick={() => handleDelete(room.id)}>
                    <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
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

      {/* Modal to show room details */}
      {showModal && selectedRoom && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[500px]">
            <h2 className="text-2xl font-bold mb-4">Study Room Details</h2>
            <div>
              <p><strong>ID:</strong> {selectedRoom.id}</p>
              <p><strong>Room Name:</strong> {selectedRoom.roomName}</p>
              <p><strong>Accept Terms:</strong> {selectedRoom.acceptTerms ? 'Yes' : 'No'}</p>
              <p><strong>Created Date:</strong> {selectedRoom.created}</p>
              <p><strong>Description:</strong> {selectedRoom.description}</p>
              <p><strong>Public:</strong> {selectedRoom.isPublic ? 'Yes' : 'No'}</p>
              <p><strong>Participants:</strong> {selectedRoom.participantCount}</p>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-[#D4944C] rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudyRoomList;