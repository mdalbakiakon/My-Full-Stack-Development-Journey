//| .innerHTML
console.log("\n.innerHTML")
console.log(document.querySelector(".box").innerHTML)
console.log(document.querySelector(".container").innerHTML)
//! it will print with \n as well the full code with tags
//! even if it has comments everything will be shown with tags and all



//| innerText
console.log("\n.innerText")
console.log(document.querySelector(".box").innerText)
console.log(document.querySelector(".container").innerText)
//! only the text element will be shown only the text element not comment not any tags



//| outerHTML
console.log("\n.outerHTML")
console.log(document.querySelector(".box").outerHTML)
console.log(document.querySelector(".container").outerHTML)
//! outerHTML will give the querySelector itself and also it's innerHTML



//| tagName
console.log("\n.tagName")
console.log(document.querySelector(".box").tagName)
// it will return DIV
console.log(document.querySelector(".my-text").tagName)
// it will return P


//| nodeName
console.log("\n.nodeName")
console.log(document.querySelector(".box").nodeName)
console.log(document.querySelector(".my-text").nodeName)
//! nodeName and tagName might look same but nodeName can be also diclare the comment while comment has not tagName so it will not work in .tagName but will work in .nodeName


//| .textContent
console.log("\n.textContent")
console.log(document.querySelector(".box").textContent)
//! difference between innerText and textContent is textContent will follow the newLine the tag space but innerText wont it will just print a single line text



//| .hidden
console.log("\n.hidden")
console.log(document.querySelector(".super-text").hidden)
// ! it will return boolean true or false --> as it is not hidden therefor false now
document.querySelector(".super-text").hidden = true
console.log(document.querySelector(".super-text").hidden)
// now it is hidden and printing true



//| changing innerHTML
document.querySelector(".box").innerHTML = 
            `<p class="replaced">
                Replaced
            </p>`
//! html is as it is but it will be changed completely through js

//| changing only text
document.querySelector(".box").innerText = `<p> I am second time replaced </p>` 
// now there is no p tag even if i give p tag like I have given in the innerHTML change



//| .hasAttribute
console.log("\n.hasAttribute")
console.log(document.querySelector(".box").hasAttribute("style"))
console.log(document.querySelector(".box").hasAttribute("class"))
// because there is a class attribute in the html for .box div
console.log(document.querySelector(".box").hasAttribute("id"))


//| .setAttribute
// console.log("\n.setAttribute")
document.querySelector(".box").setAttribute("style", "display: inline")
document.querySelector(".box").setAttribute("style", "color: red")
//! we can set one attribute at a time it will replace previously setted setAttribute but with adding semicolon we can add multiple
document.querySelector(".box").setAttribute("style", "color: red; font-weight:900; font-size:24px;")

//! to do so we can also use .style.cssText and then using semi colon we can add multiple at once btw it will replace the previously setted attributes for style
//* document.querySelector(".box").style.cssText = "color: red; font-weight: 900; display:inline; font-size: 24px;"

document.querySelector(".box").setAttribute("id", "my-box")


//| .getAttribute
console.log("\n.getAttribute")
console.log(document.querySelector(".box").getAttribute("style"))


//| .attributes it will give a map or dictionary or object in JS but it's purely called NameNodeMap
console.log("\n.attributes")
console.log(document.querySelector(".box").attributes)
console.log(document.querySelector(".super-text").attributes)

//| .removeAttribute()
console.log("\n.removeAttribute()")
document.querySelector(".box").removeAttribute("style")


//* if with any website we want to change their content we can go and write the document.designMode = "on" and we can change their content in our end */




//| data-attribute --> .dataset
console.log("\nData Attribute --> .dataset")
console.log(document.querySelector(".box").dataset) 
console.log(document.querySelector(".super-text").dataset) 




let box = document.querySelector(".box")




// | very important --> insertion/creation
let x = document.createElement("div")
x.setAttribute("class", "created")
// another way to set className like this btw it will replace the previous one
x.className = "new-create"
x.innerHTML = "<h1>Oh Hi, I am newly created</h1>"
box.append(x)


let y = document.createElement("p")
y.className = "created-paragraph"
y.innerHTML = "lorem ipsum"
box.prepend(y)

// prepand will add inside the box but at the top and append will insert inside the box but at the bottom

let replace = document.createElement("h2")
replace.innerText = "frog looks creepy"
y.replaceWith(replace)
// it has replaced the lorem ipsum


box.after(replace)
box.before(replace)
//! a DOM node can only exist in one place at a time.
// so lastly it is showing at the before which means outside the box but before the box

// ! what if we want the same node to be multiple
box.append(replace.cloneNode(true))
// .cloneNode(true) will make a clone so we can now use it in multiple place!

// ! this are the node way to make it 
// what if we directly want to make a adjuscent html/text/element



// | .insertAdjucentHTML
box.insertAdjacentHTML("afterbegin", "<div>Hello World1</div>")
box.insertAdjacentHTML("afterend", "<div>Hello World2</div>")
box.insertAdjacentHTML("beforeend", "<div>Hello World3</div>")
box.insertAdjacentHTML("beforebegin", "<div>Hello World4</div>")


// | .insertAdjucentElemet
box.insertAdjacentElement("afterbegin", y)


//| .remove()
document.querySelector(".box2").remove()
// this will remove or delete the element
// ! remove() is a function that's why we need to add the braces



// | classList
let cont = document.querySelector(".container")
console.log(cont.classList)
// ! classList is not a function that's why we dont need to add the braces

// classList is a list but what about we need the full name of the class only no need for the list
// classList.value
console.log(cont.classList.value)
// .className
console.log(cont.className)


//| adding classes into the classList
cont.classList.add("Siam")
console.log(cont.classList)
// if the same goes on and on it will only count once

// |removing class from the classList
cont.classList.remove("red")
console.log(cont.classList)

// | replace class in the classList
cont.classList.replace("green", "yellow")
console.log(cont.classList)


//| togle
cont.classList.toggle("yellow")
console.log(cont.classList)
cont.classList.toggle("yellow")
console.log(cont.classList)
cont.classList.toggle("yellow")
console.log(cont.classList)
cont.classList.toggle("yellow")
console.log(cont.classList)