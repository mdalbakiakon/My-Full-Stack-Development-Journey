console.log("I am Learning Loops");

// There is 5 kinds of loop in JS
// for loop 
// for in loop
// for of loop
// while loop
// do while loop



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



console.log('\na: ', a, '\n')


// basic for loop
for(let i=0; i<100; i++){
    console.log(a + i)
}



// for in loop used for dictionary/object
let my_obj = {
    name:"Siam",
    role:"Software Engineer"
}

for(const key in my_obj){
    let value = my_obj[key]
    console.log(key, value)
}



// for iteration/ Array----------->in python we use in but here it is in reverse so we use of
for (const c of 'Siam') {
    console.log(c)
}

let fruits = ['Apple', 'banana', 'cherry']

for(const fruit of fruits){
    console.log(fruit)
}


// while loop
let k = 0
while(k<6){
    console.log(k);
    k++;
}


console.log('\n')


// dowhile loop
let j = 0
do{
    console.log(j)
}while(j<0);