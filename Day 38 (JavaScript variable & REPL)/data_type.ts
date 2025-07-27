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