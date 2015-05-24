var express = require('express');

var app = express();

app.get('/data', function(req, res){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.send();
});

module.exports = app;
