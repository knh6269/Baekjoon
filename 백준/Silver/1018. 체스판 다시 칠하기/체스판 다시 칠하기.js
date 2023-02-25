let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
input = input.map((item) => item.split(''));

let white = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW']
let black = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB']
let answer  = 90;

for (let i = 0; i < input.length - 7; i++) {
    for (let j = 0; j < input[0].length - 7; j++) {
        let array = input.slice(i, i + 8);
        array = array.map((item) => item.slice(j, j + 8).join(""));

        let checkWhite = 0;
        let checkBlack = 0;

        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[0].length; j++) {
                if (array[i][j] !== white[i][j]) {
                    checkWhite++;
                } 
                if (array[i][j] !== black[i][j]) {
                    checkBlack++;
                }
            }
        }
        let min = Math.min(checkBlack, checkWhite);

        if (min < answer) {
            answer = min;
        }
    }
}
console.log(answer)