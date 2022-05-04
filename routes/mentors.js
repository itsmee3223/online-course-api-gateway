const express = require("express");
const router = express.Router();

const mentorHandler = require("./handler/mentors");

router.post("/", mentorHandler.create);
router.get("/", mentorHandler.getAll);
router.get("/:id", mentorHandler.get);

module.exports = router;
