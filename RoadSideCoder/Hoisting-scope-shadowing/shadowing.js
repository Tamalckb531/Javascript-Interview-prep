
function test() {
    var a = "Hi";
    let b = "Bye";

    if (true) {
        var a = "hola"; //shadowing
        // var b = "Hi"; //illegal shadowing
        console.log(a);
        // console.log(b);
    }
    console.log(a);

}

test();