import React, { useContext, useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import { fetchUserRole } from "../../api/fetchUserRole";

let userName = "";
let email = "";
let fId = "";

try {
  const user = await fetchUserRole();
  console.log("User Data:", user);
  if (user && user.firstname && user.lastname) {
    userName = user.firstname+" "+user.lastname;
    email = user.email;
    fId = user.firstname + user.id;
  } else {
    console.error("Invalid user data received:", user);
  }
} catch (error) {
  console.error("Error fetching user role:", error.message);
}


const Message = ({ message }) => {
  // const { currentUser } = useContext(AuthContext);
  const [currentUser] = useState({
    uid: fId,
    displayName: userName,
    email: email,
  });

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message1 ${message.senderId === currentUser.uid && "owner1"}`}
    >
      <div className="messageInfo1">
        {/* <span>just now</span> */}
      </div>
      <div className="messageContent1">
        <p>{message.text}</p>
      </div>
    </div>
  );
};
Message.propTypes = {
  message: PropTypes.shape({
    senderId: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Message;

