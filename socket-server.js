//process.env["DEBUG"] = "*";
const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', socket => {
  socket.on('event', data => { 
      console.log(data);
  });
  socket.on('disconnect', () => { 
      socket.broadcast.emit('disconnet',"disconnected");
  });
});
server.listen(3000);