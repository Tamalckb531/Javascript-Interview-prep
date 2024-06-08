variable = 10;

(() => {
    foo = 100;
    console.log(variable);
    var foo = 100;
    variable = 20;
    console.log(variable);
})();

console.log(foo);//20
console.log(variable);//20
var variable = 30;