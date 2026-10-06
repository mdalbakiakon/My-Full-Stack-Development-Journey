// basics

// implicit types
let greetings: string = "hello world";
// greetings = 5; --> error

// explicit types
let firstName: string = "John";
let age: number = 30;

firstName = "Doe";
age = 100;

// ========= built-in types ========
// boolean
// number
// string
// array
// tuple
// enums
// unknown
// any
// void
// null
// undefined


// array --> countless but exact type
let arr: string[] = ["apple", "banana", "cherry"];
let arr2: number[] = [1, 2, 3, 4, 5];


// tuple --> exact match in place and count
let tup: [string, number] = ["bangladesh", 4];


// enums 
// distinct value
enum Continents {
    North_America, // 0
    South_America, // 1
    Africa,
    Asia,
    Europe,
    Antartica,
    Australia
}

let region = Continents.Africa;
console.log(region); // it will print 2 enum goes for the index wise



// Interface
interface User {
    name: string;
    id: number;
}


const user: User = {
    name: "John",
    id: 0,
    age: 25
}


// interface User {
//     name: string;
//     id: number;
// }

// using interface wont give error for same name declaration
interface User {
    age: number;
}

// even declaring the age later is also valid because it will direct to the main and only one User
// this is called declaration merging as well



// type
// type uses = when declare and for union literal type we can use type
// interface cant use unions
type User2 = {
    id: number;
    role: "admin" | "client";
}


const person: User2 = {
    id: 2,
    role: "client"
}



// we cant declare same named when start with the type
// type User2 = {
//     age: number
// }



// extending
type Animal = {
    species: string;
}

type Sound = {
    bark: boolean;
}

// interface uses the keyword extends while type use the &
type Dog = Animal & Sound;


let pet: Dog = {
    species: "bulldog",
    bark: true,
}




// stick with one for now is better using type for now
type Data = {
    emp_id: string;
    emp_name: string;
    skills: string[];
    yoe: "N/A" | number;
    dob?: string;
}


const myData: Data = {
    emp_id: "intern_00",
    emp_name: "baki",
    skills: ["frontend", "react", "next", "tailwindcss"],
    yoe: "N/A"
}

console.log(myData);






// practising with a function now which rollDice
type NumOnDice = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): number{
    return Math.floor(Math.random()*6 + 1) as NumOnDice;
}

console.log(rollDice());
console.log(rollDice());
console.log(rollDice());
console.log(rollDice());

console.log("\n");


// practise with another function
function getLength(params: string | string[]): number{
    return params.length;
}

let fruits: string[] = ["apple", "banana"];

console.log(getLength("test"));
console.log(getLength(fruits));






// Alias
// aliases is like giving a custom name to each category
// no need actually but if any

type CarFuel = string;
type CarName = string;

type Car = {
    name: CarName;
    fuel: CarFuel;
}


const myCar: Car = {
    name: "toyota",
    fuel: "petrol"
}

console.log(myCar);




// generic
