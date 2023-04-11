let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let readlineIdx = 0;

const readInput = () => input[readlineIdx++];

let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];
let answerLoca = { X: 0, Y: 2 };
function solution(table, t) {
  let cnt = t * t;
  let X = 0;
  let Y = 0;
  let nowDir = 0;
  let moveCnt = t;
  while (true) {
    if (nowDir === 1) {
      moveCnt--;
    }
    if (nowDir === 3) {
      moveCnt--;
    }

    for (let i = 0; i < moveCnt; ++i) {
      X = X + dx[nowDir];
      Y = Y + dy[nowDir];
      table[X][Y] = cnt--;
      if (table[X][Y] === findNum) {
        answerLoca = { X, Y };
      }
    }


    if (cnt === 0) {
      return;
    }
    nowDir = (nowDir + 1) % 4;
  }
}

let findNum;
function main() {
  let t = readInput();
  t = parseInt(t, 10);
  findNum = parseInt(readInput(), 10);
  let table = new Array(t + 1);
  for (let i = 0; i < t + 1; ++i) {
    table[i] = new Array(t).fill(0);
  }
  solution(table, t);
  for (let y = 1; y < t + 1; ++y) {
    let string = "";
    for (let x = 0; x < t; ++x) {
      if (x === t - 1) {
        string += table[x][y];
        break;
      }
      string += table[x][y] + ' ';
    }
    console.log(string);
  }
  console.log(answerLoca.Y, answerLoca.X + 1);

}

main();