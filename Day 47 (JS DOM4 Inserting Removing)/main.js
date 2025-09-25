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


//| .removeAttribute()
console.log("\n.removeAttribute()")
document.querySelector(".box").removeAttribute("style")


//* if with any website we want to change their content we can go and write the document.designMode = "on" and we can change their content in our end */

let box = document.querySelector(".box")
