//? Question: Finding maximum number in array

//* Write a function called findMaz that takes an array of numbers as input and returns the maximum number in the array. 

const findMax = (arr) => {
    return Math.max(...arr);
}

//Example: 
console.log(findMax([1, 5, 3, 9, 2])); //output: 9
console.log(findMax([-10, -5, -3, -9, -2])); //output: -2
console.log(findMax([5])); //output :5

