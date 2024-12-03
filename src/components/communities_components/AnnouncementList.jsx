import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AnnouncementList({ communityId }) {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8090/api/communities/${communityId}/announcements`)
      .then(response => setAnnouncements(response.data))
      .catch(error => console.error('Error fetching announcements:', error));
  }, [communityId]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-2xl font-bold mb-4 text-black">Announcements</h3>
      <div className="space-y-4">
        {announcements.map(announcement => (
          <div key={announcement.id} className="border-l-4 border-yellow-500 pl-4 py-2">
            <h4 className="text-xl font-semibold text-black mb-2">{announcement.title}</h4>
            <p className="text-gray-700 mb-2">{announcement.content}</p>
            <small className="text-gray-500">
              By {announcement.author.firstname} {announcement.author.lastname} on{' '}
              {new Date(announcement.createdAt).toLocaleString()}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnnouncementList;

