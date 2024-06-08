//? Question: Power Of Two

//* Write a function called isPowerOfTwo That takes an integer num as input and returns true if num is a power of two and false otherwise. 

//! Constraints :

//1 The input num will be positive integer.

//2 0 and negative integers are no considered powers of two.


const isPowerOfTwo = (num) => {
    for (let i = 1; i < num; i++) {
        if (2 ** i === num) {
            return true;
        }
    }
    return false;
}

console.log(isPowerOfTwo(8)); // out: true
console.log(isPowerOfTwo(7)); // out: false