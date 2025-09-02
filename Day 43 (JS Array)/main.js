let fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits)
console.log(fruits.length)

// strings are immutable but arrays are mutable
console.log(fruits[1])
console.log(fruits[10])


fruits.push('1', 5 , 2, 1)
console.log(fruits)
fruits.sort()
// if the number is string it will print first then the number and then the other remaining string
console.log(fruits)

fruits.pop()
console.log(fruits)

console.log(typeof fruits)
// type of array is a object

fruits[5] = 'Bangladesh'
console.log(fruits)

console.log(fruits.toString())
// this will return a string includes the comma

console.log(fruits.join(" and "))
//| this will return a string with and in the place of comma very important 


// ! push will append
// ! pop will eliminate the last
// ! unshift will add at the first
// ! shift will eliminate the first

console.log(fruits)
fruits.shift()
console.log(fruits)
// now the first value is gone

fruits.unshift("Jack")
console.log(fruits)
// now the Jack is added at the beginning

// ! delete in JS if we give delete to certain index if there is value it will be deleted but the place memory allocated will be still there

console.log(fruits.length)
//! remember delete is not a function

delete fruits[100]
console.log(fruits)
console.log(fruits.length)
// still 6 and the array is as it is because 100 index is not reached yet

delete fruits[4]
console.log(fruits)
console.log(fruits.length)
// still 6 in length and the memory is still allocated for index 4 but there is no value 


// now extending arrays

let a = [1,2,4]
let b = ["Bangladesh", "Pakistan"]
let c = [true, false]

let x = a.concat(b)
console.log(a)
// a is still as it is
console.log(b)
// b is still as it is
console.log(x)
//! we need to restore our concated x here first like python we can not truly extend the arrays

let y = c.concat(a,b)
console.log(y)
// we can add multiple arrays like this

y.sort()
// number->string->boolean
console.log(y)



// ! Splice() it is very important

let number = [1, 2, 3, 4, 5]
console.log(`Number: ${number}`)
number.splice(1,3)
//  from index 1 remove 3
// splice will change the real list
console.log(number)

number = [1,2,3,4,5,6,7,8,9,10]
number.splice(1, 2, 99, 100, 200)
// remove 2 element from index 1 and then add the rest from 1 index and the rest will follow
console.log(number)

number = ['x', 'y', 'z', 'a', 'b', 'c']
console.log(number)
number.slice(2)
console.log(number)
// so slice not change the main array or list

console.log(number.slice(3))
// up to end
console.log(number.slice(3,5))
// up to 5 not 5 

console.log(number)
number.reverse()
console.log(number)
// reverse the real array