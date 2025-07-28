export{}
// export makes a file into module
// by default any .ts files are treated as script so which means it can show error like redeclaring var used in another script
// to ensure this problem to be solve we will use export{} which will make the ts as module and telling it if we need to use particular var from it we need to import it otherwise no connection or relation exist here

let a:string = "1"
let b:string = "2"

if (a === b){
    console.log("They are same")
}

else{
    console.log("They are not same")
}

// console.log(5=="5")
// this will show error because typescript always check type first unlike js

// console.log(5 === "5")
// even for === it will show error

console.log(5 === 5)     
// console.log(5 === "5")    
// console.log(true === 1)
console.log(null === undefined)
// type error but still ts accept this for js rule in null and undefined as we know null is an object and undefined is undefined
console.log(null == undefined)
// true because no value in for both

// by default the strict mode is true therefor the issue is with the strict mode anyway to check type first