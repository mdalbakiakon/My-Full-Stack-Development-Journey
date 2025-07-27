// | There are 7 types of premitive data type in js 

let _a = undefined
let _b = null
let _c = 3.1416
let _d = "Hello world"
let _e = {} //this is a type of object
let _f= false
let _g = 2n

//! for bigint we need to add n at the end bigint is available from the es2020 so it wont show up if the the target in json file is less than es2020

console.log(_a,_b,_c,_d,_e,_f,_g)
console.log(typeof _a,typeof _b,typeof _c,typeof _d,typeof _e,typeof _f,typeof _g)


// console.log(2+2n)
// error bcz we are in typescript so it is mandatory to match the type

console.log(_d + 2n)
// it is possible bcz _d is a string so it will concatenate

// console.log(_f+2n)
// error again because concatenation only will happen if at least one of them are string

console.log(2n + 5n)
// now it is valid

console.log("obj:", {})
console.log("obj:"+ {})

// , is used for concatenation in true sense + is not if + sees there are number he will add the number but if he find one is string than he will use .toString() for concatenation

console.log({}.toString())
console.log(typeof {}.toString())

//? so .toString() actually try to make the data type into string but in case of symbol it return [type, constructor name]

// | so type is object and the constructor or class behind the .toString() for { } is Object class

//! so it returns [object Object] and this is a string not a list


// null vs undefined
let my_var 
console.log(typeof my_var)  //it will print undefined not null

// | they both are same in typical programming sense but undefined or assinged as undefined means in future we will be assigning something in this var where null means we fixed it as null

// btw null's type is object
let my_var2 = null 
console.log(typeof my_var2)  //object


//! null is NOT actually an object; it’s a primitive value.
//! But typeof null still returns "object" for historical backward compatibility reasons.
//? it happended in 1995 when null set to be all zero bits and type has been given to its as an object it is saying that it is a fault in Js but for backward compatibility JS keeps it as it is.