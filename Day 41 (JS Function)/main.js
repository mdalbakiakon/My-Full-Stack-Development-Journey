console.log("I am learning function today")

function greetings(name){
    console.log(`Hey ${name}! Good Morning!`) //------> same as python where f string is used and here we will use `and $`
}

let name = "Siam"
greetings(name)
greetings("Mishkath")


function sum(a,b){
    return a+b;
}

let mySum = sum(5,7)
console.log(mySum)


function math(a,b,c=3){ 
    //here c,d is a predefined or default value so we can use such in function as well
    const d = 1
    return a + b -c + 1
}

console.log(math(2,3))


console.log(math(1)) 
// this is returning NaN which means Not a Number
// Beacuase we did not pass argument properly here
console.log(math(8,2,3,4,5)) 
// if we give more than parameters the func need it will work and will give no error at all it will take the left most arguments for it's functionality



// Arrow function
const funcVal = (info) =>{
    console.log(`Notice: ${info}`)
}

// here the funcVal is the name of the function in array function we need to use like a variable in naming it like with using const
//! it has extra functionality that when we use the arrow function we can give our arrow function as a parameter in a different function

funcVal("Today collage will remain closed!")


function collageInfo(name, notice, funcVal){
    console.log('\n');
    funcVal(notice)
    console.log(`Dean: ${name}`);
}

collageInfo("Mishkath", "From tomorrow collage will be started", funcVal)
// we must give our arrow function as a argument when we are calling the combined function
// calling function or invocating the function is same thing!