for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i); // print all 10
    }, 0);
}

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i); // print 0-10
    }, 0);
}