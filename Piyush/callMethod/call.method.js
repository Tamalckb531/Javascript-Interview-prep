const john = {
    name: "John Doe",
}

function sayMyName() {
    console.log(this.name);
}

sayMyName();
sayMyName.call(john); //call set the function with the context of object 