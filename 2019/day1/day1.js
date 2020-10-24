const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');
let inputs = input.split('\n');

// Convert strings to numbers
inputs.forEach((item, index, array) => {
  return (array[index] = Number(item));
});

// Divide by 3
inputs.forEach((item, index, array) => {
  return (array[index] = item / 3);
});

// Round down
inputs.forEach((item, index, array) => {
  return (array[index] = Math.floor(item));
});

// Subtract by 2
inputs.forEach((item, index, array) => {
  return (array[index] = item - 2);
});

// Sum
const sum = inputs.reduce((a, b) => {
  return a + b;
});

console.log(sum);
