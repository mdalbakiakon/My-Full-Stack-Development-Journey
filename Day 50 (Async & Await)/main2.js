// async func always returns a promise even if we dont write the promise return

async function func() {
    return 42
}

let x = func()
console.log(x)
// so here x is a promise js automatically wrap up the return value into promise for a async func

// await also need a async function to work
// await also not work on forEach loop for await we must use for of
// await makes the promise value in resolve or reject

// !let y = await func()
// this will not work because it is not inside of an async func

async function main() {
    let y = await func()
    console.log(y)
}

main()