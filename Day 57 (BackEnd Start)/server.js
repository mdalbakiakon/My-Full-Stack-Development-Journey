let slugify = require("slugify")

let a = slugify("hello world")

console.log(a)

let b = slugify("hello world", "_")

console.log(b)