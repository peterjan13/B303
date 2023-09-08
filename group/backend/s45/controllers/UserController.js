const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const auth = require('../auth.js');


module.exports.checkEmailExists = (request_body) => {
	return User.find({email: request_body.email}).then((result, error) => {
		if(error) return {message: error.message}
		if(result.length <= 0) return "Email does not Exist"
		else return "Email Exists"
	})
}

module.exports.registerUser = (request_body) => {
	return User.find({email: request_body.email}).then((result, error) => {
		if(error) return {message: error.message}
		if(result.length > 0) return "Email Exists" 
		else {
			let new_user = new User({
				firstName: request_body.firstName,
				lastName: request_body.lastName,
				email: request_body.email,
				mobileNo: request_body.mobileNo,
				password: bcrypt.hashSync(request_body.password, 10)
			})
			return new_user.save().then((registered_user, error) => {
				if(error) return {message: error.message}
				return {
					message: "Successfully registered a user!", 
					data: registered_user
				}
			}).catch(error => console.log(error));
		}
	})
}

module.exports.updateUser = (request_body) => {
	return User.findOneAndUpdate({email: request_body.email}, {
		$set: {
			firstName: request_body.firstName,
			lastName: request_body.lastName,
			email: request_body.email,
			mobileNo: request_body.mobileNo,
			password: bcrypt.hashSync(request_body.password, 10)
		}
	}, {new: true}).then((result, error) => {
		if(error) return {status: error.status, message: error.message};
		if(result != null) return {status: 201, message: result};
		else return {status: 400, message: "No Task Found"};
	})
}

module.exports.loginUser = (request, response) => {
	return User.findOne({email: request.body.email}).then((result) => {
		if(result == null) return "User is not Registered";
		const isPasswordCorrect = bcrypt.compareSync(request.body.password, result.password);
		if(isPasswordCorrect) {
			//return response.send({accessToken: auth.createAccessToken(result)})
			return {accessToken: auth.createAccessToken(result), id: result._id}
		}
		else return response.send({message: "Incorrect Password"})
	}).catch(error => response.send(error));
}

module.exports.getProfile = (request_body) => {
	return User.findById(request_body.id).then((result, error) => {
		if(error) return {message: error.message}
		result.password = "";
		return result;
	})
}