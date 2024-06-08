//? Question: Calculate the Average

//* Write a function called calculateAverage that takes an array of numbers as input an returns the average of those numbers. 

//! Constraints :

//1 Accept an array of numbers as input. 

//2 Calculate the sum of all the numbers in the array. 

//3 Divide the sum by the total number of elements in the array to find the average .

//4 Return the calculated average.

const calculateAverage = (arr) => {
    let total = arr.reduce((prevResult, currResult) => {
        return prevResult + currResult;
    }, 0);
    return total / arr.length;
}

console.log(calculateAverage([5, 10, 2, 8])); // out: 6.25