var express = require('express');
var router = express.Router();
var http = require('http');
var objectData = require('./getData');

var path = require('path');

//var domain = 'http://www.xeno-canto.org/api/2/recordings';
//var query = '?query=';
//var countryGeneric = 'cnt:';
//
//var unitiedStates = 'united&%20states';


router.get("/*", function(req, res, next){
    var file = req.params[0] || 'views/index.html';

    res.sendFile(path.join(__dirname, '../public', file));
});

router.get("/apiBirds", function (req, res, next){
    res.json(objectData);
    console.log("I got apiBirds");
});

console.log("Index.js ran");
//console.log(objectData);

module.exports = router;

