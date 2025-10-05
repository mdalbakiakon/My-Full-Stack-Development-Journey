const feedCat = () =>{
    return new Promise((resolve, reject)=>{
        isThereFood = true
        isThereFood ? resolve("feed the cat!") : reject("No food for cat!")
    })
}

const cleanKitchen = () =>{
    return new Promise((resolve, reject)=>{
        resolve("clean the kitchen!")
    })
}

const trashOut = () =>{
    return new Promise((resolve, reject)=>{
        resolve("take out the trash!")
    })
}


feedCat()
.then(msg=>{console.log(msg)
    return cleanKitchen()
})
.then(msg=>{console.log(msg)
    return trashOut()
})
.then(msg=>console.log(msg))
.catch(error => console.error(error))