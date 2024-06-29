//! sum(2)(6)(1)

// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }

// console.log(sum(2)(6)(1));

//! Evaluate -
/*
    //* evaluate("sum")(4)(2) => 6
    //* evaluate("multiply")(4)(2) => 8
    //* evaluate("divide")(4)(2) => 2
    //* evaluate("subtract")(4)(2) => 2
*/

// function evaluate(operation) {
//     return function (a) {
//         return function (b) {
//             switch (operation) {
//                 case "sum":
//                     return a + b;
//                 case "multiply":
//                     return a * b;
//                 case "divide":
//                     return a / b;
//                 case "subtract":
//                     return a - b;
//                 default:
//                     return "Invalid operation"
//             }
//         }
//     }
// }

// console.log(evaluate("sum")(4)(2));
// console.log(evaluate("multiply")(4)(2));
// console.log(evaluate("divide")(4)(2));
// console.log(evaluate("subtract")(4)(2));
// console.log(evaluate("dudukakabubu")(4)(2));

//! Infinite currying

// function add(a) {
//     return function (b) {
//         if (b) return add(a + b);
//         return a;
//     }
// }

// console.log(add(5)(6)(7)(8)(9)(10)());

//! Currying vs Partial Application

//partial function :
// function sum(a) {
//     return function (b, c) {
//         return a + b + c;
//     }
// }

// Here we create 2 functions but giving 3 arguments. So it is a partial function.

//! Manipulating DOM

// function updateElementText(id) {
//     return function (content) {
//         document.querySelector("#" + id).textContent = content;
//     }
// }

// const updateHeader = updateElementText("heading");

// updateHeader("Hello from the other side");

//this is targeting an element once and updating the content each time we calling it.

//! curry implementation :

// function curry(func) {
//     return function curriedFunc(...args) {
//         if (args.length >= func.length) {
//             return func(...args)
//         } else {
//             return function (...next) {
//                 return curriedFunc(...args, ...next);
//             }
//         }
//     }
// }

// const sum = (a, b, c) => a + b + c;

// const totalSum = curry(sum);

// console.log(totalSum(1)(2)(3));



