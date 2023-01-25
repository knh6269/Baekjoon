let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let sample = input.splice(0, 1);
sample = sample[0].split(" ");

const solution = () => {
    input = input.sort((a, b) => a - b).map((item) => Number(item));

    let start = 0;
    let end = input[input.length - 1];
    let answer = 0;

    while (start <= end) {
        let sum = 0;
        let mid = Math.floor((start + end) / 2);

        for (let i = 0; i < input.length; i++) {
            sum += Math.floor(input[i] / mid);
        }
        
        if (sum < sample[1]) {
            end = mid - 1;
        }  

        if (sum >= sample[1]) {
            start = mid + 1;
            if (mid > answer) {
                answer = mid;
            }
        }
    }

    console.log(answer)
}

solution();