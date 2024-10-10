import React, { useState } from "react";
import "./questionPage.css";
import axios from "axios"
import KeywordExtractor from "keyword-extractor";


function QuestionPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);

  // Function to generate tags using keyword-extractor
  const generateTag = (title) => {
    const extractionResult = KeywordExtractor.extract(title, {
      language: "english",
      remove_digits: true,
      return_changed_case: true,
      remove_duplicates: true,  
    });

    // If extraction returns no keywords, return a default tag
    return extractionResult.length > 0 ? extractionResult[0] : "general"; // Use the first keyword or default to "general"
  };

  //handleSubmit function sends a POST request to /api/question with the question data (title, description, tag)
  const handleSubmit = async (e) => {
    e.preventDefault();
     const tag = generateTag(title);
    try {
      const response = await axios.post("http://localhost:5500/api/question", {
        title,
        description,
        tag,
      });
      setQuestions((prevQuestions) => [...prevQuestions, response.data]);
      setTitle("");
      setDescription("");
    } catch (error) {
      setError(error.message);
    }
  };

  //get all questions

  return (
    <div>
      <div className="steps_toFollow">
        <h2>Steps to write a good question</h2>
        <ul>
          <li>Summerize your question in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>

      <div className="question_form">
        <div className="question_title">
          <h2>Ask the Public your Question</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
         
          <textarea
            placeholder="Question Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit">Post Your Question</button>
        </form>
        <div className="posted_questions">
          {questions.map((question) => (
            <div key={question.questionId}>
              <h3>{question.title}</h3>
              <p>{question.description}</p>
              <p>{question.tag}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
