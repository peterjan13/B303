const User = require("../models/User.js");
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
