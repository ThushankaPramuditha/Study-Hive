// import React, { useState } from 'react';
// import AdminSidebar from './AdminSidebar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash, faLock } from '@fortawesome/free-solid-svg-icons';

// const UserList = () => {
//   const users = [
//     { name: 'Robert Fox', email: 'robert@gmail.com', status: 'Online', created: '6 April 2023' },
//     { name: 'Jane Doe', email: 'jane@gmail.com', status: 'Offline', created: '5 April 2023' },
//     { name: 'John Smith', email: 'john@gmail.com', status: 'Online', created: '4 April 2023' },
//     { name: 'Alice Johnson', email: 'alice@gmail.com', status: 'Online', created: '3 April 2023' },
//     { name: 'Bob Brown', email: 'bob@gmail.com', status: 'Offline', created: '2 April 2023' },
//     { name: 'Charlie Davis', email: 'charlie@gmail.com', status: 'Online', created: '1 April 2023' },
//     { name: 'Diana Prince', email: 'diana@gmail.com', status: 'Offline', created: '31 March 2023' },
//     { name: 'Ethan Hunt', email: 'ethan@gmail.com', status: 'Online', created: '30 March 2023' },
//     { name: 'Fiona Apple', email: 'fiona@gmail.com', status: 'Offline', created: '29 March 2023' },
//     { name: 'George Michael', email: 'george@gmail.com', status: 'Online', created: '28 March 2023' },
//     { name: 'Hannah Montana', email: 'hannah@gmail.com', status: 'Online', created: '27 March 2023' },
//     { name: 'Ian Wright', email: 'ian@gmail.com', status: 'Offline', created: '26 March 2023' },
//     { name: 'Jack Sparrow', email: 'jack@gmail.com', status: 'Online', created: '25 March 2023' },
//     { name: 'Katy Perry', email: 'katy@gmail.com', status: 'Offline', created: '24 March 2023' },
//     { name: 'Liam Neeson', email: 'liam@gmail.com', status: 'Online', created: '23 March 2023' },
//     { name: 'Mia Khalifa', email: 'mia@gmail.com', status: 'Offline', created: '22 March 2023' },
//     { name: 'Nina Dobrev', email: 'nina@gmail.com', status: 'Online', created: '21 March 2023' },
//     { name: 'Owen Wilson', email: 'owen@gmail.com', status: 'Offline', created: '20 March 2023' },
//     { name: 'Penelope Cruz', email: 'penelope@gmail.com', status: 'Online', created: '19 March 2023' },
//     { name: 'Quentin Tarantino', email: 'quentin@gmail.com', status: 'Offline', created: '18 March 2023' },
//     { name: 'Rachel Green', email: 'rachel@gmail.com', status: 'Online', created: '17 March 2023' },
//     { name: 'Samuel Jackson', email: 'samuel@gmail.com', status: 'Offline', created: '16 March 2023' },
//     { name: 'Taylor Swift', email: 'taylor@gmail.com', status: 'Online', created: '15 March 2023' },
//     { name: 'Uma Thurman', email: 'uma@gmail.com', status: 'Offline', created: '14 March 2023' },
//     { name: 'Vin Diesel', email: 'vin@gmail.com', status: 'Online', created: '13 March 2023' },
//     { name: 'Will Smith', email: 'will@gmail.com', status: 'Offline', created: '12 March 2023' },
//     { name: 'Xena Warrior', email: 'xena@gmail.com', status: 'Online', created: '11 March 2023' },
//     { name: 'Yara Shahidi', email: 'yara@gmail.com', status: 'Offline', created: '10 March 2023' },
//     { name: 'Zayn Malik', email: 'zayn@gmail.com', status: 'Online', created: '9 March 2023' },
//   ];

//   const [statusFilter, setStatusFilter] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const usersPerPage = 10;

//   // Filter users based on search term and status
//   const filteredUsers = users.filter((user) => {
//     const statusMatches = statusFilter === '' || user.status === statusFilter;
//     const nameMatches = user.name.toLowerCase().includes(searchTerm.toLowerCase());
//     return statusMatches && nameMatches;
//   });

//   // Pagination logic
//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//   // Change page
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="flex">
//       <AdminSidebar />
//       <div className="container ml-[300px] mt-10 mr-12">
//         <h1 className="text-2xl font-bold mb-4">Users</h1>
//         <div className="flex mb-10">
//           <input
//             type="text"
//             placeholder="Search by name..."
//             className="w-[240px] p-2 border border-gray-300 rounded-md mr-8"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <select
//             className="w-[240px] p-2 border border-gray-300 rounded-md text-[#8B909A] mr-8"
//             value={statusFilter}
//             onChange={(e) => setStatusFilter(e.target.value)}
//           >
//             <option value="">Filter by Status</option>
//             <option value="Online">Online</option>
//             <option value="Offline">Offline</option>
//           </select>
//         </div>
//         <table className="min-w-full bg-white">
//           <thead className="text-left text-[#8B909A] border-b border-gray-300">
//             <tr>
//               <th className="py-2 font-medium">NAME</th>
//               <th className="py-2 font-medium">STATUS</th>
//               <th className="py-2 font-medium">CREATED</th>
//               <th className="py-2 font-medium">ACTION</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentUsers.map((user, index) => (
//               <tr key={index} className="border-b">
//                 <td className="flex items-center py-2">
//                   <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-white mr-3">
//                     {user.name[0]}
//                   </div>
//                   <div>
//                     <div className="font-regular">{user.name}</div>
//                     <div className="text-sm text-gray-500">{user.email}</div>
//                   </div>
//                 </td>
//                 <td className={`py-2 ${user.status === 'Online' ? 'text-green-500' : 'text-red-500'}`}>
//                   {user.status}
//                 </td>
//                 <td className="py-2">{user.created}</td>
//                 <td className="py-2 flex items-center space-x-2 text-[#8B909A] gap-1">
//                   <button className="">
//                     <FontAwesomeIcon icon={faEdit} className="w-4 h-4" />
//                   </button>
//                   <button className="">
//                     <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
//                   </button>
//                   <button className="">
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
//           <div>Showing {currentUsers.length} of {filteredUsers.length}</div>
//           <div className="flex space-x-1">
//             {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, index) => (
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

// export default UserList;


import React, { useEffect, useState } from 'react';
import AdminSidebar from './AdminSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
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
          <select
            className="w-[240px] p-2 border border-gray-300 rounded-md text-[#8B909A] mr-8"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">Filter by Status</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>
        <table className="min-w-full bg-white">
          <thead className="text-left text-[#8B909A] border-b border-gray-300">
            <tr>
              <th className="py-2 font-medium">NAME</th>
              <th className="py-2 font-medium">EMAIL</th>
              <th className="py-2 font-medium">STATUS</th>
              <th className="py-2 font-medium">CREATED</th>
              <th className="py-2 font-medium">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="py-2">
                  {user.firstname} {user.lastname}
                </td>
                <td className="py-2">{user.email}</td>
                <td className={`py-2 ${user.status === 'Online' ? 'text-green-500' : 'text-red-500'}`}>
                  {user.status}
                </td>
                <td className="py-2">{new Date(user.created_date).toLocaleDateString()}</td>
                <td className="py-2 flex items-center space-x-2 text-[#8B909A]">
                  <button>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button>
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
      </div>
    </div>
  );
};

export default UserList;
