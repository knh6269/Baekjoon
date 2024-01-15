let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());

const dice = input[0].split(' ').map(Number);
  
let min_1 = Math.min(...dice);
let min_2 = Infinity;
let min_3 = Infinity;

if (N === 1) {
    const max = Math.max(...dice);
    const sum = dice.reduce((acc, cur) => acc + cur);
    console.log(sum - max);
    return ;
}

const getMin = () => {
    for (let i = 0; i < dice.length - 1; i++) { 
        
        for (let j = i + 1; j < dice.length; j++) { 
            if (i + j === 5) continue;  
            min_2 = Math.min(dice[i] + dice[j], min_2)
            for (let k = j + 1; k < dice.length; k++) { 
                if (i + k === 5) continue;
                if (j + k === 5) continue;  
                min_3 = Math.min(dice[i] + dice[j] + dice[k] , min_3);
            }
        } 
    } 
}

const calculate = () => { 
    const result_1 = min_1 * ((5 * (N ** 2)) - 16 * N + 12);
    const result_2 = min_2 * (8 * N - 12);
    const result_3 = min_3 * 4 ;
    console.log((result_1 + result_2 + result_3))
}
 
getMin();  
calculate();
 