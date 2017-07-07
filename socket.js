var active_tables = 0;

module.exports = (io) => {
    io.on('connection', function(socket) {
        console.log("New socket connection");

        socket.on('set_timer', (msg) => {
            console.log("set_timer");
            console.log(msg);
            io.emit("set_timer", msg);
        });
    });
};
