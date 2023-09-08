const jwt = require("jsonwebtoken");
const secret_key = "CourseBookingAPIB303";

// Generating a token
module.exports.createAccessToken = (user) => {
  const user_data = {
    id: user._id,
    email: user.email,
    isAdmin: user.isAdmin,
  };

  // The jwt.sign() will generate a token using the user data and secret key. The 3rd argument serves as additional options for the token, like adding an expiry date/time.
  return jwt.sign(user_data, secret_key, {});
};
