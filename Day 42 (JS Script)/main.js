console.log("I am learning JS String today\n");

let a = "Baki";
console.log(a);

for(const alph of a) {
    console.log(alph);
}

console.log(a[4]);
// this is returning undefined not a error actually js try to give as less error as it can give therefor we can see it is calling undefined index
// That's why it is called a forgiving Programming Language

console.log(a.length);
// ! remember length doesnt have () because length in Js is property not a function
console.log("Good Morning, " + a); //+ dont add extra white space
console.log("Good Evening,", a);  //, add extra white space

let myName = "Siam";
let friend = "Mishkath";

console.log(`${friend} is ${myName}'s best friend!`);
// this is called template literals --> use backtic and we can use '' "" also inside it and use ${var_name}

// Escape sequence \n \t \r
// \n for new line
// \t for tab
// \r for carriage return

console.log("Mis\nhkath")
console.log("Mis\thkath")
console.log("Mishk\rath")
// \r will make sure it's later part comes forward and if any part remain in the first it will print as it is so here
// athhk will print

let b = "Mishkath";
console.log(b.toUpperCase())
console.log(b.toLowerCase())
// for capitalize we dont have any built in func

// we can use it such
b ="sIam"
console.log(b[0].toUpperCase() + b.slice(1).toLowerCase())
// .slice(start, end)
// .slice(start) it will take till end

let c = "I am a Bangladeshi"
let x = c.slice(2,5)
console.log(x)
// end means til end not equal to end

console.log(c.slice(7, 12))
console.log(c.slice(7))

let y = c.slice(7)
console.log(y.replace("sh", 77))
console.log(y.replace("xyz", 77))
// we know js is a forgiving language therefor if the replace pattern dont match it will not give error it will just return or print the whole y instead


let country = "Bangladesh"
console.log(country.concat("Pakistan", "Saudi-Arabia"))
console.log(country)
// string is immutable what so ever you use any kind of method

// for removing whitespace in both side of string

myName = "            Siam       Mishkath               "
console.log(myName)
console.log(myName.trim())
// so trim will remove the left and right most whitespace not the middle one

myNumber = 12354;
console.log(myNumber)
console.log(myNumber.toString())
// make any variable into string we will be using toString() method