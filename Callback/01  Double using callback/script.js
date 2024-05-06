function doubleArray(arr, callback) {

    return arr.map(callback);
}

function double(num) {
    return num * 2;
}

const array = [1, 2, 3, 4, 5];
const doubledArray = doubleArray(array, double);
console.log(doubledArray); 

