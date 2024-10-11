import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
// import Login from './Pages/Login/Login'
import QuestionPage from "./Components/questionPage/QuestionPage";
// import SignUp from "./Components/SignUp/SignUp";
// import About from "./Components/About/About";
// import QuestionDisplay from "./Components/QuestionDisplay";
import Auth from "./Pages/Auth/Auth";
import AnswerPage from "./Pages/AnswerPage";
import AnswerForm from "./Components/AnswerForm";
import Answer from "./Pages/Answer/Answer";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Auth />} />
      <Route path="/questionPage" element={<QuestionPage />} />
      <Route path="/answer/:question_id" element={<Answer/>} />
    </Routes>
  );
}

export default Routing;
