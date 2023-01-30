let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input[0] = input[0].split(' ');
const index = input[0][1];
let array = input[1].split(' ');
array = array.map((Number))

const solution = () => {
   array.sort((a,b) => a- b);
   console.log(array[index - 1]);
    
}

solution();
