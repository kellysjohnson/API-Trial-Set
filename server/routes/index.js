var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var http = require('http');
var objectData = require('./getData');

var path = require('path');

mongoose.connect("mongodb://localhost/api_trial");

var Player = mongoose.model('Player', {name: String, points: Number});

router.post('/add', function (req, res, next){
   var player = new Player ({name: req.body.name, points: req.body.points});
   player.save(function (err){
       if (err) console.log ('There is an error posting to /add', err);
       res.send(player.toJSON());
       next();
   })
});

router.get('/players', function(req, res, next){
   return Player.find({}).exec(function (err, players){
      if (err) console.log ('There is an error in router.get', err);
      res.send(JSON.stringify(players));
      next();
   });
});

router.get("/", function(req, res, next){
    res.sendFile(path.join(__dirname, '../public', 'views/index.html'));
});

router.get("/apiBirds", function (req, res, next){
    console.log('apiBirds called');
    var birdData = new objectData();
    console.log('objectData created');
    birdData.go(function(data){
        console.log('sending response');
        //console.log(data);
        res.json(data);
    });
});

console.log("Index.js ran");
//console.log(objectData);

module.exports = router;

