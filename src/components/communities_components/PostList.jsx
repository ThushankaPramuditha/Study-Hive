import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostList({ communityId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8090/api/communities/${communityId}/posts`)
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, [communityId]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-2xl font-bold mb-4 text-black">Posts</h3>
      <div className="space-y-4">
        {posts.map(post => (
          <div 
            key={post.id} 
            className="bg-gray-50 rounded-lg p-4 border-l-4 border-yellow-500"
          >
            <p className="text-gray-700 mb-3">{post.content}</p>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white">
                {post.author.firstname[0]}
              </div>
              <div>
                <span className="text-sm font-medium text-gray-900">
                  {post.author.firstname} {post.author.lastname}
                </span>
                <p className="text-xs text-gray-500">
                  {new Date(post.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;

