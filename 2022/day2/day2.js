const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf8')
    .toString()
    .trim()
    .split('\n')
    .map((arr) => arr.split(' '));

console.log(input);

let horizontal = 0;
let vertical = 0;
let aim = 0;

input.forEach((element) => {
    console.log(element[0]);
    if (element[0] === 'forward') {
        horizontal += parseInt(element[1])
        vertical += parseInt(aim) * parseInt(element[1])
    }

    if (element[0] === 'down') {
        aim += parseInt(element[1])
    }

    if (element[0] === 'up') {
        aim -= parseInt(element[1])
    }
});

console.log(horizontal * vertical);