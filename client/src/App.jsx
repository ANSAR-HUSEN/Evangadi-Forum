import React, { useEffect, useState, createContext } from "react";

import Routing from "./Routing";
import { useNavigate } from "react-router-dom";

const AppState = createContext();

function App() {
  const [answers, setAnswers] = useState([]);
  const [user, setUser] = useState();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handlePostAnswer = (answer) => {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);
  };

  async function checkUser() {
    try {
      const { data } = await axios.get("/users/check", {
        headers: {
          Authorization: "bearer " + token,
        },
      });
      setUser(data);
    } catch (error) {
      console.log(error.response);
      // navigate("/register");
      // navigate("/login");
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <AppState.Provider value={{ user, setUser }}>
      <Routing />
    </AppState.Provider>
  );
}

export default App;
