var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var http = require('http');
var objectData = require('./getData');

var path = require('path');


// Build newURL
var domain = 'http://www.xeno-canto.org/api/2/recordings';
var query = '?query=';
var countryGeneric = 'cnt:';

var unitedStates = 'united&%20states';


// https://docs.nodejitsu.com/articles/HTTP/clients/how-to-create-a-HTTP-request
var options =  domain + query + countryGeneric + unitedStates;
var jsonObject;



// Take the GetData() module and put it into the index.js to write the entire URL on the client side, and then attempt to pass it back to the server
function GetData(){
    if (!this instanceof GetData){
        return new GetData();
    }
}

// Allow users to be added to the database, by post and get.
//mongoose.connect("mongodb://localhost/api_trial");
mongoose.connect("mongodb://kmshimko:Hope44@ds059888.mongolab.com:59888/api_trial");

var Player = mongoose.model('Player', {name: String, points: Number});

router.post('/add', function (req, res, next){
   var player = new Player ({name: req.body.name, points: req.body.points});
   player.save(function (err){
       if (err) console.log ('There is an error posting to /add', err);
       res.send(player.toJSON());
       next();
   });
});

router.get('/players', function(req, res, next){
   return Player.find({}).exec(function (err, players){
      if (err) console.log ('There is an error in router.get', err);
      res.send(JSON.stringify(players));
      next();
   });
});


router.post('/remove', function(req, res, next) {
    var xplayer = Player.find({name: req.body.name});
        xplayer.remove(function(error) {
        if (error) console.log('Error when using router.post / remove', error);
        });
            next();
    });


// Router for the project
router.get("/", function(req, res, next){
    res.sendFile(path.join(__dirname, '../public', 'views/index.html'));
});


// router.get for the api call
router.get("/apiBirds", function (req, res, next){
    console.log('apiBirds called:' + req.query.country);
    //req.body
    var birdData = new objectData();
    console.log('objectData created');
    birdData.go(function(data){
        console.log('sending response');
        //console.log(data);
        res.json(data);
    });
});


////Is this a good idea???? Then export newURL to get data?????
//router.post ('/infoNeeded', function (req, res, next){
//    var newURL = domain + query + countryGeneric + req.query.country;
//    res.send(newURL);
//});

console.log("Index.js ran");
//console.log(objectData);

module.exports = router;
//module.exports.newURL = newURL;

