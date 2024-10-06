const express = require("express");
const { postQuestion } = require("../controller/questionController");
const router = express.Router();

// API end point using express
router.post("/post", postQuestion);


module.exports = router;
