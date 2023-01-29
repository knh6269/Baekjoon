let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.splice(0, 1);

const solution = () => {
    input = input.map((item) => item.split(' '));

    for (let i = 0; i < input.length; i++) {
        input[i][0] = Number(input[i][0])
    }

    input.sort((function comperator (a, b) {
        if (a[0] > b[0]) return 1;
        else if (a[0] < b[0]) return -1;
        else {
            return 0;
        }
    }))
    
    input = input.map((item) => item.join(" "))
    console.log(input.join('\n'));
}

solution();
