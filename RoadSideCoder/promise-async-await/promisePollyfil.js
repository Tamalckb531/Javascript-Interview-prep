
function PromisePolyFill(executor) {
    let onResolve,
        onReject,
        isFullFilled = false,
        isRejected = false,
        isCalled = false,
        value;

    function resolve(val) {
        isFullFilled = true;
        value = val;

        if (typeof onResolve === "function") {
            onResolve(val);
            called = true;
        }
    }

    function reject(val) {
        isRejected = true;
        value = val;
        if (typeof onReject === "function") {
            onReject(val);
            called = true;
        }
    }

    this.then = function (callback) {
        onResolve = callback;

        if (isFullFilled && !isCalled) {
            isCalled = true;
            onResolve(value)
        }
        return this;
    }

    this.catch = function (callback) {
        onReject = callback;


        if (isFullFilled && !isCalled) {
            isCalled = true;
            onResolve(value)
        }

        return this;
    }

    try {
        executor(resolve, reject);
    } catch (err) {
        reject(err);
    }
}

const examplePromise = new PromisePolyFill((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 1000);
})

examplePromise
    .then((res) => {
        console.log("Resolved : ", res);
    })
    .catch((err) => console.log("Rejected : ", err));