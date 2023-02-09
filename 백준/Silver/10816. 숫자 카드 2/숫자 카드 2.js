let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const yourCard = input[1].split(' ').map(Number).sort((a, b ) => a - b);
const myCard = input[3].split(' ').map(Number);
const answer = [];
const array = [[yourCard[0], 1]];

for (let i = 1; i < yourCard.length; i++) {
    if (yourCard[i - 1] === yourCard[i] ) {
        array[array.length - 1][1] ++;
    } else {
        array.push([yourCard[i], 1]);
    }
}

for (let i = 0; i < myCard.length; i++) {
    let start = 0;
    let end = array.length - 1;
    let ss = 1;

    while (start <=  end) {
        const mid = Math.floor((start + end) / 2);
        
        if (array[mid][0] > myCard[i]) {
            end = mid - 1;
        }
        if (array[mid][0] < myCard[i]) {
            start = mid + 1;
        }
        if (array[mid][0] === myCard[i]) {
            answer.push(array[mid][1]);
            ss = 0;
            break;
        }
    }
    if (ss) {
        answer.push(0)
    }
}

console.log(answer.join(' '));


