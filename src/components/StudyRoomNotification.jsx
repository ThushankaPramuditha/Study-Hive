import React from 'react';

const StudyRoomNotification = ({
  fromUser,
  roomId,
  onAccept,
  onDecline,
}) => {
  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-yellow-400 max-w-sm">
      <h3 className="text-lg font-semibold mb-2">Study Room Invitation</h3>
      <p className="text-gray-600 mb-4">
        {fromUser} has invited you to join their study room.
      </p>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onDecline}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          Decline
        </button>
        <button
          onClick={onAccept}
          className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500"
        >
          Join Room
        </button>
      </div>
    </div>
  );
};

export default StudyRoomNotification;
