var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);
server.listen(process.env.PORT || 3000 ,() => console.log("Server Started"));


app.get('/' , function(req,res){
    io.sockets.on('connection', function(socket){
        console.log("Co thiet bị kết nôi");
    });
})



