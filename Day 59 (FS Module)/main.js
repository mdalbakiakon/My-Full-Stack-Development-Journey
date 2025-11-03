const fs = require("fs")
console.log(fs)

console.log("Starting")
// fs.writeFileSync("Siam.txt", "Siam is a good boy!")
// ! but this approach will fall into synchronus state we must need asynchronus approach

fs.writeFile("Siam2.txt", "Siam is a good boy2!", ()=>{
    fs.readFile("Siam.txt", (error, data)=>{
        console.log(error, data)
        console.log(error, data.toString())
    })
    console.log("done!")
})
//| this is now asynchronus 

fs.appendFile("x.txt", "SUIIIIIII", (error)=>{
    console.log(error)
})

// if here as x is not there in the directory so it will make the x.txt and then append to the x.txt file

console.log("Ending")

