module.exports = function(io, data) {
    io.sockets.emit('msg', data);
    console.log(data);
}