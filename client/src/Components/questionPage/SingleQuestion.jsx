import React, { useEffect, useState } from "react";
import axios from "axios";

function SingleQuestion() {
  const [question, setQuestion] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/question/${questionId}`
        );
        setQuestion(response.data.question);
      } catch (err) {
        if (err.response) {
          setError(err.response.data.message);
        } else {
          setError("an unexpected error occurred.");
        }
      }
    };
    fetchQuestion();
  }, [questionId]);
  if (error) {
    return <div>Error:{error}</div>;
  }
  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{question.title}</h2>
      <p>{question.content}</p>
      <small>
        Created by user {question.user_id}on
        {new Date(question.created_at).totalString()}
      </small>
    </div>
  );
}

export default SingleQuestion;
