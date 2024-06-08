//? Question: Determine palindrome or not

//* Write a function called isPalindrome to determine whether a given string is a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation and capitalization. 

//! Constraints :

//1 Input string may contain letters, digits, spaces, punctuation and special characters. 

//2 The function should be case-insensitive, meaning "Racecar" and "racecar" should be considered the same. 

//3 Ignore spaces, punctuation and special characters when determining if a string is a palindrome.

//4 The function should return true if the input string is a palindrome and false otherwise.

const isPalindrome = (str) => {
    if (str.length === 0) return false;

    //? Making the string comparable
    str = str.toLowerCase().replace(/\W/g, "");

    //? Reversing the string
    let reverseStr = str.split("").reverse().join("");

    return str === reverseStr ? true : false;
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("")); // false