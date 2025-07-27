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

console.log("Hey Man!")
console.log(b + age)

// | b is a boolean and it is true therefor the value of it is assuming 1 and age is 25 therefor it will print 26


let my_name = "Baki"
let my_roll = 12

// in typescript for example we did not declare and in out typecript json file we have checked the strict mode is on which is by default

// so here my_name will be assigned as string it can not be override with different type

//! my_name = 2
// error

my_name = "Siam"
// this is good to go

console.log("\n")
console.log(my_name + my_roll)

// concatination happening just as string the 12 will be added

let my_another_roll = 3

console.log(typeof my_another_roll)
console.log(my_another_roll + my_roll)
// now it is not concatinating rather it is taking the number + number = number

let new_var
new_var = 1
console.log(new_var)
console.log(typeof new_var)

new_var = "Rahim"
console.log(new_var)

// so what is happening here when we just declare a variable without assigning a particular value to it it will be judge as any variable type so assinging later with any type it is valid

// but if we assigned

let another_new_var = "Karim"

console.log(another_new_var)

// another_new_var = 25
// now it will give error because it is assigned when declaration so a fixed type has been taken for this variable therefor override with different type is invalid

function add(x: number, y: number): number {
  return x + y;
}

console.log("Sum:", add(5,7))

// checking the global scope with let 

let global_var = "I am global"

console.log("\n")

function my_func(): any{
    let local_var = 5
    console.log(global_var)
    console.log(local_var + 2)
}

//! console.log(local_var)
// This is not accessible because it is inside the my_func()

my_func()