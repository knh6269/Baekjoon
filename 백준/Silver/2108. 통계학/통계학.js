let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
const number = input.map(Number);

const average = (array) => {
    const sum = array.reduce((cur, acc) => cur + acc);
    const ave = Math.round(sum / array.length);
    if (ave === -0) {
        return 0;
    }
    return ave;
}

const center = (array) => {
    const sample = array.sort((a,b) => a- b);
    return sample[Math.floor(sample.length / 2)];
}

const many = (array) => {
    const set = new Map();

    for (let i = 0; i < array.length; i++) {
        if (set.get(array[i])) {
            set.set(array[i], set.get(array[i]) + 1);
            continue;
        } 
        set.set(array[i], 1);
    }
    
    let keyAscArray = [...set];

    keyAscArray = keyAscArray.sort(function comperator (a, b) {
        if (a[1] < b[1]) return 1;
        else if (a[1] > b[1]) return -1;
        else {
            if (a[0] > b[0]) return 1;
            else if (a[0] < b[0]) return -1;
            else return 0
        }
    })


    if (keyAscArray.length > 1 &&keyAscArray[0][1] === keyAscArray[1][1]) {
        return keyAscArray[1][0];
    }
    return keyAscArray[0][0];
}

const arrange = (array) => {
    const max = Math.max(...array);
    const min = Math.min(...array);

    return max - min;
}

console.log(average(number))
console.log(center(number))
console.log(many(number))
console.log(arrange(number))