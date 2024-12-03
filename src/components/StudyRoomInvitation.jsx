import React, { useState } from 'react';

const StudyRoomInvitation = ({ onSend, onClose }) => {
  const [roomId, setRoomId] = useState('');
  const [roomKey, setRoomKey] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(roomId, roomKey);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Send Study Room Invitation</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Room ID
            </label>
            <input
              type="text"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="w-full border rounded-lg p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Room Key
            </label>
            <input
              type="text"
              value={roomKey}
              onChange={(e) => setRoomKey(e.target.value)}
              className="w-full border rounded-lg p-2"
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Send Invitation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudyRoomInvitation;

