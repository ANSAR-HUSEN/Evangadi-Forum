

import React, {useState } from 'react'
import Footer from './components/footer/Footer'
import QuestionPage from './components/questionPage/QuestionPage';


import Home from "./Pages/Home/Home";


import SignUp from "./components/SignUp/SignUp";



import Header from './componet/header/header'

import Routing from './Routing'

import { Router } from 'react-router-dom'




function App() {

  const [answers, setAnswers] = useState([]);

  const handlePostAnswer = (answer) => {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);
  };

  return (


   

    <>
      
          <Header/>
//      <SignUp />
//      <Routing />
    <Home />
//       <QuestionPage/>
      <Footer />
    </>

    
  );


}

export default App;
