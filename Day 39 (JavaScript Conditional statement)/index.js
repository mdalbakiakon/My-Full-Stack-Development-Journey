console.log("Hey today I am learning conditional statement in JavaScript");

let age = 45;

if (age > 18) {
  console.log("You can drive");
} else {
  console.log("You can not drive");
}

function square(x) {
  return x ** 2;
}

console.log(square(5));

function modulus(a, b) {
  return a % b;
}

console.log(modulus(3, 2));

if ("3" == 3) {
  console.log("Yes 3 is euqale to 3");
}

if ("2" == 1) {
  console.log("Yes 2 is 1");
} else {
  console.log("No 2 is not 1");
}

if ("2" === 2) {
  console.log("Yes");
} else {
  console.log("Noooooooooooooooooo");
}

// = means assign
// == check equale to but not type
// === check equale to and type also

age = 2;
let grace = 5;
age **= grace;
console.log(age);

if ("32" !== age) {
  console.log("I am before");
}

age = age.toString();
console.log(age);

if ("32" !== age) {
  console.log("I am after");
}

let direction1 = "North";
let direction2 = "South";

console.log(direction1 != direction2);

if (direction1 != direction2 && direction2 == "South") {
  console.log("Both true One");
}

if (direction1 != direction2 && direction1 == "South") {
  console.log("Both true Two");
}

if (direction1 != direction2 || direction1 == "South") {
  console.log("One is true atleast confirm");
}

console.log("\n");

my_age = 0;

if (my_age != 18) {
  console.log("You are over 18");
} else if (my_age == 0) {
  console.log("Are you kidding me?");
} else {
  console.log("I am else");
}

// here my_age was 0 but did not print are you kidding me why because it is ladder base if else if else block of code if one found true it will go done the work and terminate that particular block of code

if (my_age == 0) {
  console.log("I am second are you kidding");
}

// so next if is printing because it is in different ladder and different block of codes


// | Ternary Operator

let a = 5
let b = 8
let c = a>b ? a + b : b-a
console.log(c)

let d = a<b ? a + b : b-a
console.log(d)
