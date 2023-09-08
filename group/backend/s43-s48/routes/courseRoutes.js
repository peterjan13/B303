const express = require("express");
const router = express.Router();
const auth = require("../auth.js");
const CourseController = require("../controllers/CourseController.js");

// You can destructure the 'auth' variable to extract the function being exported from it. You can then use the functions directly without having to use dot (.) notation.
// const {verify, verifyAdmin} = auth;

// Insert routes here

// Create single course
router.post("/", auth.verify, auth.verifyAdmin, (request, response) => {
  CourseController.addCourse(request, response);
});

// Get all courses
router.get("/all", (request, response) => {
  CourseController.getAllCourses(request, response);
});

// Get all active courses
router.get("/", (request, response) => {
  CourseController.getAllActiveCourses(request, response);
});

// Get single course
router.get("/:id", (request, response) => {
  CourseController.getAllCourses(request, response);
});

// Update single course
router.put("/:id", auth.verify, auth.verifyAdmin, (request, response) => {
  CourseController.updateCourse(request, response);
});

// activate single course
router.put(
  "/:id/activate",
  auth.verify,
  auth.verifyAdmin,
  (request, response) => {
    CourseController.activateCourse(request, response);
  }
);

router.put(
  "/:id/archive",
  auth.verify,
  auth.verifyAdmin,
  (request, response) => {
    CourseController.archiveCourse(request, response);
  }
);

module.exports = router;
