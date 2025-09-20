// Factorial using loop and reduce

let arr = []
let x = parseInt(prompt("Enter Number: "))

while(x != 0){
    arr.push(x)
    x = x-1
}

console.log(arr.reduce((a,b) => a*b, 1))

