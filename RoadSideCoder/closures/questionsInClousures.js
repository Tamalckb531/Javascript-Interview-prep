// //? what this will print
// let count = 0;
// (function printCount() {
//     if (count === 0) {
//         let count = 1; // shadowing
//         console.log(count); // 1
//     }
//     console.log(count); // 0
// })();

// //? add six

// function createBase(num) {
//     return function (innerNum) {
//         console.log(innerNum + num);
//     }
// }

// var addSix = createBase(6);
// addSix(10);
// addSix(21);

// //? Time optimization

// function find() {
//     let a = [];
//     for (let i = 0; i < 10000000; i++) {
//         a[i] = i * i;
//     }

//     return function (index) {
//         console.log(a[index]);
//     }
// }

// const closure = find(); // By creating this closure, now the array initialize will only happen one time. It will increase the pace of algorithm. React.memo() do the same thing.

// console.time("6");
// closure(6);
// console.timeEnd("6");

// console.time("20");
// closure(20);
// console.timeEnd("20");

//? Block scope and setTimeOut 

// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//         console.log(i); //? This will show 3 for three times
//     }, 1000);
// }

//? using let instead of var will make it block scope, so it will print 1,2,3 than.

//? without let:


for (var i = 0; i < 3; i++) {
    function inner(i) {
        setTimeout(function log() {
            console.log(i); //? This will show 3 for three times
        }, i * 1000);
    }
    inner(i);
}

