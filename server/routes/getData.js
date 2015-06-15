var express = require('express');
var router = express.Router();
var http = require('http');
var newURL = require('./index');

var countryGeneric = 'cnt:';

var domain = 'http://www.xeno-canto.org/api/2/recordings';
var query = '?query=';
var unitedStates = 'united&%20states';

var country = 'france';

http://www.xeno-canto.org/api/2/recordings?query=cnt:united&%20states

// https://docs.nodejitsu.com/articles/HTTP/clients/how-to-create-a-HTTP-request
var options =  domain + query + countryGeneric + country;
var jsonObject;




function GetData(){
    if (!this instanceof GetData){
        return new GetData();
    }
}

GetData.prototype.go = function(callback) {

    //options = domain + query + countryGeneric + country;

    var request = http.request(options, function (response) {
        jsonObject = '';                                            //define jsonObject as a string so as to not have the data return "[Object, object]"

        //When data returns add it to the object
        response.on('data', function (res) {
            jsonObject += res;
            console.log("response.on runs");
        });

        //the whole response has been received, so we just print it out here
        response.on('end', function () {
            console.log('At response.end');
            jsonObject = JSON.parse(jsonObject);                    //Here, we take the string and make it a jsonObject
            callback(jsonObject);
        });

    });

    request.end();
};

module.exports = GetData;