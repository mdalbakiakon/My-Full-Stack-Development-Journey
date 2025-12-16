use('CRUD')
db.createCollection('CRUD_Collection')

// db.CRUD_Collection.insertMany(
//     [
//         {
//             "Name": "Siam",
//             "Age" : 25
//         },
//         {
//             "Name": "Mishkath",
//             "Age" : 22
//         },
//         {
//             "Name": "xyz",
//             "Age" : 18
//         }
//     ]
// )

db.CRUD_Collection.find().pretty()

db.CRUD_Collection.find({
    Age: { $gt: 18 }
}).pretty()