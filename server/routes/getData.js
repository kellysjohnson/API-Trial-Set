var express = require('express');
var router = express.Router();
var http = require('http');

var domain = 'http://www.xeno-canto.org/api/2/recordings';
var query = '?query=';
var countryGeneric = 'cnt:';

var unitiedStates = 'united&%20states';


// https://docs.nodejitsu.com/articles/HTTP/clients/how-to-create-a-HTTP-request
var options = domain + query + countryGeneric + unitiedStates;

callback = function(response) {
    var jsonObject = {};

    //When data returns add it to the object
    response.on('data', function (res) {
        jsonObject += res;
        console.log("response.on runs");
    });

    //the whole response has been received, so we just print it out here
    //KSJ on 'end' I think I need to post this data?
    response.on('end', function () {
        console.log("Hello World!");
        //console.log(jsonObject);
    });
};

var allTheThings = http.request(options, callback).end();


//console.log('getData js ran');
//console.log('I am console logging all The Things' + allTheThings);

module.exports = allTheThings;