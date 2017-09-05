const http = require('http');
const map = require('through2-map');
const url = require('url');
const port = process.argv[2];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const date = new Date(parsedUrl.query.iso);
    let result;
    
    if (/\/api\/parsetime/.test(req.url)) {
        result = {
                     hour: date.getHours(),
                     minute: date.getMinutes(),
                     second: date.getSeconds()
                 }
    }

    if (/\/api\/unixtime/.test(req.url)) {
        result = { unixtime: date. getTime() }
    }

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(port);