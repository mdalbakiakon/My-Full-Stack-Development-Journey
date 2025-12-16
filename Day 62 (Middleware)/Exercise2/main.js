import fs from 'fs/promises'
import fsn from 'fs'
import path from 'path'

let folder_path = 'D:\\Working on Programme\\Full-Stack-Development-Journey\\Day 62 (Middleware)\\Exercise2\\org_folder'
let files = await fs.readdir(folder_path)
console.log(files)

for (const item of files) {
    let file_path = path.join(folder_path, item)
    let ext_name = path.extname(file_path).slice(1)
    
    if (!ext_name) continue
    
    let dest_folder = path.join(folder_path, ext_name)
    
    if (fsn.existsSync(dest_folder)){
        await fs.rename(file_path, path.join(dest_folder, item))
    }
    else{
        await fs.mkdir(dest_folder)
        await fs.rename(file_path, path.join(dest_folder, item))
    }
}