const express = require("express");
const studentController = require("../controllers/StudentController");

const router = express.Router();

// Route to get all students
router
  .route("/")
  .get(studentController.getAllStudents)
  .post(studentController.createStudent);

module.exports = router;
