async function findName(db) {
    return await(

        db.employees.find({
            $or: [ 
                {firstName: {$regex: 's', $options: 'i'} },
                {lastName: { $regex: 'd', $options: 'i'} }
            ]}, 
            {"_id": 0, "firstName": 1, "lastName": 1 }
        )
    );
};

async function findDeptAge(db) {
    return await (

        db.employees.find({
            $and: [
              { department: "HR" },
              { age: { $gte: 70} }
            ]
          })         
    );

};


async function findNameAge(db) {
    return await (
            db.employees.find({
            $and: [
              { lastName: {$regex: "e", $options: 'i'} },
              { age: { $lte: 30} }
            ]
          })         
    );
};


try{
    module.exports = {
        findName,
        findDeptAge,
        findNameAge
    };
} catch(err){

};