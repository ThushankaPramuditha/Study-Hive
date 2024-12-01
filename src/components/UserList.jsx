import React, { useEffect, useState } from 'react';
import AdminSidebar from './AdminSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProfile, setSelectedProfile] = useState(null); // This should track the profile details
  const [showModal, setShowModal] = useState(false); // For toggling the modal
  const usersPerPage = 10;

  // Fetch users from backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/users'); // Adjust URL as needed
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  // Filter users based on search term and status
  const filteredUsers = users.filter((user) => {
    const statusMatches = statusFilter === '' || user.status === statusFilter;
    const nameMatches = `${user.firstname} ${user.lastname}`.toLowerCase().includes(searchTerm.toLowerCase());
    return statusMatches && nameMatches;
  });

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle delete user
  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/users/${userId}`);
      setUsers(users.filter(user => user.id !== userId)); // Remove the user from the state
      alert('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user');
    }
  };

  // View more user details
  const handleViewMore = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/profiles/${userId}`);
        setSelectedProfile(response.data);  // Update state with profile details
        setShowModal(true); // Show modal with the profile
    } catch (error) {
        console.error("Error fetching profile details:", error);
        alert('Failed to load user details');
    }
};

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="container ml-[300px] mt-10 mr-12">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <div className="flex mb-10">
          <input
            type="text"
            placeholder="Search by name..."
            className="w-[240px] p-2 border border-gray-300 rounded-md mr-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <table className="min-w-full bg-white" style={{ tableLayout: 'fixed' }}>
          <thead className="text-left text-[#8B909A] border-b border-gray-300">
            <tr>
              <th className="py-2 font-medium">ID</th>
              <th className="py-2 font-medium">NAME</th>
              <th className="py-2 font-medium">EMAIL</th>
              <th className="py-2 font-medium">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="py-2">{user.id}</td>
                <td className="py-2">{user.firstname} {user.lastname}</td>
                <td className="py-2">{user.email}</td>
                <td className="py-2 flex items-center space-x-2 text-[#8B909A]">
                  <button onClick={() => handleViewMore(user.id)}>
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                  <button onClick={() => handleDelete(user.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faLock} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-4">
          <div>Showing {currentUsers.length} of {filteredUsers.length}</div>
          <div className="flex space-x-1">
            {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, index) => (
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

        {/* Modal for User Details */}
        {showModal && selectedProfile && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-1/3">
              <h2 className="text-xl font-bold mb-4 text-center">Profile Details</h2>
              <p className="py-2"><strong>Username:</strong> {selectedProfile.username}</p>
              <p className="py-2"><strong>Gender:</strong> {selectedProfile.gender}</p>
              <p className="py-2"><strong>University:</strong> {selectedProfile.university}</p>
              <p className="py-2"><strong>Preferred Languages:</strong> {selectedProfile.preferredLanguages}</p>
              <p className="py-2"><strong>Study Goal:</strong> {selectedProfile.studyGoal}</p>
              <p className="py-2"><strong>Studying For:</strong> {selectedProfile.studyingFor}</p>
              <p className="py-2"><strong>Adaptability:</strong> {selectedProfile.adaptability}</p>
              <p className="py-2"><strong>Phone Number:</strong> {selectedProfile.phoneNumber || 'N/A'}</p>
              <p className="py-2" ><strong>Emergency Contact:</strong> {selectedProfile.emergencyContact || 'N/A'}</p>
             
              <button
                className="mt-4 px-4 py-2 bg-[#D4944C] text-white rounded-md"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
