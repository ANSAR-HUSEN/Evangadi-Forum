const express = require("express");
const {
  postQuestion,
  getAllQuestion,
} = require("../controller/questionController");
const authMiddleware = require("../middleware/authMiddleware");



// API endpoints
router.post("/question", authMiddleware, postQuestion);

router.get("/all-question", authMiddleware, getAllQuestion);
const router = express.Router();
const getSingleQuestion = require("../controller/questionController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/:question_id", getSingleQuestion);

// router.get("/", questionController.getSingleQuestion);
// router.post("/", questionController.createQuestion);

module.exports = router;
