//? You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

function filterProducts(arr, cri) {
    if(cri === "even"){
        return arr.filter(id => id % 2 === 0)
    }

    else{
        return arr.filter(id => id % 2 !== 0)
    }
}


let arr = [1,2,3,4,5,6,7,8,9,10]
console.log(filterProducts(arr, "odd"))
console.log(filterProducts(arr, "even"))