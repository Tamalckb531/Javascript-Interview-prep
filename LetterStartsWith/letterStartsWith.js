//? Question: Check starts with what

//* Write a function called startsWith to check fi a given string starts with a specific substring.

const starsWith = (str, subStr) => {
    return str.toLowerCase().slice(0, subStr.length) === subStr.toLowerCase();
}

console.log(starsWith("Hello world", "hello")); // out: true
console.log(starsWith("Hello world", "World")); // out: false