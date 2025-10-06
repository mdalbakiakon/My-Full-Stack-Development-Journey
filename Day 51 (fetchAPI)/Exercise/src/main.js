const container = document.getElementById("container")

const random_timeout = () => {
    return ((Math.ceil(Math.random() * 7)) * 1000)
}

const three_dot = (el) => {
    return new Promise((resolve) => {
        let span = document.createElement("span")
        el.appendChild(span)

        let dot = ""

        let interval = setInterval(() => {
            dot = dot === "..." ? "" : dot + "."
            span.innerText = dot
        }, 500)

        if (el.id === "read") {
            setTimeout(() => {
                clearInterval(interval)
                span.innerText = "...done!"
                resolve()
            }, (random_timeout()*1.5))
        }

        else{
            setTimeout(() => {
                clearInterval(interval)
                span.innerText = "...done!"
                resolve()
            }, random_timeout())
        }
    })
}

const init_hacking = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Initializing hacking")
        }, 500)
    })
}

const read_file = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Reading files")
        }, 800)
    })
}

const send_server = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Sending personal files to server")
        }, 800)
    })
}



let init = document.getElementById("init")
let read = document.getElementById("read")
let send = document.getElementById("send")


function main() {
    init_hacking()
        .then(msg => {
            init.innerText = msg;
            return three_dot(init);
        })
        .then(() => {
            return read_file();
        })
        .then(msg => {
            read.innerText = msg;
            return three_dot(read);
        })
        .then(() => {
            return send_server();
        })
        .then(msg => {
            send.innerText = msg;
            return three_dot(send);
        })
        .catch(err => console.error(err));
}

main();
