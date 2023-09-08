// Greater than operator
db.users.find({
	age: {
		$gte: 82
	}
})

// Less than operator
db.users.find({
	age: {
		$lte: 82
	}
})

// Regex operator
db.users.find({
	firstName: {
		$regex: 's',
		$options: 'i'
	}
})

db.users.find({
	lastName: {
		$regex: 'T',
		$options: 'i'
	}
})

// Combining Operators
db.users.find({
	age: {
		$gt: 70
	},
	lastName: {
		$regex: 'g'
		}
})

db.users.find({
	age: {
		$lte: 76
	},
	firstName: {
		$regex: 'j',
		$options: 'i'
	}
})

// Field Projection
db.users.find({}, {
	"_id": 0
})

db.users.find({}, {
	"_id": 0,
	"firstName": 1
})

