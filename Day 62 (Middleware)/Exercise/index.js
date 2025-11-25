const path = require("path")
const fs = require("fs")

const folderPath = './myFolder'
let ext_set = new Set()

fs.readdirSync(folderPath).forEach(file => {
    ext_set.add(path.extname(file).slice(1,))    
})

const ext_list = [...ext_set]

ext_list.forEach(ext=>{
    fs.mkdirSync(`${folderPath}/${ext}`, {recursive:true})
})

fs.readdirSync(folderPath).forEach(file => {
    if (fs.lstatSync(`${folderPath}/${file}`).isFile()){
        fs.renameSync(`${folderPath}/${file}`, `${folderPath}/${path.extname(file).slice(1,)}/${file}`)
    }
})