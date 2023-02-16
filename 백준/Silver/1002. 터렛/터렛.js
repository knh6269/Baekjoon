let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

input = input.map((item) => item.split(' ').map(Number));

const getDistance = (x1, y1, x2, y2) => {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

const getContactCount = (distance, sum, sub) => {
    if (distance === 0 && sub === 0) {
        return -1;
    }
    if (distance > sum || distance < sub) {
        return 0;
    }
    if (distance == sum || distance == sub) {
        return 1;
    }
    return 2;
}

for (let i = 0 ; i < input.length; i++) {
    const [x1, y1, d1, x2, y2, d2] = input[i];

    let distance = getDistance(x1, y1, x2, y2);
    let sum = d1 + d2;
    let sub = Math.abs(d1 - d2);

    console.log(getContactCount(distance, sum, sub));
}

