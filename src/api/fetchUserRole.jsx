import axios from "axios";
import { decodeJWT } from "./decodeJWT";

export const fetchUserRole = async () => {
  try {
    const token = localStorage.getItem("token");
    const decodedPayload = decodeJWT(token);
    const email = decodedPayload?.sub;

    if (!email) {
      console.error("No email found in token");
      return null;
    }

    const response = await axios.get(`http://localhost:8090/api/v1/users/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.role;
  } catch (error) {
    console.error("Error fetching user role:", error.message);
    return null;
  }
};
