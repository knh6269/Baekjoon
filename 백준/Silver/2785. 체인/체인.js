let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

input = input[0].split(' ').map(Number).sort((a, b) => a- b);

let length = input.length;
let chain = 0;

for (let chains of input) {
    if (chains == length - 1) {
        console.log(chain + chains);
        return ;
    }
    else if (chains > length - 1) {
        console.log(chain + length - 1);
        return ;
    }
    else {
        length -= (chains + 1);
        chain += chains;
    }

}



