import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import SignUp from './Components/SignUp/SignUp'
import About from './Components/About/About';





function Routing() {
  return (
     <div>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/login" element={<About />} />
           <Route path="/register" element={<SignUp/>} />
        </Routes>
     </div>
  );
}

export default Routing
