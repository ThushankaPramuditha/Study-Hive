import { fetchUserRole } from "../api/fetchUserRole";


let userFname = null;
let userId = null;
let userLname = null;
let email = null;
let fId = null;
let userName = "";

const fetchRole = async () => {
  try {
    const user = await fetchUserRole();
    console.log("User Data:", user);
    if (user && user.firstname && user.lastname) {
      userFname = user.firstname;
      userLname = user.lastname;
      userId = user.id;
      email = user.email;
      fId = userFname + userId;
    } else {
      console.error("Invalid user data received:", user);
    }
  } catch (error) {
    console.error("Error fetching user role:", error.message);
  }

  console.log("User First Name:", userFname);
  console.log("User Last Name:", userLname);
  console.log("User ID:", userId);
  console.log("User Email:", email);
};

// Call the function to fetch the role
fetchRole();

export { userFname, userId, userLname, email, fId };
