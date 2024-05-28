//? Question: Sum Of Digits

//* Write a function called sumOfDigits that takes a number as input and return the sum of its digits. 

//! Constraints :

//1 The input uber will always be a positive integer.

//2 The input number can have multiple digits.

//3 The output should be the sum of all the digits in the input number.

const sumOfDigits = (num) => {
    let arr = Array.from(String(num), Number);
    let totalSum = arr.reduce((prevResult, currElem) => {
        return prevResult += currElem;
    }, 0);

    return totalSum;
}

console.log(sumOfDigits(1234)); // out: 1+2+3+4 = 10
console.log(sumOfDigits(123456)); // out: 1+2+3+4+5+6 = 21