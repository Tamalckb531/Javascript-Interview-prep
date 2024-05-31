//? Question: Count Vowels

//* Write a function called countVowels that takes a string as input and returns the count of vowels in that string. Consider 'a', 'e', 'i', 'o', 'u' as vowels (both lowercase and uppercase). 

//! Constraints :

//1 The input string may contain letters in both uppercase and lowercase.

//2 The output should be a non-negative integer representing the count of vowels in the input string.

const countVowels = (str) => {
    if (!str) return 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    let arrOfStr = str.toLowerCase().split('');

    for (const char of arrOfStr) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;

}

console.log(countVowels("Helloo world!")); // out: 4
console.log(countVowels("ThE quIck brOwn fox")); // out: 5 
console.log(countVowels("BrrrPLsss")); // out: 0  
console.log(countVowels("")); // out: 0  