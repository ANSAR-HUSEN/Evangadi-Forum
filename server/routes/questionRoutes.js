const express = require("express");
const { getAllQuestions } = require("../controller/questionController");

const router = express.Router();

 //authonthication middleware
router.get("/question", getAllQuestions);


module.exports = router;
