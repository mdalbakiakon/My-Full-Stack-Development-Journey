const collect_data = async () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hello World")
        },3500)
    })
}

// async function main() {
//     console.log("Hey I am learning Async & Await!!!")
//     let data = collect_data()
//     data.then((val)=>console.log(val))
//     console.log("I am doing my other job1")
//     console.log("I am doing my other job2")
//     console.log("I am doing my other job3")
// }


async function main() {
    console.log("Hey I am learning Async & Await!!!")
    let data = await collect_data()

    //| await sees the collect_data is returning a promise
    //| so await will wait until it resolve or reject than it will assign the result into data so here data is not a promise so no .then or .catch needs here!
    
    console.log(data)
    console.log("I am doing my other job1")
    console.log("I am doing my other job2")
    console.log("I am doing my other job3")
}

main()