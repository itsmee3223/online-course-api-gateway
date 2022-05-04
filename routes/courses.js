const express = require("express");
const router = express.Router();

const coursesController = require("./handler/courses");

router.post("/", coursesController.create);
router.put("/:id", coursesController.update);
router.delete("/:id", coursesController.destroy);
router.get("/:id", coursesController.get);
router.get("/", coursesController.getAll);

module.exports = router;
