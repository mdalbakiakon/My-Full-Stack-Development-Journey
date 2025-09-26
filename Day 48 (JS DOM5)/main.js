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

