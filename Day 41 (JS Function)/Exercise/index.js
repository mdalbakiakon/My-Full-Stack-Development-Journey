// Faulty Calculator

// + ---> -
// * ---> +
// - ---> /
// /----> **
// It will perform wrong opperation 10% of the time


// parseInt()/parseFloat()
// Number() will receive both at the same time
//! Difference: Number("42abc") → NaN, while parseInt("42abc") → 42.
//! console.log(parseFloat("32.7abc02")) -> this will return 32.7
//! console.log(parseFloat("XYZ32.7abc02")) -> this will return NaN because it must be the first at least one number

const prompt = require("prompt-sync")();

let a = Number(prompt("Enter the first number: "));
let b = Number(prompt("Enter the second number: "));

console.log("\n");

const x = Math.random();
if (x<=0.1){
    console.log("Addition:", a-b);
    console.log("Subtraction:", a/b);
    console.log("Multiplication:", a+b);
    console.log("Division:", a**b);
}

else{
    console.log("Addition:", a+b);
    console.log("Subtraction:", a-b);
    console.log("Multiplication:", a*b);
    console.log("Division:", a/b);
}