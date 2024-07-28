//!Synchronous Vs Asynchronous Code

// console.log("start");

// setTimeout(() => {
//     console.log("This is in middle");
// }, 1000);

// console.log("finish");

//!Callback

// console.log("start");

// function importantAction(username, cb) {
//     setTimeout(() => {
//         cb(`Subscribe to ${username}`);
//     }, 1000);
// }

// const message = importantAction("Tamal", function (msg) {
//     console.log(msg);
// })

// console.log(message);//? undefined

// console.log("stop");

//? callback helps us to execute function after previous function got executed

//! Promises

// console.log("start");

// const sub = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const result = true;
//         if (result) resolve("Hello Tamal! How are you ?");
//         else reject(new Error("Hey! You are not Tamal."));
//     }, 500);
// });

// console.log(sub);

// setTimeout(() => {
//     console.log(sub);
// }, 1000);

// sub.then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.log(error);
// })

// console.log("end");

//! Promise chaining

// const first = () => {
//     return new Promise((resolve, reject) => {
//         console.log("First function executed");
//         resolve("Data from first function");
//     })
// }

// const secondFunction = (data) => {
//     return new Promise((resolve, reject) => {
//         console.log("Second function executed with data: " + data);
//         resolve("Data from second function");
//     });
// };

// const thirdFunction = (data) => {
//     return new Promise((resolve, reject) => {
//         console.log("Third function executed with data: " + data);
//         resolve("Data from third function");
//     });
// };

// first()
//     .then(data => secondFunction(data))
//     .then(data => thirdFunction(data))
//     .then(data => {
//         console.log("all function executed");
//     })
//     .catch(err => {
//         console.log("Error occurred : ", err);
//     })

//! Promise combinator

/*Promise.all()*/ //? get promise as an array and execute all. It will fail all if one is failed.

/*Promise.race()*/ //? get promise as an array and execute all. It will execute one promise that got resolved first.

/*Promise.allSettled() */ //? Works like .all but don't fail all promise if one got failed.

/*Promise.any()*/ //? Only return the first fulfill promise and return that.

//! Async-Await

// console.log("Start");

// const first = (data) => {
//     return new Promise((resolve, reject) => {
//         console.log(data);
//         resolve("Data from first function");
//     })
// }

// const secondFunction = (data) => {
//     return new Promise((resolve, reject) => {
//         console.log("Second function executed with data: " + data);
//         resolve("Data from second function");
//     });
// };

// const thirdFunction = (data) => {
//     return new Promise((resolve, reject) => {
//         console.log("Third function executed with data: " + data);
//         resolve("Data from third function");
//     });
// };

// const result = async () => {
//     const msg1 = await first("This is from the first");
//     const msg2 = await secondFunction("This is from the second");
//     const msg3 = await thirdFunction("This is from the third");

//     console.log({ msg1, msg2, msg3 });
// }

// result();

// console.log("Stop");
