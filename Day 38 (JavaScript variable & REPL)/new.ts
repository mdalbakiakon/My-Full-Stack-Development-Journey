// Learning TS along with JS
// TS gives us static typing types where in JS it is a dynamic
// TS check in compile times and in JS type check in run time


//! let age:number = "25"
// this will give error because the type is already set to be a number

let age:number = 25
console.log("my age is", age)


//| so var give redeclaration and global scope and let dont give you redeclaration or global scope but give you type security


// var a = 2
// console.log("Value of a:", a)
// var a = "Hello World"
// console.log(a)

//* this code snippet still give error to us becuase typescript strictly follows the type orientation


let a: string | number = 2
console.log("Value of a:", a)
a = "Hello World"
console.log("Now value of a:",a)


// ! so var using is outdated and risky or bad practise to use rather use let and const for both js and ts

console.log("\n")

let b:any = "I am a SWE"
console.log(b) 
b = 22
console.log(b)
b = true
console.log(b)

console.log("\n")
console.log(typeof b)
console.log(typeof a)
console.log(typeof age)