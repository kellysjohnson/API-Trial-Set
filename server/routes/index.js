var express = require('express');
var router = express.Router();
var http = require('http');

var path = require('path');

var domain = 'http://www.xeno-canto.org/api/2/recordings';
var query = '?query=';
var countryGeneric = 'cnt:';

var unitiedStates = 'united&%20states';


router.get("/*", function(req, res, next){
    var file = req.params[0] || 'views/index.html';

    res.sendFile(path.join(__dirname, '../public', file));
});

//router.get("/api/birds", function (req, res, next){
//    res.json(http.request(options, callback).end());
//});

console.log("Index.js ran");

// https://docs.nodejitsu.com/articles/HTTP/clients/how-to-create-a-HTTP-request
var options = domain + query + countryGeneric + unitiedStates;

callback = function(response) {
    var jsonObject = {};

    //When data returns add it to the object
    response.on('data', function (res) {
        jsonObject += res;
    });

    //the whole response has been received, so we just print it out here
    response.on('end', function () {
        console.log("Hello World!");
        console.log(jsonObject);
    });
};

var allTheThings = http.request(options, callback).end();
console.log(allTheThings);

module.exports = router;

