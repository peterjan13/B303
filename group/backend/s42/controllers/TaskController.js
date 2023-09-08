const Task = require('../models/Task.js');

module.exports.getAllTasks = () => {
	return Task.find({}).then((result, error) => {
		if(error) return {message: error.message};
		return {message: result};
	});
}

module.exports.createTask = (request_body) => {
	return Task.findOne({name: request_body.name}).then((result) => {
		if(request_body.name === "" || request_body.name === undefined || request_body.name === null) {
			return {message: "Missing fields"};
		}
		else if(result != null && result.name == request_body.name) {
			return {message:"Duplicate task found"};
		} 
		else {
			//Creates new instance
			let newTask = new Task({
				name: request_body.name
			});

			//Save new instance to database
			return newTask.save().then((savedTask, error) => {
				if(error) return {message: error.message};
				return {message: "New Task Created"};
			})
		}}
	);
}

module.exports.getSpecificTask = (request) => {
	return Task.findOne({_id: request.params.id}).then((result, error) => {
		if(error) return {message: error.message};
		if(result != null) return {message: result};
		else return {message: "No Task Found"};
	});
}

module.exports.updateTask = (request) => {
	return Task.findOneAndUpdate({_id: request.params.id}, {
		$set: {
			status: request.params.status
		}
	}, {new: true}).then((result, error) => {
		if(error) return {message: error.message};
		if(result != null) return {message: result};
		else return {message: "No Task Found"};
	});
}