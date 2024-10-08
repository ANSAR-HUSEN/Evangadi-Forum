const express = require("express");
const router = express.Router();
const getSingleQuestion = require("../controller/questionController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/:question_id", getSingleQuestion);

// router.get("/", questionController.getSingleQuestion);
// router.post("/", questionController.createQuestion);

module.exports = router;
