import React, { useState } from 'react';

const StudyRoomInvitation = ({ onSend, onClose }) => {
  const [roomId, setRoomId] = useState('');
  const [roomKey, setRoomKey] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(roomId, roomKey);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Send Study Room Invitation</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="roomId" className="block mb-2">
              Room ID
            </label>
            <input
              id="roomId"
              type="text"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="roomKey" className="block mb-2">
              Room Key
            </label>
            <input
              id="roomKey"
              type="text"
              value={roomKey}
              onChange={(e) => setRoomKey(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-200 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
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

