//! Delete keyword

// const func = (function (a) {
//     delete a; //? delete is local variable so it won't delete as the delete keyword works only on objects property
//     return a;
// })(5);

// console.log(func);

//! Delete property

// const user = {
//     name: "Tamal",
//     age: 22,
//     "like life": true
// };

// delete user["like life"];
// console.log(user);

//! Dynamic key value pair

// const property = "firstName";
// const myName = "Tamal";

// const user = {
//     [property]: myName,
// };

// console.log(user);

//! Looping 

// const user = {
//     name: "Tamal",
//     age: 22,
//     "like life": true
// };

// for (const key in user) {
//     console.log(user[key]);
// }

//! make a function which multiply all the number type property of an object by two.

// let obj = {
//     a: 100,
//     b: 200,
//     c: 300,
//     nam: "Tamal"
// };

// function multiplyByTwo(obj) {
//     for (const key in obj) {
//         if (typeof obj[key] === "number") {
//             obj[key] *= 2;
//         }
//     }
// }

// multiplyByTwo(obj);

// console.log(obj);

//! what's the output of the following code ?

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123; // work as a['[object Object]']
// a[c] = 456; // work as a['[object Object]']

// console.log(a[b]); // will print the last value of 'object Object'
// console.log(a);

//! What's JSON.stringify and JSON.parse ? and there use-case 

// const user = {
//     name: "Tamal",
//     age: 22
// }

// const ObjToStr = JSON.stringify(user); // object to string

// console.log(ObjToStr, typeof ObjToStr);

// const StrToObj = JSON.parse(ObjToStr);

// console.log(StrToObj, typeof StrToObj);

//? use-case : in local storage

// localStorage.setItem("test", strObj);

// const localItem = localStorage.getItem("test");

// const convertedIntoJSON = JSON.parse(localItem);

//! Spread operator

// const user = { name: "Lydia", age: 21 };
// const admin = { admin: true, ...user }; //give all the user object in admin

// console.log(admin);

//! Specific Stringify 

// const settings = {
//     username: "Tamal",
//     level: 19,
//     health: 90
// }

// const data = JSON.stringify(settings, ["level", "health"]);
// console.log(data);

//! this keyword

//this in normal function refers to it's parent object
//this in arrow function refers to window object

// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
// }

// console.log(shape.diameter()); // 20
// console.log(shape.perimeter()); // NaN

//! Destructuring

// let user = {
//     name: "Tamal",
//     age: 24,
//     fullName: {
//         first: "Dip",
//         last: "Ckb"
//     },
// };

// const name = "Hello"

// const { name: myName } = user;

// console.log(myName);

// const { fullName: { first } } = user;

// console.log(first);

//! Rest parameter

//rest should be at the last 
// function getItems(fruitList, favoriteFruit, ...args) {
//     return [...fruitList, ...args, favoriteFruit];
// }

// const fruitList = ["a", "b"];

// const favoriteFruit = "C";

// const Items = getItems(fruitList, favoriteFruit, "D", "G", "H");

// console.log(Items);

//! Object Referencing

// let c = { getting: "Hey!" };
// let d;

// d = c; // reference of c storing in d
// c.getting = "Hello";
// console.log(d.getting);

//? 2nd question

// let person = { name: "Tamal" };
// const members = [person];

// person = null;
// // person.name = null;

// console.log(members);

//! Passing object in function and spreading it

// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//     console.log(x.number *= 2);
// };

// multiply(); //getting the default clone of value obj. Every time x is a new object in this
// multiply(); // same as prev
// multiply(value); // Now we passing reference of main value object so, operation on it's property will modify the main object
// multiply(value); // That's why it's value will be 40

//! Re-assigning Object

// function changeAgeAndRef(person) {
//     person.age = 25; // will change the main object
//     person = {
//         name: "Tamal",
//         age: 50
//     }; // will make a clone but not change the main object

//     return person;
// }

// const personObj1 = {
//     name: "Tamal",
//     age: 22
// };

// const personObj2 = changeAgeAndRef(personObj1); // store the clone

// console.log(personObj1);
// console.log(personObj2);

//! Three ways to clone a object without modifying the main object


let user = {
    name: "Tamal",
    age: 22
}

//? way 1

// const objClone = Object.assign({}, user);
// objClone.name = "Dip"; 


//? way 2

// const objClone = JSON.parse(JSON.stringify(user));
// objClone.name = "Dip";

//? way 3

const objClone = { ...user };
objClone.name = "Dip";

console.log(user, objClone);

