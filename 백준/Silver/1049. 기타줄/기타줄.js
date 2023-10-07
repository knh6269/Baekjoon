let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// let input = require('fs').readFileSync('예제.txt').toString().trim().split('\r\n');

const [N, M] = input.shift().split(' ').map(Number);
 
let totalMin = Infinity;
let oneMin = Infinity;

input.forEach((item) => {
    const [total, one] = item.split(' ').map(Number);
    
    totalMin = Math.min(total, totalMin);
    oneMin = Math.min(one, oneMin);
});

if (totalMin >= oneMin * 6) {
    console.log(oneMin * N);
    return ;
}

const ver1 = (Math.floor(N / 6)) * totalMin + ((N % 6) * oneMin);
const ver2 = (Math.floor(N / 6) + 1) * totalMin;

console.log(Math.min(ver1, ver2));
