import * as React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { decodeJWT } from '../api/decodeJWT';
import { useNavigate } from 'react-router-dom';

function usernameFromJWT(token) {
  const decoded = decodeJWT(token);
  return decoded?.firstname + ' ' + decoded?.lastname;
}

// Track active users in local storage (simple implementation)
function isUserAlreadyActive(username, roomID) {
  const activeUsers = JSON.parse(localStorage.getItem('activeUsers')) || {};
  return activeUsers[roomID]?.includes(username);
}

function addUserToActiveList(username, roomID) {
  const activeUsers = JSON.parse(localStorage.getItem('activeUsers')) || {};
  if (!activeUsers[roomID]) {
    activeUsers[roomID] = [];
  }
  activeUsers[roomID].push(username);
  localStorage.setItem('activeUsers', JSON.stringify(activeUsers));
}

function removeUserFromActiveList(username, roomID) {
  const activeUsers = JSON.parse(localStorage.getItem('activeUsers')) || {};
  if (activeUsers[roomID]) {
    activeUsers[roomID] = activeUsers[roomID].filter((user) => user !== username);
    if (activeUsers[roomID].length === 0) {
      delete activeUsers[roomID];
    }
  }
  localStorage.setItem('activeUsers', JSON.stringify(activeUsers));
}

export default function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  // Check if the user is authenticated
  React.useEffect(() => {
    if (!token) {
      navigate('/login'); // Redirect to login page if no token
    }
  }, [token, navigate]);

  const user = usernameFromJWT(token);
  const randomID = (len = 5) => {
    const chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP';
    let result = '';
    for (let i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const getUrlParams = (url = window.location.href) => {
    const urlStr = url.split('?')[1];
    return new URLSearchParams(urlStr);
  };

  const roomID = getUrlParams().get('roomID') || randomID(5);

  React.useEffect(() => {
    if (isUserAlreadyActive(user, roomID)) {
      alert('You are already connected to this room.');
      navigate('/'); // Redirect to a safe page
    } else {
      addUserToActiveList(user, roomID);
    }

    return () => {
      removeUserFromActiveList(user, roomID); // Cleanup on component unmount
    };
  }, [user, roomID, navigate]);

  const myMeeting = async (element) => {
    // Generate Kit Token
    const appID = 98644332;
    const serverSecret = '99d064398cc28b6441ab394807db748a';
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(5), user);

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    // Start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Personal link',
          url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // For 1-on-1 calls, use ZegoUIKitPrebuilt.OneONoneCall.
      },
    });
  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}
