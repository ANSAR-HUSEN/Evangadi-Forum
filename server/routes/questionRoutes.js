const express = require("express");
const {
  postQuestion,
  getAllQuestion,
} = require("../controller/questionController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// API endpoints
router.post("/question", authMiddleware, postQuestion);

router.get("/all-question", authMiddleware, getAllQuestion);

module.exports = router;
