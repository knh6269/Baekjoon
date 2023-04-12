let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [length, target] = input.map(Number)
//배열
let array = [...new Array(length)].map((item) => new Array(length).fill(0))

//현재 내 위치
let location = [0, 0]

//숫자
let num = length ** 2

let start = 0;

const check = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            if (array[i][j] === target) {
                console.log(i + 1, j + 1);
                return ;
            }
        }
    }
}


while (num > 1) {
    for (let i = start; i < length - start - 1; i++) {
        array[location[0]][location[1]] = num--
        if (location[0] === length - 1) continue; 
        location[0] += 1
    }
    
    for (let i = start; i < length - start - 1; i++) {
        array[location[0]][location[1]] = num--
        if (location[1] === length - 1) continue; 
        location[1] += 1
    }

    for (let i = length - start - 1; i > start; i--) {
        array[location[0]][location[1]] = num--
        if (location[0] === 0) continue; 
        location[0] -= 1
    }

    for (let i = length - start - 1; i > start; i--) {
        array[location[0]][location[1]] = num--
        if (location[1] === 0) continue; 
        location[1] -= 1
    }

    start ++
    location = [start, start]
}

array[Math.floor(length/2)][Math.floor(length/2)] = 1
console.log(array.map((item) => item.join(' ')).join('\n'))

check(array)