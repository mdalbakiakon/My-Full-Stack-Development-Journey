//? Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.


async function placeOrder() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Order Confirmed!")
        }, (Math.random()*1000));
    })
}


;(async function main() {
   let x = await placeOrder()
   console.log(x) 
})()