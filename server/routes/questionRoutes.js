const express = require("express");
const router = express.Router();

const {
  postQuestion,
  getAllQuestion,
  getSingleQuestion,
} = require("../controller/questionController");
const authMiddleware = require("../middleware/authMiddleware");

// API endpoints
router.post("/question", authMiddleware, postQuestion);

router.get("/question", authMiddleware, getAllQuestion);

router.get("/question/:question_id", getSingleQuestion);

module.exports = router;
