const fs = require('fs')
const path = require('path')
const folder_path = './myFolder'


let ext_set = new Set()

fs.readdirSync(folder_path).forEach(file => {
    const file_path = path.join(folder_path, file)
    ext_set.add(path.extname(file_path).slice(1))
})

const ext_list = [...ext_set]

ext_list.forEach(ext => {
    const newFolder = path.join(folder_path, ext)

    if (!fs.existsSync(newFolder)) {
        fs.mkdirSync(newFolder)
    }
})


fs.readdirSync(folder_path).forEach(file => {
    const file_path = path.join(folder_path, file)
    if (fs.lstatSync(file_path).isFile()){
        fs.renameSync(file_path, `${folder_path}/${path.extname(file_path).slice(1)}/${file}`)
    }
})

