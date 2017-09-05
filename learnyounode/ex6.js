const mymodule = require('./ex6-module.js')
const dir = process.argv[2]
const ext = process.argv[3]

mymodule(dir, ext, (err, matched) => {
    if (err) return console.log(err);
    
    matched.map(file => console.log(file));
});