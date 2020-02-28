const net = require('net');
const http = require('http');
console.log("Server initiated");

var lastId = 1;

const server = net.createServer(function(socket) {
	socket.id = lastId++;
	socket.lastMessage = new Date();
	socket.write("Status: 200");
	socket.write('<html><body><h1>Hello!</h1></body></html>');

	//TODO: implement a http response, respoding a simple html page with the content "<html><body><h1>Hello!</h1></body></html>""

	socket.on('data', function(data){
		console.log(`Data received from socket ${socket.id}: ${data}`);
		socket.lastMessage = new Date();
	});

});

function tenSecondsBefore() {
	var before = new Date();
	before.setSeconds(before.getSeconds() - 10);
	return before;
}

server.listen(1337, '127.0.0.1');
