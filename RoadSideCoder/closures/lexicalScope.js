//? Lexical scope
var username = "Roadside Coder";

function local() {
    console.log(username);
}

local();

//? question 3

function subscribe() {
    var uname = "Tamal";
    function displayName() { //This is closure
        console.log(uname);
    }
    displayName();
}

subscribe();

//! closure -> It gives the outer function scope to the inner function. Closure created every time when a function is created.

//? double call

function subscribe2() {
    var uname = "Tamal";
    function displayName(num) { //This is closure
        console.log(uname, num);
    }
    return displayName
}

subscribe2()(2);