const bl = require("bl");
const http = require("http");
const url = process.argv[2];

http.get(url, (res) => {
    res.pipe(bl((err, data) => {
        if (err) return console.error(err);
        
        console.log(data.toString().length);
        console.log(data.toString());
    }));
}).on('error', console.error);