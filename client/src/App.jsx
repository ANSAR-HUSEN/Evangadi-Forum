import React, { useState } from "react";

import Routing from "./Routing";

function App() {
  const [answers, setAnswers] = useState([]);

  const handlePostAnswer = (answer) => {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);
  };

  return <>
  <Routing/>
  
  </>;
}

export default App;
