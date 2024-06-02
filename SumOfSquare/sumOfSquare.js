//? Question: Sum of Square

//* Write a function called sumOfSquares to calculate the sum of squares of all elements in an array. For example, given the array [1,2,3] the function should return 14 because 1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14. 

const sumOfSquares = (arr) => {
    let total = arr.reduce((prev, curr) => {
        return prev + (curr * curr);
    }, 0);
    return total;
}

console.log(sumOfSquares([1, 2, 3])); // out: 14