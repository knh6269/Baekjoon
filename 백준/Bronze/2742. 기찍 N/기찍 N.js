let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = () => {
   let string = "";

   for (let i = 1; i <= input; i++) {
    string += i;
    string += '\n';
   }

   string = string.split("\n")
   string.pop();
   string = string.reverse().join("\n");

   console.log(string)
}

solution();