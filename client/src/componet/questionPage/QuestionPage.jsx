import React, { useState } from "react";
import "./questionPage.css";


function QuestionPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuestions((prevQuestions) => [...prevQuestions, { title, description }]);
    setTitle("");
    setDescription("");
  };
  // to update the state of the questions by adding title and description sections to the previous questions & resets title and description to empty

  return (
    <div>

      <div className="steps_toFollow">
        <h2>Steps to write a good question</h2>
        <ul>
          <li>Summerize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>
      

      <div className="question_form">
        <div className="question_title">
          <h2>Ask a Public Question</h2>
          
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {/* title and description updates with the new value entered by the user */}
          <textarea
            placeholder="Question Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Post Your Answer</button>
        </form>
        <div className="posted_questions">
            {/* //this will just post the question underneath the form */}
          {/* {questions.map((question, index) => (
            <div key={index} className="posted-question">
              <h3>{question.title}</h3>
              <p>{question.description}</p>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
