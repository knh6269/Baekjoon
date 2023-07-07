let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input.shift());

const array = input.map((item) => item.split(''));

const sampleAnswer = [];

const check = (array, row, col, n) => {
    const x = [1, 1, 1, 0, 0, -1, -1, -1];
    const y = [0, -1, 1, -1, 1, 0, -1, 1 ];

    let count = 0;

    for (let i = 0; i < x.length; i++) {
        const dx = row + x[i];
        const dy = col + y[i];

        if (dx < 0 || dx >= n || dy < 0 || dy >= n) continue;
        if (array[dx][dy] === '*') {
            count++;
        }
    }

    return count;
}

for (let i = 0; i < n; i++) {
    const sample = [];

    for (let j = 0; j < n; j++) {
        sample.push(check(array, i, j, n));
    }

    sampleAnswer.push(sample);
}

let flag = 0;

for (let i = n; i < input.length; i++) {
    for (let j = 0; j < n; j++) {
        if (array[i][j] === '.') {
            sampleAnswer[i - n][j] = '.';
        }
        if (array[i][j] === 'x' && input[i - n][j] === '*') {
            flag = 1;
        }
    }
}

if (flag) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (array[i][j] === '*') {
                sampleAnswer[i][j] = '*';
            }
        }
    }
}

const answer = sampleAnswer.map((item) => item.join(''));

console.log(answer.join('\n'));