const fs = require("fs");
const path = require("path");
const process = require("process");

for (let i = 1; i <= 25; i++) {
  fs.mkdir(path.join(__dirname, `day${i}`), (err) => {
    if (err) {
      return console.log(err);
    }
    const filename = `day${i}.js`;
    process.chdir(`./day${i}`);
    fs.closeSync(fs.openSync(filename, "w"));
    process.chdir("../");
  });
}
