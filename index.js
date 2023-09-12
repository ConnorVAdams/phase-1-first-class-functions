function receivesAFunction(callback) {
    console.log(callback());
};

receivesAFunction(function () { return "This function was invoked from within receivesAFunction."});

function returnsANamedFunction() {
    return function fn() {
        console.log("This function was invoked from within receivesAFunction.");
    }
};

function returnsAnAnonymousFunction() {
    return () => console.log("This function was invoked from within receivesAFunction.");
};