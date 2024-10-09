import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To access dynamic params
import QuestionDisplay from '../Components/QuestionDisplay';
import AnswerForm from '../Components/AnswerForm';

const AnswerPage = () => {
  const { id } = useParams(); // Get the question ID from the URL
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    // Fetch question and answers based on the question ID
    const fetchQuestion = async () => {
      try {
        const response = await fetch(`/api/questions/${id}`);
        const data = await response.json();
        console.log("Fetched data:", data); // Log the API response
        setQuestion(data.question);
        setAnswers(data.answers);
      } catch (error) {
        console.error('Error fetching question:', error);
      }
    };

    fetchQuestion();
  }, [id]);

  const handleAnswerSubmit = async (newAnswer) => {
    try {
      const response = await fetch(`/api/questions/${id}/answers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: newAnswer }),
      });

      if (response.ok) {
        const updatedAnswers = await response.json();
        setAnswers(updatedAnswers);
      }
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };

  return (
    <div>
      <QuestionDisplay question={question} answers={answers} />
      <AnswerForm onSubmit={handleAnswerSubmit} />
    </div>
  );
};

export default AnswerPage;
