// src/components/QuestionDisplay.jsx
import React from 'react';

const QuestionDisplay = ({ question, answers }) => {
    return (
        <div className="question-display">
            <h2>{question.title}</h2>
            <p>{question.body}</p>
            <h3>Answers:</h3>
            <ul>
                {answers.map((answer) => (
                    <li key={answer.id}>{answer.body}</li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionDisplay;
