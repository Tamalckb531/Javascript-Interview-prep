//? Question: Check Triangle Type

//* Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", "scalene". 

// todo :

//1 If all three sides are of equal length, return "equilateral". 

//2 If only two sides are of equal length, return "isosceles".

//3 If all three sides have different lengths, return "scalene".

const checkTriangleType = (a, b, c) => {

    if (a + b <= c || b + c <= a || c + a <= b) return "Not a triangle";

    if (a === b && b === c) return "equilateral";

    if (a === b || b === c || a === c) return "isosceles";

    return "scalene";

}

console.log(checkTriangleType(3, 3, 3));
console.log(checkTriangleType(3, 3, 4));
console.log(checkTriangleType(3, 4, 5));
console.log(checkTriangleType(3, 4, 10));
console.log(checkTriangleType(3, 12, 5));
console.log(checkTriangleType(10, 2, 5));
console.log(checkTriangleType(3, 2, 5));