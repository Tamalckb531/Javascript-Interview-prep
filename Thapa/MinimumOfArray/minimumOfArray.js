//? Question: Minimum Of Array

//* Write a function called findMin that takes an array of numbers as input and returns the minimum value found in they array. 

//! Constraints :

//1 The input array may contain both positive and negative integers.

//2 The input array may be empty.

//3 The input array may contain duplicate values.

const findMin = (arr) => {
    if (arr.length === 0) return "empty"
    arr = arr.sort((a, b) => {
        if (b > a) return -1;
    })
    return arr[0];
}

console.log(findMin([5, 10, 2, 8])); // out: 2
console.log(findMin([5, -3, 0, 12, -7])); // out: -7
console.log(findMin([])); // out: empty