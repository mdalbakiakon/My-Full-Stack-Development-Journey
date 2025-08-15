console.log("I am Learning Loops");

// basic for loop

for(let i=0; i<10; i++){
    console.log(i);
}

console.log("\n");

for(let i=0; i<10; ++i){
    console.log(i);
}

let a = 5;
console.log("a: ", a)
let b = a++;
console.log("a: ", a)
console.log("b: ", b)


console.log("\n");

let x = 5;
console.log("x: ", x)
let y = ++x;
console.log("x: ", x)
console.log("y: ", y)


let obj = {
    Name: "Siam",
    Profession: "SWE"
}

for (let key in obj) {
    const element = obj[key];
    console.log(key, element);
}


