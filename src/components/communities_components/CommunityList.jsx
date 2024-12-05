import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CommunityList() {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8090/api/communities')
      .then(response => setCommunities(response.data))
      .catch(error => console.error('Error fetching communities:', error));
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-black">Your Communities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communities.map(community => (
          <div 
            key={community.id} 
            className="bg-gray-50 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                {community.name[0]}
              </div>
              <h3 className="text-lg font-semibold text-black">{community.name}</h3>
            </div>
            <div className="text-sm text-gray-600">
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                Active
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommunityList;

