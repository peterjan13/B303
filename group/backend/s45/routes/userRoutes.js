const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController.js');
const auth = require('../auth.js');

router.post('/check-email', (request, response) => {
	UserController.checkEmailExists(request.body).then((result) => {
		response.send(result);
	})
})

router.post('/register', (request, response) => {
	UserController.registerUser(request.body).then(result => {
		response.send(result);
	})
})

router.post('/authenticate', (request, response) => {
	UserController.authenticateUser(request.body).then(result => {
		response.send(result);
	})
})

router.post('/login', (request, response) => {
	UserController.loginUser(request, response).then(result => {
		response.send(result);
	});
})

router.post("/details", auth.verify, auth.verifyAdmin, (req, res) => {
  UserController.getProfile(req.body).then(result => {
    res.send(result);
  })
});

module.exports = router;