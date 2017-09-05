const fs = require("fs");
const filepath = process.argv[2];
const file = fs.readFileSync(filepath);

console.log(file.toString().split('\n').length - 1);