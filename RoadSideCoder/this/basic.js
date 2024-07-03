// let user = {
//     name: "Tamal",
//     age: 22,
//     getDetails() {
//         const nestedArrow = () => console.log(this.name);
//         nestedArrow();
// arrow function get the this from parent's parent object
//     },
// };

// user.getDetails();

//! this in class

class User {
    constructor(n) {
        this.name = n;
    }

    getName() {
        console.log(this.name);
    }
}

const user = new User("Tamal");

user.getName();