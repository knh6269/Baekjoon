let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number)
const maps = input.map((item) => item.split(' ').map(Number))
const chicken = []
const house = []
const answer = []

for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
        if (maps[i][j] == '2') {
            chicken.push([i, j])
        }
        if (maps[i][j] == '1'){
            house.push([i, j])
        }
    }
}

const check = (array) => {
    let total = 0

    for (let i = 0; i < house.length; i++) {
        let min = Infinity
        for (let j = 0; j < array.length; j++) {
            const sum = Math.abs(array[j][0] - house[i][0]) 
                            + Math.abs(array[j][1] - house[i][1])
            
            if (min > sum) {
                min = sum
            }
        }
        total += min
    }
    answer.push(total)
}

const dfs = (array, index) => {
    if (array.length === M) {
        check(array)
        return ;
    }
    
    for (let i = index + 1; i < chicken.length; i++) {
        dfs ([...array, chicken[i]], i)
    }
}


for (let i = 0; i < chicken.length; i++) {
    dfs([chicken[i]], i)
}

console.log(Math.min(...answer))