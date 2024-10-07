import React, { useState } from "react";
import Home from "./Pages/Home/Home";
import {Route, Routes, useNavigate} from "react-router-dom";
import Login  from "./Pages/Login";
import Register from "./Pages/Register";
import { useEffect, useState, createContext } from 'react';
import axios from './axiosConfig';

function App() {
  //to protect our home
  const [user, setuser] = useState([]);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  async function checkUser() {
    try {
      const {data} = await axios.get('/users/check', {
        headers: {
          Authorization: 'Bearer', token,
        },
      });
      setuser(data);
    } catch (error) {
      console.log(error.response);
      navigate('/login')
      
    }
  }
  useEffect(() => {
    checkUser();//to check token on login
  }, []);
   return (
     <AppState.Provider value={{ user, setuser }}>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register/>} />
       </Routes>
     </AppState.Provider>
   );

  // return( <Home />;
  // );
}

export default App;
