let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const array = input.map((item) => item.split(' ').map(Number))
const sample = [...new Array(5)].map(() => new Array(5).fill(false))
const chulsu = array.splice(0, 5)
const teacher = array

const check = () => {
    let count = 0;
    let flag1 = 1
    //대각선
    for (let i = 0; i < 5; i++) {
        if (!sample[i][i]) {
        flag1 = 0    
        }
    }
    
    if (flag1) {
        count++
    }

    //대각선
    let flag2 = 1
    for (let i = 0; i < 5; i++) {
        if (!sample[i][4 - i]) {
            flag2 = 0
        }
    }
    if (flag2) {
        count++
    }

    //세로
    for (let i = 0; i < 5; i++) {
        let flag3 = 1;
        for (let j = 0; j < 5; j++) {
            if (!sample[i][j]) {
                flag3 = 0
            }
        }
        if (flag3) {
            count++
        }
    }

    //가로
    for (let i = 0; i < 5; i++) {
        let flag4 = 1;
        for (let j = 0; j < 5; j++) {
            if (!sample[j][i]) {
                flag4 = 0
            }
        }
        if (flag4) {
            count++
        }
    }

    return count
}

const erase = (num) => {
    for (let i = 0; i < chulsu.length; i++) {
        for (let j = 0; j < chulsu[0].length; j++) {
            if (chulsu[i][j] === num) {
                sample[i][j] = true
                return check()
            }
        }
    }
}

for (let i = 0; i < teacher.length; i++) {
    for (let j = 0; j < teacher[0].length; j++) {
        if (erase(teacher[i][j]) >= 3) {
            console.log(i * 5 + j + 1)
            return ;
        }
    }
}