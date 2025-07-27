// console.log("Hey I am learning JS");

// var a = 5;
// var b = 6;
// var c = "Md. Al Baki Akon";

// console.log(a + b); //this will return 11
// console.log("Value: " + a + b); //this will return 56 

// // ? this is string concatanation so value: + 5 becoming value: 5 than + 6 will make it ultimately 56

// // | how to solve it then??

// console.log("Value: " + (a + b));
// // now it will show value: 11

// console.log(typeof a + typeof b + typeof c);
// console.log(typeof a, typeof b, typeof c);
// //* same as python in js , will make extra whitespace while + will not 


// console.log("value of a" , a);
// a = a + 1;
// console.log("value of a" , a);

// const a1 = 9;
// console.log(typeof a1);
// console.log(a1);

// // a1 = a1 + 2 
//! this is can not be done as the a1 is a constant





alert("Hello World")
console.log("Hey I am console!")
console.log("Hey my code is running!")
console.log("Check in inspect!")


var a = prompt("Enter Your Number")
// prompt will have a input bar

console.log("Your Number is:", a)

var b = confirm("Are you want to leave this site?")
// confirm is used for yes or no input

//here some of the method or func will not work in terminal like alert prompt confirm work on browser only not in terminal

if(b){
    console.log("Leaving site!")
}

else{
    console.log("Staying on site!")
}

//! document.title("Hey I am a SWE!")
// this is not valid rather we can just set it

document.title = "Hey I am a SWE"
// now it will change the title of our website


document.body.style.backgroundColor = "red"
// this terms will add inline css in the html


let age = 25
console.log(age)
console.log(typeof age)


age = "John"
console.log(age)
console.log(typeof age)
