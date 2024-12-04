import {
  createContext,
  useContext,
  useReducer,
  useState
} from "react";
import PropTypes from 'prop-types';
// import { AuthContext } from "./AuthContext";
import { fetchUserRole } from "../api/fetchUserRole";

export const ChatContext = createContext();

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

export const ChatContextProvider = ({ children }) => {
  // const { currentUser } = useContext(AuthContext);
  const [currentUser] = useState({
    uid: fId,
    displayName: userName,
    email: email,
  });
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };
  
  ChatContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data:state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
