const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController.js");
const auth = require("../auth.js");

// Check if email exists
router.post("/check-email", (request, response) => {
  // Controller function goes here
  UserController.checkEmailExists(request.body).then((result) => {
    response.send(result);
  });
});

// Register user
router.post("/register", (request, response) => {
  UserController.registerUser(request.body).then((result) => {
    response.send(result);
  });
});

// Login user
router.post("/login", (request, response) => {
  UserController.loginUser(request, response);
});

// Get user details
// The auth.verify serves as a middleware function within the route. The request has to get its token verified first, before it can trigger a response from the API
router.post("/details", auth.verify, auth.verifyAdmin, (request, response) => {
  UserController.getProfile(request.body).then((result) => {
    response.send(result);
  });
});

// Enroll user to a course
router.post("/enroll", auth.verify, (request, response) => {
  UserController.enroll(request, response);
});

// Get user enrollments
router.get("/enrollments", auth.verify, (request, response) => {
  UserController.getEnrollments(request, response);
});

module.exports = router;
