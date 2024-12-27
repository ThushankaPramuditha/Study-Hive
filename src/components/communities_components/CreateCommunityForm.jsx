import React, { useState } from 'react';
import axios from 'axios';

function CreateCommunityForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8090/api/communities', { name, description })
      .then(response => {
        console.log('Community created:', response.data);
        setName('');
        setDescription('');
      })
      .catch(error => console.error('Error creating community:', error));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-black">Create a New Community</h2>
          <p className="text-gray-600 mt-1">
            Create a new community for collaborative learning and unlock the power of shared knowledge and mutual growth
          </p>
        </div>
        <button
          onClick={() => document.getElementById('createCommunityForm').scrollIntoView({ behavior: 'smooth' })}
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg font-semibold transition-colors"
        >
          Let's Go
        </button>
      </div>
      
      <form id="createCommunityForm" onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Community Name:</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description:</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Create Community
        </button>
      </form>
    </div>
  );
}

export default CreateCommunityForm;

