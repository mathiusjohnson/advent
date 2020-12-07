const fs = require('fs');
let input = fs.readFileSync('./input.txt', "utf8");

input = input.split('\n\n');

let passports = input.map(x => x.replace(/[\n]/g, ' '));

passports = passports.filter(passport => passport.includes('byr') && passport.includes('iyr') && passport.includes('eyr') && passport.includes('hgt') && passport.includes('hcl')  && passport.includes('ecl')  && passport.includes('pid'));

console.log(passports.length);