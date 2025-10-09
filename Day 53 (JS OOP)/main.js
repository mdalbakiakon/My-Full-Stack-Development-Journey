let myObj = {
    name:"Siam",
    age: 24
}

console.log(myObj)

// prototype

let animal ={
    eats: true
}

let rabbit = {
    jumps: true
}

rabbit.__proto__= animal
// .__proto__ will add some additional property defined in other object so here our rabbit will inherit everything in prototype of the animal so we can call rabbit.eats too




class Animal{
    constructor(){
        console.log("object is created!...")
    }
    // constructor will work as soon as new object is created for the class

    eats(){
        console.log("I am eating")
    }

    jumps(){
        console.log("I am jumping")
        // return 2
    }
}


let a = new Animal()
console.log(a)

console.log(a.jumps)
console.log(a.jumps()) //this is calling the function and also printing it what ever returns
// but it is not returning anything right? so it will only print first jumps() method then undefined
// if it was returning say 2 then first the I am jumping then printing 2

a.jumps()
// this is calling the function directly through instance




