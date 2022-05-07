const express = require("express");
const router = express.Router();

const coursesController = require("./handler/courses");
const verifyToken = require("../middlewares/verifyToken");
const can = require("../middlewares/permission");

router.post("/", verifyToken, can("admin"), coursesController.create);
router.put("/:id", verifyToken, can("admin"), coursesController.update);
router.delete("/:id", verifyToken, can("admin"), coursesController.destroy);

router.get("/:id", coursesController.get);
router.get("/", coursesController.getAll);

module.exports = router;
