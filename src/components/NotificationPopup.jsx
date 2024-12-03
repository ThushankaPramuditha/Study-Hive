import React from 'react';

const NotificationPopup = ({ notification, onAccept, onDecline }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-white border rounded-lg shadow-lg p-4 w-80">
      <p className="mb-4">{notification.message}</p>
      <div className="flex justify-end">
        <button
          onClick={onDecline}
          className="mr-2 px-4 py-2 bg-gray-200 rounded"
        >
          Decline
        </button>
        <button
          onClick={onAccept}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default NotificationPopup;

