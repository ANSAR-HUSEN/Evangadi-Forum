import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnswerPage from './Pages/AnswerPage';

const AppRouter = () => {
   return (
       <Router>
           <Routes>
               <Route path="/questions/:id" element={<AnswerPage />} />
               {/* Add other routes here */}
           </Routes>
       </Router>
   );
};

export default AppRouter;
