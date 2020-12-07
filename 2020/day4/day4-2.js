const fs = require('fs');
let input = fs.readFileSync('./input.txt', "utf8");

input = input.split('\n\n');

input = input.map(passport => passport.replace(/[\n]/g, ' '));
input = input.filter(passport => passport.includes('byr') && passport.includes('iyr') && passport.includes('eyr') && passport.includes('hgt') && passport.includes('hcl')  && passport.includes('ecl')  && passport.includes('pid'));
console.log(input.length);
input = input.map(passport => passport.split(' '));

for (let item of input) {
  for (let i in item) {
    item[i] = item[i].split(':');
  }
}

let passports = [];

for (let item of input) {
  let passport = {};
  for (let i in item) {
    passport[item[i][0]] = item[i][1];
  }
  passports.push(passport);
}

let validCount = 0;

for (let passport in passports) {
  const ecls = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

  if (passports[passport].byr.length === 4 && Number(passports[passport].byr) >= 1920 && Number(passports[passport].byr) <= 2002) {
    if (passports[passport].iyr.length === 4 && Number(passports[passport].iyr) >= 2010 && Number(passports[passport].iyr) <= 2020) {
      if (passports[passport].eyr.length === 4 && Number(passports[passport].eyr) >= 2020 && Number(passports[passport].eyr) <= 2030) {
        if (passports[passport].hgt.endsWith('cm') && Number(passports[passport].hgt.replace('cm', '')) >= 150 && Number(passports[passport].hgt.replace('cm', '')) <= 193 || passports[passport].hgt.endsWith('in') && Number(passports[passport].hgt.replace('in', '')) >= 59 && Number(passports[passport].hgt.replace('in', '')) <= 76) {
          if (passports[passport].hcl[0] === '#' && passports[passport].hcl.length === 7 && /^#[0-9A-F]{6}$/i.test(passports[passport].hcl)) {
            if (ecls.includes(passports[passport].ecl)) {
              if (passports[passport].pid.length === 9) {
                validCount++;
              }
            }
          }
        }
      }
    }
  }
}

console.log(validCount);