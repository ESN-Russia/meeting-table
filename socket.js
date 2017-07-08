var active_tables = 0;

module.exports = (io) => {
    io.on('connection', function(socket) {
        console.log("New socket connection");

        socket.on('set_timer', (msg) => {
            console.log("set_timer");
            console.log(msg);
            io.emit("set_timer", msg);
        });

        socket.on('q_list update', (msg) => {
            console.log("q_list update");
            console.log(msg);
            io.emit("q_list update", msg);
        });

        socket.on('set_presenter', (msg) => {
            console.log("set_presenter");
            console.log(msg);
            io.emit("set_presenter", msg);
        });

        socket.on('set_presenter', (msg) => {
            console.log("set_presenter");
            console.log(msg);
            io.emit("set_presenter", msg);
        });

        socket.on('update_mode', (msg) => {
            console.log("update_mode");
            console.log(msg);
            io.emit("update_mode", msg);
        });
    });
};
