module.exports = function(server){
    var io = require('socket.io').listen(server);
    io.sockets.on('connection', function(socket){
        //msgイベント
        socket.on('msg', function(data){
            require('./message')(io, data);
        });

        //hogeイベント
        //socket.on('hoge', function(data){
        // require('./hoge')(io, data);
        //});
    });
};