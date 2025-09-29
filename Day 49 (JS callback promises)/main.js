console.log("Siam is a good boy")
console.log("Siam is a SWE")

setTimeout(()=>{
    console.log("I am inside the setTimeout")
}, 5000)

setTimeout(()=>{
    console.log("I am inside the setTimeout2")
}, 0)
// even for the 0 second it wont work as it should be because the in JS setTimeout is asynchronus
// so first all the synchronus will print than as it has 0 second therefor it will print first than the 2s's setTimeout will print

console.log("The End")