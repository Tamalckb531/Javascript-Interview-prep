//? What is call ?

// var obj = { name: "Tamal" };

// function sayHello(age) {
//     return "Hello " + this.name + " is " + age;
// }

// console.log(sayHello.call(obj, 20));

//? What is Apply ?


// var obj = { name: "Tamal" };

// function sayHello(age, profession) {
//     return "Hello " + this.name + " is " + age + " and is an " + profession;
// }

// console.log(sayHello.apply(obj, [20, "Web developer"]));

//? What is bind ?

var obj = { name: "Tamal" };

function sayHello(age, profession) {
    return "Hello " + this.name + " is " + age + " and is an " + profession;
}

const bindFunc = sayHello.bind(obj);

console.log(bindFunc(24, "BlockChain Dev"));
console.log(bindFunc(20, "Web Developer"));
console.log(sayHello.bind(obj)(20, "Web Developer"));
