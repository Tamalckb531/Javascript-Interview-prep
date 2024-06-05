//? Question: Reverse String

//* Write a function called reverseString to revers string without using any build-in method or libraries. The function should take a string as in put and return the reversed string. 

const reverseString = (str) => {
    let reverseString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }
    return reverseString;
}

console.log(reverseString("abs"));
console.log(reverseString("Helloo world!"));
console.log(reverseString("ThE quIck brOwn fox")); 