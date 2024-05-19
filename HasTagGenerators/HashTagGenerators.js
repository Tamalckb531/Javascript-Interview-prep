//? Question: Hash Tag Generators 

//* Write a function generateHash that generates a hash tag from a given input string. 

//! Constraints :

//1 The input string should be converted to a has tag format, where each word is capitalized and concatenated together without spaces. 

//2 If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false. 

//3 Otherwise, the function should return the generated hash tag prefixed with #. 

const generateHash = (str) => {
    if (str.trim().length > 280 || str.trim().length === 0) {
        return false;
    }

    //? making the array out of it
    let arrOfStr = str.split(' ');

    //? adding the hash tag
    let hashTag = '#'
    for (let index = 0; index < arrOfStr.length; index++) {
        hashTag = hashTag + arrOfStr[index][0].toUpperCase() + arrOfStr[index].substring(1);
    }

    return hashTag;
}

console.log(generateHash("what's the most you've ever lost on a coin toss?"));