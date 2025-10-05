console.log("Hey I am learning promise today");

// let prom1 = new Promise((resolve, reject) => {
//   let a = Math.random();
//   if (a < 0.5) {
//     reject("Hey I am rejected!");
//   } else {
//     setTimeout(() => {
//       resolve("Hey I am resolved");
//     }, 3000);
//   }
// });

// // prom1.then((a)=>{
// //     console.log(a)
// // }).catch((error)=>{
// //     console.log(error)
// //     console.error(error)
// // })

// let prom2 = new Promise((resolve, reject) => {
//   let a = Math.random();
//   if (a < 0.5) {
//     reject("Hey I am rejected! 2");
//   } else {
//     setTimeout(() => {
//       resolve("Hey I am resolved 2");
//     }, 3000);
//   }
// });

// let p3 = Promise.all([prom1, prom2]); //we have to pass a list remember that

// p3.then((a) => {
//   console.log(a);
// }).catch((err) => {
//   console.log(err);
//   console.error(err);
// });




//| If any one of them rejects, then:

// The entire Promise.all immediately rejects with that rejection reason.
// The .then(...) callback will not run.
// The .catch(...) will run instead.


//| If all promises succeed, then Promise.all([...]) will:

// Resolve with a single array containing the resolved values
// The order of the array matches the order of the promises you passed in — not the order in which they finished


// what if i dont care resolve or reject I want the values than it comes with promise.allSettled()


// console.log("Promise.allSettled()...->")
// let p4 = Promise.allSettled([prom1, prom2])
// p4.then(value=>console.log(value))
// .catch(error=>{
//     console.log(error) 
//     console.error(error)})

    // again if anyone rejects it will print the rejected one and also then part will work as it will print the value with everything


// console.log("race")

// let p5 = Promise.race([prom1, prom2])
// p5.then(value=>console.log(value))
// .catch(err=>{
//     console.log(err)
//     console.error(err)
// })


// | Method               | Resolves when                     | Rejects when                      | Notes                             |
// | -------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
// | `Promise.all`        | All fulfill                       | Any one rejects                       | Waits for all                     |
// | `Promise.allSettled` | Always                            | Never rejects                     | Returns statuses                  |
// | `Promise.race`       | First settles (resolve or reject) | First settles (resolve or reject) | Fastest wins                      |
// | `Promise.any`        | First fulfills                    | All reject                        | Ignores rejections until all fail |


// .any .resolve .reject

let try_promise1 = new Promise((resolve, reject)=>{
    let x = Math.random()
    if (x<0.5){
        resolve("Resolved!")
    }
    else{
        reject("Rejected!")
    }
})

// try_promise1.then(value=>console.log(value))
// .catch(err=>console.log(err))


try_promise1 = Promise.resolve("Hurray!!!")
// it will remove everything in the previous Promise and make a fully new one promise in the try_promise1 variable with only resolve value
try_promise1 = Promise.reject("Oh Man!!!")
// overwritten again
// so only Oh Man is exist

try_promise1.then(value=>console.log(value))
.catch(err=>console.log(err))


let try_promise2 = new Promise((_,reject)=>
    {
        reject("finally I am resolved")
    })

let px = Promise.any([try_promise1, try_promise2])
px.then(value=>console.log(value))
.catch(err=>console.log(err))

// .any is the same as race race will print the first one whatsoever it is resolve or reject
// but any will wait until the first resolved occured if not it will say AggregateError