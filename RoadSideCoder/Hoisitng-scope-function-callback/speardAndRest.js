function multiply(
    ...nums
    //? This is called rest operator -> taking multiple value and making an array.
) {
    console.log(nums[0] * nums[1]);
}

var arr = [5, 6];

multiply(...arr); //? This is called spread operator -> spreading all the value from the array.