import { fetchUserRole } from "../api/fetchUserRole";


let userFname = null;
let userId = null;

const fetchRole = async () => {
  try {
    const user = await fetchUserRole();
    if (user && user.firstname && user.lastname) {
      userFname = user.firstname;
      userId = user.id;
    } else {
      console.error("Invalid user data received:", user);
    }
  } catch (error) {
    console.error("Error fetching user role:", error.message);
  }

  console.log("User First Name:", userFname);
  console.log("User ID:", userId);
};

// Call the function to fetch the role
fetchRole();

export { userFname, userId };
