const container = document.getElementById("container")

function delayTimer() {
    return Math.ceil(Math.random()*7) * 1000
}

let myTask = ['Initializing hacking', 
    'Reading personal files',
    'Uploading data to server'
]


async function three_dot(el) {
    return new Promise((resolve) => {    
        let span = document.createElement("span")
        el.appendChild(span)
        
        let dot = ""
        let interval = setInterval(()=>{
            dot = dot === "..." ? "" : dot + "."
            span.innerText = dot
        },500)
        
        setTimeout(()=>{
            clearInterval(interval)
            span.innerText = "...done!"
            resolve()
        }, delayTimer())
    })
}


async function main(){
    for (const t of myTask) {
        await new Promise(resolve => setTimeout(resolve, 800))
        
        let h1 = document.createElement("h1")
        h1.innerText = t
        container.appendChild(h1)
        await three_dot(h1)
    }
}

main()