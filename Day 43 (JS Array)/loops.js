let a = [1,99,4,56,3]
console.log(a)
console.log("length:",a.length)

let name = "Muhammad"
console.log(name)
name[0] = "K"
console.log(name)
console.log(name[0])

// string are not changeable but can be accessed like n array
console.log(typeof name)
console.log(typeof a)
//! Type of array is Object!!!!!


let arr = [3,4,5]
console.log(arr.toString())
console.log(arr)
// main arr remain as it is

console.log(arr.join(" and "))

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}


console.log("\n")
a.forEach((value, index, array)=>{
    console.log(index, value, array)
})

//| forEach --> always val-index-arr VIA


