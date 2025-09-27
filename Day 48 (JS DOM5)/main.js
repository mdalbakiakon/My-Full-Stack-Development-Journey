let btn = document.getElementById("btn")
let darkMode = false

btn.addEventListener("click", ()=>{
    darkMode = !darkMode
    if(darkMode){
        document.body.style.backgroundColor = "#252525"
        document.body.style.color = "white"
    }

    else{
        document.body.style.backgroundColor = "white"
        document.body.style.color = "#252525"
    }
})


btn.addEventListener("contextmenu", ()=>{
    // alert("Right mouse clicked!!!!")
    document.querySelector(".box").style.cssText = `font-size: 24px;
    font-weight: 700;
    color: red;`
})

//!contextmenu is used for if someone right clicks!!!!


// | Event Handling
let elem = document.getElementById("hey")
elem.onclick = function(){
    alert("Hey clicked second time")
}

//! Note: adding an handler with JS overwrite the existing handler in HTML


elem.addEventListener("mousemove", ()=>{
    elem.style.backgroundColor = "red"
})

elem.addEventListener("mouseout", ()=>{
    elem.style.fontSize = "32px"
    elem.style.display = "block"
})


// elem.removeEventListener("mousemove", ()=>{
//     elem.style.backgroundColor = "white"
// })


