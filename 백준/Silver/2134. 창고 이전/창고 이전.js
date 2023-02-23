let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [a, b, c]= input.shift().split(' ').map(Number);
const n = input.splice(0, a).map(Number);
const n_sum = n.reduce((cur, sum) => cur + sum);
const m = input.splice(0, b).map(Number);
const m_sum = m.reduce((cur, sum) => cur + sum);

let need = 0;
let count = 0;

for (let i = 0; i < n.length; i++) {
    need += n[i];
    for (let j = 0; j < m.length; j++) {
        if (need < m[j]) {
            m[j] -= need;
            count += ((i + j + 2) * need);
            need = 0;
            break;
        }
        else if (need > m[j]) {
            count += ((i + j + 2) * m[j]);
            need -= m[j];
            m[j] = 0;
        }
        else {
            m[j] -= need;
            count += ((i + j + 2) * need);
            need = 0;
            break;
        }
  }
}

console.log(Math.min(n_sum, m_sum), count);

