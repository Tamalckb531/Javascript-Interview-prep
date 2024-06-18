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


// for (var i = 0; i < 3; i++) {
//     function inner(i) {
//         setTimeout(function log() {
//             console.log(i); //? This will show 3 for three times
//         }, i * 1000);
//     }
//     inner(i);
// }

//? Private counter

// function counter() {
//     var _counter = 0;

//     function add(increment) {
//         _counter += increment;
//     }

//     function retrive() {
//         return "Counter = " + _counter;
//     }

//     return {
//         add,
//         retrive
//     };
// }

// const c = counter();

// c.add(5);
// c.add(10);
// c.add(15);

// console.log(c.retrive());

//? Module pattern

// var Module = (function () {
//     function privateMethod() {
//         console.log("public");
//     }

//     return {
//         publicMethod: function () {
//             console.log("public");
//         }
//     }
// })();

// Module.publicMethod();

//? Make this run only once

// let view;
// function likeTheVideo() {
//     let called = 0;

//     return function () {
//         if (called > 0) {
//             console.log("Already subscribed");
//         } else {
//             view = "Roadside Coder";
//             console.log("Subscribe to", view);
//             called++;
//         }
//     }
// }
// let isSubscribed = likeTheVideo();
// isSubscribed();
// isSubscribed();
// isSubscribed();
// isSubscribed();

//? Once polyfill function:

// function once(func, context) {
//     let ran;

//     return function () {
//         if (func) {
//             ran = func.apply(context || this, arguments);
//             func = null;
//         }

//         return ran;
//     }
// }

// const hello = once((a, b) => console.log("hello", a, b));

// hello(1, 2);
// hello(3, 2);
// hello(3, 4);
// hello(4, 5);

//? Memoize Polyfill

function myMemoize(fn, context) {
    const res = {};

    return function (...args) {
        var argsCache = JSON.stringify(args);
        if (!res[argsCache]) {
            res[argsCache] = fn.call(context || this, ...args);
        }
        return res[argsCache];

    }
}

const clumsyProduct = (num1, num2) => {
    for (let i = 1; i <= 100000000; i++) {
    }
    return num1 * num2;
}

const memoizedClumsyProduct = myMemoize(clumsyProduct);

console.time("First call");
console.log(memoizedClumsyProduct(9841, 1564));
console.timeEnd("First call");

console.time("Second call");
console.log(memoizedClumsyProduct(9841, 1564));
console.timeEnd("Second call");