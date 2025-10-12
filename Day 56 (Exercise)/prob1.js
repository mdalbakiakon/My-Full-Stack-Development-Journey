const names = [
    "Max",
    "Olivia",
    "Liam",
    "Charlotte",
    "Eve",
    "Alexander",
    "Mia",
    "Sebastian",
    "Zoe",
    "Nathaniel",
    "Amy",
    "Isabella",
    "Evangeline"
];

let houses = []

for (const name of names) {
    if (name.length < 6){
        houses.push("Gryffindor")
    }
    else if(name.length < 8){
        houses.push("Hufflepuff")
    }
    else if(name.length < 10){
        houses.push("Ravenclaw")
    }
    else{
        houses.push("Slytherin")
    }
}

console.log(houses)