async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(55);
    }, 2000);
  });
}

(async function () {
  let a = await sleep();
  console.log(a);
  let b = await sleep();
  console.log(b);
})();

// for await we know we need to wrap it into a async function therefor we need to make function and call it and so on but what if we want to make immediate response then we use IIFE
//! Immediately Invoked Function Expression.
//! Even we dont need to give a name to this IIFE
//! for IIFE we must add semicolon before the its line because auto semicolon ending may not understand IIFE's () hence can throw error

// ? Destructuring!!!

let [x, y, ...rest] = [1, 5, 7, 8, 9, 10, 15];
console.log(x, y, rest);

// ... is important to take all rest without ... the rest will only take 7 not the rest entire list or array

let obj = {
  a: 1,
  b: 2,
  c: 3,
};

let { z1, z2 } = obj;
console.log(z1, z2);
// the key must match

let { a, b } = obj;
console.log(a, b);

function sum(a, b, c) {
  return a + b + c;
}

let arr = [1, 4, 6];
console.log(sum(...arr));
// ... is called spread operator

let another_obj = { ...arr };
// now another obj will be a object consisting arr
// {
// 0:1,
// 1:4,
// 2:6
// }

console.log(another_obj);

//? local/global scope
let a1 = 3

console.log(a1)


function myFunc() {
    a1++
}

myFunc()

console.log(a1)

// but what if the a1 was inside the function than from outside we can not access it without calling the function



// ? Hoisting!!!!!

function myFunc2() {
    // var b1 --> Hoisting
    console.log(b1) //undefined
    // let b1 = 5
    // it will give referenceError
    var b1 = 5
}

myFunc2()




hello("Siam")

function hello(name) {
    console.log(`Hello ${name}`)
}

// Hoisting in func just like var but what if we use const like let/const

//! myHello("Mishkath") --> it will throw error hoisting can not be done for let and const --> normal function definition works like var

const myHello = (name) => {
    console.log(`Hello ${name}`)
}

myHello("Mishkath")