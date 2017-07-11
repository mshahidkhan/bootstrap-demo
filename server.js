var express = require('express');
var app = express();

var port = 8001;

app.use(express.static(__dirname + '/'));
app.listen(port);

console.log('Server started at : ' + port);