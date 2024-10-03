import React from "react";


import React, {useState } from 'react'
import Footer from './components/footer/Footer'
import QuestionPage from './components/questionPage/QuestionPage';


import Home from "./Pages/Home/Home";


import SignUp from "./components/SignUp/SignUp";


function App() {

  const [answers, setAnswers] = useState([]);

  const handlePostAnswer = (answer) => {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);
  };

  return (

    <>
      
        
//      <SignUp />
//     <Home />
//       <QuestionPage/>
//       <Footer />
    </>

    
  );
}

export default App;
