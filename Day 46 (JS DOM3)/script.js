let box = document.getElementsByClassName("box")
// console.log(box)
box[2].style.backgroundColor = "red"

let box4 = document.getElementById("box4")
box4.style.backgroundColor = "yellowgreen"

let cont = document.getElementsByClassName("container")[0]
cont.style.backgroundColor = "cyan"

// getElementsByClassName always return a array, therefor we need to give index

// therefor using id is better if we want to select particular element

document.getElementById("box5").style.backgroundColor = "skyblue"
document.getElementById("box5").style.color = "white"


// ! Query Selector
document.querySelector(".box").style.backgroundColor = "orange"

// | querySelect(".") it needs dot prefix and also it will do it's job as the only first .box class it's get not the others

// there is a querySelectorAll exist which will do the work for all but the issue is it needs loop

let x = document.querySelectorAll(".box")
// so now x is the NodeList
//! HTMLCollection → only HTML elements (no text nodes, no comments).
//! NodeList → can contain any type of node (elements, text, comments, etc.).

console.log("This is x:", x)

for (const element of x) {
    element.style.fontWeight = "1000"
    element.style.fontStyle = "italic"
}

// we can use forEach as well

x.forEach(e=>{
    console.log(e)
    e.style.color = "navy"
    e.style.fontSize = "24px"
})


let allDiv = document.getElementsByTagName("div")
console.log(allDiv)

allDiv[0].style.backgroundColor = "antiquewhite"
allDiv[0].style.border = "5px solid red"
allDiv[0].style.display = "flex"
allDiv[0].style.flexDirection = "column"
allDiv[0].style.gap = "5px"
allDiv[0].style.padding = "5px"
allDiv[0].style.borderBottomRightRadius = "50px"


// there is also a selector name as name
// document.getElementsByName

// | matches, closest, contains --> CSS selector!!!!
console.log(allDiv)
console.log(allDiv[4].matches("box"))
// this is showing false because we need to specify if it is a class or id by . and #
console.log(allDiv[4].matches(".box"))
console.log(allDiv[4].matches("#box4"))
// now they are returning True


console.log(allDiv[4].closest("#redbull"))
// returning null
console.log(allDiv[4].closest(".container"))
// div[4] was not container but it will check for parent grandparent and so on if they matches it will return
console.log(allDiv[4].closest("html"))


// contains
console.log(document.querySelector(".container").contains(document.querySelector(".container")))
console.log(document.querySelector(".container").contains(document.querySelector("body")))
console.log(document.querySelector(".container").contains(document.querySelector("box")))
console.log(document.querySelector(".container").contains(document.querySelector(".box")))
