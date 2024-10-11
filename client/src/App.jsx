// Import necessary hooks and components from React and other libraries
import { useEffect, useState, createContext } from "react"; // Import React hooks
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation between routes
import Routing from "./Routing"; // Import the Routing component for handling routes in the app
import axios from "./config/axios"; // Import the axios instance configured for API requests

// Create a context for authentication that can be shared across components
export const AuthContext = createContext();

function App() {
  // State to hold the user data
  const [user, setUser] = useState({}); // Initialize user state as an empty object

  // Create a navigate function for routing
  const navigate = useNavigate();
  // Get the token from local storage
  const token = localStorage.getItem("token");

  // Function to check if a user is logged in by validating the token
  async function checkUser() {
    // Only proceed if a token exists
    if (!token) {
      navigate("/login"); // If no token, navigate to the login page
      return; // Exit the function
    }

    // Attempt to validate the token with the backend
    try {
      // Make a GET request to check the user's status with the token
      const { data } = await axios.get("/users/check", {
        headers: {
          // Include the token in the Authorization header
          Authorization: `Bearer ${token}`, // Ensure there's a space between 'Bearer' and the token
        },
      });
      // If successful, store the user data in state
      setUser(data); // Set the retrieved user data
      // Handle the response if necessary (e.g., showing user-specific features)
    } catch (error) {
      // If there's an error (e.g., token is invalid), log it
      console.log("User check failed:", error);
      navigate("/login"); // Navigate to the login page on error
    }
  }

  // useEffect to run checkUser when the component mounts
  useEffect(() => {
    checkUser(); // Invoke the check user function
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Provide the user state and setter function to the Routing component
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Routing /> {/* Render the Routing component */}
    </AuthContext.Provider>
  );
}

export default App; // Export the App component as the default export

// import React, { useState, useEffect, createContext } from "react";
// import Footer from './components/footer/Footer'

// import Home from "./Pages/Home/Home";

// import SignUp from "./components/SignUp/SignUp";

// // import Header from './componet/header/header'

// import Routing from './Routing'

// import { Router } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";

// // import Routing from "./Routing";

// export const AppState = createContext();
// function App() {
//   const [answers, setAnswers] = useState([]);

//   const handlePostAnswer = (answer) => {
//     setAnswers((prevAnswers) => [...prevAnswers, answer]);
//   };

//   //to protect our home
//   const [user, setUser] = useState([]);
//   const token = localStorage.getItem('token');//bring token from localStore
//   const navigate = useNavigate();
//   async function checkUser() {
//     try {
//       const {data} = await axios.get('/users/check', {
//         headers: {
//           Authorization: 'Bearer ' + token,
//         },//token comes from localStore(login)
//       });
//       // console.log(data);

//       setUser(data);//we have to put our data here
//     } catch (error) {
//       // console.log(error.response);//response error
//       // navigate('/login')//back to login

//     }
//   }//to checkUser
//   useEffect(() => {
//     checkUser();//to check token on login
//   }, []);
//    return (
//      <AppState.Provider value={{ user, setUser }}>
//        <Routing />
//      </AppState.Provider>
//    );

// }

// export default App;
