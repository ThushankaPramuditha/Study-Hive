import React, { useState } from 'react';
import axios from 'axios';

function CreatePostForm({ communityId, userId }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8090/api/communities/${communityId}/posts?userId=${userId}`, { content })
      .then(response => {
        console.log('Post created:', response.data);
        setContent('');
      })
      .catch(error => console.error('Error creating post:', error));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-2xl font-bold mb-4 text-black">Create New Post</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Content:</label>
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            required
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Create Post
        </button>
      </div>
    </form>
  );
}

export default CreatePostForm;

