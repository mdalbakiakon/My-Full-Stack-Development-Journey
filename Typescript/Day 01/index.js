"use strict";
// basics
// implicit types
let greetings = "hello world";
// greetings = 5; --> error
// explicit types
let firstName = "John";
let age = 30;
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
let arr = ["apple", "banana", "cherry"];
let arr2 = [1, 2, 3, 4, 5];
// tuple --> exact match in place and count
let tup = ["bangladesh", 4];
// enums 
// distinct value
var Continents;
(function (Continents) {
    Continents[Continents["North_America"] = 0] = "North_America";
    Continents[Continents["South_America"] = 1] = "South_America";
    Continents[Continents["Africa"] = 2] = "Africa";
    Continents[Continents["Asia"] = 3] = "Asia";
    Continents[Continents["Europe"] = 4] = "Europe";
    Continents[Continents["Antartica"] = 5] = "Antartica";
    Continents[Continents["Australia"] = 6] = "Australia";
})(Continents || (Continents = {}));
let region = Continents.Africa;
console.log(region); // it will print 2 enum goes for the index wise
const user = {
    name: "John",
    id: 0,
    age: 25
};
const person = {
    id: 2,
    role: "client"
};
let pet = {
    species: "bulldog",
    bark: true,
};
const myData = {
    emp_id: "intern_00",
    emp_name: "baki",
    skills: ["frontend", "react", "next", "tailwindcss"],
    yoe: "N/A"
};
console.log(myData);
