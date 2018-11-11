var express = require('express');
var app = express();

app.get('/hello',(req, res, next) => {
    res.status(200).json({
        message: 'Hello'
    })
})

module.exports = app;