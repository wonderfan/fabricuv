process.env["DEBUG"] = "*";
var socket = require('socket.io-client')('http://localhost:3000');

socket.connect();
socket.emit("event","this is my test");
//socket.disconnect();