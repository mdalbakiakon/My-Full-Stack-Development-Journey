//? In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

async function brewCoffee(name) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`${name} coffee is ready!`)
        }, Math.random()*1000)
    })
}


;(async function main() {
    let x = await brewCoffee("Black")
    console.log(x)
})()