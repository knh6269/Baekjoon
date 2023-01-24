let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const array = [];

const print = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].join(""));
    }
}

const solution = () => {
    let sampleArray = [];

    for (let i = 0; i < input[0].length; i++) {

        if (i % 10 === 0 && i !== 0) {
            array.push(sampleArray);
            sampleArray = [];
        }  
        if (i === input[0].length - 1) {
            array.push(sampleArray);
        }
        sampleArray.push(input[0][i]); 
    }

    print(array);
}

solution();