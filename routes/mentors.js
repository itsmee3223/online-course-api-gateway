const express = require("express");
const router = express.Router();

const mentorHandler = require("./handler/mentors");

router.post("/", mentorHandler.create);
router.get("/", mentorHandler.getAll);
router.get("/:id", mentorHandler.get);
router.put("/:id", mentorHandler.update);
router.delete("/:id", mentorHandler.destroy);

module.exports = router;
