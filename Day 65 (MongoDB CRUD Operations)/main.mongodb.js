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


//| When you use .pretty() in MongoDB Playground (or mongosh scripts), only the last .pretty() output is shown.

let a = db.CRUD_Collection.find().pretty()
let b = db.CRUD_Collection.find({
    Age: { $gt: 18 }
}).pretty()


console.log(a)
console.log("\n\n\n")
console.log(b)


let c = db.CRUD_Collection.find({
    Name:"Mishkath"
}).pretty()

//! Remember the key's are case sensitive!!!

console.log("\n\n\n")
console.log(c)


// * the MongoDB Playeground considers the last query only therefor the result is not showing anything 


/*
let c = db.CRUD_Collection.find({
    Name: "Mishkath"
}).pretty()
*/

// ? the find() or pretty() is query but here we have saved the query value to a variable c so our last query is not invoking but inserted into a variable therefor the result is showing undefined


console.log(b.count())
// b.count().pretty()

// | pretty works only on cursor cursor is a MongoDB query returned object so we can apply pretty on them but here the count() is returning a value a counter of query b so it is not a cursor therefor pretty is not showing anything

d = db.CRUD_Collection.find({
    Name: "Siam"
})

console.log("\n\n\n")
console.log(d.toArray())

// to use toArray we must ensure that it is a fresh query not using pretty or anything extra 
// to array return a list of the document of the query

console.log(typeof(d.toArray()))
//| in real sense it is an array but in JS typeof return object for an array

console.log(Array.isArray(d.toArray()))
// see it returns true
// | so arrays are object type in JS


let gt_22_one = db.CRUD_Collection.findOne({
    Age: { $gte:22}
})

// | find supports pretty findOne doesnt support pretty
console.log("\n\n\n")
console.log(gt_22_one)


console.log(db.CRUD_Collection.find({
    Age: { $gte: 22 }
}).sort({ Age: 1 }).limit(1))





// * UPDATE
db.CRUD_Collection.updateOne({Name:"Rahim}"}, 
    {$set:{Name: "Rahim"}})

db.CRUD_Collection.updateMany(
    {},
    { $set: { Status: "Active" } }
)
