
import React, {useState } from 'react'
import Footer from './components/footer/Footer'
import QuestionPage from './components/questionPage/QuestionPage';


function App() {

  const [answers, setAnswers] = useState([]);

  const handlePostAnswer = (answer) => {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);
  };

  return (
    <>
      <div>
        
      </div>
      <QuestionPage/>
      <Footer />
    </>
  );
}

export default App