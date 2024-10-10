

import React, {useState } from 'react'
import Footer from './components/footer/Footer'



import Home from "./Pages/Home/Home";


import SignUp from "./components/SignUp/SignUp";



// import Header from './componet/header/header'

import Routing from './Routing'
import { useNavigate } from 'react-router-dom';
// import { Router } from 'react-router-dom'



// import Routing from "./Routing";

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
      navigate("/login");
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
