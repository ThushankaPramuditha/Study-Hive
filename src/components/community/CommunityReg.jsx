import React, { useState } from 'react';

const CommunityReg = () => {
  const [formData, setFormData] = useState({
    communityName: 'Hell',
    expectedMembers: '12',
    description: 'lorem ipsum',
    logo: null,
  });

  const [isLog, setIsLog] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'logo') {
      setFormData({
        ...formData,
        logo: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {isLog ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2 text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
                Sign Up
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">Register Community</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2 text-gray-700">Community Name</label>
                <input
                  type="text"
                  name="communityName"
                  value={formData.communityName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter Community Name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Expected Members</label>
                <input
                  type="number"
                  name="expectedMembers"
                  value={formData.expectedMembers}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter Expected Members"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter Description"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Logo</label>
                <input
                  type="file"
                  name="logo"
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
                Register
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default CommunityReg;