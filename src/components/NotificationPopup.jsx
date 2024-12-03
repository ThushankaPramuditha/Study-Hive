import React from 'react';

const NotificationPopup = ({ notification, onAccept, onDecline }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200 max-w-sm w-full">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">Study Room Invitation</h3>
      <p className="mb-4 text-gray-600">{notification.message}</p>
      <div className="flex justify-end space-x-4">
        <button
          onClick={onDecline}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Decline
        </button>
        <button
          onClick={onAccept}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default NotificationPopup;

