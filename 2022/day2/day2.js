const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf8')
    .toString()
    .trim()
    .split('\n')
    .map((arr) => arr.split(' '));

let horizontal = 0;
let vertical = 0;
let aim = 0;

input.forEach((element) => {
  const firstElement =  parseInt(element[1]); 
  if (element[0] === 'forward') {
      horizontal += firstElement
      vertical += parseInt(aim) * firstElement
  }
  if (element[0] === 'down') {
      aim += firstElement
  }
  if (element[0] === 'up') {
      aim -= firstElement
  }
});

console.log(horizontal * vertical);