let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.splice(0, 1);
input = input.map((item) => BigInt(item));

const solution = () => {
    let map = new Map();

    for (let i = 0; i <input.length; i++) {
        if (map.get(input[i])) {
            map.set(input[i], map.get(input[i]) + 1n);
            continue;
        }
        map.set(input[i], BigInt(1));
    }

    const array = 
    [...map].sort(function comperator (a, b) {
        if (a[1] > b[1]) return- 1;
        else if (a[1] < b[1]) return 1;
        else {
            if (a[0] > b[0]) return 1;
            else if (a[0] < b[0]) return -1;
            else return 0;
        }
    })

    console.log(array[0][0].toString())
    
}

solution();
