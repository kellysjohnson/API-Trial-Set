var express = require('express');
var app = express();
var http = require('http');
var path = require('path');

var index = require('./routes/index');

app.use('/', index);

app.use(express.static(path.join(__dirname, 'public')));

app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), function(){
    console.log("App is running on port: ", app.get('port'));

});


module.exports = app;

