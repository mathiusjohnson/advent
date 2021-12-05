const fs = require('fs');
let input = fs.readFileSync('./input.txt', "utf8");

input = input.split('\n');

let increased = 0;

for (let i = 0; i < input.length - 1; i++) {
  if (input[i + 1] === undefined) {
    break
  }

  if (input[i] - 1 === undefined) {
    continue
  }

  let current = parseInt(input[i]) + parseInt(input[i + 1]) + parseInt(input[i + 2])
  let prev = parseInt(input[i- 1]) + parseInt(input[i]) + parseInt(input[i + 1])

  if (current > prev) {
    increased++
  }
}

console.log(increased);