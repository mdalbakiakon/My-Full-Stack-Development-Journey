import arr from "./app.js"
import { chacha, age } from "./app.js"

let username = "Siam"
console.log(username)
console.log(arr)

arr.forEach(a=>{
    console.log(a)
})

console.log(chacha)
console.log(age)

let h1 = document.createElement("h1")
console.log(h1)

h1.innerHTML = "Hello World"
console.log(h1)

document.body.appendChild(h1)