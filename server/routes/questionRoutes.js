const express = require("express");
const router = express.Router();

const {
  getSingleQuestion,
  postQuestion,
  getAllQuestion,
} = require("../controller/questionController");
const authMiddleware = require("../middleware/authMiddleware");

// API endpoints
router.post("/question", authMiddleware, postQuestion);

router.get("/all-question", authMiddleware, getAllQuestion);

// const getSingleQuestion = require("../controller/questionController");

const authMiddleware = require("../middleware/authMiddleware");

router.get("/", questionController.getSingleQuestion);
// router.post("/", questionController.createQuestion);

module.exports = router;
