import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
// import Login from './Pages/Login/Login'
// import QuestionPage from "./Components/questionPage/QuestionPage";
// import SignUp from "./Components/SignUp/SignUp";
// import About from "./Components/About/About";
// import QuestionDisplay from "./Components/QuestionDisplay";
import Auth from "./Pages/Auth/Auth";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Auth />} />
      {/* <Route path="/questionPage" element={<QuestionPage />} /> */}
      {/* <Route path="/questionDetail" element={<QuestionDisplay/>} /> */}
    </Routes>
  );
}

export default Routing;
