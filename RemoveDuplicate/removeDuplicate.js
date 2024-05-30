//? Question: Remove Duplicate

//* Write a function called removeDuplicates that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements.. 

//! Constraints :

//1 The input array may contain both positive and negative integers. 

//2 The input array may be empty.

//3 The elements in the input array are not guaranteed to be sorted.

//4 The output array should retain the original order of elements from the input array. 

const removeDuplicates = (arr) => {
    const newSet = new Set(arr);
    const finalArray = [...newSet];
    return finalArray;
}

console.log(removeDuplicates([1, 2, 3, 2, 1, 4])); // out: [1,2,3,4]
console.log(removeDuplicates([5, 6, 7, 7, 8, 8, 9])); // out: [5,6,7,8,9] 
console.log(removeDuplicates([1, 2, 3, 4])); // out: [1,2,3,4] 
console.log(removeDuplicates([])); // out: [] 