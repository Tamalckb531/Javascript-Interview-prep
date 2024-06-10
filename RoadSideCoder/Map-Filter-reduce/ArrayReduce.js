const nums = [1, 2, 3, 4];

const sum = nums.reduce((prevResult, currentValue, index, arr) => {
    return prevResult + currentValue;
}, 0);

//? PolyFills :

Array.prototype.myReduce = function (cb, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ?
            cb(accumulator, this[i], this)
            :
            this[i];
    }
    return accumulator;
}

const sum2 = nums.myReduce((prevResult, currentValue, index, arr) => {
    return prevResult + currentValue;
}, 0);

console.log(sum2);
console.log(sum2);