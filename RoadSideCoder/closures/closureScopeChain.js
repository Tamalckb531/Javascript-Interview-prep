var e = 10;
function sum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d + e;
            }
        }
    }
}

console.log(sum(1)(2)(3)(4));

//? This is also called currying