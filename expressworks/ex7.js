const express = require('express');
const url = require('url');

const app = express();

app.get('/search', (req, res) => {
    const query = url.parse(req.url, true).query;
    res.send(query);
})

app.listen(process.argv[2]);