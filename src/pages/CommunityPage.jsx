import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './Modal';
import { fetchUserRole } from "../api/fetchUserRole";
import SideBar from '../components/SideBar';
import SideBarnNavbar from '../components/SideBarnNavbar';

function CommunityPage() {
  const [communities, setCommunities] = useState([]);
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [posts, setPosts] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [newCommunityName, setNewCommunityName] = useState('');
  const [newCommunityDescription, setNewCommunityDescription] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostImageUrl, setNewPostImageUrl] = useState('');
  const [newAnnouncementTitle, setNewAnnouncementTitle] = useState('');
  const [newAnnouncementContent, setNewAnnouncementContent] = useState('');
  const [newSubgroupName, setNewSubgroupName] = useState('');
  const [isCreateCommunityModalOpen, setIsCreateCommunityModalOpen] = useState(false);
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
  const [isCreateAnnouncementModalOpen, setIsCreateAnnouncementModalOpen] = useState(false);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const user = await fetchUserRole();
        if (user && user.id) {
          setCurrentUserId(user.id);
        } else {
          console.error("Invalid user data received:", user);
        }
      } catch (error) {
        console.error("Error fetching user role:", error.message);
      }
    };
    fetchRole();
    fetchCommunities();
  }, []);

  useEffect(() => {
    if (selectedCommunity) {
      fetchPosts();
      fetchAnnouncements();
    }
  }, [selectedCommunity]);

  useEffect(() => {
    if (isAddUserModalOpen) {
      fetchAllUsers();
    }
  }, [isAddUserModalOpen]);

  const fetchCommunities = () => {
    axios.get('http://localhost:8090/api/communities')
      .then(response => {
        console.log("Fetched communities:", response.data);
        if (Array.isArray(response.data)) {
          setCommunities(response.data);
        } else if (typeof response.data === 'object' && response.data !== null) {
          setCommunities([response.data]);
        } else {
          console.error('Unexpected data structure received:', response.data);
          setCommunities([]);
        }
      })
      .catch(error => {
        console.error('Error fetching communities:', error);
        setCommunities([]);
      });
  };

  const fetchPosts = () => {
    console.log(selectedCommunity.id);
    axios.get(`http://localhost:8090/api/posts/community/${selectedCommunity.id}`)
      .then(response => {
        console.log("Fetched posts:", response.data[0].authorFirstName);
        setPosts(response.data);
      })
      .catch(error => console.error('Error fetching posts:', error));
  };


  const fetchAnnouncements = () => {
    axios
      .get(`http://localhost:8090/api/communities/${selectedCommunity.id}/announcements`, {
        params: { userId: currentUserId }
      })
      .then(response => {
        console.log("Fetched announcements:", response.data);
        setAnnouncements(response.data);
      })
      .catch(error => console.error('Error fetching announcements:', error));
  };
  

  const fetchAllUsers = async () => {
    try {

      const token = localStorage.getItem("token");
      const response = await axios.get(`http://localhost:8090/api/v1/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("All users:", response.data);
      setAllUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleCreateCommunity = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:8090/api/communities', {
        name: newCommunityName,
        description: newCommunityDescription
      });
      console.log("Created community:", response.data);
      setCommunities([...communities, response.data]);
      setNewCommunityName('');
      setNewCommunityDescription('');
      setIsCreateCommunityModalOpen(false);
    } catch (error) {
      setError('Failed to create community. Please try again.');
      console.error('Error creating community:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewPostImageUrl(imageUrl);
    }
  };

  const createPost = (e) => {
    e.preventDefault();
    console.log("Creating post...");
    console.log("Selected Community ID:", selectedCommunity.id);
    console.log("User ID:", currentUserId);
    console.log("Post Content:", newPostContent);
    console.log("Post Image URL:", newPostImageUrl);

    axios.post(
      `http://localhost:8090/api/posts/${selectedCommunity.id}/${currentUserId}`,
      {
        content: newPostContent,
        imageUrl: newPostImageUrl
      }
    )
      .then(response => {
        console.log("Created post response:", response.data);
        setPosts([...posts, response.data]);
        setNewPostContent('');
        setNewPostImageUrl(''); // Clear the image URL input
        setIsCreatePostModalOpen(false);
      })
      .catch(error => {
        console.error('Error creating post:', error);
        console.log('Error details:', error.response ? error.response.data : 'No response data');
        console.log('Error status:', error.response ? error.response.status : 'No response status');
      });
  };


  const createAnnouncement = (e) => {
    e.preventDefault();
  
    axios.post(
      `http://localhost:8090/api/communities/${selectedCommunity.id}/announcements`,
      {
        title: newAnnouncementTitle,
        content: newAnnouncementContent,
      },
      {
        params: { userId: currentUserId },
      }
    )
      .then(response => {
        console.log("Created announcement:", response.data);
        setAnnouncements([...announcements, response.data]);
        setNewAnnouncementTitle('');
        setNewAnnouncementContent('');
        setIsCreateAnnouncementModalOpen(false);
      })
      .catch(error => console.error('Error creating announcement:', error));
  };
  
  const addUser = async (e) => {
    e.preventDefault();
    if (!selectedUserId) {
      console.error('No user selected');
      return;
    }
    try {
      const response = await axios.post(
        `http://localhost:8090/api/communities/${selectedCommunity.id}/members/${selectedUserId}`
      );
      console.log('User added:', response.data);

      // Optionally fetch updated community data
      const communityResponse = await axios.get(
        `http://localhost:8090/api/communities/${selectedCommunity.id}`
      );
      const updatedCommunity = communityResponse.data;

      // Update state and localStorage
      setSelectedCommunity(updatedCommunity);
      localStorage.setItem('selectedCommunity', JSON.stringify(updatedCommunity));

      // Reset form and close modal
      setSelectedUserId('');
      setIsAddUserModalOpen(false);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };



  const removeUser = (userId) => {
    axios.delete(`http://localhost:8090/api/communities/${selectedCommunity.id}/members/${userId}`)
      .then(() => {
        console.log('User removed:', userId);
        setSelectedCommunity({
          ...selectedCommunity,
          members: selectedCommunity.members.filter(member => member.id !== userId)
        });
      })
      .catch(error => console.error('Error removing user:', error));
  };

  const deletePost = (postId) => {
    console.log("Post Id", postId);
    axios.delete(`http://localhost:8090/api/posts/${postId}`)
      .then(() => {
        console.log('Post deleted:', postId);
        setPosts(posts.filter(post => post.id !== postId));
      })
      .catch(error => console.error('Error deleting post:', error));
  };
  const deleteAnnouncement = (announcementId) => {
    console.log("Deleting announcement with ID:", announcementId);
  
    axios
      .delete(`http://localhost:8090/api/communities/3/announcements/${announcementId}`)
      .then(() => {
        console.log(`Announcement with ID ${announcementId} deleted successfully.`);
        // Optionally, remove the deleted announcement from the state
        setAnnouncements((prevAnnouncements) =>
          prevAnnouncements.filter((announcement) => announcement.id !== announcementId)
        );
      })
      .catch((error) => {
        console.error("Error deleting announcement:", error);
      });
  };
  
return (
  <div>
    <SideBarnNavbar/>
  <div className="min-h-screen  ml-[250px]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="flex justify-between h-16">
          {selectedCommunity && (
            <button
              onClick={() => setSelectedCommunity(null)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black  focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-yellow-500 transition duration-150 ease-in-out"
            >
              ← Back to Communities
            </button>
          )}
        </div>
      {!selectedCommunity ? (
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-black">Your Communities</h2>
            <button
              onClick={() => setIsCreateCommunityModalOpen(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-150 ease-in-out"
            >
              Create New Community
            </button>
          </div>

          {Array.isArray(communities) && communities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communities.map(community => (
                <div
                  key={community.id}
                  onClick={() => setSelectedCommunity(community)}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden border border-black-200 transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 h-12 w-12 bg-gradient-to-br bg-yellow-400  rounded-lg flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">{community.name[0]}</span>
                      </div>
                      <div>
                    
                        <h3 className="text-xl font-semibold text-black">{community.name}</h3>
                        <p className="text-sm text-gray-600">{community.description}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        {Array.isArray(community.members) ? community.members.length : 0} members
                      </div>
                      {/* <div className="flex items-center">
                        <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {Array.isArray(community.subgroups) ? community.subgroups.length : 0} subgroups
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-lg">
              <svg className="mx-auto h-12 w-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-black">No communities</h3>
              <p className="mt-1 text-sm text-gray-500">Get started by creating a new community.</p>
              <div className="mt-6">
                <button
                  onClick={() => setIsCreateCommunityModalOpen(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-150 ease-in-out"
                >
                  Create New Community
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-yellow-200">
            <div className="px-6 py-4 border-b border-yellow-200 bg-gradient-to-r from-yellow-100 to-white-100">
              <h2 className="text-2xl font-bold text-black">{selectedCommunity.name}</h2>
              <p className="mt-1 text-gray-600">{selectedCommunity.description}</p>
            </div>

            <div className="px-6 py-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-black">Members</h3>
                <button
                  onClick={() => setIsAddUserModalOpen(true)}
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-200 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-150 ease-in-out"
                >
                  Add Member
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {(selectedCommunity?.members || []).map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between p-3 bg-gradient-to-r from-yellow-50 to-white-50 rounded-md border border-yellow-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 h-8 w-8 bg-gradient-to-br from-yellow-400 to-white-400 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-white">
                          {member.firstname?.[0] || ''}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-black">
                          {member.firstname || 'Unknown'} {member.lastname || ''}
                        </p>
                        <p className="text-xs text-gray-500">{member.email || 'No email provided'}</p>
                      </div>
                    </div>
                    {currentUserId !== member.id && (
                      <button
                        onClick={() => removeUser(member.id)}
                        className="text-red-600 hover:text-red-700 focus:outline-none transition duration-150 ease-in-out"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-yellow-200">
            <div className="px-6 py-4 border-b border-yellow-200 bg-gradient-to-r from-yellow-100 to-white-100 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-black">Posts</h3>
              <button
                onClick={() => setIsCreatePostModalOpen(true)}
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-200 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-150 ease-in-out"
              >
                Create Post
              </button>
            </div>

            <div className="divide-y divide-yellow-200">
              {posts.map((post) => (
                <div key={post.id} className="p-6 hover:bg-yellow-50 transition duration-150 ease-in-out">
                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 bg-gradient-to-br from-yellow-400 to-white-400 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-white">
                          {post.authorFirstName ? post.authorFirstName[0] : ''}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-600">
                        {post.authorFirstName && post.authorLastName
                          ? `${post.authorFirstName} ${post.authorLastName}`
                          : 'Unknown Author'} • {new Date(post.createdAt).toLocaleString()}
                      </p>
                      <p className="mt-1 text-black">{post.content}</p>
                      {post.imageUrl && (
                        <img
                          src={post.imageUrl}
                          alt="Post"
                          className="mt-4 max-w-full rounded-lg shadow-md"
                        />
                      )}
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => deletePost(post.id)}
                        className="text-yellow-600 hover:text-red-600 transition duration-150 ease-in-out"
                      >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-yellow-200">
            <div className="px-6 py-4 border-b border-yellow-200 bg-gradient-to-r from-yellow-100 to-white-100 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-black">Announcements</h3>
              <button
                onClick={() => setIsCreateAnnouncementModalOpen(true)}
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-200 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-150 ease-in-out"
              >
                Create Announcement
              </button>
            </div>

            <div className="divide-y divide-yellow-200">
              {announcements.map(announcement => (
               <div key={announcement.id} className="p-6 hover:bg-yellow-50 transition duration-150 ease-in-out">
                 <div className="flex space-x-3">
                   <div className="flex-shrink-0">
                     <div className="h-10 w-10 bg-gradient-to-br from-yellow-400 to-white-400 rounded-full flex items-center justify-center">
                       <span className="text-sm font-medium text-white">
                         {announcement.authorName ? announcement.authorName[0] : ''}
                       </span>
                     </div>
                   </div>
         
                   <div className="flex-1 min-w-0">
                     <p className="text-sm text-gray-600">
                       {announcement.authorName || 'Unknown Author'} •{' '}
                       {new Date(announcement.createdAt).toLocaleString()}
                     </p>
                     <h4 className="mt-1 text-lg font-medium text-black">{announcement.title}</h4>
                     <p className="mt-1 text-gray-700">{announcement.content}</p>
                   </div>
         
                   <div className="flex-shrink-0">
                     <button
                       onClick={() => deleteAnnouncement(announcement.id)}
                       className="text-yellow-600 hover:text-red-600 transition duration-150 ease-in-out"
                     >
                       <svg
                         className="h-5 w-5"
                         fill="none"
                         stroke="currentColor"
                         viewBox="0 0 24 24"
                       >
                         <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                         />
                       </svg>
                     </button>
                   </div>
                 </div>
               </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>

    <Modal
      isOpen={isCreateCommunityModalOpen}
      onClose={() => setIsCreateCommunityModalOpen(false)}
      title="Create New Community"
    >
      <form onSubmit={handleCreateCommunity} className="space-y-4">
        <div>
          <label htmlFor="communityName" className="block text-sm font-medium text-gray-700">
            Community Name
          </label>
          <input
            type="text"
            id="communityName"
            value={newCommunityName}
            onChange={(e) => setNewCommunityName(e.target.value)}
            className="mt-1 block w-full rounded-md border-yellow-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="communityDescription" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="communityDescription"
            value={newCommunityDescription}
            onChange={(e) => setNewCommunityDescription(e.target.value)}
            rows={4}
            className="mt-1 block w-full rounded-md border-yellow-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
            required
          />
        </div>
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
        <div className="mt-5 sm:mt-6">
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-yellow-500  px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:text-sm disabled:opacity-50 transition duration-150 ease-in-out"
          >
            {isLoading ? 'Creating...' : 'Create Community'}
          </button>
        </div>
      </form>
    </Modal>

    <Modal
      isOpen={isCreatePostModalOpen}
      onClose={() => setIsCreatePostModalOpen(false)}
      title="Create New Post"
    >
      <form onSubmit={createPost} className="space-y-4">
        <div>
          <label htmlFor="postContent" className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            id="postContent"
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
            rows={4}
            className="mt-1 block w-full rounded-md border-yellow-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
            Image URL (Optional)
          </label>
          <div className="flex items-center space-x-2">
            <input
              id="imageUrl"
              type="text"
              value={newPostImageUrl}
              onChange={(e) => setNewPostImageUrl(e.target.value)}
              className="mt-1 block w-full rounded-md border-yellow-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
              placeholder="Enter image URL"
            />
            <button
              type="button"
              onClick={() => document.getElementById('imageInput').click()}
              className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-200 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-150 ease-in-out"
            >
              Select Image
            </button>
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="hidden"
            />
          </div>
        </div>
        <div className="mt-5 sm:mt-6">
          <button
            type="submit"
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-black px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:text-sm transition duration-150 ease-in-out"
          >
            Create Post
          </button>
        </div>
      </form>
    </Modal>

    <Modal
      isOpen={isCreateAnnouncementModalOpen}
      onClose={() => setIsCreateAnnouncementModalOpen(false)}
      title="Create New Announcement"
    >
      <form onSubmit={createAnnouncement} className="space-y-4">
        <div>
          <label htmlFor="announcementTitle" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="announcementTitle"
            value={newAnnouncementTitle}
            onChange={(e) => setNewAnnouncementTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-yellow-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="announcementContent" className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            id="announcementContent"
            value={newAnnouncementContent}
            onChange={(e) => setNewAnnouncementContent(e.target.value)}
            rows={4}
            className="mt-1 block w-full rounded-md border-yellow-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
            required
          />
        </div>
        <div className="mt-5 sm:mt-6">
          <button
            type="submit"
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-black px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:text-sm transition duration-150 ease-in-out"
          >
            Create Announcement
          </button>
        </div>
      </form>
    </Modal>

    <Modal
      isOpen={isAddUserModalOpen}
      onClose={() => setIsAddUserModalOpen(false)}
      title="Add New Member"
    >
      <form onSubmit={addUser} className="space-y-4">
        <div>
          <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
            Select User
          </label>
          <select
            id="userId"
            value={selectedUserId}
            onChange={(e) => setSelectedUserId(e.target.value)}
            className="mt-1 block w-full rounded-md border-yellow-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
            required
          >
            <option value="">Select a user</option>
            {allUsers.map(user => (
              <option key={user.id} value={user.id}>
                {user.firstname} {user.lastname} ({user.email})
              </option>
            ))}
          </select>
        </div>
        <div className="mt-5 sm:mt-6">
          <button
            type="submit"
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-black px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:text-sm transition duration-150 ease-in-out"
          >
            Add Member
          </button>
        </div>
      </form>
    </Modal>
  </div>
  </div>
);


}

export default CommunityPage;

