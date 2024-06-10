const nums = [1, 2, 3, 4];

const multiplyThree = nums.map((num, index, arr) => {
    return num * 3 + index;
})


//? Polyfills :

Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }

    return temp;
}

const multiplyThree2 = nums.myMap((num, index, arr) => {
    return num * 3 + index;
})

console.log(multiplyThree);
