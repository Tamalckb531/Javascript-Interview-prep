//? First class functions

function square(num) {
    return num * num;
}

function displaySquare(fn) {
    console.log("Square is " + fn(5));
}

// displaySquare(square);

//? IIFE

(function (x) {
    return (function (y) {
        console.log(x);
    })(2);
})(1);


//? arguments


function fn() {
    console.log(arguments);
}

fn(1, 2, 3);
