let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const map = input.map((item) => item.split(" ").map(Number));
const ripeTomato = [...new Array(map.length)].map(() => new Array(map[0].length).fill(0));
const xs = [1, -1, 0, 0];
const ys = [0, 0, -1, 1];
let answer = 0;
let count = map.length * map[0].length;

const bfs = (queue) => { 
  let idx = 0;

  while (queue.length !== idx) {
    const [x, y, pos] = queue[idx];

    for (let i = 0; i < 4; i++) {
      const dx = x + xs[i];
      const dy = y + ys[i];

      if (dx < 0 || dy < 0 || dx >= map.length || dy >= map[0].length) continue;

      if (ripeTomato[dx][dy] === 0) {
        ripeTomato[dx][dy] = 1;
        queue.push([dx, dy, pos + 1]);
        count--;
      } 
    }
    idx++;
    answer = pos;
  }
}

const queue = [];

for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[0].length; j++) {
    if (map[i][j] === 1) {
      queue.push([i, j, 0]);
      ripeTomato[i][j] = 1;
      count--;
    }
    if (map[i][j] === -1) {
      ripeTomato[i][j] = 1;
      count--;
    }
  }
}

bfs(queue);

console.log(count ? -1 : answer);