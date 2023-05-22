let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const [participants, jimin, hansu] = input.map(Number);

let array = [];
let round = 1;

for (let i = 1; i <= participants; i+=2) {
  if ((i === jimin && i + 1 === hansu) || (i === hansu && i + 1 === jimin)) {
    console.log(round);
    return ;
  }
  if (i + 1 > participants) array.push([i]);
  array.push([i, i + 1])
}

while (array.length) {
  for (let i = 0; i < array.length; i++) {
    if ((array[i][0] === jimin && array[i][1] === hansu) || (array[i][0] === hansu && array[i][1] === jimin)) {
      console.log(round);
      flag = 1;
      break;
    }
    if (array[i][0] === jimin || array[i][1] === jimin) {
      array[i] = jimin;
      continue;
    }
    if (array[i][0] === hansu || array[i][1] === hansu) {
      array[i] = hansu;
      continue;
    }
    array[i] = array[i][1];
  }
  round ++;
  const sample = [];
  for (let i = 0; i < array.length; i+=2) {
    if ((array[i] === jimin && array[i + 1] === hansu) || (array[i] === hansu && array[i + 1] === jimin)) {
      console.log(round);
      return ;
    }
    if (i + 1 > array.length) array.push([array[i]]);
    sample.push([array[i], array[i + 1]]);
  }
  array = sample;
}
