import React, { useState } from "react";

import Routing from "./Routing";
// import AppRouter from "./Router";


function App() {
  const [answers, setAnswers] = useState([]);

  const handlePostAnswer = (answer) => {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);
  };

  return (
    <>
      <Routing/>
      {/* <AppRouter /> */}
    </>
  );
}

export default App;
