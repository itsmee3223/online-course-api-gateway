const express = require("express");
const router = express.Router();

const mentorHandler = require("./handler/mentors");

router.post("/", mentorHandler.create);

module.exports = router;
