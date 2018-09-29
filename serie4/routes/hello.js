const express = require('express');

let app = express();

app.get('/hello/:name', (req, res) => {
    let hello =  req.params.name;
    res.json({
        ok: true,
        hello
    });
});

module.exports = app;