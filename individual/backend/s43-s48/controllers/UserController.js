const User = require("../models/User.js");
const Course = require("../models/Course.js");
const bcrypt = require("bcrypt");
const auth = require("../auth.js");

module.exports.checkEmailExists = (request_body) => {
  return User.find({ email: request_body.email }).then((result, error) => {
    if (error) {
      return {
        message: error.message,
      };
    }

    if (result.length <= 0) {
      return false;
    }

    // This will only return true if there are no errors AND there is an existing user from the database.
    return true;
  });
};

module.exports.registerUser = (request_body) => {
  let new_user = new User({
    firstName: request_body.firstName,
    lastName: request_body.lastName,
    email: request_body.email,
    mobileNo: request_body.mobileNo,
    password: bcrypt.hashSync(request_body.password, 10),
  });

  return new_user
    .save()
    .then((registered_user, error) => {
      if (error) {
        return {
          message: error.message,
        };
      }

      return {
        message: "Successfully registered a user!",
      };
    })
    .catch((error) => console.log(error));
};

module.exports.loginUser = (request, response) => {
  return User.findOne({ email: request.body.email })
    .then((result) => {
      // Checks if a user is found with an existing email
      if (result == null) {
        return response.send({
          message: "The user isn't registered yet.",
        });
      }

      // If a user was found with an existing email, then check if the password of that user matched the input from the request body
      const isPasswordCorrect = bcrypt.compareSync(
        request.body.password,
        result.password
      );

      if (isPasswordCorrect) {
        // If the password comparison returns true, then respond with the newly generated JWT access token.
        return response.send({ accessToken: auth.createAccessToken(result) });
      } else {
        return response.send({
          message: "Your password is incorrect.",
        });
      }
    })
    .catch((error) => response.send(error));
};

module.exports.getProfile = (request_body) => {
  return User.findById(request_body.id).then((result, error) => {
    if (error) return { message: error.message };
    if (result == null) return "User not found";
    else {
      result.password = "";
      return result;
    }
  });
};

module.exports.enroll = async (request, response) => {
  if (request.user.isAdmin) {
    return response.send("Action Forbidden");
  }
  // [SECTION]
  // This variable will return true once the user data has been updated
  let isUserUpdated = await User.findById(request.user.id).then((user) => {
    let new_enrollment = {
      courseId: request.body.courseId
    };
    user.enrollments.push(new_enrollment);
    return user
      .save()
      .then(updated_user => true)
      .catch(error => error.message);
  });
  // Sends any error within 'isUserUpdated' as a response
  if (isUserUpdated !== true) {
    return response.send({ message: isUserUpdated });
  }
  
  // [SECTION] Updating course collection
  let isCourseUpdated = await Course.findById(request.body.courseId).then(
    (course) => {
      let new_enrollee = {
        userId: request.user.id,
      };
      course.enrollees.push(new_enrollee);
      return course
        .save()
        .then(updated_course => true)
        .catch(error => error.message);
    });
  if (isCourseUpdated !== true){
    return response.send({ message: isCourseUpdated });
  }

  // [SECTION] Once isUserUpdated AND isCourseUpdated return true
  if(isUserUpdated && isCourseUpdated){
    return response.send({ message: 'Enrolled successfully!' });
  }
};

module.exports.getEnrollments = (request, response) => {
  User.findById(request.user.id)
  .then(user => response.send(user.enrollments))
  .catch(error => response.send(error.message))
  }