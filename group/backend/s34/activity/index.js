async function addOneFunc(db) {

    await (

        db.rooms.insertOne({
            name: "single",
            accommodates: 2,
        	price: 1000,
        	description: "A simple room with all the simple necessities",
        	rooms_availabl: 10,
        	isAvailable: false
        })

    );


   return(db);

};

async function addManyFunc(db) {

    await (

        db.rooms.insertMany([
            {
                name: "double",
                accomodates: 3,
                price: 2000,
                description: "A room fit for a small family going on a vacation",
                rooms_available: 5,
                isAvailable: false
            },
            {
                name: "queen",
                accomodates: 4,
                price: 4000,
                description: "A room with a queen sized bed perfect for a simple getaway",
                rooms_available: 15,
                isAvailable: false
            }
        ])

    );

   return(db);

};

async function findRoom(db) {
    return await (
        db.rooms.findOne({name: "double"})
    );
};

function updateOneFunc(db) {
    
	db.rooms.updateOne(
		{
			name: "queen"
		},
		{
			$set: {
				rooms_available: 0
			}
		}
	)

};


function deleteManyFunc(db) {

	db.rooms.deleteMany({rooms_available: 0})
};


try{
    module.exports = {
        addOneFunc,
        addManyFunc,
        updateOneFunc,
        deleteManyFunc,
        findRoom
    };
} catch(err){

};