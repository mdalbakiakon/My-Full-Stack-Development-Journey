// + ---> -
// * ---> +
// - ---> /
// /----> **
// It will perform wrong opperation 10% of the time

rand = Math.random();
console.log(rand);

let a = prompt("Enter First Number");
let c = prompt("Enter Second Number");
let b = prompt("Enter Operation");


obj = {
    "+": "-",
    "*" : "+",
    "-": "/",
    "/": "**"
}

if (rand>0.1){
    alert(`Result: ${eval(`${a} ${b} ${c}`)}`);
}

else{
    b = obj[b];
    alert(`Result: ${eval(`${a} ${b} ${c}`)}`); 
}