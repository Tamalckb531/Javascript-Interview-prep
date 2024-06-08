const tamal = {
    name: "Tamal Ckb",
    sayMyName: function () {
        console.log(this.name);
    },
};

setTimeout(tamal.sayMyName, 500); // setTimeOut is a web browser api so run in an different environment than the actual js code.
setTimeout(tamal.sayMyName.bind(tamal), 500); // bind combine both of the environment


//? bind can run as a function where call can't. So bind is useful in the context of callback