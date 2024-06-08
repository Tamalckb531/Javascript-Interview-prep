var fullname = "Tamal ckb";

var obj = {
    fullname: "Hacked Full Name",

    prop: {
        fullname: "Inside Prop",
        getFullname: function () {
            return this.fullname; // this refers to inner object -> Inside Prop
        },
    },

    getFullname: function () {
        return this.fullname; // this refers to outer object -> Hacked Full Name
    },

    getFullnameV2: () => this.fullname, // In arrow function this refers to global object

    getFullnameV3: (function () {
        return this.fullname; // IIFE don't have any this
    })(), // This is not a function, but a property
};

console.log(obj.prop.getFullname());
console.log(obj.getFullname());
console.log(obj.getFullnameV2());
console.log(obj.getFullnameV3);