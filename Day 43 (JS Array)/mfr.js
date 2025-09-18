let arr = [1,3,5,7,9,11]
let newArr = []

for(let i=0; i<arr.length; i++){
    const element = arr[i]
    newArr.push(element**2)
}

console.log(newArr)

// map method
// easy one line approach

let newArr2 = arr.map(e=>{
    return e**2
})

console.log(newArr2)

// map is used if we need a resultant array in return 
// forEach is used when we dont need a resultant array because forEach dont return anything


newArr2 = [1,2,4,6,9,10,32]

// | filter
const greaterThanSeven = (e)=>{
    if (e>7){
        return true
    }
    return false
}

let filtered = newArr2.filter(greaterThanSeven)
console.log(filtered)




// | reduce
newArr2 = [1,2,4,6]

const red = (a,b) =>{
    return a*b
}

reduced = newArr2.reduce(red)
console.log(reduced)




//! Method	        Purpose	                             Return Value	                   Original Array	       Use Case Example
// map	        Transform elements	                    New array same length	        ✅ Not changed	          When you want to apply a function to each element.

// filter	 Select elements by condition	            New array (smaller)	            ✅ Not changed	          When you want to remove elements that don’t meet a condition.

// reduce	Accumulate/combine elements	Single value            (any type)	            ✅ Not changed	          When you want to accumulate values or combine elements.




// | Array.form

let a = 234566
let x = Array.from(a)
console.log(x)

a = "234566"
x = Array.from(a)
console.log(x)

//! Array.from(str)
