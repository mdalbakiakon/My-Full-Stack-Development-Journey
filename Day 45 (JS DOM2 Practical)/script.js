console.log("Welcome to JS DOM Practical");

let cont = document.body.childNodes[1];

// cont.childNodes --> will give all along with text and comment and all stuff

// if we dont want all just the element than we will write children
//! document.body.firstElementChild.children
// all element child with their full class name

// cont.firstChild
// cont.lastChild
// cont.firstElementChild

cont.firstElementChild.style.backgroundColor = "orangered";

document.body.firstElementChild.firstElementChild.parentElement.style.backgroundColor =
  "antiquewhite";

let x = document.body.firstElementChild.firstElementChild;
x.nextElementSibling.style.backgroundColor = "yellowgreen";
let y = x.nextElementSibling.nextElementSibling;
y.style.backgroundColor = "yellow";
y.previousElementSibling.style.color = "green";

cont.style.padding = "5px"
cont.style.border = "5px solid orangered";
cont.style.display = "flex";
cont.style.flexDirection = "column";
cont.style.justifyContent = "center";
cont.style.alignItems = "center";
cont.style.gap = "2px";

for (const child of cont.children) {
  child.style.width = "100px";
  child.style.height = "100px";
  child.style.borderRadius = "50%";
}
