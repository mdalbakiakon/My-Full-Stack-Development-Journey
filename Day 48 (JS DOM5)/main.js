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



document.addEventListener("keydown", (e)=>{
    console.log(e.key)
})

// keyboard use keydown to connect with user end input














// | Event Handling
let elem = document.getElementById("hey")
elem.onclick = function(){
    alert("Hey clicked second time")
}

//! Note: adding an handler with JS overwrite the existing handler in HTML


elem.addEventListener("mouseover", ()=>{
    elem.style.backgroundColor = "red"
})



//! for the removeEventListener we can not use the arrow key function we need  the handler or the function with certain names


function myMouseOut(){
    elem.style.fontSize = "120px"
    //! we must use the elem in function to work on elem.evenlistener
    // otherwise it wont work 
}


elem.addEventListener("mouseout", myMouseOut)
elem.removeEventListener("mouseout", myMouseOut)

// now the eventlistener has been removed
