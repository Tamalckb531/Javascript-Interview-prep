//? Question: Array are equal

//* Write a function called arrasAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal (i.e., contain the same elements in the same order), and false otherwise. 

//! Constraints :

//1 The function should return false if the arrays have different lengths. 

//2 The function should compare each element of arr1 with the corresponding element in arr2.   

//3 The function should return true only if all elements in arr1 are equal to their corresponding elements in arr2.

const arrasAreEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;

    return arr1.every((currVal, index) => currVal === arr2[index]);
}

console.log(arrasAreEqual([5, 10, 2], [5, 10, 2])); // out: true
console.log(arrasAreEqual([5, 10, 2], [5, 10, 3])); // out: false
console.log(arrasAreEqual([5, 10, 2], [5, 10, 2, 3])); // out: false
console.log(arrasAreEqual([], [])); // out: false