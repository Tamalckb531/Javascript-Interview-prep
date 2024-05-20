//? Question: Count Occurrences of Character

//* Write a function countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string. 

//! Constraints :

//1 The function should be case-sensitive. 

//2 The function should handle both lowercase and uppercase characters.

//3 The character parameter na be any printable ASCII character( the function should accept any character that is part of the ASCII character set and is printable).

const countChar = (word, char) => {
    word = word.toLowerCase();
    char = char.toLowerCase();

    let arrayOfWord = word.split("");
    let totalCount;

    totalCount = arrayOfWord.reduce((prevResult, curChar) => {
        if (curChar === char) {
            prevResult++;
        }
        return prevResult;
    }, 0);

    return totalCount
}

console.log(countChar("MissIssippi", "i")); //Out: 4