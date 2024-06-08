//? Question: Find the Mean

//* Write a function called calculateMean that takes an array of numbers as input and returns the mean (average) of those numbers. 

//! Constraints :

//1 The input array may contain positive and negative integers.

//2 The input array may be empty. If it is empty, the function should return 0.

const calculateMean = (arr) => {
    let len = arr.length;
    if (len === 0) return 0;

    let total = arr.reduce((prevResult, currElem) => {
        return prevResult + currElem;
    }, 0)

    return total / len;
}

console.log(calculateMean([1, 2, 3, 4, 5])); // out: 3
console.log(calculateMean([10, 20, 30, -20])); // out: 10
console.log(calculateMean([-1, 0, 1])); // out: 0
console.log(calculateMean([])); // out: 0