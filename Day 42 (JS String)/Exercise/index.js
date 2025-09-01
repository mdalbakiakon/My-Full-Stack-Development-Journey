// Business Name Generator
// adjective: Crazy, Amazing, Fire
// shop: Engine, Food, Garments
// another word: Bros, Limited, Hub
//! limitation: Can not use Array

adj = {
    "1" : "Crazy",
    "2" : "Amazing",
    "3" : "Fire"
};

shop = {
    "1" : "Engine",
    "2" : "Food",
    "3" : "Garments"
};

anoW = {
    "1" : "Bros",
    "2" : "Limited",
    "3" : "Hub"
};

let result = ""

let rand1 = Math.floor((Math.random()*3) + 1)
result = result + adj[rand1]

let rand2 = Math.floor((Math.random()*3) + 1)
result = result + shop[rand2]

let rand3 = Math.floor((Math.random()*3) + 1)
result = result + anoW[rand3]

console.log(result)

