var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var index = require('./routes/index');

app.use(bodyParser.json());
app.use('/', index);

app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), function(){
    console.log("App is running on port: ", app.get('port'));

});

app.get('/login', function(req, res) {
    res.sendfile('/views/login.html');
});


module.exports = app;

