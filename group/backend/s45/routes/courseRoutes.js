const express = require('express');
const router = express.Router();
const CourseController = require('../controllers/CourseController.js');
const auth = require('../auth.js');

router.post('/addCourse', auth.verify, auth.verifyAdmin, (request, response) => {
    CourseController.addCourse(request.body).then((result) => {
        response.send(result);
      });
});

module.exports = router;