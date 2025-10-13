let myStr = "Bangladesh"

function vowel_count(str) {
    let vowel = 0
    str = str.toLowerCase()
    let myList = [...str]
    for (const l of myList) {
        if (l==="a" || l==="e" || l==="i" || l==="o" || l==="u"){
            vowel++
        }
    }

    return vowel
}

console.log(vowel_count(myStr))