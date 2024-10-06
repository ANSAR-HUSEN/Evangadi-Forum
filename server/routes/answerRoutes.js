const express = require('express');
const router = express.Router();
const answerController = require('../controller/answerController')


// Router to get ansers for a specific question
router.get('/answer/:question_id', answerController.getAnswersByQuestionId);


// Router to Post an answer


module.exports = router;