//? Question: Sort an Array

//* Write a function called sortAscending to sort an array of numbers in an ascending order. 

//! Constraints :

//1 The function should take an array of numbers as input. 

//2 It should return a new array with the numbers sorted in ascending order.

//3 The original array should remain unchanged.

//4 You are not allowed to use the build-in sort() method

const sortAscending = (arr) => {
    //Clone array 
    let array = [...arr]

    //Using bubble sort
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                //Swap element
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

console.log(sortAscending([5, 3, 10, 8])); // [3, 5, 8, 10]