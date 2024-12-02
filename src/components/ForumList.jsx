// import React, { useState, useEffect } from 'react';
// import AdminSidebar from './AdminSidebar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import dayjs from 'dayjs'; // Consider switching to dayjs or date-fns for modern date handling
// import axios from 'axios';

// const ForumCard = ({ forum }) => {
//   const [showDetails, setShowDetails] = useState(false);
//   const responses = forum.responses || [];

//   return (
//     <div className="bg-[#FCFCFC] shadow-md rounded-lg p-4 mb-10 mr-5">
//       <div className="grid grid-cols-12 items-center mb-4">
//         <div className="col-span-1">
//           <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-white">
//             {forum.authorName[0]}
//           </div>
//         </div>
//         <div className="col-span-3">
//           <h3 className="text-lg font-semibold">{forum.authorName}</h3>
//         </div>
//         <div className="col-span-3">
//           <p className="text-gray-600">{forum.authorEmail}</p>
//         </div>
//         <div className="col-span-2">
//           <p className="text-gray-600">{dayjs(forum.createdAt).format('DD.MM.YYYY')}</p>
//         </div>
//         <div className="col-span-3 flex justify-end gap-12 mr-8">
//           <button>
//             <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//       <hr className="mb-4" />
//       <div>
//         <p className="text-black">{forum.content}</p>
//         {showDetails && responses.length > 0 && (
//           <div>
//             <hr className="my-4" />
//             {responses.map((response) => (
//               <div key={response.id} className="mt-4">
//                 <p className="text-gray-700 text-sm">{response.content}</p>
//                 <p className="text-gray-500 text-xs mt-2">- {response.author}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       {responses.length > 0 ? (
//         <button
//           onClick={() => setShowDetails(!showDetails)}
//           className="text-[#717171] text-sm mt-4"
//         >
//           {showDetails ? 'Show Less ▲' : 'Show responses ▼'}
//         </button>
//       ) : (
//         <p className="text-gray-500 text-sm mt-4">No responses yet</p>
//       )}
//     </div>
//   );
// };

// const Forum = () => {
//   const [filter, setFilter] = useState('');
//   const [forums, setForums] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchForums = async () => {
//     try {
//       const response = await axios.get('http://localhost:8090/api/questions');
//       const forumsData = response.data;

//       const forumsWithResponses = await Promise.all(
//         forumsData.map(async (forum) => {
//           const commentsResponse = await axios.get(
//             `http://localhost:8090/api/questions/${forum.id}/comments`
//           );
//           return { ...forum, responses: commentsResponse.data };
//         })
//       );

//       setForums(forumsWithResponses);
//     } catch (err) {
//       setError('Error fetching data');
//       console.error('Error fetching forums:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchForums();
//   }, []);

//   const filterForums = (forums, filter) => {
//     const now = dayjs();
//     return forums.filter((forum) => {
//       const forumDate = dayjs(forum.createdAt);
//       switch (filter) {
//         case 'today':
//           return forumDate.isSame(now, 'day');
//         case 'yesterday':
//           return forumDate.isSame(now.subtract(1, 'day'), 'day');
//         case 'lastWeek':
//           return forumDate.isBetween(now.subtract(7, 'day'), now, null, '[]');
//         case 'lastMonth':
//           return forumDate.isBetween(now.subtract(1, 'month').startOf('month'), now, null, '[]');
//         default:
//           return true;
//       }
//     });
//   };

//   const filteredForums = filterForums(forums, filter);

//   return (
//     <div className="flex">
//       <AdminSidebar />
//       <div className="flex-1 p-6 ml-[273px] mt-6">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold mb-4">Forum Posts</h1>
//           <div>
//             <select
//               value={filter}
//               onChange={(e) => setFilter(e.target.value)}
//               className="w-[180px] p-2 border border-gray-300 rounded-md text-[#8B909A] mr-8"
//             >
//               <option value="">Filter by day</option>
//               <option value="today">Today</option>
//               <option value="yesterday">Yesterday</option>
//               <option value="lastWeek">Last Week</option>
//               <option value="lastMonth">Last Month</option>
//             </select>
//           </div>
//         </div>
//         {loading && <p>Loading forums...</p>}
//         {error && <p className="text-red-500">{error}</p>}
//         {filteredForums.length === 0 ? (
//           <p className="text-gray-600">No posts for this period.</p>
//         ) : (
//           <div>
//             {filteredForums.map((forum) => (
//               <ForumCard key={forum.id} forum={forum} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Forum;

