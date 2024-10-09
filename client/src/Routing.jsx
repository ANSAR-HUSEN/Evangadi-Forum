import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home/Home";
import QuestionPage from "./components/questionPage/QuestionPage";
import Home from "./Pages/Home/Home";
// import Login from './Pages/Login/Login'

import About from "./Components/About/About";
import QuestionDisplay from "./Components/QuestionDisplay";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/questionPage" element={<QuestionPage />} />
        <Route path="/login" element={<About />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/questionPage" element={<QuestionPage />} />
        {/* <Route path="/questionDetail" element={<QuestionDisplay/>} /> */}
      </Routes>
    </div>
  );
}

export default Routing;
