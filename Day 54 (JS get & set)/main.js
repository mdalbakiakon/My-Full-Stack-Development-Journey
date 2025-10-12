
// get set can be used in object/dictionary
const car = {
    speed: 150,
    
    get speedInMiles(){
        return (this.speed*0.621371)
    }
}


console.log(car.speed)
console.log(car.speedInMiles)
// for using get keyword we dont need to use method calling ()

console.log("\n\n\n")

class classCar{
    constructor(speed){
        this.speed = speed
    }

    get speedInMiles(){
        return (this.speed*0.621371).toFixed(2)
        // .toFixed will return the result in string!!!
    }
}


let myCar = new classCar(250)
console.log(myCar.speed)
console.log(myCar.speedInMiles)
console.log(typeof(myCar.speedInMiles)) // this is a string
console.log(parseFloat(myCar.speedInMiles))



// ! a get must always return something!!!!
// get makes a method as property of the class or the object


// | Keyword   | Purpose                           | Behavior                                            |
// | --------- | --------------------------------- | --------------------------------------------------- |
// | **`get`** | *Access* a property (read it)     | Returns a value when the property is accessed       |
// | **`set`** | *Assign* a property (write to it) | Executes code when the property is assigned a value |


//* difference between set and constructor
// | Feature                    | `constructor`                    | `set`                         |
// | -------------------------- | -------------------------------- | ----------------------------- |
// | **Purpose**                | Initialize the object            | Assign/update a property      |
// | **When called**            | Automatically when you use `new` | When you assign a property    |
// | **Arguments**              | Can have many                    | Always one                    |
// | **Return value**           | Implicitly the new object        | Nothing (returns `undefined`) |
// | **Can you have multiple?** | ❌ Only one per class             | ✅ Many (one per property)     |


//! get takes no argument and set takes one only argument
//! but what if we want set to accept multiple argument????
// *then we need to use object in object we will define the keys

class Person{
    constructor(name, age){
        this.name=name
        this.age=age
    }

    get isAdult(){
        return this.age>=18
    }

    set rename(name){
        this.name = name
    }
}

// when we use _ in the class then it means we can access the value but we can not change it it is private


let person1 = new Person("Siam", 25)
console.log(person1.name)
console.log(person1.age)
console.log(person1.isAdult)
person1.name="Mishkath"
console.log(person1.name)
// so we can change like this directly

//! person1.rename("XYZ")
//? this is invalid becuase rename is not a method or function

person1.rename = "XYZ"
console.log(person1.name)
// now it is XYZ



// ? private property in class

class hybridCar{
    #name
    #type

    constructor(name, type){
        this.#name = name
        this.#type = type
    }


    get name(){
        return this.#name
    }
}

let my_ride = new hybridCar("Prius", "Hybrid")
// console.log(my_ride.name) //!undefined
// console.log(my_ride.#name) //!syntaxError

console.log(my_ride.name)
// now we can access private through the get keyword