import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import axios from 'axios';

const ForumCard = ({ forum }) => {
  const [showDetails, setShowDetails] = useState(false);
  const responses = forum.responses || [];

  return (
    <div className="bg-[#FCFCFC] shadow-md rounded-lg p-4 mb-10 mr-5">
      <div className="grid grid-cols-12 items-center mb-4">
        <div className="col-span-1">
          <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-white">
            {forum.authorEmail[0]} {/* Display the first letter of the email */}
          </div>
        </div>
        <div className="col-span-3">
          <h3 className="text-lg font-semibold">{forum.authorEmail}</h3>
        </div>
        <div className="col-span-3">
          <p className="text-gray-600">{forum.authorEmail}</p>
        </div>
        <div className="col-span-2">
          <p className="text-gray-600">{moment(forum.createdAt).format('DD.MM.YYYY')}</p>
        </div>
        <div className="col-span-3 flex justify-end gap-12 mr-8">
          <button>
            <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
          </button>
        </div>
      </div>
      <hr className="mb-4" />
      <div>
        <p className="text-black">{forum.content}</p>
        {showDetails && responses.length > 0 && (
          <div>
            <hr className="my-4" />
            {responses.map((response) => (
              <div key={response.id} className="mt-4">
                <p className="text-gray-700 text-sm">{response.content}</p>
                <p className="text-gray-500 text-xs mt-2">- {response.author}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      {responses.length > 0 && (
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-[#717171] text-sm mt-4"
        >
          {showDetails ? 'Show Less ▲' : 'Show responses ▼'}
        </button>
      )}
    </div>
  );
};

const Forum = () => {
  const [filter, setFilter] = useState('');
  const [forums, setForums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchForums = async () => {
    try {
      const response = await axios.get('http://localhost:8090/api/questions');
      const forumsData = response.data;

      const forumsWithResponses = await Promise.all(
        forumsData.map(async (forum) => {
          const commentsResponse = await axios.get(
            `http://localhost:8090/api/questions/${forum.id}/comments`
          );
          return { ...forum, responses: commentsResponse.data };
        })
      );

      setForums(forumsWithResponses);
    } catch (err) {
      setError('Error fetching data');
      console.error('Error fetching forums:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchForums();
  }, []);

  const filterForums = (forums, filter) => {
    const now = moment();
    return forums.filter((forum) => {
      const forumDate = moment(forum.createdAt);
      switch (filter) {
        case 'today':
          return forumDate.isSame(now, 'day');
        case 'yesterday':
          return forumDate.isSame(now.clone().subtract(1, 'day'), 'day');
        case 'lastWeek':
          return forumDate.isBetween(now.clone().subtract(7, 'days'), now, 'day', '[]');
        case 'lastMonth':
          return forumDate.isBetween(
            now.clone().subtract(1, 'month').startOf('month'),
            now,
            'day',
            '[]'
          );
        default:
          return true;
      }
    });
  };

  const filteredForums = filterForums(forums, filter);

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 p-6 ml-[273px] mt-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold mb-4">Forum Posts</h1>
          <div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-[180px] p-2 border border-gray-300 rounded-md text-[#8B909A] mr-8"
            >
              <option value="">Filter by day</option>
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="lastWeek">Last Week</option>
              <option value="lastMonth">Last Month</option>
            </select>
          </div>
        </div>
        {loading && <p>Loading forums...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {filteredForums.length === 0 ? (
          <p className="text-gray-600">No posts for this period.</p>
        ) : (
          <div>
            {filteredForums.map((forum) => (
              <ForumCard key={forum.id} forum={forum} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Forum; // Add this line to export the Forum component

