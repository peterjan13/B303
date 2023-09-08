/*
{
    "_id": {
      "$oid": "64c0dffafbe5322847b4da87"
    },
    "fistname": "Jane",
    "lastname": "Doe",
    "age": 21,
    "contact": {
      "phone": "0912345678",
      "email": "janedoe@gmail.com"
    },
    "courses": [
      "CSS",
      "Javascript",
      "Python"
    ],
    "department": "none"
  }
*/

// Inserting multiple documents at once
db.users.insertMany([
    { 
        "firstName": "John",
        "lastName": "Doe"
    },
    { 
        "firstName": "Joseph",
        "lastName": "Doe"
    }
]);

// [SECTION] Retrieving documents
// Retrieving all the inserted users
db.users.find();

// Retrieving a specific document from a collection
db.users.find({ "firstName": "John"});

// [SECTION] Updating existing documents
// For updating single documents
db.users.updateOne(
    // First part - retrieves a specific user using he ID
    {
        "_id": ObjectId("64c1c3135cd6529fca12051d") 
    },
    // Second part - uses the $set keyword to set a specific property of that user to a new value.
    {
        $set: {
            "lastName": "Gaza"
        }
    }
);

// For updating multiple documents
db.users.updateMany(
    {
      "lastName": "Doe"
    },
    {
      $set: {
        "firstName": "Mary"
      }
    }
);

// [SECTION] Deleting documents from a collection
// Deleting multiple documents
db.users.deleteMany({"lastName": "Doe"});

// Deleting a single document
db.users.deleteOne({
  "_id": ObjectId("64c0dffafbe5322847b4da87")
});
