let arr = [5,9,12,5,3,-5,8,6];

let result = (function sum_func(arr) {
    let sum = 0
    for (const e of arr) {
        if (e<0){
            return sum
        }
        else{
            sum = sum + e
        }
    }

    return sum
})(arr)

console.log(result)