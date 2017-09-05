const fs = require("fs");
const path = require("path");

module.exports = (dir, ext, callback) => {
    fs.readdir(dir, (err, files) => { 
        if (err) return callback(err);
        
        var matched = files.filter(file => path.extname(file) === '.' + ext);
        
        callback(null, matched);
    });
}