import React, { useState } from "react";
import Home from "./Pages/Home/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
// import Login  from "./Pages/Login";
// import Register from "./Pages/Register";
import { useEffect, createContext } from "react";
import axios from './axios';//to use axios url
import Routing from "./Routing";

export const AppState = createContext();
function App() {
  const [answers, setAnswers] = useState([]);

  const handlePostAnswer = (answer) => {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);
  };

  //to protect our home
  const [user, setUser] = useState([]);
  const token = localStorage.getItem('token');//bring token from localStore
  const navigate = useNavigate();
  async function checkUser() {
    try {
      const {data} = await axios.get('/users/check', {
        headers: {
          Authorization: 'Bearer ' + token,
        },//token comes from localStore(login)
      });
      // console.log(data);
      
      setUser(data);//we have to put our data here
    } catch (error) {
      console.log(error.response);//response error 
      // navigate('/login')//back to login

    }
  }//to checkUser
  useEffect(() => {
    checkUser();//to check token on login
  }, []);
   return (
     <AppState.Provider value={{ user, setUser }}>
       <Routing />
     </AppState.Provider>
   );

  // return <Routing />;
  // );

  // import Routing from "./Routing";

  // function App() {
  //   const [answers, setAnswers] = useState([]);

  //   const handlePostAnswer = (answer) => {
  //     setAnswers((prevAnswers) => [...prevAnswers, answer]);
  //   };

  //   return (
  //     <>
  //       <Routing/>

  //     </>
  //   );
}

export default App;
