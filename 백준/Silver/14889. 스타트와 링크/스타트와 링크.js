let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n'); 

const N = +input.shift();

input = input.map((item) => item.split(' ').map(Number));

let min = Infinity;

const calculate = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            sum += input[array[i]][array[j]] + input[array[j]][array[i]];
        }
    }
    return sum;
}

const check = (array) => {
    const visited = new Array(N).fill(false);
    const newArray = [];

    array.forEach((item) => {
        visited[item] = true;
    });

    visited.forEach((item, index) => {
        if (item === false) {
            newArray.push(index);
        }  
    }); 

    min = Math.min(min, Math.abs(calculate(array) - calculate(newArray)));
}

const dfs = (num, array) => {  
    if (array.length === N / 2) {
        check(array);
        return;
    }
    for (let i = num + 1; i < N; i++) {
        dfs(i, [...array, i])
    }
}

for (let i = 0; i < N; i++) {
    dfs(i, [i]);
}

console.log(min);