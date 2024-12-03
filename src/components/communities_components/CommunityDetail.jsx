import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CommunityDetail({ communityId }) {
  const [community, setCommunity] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8090/api/communities/${communityId}`)
      .then(response => setCommunity(response.data))
      .catch(error => console.error('Error fetching community:', error));
  }, [communityId]);

  if (!community) return (
    <div className="flex justify-center items-center h-32">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"></div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-3xl font-bold mb-4 text-black">{community.name}</h2>
      <p className="text-gray-700 mb-6">{community.description}</p>
      <div>
        <h3 className="text-xl font-semibold mb-3 text-black">Members</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {community.members.map(member => (
            <div 
              key={member.id} 
              className="flex items-center space-x-2 bg-gray-50 rounded-lg p-3"
            >
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white">
                {member.firstname[0]}
              </div>
              <span className="text-gray-700">
                {member.firstname} {member.lastname}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommunityDetail;

