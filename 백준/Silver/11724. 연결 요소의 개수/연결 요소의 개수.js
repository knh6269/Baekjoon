let  [[nodeAmount], ...lines] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((line) => line.trim().split(" ").map(Number));;

const solution = (nodes, lines) => {
  const visitied = [...Array(nodes + 1)].fill(false);
  let sets = 0;
  let nodehash = [...new Array(nodes + 1)].map(() => []);
  
  lines.map(([a, b]) => {
    nodehash[a].push(b);
    nodehash[b].push(a);
})

  for (let i = 1; i <= nodes; i++) {

    if (visitied[i]) continue;
    const stack = [];
    stack.push(...nodehash[i]);
    while (stack.length > 0) {
      let curr = stack.pop();
      if (visitied[curr]) continue;
      visitied[curr] = true;
      stack.push(...nodehash[curr]);
    }
    sets++;
  }
  console.log(sets);
};
solution(nodeAmount, lines);