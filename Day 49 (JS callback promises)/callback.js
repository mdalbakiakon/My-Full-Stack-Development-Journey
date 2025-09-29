// const feedCat = (cleanKitchen) => {
//     console.log("feed the cat!")
//     cleanKitchen(takeOutTrash)
// }

// const cleanKitchen = (takeOutTrash) => {
//     console.log("clean the kitchen!")
//     takeOutTrash(finished)
// }

// const takeOutTrash = (finished) => {
//     console.log("take the trash out!")
//     finished()
// }

// function finished() {
//     console.log("Done!")
// }

// start the chain
// feedCat(cleanKitchen)



const feedCat = (callback) =>{
    console.log("feed the cat!")
    callback()
}

const cleanKitchen = (callback) =>{
    console.log("clean the kitchen!")
    callback()
}

const trashOut = (callback) =>{
    console.log("Take out the trash!")
    callback()
}

const finished = () =>{
    console.log("Done!")
}


feedCat(()=>{
    cleanKitchen(()=>{
        trashOut(()=>{
            finished()
        })
    })
})

// this is how we can start the callback but this is call callback hell!!!!
// or Piramid of Doom