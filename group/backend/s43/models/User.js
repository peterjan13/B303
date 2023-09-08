const mongoose  = require('mongoose');

const user_schema = new mongoose.Schema({
	firstName : {
	        type : String,
	        required : [true, "First Name is required"]
	    },
	lastName : {
	    type : String,
	    required : [true, "Last Name is required"]
	},
	email : {
	        type : String,
	        required : [true, "Email is required"]
	    },
	password : {
	    type : String,
	    required : [true, "Password is required"]
	},
	isAdmin : {
		type : Boolean,
		required : true
	},
	mobileNo : {
		type : String,
		required : [true, "Mobile number is required"]
	},
	enrollments: [
		{
			courseId: {
				type: String,
				required: [true, "CourseId is required"]
			},
			EnrolledOn: {
				type: Date,
				default: new Date()
			},
			status: {
				type: String,
				default: "Enrolled"
			}
		}
	]
})

module.exports = mongoose.model("User", user_schema);