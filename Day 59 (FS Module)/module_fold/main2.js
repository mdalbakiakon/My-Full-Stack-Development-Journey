import fs from 'fs/promises'
// we will be applying module to make ourselves clear from the callback hell

let a = await fs.readFile("x.txt")
// let b = await fs.writeFile("x.txt", "\n\n\nThis is amazing promise!")
let b = await fs.appendFile("x.txt", "\n\n\nThis is amazing promise!")

console.log(a.toString(), b)