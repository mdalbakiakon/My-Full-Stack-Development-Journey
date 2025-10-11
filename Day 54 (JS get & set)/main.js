
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

