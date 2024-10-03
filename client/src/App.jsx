// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnswerPage from './pages/AnswerPage';  
import HomePage from './pages/HomePage';



const App = () => {
  return (
    <Router>
      <div>
        {/* Define Routes for your application */}
        <Routes>
          {/* Route for the homepage */}
          <Route path="/" element={<HomePage />} />
          
          {/* Route for the Answer page */}
          <Route path="/questions/:id" element={<AnswerPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
