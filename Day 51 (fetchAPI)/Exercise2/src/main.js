const container = document.getElementById("container")

function randomDelayTimer() {
    return ((Math.ceil(Math.random() * 7))*1000)
}

let taskList = ["Initializing hacking",
    "Reading files",
    "Uploading data to server"
]


// async func always return a promise no matter what!


async function three_dot(el){
    return new Promise((resolve) => {
        
        let span = document.createElement("span")
        el.appendChild(span)
        
        let dot = ""
        
        let interval = setInterval(() => {
            dot = dot === "..." ? "" : dot + "."
            span.innerText = dot
        }, 500)
        
        setTimeout(()=>{
            clearInterval(interval)
            span.innerText = "...done!"
            resolve()
        }, randomDelayTimer())
    })
}



async function main() {
    // forEach dont work for await!!!
    for (const t of taskList) { 
        await new Promise((resolve) => {
            setTimeout(resolve, 800)
        })
        const h1 = document.createElement("h1")
        h1.innerText = t
        container.appendChild(h1)
        await three_dot(h1)
    }
    
}

main()