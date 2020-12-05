const fs = require('fs');
let input = fs.readFileSync('./input.txt', "utf8");

input = input.split('\n');
let treeCount = 0;
let spot = 0;

for (let i = 0; i < input.length; i++) {  
  if (input[i][spot] === '#') {
    treeCount++;
  }

  if ((spot + 3) > (input[i].length - 1)) {
    spot = 2 - ((input[i].length - 1) - spot);
  } else {
    spot += 3;
  }
}

console.log(`🎄 ${treeCount}`)