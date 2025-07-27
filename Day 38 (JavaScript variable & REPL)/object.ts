let obj = {
    name:"Siam",
    "job role": "SWE" //here key had space in between so we have used the " " but anyway we can use " " for single key name as well like here in name as "name" 
}

console.log(obj)
console.log(typeof obj)
// it is good for js and ts but for ts we actually want to define datatype



// in python we call it dictionary but in JS it is object
// we can add key from outside as well


//! obj.salary = 56000 here we can see the typescript is not letting it to add such way but js can accept this so basically it is static in ts and dynamic in js

let my_obj: { name: string; age: number; gender: string } = {
  name: "John",
  age: 25,
  gender: "male",
}

console.log(my_obj)
my_obj.name = "Jake"
console.log(my_obj)
// so we can change here like this

//! my_obj.salary = 5600
// as we know we can not dynamically change it but in js we can do that
