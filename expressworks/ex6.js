const bodyparser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyparser.urlencoded({ extended: false }))

app.put('/message/:id', (req, res) => {
    res.send(require('crypto')
            .createHash('sha1')
            .update(new Date().toDateString() + req.params.id)
            .digest('hex')
    )
});

app.listen(process.argv[2]);