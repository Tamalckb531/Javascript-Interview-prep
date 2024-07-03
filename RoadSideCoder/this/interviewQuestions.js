//! What is the output ?

// const user = {
//     firstName: "Tamal",
//     getName() {
//         const firstName = "Dip!"; // 'this' will not point this firstName
//         return this.firstName;
//     },
// };

// console.log(user.getName());

//! Use of ref

// function makeUser() {
//     name: "Dip"
//     return {
//         name: "Tamal",
//         ref: this, // this will point the window object
//     }
// }

// function makeUserWithRef() {
//     name: "Dip"
//     return {
//         name: "Tamal",
//         ref() {
//             return this;
//         }
//     }
// }

// let user = makeUserWithRef();

// console.log(user.ref().name);

//! SetTimeOut with this

// const user = {
//     name: "Tamal",
//     logMsg() {
//         console.log(this.name);
//     }
// }

// setTimeout(user.logMsg(), 1000); // This will not work, as in setTimeOut, the function will act as callback function so won't refer to the object

// //? Fix :
// setTimeout(function () {
//     user.logMsg();
// }, 1000);

//! Make a calculator with object

// class Calculator {
//     constructor(a, b) {
//         this.a = a;
//         this.b = b;
//     }

//     sum() {
//         return this.a + this.b;
//     }

//     mul() {
//         return this.a * this.b;
//     }
// }

// const calculator = new Calculator(5, 6);
// const sum1 = calculator.sum();
// const mul1 = calculator.mul();

// console.log(sum1, mul1);

//! arguments keyword

// var length = 4;

// function callback() {
//     console.log(this.length); // callback inside the argument -> will refer this as the method function. So length will be the default property of length inside a function, which will be 9 in this case
// }

// const object = {
//     length: 5,
//     method() {
//         console.log(arguments); // arguments refers to all the argument passed in this function as an array
//         arguments[0](); // This will call the first argument or callback function
//     }
// }

// object.method(callback, 2, 3, 4, 5, 6, 7, 8, 9);

//! Implement calc()

// const calc = {
//     total: 0,
//     add(a) {
//         this.total += a;
//         return this;
//     },
//     mul(a) {
//         this.total *= a;
//         return this;
//     },
//     sub(a) {
//         this.total -= a;
//         return this;
//     },
//     div(a) {
//         this.total /= a;
//         return this;
//     }
// }

// const result = calc.add(10).mul(5).sub(30).add(10).div(2);
// console.log(result.total);