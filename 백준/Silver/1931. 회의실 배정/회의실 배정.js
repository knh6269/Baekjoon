let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

let timeTalbe = input.map((item) => item.split(' ').map(Number));

timeTalbe = timeTalbe.sort(function comperatior(a, b) {
    if (a[1] > b[1]) return 1;
    else if (a[1] < b[1]) return -1;
    else{
        if (a[0] > b[0]) return 1;
        else if (a[0] < b[0]) return -1;
        else return 0;
    }
})

let finished = timeTalbe[0][1];
const array = [timeTalbe[0]];

for (let i = 1; i < timeTalbe.length; i++) {
    if (finished <= timeTalbe[i][0]) {
        array.push(timeTalbe[i]);
        finished = timeTalbe[i][1];
    }
}

console.log(array.length)