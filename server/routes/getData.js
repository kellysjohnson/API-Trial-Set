var express = require('express');
var router = express.Router();
var http = require('http');

var domain = 'http://www.xeno-canto.org/api/2/recordings';
var query = '?query=';
var countryGeneric = 'cnt:';

var unitiedStates = 'united&%20states';


// https://docs.nodejitsu.com/articles/HTTP/clients/how-to-create-a-HTTP-request
var options =  domain + query + countryGeneric + unitiedStates;
var jsonObject;




function GetData(){
    if (!this instanceof GetData){
        return new GetData();
    }
}

GetData.prototype.go = function(callback) {

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