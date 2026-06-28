// import arr from "./app.js"
// import { chacha, age } from "./app.js"

// let username = "Siam"
// console.log(username)
// console.log(arr)

// arr.forEach(a=>{
//     console.log(a)
// })

// console.log(chacha)
// console.log(age)

// let h1 = document.createElement("h1")
// console.log(h1)

// h1.innerHTML = "Hello World"
// console.log(h1)

// document.body.appendChild(h1)


import ax from "./app.js";
import { arr } from "./app.js";

let h1 = document.createElement("h1");
h1.innerHTML = "<div>Hello From Js</div>";
console.log(h1);

// now this is not showing in the body of course it is only rendering on console so to show in body we will be using followings...

// for using import export we need to use type module in the html for the js in script tag

document.body.appendChild(h1);

console.log(ax);
console.log(arr);