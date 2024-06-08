//? Question: Check if Uppercase

//* Write a function called isUpperCase to check if a character is uppercase or lowercase. 

//! Constraints :

//1 The input char will be single character.

//2 The output can be any printable ASCII character.

//3 You can assume that the input will always be a string of length 1.

const isUpperCase = (char) => {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) return true;
    return false;
}

console.log(isUpperCase("S")); // out: true
console.log(isUpperCase("b")); // out: false
console.log(isUpperCase("Tamal is a good boy")); // out: true