const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController.js");
const auth = require('../auth.js');

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

// Get user details by ID
router.post("/details", auth.verify, (req, res) => {
  UserController.getProfile(req.body).then(result => {
    res.send(result);
  })
});

module.exports = router;
