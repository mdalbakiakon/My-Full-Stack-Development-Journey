// // const { createServer } = require('node:http');
// // const fs = require("fs")
// // we use require to import models 



// // const hostname = '127.0.0.1';
// // const port = 3000;

// // const server = createServer((req, res) => {
//     //   res.statusCode = 200;
//     //   res.setHeader('Content-Type', 'text/html');
//     //   res.end('<h1>Hello World</h1>');
//     // });
//     // server.listen(port, hostname, () => {
//         //   console.log(`Server running at http://${hostname}:${port}/`);
//         // });


// // import http from "http"
// // import works in type:module which is ES6 not commonJS
// // require is commonJS

// import {a, b, c, d} from "./myModule.js"
// console.log(a,b,c,d)

// // this is called named export

// import def from "./myModule.js"
// console.log(def)

// // default export can be use any name as we wish because it is exporting from default and also remind here in default export we dont use the curly braces


let a = require("./myModule2.js")
console.log(a, __filename, __dirname)

// require is old
// use "type":"module" in package.json for modern ES6

// function(exports, require, module, __filename, __dirname){
    //Module code actually lives here
// };