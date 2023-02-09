let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map((item) => item.split(" "));
const [a, need]= input.shift();
const array = input[0].map(Number).sort((a, b) => a - b);

let start = 0;
let end = array[array.length - 1];
let ss = 1;

while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] - mid >= 0) {
            sum += (array[i] - mid); 
        }
    }

    if (sum < need) {
        end = mid - 1;
    }
    if (sum > need) {
        start = mid + 1;
    }
    if (sum == need) {
        ss = 0;
        console.log(mid)
        break;
    }
}

if (ss) {
    console.log(Math.floor((start + end) / 2));
}
