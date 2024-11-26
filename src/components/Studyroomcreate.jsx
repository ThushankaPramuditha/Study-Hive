import React, { useEffect, useState } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useSearchParams } from 'react-router-dom';

function randomID(len) {
  let result = '';
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export default function VideoCall() {
  const [searchParams] = useSearchParams();
  const roomID = searchParams.get('roomID');

  useEffect(() => {
    let myMeeting = async (element) => {
      const appID = 386910510;
      const serverSecret = "bf0c135473ad651cdce05d1ff59458c7";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(5), randomID(5));

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall,
        },
      });
    };

    const containerElement = document.querySelector('.myCallContainer');
    if (containerElement) {
      myMeeting(containerElement);
    }
  }, [roomID]);

  return (
    <div
      className="myCallContainer"
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}