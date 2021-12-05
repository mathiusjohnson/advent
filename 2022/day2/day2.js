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
        console.log('forward checks out', parseInt(element[1]));
        horizontal += parseInt(element[1])
        vertical += parseInt(aim) * parseInt(element[1])
    }

    if (element[0] === 'down') {
        console.log('down checks out', parseInt(element[1]));
        aim += parseInt(element[1])
    }

    if (element[0] === 'up') {
        console.log('up checks out', parseInt(element[1]));
        aim -= parseInt(element[1])
    }
});

console.log(horizontal * vertical);

/*

down X increases your aim by X units.
up X decreases your aim by X units.
forward X does two things:
It increases your horizontal position by X units.
It increases your depth by your aim multiplied by X.

*/