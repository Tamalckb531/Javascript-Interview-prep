
let car1 = {
    color: "Red",
    company: "Ferrari",
}

function purchaseCar(currency, price) {
    console.log(
        `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
    );
}

//! Call Method polyfill
// purchaseCar.call(car1, "$", 50000);

// Function.prototype.myCall = function (context = {}, ...args) {
//     //? Here 'this' will represent the function we are binding with the object and context will represent the object

//     if (typeof this != 'function') {
//         throw new Error(this + " is not a function");
//     }

//     context.func = this;
//     context.func(...args);
// }

// purchaseCar.myCall(car1, "@", 1054654);

//! Apply Method polyfill
// purchaseCar.apply(car1, ["$", 50000]);

// Function.prototype.myApply = function (context = {}, args = []) {
//     //? Here 'this' will represent the function we are binding with the object and context will represent the object

//     if (typeof this != 'function') {
//         throw new Error(this + " is not a function");
//     }

//     if (!Array.isArray(args)) {
//         throw new TypeError("CreateListFormArrayLike called on non-object");
//     }

//     context.func = this;
//     context.func(...args);
// }

// purchaseCar.myApply(car1, ["@", 1054654]);

//! Bind Method polyfill
// const newFunc = purchaseCar.bind(car1, "$", 50000);
// const newFunc2 = purchaseCar.bind(car1);

// newFunc();

// newFunc2("&", 156489);

Function.prototype.myBind = function (context = {}, ...args) {
    //? Here 'this' will represent the function we are binding with the object and context will represent the object

    if (typeof this != 'function') {
        throw new Error(this + " cannot be bound as it's nor callable");
    }

    context.fn = this;
    return function (...newArgs) {
        return context.fn(...args, ...newArgs);
    }
}

const newFunc = purchaseCar.myBind(car1, "$");
const newFunc2 = purchaseCar.myBind(car1);

newFunc(50000);

newFunc2("&", 156489);