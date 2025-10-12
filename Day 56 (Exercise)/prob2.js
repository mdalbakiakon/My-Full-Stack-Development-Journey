//? You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.


let main_arr = ["red", "blue", "green", "yellowgreen", "yellow", "orange", "orangered", "pink", "olive", "red", "skyblue", "pink", "cyan", "coral"]

let seen = []

let doubled_arr = []

for (const col of main_arr) {
    if (seen.includes(col)){
        doubled_arr.push(col)
    }
    else{
        seen.push(col)
        doubled_arr.push(col)
        doubled_arr.push(col)
    }
}

console.log(doubled_arr)