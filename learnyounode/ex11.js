const fs = require("fs");
const http = require("http");
const port = process.argv[2];
const filepath = process.argv[3];

const server = http.createServer((req, res) => {
    const readStream = fs.createReadStream(filepath)
    
    readStream.on('open', () => {
        readStream.pipe(res);
    })
    
    readStream.on('error', err => {
        res.end(err);
    })
})

server.listen(port);