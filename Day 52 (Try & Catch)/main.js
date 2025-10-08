// try {
//   let a = prompt("Enter the first number");
//   let b = prompt("Enter the second number");


//   if (isNaN(a) || isNaN(b)) {
//     console.log("Please enter a valid number");
//     throw new SyntaxError("Given value was not number!");
//   } else {
//     console.log("sum:", parseInt(a) + parseInt(b));
//   }


// //   here we know try blocks try to bypass the error so the programm runs but see here data part will not run because when the eroor is throwing it will immediately jump into the catch block 



//   let data = JSON.parse('{"name": "Alice"'); // ❌ Missing brace
//   console.log(data.name);

// } catch (error) {
//   console.log("Caught an error:", error.message);
// } finally {
//   console.log("Program finished running.");
// }

try {
    let a = prompt("Enter first number");
    let b = prompt("Enter second number");

    if (isNaN(a) || isNaN(b)) {
        throw new SyntaxError("Given value may not be a number");
    } else {
        console.log(`Sum of ${a} and ${b}: ${parseInt(a) + parseInt(b)}`);
    }
} catch (error) {
    console.log(error.name);    // SyntaxError
    console.log(error.message); // Given value may not be a number
}

try {
    let data = JSON.parse(`{"name": "Siam", "age": 24`);
    //! in json string we must give inverted comma to the keys
    console.log(data.name);
} catch (error) {
    console.log(error.name);    // SyntaxError
    console.log(error.message); // Unexpected token ... (if JSON invalid)
}
finally {
    console.log("parsing is completed!")
}


function my_func() {
    try {
        let data = JSON.parse(`{"name": "Siam", "age": 24`);
        //! in json string we must give inverted comma to the keys
        return data.name
    } catch (error) {
        return error
    }
    finally {
        console.log("parsing is completed! 2")
    }
}

let x = my_func()
console.log(x)

// ! if there is return keyword finally will work first then the return will work 
// if there is no return keyword then it will print or work one by one!!!

//| finally will always work no matter what finally has significance while in a function and the function is returning value