let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const month = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const solution = () => {
    let sum = 0;

    for (let i = 0; i < input[0] - 1; i++) {
        sum += day[i];
    }

    sum += input[1] - 1;
   
    console.log(month[sum % 7]);
}

solution();