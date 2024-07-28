//! Sync and async code inside Promise 

// console.log("Start");

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1); //sync code
//     resolve(2); //async code
//     console.log(3); //sync code
// });

// promise1.then((res) => {
//     console.log(res);
// })

// console.log("End");

//! Recursive promise chaining

// function job(state) {
//     return new Promise(function (resolve, reject) {
//         if (state) resolve("success");
//         else reject("error");
//     });
// }

// let promise = job(true);

// promise
//     .then(function (data) {
//         console.log(data);

//         return job(false);
//     })
//     .catch(function (error) {
//         console.log(error);

//         return "Error caught";
//     })
//     .then(function (data) {
//         console.log(data);

//         return job(true);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })


//! One promise inside another promise

// const firstPromise = new Promise((resolve, reject) => {
//     resolve("First !");
// });

// const secondPromise = new Promise((resolve, reject) => {
//     resolve(firstPromise);
// });

// secondPromise
//     .then((res) => {
//         return res; // res have firstPromise
//     })
//     .then((res) => console.log(res))

//! Recursive Promise solving 

function importantAction(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Add ${username}`);
        }, 1000);
    });
}

function likeTheVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Like the ${video}`);
        }, 1000);
    });
}

function shareTheVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Share ${video}`);
        }, 1000);
    });
}

function promRecurse(funcPromises) {
    if (funcPromises.length == 0) return;

    const currPromise = funcPromises.shift(); //? kick the first element out

    currPromise
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

    promRecurse(funcPromises);
}

promRecurse([
    importantAction("Tamal"),
    likeTheVideo("Tamal's like video"),
    shareTheVideo("Tamal's share video"),
])