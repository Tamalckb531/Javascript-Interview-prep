//! Call with function inside object

// const age = 10;

// var person = {
//     name: "Tamal",
//     age: 20,
//     getAge: function () {
//         return this.age;
//     },
// };

// var person2 = { age: 24 };

// console.log(person.getAge());

// var woo = person.getAge.call(person2);

// console.log(woo);

//! setTimeout with call

// var status = "Ok";

// setTimeout(() => {
//     const status = "Good";

//     const data = {
//         status: "Eat",
//         getStatus() {
//             return this.status;
//         },
//     };

//     console.log(data.getStatus()); // eat

//     console.log(data.getStatus.call(this)); // ok -> as setTimeOut point the global object
// }, 0);

//! Call printAnimals such that it prints all animals in object

// const animals = [
//     { species: "Lion", name: "King" },
//     { species: "Whale", name: "Queen" }
// ]

// function printAnimals(i) {
//     this.print = function () {
//         console.log("#" + i + " " + this.species + " : " + this.name);
//     }
//     this.print();
// }

// for (let i = 0; i < animals.length; i++) {
//     printAnimals.call(animals[i], i);
// }

//! Append an array to another array -> without concat

// const element1 = ['a', 'b'];
// const element2 = [1, 2, 3];

// element1.push.apply(element1, element2);

// console.log(element1);

//! Using apply to enhance Built-it functions

// const number = [5, 4, 1, 9, 2, 3];

// console.log(Math.max.apply(null, number));

//! Bound function

// function f() {
//     console.log(this); // pointing to node or window object
// }

// let user = {
//     g: f.bind(null) // we passing f function with binding null object to g function
// };

// user.g(); // This will log the window or node object

//! Bind chaining

// this doesn't exist. So a function bind with an object can't be bind with another one.

//! Password checker

// function checkPassword(success, failed) {
//     let password = "Hello";
//     if (password == "Hello") success();
//     else failed();
// }

// let user = {
//     name: "Tamal",
//     loginSuccessful() {
//         console.log(`${this.name} logged in`);
//     },
//     loginFailed() {
//         console.log(`${this.name} failed to logged in`);
//     }
// };

// checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user))

//! Partial application for login function

// function checkPassword(success, failed) {
//     let password = "asdfa";
//     if (password == "Hello") success();
//     else failed();
// }

// let user = {
//     name: "Tamal",
//     login(result) {
//         console.log(this.name + (result ? " Login Success" : " Login Failed"));
//     },
// };

// checkPassword(user.login.bind(user, true), user.login.bind(user, false))

//! Explicit binding with Arrow Function

// We can't manipulate Arrow Function with call, bind ar apply