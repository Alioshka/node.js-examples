// promisejs.org

function asyncMethod(message) {
    return new Promise(function (fulfill, reject) {
        setTimeout(function () {
            console.log(message);
            fulfill();
        }, 500)
    });
}

function findUser() {
    return asyncMethod('Find User');
}

function validateUser() {
    return asyncMethod('Validate User');
}

function doStuff() {
    return asyncMethod('Do some stuff');
}

asyncMethod('Open DB Connection')
    .then(findUser)
    .then(validateUser)
    .then(doStuff)
    .then(function () {
    });