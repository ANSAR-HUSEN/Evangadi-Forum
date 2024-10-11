import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import Routing from "./Routing";
import axios from "./config/axios";

export const AuthContext = createContext();

function App() {
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  async function checkUser() {
    // Only check if token exists
    if (!token) {
      navigate("/login");
      return;
    }

    // Check if token is valid
    try {
      const { data } = await axios.get("/users/check", {
        headers: {
          Authorization:`Bearer ${token}`, // Add space between Bearer and token
        },
      });
      setUser(data); // Store user data in state
      // Handle the response if necessary
    } catch (error) {
      console.log("User check failed:", error);
      navigate("/login"); // Navigate to login on error
    }
  }

  useEffect(() => {
    checkUser(); // Run on component mount
  }, []); // Empty dependency array ensures this runs only once

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Routing />
    </AuthContext.Provider>
  );
}

export default App;