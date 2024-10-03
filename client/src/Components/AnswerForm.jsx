
import React, { useState } from 'react';

const AnswerForm = ({ onSubmit }) => {
    const [answer, setAnswer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(answer);
        setAnswer('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer here..."
                required
            />
            <button type="submit">Submit Answer</button>
        </form>
    );
};

export default AnswerForm;
