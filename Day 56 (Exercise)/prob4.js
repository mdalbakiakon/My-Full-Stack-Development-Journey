//? You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.


function pass_validation(password) {
    if (password.length < 8){
        return false
    }

    pass_list = Array.from(password)

    let hasUpper = /[A-Z]/.test(password)
    let hasLower = /[a-z]/.test(password)
    let hasDigit = /[0-9]/.test(password) // /\d/ also for digit

    if (hasUpper && hasLower && hasDigit){
        return true
    }

    else{
        return false
    }
}


if(pass_validation("")){
    console.log("Valid Password!")
}

else{
    console.log("Invalid Password!")
}