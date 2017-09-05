const http = require("http");

const urls = process.argv.slice(2, process.argv.length);
const pages = [];
let waiting = 0;

urls.map((url, idx) => {
    waiting++;

    http.get(url, (res) => {
        let allData = "";

        res.setEncoding('utf-8');
        res.on('data', data => allData += data);
        res.on('end', () => {
            pages[idx] = allData;
            waiting--;
            if (!waiting) pages.map(page => console.log(page));
        })
    })
})