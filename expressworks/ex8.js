const express = require('express');
const fs = require("fs");
const url = require('url');

const app = express();

app.get('/books', (req, res) => {
    fs.readFile(process.argv[3], (err, data) => {
        if (err) return console.log(err);

        const object = JSON.parse(data)
        res.json(object)
    });
});

app.listen(process.argv[2]);