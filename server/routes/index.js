var express = require('express');
var router = express.Router();
var http = require('http');
var objectData = require('./getData');

var path = require('path');

router.get("/", function(req, res, next){
    res.sendFile(path.join(__dirname, '../public', 'views/index.html'));
});

router.get("/apiBirds", function (req, res, next){
    console.log('apiBirds called');
    var birdData = new objectData();
    console.log('objectData created');
    birdData.go(function(data){
        console.log('sending response');
        console.log(data);
        res.json(data);
    });
});

console.log("Index.js ran");
//console.log(objectData);

module.exports = router;

