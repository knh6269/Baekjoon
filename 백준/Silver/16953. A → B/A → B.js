let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// let input = require('fs').readFileSync('예제.txt').toString().trim().split('\r\n');

const [A, B] = input[0].split(' ').map(Number);
 
const answer = [];

const repeat = (num, count) => { 
    if (num === B) {
        answer.push(count);
        return ;
    } 
    if (num >= 1000000000) {
        return ;
    } 
    repeat(num * 2, count + 1);
    repeat(Number(String(num) + '1'), count + 1);
}

repeat(A, 1);

if (answer.length) {
    console.log(Math.min(...answer));
    return ;
}
console.log(-1)
//2를 곱해 | 1을 가장 오른쪽에 추가해 
