import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SubgroupList({ communityId }) {
  const [subgroups, setSubgroups] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8090/api/communities/${communityId}/subgroups`)
      .then(response => setSubgroups(response.data))
      .catch(error => console.error('Error fetching subgroups:', error));
  }, [communityId]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-2xl font-bold mb-4 text-black">Subgroups</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subgroups.map(subgroup => (
          <div 
            key={subgroup.id}
            className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold">
                {subgroup.name[0]}
              </div>
              <div>
                <h4 className="font-semibold text-black">{subgroup.name}</h4>
                <p className="text-sm text-gray-600">Active Members: {subgroup.members.length}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubgroupList;

