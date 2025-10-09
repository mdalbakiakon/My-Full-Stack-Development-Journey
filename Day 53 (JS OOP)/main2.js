class Animal{
    constructor(name){
        this.name = name
        console.log("Object has been created!")
    }

    jumps(){
        console.log(`${this.name} is jumping`)
    }

    fly(){
        console.log(`${this.name} is flying`)
    }

    run(){
        console.log(`${this.name} is running`)
    }
}

// this is like same as self in python
// constructor will work like __init__ in python

let a = new Animal("Bunny")
console.log(a.name)
a.jumps()

// for object we use __proto__ to inherit different class but what about the class if we want to inherit

class deer extends Animal{
    constructor(name, age){
        //! this.name = name
        // we know Animal also has the same constructor with this.name but we also inheriting with extends so for inheriting Animal this.name we will use super
        super(name)
        this.age = age
    }


    // Method overwritting in the child class
    jumps(){
        console.log(`${this.name} is jumping wowwwwwww!!!!!`)
    }

    // what if we dont want to overwritting just want to add extra something we want the parents method also then...
    fly(){
        super.fly()
        // so here super.fly() is taking everything from the parents fly and also adding the next line
        console.log("What the hell deer can't fly!!!!!")
    }
}


let b = new deer("Bambi", 5)
console.log(b.name)
console.log(b.age)
a.jumps()
b.jumps()

//     super(name, color, weight);
// for multiple matching with parents constructor we use comma to pass this to the parents constructor
//! even we must use the super first then this otherwise it will give error
// so if your parent has constructor and you also has it then super() must be given into the constructor of child


a.fly()
b.fly()



console.log(b instanceof deer)
console.log(b instanceof Animal)
// because deer has extends Animal more like deer has been built from Animal therefor it is saying true

b.run()
// here is the proof


// | static method
// static method only works in class meaning it can be called by only class no object or instance can call it


class myClass{
    static myStaticMethod(){
        console.log("Oh hi, I am static method")
    }

    static count = 0

    static increaseCount(){
        this.count++
        console.log(`count is: ${this.count}`)
    }

    instanceMethod(){
        console.log("Oh hi, I am a instance method")
    }
}

let c = new myClass()
c.instanceMethod()
myClass.increaseCount()
myClass.increaseCount()
myClass.increaseCount()
myClass.increaseCount()
