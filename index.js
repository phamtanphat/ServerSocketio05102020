var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);
server.listen(process.env.PORT || 3000 ,() => console.log("Server Started"));

io.sockets.on('connection', function(socket){
    console.log("Co thiet bị kết nôi");
});




