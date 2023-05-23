let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input.shift().split(" ").map(Number);
const array = input[0].split(" ").map(Number);
const queue = Array(N).fill(0).map((item, index) => item + index + 1);
let count = 0;

const getToken = () => {
  queue.shift();
}

const shifts = () => {
  const token = queue.shift();
  queue.push(token);
}

const pops = () => {
  const token = queue.pop();
  queue.unshift(token);
}

while (array.length) {
  if (queue[0] === array[0]) {
    getToken();
    array.shift();
    continue;
  }
  if (queue.indexOf(array[0]) <= Math.floor(queue.length / 2)) {
    shifts();
    count++;
    continue;
  }
  pops();
  count++;
}

console.log(count);
