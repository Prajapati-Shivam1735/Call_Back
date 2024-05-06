function greetWithPromise(name) {
    return new Promise((resolve, reject) => {
        if (typeof name === 'string') {
            resolve(`Hello, ${name}!`);
        } else {
            reject(new Error('Input should be a string.'));
        }
    });
}

const name = "Mithun";
greetWithPromise(name)
    .then(message => {
        console.log(message); 
    })
    .catch(error => {
        console.error(error);
    });
