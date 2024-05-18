//? Question: Longest word in a String 

//* Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered. 

//! Constraints :

//1 The input string may contain alphabetic characters, digits, spaces and punctuation. 

//2 The input string is non-empty.

//3 The input string may contain multiple words separated by spaces.



//* Method 1: 

const findLongestWord1 = (str) => {

    // For constrains:
    if (str.trim().length === 0) {
        return false;
    }

    // Array of string
    let words = str.split(" ");

    // descending sort
    words = words.sort((a, b) => b.length - a.length);

    //returning the 0th value which is the largest words
    return words[0];
}

// console.log(
//     findLongestWord1("Hello there My name is Tamal Chakraborty ")
// )

//* Method 2:

const findLongestWord2 = (str) => {

    //trimming the string and no words don't count as per constraints (2)
    if (str.trim().length === 0) {
        return false;
    }

    //converting into string of array
    let words = str.split(" ");

    //Returning largest value via reduce methods largest finding logic
    return words.reduce(
        (prevResult, currElem) => (currElem.length > prevResult.length ? currElem : prevResult),
        "" //initial prevResult
    )
}

console.log(
    findLongestWord2("Hello there My name is Tamal Chakraborty ")
)