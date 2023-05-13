const express = require("express");
const router = express.Router();

const courseController = require("../resources/app/controllers/CourseController");

router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.get("/:id/edit", courseController.edit);
router.post("/:id", courseController.update);
router.get("/:id/delete", courseController.destroy);
router.get("/:slug", courseController.show);

module.exports = router;
