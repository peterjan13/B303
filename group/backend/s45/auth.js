const jwt = require('jsonwebtoken');
const secret_key = "CourseBookingAPIB303";

//generating a token
module.exports.createAccessToken = (user) => {
	const user_data = {
		id: user._id,
		email: user.email,
		isAdmin: user.isAdmin
	}
	return jwt.sign(user_data, secret_key, {});
}

module.exports.verify = (request, response, next) => {
	let token = request.headers.authorization;
	if(typeof token === "undefined") return response.send({auth: "Failed, please include token in the header of the request."})
	//console.log(token);
	token = token.slice(7, token.length);
	//console.log(token);

	jwt.verify(token, secret_key, (error, decoded_token) => {
		if(error) return response.send({auth: "Failed", message: error.message})
		request.user = decoded_token;
		next();
	}) 
}

module.exports.verifyAdmin = (request, response, next) => {
	if(request.user.isAdmin) next();
	else return response.send({auth: "Failed", message: "Action Forbidden"})
}