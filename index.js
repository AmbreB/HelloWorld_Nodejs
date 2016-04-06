var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var ent = require('ent');
var fs = require('fs');

app.use(express.static(__dirname + '/public'));
server.listen(3000);

var users = {};

io.sockets.on('connection', function(socket){
	socket.emit('message', 'Tu es bien connecte !');
});