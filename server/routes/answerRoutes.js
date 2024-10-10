const express = require('express');
const router = express.Router();
const answerController = require('../controller/answerController');
const authMiddleware = require('../middleware/authMiddleware');


// Router to get ansers for a specific question
router.get('/answer/:question_id', answerController.getAnswersByQuestionId);


// Router to Post an answer
router.post('/answer',authMiddleware, answerController.postAnswerForQuestion);



module.exports = router;