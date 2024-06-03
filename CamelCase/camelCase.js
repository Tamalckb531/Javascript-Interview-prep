//? Question: Camel Case

//* Write a function called toCamelCase and toSnakeCase to convert a string to camelCase & snake_case. 


const toCamelCase = (str) => {
    str = str.trim().split(" ");
    // console.log(str);

    str = str.map((curr, index) => {
        if (index === 0) {
            return curr.toLowerCase();
        } else {
            return curr[0].toUpperCase() + curr.slice(1).toLowerCase();
        }
    });

    return str.join("");
}

const toSnakeCase = (str) => {
    str = str.trim().split(" ");

    str = str.map((curr, index) => {
        if (index === 0) {
            return curr.toLowerCase();
        } else {
            return '_' + curr.toLowerCase();
        }
    });

    return str.join("");
}

console.log(toCamelCase(" hello woRld taMal")); // out: 4
console.log(toSnakeCase(" hello woRld taMal")); // out: 4